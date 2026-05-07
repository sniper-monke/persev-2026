const fs = require('fs');
const path = require('path');

const projectDir = path.join(__dirname, 'persev-2025-website', 'public');
const bundlePath = path.join(projectDir, 'assets', 'index-GnKc23iY.js');

function replaceExact(source, find, replace, label) {
  if (source.includes(replace)) {
    console.log(`${label} already patched`);
    return source;
  }

  if (!source.includes(find)) {
    throw new Error(`Could not find expected snippet for ${label}`);
  }

  console.log(`${label} patched`);
  return source.replace(find, replace);
}

// --- PATCH 0: Main 3D bundle - make iOS rendering much cheaper ---
let bundle = fs.readFileSync(bundlePath, 'utf8');

bundle = replaceExact(
  bundle,
  'const isMobileWebKit=/iP(hone|od|ad)/.test(navigator.userAgent),OD=1e3/60,MT=',
  'const isMobileWebKit=/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,OD=1e3/60,MT=',
  'bundle: iOS detection'
);

bundle = replaceExact(
  bundle,
  'const{gl:u}=Hs(),f=qg("/envmap.jpg"),[h,p]=Ie.useState(null),m=qg(kD);Ie.useEffect(()=>{if(f){const S=new M_(f.image.height);S.fromEquirectangularTexture(u,f),p(S.texture),Xs.getState().setLoaded(!0)}},[f,u]);',
  'const{gl:u}=Hs(),f=qg(isMobileWebKit?"/gradients/gradient-primary.png":"/envmap.jpg"),[h,p]=Ie.useState(null),m=qg(isMobileWebKit?["/gradients/gradient-primary.png"]:kD);Ie.useEffect(()=>{if(isMobileWebKit){Xs.getState().setLoaded(!0);return}if(f){const S=new M_(f.image.height);S.fromEquirectangularTexture(u,f),p(S.texture),Xs.getState().setLoaded(!0)}},[f,u]);',
  'bundle: iOS asset loading'
);

bundle = replaceExact(
  bundle,
  'map:(e==null?void 0:e.useGradient)!==!1?v:null,envMap:h,',
  'map:isMobileWebKit?null:(e==null?void 0:e.useGradient)!==!1?v:null,envMap:isMobileWebKit?null:h,',
  'bundle: iOS material textures'
);

bundle = replaceExact(
  bundle,
  'o.slice(0,isMobileWebKit?1:o.length)',
  'o.slice(0,isMobileWebKit?0:o.length)',
  'bundle: iOS spotlights'
);

bundle = replaceExact(
  bundle,
  'o=Ie.useMemo(()=>({...r,segments:isMobileWebKit?64:r.segments??256}),[r])',
  'o=Ie.useMemo(()=>({...r,segments:isMobileWebKit?48:r.segments??256,spotlights:isMobileWebKit?[]:r.spotlights}),[r])',
  'bundle: iOS geometry preset'
);

bundle = replaceExact(
  bundle,
  'At.jsx(LD,{target:YD,enablePan:!1,enableZoom:!1,minDistance:.3,maxDistance:2,enableDamping:!0,dampingFactor:.1,rotateSpeed:.5})',
  'At.jsx(LD,{target:YD,enablePan:!1,enableZoom:!1,minDistance:.3,maxDistance:2,enableDamping:!isMobileWebKit,dampingFactor:isMobileWebKit?0:.1,rotateSpeed:isMobileWebKit?.35:.5})',
  'bundle: iOS controls'
);

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('index-GnKc23iY.js patched');

// --- PATCH 1: Leaderboard page - add iOS guard to particle canvas ---
let lb = fs.readFileSync(path.join(projectDir, 'leaderboard (2).html'), 'utf8');

// Add iOS detection at the top of the particle script block
const particleDecl = 'const canvas = document.getElementById("particles");\nconst ctx = canvas.getContext("2d");';
const iosGuard = 'const isIOS = /iP(hone|od|ad)/.test(navigator.userAgent);\nif (isIOS) { canvas && (canvas.style.display = "none"); }\nconst canvas = document.getElementById("particles");\nconst ctx = isIOS ? null : canvas.getContext("2d");';

lb = lb.replace(particleDecl, iosGuard);

// Add early return in animation loop for iOS
const clearRectLine = 'ctx.clearRect(0,0,canvas.width,canvas.height);';
lb = lb.replace(clearRectLine, 'if (isIOS) return;\n' + clearRectLine);

fs.writeFileSync(path.join(projectDir, 'leaderboard (2).html'), lb, 'utf8');
console.log('leaderboard (2).html patched');

// --- PATCH 2: organizing-committee.html - add iOS guard to WebGL bg ---
let oc = fs.readFileSync(path.join(projectDir, 'organizing-committee.html'), 'utf8');

// Add iOS detection before the WebGL canvas setup
const webglGuard = 'const isIOS = /iP(hone|od|ad)/.test(navigator.userAgent);';
const webglDecl = 'const webglCanvas = document.getElementById("webgl-bg");';

// Insert iOS guard before the webglCanvas line
oc = oc.replace(webglDecl, webglDecl + '\n            if (isIOS) { /* skip WebGL on iOS */ }');

// Add iOS check to the canUseWebglFx variable
const canUseRegex = 'const canUseWebglFx =';
oc = oc.replace(canUseRegex, 'const canUseWebglFx = !isIOS &&');

fs.writeFileSync(path.join(projectDir, 'organizing-committee.html'), oc, 'utf8');
console.log('organizing-committee.html patched');

// --- PATCH 3: index.html - add WebGL context loss handler ---
let idx = fs.readFileSync(path.join(projectDir, 'index.html'), 'utf8');

// Add context loss handler near the bundle's script tag
const scriptTag = '<script type="module" crossorigin src="/assets/index-GnKc23iY.js?v=20260416e"></script>';
const contextHandler = `<script>
// WebGL context loss recovery for iOS
window.addEventListener('webglcontextlost', function(e) {
  e.preventDefault();
  console.warn('WebGL context lost - attempting recovery');
  setTimeout(function() {
    window.location.reload();
  }, 1000);
}, false);
</script>
` + scriptTag;

idx = idx.replace(scriptTag, contextHandler);
fs.writeFileSync(path.join(projectDir, 'index.html'), idx, 'utf8');
console.log('index.html patched with WebGL context loss handler');

console.log('\nAll HTML patches applied.');
