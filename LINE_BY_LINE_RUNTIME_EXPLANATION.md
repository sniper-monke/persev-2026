# Line-by-Line Runtime Explanation

- Scope: runtime files that execute server/client behavior for the active app.
- Format: each source line is listed with a short explanation.

## .\persev-compiled\backend\index.js

1. `const express = require("express");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
2. `const path = require("path");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
3. `const siteData = require("./data/siteData");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
4. `` - Blank line for readability / logical separation.
5. `const app = express();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
6. `const PORT = process.env.PORT \\|\\| 3000;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
7. `const frontendDir = path.join(__dirname, "..", "frontend");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
8. `` - Blank line for readability / logical separation.
9. `app.use(express.json());` - Registers Express middleware (JSON parser / static serving / route helpers).
10. `app.use("/public", express.static(path.join(__dirname, "public")));` - Registers Express middleware (JSON parser / static serving / route helpers).
11. `app.use(express.static(frontendDir, { extensions: ["html"] }));` - Registers Express middleware (JSON parser / static serving / route helpers).
12. `` - Blank line for readability / logical separation.
13. `// In-memory registrations for demo simplicity.` - Comment line describing intent or section.
14. `const registrations = [];` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
15. `` - Blank line for readability / logical separation.
16. `app.get("/api/health", (_req, res) => {` - Registers an HTTP GET endpoint on the Express server.
17. `  res.json({ ok: true, service: "persev-backend" });` - Operational source line participating in page/server behavior.
18. `});` - Closes a block (function, condition, loop, object, or element section).
19. `` - Blank line for readability / logical separation.
20. `app.get("/api/site", (_req, res) => {` - Registers an HTTP GET endpoint on the Express server.
21. `  res.json(siteData.site);` - Operational source line participating in page/server behavior.
22. `});` - Closes a block (function, condition, loop, object, or element section).
23. `` - Blank line for readability / logical separation.
24. `app.get("/api/events", (_req, res) => {` - Registers an HTTP GET endpoint on the Express server.
25. `  res.json(siteData.events);` - Operational source line participating in page/server behavior.
26. `});` - Closes a block (function, condition, loop, object, or element section).
27. `` - Blank line for readability / logical separation.
28. `app.get("/api/leaderboard", (_req, res) => {` - Registers an HTTP GET endpoint on the Express server.
29. `  res.json(siteData.leaderboard);` - Operational source line participating in page/server behavior.
30. `});` - Closes a block (function, condition, loop, object, or element section).
31. `` - Blank line for readability / logical separation.
32. `app.post("/api/register", (req, res) => {` - Registers an HTTP POST endpoint on the Express server.
33. `  const { school, eventId, participants } = req.body \\|\\| {};` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
34. `` - Blank line for readability / logical separation.
35. `  if (!school \\|\\| !eventId \\|\\| !Array.isArray(participants) \\|\\| participants.length === 0) {` - Starts a conditional branch that decides behavior based on runtime state.
36. `    return res.status(400).json({` - Returns a value or exits current function early.
37. `      error: "school, eventId, and at least one participant are required"` - Operational source line participating in page/server behavior.
38. `    });` - Closes a block (function, condition, loop, object, or element section).
39. `  }` - Closes a block (function, condition, loop, object, or element section).
40. `` - Blank line for readability / logical separation.
41. `  const event = siteData.events.find((item) => item.id === eventId);` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
42. `  if (!event) {` - Starts a conditional branch that decides behavior based on runtime state.
43. `    return res.status(404).json({ error: "event not found" });` - Returns a value or exits current function early.
44. `  }` - Closes a block (function, condition, loop, object, or element section).
45. `` - Blank line for readability / logical separation.
46. `  const saved = {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
47. `    id: `reg-${registrations.length + 1}`,` - Operational source line participating in page/server behavior.
48. `    school,` - Operational source line participating in page/server behavior.
49. `    eventId,` - Operational source line participating in page/server behavior.
50. `    participants,` - Operational source line participating in page/server behavior.
51. `    createdAt: new Date().toISOString()` - Operational source line participating in page/server behavior.
52. `  };` - Closes a block (function, condition, loop, object, or element section).
53. `` - Blank line for readability / logical separation.
54. `  registrations.push(saved);` - Operational source line participating in page/server behavior.
55. `  return res.status(201).json(saved);` - Returns a value or exits current function early.
56. `});` - Closes a block (function, condition, loop, object, or element section).
57. `` - Blank line for readability / logical separation.
58. `app.get("/api/registrations", (_req, res) => {` - Registers an HTTP GET endpoint on the Express server.
59. `  res.json(registrations);` - Operational source line participating in page/server behavior.
60. `});` - Closes a block (function, condition, loop, object, or element section).
61. `` - Blank line for readability / logical separation.
62. `app.get("/", (_req, res) => {` - Registers an HTTP GET endpoint on the Express server.
63. `  res.sendFile(path.join(frontendDir, "index.html"));` - Operational source line participating in page/server behavior.
64. `});` - Closes a block (function, condition, loop, object, or element section).
65. `` - Blank line for readability / logical separation.
66. `const startServer = (port) => {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
67. `  const server = app.listen(port, () => {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
68. `    console.log(`Persev backend running on http://localhost:${port}`);` - Operational source line participating in page/server behavior.
69. `  });` - Closes a block (function, condition, loop, object, or element section).
70. `` - Blank line for readability / logical separation.
71. `  server.on("error", (err) => {` - Arrow function expression used as callback or concise helper.
72. `    if (err.code === "EADDRINUSE") {` - Starts a conditional branch that decides behavior based on runtime state.
73. `      const nextPort = Number(port) + 1;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
74. `      console.log(`Port ${port} is busy, retrying on ${nextPort}...`);` - Operational source line participating in page/server behavior.
75. `      startServer(nextPort);` - Operational source line participating in page/server behavior.
76. `      return;` - Returns a value or exits current function early.
77. `    }` - Closes a block (function, condition, loop, object, or element section).
78. `` - Blank line for readability / logical separation.
79. `    console.error("Failed to start server:", err);` - Operational source line participating in page/server behavior.
80. `    process.exit(1);` - Operational source line participating in page/server behavior.
81. `  });` - Closes a block (function, condition, loop, object, or element section).
82. `};` - Closes a block (function, condition, loop, object, or element section).
83. `` - Blank line for readability / logical separation.
84. `startServer(PORT);` - Operational source line participating in page/server behavior.
85. `` - Blank line for readability / logical separation.
86. `` - Blank line for readability / logical separation.
87. `` - Blank line for readability / logical separation.
88. `` - Blank line for readability / logical separation.

## .\persev-compiled\backend\data\siteData.js

1. `const PLACEHOLDER_MEDIA = "/public/placeholder.svg"; // Placeholder media from user request.` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
2. `` - Blank line for readability / logical separation.
3. `const site = {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
4. `  title: "Perseverantia 2025",` - Operational source line participating in page/server behavior.
5. `  subtitle: "Simplified hardcoded backend",` - Operational source line participating in page/server behavior.
6. `  description: "A minimal backend rebuild with readable and maintainable structure.",` - Operational source line participating in page/server behavior.
7. `  heroImage: PLACEHOLDER_MEDIA,` - Operational source line participating in page/server behavior.
8. `  heroVideo: PLACEHOLDER_MEDIA` - Operational source line participating in page/server behavior.
9. `};` - Closes a block (function, condition, loop, object, or element section).
10. `` - Blank line for readability / logical separation.
11. `const events = [` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
12. `  {` - Opens a block scope.
13. `    id: "admeta",` - Operational source line participating in page/server behavior.
14. `    name: "Admeta",` - Operational source line participating in page/server behavior.
15. `    category: "Literary",` - Operational source line participating in page/server behavior.
16. `    description: "Debate event focused on originality and perspective.",` - Operational source line participating in page/server behavior.
17. `    logo: PLACEHOLDER_MEDIA,` - Operational source line participating in page/server behavior.
18. `    eventHeadPhoto: PLACEHOLDER_MEDIA` - Operational source line participating in page/server behavior.
19. `  },` - Closes a block (function, condition, loop, object, or element section).
20. `  {` - Opens a block scope.
21. `    id: "codeferno",` - Operational source line participating in page/server behavior.
22. `    name: "Codeferno",` - Operational source line participating in page/server behavior.
23. `    category: "Tech",` - Operational source line participating in page/server behavior.
24. `    description: "Timed coding challenge with algorithmic problems.",` - Operational source line participating in page/server behavior.
25. `    logo: PLACEHOLDER_MEDIA,` - Operational source line participating in page/server behavior.
26. `    eventHeadPhoto: PLACEHOLDER_MEDIA` - Operational source line participating in page/server behavior.
27. `  },` - Closes a block (function, condition, loop, object, or element section).
28. `  {` - Opens a block scope.
29. `    id: "gratia",` - Operational source line participating in page/server behavior.
30. `    name: "Gratia",` - Operational source line participating in page/server behavior.
31. `    category: "Performing Arts",` - Operational source line participating in page/server behavior.
32. `    description: "Dance competition blending tradition and creativity.",` - Operational source line participating in page/server behavior.
33. `    logo: PLACEHOLDER_MEDIA,` - Operational source line participating in page/server behavior.
34. `    eventHeadPhoto: PLACEHOLDER_MEDIA` - Operational source line participating in page/server behavior.
35. `  },` - Closes a block (function, condition, loop, object, or element section).
36. `  {` - Opens a block scope.
37. `    id: "football",` - Operational source line participating in page/server behavior.
38. `    name: "Football",` - Operational source line participating in page/server behavior.
39. `    category: "Sports",` - Operational source line participating in page/server behavior.
40. `    description: "High-intensity interschool football face-off.",` - Operational source line participating in page/server behavior.
41. `    logo: PLACEHOLDER_MEDIA,` - Operational source line participating in page/server behavior.
42. `    eventHeadPhoto: PLACEHOLDER_MEDIA` - Operational source line participating in page/server behavior.
43. `  }` - Closes a block (function, condition, loop, object, or element section).
44. `];` - Operational source line participating in page/server behavior.
45. `` - Blank line for readability / logical separation.
46. `const leaderboard = {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
47. `  eventEnded: true,` - Operational source line participating in page/server behavior.
48. `  schools: [` - Operational source line participating in page/server behavior.
49. `    { name: "Bombay Scottish", points: 240 },` - Opens a block scope.
50. `    { name: "Delhi Public School", points: 210 },` - Opens a block scope.
51. `    { name: "St. Xavier's High School", points: 195 }` - Opens a block scope.
52. `  ]` - Operational source line participating in page/server behavior.
53. `};` - Closes a block (function, condition, loop, object, or element section).
54. `` - Blank line for readability / logical separation.
55. `module.exports = {` - Exports data/functions from this module for Node.js imports.
56. `  site,` - Operational source line participating in page/server behavior.
57. `  events,` - Operational source line participating in page/server behavior.
58. `  leaderboard` - Operational source line participating in page/server behavior.
59. `};` - Closes a block (function, condition, loop, object, or element section).

## .\persev-compiled\frontend\index.html

1. `<!doctype html>` - HTML markup line contributing structure, metadata, scripts, or content containers.
2. `<html lang=en>` - HTML markup line contributing structure, metadata, scripts, or content containers.
3. `<head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
4. `<meta charset=UTF-8>` - HTML markup line contributing structure, metadata, scripts, or content containers.
5. `<meta name=viewport content="width=device-width,initial-scale=1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
6. `<meta name=description content="Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
7. `<link rel=icon type=image/png href="https://bss-perseverantia.github.io/assets/persev.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
8. `<meta name=msapplication-TileImage content="https://bss-perseverantia.github.io/assets/persev.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
9. `<meta property=og:site_name content=Perseverantia>` - HTML markup line contributing structure, metadata, scripts, or content containers.
10. `<meta property=og:title content="Perseverantia, 2025">` - HTML markup line contributing structure, metadata, scripts, or content containers.
11. `<meta property=og:description content="Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
12. `<meta property=og:image content="https://bss-perseverantia.github.io/assets/persev2.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
13. `<meta property=og:type content=website>` - HTML markup line contributing structure, metadata, scripts, or content containers.
14. `<meta property=og:image:type content=image/jpeg>` - HTML markup line contributing structure, metadata, scripts, or content containers.
15. `<meta property=og:image:width content=300>` - HTML markup line contributing structure, metadata, scripts, or content containers.
16. `<meta property=og:image:height content=300>` - HTML markup line contributing structure, metadata, scripts, or content containers.
17. `<meta property=og:url content="https://bss-perseverantia.github.io/" >` - HTML markup line contributing structure, metadata, scripts, or content containers.
18. `<meta name="twitter:card" content="summary_large_image">` - HTML markup line contributing structure, metadata, scripts, or content containers.
19. `<meta name=twitter:title content=Perseverantia>` - HTML markup line contributing structure, metadata, scripts, or content containers.
20. `<meta name=twitter:description content="Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
21. `<meta name=twitter:image content="https://bss-perseverantia.github.io/assets/persev2.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
22. `<meta name=twitter:url content="https://bss-perseverantia.github.io/" >` - HTML markup line contributing structure, metadata, scripts, or content containers.
23. `<meta name="keywords" content="` - HTML markup line contributing structure, metadata, scripts, or content containers.
24. `Perseverantia,` - Operational source line participating in page/server behavior.
25. `Perseverantia 2025,` - Operational source line participating in page/server behavior.
26. `Perseverantia Bombay Scottish,` - Operational source line participating in page/server behavior.
27. `Bombay Scottish School Mahim,` - Operational source line participating in page/server behavior.
28. `Bombay Scottish fest,` - Operational source line participating in page/server behavior.
29. `Persev,` - Operational source line participating in page/server behavior.
30. `Persev 2025,` - Operational source line participating in page/server behavior.
31. `Bombay Scottish interschool festival,` - Operational source line participating in page/server behavior.
32. `Scottish Mahim events,` - Operational source line participating in page/server behavior.
33. `Perseverantia events,` - Operational source line participating in page/server behavior.
34. `Perseverantia competitions,` - Operational source line participating in page/server behavior.
35. `Perseverantia fest Mumbai` - Operational source line participating in page/server behavior.
36. `">` - Operational source line participating in page/server behavior.
37. `<link rel="canonical" href="https://bss-perseverantia.github.io/">` - HTML markup line contributing structure, metadata, scripts, or content containers.
38. `<script type="application/ld+json">` - HTML markup line contributing structure, metadata, scripts, or content containers.
39. `{` - Opens a block scope.
40. ` "@context": "https://schema.org",` - Operational source line participating in page/server behavior.
41. ` "@type": "Event",` - Operational source line participating in page/server behavior.
42. ` "name": "Perseverantia 2025",` - Operational source line participating in page/server behavior.
43. ` "description": "Perseverantia is the annual inter-school festival of Bombay Scottish School Mahim.",` - Operational source line participating in page/server behavior.
44. ` "url": "https://bss-perseverantia.github.io/",` - Operational source line participating in page/server behavior.
45. `  "startDate": "2025-10-03T07:00:00+05:30",` - Operational source line participating in page/server behavior.
46. `  "endDate": "2025-10-05T11:00:00+05:30",` - Operational source line participating in page/server behavior.
47. `  "location": {` - Operational source line participating in page/server behavior.
48. `        "@type": "Place",` - Operational source line participating in page/server behavior.
49. `        "name": "Bombay Scottish School, Mahim",` - Operational source line participating in page/server behavior.
50. `        "address": {` - Operational source line participating in page/server behavior.
51. `          "@type": "PostalAddress",` - Operational source line participating in page/server behavior.
52. `          "streetAddress": "153 Swatantryaveer Savarkar Rd",` - Operational source line participating in page/server behavior.
53. `          "addressLocality": "Mahim West",` - Operational source line participating in page/server behavior.
54. `          "postalCode": "400016",` - Operational source line participating in page/server behavior.
55. `          "addressRegion": "MH",` - Operational source line participating in page/server behavior.
56. `          "addressCountry": "IN"` - Operational source line participating in page/server behavior.
57. `        }` - Closes a block (function, condition, loop, object, or element section).
58. `      },` - Closes a block (function, condition, loop, object, or element section).
59. ` "organizer": {` - Operational source line participating in page/server behavior.
60. `   "@type": "Organization",` - Operational source line participating in page/server behavior.
61. `   "name": "Bombay Scottish School Mahim",` - Operational source line participating in page/server behavior.
62. `   "url":"https://bombayscottishmahim.in/"` - Operational source line participating in page/server behavior.
63. ` },` - Closes a block (function, condition, loop, object, or element section).
64. ` "eventStatus": "https://schema.org/EventScheduled"` - Operational source line participating in page/server behavior.
65. `}` - Closes a block (function, condition, loop, object, or element section).
66. `</script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
67. `<title>Perseverantia</title>` - HTML markup line contributing structure, metadata, scripts, or content containers.
68. `<link rel=preload href=/static/style.min.css as=style onload='this.rel="stylesheet"'>` - HTML markup line contributing structure, metadata, scripts, or content containers.
69. `<noscript><link rel=stylesheet href=/static/style.min.css></noscript>` - HTML markup line contributing structure, metadata, scripts, or content containers.
70. `<style>@font-face{font-family:Mestizo;src:url(/assets/MestizoFont.ttf);font-display:swap}#loading-screen.fade-out{opacity:0;pointer-events:none}.animate-slide-in-top{animation:slideInFromTop 1s ease-out .3s both}.animate-fade-in-up{animation:fadeInUp 1s ease-out .6s both}.animate-border-glow{animation:borderGlow 3s ease-in-out infinite alternate}.animate-fade-in-scale-1{animation:fadeInScale .6s ease-out .9s both}.animate-fade-in-scale-2{animation:fadeInScale .6s ease-out 1.1s both}.animate-fade-in-scale-3{animation:fadeInScale .6s ease-out 1.3s both}.animate-fade-in-scale-4{animation:fadeInScale .6s ease-out 1.5s both}.animate-slide-in-bottom{animation:slideInFromBottom 1s ease-out 1.2s both}.glowing-digit{animation:digitPulse 2s ease-in-out infinite;text-shadow:0 0 15px rgba(190,142,48,.6)}@keyframes slideInFromTop{0%{opacity:0;transform:translateY(-50px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}@keyframes slideInFromBottom{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}@keyframes borderGlow{0%{box-shadow:0 0 20px rgba(190,142,48,.3)}100%{box-shadow:0 0 40px rgba(190,142,48,.8),0 0 60px rgba(190,142,48,.4)}}@keyframes digitPulse{0%,100%{text-shadow:0 0 15px rgba(190,142,48,.6);transform:scale(1)}50%{text-shadow:0 0 25px rgba(190,142,48,.9),0 0 35px rgba(190,142,48,.5);transform:scale(1.02)}}.countdown-digit:hover .glowing-digit{animation-duration:.5s;text-shadow:0 0 30px #be8e30,0 0 50px rgba(190,142,48,.6)}.countdown-container{animation:fadeInScale 1.5s ease-out;transform-origin:center}@keyframes fadeInScale{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}.countdown-digit{animation:pulseGlow 2s ease-in-out infinite;transition:all .3s ease}@keyframes pulseGlow{0%,100%{text-shadow:0 0 10px rgba(190,142,48,.5)}50%{text-shadow:0 0 20px rgba(190,142,48,.8),0 0 30px rgba(190,142,48,.3)}}.countdown-digit:hover{transform:scale(1.1);text-shadow:0 0 25px #be8e30}.countdown-border{position:relative;overflow:hidden}.countdown-border::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;background:linear-gradient(45deg,#be8e30,gold,#be8e30,gold);background-size:400% 400%;border-radius:34px;z-index:-1;animation:gradientShift 3s ease infinite}@keyframes gradientShift{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}.countdown-title{animation:slideInFromTop 1s ease-out .5s both}@keyframes slideInFromTop{0%{opacity:0;transform:translateY(-30px)}100%{opacity:1;transform:translateY(0)}}.event-date{animation:slideInFromBottom 1s ease-out 1s both}@keyframes slideInFromBottom{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}.animate-navbar{animation:slideInFromTop .8s ease-out}.animate-nav-buttons{animation:fadeInUp 1s ease-out .3s both}.animate-about-title{animation:slideInFromLeft .8s ease-out .2s both}.animate-about-text-1{animation:fadeInUp .8s ease-out .4s both}.animate-about-text-2{animation:fadeInUp .8s ease-out .6s both}.animate-about-text-3{animation:fadeInUp .8s ease-out .8s both}.animate-about-buttons{animation:slideInFromBottom .8s ease-out 1s both}.animate-about-image{animation:slideInFromRight .8s ease-out .5s both}.animate-follow-section{animation:slideInFromLeft .8s ease-out .3s both}.animate-contact-section{animation:slideInFromRight .8s ease-out .3s both}.animate-footer{animation:fadeInUp .8s ease-out .2s both}@keyframes slideInFromLeft{0%{opacity:0;transform:translateX(-50px)}100%{opacity:1;transform:translateX(0)}}@keyframes slideInFromRight{0%{opacity:0;transform:translateX(50px)}100%{opacity:1;transform:translateX(0)}}.hover-lift{transition:all .3s ease}.hover-lift:hover{transform:translateY(-5px);box-shadow:0 10px 25px rgba(190,142,48,.3)}.hover-glow{transition:all .3s ease}.hover-glow:hover{text-shadow:0 0 15px rgba(190,142,48,.8);transform:scale(1.02)}.text-reveal{animation:textReveal .8s ease-out both}@keyframes textReveal{0%{opacity:0;transform:translateY(20px);filter:blur(5px)}100%{opacity:1;transform:translateY(0);filter:blur(0px)}}.fade-in-section{opacity:0;transform:translateY(30px);transition:all .8s ease-out}.fade-in-section.visible{opacity:1;transform:translateY(0)}.slide-in-left{opacity:0;transform:translateX(-50px);transition:all .8s ease-out}.slide-in-left.visible{opacity:1;transform:translateX(0)}.slide-in-right{opacity:0;transform:translateX(50px);transition:all .8s ease-out}.slide-in-right.visible{opacity:1;transform:translateX(0)}</style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
71. `<script>const queryString=window.location.search,urlParams=new URLSearchParams(queryString);var day=0,month=0,year=0;async function a(){await fetch("/config.json").then((t=>t.json())).then((t=>{const e=t.website;day=e.countdown.day,month=e.countdown.month,year=e.countdown.year;for(let t=0;t<e.navbar.links.length;t++)document.getElementById("desktop-nav").innerHTML+=`<a href="${e.navbar.links[t].linkto}" class="hover:text-blue-200">${e.navbar.links[t].name}</a>`,document.getElementById("mobile-menu").innerHTML+=`<a href="${e.navbar.links[t].linkto}" class="block py-2 text-lg hover:text-blue-200">${e.navbar.links[t].name}</a>`;document.getElementById("nav-title").textContent=e.navbar.title,document.getElementById("tb1").textContent=e.about.tb1,document.getElementById("tbg").textContent=e.about.tbg,document.getElementById("tb2").innerHTML=e.about.tb2;const n=document.getElementById("button1");n.textContent=e.about.button1.name,n.href=e.about.button1.link;const o=document.getElementById("button2");o.textContent=e.about.button2.name,o.href=e.about.button2.link,document.getElementById("about-img").src=e.about.photo;const a=document.getElementById("main-video");a&&(a.src=e["main-video"]\\|\\|e.mainVideo),document.getElementById("contact-numbers").textContent=e.contact.mobileNos;const c=document.getElementById("contact-email");c.href="mailto:"+e.contact.email,c.textContent=e.contact.email})).then((()=>{const t=document.getElementById("loading-screen");setTimeout((()=>{t.classList.add("fade-out"),setTimeout((()=>t.remove()),600)}),2e3)})).catch((t=>{console.error("Failed to load /config",t);const e=document.getElementById("loading-screen");setTimeout((()=>{e.classList.add("fade-out"),setTimeout((()=>e.remove()),600)}),1e3)}))}a()</script>` - Starts an HTTP request to load config/data from server-side JSON/API.
72. `</head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
73. `<body class="bg-gray-100 text-gray-800">` - HTML markup line contributing structure, metadata, scripts, or content containers.
74. `<div id=loading-screen style="position:fixed;inset:0;background:linear-gradient(135deg,#0a0f2c,#1a2949);z-index:9999;display:flex;align-items:center;justify-content:center;transition:opacity .6s ease">` - HTML markup line contributing structure, metadata, scripts, or content containers.
75. `<video id=loading-video autoplay muted loop playsinline style="width:150px;height:150px;object-fit:contain;filter:drop-shadow(0 0 20px rgba(190, 142, 48, .7));border-radius:12px">` - HTML markup line contributing structure, metadata, scripts, or content containers.
76. `<source src=/assets/load.mp4 type=video/mp4>` - HTML markup line contributing structure, metadata, scripts, or content containers.
77. `Your browser does not support the video tag.` - Operational source line participating in page/server behavior.
78. `</video>` - HTML markup line contributing structure, metadata, scripts, or content containers.
79. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
80. `<nav class="text-white animate-navbar" style=background:#081032>` - HTML markup line contributing structure, metadata, scripts, or content containers.
81. `<div class="container mx-auto px-4 py-4 flex justify-between items-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
82. `<div class="text-2xl hover-glow" style=font-family:Mestizo id=nav-title>` - HTML markup line contributing structure, metadata, scripts, or content containers.
83. `Perseverantia` - Operational source line participating in page/server behavior.
84. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
85. `<div class="hidden md:flex space-x-6 text-lg" id=desktop-nav>` - HTML markup line contributing structure, metadata, scripts, or content containers.
86. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
87. `<div class=md:hidden>` - HTML markup line contributing structure, metadata, scripts, or content containers.
88. `<button id=menu-toggle class=focus:outline-none aria-label=menu>` - HTML markup line contributing structure, metadata, scripts, or content containers.
89. `<svg class="w-6 h-6" fill=none stroke=currentColor stroke-width=2 viewBox="0 0 24 24" stroke-linecap=round stroke-linejoin=round>` - HTML markup line contributing structure, metadata, scripts, or content containers.
90. `<path d="M4 6h16M4 12h16M4 18h16"/>` - HTML markup line contributing structure, metadata, scripts, or content containers.
91. `</svg>` - HTML markup line contributing structure, metadata, scripts, or content containers.
92. `</button>` - HTML markup line contributing structure, metadata, scripts, or content containers.
93. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
94. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
95. `<div id=mobile-menu class="md:hidden hidden opacity-0 scale-y-90 -translate-y-4 transform transition-all duration-500 ease-out origin-top px-4 pb-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
96. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
97. `</nav>` - HTML markup line contributing structure, metadata, scripts, or content containers.
98. `<header class=relative style="background:linear-gradient(90deg,#0d122c 0,#131d3f 100%)">` - HTML markup line contributing structure, metadata, scripts, or content containers.
99. `<div class="relative pt-6 flex justify-center z-10">` - HTML markup line contributing structure, metadata, scripts, or content containers.
100. `<video autoplay muted playsinline class="max-w-md w-full shadow-[0_0_20px_rgba(255,255,255,0.1)] h-auto object-contain z-10" id=main-video style=mix-blend-mode:lighten;border-radius:20px>` - HTML markup line contributing structure, metadata, scripts, or content containers.
101. `<source src=/assets/bannerv2.mp4 type=video/mp4>` - HTML markup line contributing structure, metadata, scripts, or content containers.
102. `Your browser does not support the video tag.` - Operational source line participating in page/server behavior.
103. `</video>` - HTML markup line contributing structure, metadata, scripts, or content containers.
104. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
105. `<div class="relative py-8 flex justify-center z-10 animate-nav-buttons">` - HTML markup line contributing structure, metadata, scripts, or content containers.
106. `<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 px-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
107. `<a href=/leaderboard class="text-white bg-[#081032] mb-4 py-3 px-6 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2 text-center font-semibold text-base sm:text-lg hover-lift whitespace-nowrap">` - HTML markup line contributing structure, metadata, scripts, or content containers.
108. `Leaderboard` - Operational source line participating in page/server behavior.
109. `</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
110. `<a href="/assets/handbook.pdf" class="text-white bg-[#081032] py-3 px-6 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2 text-center font-semibold text-base sm:text-lg hover-lift">` - HTML markup line contributing structure, metadata, scripts, or content containers.
111. `Handbook` - Operational source line participating in page/server behavior.
112. `</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
113. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
114. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
115. `<section class="text-white py-8 mx-8">` - HTML markup line contributing structure, metadata, scripts, or content containers.
116. `<div class="container mx-auto text-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
117. `<h2 class="text-5xl countdown-title animate-slide-in-top" style=font-family:Mestizo>` - HTML markup line contributing structure, metadata, scripts, or content containers.
118. `Event has ended!` - Operational source line participating in page/server behavior.
119. `</h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
120. `<div class="countdown-container countdown-border animate-fade-in-up animate-border-glow mt-8 max-w-4xl mx-auto text-center text-white border-8 border-[#BE8E30] rounded-[30px] px-4 py-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
121. `<div class="grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-6 text-5xl sm:text-6xl md:text-7xl font-bold">` - HTML markup line contributing structure, metadata, scripts, or content containers.
122. `<div class="countdown-digit animate-fade-in-scale-1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
123. `<span id=d class=glowing-digit>00</span><br>` - HTML markup line contributing structure, metadata, scripts, or content containers.
124. `<div class="mt-2 text-base sm:text-lg md:text-xl font-medium">` - HTML markup line contributing structure, metadata, scripts, or content containers.
125. `Days` - Operational source line participating in page/server behavior.
126. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
127. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
128. `<div class="countdown-digit animate-fade-in-scale-2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
129. `<span id=h class=glowing-digit>00</span><br>` - HTML markup line contributing structure, metadata, scripts, or content containers.
130. `<div class="mt-2 text-base sm:text-lg md:text-xl font-medium">` - HTML markup line contributing structure, metadata, scripts, or content containers.
131. `Hours` - Operational source line participating in page/server behavior.
132. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
133. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
134. `<div class="countdown-digit animate-fade-in-scale-3">` - HTML markup line contributing structure, metadata, scripts, or content containers.
135. `<span id=m class=glowing-digit>00</span>` - HTML markup line contributing structure, metadata, scripts, or content containers.
136. `<div class="mt-2 text-base sm:text-lg md:text-xl font-medium">` - HTML markup line contributing structure, metadata, scripts, or content containers.
137. `Minutes` - Operational source line participating in page/server behavior.
138. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
139. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
140. `<div class="countdown-digit animate-fade-in-scale-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
141. `<span id=s class=glowing-digit>00</span>` - HTML markup line contributing structure, metadata, scripts, or content containers.
142. `<div class="mt-2 text-base sm:text-lg md:text-xl font-medium">` - HTML markup line contributing structure, metadata, scripts, or content containers.
143. `Seconds` - Operational source line participating in page/server behavior.
144. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
145. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
146. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
147. `<p class="text-xl sm:text-2xl md:text-3xl mt-6 event-date animate-slide-in-bottom">` - HTML markup line contributing structure, metadata, scripts, or content containers.
148. `3rd October,2025 @ 7:00 a.m.` - Operational source line participating in page/server behavior.
149. `</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
150. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
151. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
152. `</section>` - HTML markup line contributing structure, metadata, scripts, or content containers.
153. `</header>` - HTML markup line contributing structure, metadata, scripts, or content containers.
154. `<section class="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">` - HTML markup line contributing structure, metadata, scripts, or content containers.
155. `<div class="text-white p-8 md:p-12 flex flex-col justify-between h-full" style="background:linear-gradient(90deg,#0d122c 0,#131d3f 100%)">` - HTML markup line contributing structure, metadata, scripts, or content containers.
156. `<div id=about-section>` - HTML markup line contributing structure, metadata, scripts, or content containers.
157. `<h2 class="text-4xl mb-4 animate-about-title hover-glow" style=font-family:Mestizo>About</h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
158. `<p class="text-lg mb-4 animate-about-text-1 text-reveal" id=tb1>` - HTML markup line contributing structure, metadata, scripts, or content containers.
159. `Bombay Scottish School, Mahim has returned with the third edition of its Annual Inter-School Fest - Perseverantia! Perseverantia aims to sensitise youth towards societal issues and conflicts through various performing, tech, literary and fine-art events.` - Operational source line participating in page/server behavior.
160. `</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
161. `<p class="text-lg text-yellow-400 font-semibold mb-4 animate-about-text-2 hover-glow" id=tbg>` - HTML markup line contributing structure, metadata, scripts, or content containers.
162. `Our theme for the year was INCLUSIVITY.` - Operational source line participating in page/server behavior.
163. `</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
164. `<p class="text-lg mb-4 animate-about-text-3 text-reveal" id=tb2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
165. `Whether you are a Gaming Geek or a Football Freak, a Fashionista or a Filmmaker, a Dancer or a Debater, a Writer or the Wolf of Wall Street, we have something for everyone.` - Operational source line participating in page/server behavior.
166. `</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
167. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
168. `<div class="mt-8 flex flex-col gap-y-6 animate-about-buttons">` - HTML markup line contributing structure, metadata, scripts, or content containers.
169. `<a href=/events id=button1 class="text-white bg-[#081032] lg:mx-52 py-3 px-6 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2 text-center hover-lift">` - HTML markup line contributing structure, metadata, scripts, or content containers.
170. `View Events` - Operational source line participating in page/server behavior.
171. `</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
172. `<a href=/organizing-committee id=button2 class="text-white bg-[#081032] lg:mx-44 py-3 px-6 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2 text-center hover-lift">` - HTML markup line contributing structure, metadata, scripts, or content containers.
173. `Organizing Committee` - Operational source line participating in page/server behavior.
174. `</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
175. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
176. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
177. `<div class="bg-[#081032] relative w-full h-64 md:h-auto min-h-[500px] animate-about-image">` - HTML markup line contributing structure, metadata, scripts, or content containers.
178. `<img id=about-img src=https://static.wixstatic.com/media/447894_0bcb6114fe254d76a4301c97bad20409~mv2.jpg/v1/crop/x_266,y_21,w_1082,h_1045/fill/w_408,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-06-10%20at%2019_40_edite.jpg alt="About Perseverantia" class="w-full h-full object-cover object-center rounded-none hover-lift">` - HTML markup line contributing structure, metadata, scripts, or content containers.
179. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
180. `</section>` - HTML markup line contributing structure, metadata, scripts, or content containers.
181. `<section class="grid grid-cols-1 md:grid-cols-2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
182. `<div class="p-10 text-white flex flex-col justify-center items-center animate-follow-section" style="background:linear-gradient(90deg,#0d122c 0,#131d3f 100%)">` - HTML markup line contributing structure, metadata, scripts, or content containers.
183. `<h2 class="text-4xl mb-4 mt-4 text-center hover-glow" style=font-family:Mestizo>` - HTML markup line contributing structure, metadata, scripts, or content containers.
184. `Follow Us` - Operational source line participating in page/server behavior.
185. `</h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
186. `<p class="text-lg text-center mb-6 max-w-md text-reveal" id=register-content>` - HTML markup line contributing structure, metadata, scripts, or content containers.
187. `Stay connected with us on Instagram for the latest updates, exclusive behind-the-scenes content, event highlights, and all things Perseverantia!` - Operational source line participating in page/server behavior.
188. `</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
189. `<a href=https://www.instagram.com/bss.perseverantia target=_blank class="gradient-outline-button hover-lift">` - HTML markup line contributing structure, metadata, scripts, or content containers.
190. `<svg xmlns=http://www.w3.org/2000/svg class=icon fill=white viewBox="0 0 24 24">` - HTML markup line contributing structure, metadata, scripts, or content containers.
191. `<path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>` - HTML markup line contributing structure, metadata, scripts, or content containers.
192. `</svg>` - HTML markup line contributing structure, metadata, scripts, or content containers.
193. `Follow on Instagram` - Operational source line participating in page/server behavior.
194. `</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
195. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
196. `<div class="text-white p-10 flex flex-col justify-center animate-contact-section" style="background:linear-gradient(270deg,#0d122c 0,#131d3f 100%)">` - HTML markup line contributing structure, metadata, scripts, or content containers.
197. `<h2 class="text-4xl mb-4 hover-glow" style=font-family:Mestizo>Contact Us</h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
198. `<p class="text-lg mb-2 text-reveal" id=contact-numbers>` - HTML markup line contributing structure, metadata, scripts, or content containers.
199. `📞 +91 84258 98552 / +91 77380 99474 / +91 70211 38415` - Operational source line participating in page/server behavior.
200. `</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
201. `<p class="text-lg mb-2 break-words text-reveal">` - HTML markup line contributing structure, metadata, scripts, or content containers.
202. `✉️` - Operational source line participating in page/server behavior.
203. `<a id=contact-email href=mailto:perseverantia.mahim@bombayscottish.in class="text-blue-400 hover:underline break-all hover-glow">` - HTML markup line contributing structure, metadata, scripts, or content containers.
204. `perseverantia.mahim@bombayscottish.in` - Operational source line participating in page/server behavior.
205. `</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
206. `</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
207. `<p class="text-lg text-reveal">` - HTML markup line contributing structure, metadata, scripts, or content containers.
208. `📍 153, Swatantryaveer Savarkar Road,<br>` - Operational source line participating in page/server behavior.
209. `Mahim West, Mumbai, Maharashtra - 400016` - Operational source line participating in page/server behavior.
210. `</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
211. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
212. `</section>` - HTML markup line contributing structure, metadata, scripts, or content containers.
213. `<footer class="bg-blue-900 text-white py-6 animate-footer">` - HTML markup line contributing structure, metadata, scripts, or content containers.
214. `<div class="container mx-auto text-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
215. `<p class=hover-glow>&copy; 2025 Bombay Scottish School, Mahim. All rights reserved.</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
216. `</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
217. `</footer>` - HTML markup line contributing structure, metadata, scripts, or content containers.
218. `<script>const toggleBtn=document.getElementById("menu-toggle"),mobileMenu=document.getElementById("mobile-menu");let menuOpen=!1;toggleBtn.addEventListener("click",(()=>{menuOpen=!menuOpen,menuOpen?(mobileMenu.classList.remove("hidden"),mobileMenu.offsetWidth,mobileMenu.classList.remove("opacity-0","scale-y-90","-translate-y-4"),mobileMenu.classList.add("opacity-100","scale-y-100","translate-y-0")):(mobileMenu.classList.remove("opacity-100","scale-y-100","translate-y-0"),mobileMenu.classList.add("opacity-0","scale-y-90","-translate-y-4"),setTimeout((()=>{menuOpen\\|\\|mobileMenu.classList.add("hidden")}),500))}))</script>` - Attaches an event listener to react to user interaction or lifecycle events.
219. `<script>let d=document.getElementById("d"),h=document.getElementById("h"),m=document.getElementById("m"),s=document.getElementById("s");setInterval((()=>{new Date(year,month-1,day,7,0,0)>new Date&&(d.innerHTML=(""+Math.floor((new Date(year,month-1,day,7,0,0)-new Date)/864e5)).padStart(2,"0"),h.innerHTML=(""+Math.floor((new Date(year,month-1,day,7,0,0).getTime()-Date.now())/36e5%24)).padStart(2,"0"),m.innerHTML=(""+Math.floor((new Date(year,month-1,day,7,0,0).getTime()-Date.now())/6e4%60)).padStart(2,"0"),s.innerHTML=(""+Math.floor((new Date(year,month-1,day,7,0,0).getTime()-Date.now())/1e3%60)).padStart(2,"0"))}),1e3)</script>` - Reads a DOM element reference to manipulate content or behavior.
220. `<script>const updateDaysRemaining=()=>{const e=new Date(year,month-1,day,7,0,0),t=new Date;if(e>t){const n=Math.floor((e-t)/864e5);document.getElementById("days-remaining").textContent=`${n} Days Remaining`}else document.getElementById("days-remaining").textContent="Event has started!"};setInterval(updateDaysRemaining,36e5)</script>` - Reads a DOM element reference to manipulate content or behavior.
221. `<script>const observerOptions={threshold:.1,rootMargin:"0px 0px -50px 0px"},observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("visible")}))}),observerOptions);document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".fade-in-section, .slide-in-left, .slide-in-right").forEach((e=>observer.observe(e)))}));const navTitle=document.getElementById("nav-title");navTitle&&(navTitle.addEventListener("mouseenter",(()=>{navTitle.style.animation="digitPulse 0.6s ease-in-out"})),navTitle.addEventListener("animationend",(()=>{navTitle.style.animation=""}))),document.querySelectorAll('a[class*="hover-lift"]').forEach((e=>{e.addEventListener("click",(function(e){const t=document.createElement("span"),n=this.getBoundingClientRect(),i=Math.max(n.width,n.height),s=e.clientX-n.left-i/2,l=e.clientY-n.top-i/2;t.style.width=t.style.height=i+"px",t.style.left=s+"px",t.style.top=l+"px",t.classList.add("ripple"),this.appendChild(t),setTimeout((()=>{t.remove()}),600)}))}))</script>` - Attaches an event listener to react to user interaction or lifecycle events.
222. `<style>.ripple{position:absolute;border-radius:50%;background:rgba(190,142,48,.6);transform:scale(0);animation:ripple-animation .6s linear;pointer-events:none}@keyframes ripple-animation{to{transform:scale(4);opacity:0}}</style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
223. `</body>` - HTML markup line contributing structure, metadata, scripts, or content containers.
224. `</html>` - HTML markup line contributing structure, metadata, scripts, or content containers.

## .\persev-compiled\frontend\events.html

1. `<!DOCTYPE html>` - HTML markup line contributing structure, metadata, scripts, or content containers.
2. `<html lang="en">` - HTML markup line contributing structure, metadata, scripts, or content containers.
3. `` - Blank line for readability / logical separation.
4. `<head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
5. `  <meta charset="UTF-8" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
6. `  <meta name="viewport" content="width=device-width, initial-scale=1.0" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
7. `  <meta name="description" content="Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
8. `  <link rel="icon" type="image/png" href="https://bss-perseverantia.github.io/assets/persevlogo.png" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
9. `  <meta name="msapplication-TileImage" content="https://bss-perseverantia.github.io/assets/persev.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
10. `  <meta property="og:site_name" content="Perseverantia">` - HTML markup line contributing structure, metadata, scripts, or content containers.
11. `  <meta property="og:title" content="Perseverantia, 2025 - Events">` - HTML markup line contributing structure, metadata, scripts, or content containers.
12. `  <meta property="og:description"` - HTML markup line contributing structure, metadata, scripts, or content containers.
13. `    content="Explore the exciting events of Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - Operational source line participating in page/server behavior.
14. `  <meta property="og:image" content="https://bss-perseverantia.github.io/assets/persev2.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
15. `  <meta property="og:type" content="website" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
16. `  <meta property="og:image:type" content="image/jpeg">` - HTML markup line contributing structure, metadata, scripts, or content containers.
17. `  <meta property="og:image:width" content="300">` - HTML markup line contributing structure, metadata, scripts, or content containers.
18. `  <meta property="og:image:height" content="300">` - HTML markup line contributing structure, metadata, scripts, or content containers.
19. `  <meta property="og:url" content="https://bss-perseverantia.github.io/events">` - HTML markup line contributing structure, metadata, scripts, or content containers.
20. `  <meta name="twitter:card" content="https://bss-perseverantia.github.io/assets/banner3.jpeg" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
21. `  <meta name="twitter:title" content="Perseverantia Events" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
22. `  <meta name="twitter:description"` - HTML markup line contributing structure, metadata, scripts, or content containers.
23. `    content="Explore the exciting events of Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim." />` - Operational source line participating in page/server behavior.
24. `  <meta name="twitter:image" content="https://bss-perseverantia.github.io/persev2.png" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
25. `  <meta name="twitter:url" content="https://bss-perseverantia.github.io/events" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
26. `  <meta name="keywords" content="` - HTML markup line contributing structure, metadata, scripts, or content containers.
27. `Perseverantia,` - Operational source line participating in page/server behavior.
28. `Perseverantia 2025,` - Operational source line participating in page/server behavior.
29. `Perseverantia events,` - Operational source line participating in page/server behavior.
30. `Perseverantia fest,` - Operational source line participating in page/server behavior.
31. `Bombay Scottish School Mahim,` - Operational source line participating in page/server behavior.
32. `Bombay Scottish interschool festival,` - Operational source line participating in page/server behavior.
33. `Scottish Mahim fest,` - Operational source line participating in page/server behavior.
34. `Persev 2025,` - Operational source line participating in page/server behavior.
35. `Persev events,` - Operational source line participating in page/server behavior.
36. `Perseverantia Bombay Scottish School,` - Operational source line participating in page/server behavior.
37. `` - Blank line for readability / logical separation.
38. `ADMETA debate event,` - Operational source line participating in page/server behavior.
39. `ARTEM art event,` - Operational source line participating in page/server behavior.
40. `CARMEN poetry event,` - Operational source line participating in page/server behavior.
41. `FABULA filmmaking event,` - Operational source line participating in page/server behavior.
42. `FORTUNA stock market simulation,` - Operational source line participating in page/server behavior.
43. `CODEFERNO coding competition,` - Operational source line participating in page/server behavior.
44. `GUSTATIO cooking competition,` - Operational source line participating in page/server behavior.
45. `MAHIM16 mystery event,` - Operational source line participating in page/server behavior.
46. `Adventurium advertising event,` - Operational source line participating in page/server behavior.
47. `GRATIA dance competition,` - Operational source line participating in page/server behavior.
48. `PANACHE fashion show,` - Operational source line participating in page/server behavior.
49. `SYMPHONIA music band competition,` - Operational source line participating in page/server behavior.
50. `MR AND MS PERSEVERANTIA personality contest,` - Operational source line participating in page/server behavior.
51. `EXPLORARE treasure hunt,` - Operational source line participating in page/server behavior.
52. `MONOPOLIUM business simulation,` - Operational source line participating in page/server behavior.
53. `Football Perseverantia,` - Operational source line participating in page/server behavior.
54. `Basketball Perseverantia,` - Operational source line participating in page/server behavior.
55. `Gully Cricket Perseverantia,` - Operational source line participating in page/server behavior.
56. `Table Tennis Perseverantia,` - Operational source line participating in page/server behavior.
57. `Tug of War Perseverantia,` - Operational source line participating in page/server behavior.
58. `E Sports Perseverantia,` - Operational source line participating in page/server behavior.
59. `` - Blank line for readability / logical separation.
60. `Dia Jain,` - Operational source line participating in page/server behavior.
61. `Nicole Lee,` - Operational source line participating in page/server behavior.
62. `Joalene Kotian,` - Operational source line participating in page/server behavior.
63. `Mira Bhimbat,` - Operational source line participating in page/server behavior.
64. `Rayhan Bhatia,` - Operational source line participating in page/server behavior.
65. `Avighna Chhatrapati,` - Operational source line participating in page/server behavior.
66. `Prajna Raykathi,` - Operational source line participating in page/server behavior.
67. `Shreya Sangal,` - Operational source line participating in page/server behavior.
68. `Gaurika Aggarwal,` - Operational source line participating in page/server behavior.
69. `Samaya Satyani,` - Operational source line participating in page/server behavior.
70. `Ishita Agarwal,` - Operational source line participating in page/server behavior.
71. `Jasleen Kaur,` - Operational source line participating in page/server behavior.
72. `Ashriya Agarwal,` - Operational source line participating in page/server behavior.
73. `Bhriti Khanna,` - Operational source line participating in page/server behavior.
74. `Sharan Dhanu,` - Operational source line participating in page/server behavior.
75. `Ved Chopde,` - Operational source line participating in page/server behavior.
76. `Rehaan Bhat,` - Operational source line participating in page/server behavior.
77. `Veda Sriranjan,` - Operational source line participating in page/server behavior.
78. `Arrmaan Anand,` - Operational source line participating in page/server behavior.
79. `Anmol Kampani,` - Operational source line participating in page/server behavior.
80. `Agastya Katiyar,` - Operational source line participating in page/server behavior.
81. `Ruuhan Malde` - Operational source line participating in page/server behavior.
82. `">` - Operational source line participating in page/server behavior.
83. `` - Blank line for readability / logical separation.
84. `<script type="application/ld+json">` - HTML markup line contributing structure, metadata, scripts, or content containers.
85. `{` - Opens a block scope.
86. ` "@context": "https://schema.org",` - Operational source line participating in page/server behavior.
87. ` "@type": "EventSeries",` - Operational source line participating in page/server behavior.
88. ` "name": "Perseverantia 2025 Events",` - Operational source line participating in page/server behavior.
89. ` "url": "https://bss-perseverantia.github.io/events",` - Operational source line participating in page/server behavior.
90. ` "organizer": {` - Operational source line participating in page/server behavior.
91. `   "@type": "Organization",` - Operational source line participating in page/server behavior.
92. `   "name": "Bombay Scottish School Mahim",` - Operational source line participating in page/server behavior.
93. `   "event": [` - Operational source line participating in page/server behavior.
94. `` - Blank line for readability / logical separation.
95. `     {"@type":"Event","name":"ADMETA","performer":{"@type":"Person","name":"Dia Jain"}},` - Opens a block scope.
96. `     {"@type":"Event","name":"ARTEM","performer":{"@type":"Person","name":"Nicole Lee"}},` - Opens a block scope.
97. `     {"@type":"Event","name":"CARMEN","performer":{"@type":"Person","name":"Joalene Kotian"}},` - Opens a block scope.
98. `     {"@type":"Event","name":"FABULA","performer":{"@type":"Person","name":"Mira Bhimbat"}},` - Opens a block scope.
99. `     {"@type":"Event","name":"FORTUNA","performer":{"@type":"Person","name":"Rayhan Bhatia"}},` - Opens a block scope.
100. `     {"@type":"Event","name":"CODEFERNO","performer":{"@type":"Person","name":"Avighna Chhatrapati"}},` - Opens a block scope.
101. `     {"@type":"Event","name":"GUSTATIO","performer":{"@type":"Person","name":"Prajna Raykathi"}},` - Opens a block scope.
102. `     {"@type":"Event","name":"MAHIM16","performer":{"@type":"Person","name":"Shreya Sangal"}},` - Opens a block scope.
103. `     {"@type":"Event","name":"Adventurium","performer":{"@type":"Person","name":"Gaurika Aggarwal"}},` - Opens a block scope.
104. `     {"@type":"Event","name":"GRATIA","performer":{"@type":"Person","name":"Samaya Satyani"}},` - Opens a block scope.
105. `     {"@type":"Event","name":"PANACHE","performer":{"@type":"Person","name":"Ishita Agarwal"}},` - Opens a block scope.
106. `     {"@type":"Event","name":"SYMPHONIA","performer":{"@type":"Person","name":"Jasleen Kaur"}},` - Opens a block scope.
107. `     {"@type":"Event","name":"MR AND MS PERSEVERANTIA","performer":{"@type":"Person","name":"Ashriya Agarwal"}},` - Opens a block scope.
108. `     {"@type":"Event","name":"EXPLORARE","performer":[` - Opens a block scope.
109. `        {"@type":"Person","name":"Bhriti Khanna"},` - Opens a block scope.
110. `        {"@type":"Person","name":"Sharan Dhanu"}` - Opens a block scope.
111. `     ]},` - Operational source line participating in page/server behavior.
112. `     {"@type":"Event","name":"MONOPOLIUM","performer":{"@type":"Person","name":"Ved Chopde"}},` - Opens a block scope.
113. `     {"@type":"Event","name":"FOOTBALL","performer":{"@type":"Person","name":"Rehaan Bhat"}},` - Opens a block scope.
114. `     {"@type":"Event","name":"BASKETBALL","performer":{"@type":"Person","name":"Veda Sriranjan"}},` - Opens a block scope.
115. `     {"@type":"Event","name":"GULLY CRICKET","performer":{"@type":"Person","name":"Arrmaan Anand"}},` - Opens a block scope.
116. `     {"@type":"Event","name":"TABLE TENNIS","performer":{"@type":"Person","name":"Anmol Kampani"}},` - Opens a block scope.
117. `     {"@type":"Event","name":"TUG OF WAR","performer":{"@type":"Person","name":"Agastya Katiyar"}},` - Opens a block scope.
118. `     {"@type":"Event","name":"E SPORTS","performer":{"@type":"Person","name":"Ruuhan Malde"}}` - Opens a block scope.
119. `` - Blank line for readability / logical separation.
120. `   ]` - Operational source line participating in page/server behavior.
121. ` }` - Closes a block (function, condition, loop, object, or element section).
122. `}` - Closes a block (function, condition, loop, object, or element section).
123. `</script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
124. `  <title>Perseverantia Events</title>` - HTML markup line contributing structure, metadata, scripts, or content containers.
125. `` - Blank line for readability / logical separation.
126. `  <!-- Preload stylesheets for critical rendering, then apply with onload -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
127. `  <link rel="preload" href="/static/style2.css" as="style" onload="this.rel='stylesheet'">` - HTML markup line contributing structure, metadata, scripts, or content containers.
128. `  <noscript><link rel="stylesheet" href="/static/style2.css"></noscript>` - HTML markup line contributing structure, metadata, scripts, or content containers.
129. `  <link rel="preload" href="/static/style_events.css" as="style" onload="this.rel='stylesheet'">` - HTML markup line contributing structure, metadata, scripts, or content containers.
130. `  <noscript><link rel="stylesheet" href="/static/style_events.css"></noscript>` - HTML markup line contributing structure, metadata, scripts, or content containers.
131. `` - Blank line for readability / logical separation.
132. `  <!-- Inline font-face with swap to reduce render-blocking and font load delay -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
133. `  <style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
134. `    @font-face {` - Operational source line participating in page/server behavior.
135. `      font-family: 'Mestizo';` - Operational source line participating in page/server behavior.
136. `      src: url('/assets/MestizoFont.woff2') format('woff2'),` - Operational source line participating in page/server behavior.
137. `           url('/assets/MestizoFont.woff') format('woff'),` - Operational source line participating in page/server behavior.
138. `           url('/assets/MestizoFont.ttf') format('truetype');` - Operational source line participating in page/server behavior.
139. `      font-weight: normal;` - Operational source line participating in page/server behavior.
140. `      font-style: normal;` - Operational source line participating in page/server behavior.
141. `      font-display: swap;` - Operational source line participating in page/server behavior.
142. `    }` - Closes a block (function, condition, loop, object, or element section).
143. `  </style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
144. `</head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
145. `` - Blank line for readability / logical separation.
146. `<body class="min-h-screen">` - HTML markup line contributing structure, metadata, scripts, or content containers.
147. `` - Blank line for readability / logical separation.
148. `  <div id="loading-screen">` - HTML markup line contributing structure, metadata, scripts, or content containers.
149. `    <video id="loading-video" autoplay muted loop playsinline style="` - HTML markup line contributing structure, metadata, scripts, or content containers.
150. `        width: 150px;` - Operational source line participating in page/server behavior.
151. `        height: 150px;` - Operational source line participating in page/server behavior.
152. `        object-fit: contain;` - Operational source line participating in page/server behavior.
153. `        filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7));` - Operational source line participating in page/server behavior.
154. `        border-radius: 12px;` - Operational source line participating in page/server behavior.
155. `      ">` - Operational source line participating in page/server behavior.
156. `      <source src="/assets/load.mp4" type="video/mp4" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
157. `      Your browser does not support the video tag.` - Operational source line participating in page/server behavior.
158. `    </video>` - HTML markup line contributing structure, metadata, scripts, or content containers.
159. `  </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
160. `` - Blank line for readability / logical separation.
161. `  <nav class="text-white" style="background: #081032">` - HTML markup line contributing structure, metadata, scripts, or content containers.
162. `    <div class="container mx-auto px-4 py-4 flex justify-between items-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
163. `      <div class="flex items-center space-x-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
164. `        <img src="https://bss-perseverantia.github.io/assets/persevlogo.png" alt="Logo" class="h-10 w-auto md:hidden" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
165. `        <span class="text-2xl" style="font-family: Mestizo" id="nav-title">` - HTML markup line contributing structure, metadata, scripts, or content containers.
166. `          Perseverantia` - Operational source line participating in page/server behavior.
167. `        </span>` - HTML markup line contributing structure, metadata, scripts, or content containers.
168. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
169. `` - Blank line for readability / logical separation.
170. `      <div class="hidden md:flex space-x-6 text-lg" id="desktop-nav">` - HTML markup line contributing structure, metadata, scripts, or content containers.
171. `        <a href="/" class="hover:text-blue-200">Home</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
172. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
173. `` - Blank line for readability / logical separation.
174. `` - Blank line for readability / logical separation.
175. `      <div class="md:hidden">` - HTML markup line contributing structure, metadata, scripts, or content containers.
176. `        <button id="menu-toggle" class="focus:outline-none" aria-label="menu">` - HTML markup line contributing structure, metadata, scripts, or content containers.
177. `          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"` - HTML markup line contributing structure, metadata, scripts, or content containers.
178. `            stroke-linecap="round" stroke-linejoin="round">` - Operational source line participating in page/server behavior.
179. `            <path d="M4 6h16M4 12h16M4 18h16" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
180. `          </svg>` - HTML markup line contributing structure, metadata, scripts, or content containers.
181. `        </button>` - HTML markup line contributing structure, metadata, scripts, or content containers.
182. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
183. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
184. `` - Blank line for readability / logical separation.
185. `` - Blank line for readability / logical separation.
186. `    <div id="mobile-menu" class="md:hidden hidden opacity-0 scale-y-90 -translate-y-4 transform transition-all duration-500 ease-out origin-top px-4 pb-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
187. `      <a href="/" class="block py-2 text-lg hover:text-blue-200">Home</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
188. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
189. `  </nav>` - HTML markup line contributing structure, metadata, scripts, or content containers.
190. `` - Blank line for readability / logical separation.
191. `  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-10">` - HTML markup line contributing structure, metadata, scripts, or content containers.
192. `    <!-- Background Decorations -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
193. `    <div class="bg-decoration"></div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
194. `    ` - Blank line for readability / logical separation.
195. `    <header class="text-center mb-12">` - HTML markup line contributing structure, metadata, scripts, or content containers.
196. `      <h1 class="text-3xl sm:text-5xl text-[#BE8E30] mb-4 section-title fade-in-up">Our Events</h1>` - HTML markup line contributing structure, metadata, scripts, or content containers.
197. `      <p class="text-gray-300 text-base sm:text-lg fade-in-up">Explore the thrilling line-up of competitions at Perseverantia '25.` - HTML markup line contributing structure, metadata, scripts, or content containers.
198. `      </p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
199. `    </header>` - HTML markup line contributing structure, metadata, scripts, or content containers.
200. `` - Blank line for readability / logical separation.
201. `    <div id="eventsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">` - HTML markup line contributing structure, metadata, scripts, or content containers.
202. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
203. `  </main>` - HTML markup line contributing structure, metadata, scripts, or content containers.
204. `` - Blank line for readability / logical separation.
205. `  <!-- Footer matching organizing-committee.html -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
206. `  <footer class="bg-gradient-to-r from-[#081032] to-[#0c1542] text-white py-8 border-t border-[#BE8E30]/30">` - HTML markup line contributing structure, metadata, scripts, or content containers.
207. `    <div class="container mx-auto text-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
208. `      <div class="mb-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
209. `        <h3 class="text-xl" style="font-family: Mestizo; color: #BE8E30;">Perseverantia 2025</h3>` - HTML markup line contributing structure, metadata, scripts, or content containers.
210. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
211. `      <p class="text-gray-300 mb-2">&copy; 2025 Bombay Scottish School, Mahim. All rights reserved.</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
212. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
213. `  </footer>` - HTML markup line contributing structure, metadata, scripts, or content containers.
214. `` - Blank line for readability / logical separation.
215. `  <div id="modal" class="fixed inset-0 bg-[#08103280] flex items-center justify-center z-50 hidden overflow-y-auto p-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
216. `    <div` - HTML markup line contributing structure, metadata, scripts, or content containers.
217. `      class="bg-[#0C1542] border-4 border-[#BE8E30] rounded-xl relative flex flex-col lg:flex-row gap-6 sm:gap-8 shadow-2xl modal-content"` - Operational source line participating in page/server behavior.
218. `      style="box-shadow: 0 0 25px 5px #BE8E30;">` - Operational source line participating in page/server behavior.
219. `      <button id="closeModal"` - HTML markup line contributing structure, metadata, scripts, or content containers.
220. `        class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 transition z-10"` - Operational source line participating in page/server behavior.
221. `        aria-label="Close modal">` - Operational source line participating in page/server behavior.
222. `        &times;` - Operational source line participating in page/server behavior.
223. `      </button>` - HTML markup line contributing structure, metadata, scripts, or content containers.
224. `` - Blank line for readability / logical separation.
225. `      <div class="flex-1 p-6 sm:p-8 pt-12 sm:pt-12">` - HTML markup line contributing structure, metadata, scripts, or content containers.
226. `        <h2 class="text-2xl sm:text-4xl text-[#BE8E30] mb-4 sm:mb-6 leading-tight" id="modalTitle"></h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
227. `        <p id="modalDesc" class="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line mb-6"></p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
228. `        <a id="ropLinkBtn" href="#" target="_blank"` - HTML markup line contributing structure, metadata, scripts, or content containers.
229. `          class="inline-block text-white bg-[#081032] py-2.5 px-6 sm:py-3 sm:px-8 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2">` - Operational source line participating in page/server behavior.
230. `          View ROP` - Operational source line participating in page/server behavior.
231. `        </a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
232. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
233. `` - Blank line for readability / logical separation.
234. `      <div class="flex-shrink-0 w-full lg:w-1/3 rounded-lg overflow-hidden shadow-lg p-6 lg:mt-0">` - HTML markup line contributing structure, metadata, scripts, or content containers.
235. `        <div class="modal-event-head-wrapper">` - HTML markup line contributing structure, metadata, scripts, or content containers.
236. `          <img id="modalImage" src="" alt="Event Head" class="w-full h-full object-cover rounded-lg mb-4 sm:hidden lg:block" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
237. `          <p id="eventHeadName" class="text-[#BE8E30] font-semibold text-lg text-center"></p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
238. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
239. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
240. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
241. `  </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
242. `` - Blank line for readability / logical separation.
243. `  <script src='/static/events.js'></script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
244. `` - Blank line for readability / logical separation.
245. `</body>` - HTML markup line contributing structure, metadata, scripts, or content containers.
246. `` - Blank line for readability / logical separation.
247. `</html>` - HTML markup line contributing structure, metadata, scripts, or content containers.

## .\persev-compiled\frontend\leaderboard.html

1. `<!doctype html>` - HTML markup line contributing structure, metadata, scripts, or content containers.
2. `<html lang="en">` - HTML markup line contributing structure, metadata, scripts, or content containers.
3. `  <head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
4. `    <meta charset="UTF-8" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
5. `    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>` - HTML markup line contributing structure, metadata, scripts, or content containers.
6. `    <title>Perseverantia 2025 Leaderboard</title>` - HTML markup line contributing structure, metadata, scripts, or content containers.
7. `    <meta name="description" content="Perseverantia 2025 School Leaderboard.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
8. `    <meta name=description content="Leaderboard for Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
9. `    <link rel=icon type=image/png href="https://bss-perseverantia.github.io/assets/persev.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
10. `    <meta name=msapplication-TileImage content="https://bss-perseverantia.github.io/assets/persev.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
11. `    <meta property=og:site_name content=Perseverantia>` - HTML markup line contributing structure, metadata, scripts, or content containers.
12. `    <meta property=og:title content="Perseverantia, 2025">` - HTML markup line contributing structure, metadata, scripts, or content containers.
13. `    <meta property=og:description content="Leaderboard for Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
14. `    <meta property=og:image content="https://bss-perseverantia.github.io/assets/persev2.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
15. `    <meta property=og:type content=website>` - HTML markup line contributing structure, metadata, scripts, or content containers.
16. `    <meta property=og:image:type content=image/jpeg>` - HTML markup line contributing structure, metadata, scripts, or content containers.
17. `    <meta property=og:image:width content=300>` - HTML markup line contributing structure, metadata, scripts, or content containers.
18. `    <meta property=og:image:height content=300>` - HTML markup line contributing structure, metadata, scripts, or content containers.
19. `    <meta property=og:url content="https://bss-perseverantia.github.io/leaderboard" >` - HTML markup line contributing structure, metadata, scripts, or content containers.
20. `<meta name="twitter:card" content="summary_large_image">` - HTML markup line contributing structure, metadata, scripts, or content containers.
21. `<link rel="canonical" href="https://bss-perseverantia.github.io/leaderboard">` - HTML markup line contributing structure, metadata, scripts, or content containers.
22. `    <meta name=twitter:title content=Perseverantia>` - HTML markup line contributing structure, metadata, scripts, or content containers.
23. `    <meta name=twitter:description content="Leaderboard for Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
24. `    <meta name=twitter:image content="https://bss-perseverantia.github.io/assets/persev2.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
25. `    <meta name=twitter:url content="https://bss-perseverantia.github.io/leaderboard" >` - HTML markup line contributing structure, metadata, scripts, or content containers.
26. `<meta name="keywords" content="` - HTML markup line contributing structure, metadata, scripts, or content containers.
27. `Perseverantia leaderboard,` - Operational source line participating in page/server behavior.
28. `Perseverantia 2025 leaderboard,` - Operational source line participating in page/server behavior.
29. `Persev leaderboard,` - Operational source line participating in page/server behavior.
30. `Bombay Scottish School Mahim leaderboard,` - Operational source line participating in page/server behavior.
31. `Perseverantia school rankings,` - Operational source line participating in page/server behavior.
32. `Perseverantia results,` - Operational source line participating in page/server behavior.
33. `Persev results,` - Operational source line participating in page/server behavior.
34. `Bombay Scottish fest leaderboard,` - Operational source line participating in page/server behavior.
35. `Perseverantia standings` - Operational source line participating in page/server behavior.
36. `">` - Operational source line participating in page/server behavior.
37. `<script type="application/ld+json">` - HTML markup line contributing structure, metadata, scripts, or content containers.
38. `{` - Opens a block scope.
39. ` "@context": "https://schema.org",` - Operational source line participating in page/server behavior.
40. ` "@type": "SportsEvent",` - Operational source line participating in page/server behavior.
41. ` "name": "Perseverantia 2025 Leaderboard",` - Operational source line participating in page/server behavior.
42. ` "url": "https://bss-perseverantia.github.io/leaderboard",` - Operational source line participating in page/server behavior.
43. ` "organizer": {` - Operational source line participating in page/server behavior.
44. `   "@type": "Organization",` - Operational source line participating in page/server behavior.
45. `   "name": "Bombay Scottish School Mahim"` - Operational source line participating in page/server behavior.
46. ` }` - Closes a block (function, condition, loop, object, or element section).
47. `}` - Closes a block (function, condition, loop, object, or element section).
48. `</script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
49. `    <style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
50. `        @font-face {` - Operational source line participating in page/server behavior.
51. `          font-family: Mestizo;` - Operational source line participating in page/server behavior.
52. `          src: url(/static/MestizoFont.ttf);` - Operational source line participating in page/server behavior.
53. `          font-display: swap;` - Operational source line participating in page/server behavior.
54. `        }` - Closes a block (function, condition, loop, object, or element section).
55. `` - Blank line for readability / logical separation.
56. `        /* Enhanced Background and Animations */` - Block comment boundary or content.
57. `        body {` - Operational source line participating in page/server behavior.
58. `            background: linear-gradient(135deg, #0a0f2c 0%, #1a2949 50%, #0d122c 100%);` - Operational source line participating in page/server behavior.
59. `            min-height: 100vh;` - Operational source line participating in page/server behavior.
60. `            position: relative;` - Operational source line participating in page/server behavior.
61. `            overflow-x: hidden;` - Operational source line participating in page/server behavior.
62. `            /* Disable WebKit color scheme override */` - Block comment boundary or content.
63. `            -webkit-color-scheme: dark;` - Operational source line participating in page/server behavior.
64. `            color-scheme: dark;` - Operational source line participating in page/server behavior.
65. `        }` - Closes a block (function, condition, loop, object, or element section).
66. `        ` - Blank line for readability / logical separation.
67. `        /* Force dark background for iOS Safari */` - Block comment boundary or content.
68. `        html {` - Operational source line participating in page/server behavior.
69. `            background: #0a0f2c !important;` - Operational source line participating in page/server behavior.
70. `            -webkit-color-scheme: dark;` - Operational source line participating in page/server behavior.
71. `            color-scheme: dark;` - Operational source line participating in page/server behavior.
72. `        }` - Closes a block (function, condition, loop, object, or element section).
73. `        ` - Blank line for readability / logical separation.
74. `        /* Prevent iOS from changing colors */` - Block comment boundary or content.
75. `        * {` - Operational source line participating in page/server behavior.
76. `            -webkit-color-scheme: dark;` - Operational source line participating in page/server behavior.
77. `            color-scheme: dark;` - Operational source line participating in page/server behavior.
78. `        }` - Closes a block (function, condition, loop, object, or element section).
79. `` - Blank line for readability / logical separation.
80. `        /* Floating Background Elements */` - Block comment boundary or content.
81. `        .bg-decoration {` - Operational source line participating in page/server behavior.
82. `            position: fixed;` - Operational source line participating in page/server behavior.
83. `            pointer-events: none;` - Operational source line participating in page/server behavior.
84. `            z-index: 1;` - Operational source line participating in page/server behavior.
85. `        }` - Closes a block (function, condition, loop, object, or element section).
86. `` - Blank line for readability / logical separation.
87. `        .bg-decoration::before,` - Operational source line participating in page/server behavior.
88. `        .bg-decoration::after {` - Operational source line participating in page/server behavior.
89. `            content: '';` - Operational source line participating in page/server behavior.
90. `            position: absolute;` - Operational source line participating in page/server behavior.
91. `            border-radius: 50%;` - Operational source line participating in page/server behavior.
92. `            background: rgba(190, 142, 48, 0.15);` - Operational source line participating in page/server behavior.
93. `            animation: float 6s ease-in-out infinite;` - Operational source line participating in page/server behavior.
94. `            box-shadow: 0 0 30px rgba(190, 142, 48, 0.2);` - Operational source line participating in page/server behavior.
95. `        }` - Closes a block (function, condition, loop, object, or element section).
96. `` - Blank line for readability / logical separation.
97. `        .bg-decoration::before {` - Operational source line participating in page/server behavior.
98. `            width: 200px;` - Operational source line participating in page/server behavior.
99. `            height: 200px;` - Operational source line participating in page/server behavior.
100. `            top: 10%;` - Operational source line participating in page/server behavior.
101. `            left: 80%;` - Operational source line participating in page/server behavior.
102. `            animation-delay: 0s;` - Operational source line participating in page/server behavior.
103. `        }` - Closes a block (function, condition, loop, object, or element section).
104. `` - Blank line for readability / logical separation.
105. `        .bg-decoration::after {` - Operational source line participating in page/server behavior.
106. `            width: 150px;` - Operational source line participating in page/server behavior.
107. `            height: 150px;` - Operational source line participating in page/server behavior.
108. `            bottom: 20%;` - Operational source line participating in page/server behavior.
109. `            left: 10%;` - Operational source line participating in page/server behavior.
110. `            animation-delay: 3s;` - Operational source line participating in page/server behavior.
111. `        }` - Closes a block (function, condition, loop, object, or element section).
112. `` - Blank line for readability / logical separation.
113. `        @keyframes float {` - Operational source line participating in page/server behavior.
114. `            0%, 100% { transform: translateY(0px) rotate(0deg); }` - Operational source line participating in page/server behavior.
115. `            50% { transform: translateY(-20px) rotate(180deg); }` - Operational source line participating in page/server behavior.
116. `        }` - Closes a block (function, condition, loop, object, or element section).
117. `` - Blank line for readability / logical separation.
118. `        /* Enhanced Navbar */` - Block comment boundary or content.
119. `        header {` - Operational source line participating in page/server behavior.
120. `            position: relative;` - Operational source line participating in page/server behavior.
121. `            z-index: 100;` - Operational source line participating in page/server behavior.
122. `        }` - Closes a block (function, condition, loop, object, or element section).
123. `    </style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
124. `    <link` - HTML markup line contributing structure, metadata, scripts, or content containers.
125. `      href="/static/lbstyle.css"` - Operational source line participating in page/server behavior.
126. `      rel="stylesheet"` - Operational source line participating in page/server behavior.
127. `    />` - Operational source line participating in page/server behavior.
128. `    <script src="/static/confetti.js"></script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
129. `    <link rel="icon" type="image/png" href="/assets/persev.avif" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
130. `    <script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
131. `      var stoptime = false;` - Declares function/global-scoped variable (legacy style) used by script runtime.
132. `      ` - Blank line for readability / logical separation.
133. `      const start = () => {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
134. `          setTimeout(function() {` - Operational source line participating in page/server behavior.
135. `              confetti.start()` - Operational source line participating in page/server behavior.
136. `          }, 1000); ` - Closes a block (function, condition, loop, object, or element section).
137. `      };` - Closes a block (function, condition, loop, object, or element section).
138. `      ` - Blank line for readability / logical separation.
139. `` - Blank line for readability / logical separation.
140. `      const stop = (t) => {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
141. `          setTimeout(function() {` - Operational source line participating in page/server behavior.
142. `            ` - Blank line for readability / logical separation.
143. `              confetti.stop()` - Operational source line participating in page/server behavior.
144. `              stoptime=true;` - Operational source line participating in page/server behavior.
145. `          }, t); ` - Closes a block (function, condition, loop, object, or element section).
146. `      };` - Closes a block (function, condition, loop, object, or element section).
147. `      ` - Blank line for readability / logical separation.
148. `      ` - Blank line for readability / logical separation.
149. `    </script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
150. `    <style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
151. `      /* Enhanced Typography */` - Block comment boundary or content.
152. `      .section-title {` - Operational source line participating in page/server behavior.
153. `        background: linear-gradient(45deg, #BE8E30, #FFD700, #BE8E30);` - Operational source line participating in page/server behavior.
154. `        background-size: 200% 200%;` - Operational source line participating in page/server behavior.
155. `        -webkit-background-clip: text;` - Operational source line participating in page/server behavior.
156. `        -webkit-text-fill-color: transparent;` - Operational source line participating in page/server behavior.
157. `        background-clip: text;` - Operational source line participating in page/server behavior.
158. `        animation: gradientShift 3s ease-in-out infinite;` - Operational source line participating in page/server behavior.
159. `        text-shadow: 0 0 30px rgba(190, 142, 48, 0.5);` - Operational source line participating in page/server behavior.
160. `      }` - Closes a block (function, condition, loop, object, or element section).
161. `` - Blank line for readability / logical separation.
162. `      @keyframes gradientShift {` - Operational source line participating in page/server behavior.
163. `        0%, 100% { background-position: 0% 50%; }` - Operational source line participating in page/server behavior.
164. `        50% { background-position: 100% 50%; }` - Operational source line participating in page/server behavior.
165. `      }` - Closes a block (function, condition, loop, object, or element section).
166. `` - Blank line for readability / logical separation.
167. `      /* Enhanced Table Styling */` - Block comment boundary or content.
168. `      .leaderboard-table {` - Operational source line participating in page/server behavior.
169. `        background: linear-gradient(145deg, #081032 0%, #0c1542 100%);` - Operational source line participating in page/server behavior.
170. `        border: 2px solid rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
171. `        border-radius: 20px !important;` - Operational source line participating in page/server behavior.
172. `        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);` - Operational source line participating in page/server behavior.
173. `        position: relative;` - Operational source line participating in page/server behavior.
174. `        overflow: hidden;` - Operational source line participating in page/server behavior.
175. `        backdrop-filter: blur(10px);` - Operational source line participating in page/server behavior.
176. `        border-collapse: separate !important;` - Operational source line participating in page/server behavior.
177. `        border-spacing: 0 !important;` - Operational source line participating in page/server behavior.
178. `        z-index: 10;` - Operational source line participating in page/server behavior.
179. `      }` - Closes a block (function, condition, loop, object, or element section).
180. `` - Blank line for readability / logical separation.
181. `      .leaderboard-table thead tr:first-child th:first-child {` - Operational source line participating in page/server behavior.
182. `        border-top-left-radius: 18px;` - Operational source line participating in page/server behavior.
183. `      }` - Closes a block (function, condition, loop, object, or element section).
184. `` - Blank line for readability / logical separation.
185. `      .leaderboard-table thead tr:first-child th:last-child {` - Operational source line participating in page/server behavior.
186. `        border-top-right-radius: 18px;` - Operational source line participating in page/server behavior.
187. `      }` - Closes a block (function, condition, loop, object, or element section).
188. `` - Blank line for readability / logical separation.
189. `      .leaderboard-table tbody tr:last-child td:first-child {` - Operational source line participating in page/server behavior.
190. `        border-bottom-left-radius: 18px;` - Operational source line participating in page/server behavior.
191. `      }` - Closes a block (function, condition, loop, object, or element section).
192. `` - Blank line for readability / logical separation.
193. `      .leaderboard-table tbody tr:last-child td:last-child {` - Operational source line participating in page/server behavior.
194. `        border-bottom-right-radius: 18px;` - Operational source line participating in page/server behavior.
195. `      }` - Closes a block (function, condition, loop, object, or element section).
196. `` - Blank line for readability / logical separation.
197. `      .leaderboard-table th,` - Operational source line participating in page/server behavior.
198. `      .leaderboard-table td {` - Operational source line participating in page/server behavior.
199. `        border: none !important;` - Operational source line participating in page/server behavior.
200. `      }` - Closes a block (function, condition, loop, object, or element section).
201. `` - Blank line for readability / logical separation.
202. `      .leaderboard-table::before {` - Operational source line participating in page/server behavior.
203. `        content: '';` - Operational source line participating in page/server behavior.
204. `        position: absolute;` - Operational source line participating in page/server behavior.
205. `        top: 0;` - Operational source line participating in page/server behavior.
206. `        left: -100%;` - Operational source line participating in page/server behavior.
207. `        width: 100%;` - Operational source line participating in page/server behavior.
208. `        height: 100%;` - Operational source line participating in page/server behavior.
209. `        background: linear-gradient(90deg, transparent, rgba(190, 142, 48, 0.1), transparent);` - Operational source line participating in page/server behavior.
210. `        transition: left 0.5s;` - Operational source line participating in page/server behavior.
211. `        border-radius: 18px;` - Operational source line participating in page/server behavior.
212. `      }` - Closes a block (function, condition, loop, object, or element section).
213. `` - Blank line for readability / logical separation.
214. `      .leaderboard-table:hover::before {` - Operational source line participating in page/server behavior.
215. `        left: 100%;` - Operational source line participating in page/server behavior.
216. `      }` - Closes a block (function, condition, loop, object, or element section).
217. `` - Blank line for readability / logical separation.
218. `      .leaderboard-table:hover {` - Operational source line participating in page/server behavior.
219. `        border-color: #BE8E30;` - Operational source line participating in page/server behavior.
220. `        box-shadow: ` - Operational source line participating in page/server behavior.
221. `            0 20px 40px rgba(190, 142, 48, 0.2),` - Operational source line participating in page/server behavior.
222. `            0 0 30px rgba(190, 142, 48, 0.1);` - Operational source line participating in page/server behavior.
223. `      }` - Closes a block (function, condition, loop, object, or element section).
224. `` - Blank line for readability / logical separation.
225. `      .fade-move {` - Operational source line participating in page/server behavior.
226. `        transition:` - Operational source line participating in page/server behavior.
227. `          transform 0.5s ease,` - Operational source line participating in page/server behavior.
228. `          opacity 0.5s ease;` - Operational source line participating in page/server behavior.
229. `      }` - Closes a block (function, condition, loop, object, or element section).
230. `      .progress-bar {` - Operational source line participating in page/server behavior.
231. `        transition: width 1s ease-in-out;` - Operational source line participating in page/server behavior.
232. `      }` - Closes a block (function, condition, loop, object, or element section).
233. `      #leaderboard-container {` - Operational source line participating in page/server behavior.
234. `        transition: margin-right 0.3s ease;` - Operational source line participating in page/server behavior.
235. `      }` - Closes a block (function, condition, loop, object, or element section).
236. `      ` - Blank line for readability / logical separation.
237. `      /* Enhanced Side Panel */` - Block comment boundary or content.
238. `      .side-panel {` - Operational source line participating in page/server behavior.
239. `        background: linear-gradient(145deg, #081032 0%, #0c1542 100%);` - Operational source line participating in page/server behavior.
240. `        border: 2px solid rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
241. `        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);` - Operational source line participating in page/server behavior.
242. `        z-index: 150 !important;` - Operational source line participating in page/server behavior.
243. `      }` - Closes a block (function, condition, loop, object, or element section).
244. `` - Blank line for readability / logical separation.
245. `      .side-panel-header {` - Operational source line participating in page/server behavior.
246. `        background: linear-gradient(90deg, #081032, #0c1542);` - Operational source line participating in page/server behavior.
247. `        border-bottom: 2px solid rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
248. `      }` - Closes a block (function, condition, loop, object, or element section).
249. `` - Blank line for readability / logical separation.
250. `      /* Enhanced Result Container */` - Block comment boundary or content.
251. `      .result-container {` - Operational source line participating in page/server behavior.
252. `        background: rgba(255, 255, 255, 0.05);` - Operational source line participating in page/server behavior.
253. `        border: 2px solid rgba(190, 142, 48, 0.2);` - Operational source line participating in page/server behavior.
254. `        border-radius: 30px;` - Operational source line participating in page/server behavior.
255. `        box-shadow: 0 0 30px rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
256. `        position: relative;` - Operational source line participating in page/server behavior.
257. `      }` - Closes a block (function, condition, loop, object, or element section).
258. `` - Blank line for readability / logical separation.
259. `      .result-container::before {` - Operational source line participating in page/server behavior.
260. `        content: '';` - Operational source line participating in page/server behavior.
261. `        position: absolute;` - Operational source line participating in page/server behavior.
262. `        top: -10px;` - Operational source line participating in page/server behavior.
263. `        left: 51%;` - Operational source line participating in page/server behavior.
264. `        transform: translateX(-50%);` - Operational source line participating in page/server behavior.
265. `        width: 20px;` - Operational source line participating in page/server behavior.
266. `        height: 20px;` - Operational source line participating in page/server behavior.
267. `        background: linear-gradient(45deg, #BE8E30, #FFD700);` - Operational source line participating in page/server behavior.
268. `        border-radius: 50%;` - Operational source line participating in page/server behavior.
269. `        border: 2px solid #081032;` - Operational source line participating in page/server behavior.
270. `      }` - Closes a block (function, condition, loop, object, or element section).
271. `` - Blank line for readability / logical separation.
272. `      /* Enhanced animations from index.html theme */` - Block comment boundary or content.
273. `      .hover-lift {` - Operational source line participating in page/server behavior.
274. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
275. `      }` - Closes a block (function, condition, loop, object, or element section).
276. `      ` - Blank line for readability / logical separation.
277. `      .hover-lift:hover {` - Operational source line participating in page/server behavior.
278. `        transform: translateY(-5px);` - Operational source line participating in page/server behavior.
279. `        box-shadow: 0 10px 25px rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
280. `      }` - Closes a block (function, condition, loop, object, or element section).
281. `      ` - Blank line for readability / logical separation.
282. `      .hover-glow {` - Operational source line participating in page/server behavior.
283. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
284. `      }` - Closes a block (function, condition, loop, object, or element section).
285. `      ` - Blank line for readability / logical separation.
286. `      .hover-glow:hover {` - Operational source line participating in page/server behavior.
287. `        text-shadow: 0 0 15px rgba(190, 142, 48, 0.8);` - Operational source line participating in page/server behavior.
288. `        transform: scale(1.02);` - Operational source line participating in page/server behavior.
289. `      }` - Closes a block (function, condition, loop, object, or element section).
290. `      ` - Blank line for readability / logical separation.
291. `      .text-reveal {` - Operational source line participating in page/server behavior.
292. `        animation: textReveal 0.8s ease-out both;` - Operational source line participating in page/server behavior.
293. `      }` - Closes a block (function, condition, loop, object, or element section).
294. `      ` - Blank line for readability / logical separation.
295. `      @keyframes textReveal {` - Operational source line participating in page/server behavior.
296. `        0% {` - Operational source line participating in page/server behavior.
297. `          opacity: 0;` - Operational source line participating in page/server behavior.
298. `          transform: translateY(20px);` - Operational source line participating in page/server behavior.
299. `          filter: blur(5px);` - Operational source line participating in page/server behavior.
300. `        }` - Closes a block (function, condition, loop, object, or element section).
301. `        100% {` - Operational source line participating in page/server behavior.
302. `          opacity: 1;` - Operational source line participating in page/server behavior.
303. `          transform: translateY(0);` - Operational source line participating in page/server behavior.
304. `          filter: blur(0px);` - Operational source line participating in page/server behavior.
305. `        }` - Closes a block (function, condition, loop, object, or element section).
306. `      }` - Closes a block (function, condition, loop, object, or element section).
307. `      ` - Blank line for readability / logical separation.
308. `      .animate-navbar {` - Operational source line participating in page/server behavior.
309. `        animation: slideInFromTop 0.8s ease-out;` - Operational source line participating in page/server behavior.
310. `      }` - Closes a block (function, condition, loop, object, or element section).
311. `      ` - Blank line for readability / logical separation.
312. `      @keyframes slideInFromTop {` - Operational source line participating in page/server behavior.
313. `        0% {` - Operational source line participating in page/server behavior.
314. `          opacity: 0;` - Operational source line participating in page/server behavior.
315. `          transform: translateY(-30px);` - Operational source line participating in page/server behavior.
316. `        }` - Closes a block (function, condition, loop, object, or element section).
317. `        100% {` - Operational source line participating in page/server behavior.
318. `          opacity: 1;` - Operational source line participating in page/server behavior.
319. `          transform: translateY(0);` - Operational source line participating in page/server behavior.
320. `        }` - Closes a block (function, condition, loop, object, or element section).
321. `      }` - Closes a block (function, condition, loop, object, or element section).
322. `      ` - Blank line for readability / logical separation.
323. `      .fade-in-section {` - Operational source line participating in page/server behavior.
324. `        opacity: 0;` - Operational source line participating in page/server behavior.
325. `        transform: translateY(30px);` - Operational source line participating in page/server behavior.
326. `        transition: all 0.8s ease-out;` - Operational source line participating in page/server behavior.
327. `      }` - Closes a block (function, condition, loop, object, or element section).
328. `      ` - Blank line for readability / logical separation.
329. `      .fade-in-section.visible {` - Operational source line participating in page/server behavior.
330. `        opacity: 1;` - Operational source line participating in page/server behavior.
331. `        transform: translateY(0);` - Operational source line participating in page/server behavior.
332. `      }` - Closes a block (function, condition, loop, object, or element section).
333. `      ` - Blank line for readability / logical separation.
334. `      /* Enhanced button styling to match index.html */` - Block comment boundary or content.
335. `      .theme-button {` - Operational source line participating in page/server behavior.
336. `        text-decoration: none;` - Operational source line participating in page/server behavior.
337. `        display: inline-block;` - Operational source line participating in page/server behavior.
338. `        color: white;` - Operational source line participating in page/server behavior.
339. `        background: #081032;` - Operational source line participating in page/server behavior.
340. `        padding: 12px 24px;` - Operational source line participating in page/server behavior.
341. `        border-radius: 50px;` - Operational source line participating in page/server behavior.
342. `        border: 4px solid #BE8E30;` - Operational source line participating in page/server behavior.
343. `        font-weight: 600;` - Operational source line participating in page/server behavior.
344. `        text-align: center;` - Operational source line participating in page/server behavior.
345. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
346. `        box-shadow: 0 4px 15px rgba(190, 142, 48, 0.2);` - Operational source line participating in page/server behavior.
347. `      }` - Closes a block (function, condition, loop, object, or element section).
348. `      ` - Blank line for readability / logical separation.
349. `      .theme-button:hover {` - Operational source line participating in page/server behavior.
350. `        background: #BE8E30;` - Operational source line participating in page/server behavior.
351. `        color: #081032;` - Operational source line participating in page/server behavior.
352. `        box-shadow: 0 8px 25px rgba(190, 142, 48, 0.4);` - Operational source line participating in page/server behavior.
353. `        transform: translateY(-2px);` - Operational source line participating in page/server behavior.
354. `      }` - Closes a block (function, condition, loop, object, or element section).
355. `` - Blank line for readability / logical separation.
356. `      /* Scrollbar Styling */` - Block comment boundary or content.
357. `      ::-webkit-scrollbar {` - Operational source line participating in page/server behavior.
358. `        width: 12px;` - Operational source line participating in page/server behavior.
359. `      }` - Closes a block (function, condition, loop, object, or element section).
360. `` - Blank line for readability / logical separation.
361. `      ::-webkit-scrollbar-track {` - Operational source line participating in page/server behavior.
362. `        background: #081032;` - Operational source line participating in page/server behavior.
363. `      }` - Closes a block (function, condition, loop, object, or element section).
364. `` - Blank line for readability / logical separation.
365. `      ::-webkit-scrollbar-thumb {` - Operational source line participating in page/server behavior.
366. `        background: linear-gradient(45deg, #BE8E30, #FFD700);` - Operational source line participating in page/server behavior.
367. `        border-radius: 6px;` - Operational source line participating in page/server behavior.
368. `      }` - Closes a block (function, condition, loop, object, or element section).
369. `` - Blank line for readability / logical separation.
370. `      ::-webkit-scrollbar-thumb:hover {` - Operational source line participating in page/server behavior.
371. `        background: linear-gradient(45deg, #FFD700, #BE8E30);` - Operational source line participating in page/server behavior.
372. `      }` - Closes a block (function, condition, loop, object, or element section).
373. `` - Blank line for readability / logical separation.
374. `      /* Prevent horizontal overflow while maintaining table layout */` - Block comment boundary or content.
375. `      .container {` - Operational source line participating in page/server behavior.
376. `        max-width: 100vw;` - Operational source line participating in page/server behavior.
377. `        overflow-x: hidden;` - Operational source line participating in page/server behavior.
378. `      }` - Closes a block (function, condition, loop, object, or element section).
379. `      ` - Blank line for readability / logical separation.
380. `      .overflow-x-auto {` - Operational source line participating in page/server behavior.
381. `        overflow-x: hidden;` - Operational source line participating in page/server behavior.
382. `      }` - Closes a block (function, condition, loop, object, or element section).
383. `` - Blank line for readability / logical separation.
384. `      /* Enhanced Mobile Responsiveness */` - Block comment boundary or content.
385. `      @media (max-width: 768px) {` - Operational source line participating in page/server behavior.
386. `        .leaderboard-table {` - Operational source line participating in page/server behavior.
387. `          margin-bottom: 1rem;` - Operational source line participating in page/server behavior.
388. `        }` - Closes a block (function, condition, loop, object, or element section).
389. `        ` - Blank line for readability / logical separation.
390. `        .section-title {` - Operational source line participating in page/server behavior.
391. `          font-size: 2rem !important;` - Operational source line participating in page/server behavior.
392. `        }` - Closes a block (function, condition, loop, object, or element section).
393. `` - Blank line for readability / logical separation.
394. `        .bg-decoration::before,` - Operational source line participating in page/server behavior.
395. `        .bg-decoration::after {` - Operational source line participating in page/server behavior.
396. `          display: none;` - Operational source line participating in page/server behavior.
397. `        }` - Closes a block (function, condition, loop, object, or element section).
398. `        ` - Blank line for readability / logical separation.
399. `        /* On mobile, allow horizontal scroll for the table only */` - Block comment boundary or content.
400. `        .overflow-x-auto {` - Operational source line participating in page/server behavior.
401. `          overflow-x: auto;` - Operational source line participating in page/server behavior.
402. `        }` - Closes a block (function, condition, loop, object, or element section).
403. `      }` - Closes a block (function, condition, loop, object, or element section).
404. `` - Blank line for readability / logical separation.
405. `      /* Entrance Animations */` - Block comment boundary or content.
406. `      .fade-in-up {` - Operational source line participating in page/server behavior.
407. `        opacity: 0;` - Operational source line participating in page/server behavior.
408. `        transform: translateY(30px);` - Operational source line participating in page/server behavior.
409. `        animation: fadeInUp 0.8s ease forwards;` - Operational source line participating in page/server behavior.
410. `      }` - Closes a block (function, condition, loop, object, or element section).
411. `` - Blank line for readability / logical separation.
412. `      @keyframes fadeInUp {` - Operational source line participating in page/server behavior.
413. `        to {` - Operational source line participating in page/server behavior.
414. `          opacity: 1;` - Operational source line participating in page/server behavior.
415. `          transform: translateY(0);` - Operational source line participating in page/server behavior.
416. `        }` - Closes a block (function, condition, loop, object, or element section).
417. `      }` - Closes a block (function, condition, loop, object, or element section).
418. `    </style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
419. `  </head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
420. `<body style="background: linear-gradient(135deg, #0a0f2c, #1a2949);" class="text-white">` - HTML markup line contributing structure, metadata, scripts, or content containers.
421. `    <!-- Background Decorations -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
422. `    <div class="bg-decoration"></div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
423. `    ` - Blank line for readability / logical separation.
424. `    <header style="background-color: #081032;" class="shadow-md animate-navbar">` - HTML markup line contributing structure, metadata, scripts, or content containers.
425. `      <div class="container pt-2 mx-auto flex items-center justify-between">` - HTML markup line contributing structure, metadata, scripts, or content containers.
426. `        <div class="flex items-center space-x-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
427. `          <img` - HTML markup line contributing structure, metadata, scripts, or content containers.
428. `            src="/assets/persev.avif"` - Operational source line participating in page/server behavior.
429. `            alt="Logo"` - Operational source line participating in page/server behavior.
430. `            class="h-auto w-16 rounded-full"` - Operational source line participating in page/server behavior.
431. `          />` - Operational source line participating in page/server behavior.
432. `          <a href="/"><h1 class="text-3xl sm:text-3xl text-blue-200" style = "font-family:Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
433. `            Perseverantia 2025` - Operational source line participating in page/server behavior.
434. `          </h1></a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
435. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
436. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
437. `    </header>` - HTML markup line contributing structure, metadata, scripts, or content containers.
438. `` - Blank line for readability / logical separation.
439. `    <div class="container mx-auto mt-12 px-4 fade-in-section fade-in-up" id="leaderboard-container">` - HTML markup line contributing structure, metadata, scripts, or content containers.
440. `      <h1 class="text-4xl font-bold text-center text-blue-200 mb-8 section-title hover-glow" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
441. `        Leaderboard` - Operational source line participating in page/server behavior.
442. `        <div id="mobilelay" class="hidden md:block"></div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
443. `      </h1>` - HTML markup line contributing structure, metadata, scripts, or content containers.
444. `      <div class="overflow-x-auto" >` - HTML markup line contributing structure, metadata, scripts, or content containers.
445. `        <table` - HTML markup line contributing structure, metadata, scripts, or content containers.
446. `          class="min-w-full leaderboard-table rounded-lg shadow-lg overflow-hidden my-8 hover-lift"` - Operational source line participating in page/server behavior.
447. `          id="leaderboard"` - Operational source line participating in page/server behavior.
448. `        >` - Operational source line participating in page/server behavior.
449. `          <thead>` - HTML markup line contributing structure, metadata, scripts, or content containers.
450. `            <tr` - HTML markup line contributing structure, metadata, scripts, or content containers.
451. `              class="bg-blue-700 text-blue-200 uppercase text-md tracking-wider"` - Operational source line participating in page/server behavior.
452. `            >` - Operational source line participating in page/server behavior.
453. `              <th class="py-4 px-2 text-center w-16" scope="col">Position</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
454. `              <th class="py-4 pl-8 px-2 text-left w-48" scope="col">School</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
455. `              <th class="py-4 px-2 text-center w-24" scope="col">Points</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
456. `              <th class="py-4 px-2 text-center hidden sm:table-cell" scope="col">` - HTML markup line contributing structure, metadata, scripts, or content containers.
457. `                Progress` - Operational source line participating in page/server behavior.
458. `              </th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
459. `            </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
460. `          </thead>` - HTML markup line contributing structure, metadata, scripts, or content containers.
461. `          <tbody id="leaderboard-body" class="text-blue-100"></tbody>` - HTML markup line contributing structure, metadata, scripts, or content containers.
462. `        </table>` - HTML markup line contributing structure, metadata, scripts, or content containers.
463. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
464. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
465. `` - Blank line for readability / logical separation.
466. `    <div` - HTML markup line contributing structure, metadata, scripts, or content containers.
467. `      id="school-panel"` - Operational source line participating in page/server behavior.
468. `      class="fixed top-0 right-0 h-full w-full md:w-1/4 side-panel shadow-lg transform overflow-y-auto translate-x-full transition-transform duration-300"` - Operational source line participating in page/server behavior.
469. `    >` - Operational source line participating in page/server behavior.
470. `      <div` - HTML markup line contributing structure, metadata, scripts, or content containers.
471. `        class="flex justify-between items-center p-4 side-panel-header"` - Operational source line participating in page/server behavior.
472. `      >` - Operational source line participating in page/server behavior.
473. `        <h2 id="school-title" class="text-2xl font-bold text-blue-300 hover-glow" style="font-family: Mestizo;"></h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
474. `        <button` - HTML markup line contributing structure, metadata, scripts, or content containers.
475. `          onclick="closePanel()"` - Operational source line participating in page/server behavior.
476. `          class="text-white text-2xl focus:outline-none hover:text-red-500 hover-glow"` - Operational source line participating in page/server behavior.
477. `          aria-label="Close"` - Operational source line participating in page/server behavior.
478. `        >` - Operational source line participating in page/server behavior.
479. `          &times;` - Operational source line participating in page/server behavior.
480. `        </button>` - HTML markup line contributing structure, metadata, scripts, or content containers.
481. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
482. `      <div class="p-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
483. `        <table class="w-full text-left table-auto">` - HTML markup line contributing structure, metadata, scripts, or content containers.
484. `          <tbody id="school-detail-body" class="text-blue-100">` - HTML markup line contributing structure, metadata, scripts, or content containers.
485. `            <tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
486. `              <td class="py-2 font-semibold text-blue-200">Points:</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
487. `              <td id="school-points" class="py-2"></td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
488. `            </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
489. `            <tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
490. `              <td class="py-2 font-semibold text-blue-200">Rank:</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
491. `              <td id="school-rank" class="py-2"></td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
492. `            </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
493. `          </tbody>` - HTML markup line contributing structure, metadata, scripts, or content containers.
494. `        </table>` - HTML markup line contributing structure, metadata, scripts, or content containers.
495. `        ` - Blank line for readability / logical separation.
496. `` - Blank line for readability / logical separation.
497. `        <table class="w-full text-left rounded-lg mt-8 border-collapse">` - HTML markup line contributing structure, metadata, scripts, or content containers.
498. `          <thead` - HTML markup line contributing structure, metadata, scripts, or content containers.
499. `            class="bg-blue-700 text-blue-200 uppercase text-md tracking-wider"` - Operational source line participating in page/server behavior.
500. `          >` - Operational source line participating in page/server behavior.
501. `            <tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
502. `              <th class="px-4 py-3">Event</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
503. `              <th class="px-4 py-3">Points</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
504. `            </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
505. `          </thead>` - HTML markup line contributing structure, metadata, scripts, or content containers.
506. `          <tbody id="scc" class="text-blue-100"></tbody>` - HTML markup line contributing structure, metadata, scripts, or content containers.
507. `        </table>` - HTML markup line contributing structure, metadata, scripts, or content containers.
508. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
509. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
510. `` - Blank line for readability / logical separation.
511. `    <script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
512. `      let previousData = [];` - Declares a mutable variable used for evolving UI/state values.
513. `` - Blank line for readability / logical separation.
514. `      async function openPanel(school) {` - Defines an async function that awaits I/O operations (usually fetch).
515. `        document.getElementById("school-title").innerText = school.name;` - Reads a DOM element reference to manipulate content or behavior.
516. `        document.getElementById("school-points").innerText = school.points;` - Reads a DOM element reference to manipulate content or behavior.
517. `        document.getElementById("school-rank").innerText = `#${school.rank}`;` - Reads a DOM element reference to manipulate content or behavior.
518. `        document` - Operational source line participating in page/server behavior.
519. `          .getElementById("school-panel")` - Reads a DOM element reference to manipulate content or behavior.
520. `          .classList.remove("translate-x-full");` - Adds/removes/toggles CSS classes to control visibility or animation state.
521. `` - Blank line for readability / logical separation.
522. `        document.getElementById("leaderboard-container").classList.add("mr-96");` - Reads a DOM element reference to manipulate content or behavior.
523. `        document.getElementById("leaderboard-container").classList.add("w-2/3");` - Reads a DOM element reference to manipulate content or behavior.
524. `        const response = await fetch("db.json");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
525. `        var data = await response.json();` - Declares function/global-scoped variable (legacy style) used by script runtime.
526. `        let db = {` - Declares a mutable variable used for evolving UI/state values.
527. `  port: 3000,` - Operational source line participating in page/server behavior.
528. `  events: [` - Operational source line participating in page/server behavior.
529. `    "Admeta: Category 1", "Admeta: Category 2",` - Operational source line participating in page/server behavior.
530. `    "Artem",` - Operational source line participating in page/server behavior.
531. `    "Carmen: Category 1","Carmen: Category 2",` - Operational source line participating in page/server behavior.
532. `    "Fabula",` - Operational source line participating in page/server behavior.
533. `    "Fortuna",` - Operational source line participating in page/server behavior.
534. `    "Codeferno",` - Operational source line participating in page/server behavior.
535. `    "Gustatio",` - Operational source line participating in page/server behavior.
536. `    "Mahim 16",` - Operational source line participating in page/server behavior.
537. `    "'Ad'venturium",` - Operational source line participating in page/server behavior.
538. `    "Gratia",` - Operational source line participating in page/server behavior.
539. `    "Panache",` - Operational source line participating in page/server behavior.
540. `    "Symphonia",` - Operational source line participating in page/server behavior.
541. `    "Mr. and Mrs. Perseverantia",` - Operational source line participating in page/server behavior.
542. `    "Explorare",` - Operational source line participating in page/server behavior.
543. `    "Monopolium",` - Operational source line participating in page/server behavior.
544. `    "Football: U17 Boys","Football: U19 Boys","Football: U19 Girls",` - Operational source line participating in page/server behavior.
545. `    "Basketball: U19 Girls","Basketball: U19 Boys",` - Operational source line participating in page/server behavior.
546. `    "Gully Cricket",` - Operational source line participating in page/server behavior.
547. `    "Table Tennis",` - Operational source line participating in page/server behavior.
548. `    "Tug of War: U16 Boys","Tug of War: U16 Girls","Tug of War: U19 Boys","Tug of War: U19 Girls",` - Operational source line participating in page/server behavior.
549. `    "E-Sports"` - Operational source line participating in page/server behavior.
550. `  ],` - Operational source line participating in page/server behavior.
551. `  schools: [` - Operational source line participating in page/server behavior.
552. `    "P1",` - Operational source line participating in page/server behavior.
553. `    "P2",` - Operational source line participating in page/server behavior.
554. `    "P3",` - Operational source line participating in page/server behavior.
555. `    "P4",` - Operational source line participating in page/server behavior.
556. `    "P5",` - Operational source line participating in page/server behavior.
557. `    "P6",` - Operational source line participating in page/server behavior.
558. `    "P7",` - Operational source line participating in page/server behavior.
559. `    "P8",` - Operational source line participating in page/server behavior.
560. `    "P9",` - Operational source line participating in page/server behavior.
561. `    "P10",` - Operational source line participating in page/server behavior.
562. `    "P11",` - Operational source line participating in page/server behavior.
563. `    "P12",` - Operational source line participating in page/server behavior.
564. `    "P13",` - Operational source line participating in page/server behavior.
565. `    "P14",` - Operational source line participating in page/server behavior.
566. `    "P15",` - Operational source line participating in page/server behavior.
567. `    "P16",` - Operational source line participating in page/server behavior.
568. `    "P17",` - Operational source line participating in page/server behavior.
569. `    "P18",` - Operational source line participating in page/server behavior.
570. `    "P20",` - Operational source line participating in page/server behavior.
571. `    "P21",` - Operational source line participating in page/server behavior.
572. `    "P22",` - Operational source line participating in page/server behavior.
573. `    "P23",` - Operational source line participating in page/server behavior.
574. `    "P24",` - Operational source line participating in page/server behavior.
575. `    "P25",` - Operational source line participating in page/server behavior.
576. `    "P26",` - Operational source line participating in page/server behavior.
577. `    "P28",` - Operational source line participating in page/server behavior.
578. `    "P29",` - Operational source line participating in page/server behavior.
579. `  ]` - Operational source line participating in page/server behavior.
580. `};` - Closes a block (function, condition, loop, object, or element section).
581. `` - Blank line for readability / logical separation.
582. `        let points = [];` - Declares a mutable variable used for evolving UI/state values.
583. `        for (let i = 0; i < data.schools.length; i++) {` - Iterates through a list/collection to build UI or process records.
584. `          points.push(data.schools[i].points);` - Operational source line participating in page/server behavior.
585. `        }` - Closes a block (function, condition, loop, object, or element section).
586. `        data = { schools: db.schools, events: db.events, points: points, eventEnd:true, db:data };` - Starts an object literal assignment / configuration block.
587. `        //sidepanel` - Comment line describing intent or section.
588. `        const scd = data.db.schools.filter((e) => e.name === school.name)[0];` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
589. `` - Blank line for readability / logical separation.
590. `        console.log(scd)` - Operational source line participating in page/server behavior.
591. `        document.getElementById("scc").innerHTML = "";` - Reads a DOM element reference to manipulate content or behavior.
592. `` - Blank line for readability / logical separation.
593. `        data.events.forEach((event, index) => {` - Arrow function expression used as callback or concise helper.
594. `          const row = document.createElement("tr");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
595. `          row.innerHTML = `` - Sets HTML markup into a container element.
596. `            <td class="px-2 py-2 whitespace-nowrap text-blue-100 border-b border-gray-700">` - HTML markup line contributing structure, metadata, scripts, or content containers.
597. `              ${event}` - Operational source line participating in page/server behavior.
598. `            </td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
599. `            <td class="px-2 py-2 whitespace-nowrap text-blue-100 border-b border-gray-700">` - HTML markup line contributing structure, metadata, scripts, or content containers.
600. `              ${scd.eventpoints[index]}` - Operational source line participating in page/server behavior.
601. `            </td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
602. `          `;` - Operational source line participating in page/server behavior.
603. `          document.getElementById("scc").appendChild(row);` - Reads a DOM element reference to manipulate content or behavior.
604. `        });` - Closes a block (function, condition, loop, object, or element section).
605. `      }` - Closes a block (function, condition, loop, object, or element section).
606. `` - Blank line for readability / logical separation.
607. `      function closePanel() {` - Defines a named function used by the page/application flow.
608. `        document` - Operational source line participating in page/server behavior.
609. `          .getElementById("school-panel")` - Reads a DOM element reference to manipulate content or behavior.
610. `          .classList.add("translate-x-full");` - Adds/removes/toggles CSS classes to control visibility or animation state.
611. `` - Blank line for readability / logical separation.
612. `        document` - Operational source line participating in page/server behavior.
613. `          .getElementById("leaderboard-container")` - Reads a DOM element reference to manipulate content or behavior.
614. `          .classList.remove("mr-96");` - Adds/removes/toggles CSS classes to control visibility or animation state.
615. `        document` - Operational source line participating in page/server behavior.
616. `          .getElementById("leaderboard-container")` - Reads a DOM element reference to manipulate content or behavior.
617. `          .classList.remove("w-2/3");` - Adds/removes/toggles CSS classes to control visibility or animation state.
618. `      }` - Closes a block (function, condition, loop, object, or element section).
619. `` - Blank line for readability / logical separation.
620. `      function renderLeaderboard(data) {` - Defines a named function used by the page/application flow.
621. `        const leaderboardBody = document.getElementById("leaderboard-body");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
622. `        const maxPoints = Math.max(...data.map((item) => item.points)) \\|\\| 1;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
623. `` - Blank line for readability / logical separation.
624. `        data.sort((a, b) => b.points - a.points);` - Arrow function expression used as callback or concise helper.
625. `` - Blank line for readability / logical separation.
626. `        if (data.length > 0) {` - Starts a conditional branch that decides behavior based on runtime state.
627. `            data[0].rank = 1; ` - Operational source line participating in page/server behavior.
628. `            for (let i = 1; i < data.length; i++) {` - Iterates through a list/collection to build UI or process records.
629. `                if (data[i].points === data[i - 1].points) {` - Starts a conditional branch that decides behavior based on runtime state.
630. `                    data[i].rank = data[i - 1].rank; ` - Operational source line participating in page/server behavior.
631. `                } else {` - Closes a block (function, condition, loop, object, or element section).
632. `                    data[i].rank = data[i - 1].rank + 1;` - Operational source line participating in page/server behavior.
633. `                }` - Closes a block (function, condition, loop, object, or element section).
634. `            }` - Closes a block (function, condition, loop, object, or element section).
635. `        }` - Closes a block (function, condition, loop, object, or element section).
636. `` - Blank line for readability / logical separation.
637. `        leaderboardBody.innerHTML = "";` - Sets HTML markup into a container element.
638. `` - Blank line for readability / logical separation.
639. `        data.forEach((item) => {` - Arrow function expression used as callback or concise helper.
640. `          const percentage = (item.points / maxPoints) * 100;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
641. `` - Blank line for readability / logical separation.
642. `          let barColor = "bg-blue-500";` - Declares a mutable variable used for evolving UI/state values.
643. `          if (item.rank === 1) barColor = "bg-yellow-400";` - Starts a conditional branch that decides behavior based on runtime state.
644. `          else if (item.rank === 2) barColor = "bg-gray-300";` - Fallback branch for the preceding condition.
645. `          else if (item.rank === 3) barColor = "bg-yellow-700";` - Fallback branch for the preceding condition.
646. `` - Blank line for readability / logical separation.
647. `          const previousItem = previousData.find((d) => d.name === item.name);` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
648. `          const previousPosition = previousItem ? previousItem.rank : null;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
649. `          const positionChange = previousPosition` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
650. `            ? previousPosition - item.rank` - Operational source line participating in page/server behavior.
651. `            : 0;` - Operational source line participating in page/server behavior.
652. `` - Blank line for readability / logical separation.
653. `          let highlightClass = "";` - Declares a mutable variable used for evolving UI/state values.
654. `          let positionArrow = "";` - Declares a mutable variable used for evolving UI/state values.
655. `` - Blank line for readability / logical separation.
656. `          if (positionChange > 0) {` - Starts a conditional branch that decides behavior based on runtime state.
657. `            highlightClass = "bg-green-800";` - Operational source line participating in page/server behavior.
658. `            positionArrow = "▲";` - Operational source line participating in page/server behavior.
659. `          } else if (positionChange < 0) {` - Closes a block (function, condition, loop, object, or element section).
660. `            highlightClass = "bg-red-800";` - Operational source line participating in page/server behavior.
661. `            positionArrow = "▼";` - Operational source line participating in page/server behavior.
662. `          }` - Closes a block (function, condition, loop, object, or element section).
663. `` - Blank line for readability / logical separation.
664. `          const row = document.createElement("tr");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
665. `          row.dataset.school = item.name;` - Operational source line participating in page/server behavior.
666. `          row.className = `transition-colors duration-500 ${highlightClass} hover:bg-gray-600`;` - Operational source line participating in page/server behavior.
667. `` - Blank line for readability / logical separation.
668. `          row.innerHTML = `` - Sets HTML markup into a container element.
669. `            <td class="py-4 px-6 font-semibold text-center text-md">` - HTML markup line contributing structure, metadata, scripts, or content containers.
670. `              #${item.rank} ${positionArrow ? `<span class="inline">${positionArrow}</span>` : ""}` - Operational source line participating in page/server behavior.
671. `            </td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
672. `            <td class="py-4 px-6 text-left cursor-pointer text-blue-100">` - HTML markup line contributing structure, metadata, scripts, or content containers.
673. `              ${item.rank === 1 ? "🥇" : item.rank === 2 ? "🥈" : item.rank === 3 ? "🥉" : ""} ${item.name}` - Operational source line participating in page/server behavior.
674. `            </td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
675. `            <td class="py-4 px-6 text-center">${item.points}</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
676. `            <td class="py-4 px-6 hidden sm:table-cell">` - HTML markup line contributing structure, metadata, scripts, or content containers.
677. `              <div class="w-full bg-gray-700 rounded-full h-4 overflow-hidden">` - HTML markup line contributing structure, metadata, scripts, or content containers.
678. `                <div class="${barColor} h-4 rounded-full progress-bar" data-progress="${item.name}"></div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
679. `              </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
680. `            </td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
681. `          `;` - Operational source line participating in page/server behavior.
682. `` - Blank line for readability / logical separation.
683. `          row.addEventListener("click", () => openPanel(item));` - Attaches an event listener to react to user interaction or lifecycle events.
684. `          leaderboardBody.appendChild(row);` - Operational source line participating in page/server behavior.
685. `` - Blank line for readability / logical separation.
686. `          const progressBar = row.querySelector(` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
687. `            `[data-progress="${item.name}"]`,` - Operational source line participating in page/server behavior.
688. `          );` - Operational source line participating in page/server behavior.
689. `          requestAnimationFrame(() => {` - Arrow function expression used as callback or concise helper.
690. `            progressBar.style.width = `${percentage}%`;` - Operational source line participating in page/server behavior.
691. `          });` - Closes a block (function, condition, loop, object, or element section).
692. `` - Blank line for readability / logical separation.
693. `          if (highlightClass) {` - Starts a conditional branch that decides behavior based on runtime state.
694. `            setTimeout(() => {` - Arrow function expression used as callback or concise helper.
695. `              row.classList.remove(highlightClass);` - Adds/removes/toggles CSS classes to control visibility or animation state.
696. `              const positionCell = row.querySelector("td");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
697. `              if (positionCell) positionCell.innerHTML = `#${item.rank}`;` - Sets HTML markup into a container element.
698. `            }, 6000);` - Closes a block (function, condition, loop, object, or element section).
699. `          }` - Closes a block (function, condition, loop, object, or element section).
700. `        });` - Closes a block (function, condition, loop, object, or element section).
701. `` - Blank line for readability / logical separation.
702. `        previousData = JSON.parse(JSON.stringify(data)); ` - Operational source line participating in page/server behavior.
703. `      }` - Closes a block (function, condition, loop, object, or element section).
704. `` - Blank line for readability / logical separation.
705. `      async function fetchAndRender() {` - Defines an async function that awaits I/O operations (usually fetch).
706. `        try {` - Operational source line participating in page/server behavior.
707. `          const response = await fetch("db.json");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
708. `        var data = await response.json();` - Declares function/global-scoped variable (legacy style) used by script runtime.
709. `        let db = {` - Declares a mutable variable used for evolving UI/state values.
710. `  port: 3000,` - Operational source line participating in page/server behavior.
711. `  events: [` - Operational source line participating in page/server behavior.
712. `    "Admeta: Category 1", "Admeta: Category 2",` - Operational source line participating in page/server behavior.
713. `    "Artem",` - Operational source line participating in page/server behavior.
714. `    "Carmen: Category 1","Carmen: Category 2",` - Operational source line participating in page/server behavior.
715. `    "Fabula",` - Operational source line participating in page/server behavior.
716. `    "Fortuna",` - Operational source line participating in page/server behavior.
717. `    "Codeferno",` - Operational source line participating in page/server behavior.
718. `    "Gustatio",` - Operational source line participating in page/server behavior.
719. `    "Mahim 16",` - Operational source line participating in page/server behavior.
720. `    "'Ad'venturium",` - Operational source line participating in page/server behavior.
721. `    "Gratia",` - Operational source line participating in page/server behavior.
722. `    "Panache",` - Operational source line participating in page/server behavior.
723. `    "Symphonia",` - Operational source line participating in page/server behavior.
724. `    "Mr. and Mrs. Perseverantia",` - Operational source line participating in page/server behavior.
725. `    "Explorare",` - Operational source line participating in page/server behavior.
726. `    "Monopolium",` - Operational source line participating in page/server behavior.
727. `    "Football: U17 Boys","Football: U19 Boys","Football: U19 Girls",` - Operational source line participating in page/server behavior.
728. `    "Basketball: U19 Girls","Basketball: U19 Boys",` - Operational source line participating in page/server behavior.
729. `    "Gully Cricket",` - Operational source line participating in page/server behavior.
730. `    "Table Tennis",` - Operational source line participating in page/server behavior.
731. `    "Tug of War: U16 Boys","Tug of War: U16 Girls","Tug of War: U19 Boys","Tug of War: U19 Girls",` - Operational source line participating in page/server behavior.
732. `    "E-Sports"` - Operational source line participating in page/server behavior.
733. `  ],` - Operational source line participating in page/server behavior.
734. `  schools: [` - Operational source line participating in page/server behavior.
735. `    "P1",` - Operational source line participating in page/server behavior.
736. `    "P2",` - Operational source line participating in page/server behavior.
737. `    "P3",` - Operational source line participating in page/server behavior.
738. `    "P4",` - Operational source line participating in page/server behavior.
739. `    "P5",` - Operational source line participating in page/server behavior.
740. `    "P6",` - Operational source line participating in page/server behavior.
741. `    "P7",` - Operational source line participating in page/server behavior.
742. `    "P8",` - Operational source line participating in page/server behavior.
743. `    "P9",` - Operational source line participating in page/server behavior.
744. `    "P10",` - Operational source line participating in page/server behavior.
745. `    "P11",` - Operational source line participating in page/server behavior.
746. `    "P12",` - Operational source line participating in page/server behavior.
747. `    "P13",` - Operational source line participating in page/server behavior.
748. `    "P14",` - Operational source line participating in page/server behavior.
749. `    "P15",` - Operational source line participating in page/server behavior.
750. `    "P16",` - Operational source line participating in page/server behavior.
751. `    "P17",` - Operational source line participating in page/server behavior.
752. `    "P18",` - Operational source line participating in page/server behavior.
753. `    "P20",` - Operational source line participating in page/server behavior.
754. `    "P21",` - Operational source line participating in page/server behavior.
755. `    "P22",` - Operational source line participating in page/server behavior.
756. `    "P23",` - Operational source line participating in page/server behavior.
757. `    "P24",` - Operational source line participating in page/server behavior.
758. `    "P25",` - Operational source line participating in page/server behavior.
759. `    "P26",` - Operational source line participating in page/server behavior.
760. `    "P28",` - Operational source line participating in page/server behavior.
761. `    "P29",` - Operational source line participating in page/server behavior.
762. `  ]` - Operational source line participating in page/server behavior.
763. `};` - Closes a block (function, condition, loop, object, or element section).
764. `` - Blank line for readability / logical separation.
765. `        let pointsa = [];` - Declares a mutable variable used for evolving UI/state values.
766. `        for (let i = 0; i < data.schools.length; i++) {` - Iterates through a list/collection to build UI or process records.
767. `          pointsa.push(data.schools[i].points);` - Operational source line participating in page/server behavior.
768. `        }` - Closes a block (function, condition, loop, object, or element section).
769. `        data = { schools: db.schools, events: db.events, points: pointsa, eventEnd:true };` - Starts an object literal assignment / configuration block.
770. `          if(data.eventEnd) onEventsEnd();` - Starts a conditional branch that decides behavior based on runtime state.
771. `          console.log(data.eventEnd)` - Operational source line participating in page/server behavior.
772. `          console.log(ee)` - Operational source line participating in page/server behavior.
773. `          if(!data.eventEnd && ee) window.location.reload()` - Starts a conditional branch that decides behavior based on runtime state.
774. `` - Blank line for readability / logical separation.
775. `` - Blank line for readability / logical separation.
776. `          const schools = data.schools;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
777. `          const points = data.points;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
778. `` - Blank line for readability / logical separation.
779. `          const leaderboardData = schools.map((school, index) => ({` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
780. `            name: school,` - Operational source line participating in page/server behavior.
781. `            points: points[index],` - Operational source line participating in page/server behavior.
782. `          }));` - Closes a block (function, condition, loop, object, or element section).
783. `` - Blank line for readability / logical separation.
784. `          renderLeaderboard(leaderboardData);` - Operational source line participating in page/server behavior.
785. `        } catch (error) {` - Closes a block (function, condition, loop, object, or element section).
786. `          console.error("Error fetching data:", error);` - Operational source line participating in page/server behavior.
787. `        }` - Closes a block (function, condition, loop, object, or element section).
788. `      }` - Closes a block (function, condition, loop, object, or element section).
789. `` - Blank line for readability / logical separation.
790. `      fetchAndRender();` - Operational source line participating in page/server behavior.
791. `      setInterval(fetchAndRender, 5000);` - Operational source line participating in page/server behavior.
792. `    </script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
793. `` - Blank line for readability / logical separation.
794. `    <script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
795. `      const trophyImages = {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
796. `        1: "https://i.pinimg.com/736x/df/43/6e/df436ea7c7fbb220803957062cb163de.jpg",` - Operational source line participating in page/server behavior.
797. `        2: "assets/silver.jpg",` - Operational source line participating in page/server behavior.
798. `        3: "/assets/bronze.jpg",` - Operational source line participating in page/server behavior.
799. `      };` - Closes a block (function, condition, loop, object, or element section).
800. `      var ee = false;` - Declares function/global-scoped variable (legacy style) used by script runtime.
801. `      var podiumCreated = false;` - Declares function/global-scoped variable (legacy style) used by script runtime.
802. `` - Blank line for readability / logical separation.
803. `      function onEventsEnd() {` - Defines a named function used by the page/application flow.
804. `        ` - Blank line for readability / logical separation.
805. `        ee=true;` - Operational source line participating in page/server behavior.
806. `        if (podiumCreated) return; // Prevent recreating podium multiple times` - Starts a conditional branch that decides behavior based on runtime state.
807. `        ` - Blank line for readability / logical separation.
808. `        fetch("db.json")` - Starts an HTTP request to load config/data from server-side JSON/API.
809. `          .then((res) => res.json())` - Arrow function expression used as callback or concise helper.
810. `          .then((da) => {` - Arrow function expression used as callback or concise helper.
811. `            ` - Blank line for readability / logical separation.
812. `        let db = {` - Declares a mutable variable used for evolving UI/state values.
813. `  port: 3000,` - Operational source line participating in page/server behavior.
814. `  events: [` - Operational source line participating in page/server behavior.
815. `    "Admeta: Category 1", "Admeta: Category 2",` - Operational source line participating in page/server behavior.
816. `    "Artem",` - Operational source line participating in page/server behavior.
817. `    "Carmen: Category 1","Carmen: Category 2",` - Operational source line participating in page/server behavior.
818. `    "Fabula",` - Operational source line participating in page/server behavior.
819. `    "Fortuna",` - Operational source line participating in page/server behavior.
820. `    "Codeferno",` - Operational source line participating in page/server behavior.
821. `    "Gustatio",` - Operational source line participating in page/server behavior.
822. `    "Mahim 16",` - Operational source line participating in page/server behavior.
823. `    "'Ad'venturium",` - Operational source line participating in page/server behavior.
824. `    "Gratia",` - Operational source line participating in page/server behavior.
825. `    "Panache",` - Operational source line participating in page/server behavior.
826. `    "Symphonia",` - Operational source line participating in page/server behavior.
827. `    "Mr. and Mrs. Perseverantia",` - Operational source line participating in page/server behavior.
828. `    "Explorare",` - Operational source line participating in page/server behavior.
829. `    "Monopolium",` - Operational source line participating in page/server behavior.
830. `    "Football: U17 Boys","Football: U19 Boys","Football: U19 Girls",` - Operational source line participating in page/server behavior.
831. `    "Basketball: U19 Girls","Basketball: U19 Boys",` - Operational source line participating in page/server behavior.
832. `    "Gully Cricket",` - Operational source line participating in page/server behavior.
833. `    "Table Tennis",` - Operational source line participating in page/server behavior.
834. `    "Tug of War: U16 Boys","Tug of War: U16 Girls","Tug of War: U19 Boys","Tug of War: U19 Girls",` - Operational source line participating in page/server behavior.
835. `    "E-Sports"` - Operational source line participating in page/server behavior.
836. `  ],` - Operational source line participating in page/server behavior.
837. `  schools: [` - Operational source line participating in page/server behavior.
838. `    "P1",` - Operational source line participating in page/server behavior.
839. `    "P2",` - Operational source line participating in page/server behavior.
840. `    "P3",` - Operational source line participating in page/server behavior.
841. `    "P4",` - Operational source line participating in page/server behavior.
842. `    "P5",` - Operational source line participating in page/server behavior.
843. `    "P6",` - Operational source line participating in page/server behavior.
844. `    "P7",` - Operational source line participating in page/server behavior.
845. `    "P8",` - Operational source line participating in page/server behavior.
846. `    "P9",` - Operational source line participating in page/server behavior.
847. `    "P10",` - Operational source line participating in page/server behavior.
848. `    "P11",` - Operational source line participating in page/server behavior.
849. `    "P12",` - Operational source line participating in page/server behavior.
850. `    "P13",` - Operational source line participating in page/server behavior.
851. `    "P14",` - Operational source line participating in page/server behavior.
852. `    "P15",` - Operational source line participating in page/server behavior.
853. `    "P16",` - Operational source line participating in page/server behavior.
854. `    "P17",` - Operational source line participating in page/server behavior.
855. `    "P18",` - Operational source line participating in page/server behavior.
856. `    "P20",` - Operational source line participating in page/server behavior.
857. `    "P21",` - Operational source line participating in page/server behavior.
858. `    "P22",` - Operational source line participating in page/server behavior.
859. `    "P23",` - Operational source line participating in page/server behavior.
860. `    "P24",` - Operational source line participating in page/server behavior.
861. `    "P25",` - Operational source line participating in page/server behavior.
862. `    "P26",` - Operational source line participating in page/server behavior.
863. `    "P28",` - Operational source line participating in page/server behavior.
864. `    "P29",` - Operational source line participating in page/server behavior.
865. `  ]` - Operational source line participating in page/server behavior.
866. `};` - Closes a block (function, condition, loop, object, or element section).
867. `` - Blank line for readability / logical separation.
868. `        let po = [];` - Declares a mutable variable used for evolving UI/state values.
869. `        for (let i = 0; i < da.schools.length; i++) {` - Iterates through a list/collection to build UI or process records.
870. `          po.push(da.schools[i].points);` - Operational source line participating in page/server behavior.
871. `        }` - Closes a block (function, condition, loop, object, or element section).
872. `        data = { schools: db.schools, events: db.events, points: po, eventEnd:true };` - Starts an object literal assignment / configuration block.
873. `` - Blank line for readability / logical separation.
874. `` - Blank line for readability / logical separation.
875. `            const schools = data.schools;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
876. `            const points = data.points;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
877. `            if(data.eventEnd && !ee) window.location.reload()` - Starts a conditional branch that decides behavior based on runtime state.
878. `` - Blank line for readability / logical separation.
879. `            let leaderboard = schools.map((school, index) => ({` - Declares a mutable variable used for evolving UI/state values.
880. `              name: school,` - Operational source line participating in page/server behavior.
881. `              points: points[index],` - Operational source line participating in page/server behavior.
882. `            }));` - Closes a block (function, condition, loop, object, or element section).
883. `` - Blank line for readability / logical separation.
884. `            leaderboard.sort((a, b) => b.points - a.points);` - Arrow function expression used as callback or concise helper.
885. `` - Blank line for readability / logical separation.
886. `            leaderboard[0].rank = 1;` - Operational source line participating in page/server behavior.
887. `            for (let i = 1; i < leaderboard.length; i++) {` - Iterates through a list/collection to build UI or process records.
888. `              leaderboard[i].rank =` - Operational source line participating in page/server behavior.
889. `                leaderboard[i].points === leaderboard[i - 1].points` - Operational source line participating in page/server behavior.
890. `                  ? leaderboard[i - 1].rank` - Operational source line participating in page/server behavior.
891. `                  : leaderboard[i - 1].rank + 1;` - Operational source line participating in page/server behavior.
892. `            }` - Closes a block (function, condition, loop, object, or element section).
893. `` - Blank line for readability / logical separation.
894. `            const grouped = { 1: [], 2: [], 3: [], others: [] };` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
895. `            leaderboard.forEach((entry) => {` - Arrow function expression used as callback or concise helper.
896. `              if ([1, 2, 3].includes(entry.rank)) grouped[entry.rank].push(entry);` - Starts a conditional branch that decides behavior based on runtime state.
897. `              else grouped.others.push(entry);` - Fallback branch for the preceding condition.
898. `            });` - Closes a block (function, condition, loop, object, or element section).
899. `` - Blank line for readability / logical separation.
900. `            const resultContainer = document.createElement("div");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
901. `            resultContainer.id = "final-results";` - Operational source line participating in page/server behavior.
902. `            resultContainer.className =` - Operational source line participating in page/server behavior.
903. `  "mt-12 p-6 result-container text-blue-100 mb-16 pt-20 hidden md:block fade-in-section hover-lift fade-in-up";` - Operational source line participating in page/server behavior.
904. `            const podium = document.createElement("div");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
905. `            podium.className = "hidden sm:flex justify-center items-end gap-8 mb-12 text-center flex-wrap";` - Operational source line participating in page/server behavior.
906. `` - Blank line for readability / logical separation.
907. `            if (grouped[2].length > 0)` - Starts a conditional branch that decides behavior based on runtime state.
908. `              podium.appendChild(createRankBox(grouped[2], 2, "h-48 w-64"));` - Operational source line participating in page/server behavior.
909. `            if (grouped[1].length > 0)` - Starts a conditional branch that decides behavior based on runtime state.
910. `              podium.appendChild(createRankBox(grouped[1], 1, "h-56 w-72"));` - Operational source line participating in page/server behavior.
911. `            if (grouped[3].length > 0)` - Starts a conditional branch that decides behavior based on runtime state.
912. `              podium.appendChild(createRankBox(grouped[3], 3, "h-40 w-56"));` - Operational source line participating in page/server behavior.
913. `` - Blank line for readability / logical separation.
914. `            resultContainer.appendChild(podium);` - Operational source line participating in page/server behavior.
915. `            const existing = document.getElementById("final-results");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
916. `            if (existing) existing.remove();` - Starts a conditional branch that decides behavior based on runtime state.
917. `            ` - Blank line for readability / logical separation.
918. `            document.getElementById("leaderboard-container").insertBefore(resultContainer,document.getElementById("leaderboard-container").firstChild)` - Reads a DOM element reference to manipulate content or behavior.
919. `            podiumCreated = true; // Set flag to prevent recreation` - Operational source line participating in page/server behavior.
920. `            if(!stoptime){` - Starts a conditional branch that decides behavior based on runtime state.
921. `              start();` - Operational source line participating in page/server behavior.
922. `              stop(15000);` - Operational source line participating in page/server behavior.
923. `            }` - Closes a block (function, condition, loop, object, or element section).
924. `          })` - Closes a block (function, condition, loop, object, or element section).
925. `          .catch((err) => console.error("Error loading final results:", err));` - Arrow function expression used as callback or concise helper.
926. `      }` - Closes a block (function, condition, loop, object, or element section).
927. `      ` - Blank line for readability / logical separation.
928. `` - Blank line for readability / logical separation.
929. `      function createRankBox(schools, rank, sizeClasses) {` - Defines a named function used by the page/application flow.
930. `        const box = document.createElement("div");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
931. `        box.className = `relative bg-gray-900 rounded-xl p-4 pt-20 flex flex-col justify-end items-center shadow-xl ${sizeClasses} cursor-pointer hover:bg-gray-700 transition-all duration-300 hover-lift`;` - Operational source line participating in page/server behavior.
932. `` - Blank line for readability / logical separation.
933. `        const imageWrapper = document.createElement("div");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
934. `        imageWrapper.className =` - Operational source line participating in page/server behavior.
935. `          "absolute -top-12 left-1/2 transform -translate-x-1/2";` - Operational source line participating in page/server behavior.
936. `        const img = document.createElement("img");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
937. `        img.src = trophyImages[rank];` - Operational source line participating in page/server behavior.
938. `        img.alt = `Rank ${rank} Trophy`;` - Operational source line participating in page/server behavior.
939. `        img.className =` - Operational source line participating in page/server behavior.
940. `          "w-24 h-24 rounded-full border-4 border-yellow-300 shadow-lg object-cover hover-glow";` - Operational source line participating in page/server behavior.
941. `        imageWrapper.appendChild(img);` - Operational source line participating in page/server behavior.
942. `        box.appendChild(imageWrapper);` - Operational source line participating in page/server behavior.
943. `` - Blank line for readability / logical separation.
944. `        const title = document.createElement("div");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
945. `        title.className = "font-bold text-xl text-yellow-300 mb-2 hover-glow";` - Operational source line participating in page/server behavior.
946. `        title.style.fontFamily = "Mestizo";` - Operational source line participating in page/server behavior.
947. `        title.innerText = `Rank ${rank}`;` - Operational source line participating in page/server behavior.
948. `        box.appendChild(title);` - Operational source line participating in page/server behavior.
949. `` - Blank line for readability / logical separation.
950. `        const names = document.createElement("div");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
951. `        names.className = "text-blue-100 text-base leading-tight text-reveal";` - Operational source line participating in page/server behavior.
952. `        names.innerHTML = schools.map((s) => s.name).join(" &<br>");` - Sets HTML markup into a container element.
953. `        box.appendChild(names);` - Operational source line participating in page/server behavior.
954. `` - Blank line for readability / logical separation.
955. `        const points = document.createElement("div");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
956. `        points.className = "mt-2 text-blue-300 text-sm hover-glow";` - Operational source line participating in page/server behavior.
957. `        points.innerText = `${schools[0].points} pts`;` - Operational source line participating in page/server behavior.
958. `        box.appendChild(points);` - Operational source line participating in page/server behavior.
959. `` - Blank line for readability / logical separation.
960. `        ` - Blank line for readability / logical separation.
961. `` - Blank line for readability / logical separation.
962. `        return box;` - Returns a value or exits current function early.
963. `      }` - Closes a block (function, condition, loop, object, or element section).
964. `` - Blank line for readability / logical separation.
965. `    </script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
966. `` - Blank line for readability / logical separation.
967. `    <!-- Enhanced Intersection Observer and Animations -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
968. `    <script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
969. `      // Create intersection observer for scroll-triggered animations` - Comment line describing intent or section.
970. `      const observerOptions = {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
971. `        threshold: 0.1,` - Operational source line participating in page/server behavior.
972. `        rootMargin: '0px 0px -50px 0px'` - Operational source line participating in page/server behavior.
973. `      };` - Closes a block (function, condition, loop, object, or element section).
974. `` - Blank line for readability / logical separation.
975. `      const observer = new IntersectionObserver((entries) => {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
976. `        entries.forEach(entry => {` - Arrow function expression used as callback or concise helper.
977. `          if (entry.isIntersecting) {` - Starts a conditional branch that decides behavior based on runtime state.
978. `            entry.target.classList.add('visible');` - Adds/removes/toggles CSS classes to control visibility or animation state.
979. `            // Trigger fade-in-up animation` - Comment line describing intent or section.
980. `            if (entry.target.classList.contains('fade-in-up')) {` - Adds/removes/toggles CSS classes to control visibility or animation state.
981. `              entry.target.style.animationPlayState = 'running';` - Operational source line participating in page/server behavior.
982. `            }` - Closes a block (function, condition, loop, object, or element section).
983. `          }` - Closes a block (function, condition, loop, object, or element section).
984. `        });` - Closes a block (function, condition, loop, object, or element section).
985. `      }, observerOptions);` - Closes a block (function, condition, loop, object, or element section).
986. `` - Blank line for readability / logical separation.
987. `      // Observe elements with animation classes` - Comment line describing intent or section.
988. `      document.addEventListener('DOMContentLoaded', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
989. `        const animatedElements = document.querySelectorAll('.fade-in-section, .fade-in-up');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
990. `        animatedElements.forEach(el => {` - Arrow function expression used as callback or concise helper.
991. `          if (el.classList.contains('fade-in-up')) {` - Adds/removes/toggles CSS classes to control visibility or animation state.
992. `            el.style.animationPlayState = 'paused';` - Operational source line participating in page/server behavior.
993. `          }` - Closes a block (function, condition, loop, object, or element section).
994. `          observer.observe(el);` - Operational source line participating in page/server behavior.
995. `        });` - Closes a block (function, condition, loop, object, or element section).
996. `      });` - Closes a block (function, condition, loop, object, or element section).
997. `` - Blank line for readability / logical separation.
998. `      // Parallax effect for background decorations` - Comment line describing intent or section.
999. `      window.addEventListener('scroll', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
1000. `        const scrolled = window.pageYOffset;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1001. `        const parallax = document.querySelector('.bg-decoration');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1002. `        if (parallax) {` - Starts a conditional branch that decides behavior based on runtime state.
1003. `          parallax.style.transform = `translateY(${scrolled * 0.5}px)`;` - Operational source line participating in page/server behavior.
1004. `        }` - Closes a block (function, condition, loop, object, or element section).
1005. `      });` - Closes a block (function, condition, loop, object, or element section).
1006. `    </script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
1007. `  </body>` - HTML markup line contributing structure, metadata, scripts, or content containers.
1008. `</html>` - HTML markup line contributing structure, metadata, scripts, or content containers.

## .\persev-compiled\frontend\links.html

1. `<!doctype html>` - HTML markup line contributing structure, metadata, scripts, or content containers.
2. `<html lang="en">` - HTML markup line contributing structure, metadata, scripts, or content containers.
3. `  <head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
4. `    <meta charset="UTF-8" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
5. `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
6. `    <meta name="description" content="Perseverantia Quick Links - Access all important pages">` - HTML markup line contributing structure, metadata, scripts, or content containers.
7. `    <link rel="icon" type="image/png" href="/assets/persev.png" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
8. `    <title>Quick Links - Perseverantia</title>` - HTML markup line contributing structure, metadata, scripts, or content containers.
9. `    <script src="https://cdn.tailwindcss.com"></script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
10. `    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">` - HTML markup line contributing structure, metadata, scripts, or content containers.
11. `    ` - Blank line for readability / logical separation.
12. `    <style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
13. `      @font-face {` - Operational source line participating in page/server behavior.
14. `        font-family: Mestizo;` - Operational source line participating in page/server behavior.
15. `        src: url(/assets/MestizoFont.ttf);` - Operational source line participating in page/server behavior.
16. `        font-display: swap;` - Operational source line participating in page/server behavior.
17. `      }` - Closes a block (function, condition, loop, object, or element section).
18. `      ` - Blank line for readability / logical separation.
19. `      body {` - Operational source line participating in page/server behavior.
20. `        background: linear-gradient(135deg, #0a0f2c, #1a2949);` - Operational source line participating in page/server behavior.
21. `        min-height: 100vh;` - Operational source line participating in page/server behavior.
22. `        margin: 0;` - Operational source line participating in page/server behavior.
23. `        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;` - Operational source line participating in page/server behavior.
24. `      }` - Closes a block (function, condition, loop, object, or element section).
25. `      ` - Blank line for readability / logical separation.
26. `      .container {` - Operational source line participating in page/server behavior.
27. `        max-width: 1200px;` - Operational source line participating in page/server behavior.
28. `        margin: 0 auto;` - Operational source line participating in page/server behavior.
29. `        padding: 0 1rem;` - Operational source line participating in page/server behavior.
30. `      }` - Closes a block (function, condition, loop, object, or element section).
31. `      ` - Blank line for readability / logical separation.
32. `      #loading-screen {` - Operational source line participating in page/server behavior.
33. `        position: fixed;` - Operational source line participating in page/server behavior.
34. `        inset: 0;` - Operational source line participating in page/server behavior.
35. `        background: linear-gradient(135deg, #0a0f2c, #1a2949);` - Operational source line participating in page/server behavior.
36. `        z-index: 9999;` - Operational source line participating in page/server behavior.
37. `        display: flex;` - Operational source line participating in page/server behavior.
38. `        align-items: center;` - Operational source line participating in page/server behavior.
39. `        justify-content: center;` - Operational source line participating in page/server behavior.
40. `        transition: opacity 0.6s ease;` - Operational source line participating in page/server behavior.
41. `      }` - Closes a block (function, condition, loop, object, or element section).
42. `      ` - Blank line for readability / logical separation.
43. `      #loading-screen.fade-out {` - Operational source line participating in page/server behavior.
44. `        opacity: 0;` - Operational source line participating in page/server behavior.
45. `        pointer-events: none;` - Operational source line participating in page/server behavior.
46. `      }` - Closes a block (function, condition, loop, object, or element section).
47. `      ` - Blank line for readability / logical separation.
48. `      .loading-video {` - Operational source line participating in page/server behavior.
49. `        width: 150px;` - Operational source line participating in page/server behavior.
50. `        height: 150px;` - Operational source line participating in page/server behavior.
51. `        object-fit: contain;` - Operational source line participating in page/server behavior.
52. `        filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7));` - Operational source line participating in page/server behavior.
53. `        border-radius: 12px;` - Operational source line participating in page/server behavior.
54. `      }` - Closes a block (function, condition, loop, object, or element section).
55. `      ` - Blank line for readability / logical separation.
56. `      /* Enhanced Animations */` - Block comment boundary or content.
57. `      .animate-navbar {` - Operational source line participating in page/server behavior.
58. `        animation: slideInFromTop 0.8s ease-out;` - Operational source line participating in page/server behavior.
59. `      }` - Closes a block (function, condition, loop, object, or element section).
60. `      ` - Blank line for readability / logical separation.
61. `      .animate-logo {` - Operational source line participating in page/server behavior.
62. `        animation: logoFloat 1.2s ease-out 0.5s both;` - Operational source line participating in page/server behavior.
63. `      }` - Closes a block (function, condition, loop, object, or element section).
64. `      ` - Blank line for readability / logical separation.
65. `      .animate-title {` - Operational source line participating in page/server behavior.
66. `        animation: fadeInUp 1s ease-out 0.8s both;` - Operational source line participating in page/server behavior.
67. `      }` - Closes a block (function, condition, loop, object, or element section).
68. `      ` - Blank line for readability / logical separation.
69. `      .animate-subtitle {` - Operational source line participating in page/server behavior.
70. `        animation: fadeInUp 1s ease-out 1s both;` - Operational source line participating in page/server behavior.
71. `      }` - Closes a block (function, condition, loop, object, or element section).
72. `      ` - Blank line for readability / logical separation.
73. `      .animate-link-1 {` - Operational source line participating in page/server behavior.
74. `        animation: fadeInScale 0.8s ease-out 1.2s both;` - Operational source line participating in page/server behavior.
75. `      }` - Closes a block (function, condition, loop, object, or element section).
76. `      ` - Blank line for readability / logical separation.
77. `      .animate-link-2 {` - Operational source line participating in page/server behavior.
78. `        animation: fadeInScale 0.8s ease-out 1.4s both;` - Operational source line participating in page/server behavior.
79. `      }` - Closes a block (function, condition, loop, object, or element section).
80. `      ` - Blank line for readability / logical separation.
81. `      .animate-link-3 {` - Operational source line participating in page/server behavior.
82. `        animation: fadeInScale 0.8s ease-out 1.6s both;` - Operational source line participating in page/server behavior.
83. `      }` - Closes a block (function, condition, loop, object, or element section).
84. `      ` - Blank line for readability / logical separation.
85. `      .animate-footer {` - Operational source line participating in page/server behavior.
86. `        animation: slideInFromBottom 0.8s ease-out 1.8s both;` - Operational source line participating in page/server behavior.
87. `      }` - Closes a block (function, condition, loop, object, or element section).
88. `      ` - Blank line for readability / logical separation.
89. `      @keyframes slideInFromTop {` - Operational source line participating in page/server behavior.
90. `        0% {` - Operational source line participating in page/server behavior.
91. `          opacity: 0;` - Operational source line participating in page/server behavior.
92. `          transform: translateY(-30px);` - Operational source line participating in page/server behavior.
93. `        }` - Closes a block (function, condition, loop, object, or element section).
94. `        100% {` - Operational source line participating in page/server behavior.
95. `          opacity: 1;` - Operational source line participating in page/server behavior.
96. `          transform: translateY(0);` - Operational source line participating in page/server behavior.
97. `        }` - Closes a block (function, condition, loop, object, or element section).
98. `      }` - Closes a block (function, condition, loop, object, or element section).
99. `      ` - Blank line for readability / logical separation.
100. `      @keyframes logoFloat {` - Operational source line participating in page/server behavior.
101. `        0% {` - Operational source line participating in page/server behavior.
102. `          opacity: 0;` - Operational source line participating in page/server behavior.
103. `          transform: translateY(20px) scale(0.9);` - Operational source line participating in page/server behavior.
104. `        }` - Closes a block (function, condition, loop, object, or element section).
105. `        100% {` - Operational source line participating in page/server behavior.
106. `          opacity: 1;` - Operational source line participating in page/server behavior.
107. `          transform: translateY(0) scale(1);` - Operational source line participating in page/server behavior.
108. `        }` - Closes a block (function, condition, loop, object, or element section).
109. `      }` - Closes a block (function, condition, loop, object, or element section).
110. `      ` - Blank line for readability / logical separation.
111. `      @keyframes fadeInUp {` - Operational source line participating in page/server behavior.
112. `        0% {` - Operational source line participating in page/server behavior.
113. `          opacity: 0;` - Operational source line participating in page/server behavior.
114. `          transform: translateY(30px);` - Operational source line participating in page/server behavior.
115. `        }` - Closes a block (function, condition, loop, object, or element section).
116. `        100% {` - Operational source line participating in page/server behavior.
117. `          opacity: 1;` - Operational source line participating in page/server behavior.
118. `          transform: translateY(0);` - Operational source line participating in page/server behavior.
119. `        }` - Closes a block (function, condition, loop, object, or element section).
120. `      }` - Closes a block (function, condition, loop, object, or element section).
121. `      ` - Blank line for readability / logical separation.
122. `      @keyframes fadeInScale {` - Operational source line participating in page/server behavior.
123. `        0% {` - Operational source line participating in page/server behavior.
124. `          opacity: 0;` - Operational source line participating in page/server behavior.
125. `          transform: scale(0.8) translateY(20px);` - Operational source line participating in page/server behavior.
126. `        }` - Closes a block (function, condition, loop, object, or element section).
127. `        100% {` - Operational source line participating in page/server behavior.
128. `          opacity: 1;` - Operational source line participating in page/server behavior.
129. `          transform: scale(1) translateY(0);` - Operational source line participating in page/server behavior.
130. `        }` - Closes a block (function, condition, loop, object, or element section).
131. `      }` - Closes a block (function, condition, loop, object, or element section).
132. `      ` - Blank line for readability / logical separation.
133. `      @keyframes slideInFromBottom {` - Operational source line participating in page/server behavior.
134. `        0% {` - Operational source line participating in page/server behavior.
135. `          opacity: 0;` - Operational source line participating in page/server behavior.
136. `          transform: translateY(30px);` - Operational source line participating in page/server behavior.
137. `        }` - Closes a block (function, condition, loop, object, or element section).
138. `        100% {` - Operational source line participating in page/server behavior.
139. `          opacity: 1;` - Operational source line participating in page/server behavior.
140. `          transform: translateY(0);` - Operational source line participating in page/server behavior.
141. `        }` - Closes a block (function, condition, loop, object, or element section).
142. `      }` - Closes a block (function, condition, loop, object, or element section).
143. `      ` - Blank line for readability / logical separation.
144. `      /* Link Button Styles */` - Block comment boundary or content.
145. `      .link-button {` - Operational source line participating in page/server behavior.
146. `        background: rgba(255, 255, 255, 0.05);` - Operational source line participating in page/server behavior.
147. `        backdrop-filter: blur(10px);` - Operational source line participating in page/server behavior.
148. `        border: 2px solid rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
149. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
150. `        position: relative;` - Operational source line participating in page/server behavior.
151. `        overflow: hidden;` - Operational source line participating in page/server behavior.
152. `      }` - Closes a block (function, condition, loop, object, or element section).
153. `      ` - Blank line for readability / logical separation.
154. `      .link-button::before {` - Operational source line participating in page/server behavior.
155. `        content: '';` - Operational source line participating in page/server behavior.
156. `        position: absolute;` - Operational source line participating in page/server behavior.
157. `        top: 0;` - Operational source line participating in page/server behavior.
158. `        left: -100%;` - Operational source line participating in page/server behavior.
159. `        width: 100%;` - Operational source line participating in page/server behavior.
160. `        height: 100%;` - Operational source line participating in page/server behavior.
161. `        background: linear-gradient(90deg, transparent, rgba(190, 142, 48, 0.2), transparent);` - Operational source line participating in page/server behavior.
162. `        transition: left 0.5s;` - Operational source line participating in page/server behavior.
163. `      }` - Closes a block (function, condition, loop, object, or element section).
164. `      ` - Blank line for readability / logical separation.
165. `      .link-button:hover::before {` - Operational source line participating in page/server behavior.
166. `        left: 100%;` - Operational source line participating in page/server behavior.
167. `      }` - Closes a block (function, condition, loop, object, or element section).
168. `      ` - Blank line for readability / logical separation.
169. `      .link-button:hover {` - Operational source line participating in page/server behavior.
170. `        background: rgba(190, 142, 48, 0.1);` - Operational source line participating in page/server behavior.
171. `        border-color: #BE8E30;` - Operational source line participating in page/server behavior.
172. `        box-shadow: 0 0 30px rgba(190, 142, 48, 0.4);` - Operational source line participating in page/server behavior.
173. `        transform: translateY(-5px) scale(1.02);` - Operational source line participating in page/server behavior.
174. `      }` - Closes a block (function, condition, loop, object, or element section).
175. `      ` - Blank line for readability / logical separation.
176. `      .link-icon {` - Operational source line participating in page/server behavior.
177. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
178. `        filter: drop-shadow(0 0 10px rgba(190, 142, 48, 0.6));` - Operational source line participating in page/server behavior.
179. `      }` - Closes a block (function, condition, loop, object, or element section).
180. `      ` - Blank line for readability / logical separation.
181. `      .link-button:hover .link-icon {` - Operational source line participating in page/server behavior.
182. `        transform: scale(1.1);` - Operational source line participating in page/server behavior.
183. `        filter: drop-shadow(0 0 15px rgba(190, 142, 48, 0.8));` - Operational source line participating in page/server behavior.
184. `      }` - Closes a block (function, condition, loop, object, or element section).
185. `      ` - Blank line for readability / logical separation.
186. `      /* Hover Glow Effect */` - Block comment boundary or content.
187. `      .hover-glow {` - Operational source line participating in page/server behavior.
188. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
189. `      }` - Closes a block (function, condition, loop, object, or element section).
190. `      ` - Blank line for readability / logical separation.
191. `      .hover-glow:hover {` - Operational source line participating in page/server behavior.
192. `        text-shadow: 0 0 15px rgba(190, 142, 48, 0.8);` - Operational source line participating in page/server behavior.
193. `        transform: scale(1.02);` - Operational source line participating in page/server behavior.
194. `      }` - Closes a block (function, condition, loop, object, or element section).
195. `      ` - Blank line for readability / logical separation.
196. `      /* Background Decorations */` - Block comment boundary or content.
197. `      .bg-decoration {` - Operational source line participating in page/server behavior.
198. `        position: fixed;` - Operational source line participating in page/server behavior.
199. `        pointer-events: none;` - Operational source line participating in page/server behavior.
200. `        z-index: 1;` - Operational source line participating in page/server behavior.
201. `      }` - Closes a block (function, condition, loop, object, or element section).
202. `      ` - Blank line for readability / logical separation.
203. `      .bg-decoration::before,` - Operational source line participating in page/server behavior.
204. `      .bg-decoration::after {` - Operational source line participating in page/server behavior.
205. `        content: '';` - Operational source line participating in page/server behavior.
206. `        position: absolute;` - Operational source line participating in page/server behavior.
207. `        border-radius: 50%;` - Operational source line participating in page/server behavior.
208. `        background: rgba(190, 142, 48, 0.1);` - Operational source line participating in page/server behavior.
209. `        animation: float 6s ease-in-out infinite;` - Operational source line participating in page/server behavior.
210. `        box-shadow: 0 0 30px rgba(190, 142, 48, 0.2);` - Operational source line participating in page/server behavior.
211. `      }` - Closes a block (function, condition, loop, object, or element section).
212. `      ` - Blank line for readability / logical separation.
213. `      .bg-decoration::before {` - Operational source line participating in page/server behavior.
214. `        width: 200px;` - Operational source line participating in page/server behavior.
215. `        height: 200px;` - Operational source line participating in page/server behavior.
216. `        top: 10%;` - Operational source line participating in page/server behavior.
217. `        right: 10%;` - Operational source line participating in page/server behavior.
218. `        animation-delay: 0s;` - Operational source line participating in page/server behavior.
219. `      }` - Closes a block (function, condition, loop, object, or element section).
220. `      ` - Blank line for readability / logical separation.
221. `      .bg-decoration::after {` - Operational source line participating in page/server behavior.
222. `        width: 150px;` - Operational source line participating in page/server behavior.
223. `        height: 150px;` - Operational source line participating in page/server behavior.
224. `        bottom: 20%;` - Operational source line participating in page/server behavior.
225. `        left: 10%;` - Operational source line participating in page/server behavior.
226. `        animation-delay: 3s;` - Operational source line participating in page/server behavior.
227. `      }` - Closes a block (function, condition, loop, object, or element section).
228. `      ` - Blank line for readability / logical separation.
229. `      @keyframes float {` - Operational source line participating in page/server behavior.
230. `        0%, 100% { transform: translateY(0px) rotate(0deg); }` - Operational source line participating in page/server behavior.
231. `        50% { transform: translateY(-20px) rotate(180deg); }` - Operational source line participating in page/server behavior.
232. `      }` - Closes a block (function, condition, loop, object, or element section).
233. `      ` - Blank line for readability / logical separation.
234. `      /* Ripple Effect */` - Block comment boundary or content.
235. `      .ripple {` - Operational source line participating in page/server behavior.
236. `        position: absolute;` - Operational source line participating in page/server behavior.
237. `        border-radius: 50%;` - Operational source line participating in page/server behavior.
238. `        background: rgba(190, 142, 48, 0.6);` - Operational source line participating in page/server behavior.
239. `        transform: scale(0);` - Operational source line participating in page/server behavior.
240. `        animation: ripple-animation 0.6s linear;` - Operational source line participating in page/server behavior.
241. `        pointer-events: none;` - Operational source line participating in page/server behavior.
242. `      }` - Closes a block (function, condition, loop, object, or element section).
243. `      ` - Blank line for readability / logical separation.
244. `      @keyframes ripple-animation {` - Operational source line participating in page/server behavior.
245. `        to {` - Operational source line participating in page/server behavior.
246. `          transform: scale(4);` - Operational source line participating in page/server behavior.
247. `          opacity: 0;` - Operational source line participating in page/server behavior.
248. `        }` - Closes a block (function, condition, loop, object, or element section).
249. `      }` - Closes a block (function, condition, loop, object, or element section).
250. `      ` - Blank line for readability / logical separation.
251. `      /* Mobile Responsiveness */` - Block comment boundary or content.
252. `      @media (max-width: 768px) {` - Operational source line participating in page/server behavior.
253. `        .bg-decoration::before,` - Operational source line participating in page/server behavior.
254. `        .bg-decoration::after {` - Operational source line participating in page/server behavior.
255. `          display: none;` - Operational source line participating in page/server behavior.
256. `        }` - Closes a block (function, condition, loop, object, or element section).
257. `      }` - Closes a block (function, condition, loop, object, or element section).
258. `    </style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
259. `  </head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
260. `  ` - Blank line for readability / logical separation.
261. `  <body class="text-white">` - HTML markup line contributing structure, metadata, scripts, or content containers.
262. `    <!-- Loading Screen -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
263. `    <div id="loading-screen">` - HTML markup line contributing structure, metadata, scripts, or content containers.
264. `      <video` - HTML markup line contributing structure, metadata, scripts, or content containers.
265. `        autoplay` - Operational source line participating in page/server behavior.
266. `        muted` - Operational source line participating in page/server behavior.
267. `        loop` - Operational source line participating in page/server behavior.
268. `        playsinline` - Operational source line participating in page/server behavior.
269. `        class="loading-video"` - Operational source line participating in page/server behavior.
270. `      >` - Operational source line participating in page/server behavior.
271. `        <source src="/assets/load.mp4" type="video/mp4" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
272. `        Your browser does not support the video tag.` - Operational source line participating in page/server behavior.
273. `      </video>` - HTML markup line contributing structure, metadata, scripts, or content containers.
274. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
275. `` - Blank line for readability / logical separation.
276. `    <!-- Background Decorations -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
277. `    <div class="bg-decoration"></div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
278. `` - Blank line for readability / logical separation.
279. `    <!-- Navbar -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
280. `    <nav class="text-white animate-navbar" style="background: #081032">` - HTML markup line contributing structure, metadata, scripts, or content containers.
281. `      <div class="container mx-auto px-4 py-4 flex justify-between items-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
282. `        <div class="text-2xl hover-glow" style="font-family: Mestizo">` - HTML markup line contributing structure, metadata, scripts, or content containers.
283. `          Perseverantia` - Operational source line participating in page/server behavior.
284. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
285. `        <div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
286. `          <a href="/" class="text-white hover:text-yellow-300 transition-colors">` - HTML markup line contributing structure, metadata, scripts, or content containers.
287. `            <i class="fas fa-home text-xl"></i>` - HTML markup line contributing structure, metadata, scripts, or content containers.
288. `          </a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
289. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
290. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
291. `    </nav>` - HTML markup line contributing structure, metadata, scripts, or content containers.
292. `` - Blank line for readability / logical separation.
293. `    <!-- Main Content -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
294. `    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-8">` - HTML markup line contributing structure, metadata, scripts, or content containers.
295. `      <!-- Logo -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
296. `      <div class="mb-8 animate-logo">` - HTML markup line contributing structure, metadata, scripts, or content containers.
297. `        <img` - HTML markup line contributing structure, metadata, scripts, or content containers.
298. `          src="/assets/persev.png"` - Operational source line participating in page/server behavior.
299. `          alt="Perseverantia Logo"` - Operational source line participating in page/server behavior.
300. `          class="w-24 h-24 mx-auto filter drop-shadow-lg"` - Operational source line participating in page/server behavior.
301. `        />` - Operational source line participating in page/server behavior.
302. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
303. `` - Blank line for readability / logical separation.
304. `      <!-- Title -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
305. `      <h1 class="text-4xl md:text-5xl font-bold text-center mb-4 animate-title hover-glow" style="font-family: Mestizo">` - HTML markup line contributing structure, metadata, scripts, or content containers.
306. `        Quick Links` - Operational source line participating in page/server behavior.
307. `      </h1>` - HTML markup line contributing structure, metadata, scripts, or content containers.
308. `      ` - Blank line for readability / logical separation.
309. `      <!-- Subtitle -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
310. `      <p class="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-md animate-subtitle">` - HTML markup line contributing structure, metadata, scripts, or content containers.
311. `        Access all the important information and resources for Perseverantia 2025` - Operational source line participating in page/server behavior.
312. `      </p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
313. `` - Blank line for readability / logical separation.
314. `      <!-- Links Container -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
315. `      <div class="w-full max-w-md space-y-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
316. `        ` - Blank line for readability / logical separation.
317. `        <!-- Menu Items Link -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
318. `        <a` - HTML markup line contributing structure, metadata, scripts, or content containers.
319. `          href="/food-menu"` - Operational source line participating in page/server behavior.
320. `          class="link-button w-full flex items-center justify-center p-6 rounded-2xl text-white text-lg font-semibold animate-link-1"` - Operational source line participating in page/server behavior.
321. `        >` - Operational source line participating in page/server behavior.
322. `          <i class="fas fa-utensils text-2xl mr-4 text-[#BE8E30] link-icon"></i>` - HTML markup line contributing structure, metadata, scripts, or content containers.
323. `          <span>Menu Items</span>` - HTML markup line contributing structure, metadata, scripts, or content containers.
324. `        </a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
325. `` - Blank line for readability / logical separation.
326. `        <!-- School Leaderboard Link -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
327. `        <a` - HTML markup line contributing structure, metadata, scripts, or content containers.
328. `          href="/leaderboard"` - Operational source line participating in page/server behavior.
329. `          class="link-button w-full flex items-center justify-center p-6 rounded-2xl text-white text-lg font-semibold animate-link-2"` - Operational source line participating in page/server behavior.
330. `        >` - Operational source line participating in page/server behavior.
331. `          <i class="fas fa-trophy text-2xl mr-4 text-[#BE8E30] link-icon"></i>` - HTML markup line contributing structure, metadata, scripts, or content containers.
332. `          <span>School Leaderboard</span>` - HTML markup line contributing structure, metadata, scripts, or content containers.
333. `        </a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
334. `` - Blank line for readability / logical separation.
335. `        <!-- Event Locations Link -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
336. `        <a` - HTML markup line contributing structure, metadata, scripts, or content containers.
337. `          href="/locations"` - Operational source line participating in page/server behavior.
338. `          class="link-button w-full flex items-center justify-center p-6 rounded-2xl text-white text-lg font-semibold animate-link-3"` - Operational source line participating in page/server behavior.
339. `        >` - Operational source line participating in page/server behavior.
340. `          <i class="fas fa-map-marker-alt text-2xl mr-4 text-[#BE8E30] link-icon"></i>` - HTML markup line contributing structure, metadata, scripts, or content containers.
341. `          <span>Event Locations</span>` - HTML markup line contributing structure, metadata, scripts, or content containers.
342. `        </a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
343. `` - Blank line for readability / logical separation.
344. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
345. `` - Blank line for readability / logical separation.
346. `      <!-- Footer -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
347. `      <div class="mt-16 text-center animate-footer">` - HTML markup line contributing structure, metadata, scripts, or content containers.
348. `        <p class="text-gray-400 text-sm hover-glow">` - HTML markup line contributing structure, metadata, scripts, or content containers.
349. `          &copy; 2025 Bombay Scottish School, Mahim` - Operational source line participating in page/server behavior.
350. `        </p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
351. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
352. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
353. `` - Blank line for readability / logical separation.
354. `    <!-- Scripts -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
355. `    <script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
356. `      // Loading screen fade out` - Comment line describing intent or section.
357. `      window.addEventListener('load', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
358. `        const loader = document.getElementById("loading-screen");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
359. `        setTimeout(() => {` - Arrow function expression used as callback or concise helper.
360. `          loader.classList.add("fade-out");` - Adds/removes/toggles CSS classes to control visibility or animation state.
361. `          setTimeout(() => loader.remove(), 600);` - Arrow function expression used as callback or concise helper.
362. `        }, 1500);` - Closes a block (function, condition, loop, object, or element section).
363. `      });` - Closes a block (function, condition, loop, object, or element section).
364. `` - Blank line for readability / logical separation.
365. `      // Ripple effect for buttons` - Comment line describing intent or section.
366. `      document.querySelectorAll('.link-button').forEach(button => {` - Arrow function expression used as callback or concise helper.
367. `        button.addEventListener('click', function(e) {` - Attaches an event listener to react to user interaction or lifecycle events.
368. `          const ripple = document.createElement('span');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
369. `          const rect = this.getBoundingClientRect();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
370. `          const size = Math.max(rect.width, rect.height);` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
371. `          const x = e.clientX - rect.left - size / 2;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
372. `          const y = e.clientY - rect.top - size / 2;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
373. `          ` - Blank line for readability / logical separation.
374. `          ripple.style.width = ripple.style.height = size + 'px';` - Operational source line participating in page/server behavior.
375. `          ripple.style.left = x + 'px';` - Operational source line participating in page/server behavior.
376. `          ripple.style.top = y + 'px';` - Operational source line participating in page/server behavior.
377. `          ripple.classList.add('ripple');` - Adds/removes/toggles CSS classes to control visibility or animation state.
378. `          ` - Blank line for readability / logical separation.
379. `          this.appendChild(ripple);` - Operational source line participating in page/server behavior.
380. `          ` - Blank line for readability / logical separation.
381. `          setTimeout(() => {` - Arrow function expression used as callback or concise helper.
382. `            ripple.remove();` - Operational source line participating in page/server behavior.
383. `          }, 600);` - Closes a block (function, condition, loop, object, or element section).
384. `        });` - Closes a block (function, condition, loop, object, or element section).
385. `      });` - Closes a block (function, condition, loop, object, or element section).
386. `` - Blank line for readability / logical separation.
387. `      // Add floating animation to navbar title` - Comment line describing intent or section.
388. `      const navTitle = document.querySelector('.hover-glow');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
389. `      if (navTitle) {` - Starts a conditional branch that decides behavior based on runtime state.
390. `        navTitle.addEventListener('mouseenter', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
391. `          navTitle.style.animation = 'logoFloat 0.6s ease-in-out';` - Operational source line participating in page/server behavior.
392. `        });` - Closes a block (function, condition, loop, object, or element section).
393. `        navTitle.addEventListener('animationend', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
394. `          navTitle.style.animation = '';` - Operational source line participating in page/server behavior.
395. `        });` - Closes a block (function, condition, loop, object, or element section).
396. `      }` - Closes a block (function, condition, loop, object, or element section).
397. `    </script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
398. `  </body>` - HTML markup line contributing structure, metadata, scripts, or content containers.
399. `</html>` - HTML markup line contributing structure, metadata, scripts, or content containers.

## .\persev-compiled\frontend\locations.html

1. `<!doctype html>` - HTML markup line contributing structure, metadata, scripts, or content containers.
2. `<html lang="en">` - HTML markup line contributing structure, metadata, scripts, or content containers.
3. `  <head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
4. `    <meta charset="UTF-8" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
5. `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
6. `    <meta name="description" content="Event Locations and Schedule - Perseverantia 2025">` - HTML markup line contributing structure, metadata, scripts, or content containers.
7. `    <link rel="icon" type="image/png" href="/assets/persev.png" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
8. `    <title>Event Locations - Perseverantia</title>` - HTML markup line contributing structure, metadata, scripts, or content containers.
9. `    <link rel="preload" href="/static/style.min.css" as="style" onload="this.rel='stylesheet'">` - HTML markup line contributing structure, metadata, scripts, or content containers.
10. `    <noscript><link rel="stylesheet" href="/static/style.min.css"></noscript>` - HTML markup line contributing structure, metadata, scripts, or content containers.
11. `    <script src="https://cdn.tailwindcss.com"></script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
12. `    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">` - HTML markup line contributing structure, metadata, scripts, or content containers.
13. `` - Blank line for readability / logical separation.
14. `    <style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
15. `      @font-face {` - Operational source line participating in page/server behavior.
16. `        font-family: Mestizo;` - Operational source line participating in page/server behavior.
17. `        src: url(/assets/MestizoFont.ttf);` - Operational source line participating in page/server behavior.
18. `        font-display: swap;` - Operational source line participating in page/server behavior.
19. `      }` - Closes a block (function, condition, loop, object, or element section).
20. `      ` - Blank line for readability / logical separation.
21. `      #loading-screen.fade-out {` - Operational source line participating in page/server behavior.
22. `        opacity: 0;` - Operational source line participating in page/server behavior.
23. `        pointer-events: none;` - Operational source line participating in page/server behavior.
24. `      }` - Closes a block (function, condition, loop, object, or element section).
25. `      ` - Blank line for readability / logical separation.
26. `      /* Animation Styles */` - Block comment boundary or content.
27. `      .animate-slide-in-top {` - Operational source line participating in page/server behavior.
28. `        animation: slideInFromTop 1s ease-out 0.3s both;` - Operational source line participating in page/server behavior.
29. `      }` - Closes a block (function, condition, loop, object, or element section).
30. `      ` - Blank line for readability / logical separation.
31. `      .animate-fade-in-up {` - Operational source line participating in page/server behavior.
32. `        animation: fadeInUp 1s ease-out 0.6s both;` - Operational source line participating in page/server behavior.
33. `      }` - Closes a block (function, condition, loop, object, or element section).
34. `      ` - Blank line for readability / logical separation.
35. `      .animate-navbar {` - Operational source line participating in page/server behavior.
36. `        animation: slideInFromTop 0.8s ease-out;` - Operational source line participating in page/server behavior.
37. `      }` - Closes a block (function, condition, loop, object, or element section).
38. `      ` - Blank line for readability / logical separation.
39. `      .hover-glow {` - Operational source line participating in page/server behavior.
40. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
41. `      }` - Closes a block (function, condition, loop, object, or element section).
42. `      ` - Blank line for readability / logical separation.
43. `      .hover-glow:hover {` - Operational source line participating in page/server behavior.
44. `        text-shadow: 0 0 15px rgba(190, 142, 48, 0.8);` - Operational source line participating in page/server behavior.
45. `        transform: scale(1.02);` - Operational source line participating in page/server behavior.
46. `      }` - Closes a block (function, condition, loop, object, or element section).
47. `      ` - Blank line for readability / logical separation.
48. `      .hover-lift:hover {` - Operational source line participating in page/server behavior.
49. `        transform: translateY(-5px);` - Operational source line participating in page/server behavior.
50. `        box-shadow: 0 10px 25px rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
51. `      }` - Closes a block (function, condition, loop, object, or element section).
52. `      ` - Blank line for readability / logical separation.
53. `      @keyframes slideInFromTop {` - Operational source line participating in page/server behavior.
54. `        0% {` - Operational source line participating in page/server behavior.
55. `          opacity: 0;` - Operational source line participating in page/server behavior.
56. `          transform: translateY(-50px);` - Operational source line participating in page/server behavior.
57. `        }` - Closes a block (function, condition, loop, object, or element section).
58. `        100% {` - Operational source line participating in page/server behavior.
59. `          opacity: 1;` - Operational source line participating in page/server behavior.
60. `          transform: translateY(0);` - Operational source line participating in page/server behavior.
61. `        }` - Closes a block (function, condition, loop, object, or element section).
62. `      }` - Closes a block (function, condition, loop, object, or element section).
63. `      ` - Blank line for readability / logical separation.
64. `      @keyframes fadeInUp {` - Operational source line participating in page/server behavior.
65. `        0% {` - Operational source line participating in page/server behavior.
66. `          opacity: 0;` - Operational source line participating in page/server behavior.
67. `          transform: translateY(30px);` - Operational source line participating in page/server behavior.
68. `        }` - Closes a block (function, condition, loop, object, or element section).
69. `        100% {` - Operational source line participating in page/server behavior.
70. `          opacity: 1;` - Operational source line participating in page/server behavior.
71. `          transform: translateY(0);` - Operational source line participating in page/server behavior.
72. `        }` - Closes a block (function, condition, loop, object, or element section).
73. `      }` - Closes a block (function, condition, loop, object, or element section).
74. `      ` - Blank line for readability / logical separation.
75. `      /* Table Styles */` - Block comment boundary or content.
76. `      .event-table {` - Operational source line participating in page/server behavior.
77. `        background: linear-gradient(135deg, rgba(8, 16, 50, 0.95), rgba(26, 41, 73, 0.95));` - Operational source line participating in page/server behavior.
78. `        backdrop-filter: blur(15px);` - Operational source line participating in page/server behavior.
79. `        border: 2px solid rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
80. `        border-radius: 25px;` - Operational source line participating in page/server behavior.
81. `        box-shadow: ` - Operational source line participating in page/server behavior.
82. `          0 25px 50px rgba(0, 0, 0, 0.3),` - Operational source line participating in page/server behavior.
83. `          0 0 30px rgba(190, 142, 48, 0.2),` - Operational source line participating in page/server behavior.
84. `          inset 0 1px 0 rgba(255, 215, 0, 0.1);` - Operational source line participating in page/server behavior.
85. `        overflow-x: auto;` - Operational source line participating in page/server behavior.
86. `        overflow-y: visible;` - Operational source line participating in page/server behavior.
87. `        animation: fadeInUp 0.8s ease-out 0.4s both;` - Operational source line participating in page/server behavior.
88. `        position: relative;` - Operational source line participating in page/server behavior.
89. `        -webkit-overflow-scrolling: touch;` - Operational source line participating in page/server behavior.
90. `      }` - Closes a block (function, condition, loop, object, or element section).
91. `      ` - Blank line for readability / logical separation.
92. `      .event-table::before {` - Operational source line participating in page/server behavior.
93. `        content: '';` - Operational source line participating in page/server behavior.
94. `        position: absolute;` - Operational source line participating in page/server behavior.
95. `        top: 0;` - Operational source line participating in page/server behavior.
96. `        left: 0;` - Operational source line participating in page/server behavior.
97. `        right: 0;` - Operational source line participating in page/server behavior.
98. `        bottom: 0;` - Operational source line participating in page/server behavior.
99. `        background: linear-gradient(45deg, ` - Operational source line participating in page/server behavior.
100. `          transparent 0%, ` - Operational source line participating in page/server behavior.
101. `          rgba(190, 142, 48, 0.05) 25%, ` - Operational source line participating in page/server behavior.
102. `          transparent 50%, ` - Operational source line participating in page/server behavior.
103. `          rgba(255, 215, 0, 0.05) 75%, ` - Operational source line participating in page/server behavior.
104. `          transparent 100%);` - Operational source line participating in page/server behavior.
105. `        pointer-events: none;` - Operational source line participating in page/server behavior.
106. `      }` - Closes a block (function, condition, loop, object, or element section).
107. `      ` - Blank line for readability / logical separation.
108. `      .table-header {` - Operational source line participating in page/server behavior.
109. `        background: linear-gradient(135deg, #BE8E30, #FFD700, #BE8E30);` - Operational source line participating in page/server behavior.
110. `        background-size: 200% 200%;` - Operational source line participating in page/server behavior.
111. `        animation: goldShimmer 3s ease-in-out infinite;` - Operational source line participating in page/server behavior.
112. `        color: #081032;` - Operational source line participating in page/server behavior.
113. `        font-weight: bold;` - Operational source line participating in page/server behavior.
114. `        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);` - Operational source line participating in page/server behavior.
115. `        position: relative;` - Operational source line participating in page/server behavior.
116. `      }` - Closes a block (function, condition, loop, object, or element section).
117. `      ` - Blank line for readability / logical separation.
118. `      .table-header::after {` - Operational source line participating in page/server behavior.
119. `        content: '';` - Operational source line participating in page/server behavior.
120. `        position: absolute;` - Operational source line participating in page/server behavior.
121. `        top: 0;` - Operational source line participating in page/server behavior.
122. `        left: 0;` - Operational source line participating in page/server behavior.
123. `        right: 0;` - Operational source line participating in page/server behavior.
124. `        bottom: 0;` - Operational source line participating in page/server behavior.
125. `        background: linear-gradient(90deg, ` - Operational source line participating in page/server behavior.
126. `          transparent 0%, ` - Operational source line participating in page/server behavior.
127. `          rgba(255, 255, 255, 0.2) 50%, ` - Operational source line participating in page/server behavior.
128. `          transparent 100%);` - Operational source line participating in page/server behavior.
129. `        animation: headerGlow 2s ease-in-out infinite alternate;` - Operational source line participating in page/server behavior.
130. `      }` - Closes a block (function, condition, loop, object, or element section).
131. `      ` - Blank line for readability / logical separation.
132. `      @keyframes goldShimmer {` - Operational source line participating in page/server behavior.
133. `        0%, 100% { background-position: 0% 50%; }` - Operational source line participating in page/server behavior.
134. `        50% { background-position: 100% 50%; }` - Operational source line participating in page/server behavior.
135. `      }` - Closes a block (function, condition, loop, object, or element section).
136. `      ` - Blank line for readability / logical separation.
137. `      @keyframes headerGlow {` - Operational source line participating in page/server behavior.
138. `        0% { opacity: 0.3; }` - Operational source line participating in page/server behavior.
139. `        100% { opacity: 0.7; }` - Operational source line participating in page/server behavior.
140. `      }` - Closes a block (function, condition, loop, object, or element section).
141. `      ` - Blank line for readability / logical separation.
142. `      .table-row {` - Operational source line participating in page/server behavior.
143. `        background: linear-gradient(90deg, ` - Operational source line participating in page/server behavior.
144. `          rgba(190, 142, 48, 0.08), ` - Operational source line participating in page/server behavior.
145. `          rgba(255, 215, 0, 0.05), ` - Operational source line participating in page/server behavior.
146. `          rgba(190, 142, 48, 0.08));` - Operational source line participating in page/server behavior.
147. `        border-bottom: 1px solid rgba(190, 142, 48, 0.2);` - Operational source line participating in page/server behavior.
148. `        color: #FFD700;` - Operational source line participating in page/server behavior.
149. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
150. `      }` - Closes a block (function, condition, loop, object, or element section).
151. `      ` - Blank line for readability / logical separation.
152. `      .table-row:nth-child(even) {` - Operational source line participating in page/server behavior.
153. `        background: linear-gradient(90deg, ` - Operational source line participating in page/server behavior.
154. `          rgba(190, 142, 48, 0.12), ` - Operational source line participating in page/server behavior.
155. `          rgba(255, 215, 0, 0.08), ` - Operational source line participating in page/server behavior.
156. `          rgba(190, 142, 48, 0.12));` - Operational source line participating in page/server behavior.
157. `      }` - Closes a block (function, condition, loop, object, or element section).
158. `      ` - Blank line for readability / logical separation.
159. `      .table-row:hover {` - Operational source line participating in page/server behavior.
160. `        background: linear-gradient(90deg, ` - Operational source line participating in page/server behavior.
161. `          rgba(190, 142, 48, 0.25), ` - Operational source line participating in page/server behavior.
162. `          rgba(255, 215, 0, 0.2), ` - Operational source line participating in page/server behavior.
163. `          rgba(190, 142, 48, 0.25));` - Operational source line participating in page/server behavior.
164. `        transform: translateY(-2px);` - Operational source line participating in page/server behavior.
165. `        box-shadow: ` - Operational source line participating in page/server behavior.
166. `          0 8px 25px rgba(190, 142, 48, 0.4),` - Operational source line participating in page/server behavior.
167. `          0 0 20px rgba(255, 215, 0, 0.2),` - Operational source line participating in page/server behavior.
168. `          inset 0 1px 0 rgba(255, 215, 0, 0.1);` - Operational source line participating in page/server behavior.
169. `        border-left: 4px solid #FFD700;` - Operational source line participating in page/server behavior.
170. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
171. `      }` - Closes a block (function, condition, loop, object, or element section).
172. `      ` - Blank line for readability / logical separation.
173. `      .event-name {` - Operational source line participating in page/server behavior.
174. `        color: #FFD700;` - Operational source line participating in page/server behavior.
175. `        font-weight: 600;` - Operational source line participating in page/server behavior.
176. `        text-shadow: 0 0 5px rgba(255, 215, 0, 0.3);` - Operational source line participating in page/server behavior.
177. `      }` - Closes a block (function, condition, loop, object, or element section).
178. `      ` - Blank line for readability / logical separation.
179. `      .table-cell {` - Operational source line participating in page/server behavior.
180. `        color: rgba(255, 255, 255, 0.9);` - Operational source line participating in page/server behavior.
181. `        transition: color 0.3s ease;` - Operational source line participating in page/server behavior.
182. `      }` - Closes a block (function, condition, loop, object, or element section).
183. `      ` - Blank line for readability / logical separation.
184. `      .table-row:hover .table-cell {` - Operational source line participating in page/server behavior.
185. `        color: #FFD700;` - Operational source line participating in page/server behavior.
186. `        text-shadow: 0 0 5px rgba(255, 215, 0, 0.2);` - Operational source line participating in page/server behavior.
187. `      }` - Closes a block (function, condition, loop, object, or element section).
188. `      ` - Blank line for readability / logical separation.
189. `      .search-container {` - Operational source line participating in page/server behavior.
190. `        animation: fadeInUp 0.8s ease-out 0.2s both;` - Operational source line participating in page/server behavior.
191. `      }` - Closes a block (function, condition, loop, object, or element section).
192. `      ` - Blank line for readability / logical separation.
193. `      .search-input {` - Operational source line participating in page/server behavior.
194. `        background: linear-gradient(135deg, rgba(8, 16, 50, 0.9), rgba(26, 41, 73, 0.9));` - Operational source line participating in page/server behavior.
195. `        backdrop-filter: blur(15px);` - Operational source line participating in page/server behavior.
196. `        border: 2px solid #BE8E30;` - Operational source line participating in page/server behavior.
197. `        border-radius: 20px;` - Operational source line participating in page/server behavior.
198. `        padding: 15px 50px 15px 25px;` - Operational source line participating in page/server behavior.
199. `        font-size: 16px;` - Operational source line participating in page/server behavior.
200. `        transition: all 0.4s ease;` - Operational source line participating in page/server behavior.
201. `        width: 100%;` - Operational source line participating in page/server behavior.
202. `        max-width: 500px;` - Operational source line participating in page/server behavior.
203. `        color: #FFD700;` - Operational source line participating in page/server behavior.
204. `        box-shadow: ` - Operational source line participating in page/server behavior.
205. `          0 10px 25px rgba(0, 0, 0, 0.2),` - Operational source line participating in page/server behavior.
206. `          0 0 20px rgba(190, 142, 48, 0.1),` - Operational source line participating in page/server behavior.
207. `          inset 0 1px 0 rgba(255, 215, 0, 0.1);` - Operational source line participating in page/server behavior.
208. `      }` - Closes a block (function, condition, loop, object, or element section).
209. `      ` - Blank line for readability / logical separation.
210. `      .search-input::placeholder {` - Operational source line participating in page/server behavior.
211. `        color: rgba(255, 215, 0, 0.6);` - Operational source line participating in page/server behavior.
212. `      }` - Closes a block (function, condition, loop, object, or element section).
213. `      ` - Blank line for readability / logical separation.
214. `      .search-input:focus {` - Operational source line participating in page/server behavior.
215. `        outline: none;` - Operational source line participating in page/server behavior.
216. `        border-color: #FFD700;` - Operational source line participating in page/server behavior.
217. `        background: linear-gradient(135deg, rgba(8, 16, 50, 0.95), rgba(26, 41, 73, 0.95));` - Operational source line participating in page/server behavior.
218. `        box-shadow: ` - Operational source line participating in page/server behavior.
219. `          0 15px 35px rgba(0, 0, 0, 0.3),` - Operational source line participating in page/server behavior.
220. `          0 0 30px rgba(255, 215, 0, 0.4),` - Operational source line participating in page/server behavior.
221. `          inset 0 1px 0 rgba(255, 215, 0, 0.2);` - Operational source line participating in page/server behavior.
222. `        transform: scale(1.05);` - Operational source line participating in page/server behavior.
223. `        color: #FFD700;` - Operational source line participating in page/server behavior.
224. `      }` - Closes a block (function, condition, loop, object, or element section).
225. `      ` - Blank line for readability / logical separation.
226. `      .search-icon {` - Operational source line participating in page/server behavior.
227. `        color: #BE8E30;` - Operational source line participating in page/server behavior.
228. `        transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
229. `      }` - Closes a block (function, condition, loop, object, or element section).
230. `      ` - Blank line for readability / logical separation.
231. `      .search-input:focus + .search-icon {` - Operational source line participating in page/server behavior.
232. `        color: #FFD700;` - Operational source line participating in page/server behavior.
233. `        text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);` - Operational source line participating in page/server behavior.
234. `      }` - Closes a block (function, condition, loop, object, or element section).
235. `      ` - Blank line for readability / logical separation.
236. `      .day-header {` - Operational source line participating in page/server behavior.
237. `        background: linear-gradient(135deg, #081032, #1a2949, #081032);` - Operational source line participating in page/server behavior.
238. `        background-size: 200% 200%;` - Operational source line participating in page/server behavior.
239. `        animation: dayHeaderShimmer 4s ease-in-out infinite;` - Operational source line participating in page/server behavior.
240. `        color: #FFD700;` - Operational source line participating in page/server behavior.
241. `        font-family: Mestizo, serif;` - Operational source line participating in page/server behavior.
242. `        font-size: 2.5rem;` - Operational source line participating in page/server behavior.
243. `        text-shadow: ` - Operational source line participating in page/server behavior.
244. `          0 0 15px rgba(255, 215, 0, 0.6),` - Operational source line participating in page/server behavior.
245. `          0 0 30px rgba(190, 142, 48, 0.4);` - Operational source line participating in page/server behavior.
246. `        border-bottom: 3px solid rgba(190, 142, 48, 0.5);` - Operational source line participating in page/server behavior.
247. `        position: relative;` - Operational source line participating in page/server behavior.
248. `        overflow: hidden;` - Operational source line participating in page/server behavior.
249. `      }` - Closes a block (function, condition, loop, object, or element section).
250. `      ` - Blank line for readability / logical separation.
251. `      .day-header::before {` - Operational source line participating in page/server behavior.
252. `        content: '';` - Operational source line participating in page/server behavior.
253. `        position: absolute;` - Operational source line participating in page/server behavior.
254. `        top: 0;` - Operational source line participating in page/server behavior.
255. `        left: -100%;` - Operational source line participating in page/server behavior.
256. `        width: 100%;` - Operational source line participating in page/server behavior.
257. `        height: 100%;` - Operational source line participating in page/server behavior.
258. `        background: linear-gradient(90deg, ` - Operational source line participating in page/server behavior.
259. `          transparent, ` - Operational source line participating in page/server behavior.
260. `          rgba(255, 215, 0, 0.2), ` - Operational source line participating in page/server behavior.
261. `          transparent);` - Operational source line participating in page/server behavior.
262. `        animation: dayHeaderSweep 3s ease-in-out infinite;` - Operational source line participating in page/server behavior.
263. `      }` - Closes a block (function, condition, loop, object, or element section).
264. `      ` - Blank line for readability / logical separation.
265. `      @keyframes dayHeaderShimmer {` - Operational source line participating in page/server behavior.
266. `        0%, 100% { background-position: 0% 50%; }` - Operational source line participating in page/server behavior.
267. `        50% { background-position: 100% 50%; }` - Operational source line participating in page/server behavior.
268. `      }` - Closes a block (function, condition, loop, object, or element section).
269. `      ` - Blank line for readability / logical separation.
270. `      @keyframes dayHeaderSweep {` - Operational source line participating in page/server behavior.
271. `        0% { left: -100%; }` - Operational source line participating in page/server behavior.
272. `        50% { left: 100%; }` - Operational source line participating in page/server behavior.
273. `        100% { left: 100%; }` - Operational source line participating in page/server behavior.
274. `      }` - Closes a block (function, condition, loop, object, or element section).
275. `      ` - Blank line for readability / logical separation.
276. `      /* No Results Message */` - Block comment boundary or content.
277. `      .no-results {` - Operational source line participating in page/server behavior.
278. `        text-align: center;` - Operational source line participating in page/server behavior.
279. `        padding: 40px 20px;` - Operational source line participating in page/server behavior.
280. `        color: #666;` - Operational source line participating in page/server behavior.
281. `        font-size: 18px;` - Operational source line participating in page/server behavior.
282. `        animation: fadeInUp 0.5s ease-out;` - Operational source line participating in page/server behavior.
283. `        margin-bottom: 0;` - Operational source line participating in page/server behavior.
284. `      }` - Closes a block (function, condition, loop, object, or element section).
285. `      ` - Blank line for readability / logical separation.
286. `      /* Remove default body margin */` - Block comment boundary or content.
287. `      body {` - Operational source line participating in page/server behavior.
288. `        margin: 0;` - Operational source line participating in page/server behavior.
289. `        padding: 0;` - Operational source line participating in page/server behavior.
290. `      }` - Closes a block (function, condition, loop, object, or element section).
291. `      ` - Blank line for readability / logical separation.
292. `      /* Mobile responsiveness */` - Block comment boundary or content.
293. `      @media (max-width: 768px) {` - Operational source line participating in page/server behavior.
294. `        .table-container {` - Operational source line participating in page/server behavior.
295. `          overflow-x: auto;` - Operational source line participating in page/server behavior.
296. `          overflow-y: visible;` - Operational source line participating in page/server behavior.
297. `          -webkit-overflow-scrolling: touch;` - Operational source line participating in page/server behavior.
298. `          width: 100%;` - Operational source line participating in page/server behavior.
299. `          position: relative;` - Operational source line participating in page/server behavior.
300. `        }` - Closes a block (function, condition, loop, object, or element section).
301. `        ` - Blank line for readability / logical separation.
302. `        .event-table {` - Operational source line participating in page/server behavior.
303. `          min-width: 100%;` - Operational source line participating in page/server behavior.
304. `          border-radius: 15px;` - Operational source line participating in page/server behavior.
305. `          overflow: visible;` - Operational source line participating in page/server behavior.
306. `        }` - Closes a block (function, condition, loop, object, or element section).
307. `        ` - Blank line for readability / logical separation.
308. `        .event-table table {` - Operational source line participating in page/server behavior.
309. `          min-width: 650px;` - Operational source line participating in page/server behavior.
310. `          font-size: 14px;` - Operational source line participating in page/server behavior.
311. `          display: table;` - Operational source line participating in page/server behavior.
312. `          table-layout: auto;` - Operational source line participating in page/server behavior.
313. `        }` - Closes a block (function, condition, loop, object, or element section).
314. `        ` - Blank line for readability / logical separation.
315. `        .table-header th {` - Operational source line participating in page/server behavior.
316. `          padding: 12px 8px;` - Operational source line participating in page/server behavior.
317. `          font-size: 13px;` - Operational source line participating in page/server behavior.
318. `        }` - Closes a block (function, condition, loop, object, or element section).
319. `        ` - Blank line for readability / logical separation.
320. `        .table-row td {` - Operational source line participating in page/server behavior.
321. `          padding: 12px 8px;` - Operational source line participating in page/server behavior.
322. `          font-size: 13px;` - Operational source line participating in page/server behavior.
323. `        }` - Closes a block (function, condition, loop, object, or element section).
324. `        ` - Blank line for readability / logical separation.
325. `        .search-input {` - Operational source line participating in page/server behavior.
326. `          max-width: 100%;` - Operational source line participating in page/server behavior.
327. `          font-size: 16px;` - Operational source line participating in page/server behavior.
328. `          padding: 12px 45px 12px 20px;` - Operational source line participating in page/server behavior.
329. `        }` - Closes a block (function, condition, loop, object, or element section).
330. `        ` - Blank line for readability / logical separation.
331. `        .day-header {` - Operational source line participating in page/server behavior.
332. `          font-size: 2rem;` - Operational source line participating in page/server behavior.
333. `          padding: 20px;` - Operational source line participating in page/server behavior.
334. `        }` - Closes a block (function, condition, loop, object, or element section).
335. `        ` - Blank line for readability / logical separation.
336. `        h1 {` - Operational source line participating in page/server behavior.
337. `          font-size: 2.5rem !important;` - Operational source line participating in page/server behavior.
338. `        }` - Closes a block (function, condition, loop, object, or element section).
339. `        ` - Blank line for readability / logical separation.
340. `        .container {` - Operational source line participating in page/server behavior.
341. `          padding-left: 12px;` - Operational source line participating in page/server behavior.
342. `          padding-right: 12px;` - Operational source line participating in page/server behavior.
343. `        }` - Closes a block (function, condition, loop, object, or element section).
344. `        ` - Blank line for readability / logical separation.
345. `        /* Improve mobile table readability */` - Block comment boundary or content.
346. `        .event-name {` - Operational source line participating in page/server behavior.
347. `          min-width: 120px;` - Operational source line participating in page/server behavior.
348. `          font-weight: 600;` - Operational source line participating in page/server behavior.
349. `        }` - Closes a block (function, condition, loop, object, or element section).
350. `        ` - Blank line for readability / logical separation.
351. `        .table-cell {` - Operational source line participating in page/server behavior.
352. `          white-space: nowrap;` - Operational source line participating in page/server behavior.
353. `        }` - Closes a block (function, condition, loop, object, or element section).
354. `        ` - Blank line for readability / logical separation.
355. `        /* Mobile scroll indicator */` - Block comment boundary or content.
356. `        .table-container::after {` - Operational source line participating in page/server behavior.
357. `          content: "← Swipe to see more →";` - Operational source line participating in page/server behavior.
358. `          display: block;` - Operational source line participating in page/server behavior.
359. `          text-align: center;` - Operational source line participating in page/server behavior.
360. `          padding: 8px;` - Operational source line participating in page/server behavior.
361. `          font-size: 12px;` - Operational source line participating in page/server behavior.
362. `          color: rgba(255, 215, 0, 0.6);` - Operational source line participating in page/server behavior.
363. `          background: rgba(8, 16, 50, 0.8);` - Operational source line participating in page/server behavior.
364. `          border-radius: 0 0 15px 15px;` - Operational source line participating in page/server behavior.
365. `        }` - Closes a block (function, condition, loop, object, or element section).
366. `      }` - Closes a block (function, condition, loop, object, or element section).
367. `      ` - Blank line for readability / logical separation.
368. `      @media (max-width: 480px) {` - Operational source line participating in page/server behavior.
369. `        h1 {` - Operational source line participating in page/server behavior.
370. `          font-size: 2rem !important;` - Operational source line participating in page/server behavior.
371. `        }` - Closes a block (function, condition, loop, object, or element section).
372. `        ` - Blank line for readability / logical separation.
373. `        .day-header {` - Operational source line participating in page/server behavior.
374. `          font-size: 1.75rem;` - Operational source line participating in page/server behavior.
375. `          padding: 15px;` - Operational source line participating in page/server behavior.
376. `        }` - Closes a block (function, condition, loop, object, or element section).
377. `        ` - Blank line for readability / logical separation.
378. `        .event-table table {` - Operational source line participating in page/server behavior.
379. `          min-width: 600px;` - Operational source line participating in page/server behavior.
380. `          font-size: 13px;` - Operational source line participating in page/server behavior.
381. `        }` - Closes a block (function, condition, loop, object, or element section).
382. `        ` - Blank line for readability / logical separation.
383. `        .table-header th {` - Operational source line participating in page/server behavior.
384. `          padding: 10px 6px;` - Operational source line participating in page/server behavior.
385. `          font-size: 12px;` - Operational source line participating in page/server behavior.
386. `        }` - Closes a block (function, condition, loop, object, or element section).
387. `        ` - Blank line for readability / logical separation.
388. `        .table-row td {` - Operational source line participating in page/server behavior.
389. `          padding: 10px 6px;` - Operational source line participating in page/server behavior.
390. `          font-size: 12px;` - Operational source line participating in page/server behavior.
391. `        }` - Closes a block (function, condition, loop, object, or element section).
392. `        ` - Blank line for readability / logical separation.
393. `        .search-input {` - Operational source line participating in page/server behavior.
394. `          padding: 10px 40px 10px 18px;` - Operational source line participating in page/server behavior.
395. `          font-size: 16px;` - Operational source line participating in page/server behavior.
396. `        }` - Closes a block (function, condition, loop, object, or element section).
397. `        ` - Blank line for readability / logical separation.
398. `        .container {` - Operational source line participating in page/server behavior.
399. `          padding-left: 8px;` - Operational source line participating in page/server behavior.
400. `          padding-right: 8px;` - Operational source line participating in page/server behavior.
401. `        }` - Closes a block (function, condition, loop, object, or element section).
402. `      }` - Closes a block (function, condition, loop, object, or element section).
403. `    </style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
404. `    ` - Blank line for readability / logical separation.
405. `    <script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
406. `      async function loadConfig() {` - Defines an async function that awaits I/O operations (usually fetch).
407. `        try {` - Operational source line participating in page/server behavior.
408. `          const response = await fetch("/config.json");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
409. `          const data = await response.json();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
410. `          const site = data.website;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
411. `          ` - Blank line for readability / logical separation.
412. `          // Load navbar` - Comment line describing intent or section.
413. `          for(let i = 0; i < site.navbar.links.length; i++) {` - Iterates through a list/collection to build UI or process records.
414. `            document.getElementById("desktop-nav").innerHTML += `<a href="${site.navbar.links[i].linkto}" class="hover:text-blue-200">${site.navbar.links[i].name}</a>`;` - Reads a DOM element reference to manipulate content or behavior.
415. `            document.getElementById("mobile-menu").innerHTML += `<a href="${site.navbar.links[i].linkto}" class="block py-2 text-lg hover:text-blue-200">${site.navbar.links[i].name}</a>`;` - Reads a DOM element reference to manipulate content or behavior.
416. `          }` - Closes a block (function, condition, loop, object, or element section).
417. `          ` - Blank line for readability / logical separation.
418. `          document.getElementById("nav-title").textContent = site.navbar.title;` - Reads a DOM element reference to manipulate content or behavior.
419. `          ` - Blank line for readability / logical separation.
420. `        } catch (error) {` - Closes a block (function, condition, loop, object, or element section).
421. `          console.error("Failed to load config:", error);` - Operational source line participating in page/server behavior.
422. `        } finally {` - Closes a block (function, condition, loop, object, or element section).
423. `          // Hide loading screen` - Comment line describing intent or section.
424. `          const loader = document.getElementById("loading-screen");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
425. `          setTimeout(() => {` - Arrow function expression used as callback or concise helper.
426. `            loader.classList.add("fade-out");` - Adds/removes/toggles CSS classes to control visibility or animation state.
427. `            setTimeout(() => loader.remove(), 600);` - Arrow function expression used as callback or concise helper.
428. `          }, 1500);` - Closes a block (function, condition, loop, object, or element section).
429. `        }` - Closes a block (function, condition, loop, object, or element section).
430. `      }` - Closes a block (function, condition, loop, object, or element section).
431. `      ` - Blank line for readability / logical separation.
432. `      loadConfig();` - Operational source line participating in page/server behavior.
433. `    </script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
434. `  </head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
435. `  <body class="bg-gray-100 text-gray-800">` - HTML markup line contributing structure, metadata, scripts, or content containers.
436. `    <!-- Loading Screen -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
437. `    <div id="loading-screen" style="` - HTML markup line contributing structure, metadata, scripts, or content containers.
438. `      position: fixed;` - Operational source line participating in page/server behavior.
439. `      inset: 0;` - Operational source line participating in page/server behavior.
440. `      background: linear-gradient(135deg, #0a0f2c, #1a2949);` - Operational source line participating in page/server behavior.
441. `      z-index: 9999;` - Operational source line participating in page/server behavior.
442. `      display: flex;` - Operational source line participating in page/server behavior.
443. `      align-items: center;` - Operational source line participating in page/server behavior.
444. `      justify-content: center;` - Operational source line participating in page/server behavior.
445. `      transition: opacity 0.6s ease;` - Operational source line participating in page/server behavior.
446. `    ">` - Operational source line participating in page/server behavior.
447. `      <video` - HTML markup line contributing structure, metadata, scripts, or content containers.
448. `        id="loading-video"` - Operational source line participating in page/server behavior.
449. `        autoplay` - Operational source line participating in page/server behavior.
450. `        muted` - Operational source line participating in page/server behavior.
451. `        loop` - Operational source line participating in page/server behavior.
452. `        playsinline` - Operational source line participating in page/server behavior.
453. `        style="` - Operational source line participating in page/server behavior.
454. `          width: 150px;` - Operational source line participating in page/server behavior.
455. `          height: 150px;` - Operational source line participating in page/server behavior.
456. `          object-fit: contain;` - Operational source line participating in page/server behavior.
457. `          filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7));` - Operational source line participating in page/server behavior.
458. `          border-radius: 12px;` - Operational source line participating in page/server behavior.
459. `        "` - Operational source line participating in page/server behavior.
460. `      >` - Operational source line participating in page/server behavior.
461. `        <source src="/assets/load.mp4" type="video/mp4" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
462. `        Your browser does not support the video tag.` - Operational source line participating in page/server behavior.
463. `      </video>` - HTML markup line contributing structure, metadata, scripts, or content containers.
464. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
465. `` - Blank line for readability / logical separation.
466. `    <!-- Navbar -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
467. `    <nav class="text-white animate-navbar" style="background: #081032">` - HTML markup line contributing structure, metadata, scripts, or content containers.
468. `      <div class="container mx-auto px-4 py-4 flex justify-between items-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
469. `        <div class="text-2xl hover-glow" style="font-family: Mestizo" id="nav-title">` - HTML markup line contributing structure, metadata, scripts, or content containers.
470. `          Perseverantia` - Operational source line participating in page/server behavior.
471. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
472. `` - Blank line for readability / logical separation.
473. `        <!-- Desktop Nav -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
474. `        <div class="hidden md:flex space-x-6 text-lg" id="desktop-nav">` - HTML markup line contributing structure, metadata, scripts, or content containers.
475. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
476. `` - Blank line for readability / logical separation.
477. `        <!-- Mobile Menu Button -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
478. `        <div class="md:hidden">` - HTML markup line contributing structure, metadata, scripts, or content containers.
479. `          <button id="menu-toggle" class="focus:outline-none" aria-label="menu">` - HTML markup line contributing structure, metadata, scripts, or content containers.
480. `            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">` - HTML markup line contributing structure, metadata, scripts, or content containers.
481. `              <path d="M4 6h16M4 12h16M4 18h16" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
482. `            </svg>` - HTML markup line contributing structure, metadata, scripts, or content containers.
483. `          </button>` - HTML markup line contributing structure, metadata, scripts, or content containers.
484. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
485. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
486. `` - Blank line for readability / logical separation.
487. `      <!-- Mobile Menu -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
488. `      <div id="mobile-menu" class="md:hidden hidden opacity-0 scale-y-90 -translate-y-4 transform transition-all duration-500 ease-out origin-top px-4 pb-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
489. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
490. `    </nav>` - HTML markup line contributing structure, metadata, scripts, or content containers.
491. `` - Blank line for readability / logical separation.
492. `    <!-- Main Content -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
493. `    <div class="min-h-screen pb-8" style="background: linear-gradient(135deg, #0D122C 0%, #131D3F 100%);">` - HTML markup line contributing structure, metadata, scripts, or content containers.
494. `      ` - Blank line for readability / logical separation.
495. `      <!-- Header Section -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
496. `      <div class="pt-8 pb-6 text-center px-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
497. `        <h1 class="text-3xl md:text-5xl font-bold text-white animate-slide-in-top" style="font-family: Mestizo">` - HTML markup line contributing structure, metadata, scripts, or content containers.
498. `          Event Locations & Schedule` - Operational source line participating in page/server behavior.
499. `        </h1>` - HTML markup line contributing structure, metadata, scripts, or content containers.
500. `        <p class="text-lg md:text-xl text-gray-300 mt-4 animate-fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
501. `          Find your event locations and timings for Perseverantia 2025` - Operational source line participating in page/server behavior.
502. `        </p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
503. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
504. `` - Blank line for readability / logical separation.
505. `      <!-- Search Section -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
506. `      <div class="search-container flex justify-center mb-6 px-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
507. `        <div class="relative w-full max-w-md">` - HTML markup line contributing structure, metadata, scripts, or content containers.
508. `          <input ` - HTML markup line contributing structure, metadata, scripts, or content containers.
509. `            type="text" ` - Operational source line participating in page/server behavior.
510. `            id="searchInput" ` - Operational source line participating in page/server behavior.
511. `            placeholder="Search events, locations, or timings..." ` - Operational source line participating in page/server behavior.
512. `            class="search-input pl-12 w-full"` - Operational source line participating in page/server behavior.
513. `          >` - Operational source line participating in page/server behavior.
514. `          <i class="fas fa-search search-icon absolute left-4 top-1/2 transform -translate-y-1/2"></i>` - HTML markup line contributing structure, metadata, scripts, or content containers.
515. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
516. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
517. `` - Blank line for readability / logical separation.
518. `      <!-- Day 1 Table -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
519. `      <div class="container mx-auto px-2 sm:px-4 mb-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
520. `        <div class="event-table">` - HTML markup line contributing structure, metadata, scripts, or content containers.
521. `          <div class="day-header text-center py-4 md:py-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
522. `            <h2>Day 1</h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
523. `          </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
524. `          ` - Blank line for readability / logical separation.
525. `          <div class="table-container">` - HTML markup line contributing structure, metadata, scripts, or content containers.
526. `            <table class="w-full">` - HTML markup line contributing structure, metadata, scripts, or content containers.
527. `              <thead class="table-header">` - HTML markup line contributing structure, metadata, scripts, or content containers.
528. `                <tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
529. `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Name</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
530. `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Registration Time</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
531. `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Location</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
532. `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Timing</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
533. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
534. `              </thead>` - HTML markup line contributing structure, metadata, scripts, or content containers.
535. `              <tbody id="day1-tbody">` - HTML markup line contributing structure, metadata, scripts, or content containers.
536. `                <tr class="table-row border-b border-gray-200" data-day="1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
537. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Codeferno</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
538. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
539. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Computer Lab</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
540. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
541. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
542. `                <tr class="table-row border-b border-gray-200" data-day="1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
543. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Football</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
544. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">6:00 AM - 7:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
545. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Field</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
546. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 2:00 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
547. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
548. `                <tr class="table-row border-b border-gray-200" data-day="1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
549. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Basketball</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
550. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">6:00 AM - 7:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
551. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
552. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 12:30 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
553. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
554. `                <tr class="table-row border-b border-gray-200" data-day="1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
555. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Esports</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
556. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
557. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Dance Room 2</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
558. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
559. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
560. `                <tr class="table-row border-b border-gray-200" data-day="1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
561. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Gully Cricket</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
562. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
563. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Heritage Block</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
564. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 2:00 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
565. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
566. `                <tr class="table-row border-b border-gray-200" data-day="1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
567. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Table Tennis</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
568. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
569. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Prefab Hall</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
570. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
571. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
572. `                <tr class="table-row border-b border-gray-200" data-day="1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
573. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Tug of War</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
574. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">11:00 AM - 11:30 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
575. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
576. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">12:30 PM - 2:30 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
577. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
578. `                <tr class="table-row border-b border-gray-200" data-day="1">` - HTML markup line contributing structure, metadata, scripts, or content containers.
579. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Explorare</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
580. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
581. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">School</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
582. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
583. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
584. `              </tbody>` - HTML markup line contributing structure, metadata, scripts, or content containers.
585. `            </table>` - HTML markup line contributing structure, metadata, scripts, or content containers.
586. `          </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
587. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
588. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
589. `` - Blank line for readability / logical separation.
590. `      <!-- Day 2 Table -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
591. `      <div class="container mx-auto px-2 sm:px-4 mb-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
592. `        <div class="event-table">` - HTML markup line contributing structure, metadata, scripts, or content containers.
593. `          <div class="day-header text-center py-4 md:py-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
594. `            <h2>Day 2</h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
595. `          </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
596. `          ` - Blank line for readability / logical separation.
597. `          <div class="table-container">` - HTML markup line contributing structure, metadata, scripts, or content containers.
598. `            <table class="w-full">` - HTML markup line contributing structure, metadata, scripts, or content containers.
599. `              <thead class="table-header">` - HTML markup line contributing structure, metadata, scripts, or content containers.
600. `                <tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
601. `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Name</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
602. `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Registration Time</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
603. `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Location</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
604. `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Timing</th>` - HTML markup line contributing structure, metadata, scripts, or content containers.
605. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
606. `              </thead>` - HTML markup line contributing structure, metadata, scripts, or content containers.
607. `              <tbody id="day2-tbody">` - HTML markup line contributing structure, metadata, scripts, or content containers.
608. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
609. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Fabula</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
610. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
611. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">401, 402</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
612. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 12:00 Noon</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
613. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
614. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
615. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Adventurium</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
616. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
617. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">403, 404</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
618. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 10:30 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
619. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
620. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
621. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Carmen 1</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
622. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
623. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">405, 406</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
624. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 10:30 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
625. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
626. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
627. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Carmen 2</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
628. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
629. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">405, 406</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
630. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 10:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
631. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
632. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
633. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Admeta</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
634. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
635. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">502, 503</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
636. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 12:00 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
637. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
638. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
639. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Fortuna</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
640. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
641. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">504</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
642. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
643. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
644. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
645. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Mahim - 16</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
646. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
647. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">501, 505, 506, 507</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
648. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">9:00 AM - 12:00 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
649. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
650. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
651. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Artem</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
652. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
653. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Art Room</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
654. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
655. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
656. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
657. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Gustatio</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
658. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
659. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Physics Lab</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
660. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:30 AM - 11:30 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
661. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
662. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
663. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Monopolium</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
664. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
665. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Prefab Hall</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
666. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 10:00 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
667. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
668. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
669. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Symphonia</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
670. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">9:45 AM - 10:30 AM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
671. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
672. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">11:00 AM - 12:30 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
673. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
674. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
675. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Prize Distribution</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
676. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">N/A</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
677. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
678. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">12:30 PM - 1:15 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
679. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
680. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
681. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">MR & MS Perseverantia</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
682. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">11:00 AM - 12:00 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
683. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
684. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">1:30 PM - 3:30 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
685. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
686. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
687. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Panache</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
688. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">1:00 PM - 2:00 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
689. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
690. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">3:45 PM - 4:45 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
691. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
692. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
693. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Gratia</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
694. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">3:00 PM - 3:30 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
695. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
696. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">5:00 PM - 6:30 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
697. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
698. `                <tr class="table-row border-b border-gray-200" data-day="2">` - HTML markup line contributing structure, metadata, scripts, or content containers.
699. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Prize Distribution</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
700. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">N/A</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
701. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
702. `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">6:30 PM - 7:15 PM</td>` - HTML markup line contributing structure, metadata, scripts, or content containers.
703. `                </tr>` - HTML markup line contributing structure, metadata, scripts, or content containers.
704. `              </tbody>` - HTML markup line contributing structure, metadata, scripts, or content containers.
705. `            </table>` - HTML markup line contributing structure, metadata, scripts, or content containers.
706. `          </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
707. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
708. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
709. `` - Blank line for readability / logical separation.
710. `      <!-- No Results Message -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
711. `      <div id="no-results" class="no-results hidden">` - HTML markup line contributing structure, metadata, scripts, or content containers.
712. `        <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>` - HTML markup line contributing structure, metadata, scripts, or content containers.
713. `        <p>No events found matching your search criteria.</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
714. `      </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
715. `` - Blank line for readability / logical separation.
716. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
717. `` - Blank line for readability / logical separation.
718. `    <!-- Search Functionality -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
719. `    <script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
720. `      // Mobile menu toggle` - Comment line describing intent or section.
721. `      document.getElementById('menu-toggle').addEventListener('click', function() {` - Attaches an event listener to react to user interaction or lifecycle events.
722. `        const mobileMenu = document.getElementById('mobile-menu');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
723. `        mobileMenu.classList.toggle('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
724. `        mobileMenu.classList.toggle('opacity-0');` - Adds/removes/toggles CSS classes to control visibility or animation state.
725. `        mobileMenu.classList.toggle('scale-y-90');` - Adds/removes/toggles CSS classes to control visibility or animation state.
726. `        mobileMenu.classList.toggle('-translate-y-4');` - Adds/removes/toggles CSS classes to control visibility or animation state.
727. `      });` - Closes a block (function, condition, loop, object, or element section).
728. `` - Blank line for readability / logical separation.
729. `      // Search functionality` - Comment line describing intent or section.
730. `      const searchInput = document.getElementById('searchInput');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
731. `      const day1Tbody = document.getElementById('day1-tbody');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
732. `      const day2Tbody = document.getElementById('day2-tbody');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
733. `      const noResults = document.getElementById('no-results');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
734. `      ` - Blank line for readability / logical separation.
735. `      searchInput.addEventListener('input', function() {` - Attaches an event listener to react to user interaction or lifecycle events.
736. `        const searchTerm = this.value.toLowerCase().trim();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
737. `        const allRows = document.querySelectorAll('.table-row');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
738. `        let visibleRowsCount = 0;` - Declares a mutable variable used for evolving UI/state values.
739. `        ` - Blank line for readability / logical separation.
740. `        allRows.forEach(row => {` - Arrow function expression used as callback or concise helper.
741. `          const eventName = row.cells[0].textContent.toLowerCase();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
742. `          const registrationTime = row.cells[1].textContent.toLowerCase();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
743. `          const location = row.cells[2].textContent.toLowerCase();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
744. `          const eventTiming = row.cells[3].textContent.toLowerCase();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
745. `          ` - Blank line for readability / logical separation.
746. `          const isMatch = eventName.includes(searchTerm) \\|\\|` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
747. `                         registrationTime.includes(searchTerm) \\|\\|` - Operational source line participating in page/server behavior.
748. `                         location.includes(searchTerm) \\|\\|` - Operational source line participating in page/server behavior.
749. `                         eventTiming.includes(searchTerm);` - Operational source line participating in page/server behavior.
750. `          ` - Blank line for readability / logical separation.
751. `          if (isMatch) {` - Starts a conditional branch that decides behavior based on runtime state.
752. `            row.style.display = '';` - Operational source line participating in page/server behavior.
753. `            visibleRowsCount++;` - Operational source line participating in page/server behavior.
754. `          } else {` - Closes a block (function, condition, loop, object, or element section).
755. `            row.style.display = 'none';` - Operational source line participating in page/server behavior.
756. `          }` - Closes a block (function, condition, loop, object, or element section).
757. `        });` - Closes a block (function, condition, loop, object, or element section).
758. `        ` - Blank line for readability / logical separation.
759. `        // Show/hide no results message` - Comment line describing intent or section.
760. `        if (visibleRowsCount === 0 && searchTerm !== '') {` - Starts a conditional branch that decides behavior based on runtime state.
761. `          noResults.classList.remove('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
762. `        } else {` - Closes a block (function, condition, loop, object, or element section).
763. `          noResults.classList.add('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
764. `        }` - Closes a block (function, condition, loop, object, or element section).
765. `        ` - Blank line for readability / logical separation.
766. `        // Hide/show tables based on visible rows` - Comment line describing intent or section.
767. `        const day1VisibleRows = day1Tbody.querySelectorAll('.table-row:not([style*="display: none"])').length;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
768. `        const day2VisibleRows = day2Tbody.querySelectorAll('.table-row:not([style*="display: none"])').length;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
769. `        ` - Blank line for readability / logical separation.
770. `        day1Tbody.closest('.event-table').style.display = day1VisibleRows > 0 ? '' : 'none';` - Operational source line participating in page/server behavior.
771. `        day2Tbody.closest('.event-table').style.display = day2VisibleRows > 0 ? '' : 'none';` - Operational source line participating in page/server behavior.
772. `      });` - Closes a block (function, condition, loop, object, or element section).
773. `      ` - Blank line for readability / logical separation.
774. `      // Clear search when clicking outside` - Comment line describing intent or section.
775. `      document.addEventListener('click', function(e) {` - Attaches an event listener to react to user interaction or lifecycle events.
776. `        if (!searchInput.contains(e.target)) {` - Starts a conditional branch that decides behavior based on runtime state.
777. `          // Optional: Clear search when clicking outside` - Comment line describing intent or section.
778. `        }` - Closes a block (function, condition, loop, object, or element section).
779. `      });` - Closes a block (function, condition, loop, object, or element section).
780. `    </script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
781. `  </body>` - HTML markup line contributing structure, metadata, scripts, or content containers.
782. `</html>` - HTML markup line contributing structure, metadata, scripts, or content containers.

## .\persev-compiled\frontend\organizing-committee.html

1. `<!doctype html>` - HTML markup line contributing structure, metadata, scripts, or content containers.
2. `<html lang="en">` - HTML markup line contributing structure, metadata, scripts, or content containers.
3. `` - Blank line for readability / logical separation.
4. `<head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
5. `    <meta charset="UTF-8" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
6. `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
7. `    <meta name="description" content="Meet the Organising Committee of Perseverantia, Bombay Scottish School, Mahim.">` - HTML markup line contributing structure, metadata, scripts, or content containers.
8. `    <meta name="color-scheme" content="dark">` - HTML markup line contributing structure, metadata, scripts, or content containers.
9. `    <meta name="theme-color" content="#0a0f2c">` - HTML markup line contributing structure, metadata, scripts, or content containers.
10. `    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">` - HTML markup line contributing structure, metadata, scripts, or content containers.
11. `    <link rel="canonical" href="https://bss-perseverantia.github.io/organizing-committee">` - HTML markup line contributing structure, metadata, scripts, or content containers.
12. `    <link rel="icon" type="image/png" href="/assets/persev.png" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
13. `    <meta property="og:site_name" content="Perseverantia">` - HTML markup line contributing structure, metadata, scripts, or content containers.
14. `    <meta property="og:title" content="Organising Committee - Perseverantia 2025">` - HTML markup line contributing structure, metadata, scripts, or content containers.
15. `    <meta property="og:description"` - HTML markup line contributing structure, metadata, scripts, or content containers.
16. `        content="Meet the brilliant team behind Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` - Operational source line participating in page/server behavior.
17. `    <meta property="og:image" content="https://bss-perseverantia.github.io/assets/persev2.png">` - HTML markup line contributing structure, metadata, scripts, or content containers.
18. `    <meta property="og:type" content="website" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
19. `    <meta property="og:url" content="https://bss-perseverantia.github.io/organizing-committee">` - HTML markup line contributing structure, metadata, scripts, or content containers.
20. `    <meta name="twitter:card" content="summary_large_image" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
21. `    <meta name="twitter:title" content="Organising Committee - Perseverantia 2025" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
22. `    <meta name="twitter:description" content="Meet the team behind Perseverantia, Bombay Scottish School, Mahim." />` - HTML markup line contributing structure, metadata, scripts, or content containers.
23. `    <meta name="twitter:image" content="https://bss-perseverantia.github.io/persev2.png" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
24. `    <meta name="keywords" content="` - HTML markup line contributing structure, metadata, scripts, or content containers.
25. `Perseverantia,` - Operational source line participating in page/server behavior.
26. `Perseverantia 2025,` - Operational source line participating in page/server behavior.
27. `Perseverantia Bombay Scottish School,` - Operational source line participating in page/server behavior.
28. `Bombay Scottish School Mahim,` - Operational source line participating in page/server behavior.
29. `Bombay Scottish School Mahim fest,` - Operational source line participating in page/server behavior.
30. `Perseverantia Organising Committee,` - Operational source line participating in page/server behavior.
31. `Perseverantia Organizing Committee,` - Operational source line participating in page/server behavior.
32. `Perseverantia OC 2025,` - Operational source line participating in page/server behavior.
33. `Bombay Scottish Inter School Festival,` - Operational source line participating in page/server behavior.
34. `persev oc,` - Operational source line participating in page/server behavior.
35. `persev organizing,` - Operational source line participating in page/server behavior.
36. `persev Committee,` - Operational source line participating in page/server behavior.
37. `oc,` - Operational source line participating in page/server behavior.
38. `organizing committee,` - Operational source line participating in page/server behavior.
39. `` - Blank line for readability / logical separation.
40. `Darshil Kochar,` - Operational source line participating in page/server behavior.
41. `Neel More,` - Operational source line participating in page/server behavior.
42. `Nishil Iyer,` - Operational source line participating in page/server behavior.
43. `` - Blank line for readability / logical separation.
44. `Adhunya Pan,` - Operational source line participating in page/server behavior.
45. `Krishay Shreeram,` - Operational source line participating in page/server behavior.
46. `` - Blank line for readability / logical separation.
47. `Varun Sinha,` - Operational source line participating in page/server behavior.
48. `Aadya Raikar,` - Operational source line participating in page/server behavior.
49. `` - Blank line for readability / logical separation.
50. `Janyaa Patkar,` - Operational source line participating in page/server behavior.
51. `Naisha Doshi,` - Operational source line participating in page/server behavior.
52. `` - Blank line for readability / logical separation.
53. `Sharanya Madan,` - Operational source line participating in page/server behavior.
54. `Tanisha Dutta,` - Operational source line participating in page/server behavior.
55. `` - Blank line for readability / logical separation.
56. `Aastha Shahane,` - Operational source line participating in page/server behavior.
57. `Yashvi Mehta,` - Operational source line participating in page/server behavior.
58. `` - Blank line for readability / logical separation.
59. `Anshrah Ahmed,` - Operational source line participating in page/server behavior.
60. `Anvi Khattar,` - Operational source line participating in page/server behavior.
61. `` - Blank line for readability / logical separation.
62. `Shaurya Raisoni,` - Operational source line participating in page/server behavior.
63. `Vivaan Chakrabarti,` - Operational source line participating in page/server behavior.
64. `` - Blank line for readability / logical separation.
65. `Hridhuun Savant,` - Operational source line participating in page/server behavior.
66. `Arhaan Barucha,` - Operational source line participating in page/server behavior.
67. `` - Blank line for readability / logical separation.
68. `Druvan Kapoor,` - Operational source line participating in page/server behavior.
69. `Nandini Gurav,` - Operational source line participating in page/server behavior.
70. `` - Blank line for readability / logical separation.
71. `Arjun Bapat,` - Operational source line participating in page/server behavior.
72. `Aaditya Gupta,` - Operational source line participating in page/server behavior.
73. `` - Blank line for readability / logical separation.
74. `Aditi Manchandani,` - Operational source line participating in page/server behavior.
75. `` - Blank line for readability / logical separation.
76. `Suyash Agarwal,` - Operational source line participating in page/server behavior.
77. `Naman Kalra` - Operational source line participating in page/server behavior.
78. `">` - Operational source line participating in page/server behavior.
79. `<script type="application/ld+json">` - HTML markup line contributing structure, metadata, scripts, or content containers.
80. `{` - Opens a block scope.
81. `  "@context": "https://schema.org",` - Operational source line participating in page/server behavior.
82. `  "@type": "Organization",` - Operational source line participating in page/server behavior.
83. `  "name": "Perseverantia 2025",` - Operational source line participating in page/server behavior.
84. `  "url": "https://bss-perseverantia.github.io/organizing-committee",` - Operational source line participating in page/server behavior.
85. `  "parentOrganization": {` - Operational source line participating in page/server behavior.
86. `   "@type": "School",` - Operational source line participating in page/server behavior.
87. `   "name": "Bombay Scottish School Mahim"` - Operational source line participating in page/server behavior.
88. ` },` - Closes a block (function, condition, loop, object, or element section).
89. `  "member": [` - Operational source line participating in page/server behavior.
90. `    {` - Opens a block scope.
91. `      "@type": "Person",` - Operational source line participating in page/server behavior.
92. `      "name": "Darshil Kochar",` - Operational source line participating in page/server behavior.
93. `      "jobTitle": "President",` - Operational source line participating in page/server behavior.
94. `      "affiliation": "Bombay Scottish School Mahim"` - Operational source line participating in page/server behavior.
95. `    },` - Closes a block (function, condition, loop, object, or element section).
96. `    {` - Opens a block scope.
97. `      "@type": "Person",` - Operational source line participating in page/server behavior.
98. `      "name": "Neel More",` - Operational source line participating in page/server behavior.
99. `      "jobTitle": "President",` - Operational source line participating in page/server behavior.
100. `      "affiliation": "Bombay Scottish School Mahim"` - Operational source line participating in page/server behavior.
101. `    },` - Closes a block (function, condition, loop, object, or element section).
102. `    {` - Opens a block scope.
103. `      "@type": "Person",` - Operational source line participating in page/server behavior.
104. `      "name": "Nishil Iyer",` - Operational source line participating in page/server behavior.
105. `      "jobTitle": "President",` - Operational source line participating in page/server behavior.
106. `      "affiliation": "Bombay Scottish School Mahim"` - Operational source line participating in page/server behavior.
107. `    },` - Closes a block (function, condition, loop, object, or element section).
108. `    {` - Opens a block scope.
109. `      "@type": "Person",` - Operational source line participating in page/server behavior.
110. `      "name": "Adhunya Pan",` - Operational source line participating in page/server behavior.
111. `      "jobTitle": "Head of Administration"` - Operational source line participating in page/server behavior.
112. `    },` - Closes a block (function, condition, loop, object, or element section).
113. `    {` - Opens a block scope.
114. `      "@type": "Person",` - Operational source line participating in page/server behavior.
115. `      "name": "Krishay Shreeram",` - Operational source line participating in page/server behavior.
116. `      "jobTitle": "Deputy Head of Administration"` - Operational source line participating in page/server behavior.
117. `    },` - Closes a block (function, condition, loop, object, or element section).
118. `    {` - Opens a block scope.
119. `      "@type": "Person",` - Operational source line participating in page/server behavior.
120. `      "name": "Varun Sinha",` - Operational source line participating in page/server behavior.
121. `      "jobTitle": "Head of R&D"` - Operational source line participating in page/server behavior.
122. `    },` - Closes a block (function, condition, loop, object, or element section).
123. `    {` - Opens a block scope.
124. `      "@type": "Person",` - Operational source line participating in page/server behavior.
125. `      "name": "Aadya Raikar",` - Operational source line participating in page/server behavior.
126. `      "jobTitle": "Deputy Head of R&D"` - Operational source line participating in page/server behavior.
127. `    },` - Closes a block (function, condition, loop, object, or element section).
128. `    {` - Opens a block scope.
129. `      "@type": "Person",` - Operational source line participating in page/server behavior.
130. `      "name": "Janyaa Patkar",` - Operational source line participating in page/server behavior.
131. `      "jobTitle": "Head of Design"` - Operational source line participating in page/server behavior.
132. `    },` - Closes a block (function, condition, loop, object, or element section).
133. `    {` - Opens a block scope.
134. `      "@type": "Person",` - Operational source line participating in page/server behavior.
135. `      "name": "Naisha Doshi",` - Operational source line participating in page/server behavior.
136. `      "jobTitle": "Deputy Head of Design"` - Operational source line participating in page/server behavior.
137. `    },` - Closes a block (function, condition, loop, object, or element section).
138. `    {` - Opens a block scope.
139. `      "@type": "Person",` - Operational source line participating in page/server behavior.
140. `      "name": "Sharanya Madan",` - Operational source line participating in page/server behavior.
141. `      "jobTitle": "Head of Social Media"` - Operational source line participating in page/server behavior.
142. `    },` - Closes a block (function, condition, loop, object, or element section).
143. `    {` - Opens a block scope.
144. `      "@type": "Person",` - Operational source line participating in page/server behavior.
145. `      "name": "Tanisha Dutta",` - Operational source line participating in page/server behavior.
146. `      "jobTitle": "Deputy Head of Social Media"` - Operational source line participating in page/server behavior.
147. `    },` - Closes a block (function, condition, loop, object, or element section).
148. `    {` - Opens a block scope.
149. `      "@type": "Person",` - Operational source line participating in page/server behavior.
150. `      "name": "Aastha Shahane",` - Operational source line participating in page/server behavior.
151. `      "jobTitle": "Head of Marketing"` - Operational source line participating in page/server behavior.
152. `    },` - Closes a block (function, condition, loop, object, or element section).
153. `    {` - Opens a block scope.
154. `      "@type": "Person",` - Operational source line participating in page/server behavior.
155. `      "name": "Yashvi Mehta",` - Operational source line participating in page/server behavior.
156. `      "jobTitle": "Deputy Head of Marketing"` - Operational source line participating in page/server behavior.
157. `    },` - Closes a block (function, condition, loop, object, or element section).
158. `    {` - Opens a block scope.
159. `      "@type": "Person",` - Operational source line participating in page/server behavior.
160. `      "name": "Anshrah Ahmed",` - Operational source line participating in page/server behavior.
161. `      "jobTitle": "Head of Public Relations"` - Operational source line participating in page/server behavior.
162. `    },` - Closes a block (function, condition, loop, object, or element section).
163. `    {` - Opens a block scope.
164. `      "@type": "Person",` - Operational source line participating in page/server behavior.
165. `      "name": "Anvi Khattar",` - Operational source line participating in page/server behavior.
166. `      "jobTitle": "Deputy Head of Public Relations"` - Operational source line participating in page/server behavior.
167. `    },` - Closes a block (function, condition, loop, object, or element section).
168. `    {` - Opens a block scope.
169. `      "@type": "Person",` - Operational source line participating in page/server behavior.
170. `      "name": "Shaurya Raisoni",` - Operational source line participating in page/server behavior.
171. `      "jobTitle": "Head of Finance"` - Operational source line participating in page/server behavior.
172. `    },` - Closes a block (function, condition, loop, object, or element section).
173. `    {` - Opens a block scope.
174. `      "@type": "Person",` - Operational source line participating in page/server behavior.
175. `      "name": "Vivaan Chakrabarti",` - Operational source line participating in page/server behavior.
176. `      "jobTitle": "Deputy Head of Finance"` - Operational source line participating in page/server behavior.
177. `    },` - Closes a block (function, condition, loop, object, or element section).
178. `    {` - Opens a block scope.
179. `      "@type": "Person",` - Operational source line participating in page/server behavior.
180. `      "name": "Hridhuun Savant",` - Operational source line participating in page/server behavior.
181. `      "jobTitle": "Head of Technical Operations"` - Operational source line participating in page/server behavior.
182. `    },` - Closes a block (function, condition, loop, object, or element section).
183. `    {` - Opens a block scope.
184. `      "@type": "Person",` - Operational source line participating in page/server behavior.
185. `      "name": "Arhaan Barucha",` - Operational source line participating in page/server behavior.
186. `      "jobTitle": "Deputy Head of Technical Operations"` - Operational source line participating in page/server behavior.
187. `    },` - Closes a block (function, condition, loop, object, or element section).
188. `    {` - Opens a block scope.
189. `      "@type": "Person",` - Operational source line participating in page/server behavior.
190. `      "name": "Druvan Kapoor",` - Operational source line participating in page/server behavior.
191. `      "jobTitle": "Head of Hospitality"` - Operational source line participating in page/server behavior.
192. `    },` - Closes a block (function, condition, loop, object, or element section).
193. `    {` - Opens a block scope.
194. `      "@type": "Person",` - Operational source line participating in page/server behavior.
195. `      "name": "Nandini Gurav",` - Operational source line participating in page/server behavior.
196. `      "jobTitle": "Deputy Head of Hospitality"` - Operational source line participating in page/server behavior.
197. `    },` - Closes a block (function, condition, loop, object, or element section).
198. `    {` - Opens a block scope.
199. `      "@type": "Person",` - Operational source line participating in page/server behavior.
200. `      "name": "Arjun Bapat",` - Operational source line participating in page/server behavior.
201. `      "jobTitle": "Head of Security"` - Operational source line participating in page/server behavior.
202. `    },` - Closes a block (function, condition, loop, object, or element section).
203. `    {` - Opens a block scope.
204. `      "@type": "Person",` - Operational source line participating in page/server behavior.
205. `      "name": "Aaditya Gupta",` - Operational source line participating in page/server behavior.
206. `      "jobTitle": "Deputy Head of Security"` - Operational source line participating in page/server behavior.
207. `    },` - Closes a block (function, condition, loop, object, or element section).
208. `    {` - Opens a block scope.
209. `      "@type": "Person",` - Operational source line participating in page/server behavior.
210. `      "name": "Aditi Manchandani",` - Operational source line participating in page/server behavior.
211. `      "jobTitle": "Head of Awards"` - Operational source line participating in page/server behavior.
212. `    },` - Closes a block (function, condition, loop, object, or element section).
213. `    {` - Opens a block scope.
214. `      "@type": "Person",` - Operational source line participating in page/server behavior.
215. `      "name": "Suyash Agarwal",` - Operational source line participating in page/server behavior.
216. `      "jobTitle": "Head of Photography"` - Operational source line participating in page/server behavior.
217. `    },` - Closes a block (function, condition, loop, object, or element section).
218. `    {` - Opens a block scope.
219. `      "@type": "Person",` - Operational source line participating in page/server behavior.
220. `      "name": "Naman Kalra",` - Operational source line participating in page/server behavior.
221. `      "jobTitle": "Deputy Head of Photography"` - Operational source line participating in page/server behavior.
222. `    }` - Closes a block (function, condition, loop, object, or element section).
223. `  ]` - Operational source line participating in page/server behavior.
224. `}` - Closes a block (function, condition, loop, object, or element section).
225. `</script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
226. `` - Blank line for readability / logical separation.
227. `    <title>Organising Committee - Perseverantia</title>` - HTML markup line contributing structure, metadata, scripts, or content containers.
228. `` - Blank line for readability / logical separation.
229. `    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
230. `` - Blank line for readability / logical separation.
231. `    <style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
232. `        @font-face {` - Operational source line participating in page/server behavior.
233. `            font-family: Mestizo;` - Operational source line participating in page/server behavior.
234. `            src: url(/assets/MestizoFont.ttf);` - Operational source line participating in page/server behavior.
235. `        }` - Closes a block (function, condition, loop, object, or element section).
236. `` - Blank line for readability / logical separation.
237. `        #loading-screen.fade-out {` - Operational source line participating in page/server behavior.
238. `            opacity: 0;` - Operational source line participating in page/server behavior.
239. `            pointer-events: none;` - Operational source line participating in page/server behavior.
240. `        }` - Closes a block (function, condition, loop, object, or element section).
241. `` - Blank line for readability / logical separation.
242. `        /* Enhanced Background and Animations */` - Block comment boundary or content.
243. `        body {` - Operational source line participating in page/server behavior.
244. `            background: linear-gradient(135deg, #0a0f2c 0%, #1a2949 50%, #0d122c 100%);` - Operational source line participating in page/server behavior.
245. `            min-height: 100vh;` - Operational source line participating in page/server behavior.
246. `            position: relative;` - Operational source line participating in page/server behavior.
247. `            overflow-x: hidden;` - Operational source line participating in page/server behavior.
248. `            /* Disable WebKit color scheme override */` - Block comment boundary or content.
249. `            -webkit-color-scheme: dark;` - Operational source line participating in page/server behavior.
250. `            color-scheme: dark;` - Operational source line participating in page/server behavior.
251. `        }` - Closes a block (function, condition, loop, object, or element section).
252. `        ` - Blank line for readability / logical separation.
253. `        /* Force dark background for iOS Safari */` - Block comment boundary or content.
254. `        html {` - Operational source line participating in page/server behavior.
255. `            background: #0a0f2c !important;` - Operational source line participating in page/server behavior.
256. `            -webkit-color-scheme: dark;` - Operational source line participating in page/server behavior.
257. `            color-scheme: dark;` - Operational source line participating in page/server behavior.
258. `        }` - Closes a block (function, condition, loop, object, or element section).
259. `        ` - Blank line for readability / logical separation.
260. `        /* Prevent iOS from changing colors */` - Block comment boundary or content.
261. `        * {` - Operational source line participating in page/server behavior.
262. `            -webkit-color-scheme: dark;` - Operational source line participating in page/server behavior.
263. `            color-scheme: dark;` - Operational source line participating in page/server behavior.
264. `        }` - Closes a block (function, condition, loop, object, or element section).
265. `` - Blank line for readability / logical separation.
266. `        /* Floating Background Elements */` - Block comment boundary or content.
267. `        .bg-decoration {` - Operational source line participating in page/server behavior.
268. `            position: fixed;` - Operational source line participating in page/server behavior.
269. `            pointer-events: none;` - Operational source line participating in page/server behavior.
270. `            z-index: -1;` - Operational source line participating in page/server behavior.
271. `        }` - Closes a block (function, condition, loop, object, or element section).
272. `` - Blank line for readability / logical separation.
273. `        .bg-decoration::before,` - Operational source line participating in page/server behavior.
274. `        .bg-decoration::after {` - Operational source line participating in page/server behavior.
275. `            content: '';` - Operational source line participating in page/server behavior.
276. `            position: absolute;` - Operational source line participating in page/server behavior.
277. `            border-radius: 50%;` - Operational source line participating in page/server behavior.
278. `            background: rgba(190, 142, 48, 0.1);` - Operational source line participating in page/server behavior.
279. `            animation: float 6s ease-in-out infinite;` - Operational source line participating in page/server behavior.
280. `        }` - Closes a block (function, condition, loop, object, or element section).
281. `` - Blank line for readability / logical separation.
282. `        .bg-decoration::before {` - Operational source line participating in page/server behavior.
283. `            width: 200px;` - Operational source line participating in page/server behavior.
284. `            height: 200px;` - Operational source line participating in page/server behavior.
285. `            top: 10%;` - Operational source line participating in page/server behavior.
286. `            left: 80%;` - Operational source line participating in page/server behavior.
287. `            animation-delay: 0s;` - Operational source line participating in page/server behavior.
288. `        }` - Closes a block (function, condition, loop, object, or element section).
289. `` - Blank line for readability / logical separation.
290. `        .bg-decoration::after {` - Operational source line participating in page/server behavior.
291. `            width: 150px;` - Operational source line participating in page/server behavior.
292. `            height: 150px;` - Operational source line participating in page/server behavior.
293. `            bottom: 20%;` - Operational source line participating in page/server behavior.
294. `            left: 10%;` - Operational source line participating in page/server behavior.
295. `            animation-delay: 3s;` - Operational source line participating in page/server behavior.
296. `        }` - Closes a block (function, condition, loop, object, or element section).
297. `` - Blank line for readability / logical separation.
298. `        @keyframes float {` - Operational source line participating in page/server behavior.
299. `            0%, 100% { transform: translateY(0px) rotate(0deg); }` - Operational source line participating in page/server behavior.
300. `            50% { transform: translateY(-20px) rotate(180deg); }` - Operational source line participating in page/server behavior.
301. `        }` - Closes a block (function, condition, loop, object, or element section).
302. `` - Blank line for readability / logical separation.
303. `        /* Enhanced Card Animations */` - Block comment boundary or content.
304. `        .member-card {` - Operational source line participating in page/server behavior.
305. `            background: linear-gradient(145deg, #081032 0%, #0c1542 100%);` - Operational source line participating in page/server behavior.
306. `            border: 2px solid rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
307. `            border-radius: 20px;` - Operational source line participating in page/server behavior.
308. `            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);` - Operational source line participating in page/server behavior.
309. `            position: relative;` - Operational source line participating in page/server behavior.
310. `            overflow: hidden;` - Operational source line participating in page/server behavior.
311. `            backdrop-filter: blur(10px);` - Operational source line participating in page/server behavior.
312. `        }` - Closes a block (function, condition, loop, object, or element section).
313. `` - Blank line for readability / logical separation.
314. `        .member-card::before {` - Operational source line participating in page/server behavior.
315. `            content: '';` - Operational source line participating in page/server behavior.
316. `            position: absolute;` - Operational source line participating in page/server behavior.
317. `            top: 0;` - Operational source line participating in page/server behavior.
318. `            left: -100%;` - Operational source line participating in page/server behavior.
319. `            width: 100%;` - Operational source line participating in page/server behavior.
320. `            height: 100%;` - Operational source line participating in page/server behavior.
321. `            background: linear-gradient(90deg, transparent, rgba(190, 142, 48, 0.2), transparent);` - Operational source line participating in page/server behavior.
322. `            transition: left 0.5s;` - Operational source line participating in page/server behavior.
323. `        }` - Closes a block (function, condition, loop, object, or element section).
324. `` - Blank line for readability / logical separation.
325. `        .member-card:hover::before {` - Operational source line participating in page/server behavior.
326. `            left: 100%;` - Operational source line participating in page/server behavior.
327. `        }` - Closes a block (function, condition, loop, object, or element section).
328. `` - Blank line for readability / logical separation.
329. `        .member-card:hover {` - Operational source line participating in page/server behavior.
330. `            transform: translateY(-10px) scale(1.05);` - Operational source line participating in page/server behavior.
331. `            border-color: #BE8E30;` - Operational source line participating in page/server behavior.
332. `            box-shadow: ` - Operational source line participating in page/server behavior.
333. `                0 20px 40px rgba(190, 142, 48, 0.3),` - Operational source line participating in page/server behavior.
334. `                0 0 30px rgba(190, 142, 48, 0.2);` - Operational source line participating in page/server behavior.
335. `        }` - Closes a block (function, condition, loop, object, or element section).
336. `` - Blank line for readability / logical separation.
337. `        .member-card img {` - Operational source line participating in page/server behavior.
338. `            transition: all 0.4s ease;` - Operational source line participating in page/server behavior.
339. `            filter: grayscale(20%);` - Operational source line participating in page/server behavior.
340. `        }` - Closes a block (function, condition, loop, object, or element section).
341. `` - Blank line for readability / logical separation.
342. `        .member-card:hover img {` - Operational source line participating in page/server behavior.
343. `            filter: grayscale(0%) brightness(110%);` - Operational source line participating in page/server behavior.
344. `            transform: scale(1.1);` - Operational source line participating in page/server behavior.
345. `        }` - Closes a block (function, condition, loop, object, or element section).
346. `` - Blank line for readability / logical separation.
347. `        /* Enhanced Typography */` - Block comment boundary or content.
348. `        .section-title {` - Operational source line participating in page/server behavior.
349. `            background: linear-gradient(45deg, #BE8E30, #FFD700, #BE8E30);` - Operational source line participating in page/server behavior.
350. `            background-size: 200% 200%;` - Operational source line participating in page/server behavior.
351. `            -webkit-background-clip: text;` - Operational source line participating in page/server behavior.
352. `            -webkit-text-fill-color: transparent;` - Operational source line participating in page/server behavior.
353. `            background-clip: text;` - Operational source line participating in page/server behavior.
354. `            animation: gradientShift 3s ease-in-out infinite;` - Operational source line participating in page/server behavior.
355. `            text-shadow: 0 0 30px rgba(190, 142, 48, 0.5);` - Operational source line participating in page/server behavior.
356. `        }` - Closes a block (function, condition, loop, object, or element section).
357. `` - Blank line for readability / logical separation.
358. `        @keyframes gradientShift {` - Operational source line participating in page/server behavior.
359. `            0%, 100% { background-position: 0% 50%; }` - Operational source line participating in page/server behavior.
360. `            50% { background-position: 100% 50%; }` - Operational source line participating in page/server behavior.
361. `        }` - Closes a block (function, condition, loop, object, or element section).
362. `` - Blank line for readability / logical separation.
363. `        .member-name {` - Operational source line participating in page/server behavior.
364. `            font-weight: 600;` - Operational source line participating in page/server behavior.
365. `            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);` - Operational source line participating in page/server behavior.
366. `            transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
367. `        }` - Closes a block (function, condition, loop, object, or element section).
368. `` - Blank line for readability / logical separation.
369. `        .member-card:hover .member-name {` - Operational source line participating in page/server behavior.
370. `            text-shadow: 0 0 20px rgba(190, 142, 48, 0.8);` - Operational source line participating in page/server behavior.
371. `        }` - Closes a block (function, condition, loop, object, or element section).
372. `` - Blank line for readability / logical separation.
373. `        /* Enhanced Presidents Section */` - Block comment boundary or content.
374. `        .presidents-container {` - Operational source line participating in page/server behavior.
375. `            position: relative;` - Operational source line participating in page/server behavior.
376. `            padding: 2rem;` - Operational source line participating in page/server behavior.
377. `            border-radius: 30px;` - Operational source line participating in page/server behavior.
378. `            background: rgba(255, 255, 255, 0.05);` - Operational source line participating in page/server behavior.
379. `            backdrop-filter: blur(15px);` - Operational source line participating in page/server behavior.
380. `            border: 2px solid rgba(190, 142, 48, 0.2);` - Operational source line participating in page/server behavior.
381. `            margin-bottom: 3rem;` - Operational source line participating in page/server behavior.
382. `        }` - Closes a block (function, condition, loop, object, or element section).
383. `` - Blank line for readability / logical separation.
384. `        .presidents-container::before {` - Operational source line participating in page/server behavior.
385. `            content: '';` - Operational source line participating in page/server behavior.
386. `            position: absolute;` - Operational source line participating in page/server behavior.
387. `            top: -10px;` - Operational source line participating in page/server behavior.
388. `            left: 50%;` - Operational source line participating in page/server behavior.
389. `            transform: translateX(-50%);` - Operational source line participating in page/server behavior.
390. `            width: 20px;` - Operational source line participating in page/server behavior.
391. `            height: 20px;` - Operational source line participating in page/server behavior.
392. `            background: linear-gradient(45deg, #BE8E30, #FFD700);` - Operational source line participating in page/server behavior.
393. `            border-radius: 50%;` - Operational source line participating in page/server behavior.
394. `            border: 2px solid #081032;` - Operational source line participating in page/server behavior.
395. `        }` - Closes a block (function, condition, loop, object, or element section).
396. `` - Blank line for readability / logical separation.
397. `        /* Grid Enhancement */` - Block comment boundary or content.
398. `        .department-grid {` - Operational source line participating in page/server behavior.
399. `            position: relative;` - Operational source line participating in page/server behavior.
400. `        }` - Closes a block (function, condition, loop, object, or element section).
401. `` - Blank line for readability / logical separation.
402. `        .department-section {` - Operational source line participating in page/server behavior.
403. `            position: relative;` - Operational source line participating in page/server behavior.
404. `            padding: 1.5rem;` - Operational source line participating in page/server behavior.
405. `            border-radius: 20px;` - Operational source line participating in page/server behavior.
406. `            background: rgba(255, 255, 255, 0.02);` - Operational source line participating in page/server behavior.
407. `            border: 1px solid rgba(190, 142, 48, 0.1);` - Operational source line participating in page/server behavior.
408. `            transition: all 0.3s ease;` - Operational source line participating in page/server behavior.
409. `        }` - Closes a block (function, condition, loop, object, or element section).
410. `` - Blank line for readability / logical separation.
411. `        .department-section:hover {` - Operational source line participating in page/server behavior.
412. `            background: rgba(255, 255, 255, 0.05);` - Operational source line participating in page/server behavior.
413. `            border-color: rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
414. `        }` - Closes a block (function, condition, loop, object, or element section).
415. `` - Blank line for readability / logical separation.
416. `        /* Loading Animation Enhancement */` - Block comment boundary or content.
417. `        #loading-screen {` - Operational source line participating in page/server behavior.
418. `            background: radial-gradient(circle at center, #1a2949 0%, #0a0f2c 100%);` - Operational source line participating in page/server behavior.
419. `        }` - Closes a block (function, condition, loop, object, or element section).
420. `` - Blank line for readability / logical separation.
421. `        #loading-video {` - Operational source line participating in page/server behavior.
422. `            animation: pulse 2s ease-in-out infinite;` - Operational source line participating in page/server behavior.
423. `        }` - Closes a block (function, condition, loop, object, or element section).
424. `` - Blank line for readability / logical separation.
425. `        @keyframes pulse {` - Operational source line participating in page/server behavior.
426. `            0%, 100% { transform: scale(1); }` - Operational source line participating in page/server behavior.
427. `            50% { transform: scale(1.1); }` - Operational source line participating in page/server behavior.
428. `        }` - Closes a block (function, condition, loop, object, or element section).
429. `` - Blank line for readability / logical separation.
430. `        /* Responsive Enhancements */` - Block comment boundary or content.
431. `        @media (max-width: 768px) {` - Operational source line participating in page/server behavior.
432. `            .member-card {` - Operational source line participating in page/server behavior.
433. `                margin-bottom: 1rem;` - Operational source line participating in page/server behavior.
434. `            }` - Closes a block (function, condition, loop, object, or element section).
435. `            ` - Blank line for readability / logical separation.
436. `            .section-title {` - Operational source line participating in page/server behavior.
437. `                font-size: 2rem !important;` - Operational source line participating in page/server behavior.
438. `            }` - Closes a block (function, condition, loop, object, or element section).
439. `` - Blank line for readability / logical separation.
440. `            .presidents-container {` - Operational source line participating in page/server behavior.
441. `                padding: 1rem;` - Operational source line participating in page/server behavior.
442. `            }` - Closes a block (function, condition, loop, object, or element section).
443. `        }` - Closes a block (function, condition, loop, object, or element section).
444. `` - Blank line for readability / logical separation.
445. `        /* Scrollbar Styling */` - Block comment boundary or content.
446. `        ::-webkit-scrollbar {` - Operational source line participating in page/server behavior.
447. `            width: 12px;` - Operational source line participating in page/server behavior.
448. `        }` - Closes a block (function, condition, loop, object, or element section).
449. `` - Blank line for readability / logical separation.
450. `        ::-webkit-scrollbar-track {` - Operational source line participating in page/server behavior.
451. `            background: #081032;` - Operational source line participating in page/server behavior.
452. `        }` - Closes a block (function, condition, loop, object, or element section).
453. `` - Blank line for readability / logical separation.
454. `        ::-webkit-scrollbar-thumb {` - Operational source line participating in page/server behavior.
455. `            background: linear-gradient(45deg, #BE8E30, #FFD700);` - Operational source line participating in page/server behavior.
456. `            border-radius: 6px;` - Operational source line participating in page/server behavior.
457. `        }` - Closes a block (function, condition, loop, object, or element section).
458. `` - Blank line for readability / logical separation.
459. `        ::-webkit-scrollbar-thumb:hover {` - Operational source line participating in page/server behavior.
460. `            background: linear-gradient(45deg, #FFD700, #BE8E30);` - Operational source line participating in page/server behavior.
461. `        }` - Closes a block (function, condition, loop, object, or element section).
462. `` - Blank line for readability / logical separation.
463. `        /* Entrance Animations */` - Block comment boundary or content.
464. `        .fade-in-up {` - Operational source line participating in page/server behavior.
465. `            opacity: 0;` - Operational source line participating in page/server behavior.
466. `            transform: translateY(30px);` - Operational source line participating in page/server behavior.
467. `            animation: fadeInUp 0.8s ease forwards;` - Operational source line participating in page/server behavior.
468. `        }` - Closes a block (function, condition, loop, object, or element section).
469. `` - Blank line for readability / logical separation.
470. `        @keyframes fadeInUp {` - Operational source line participating in page/server behavior.
471. `            to {` - Operational source line participating in page/server behavior.
472. `                opacity: 1;` - Operational source line participating in page/server behavior.
473. `                transform: translateY(0);` - Operational source line participating in page/server behavior.
474. `            }` - Closes a block (function, condition, loop, object, or element section).
475. `        }` - Closes a block (function, condition, loop, object, or element section).
476. `` - Blank line for readability / logical separation.
477. `        /* Stagger animation delays */` - Block comment boundary or content.
478. `        .member-card:nth-child(1) { animation-delay: 0.1s; }` - Operational source line participating in page/server behavior.
479. `        .member-card:nth-child(2) { animation-delay: 0.2s; }` - Operational source line participating in page/server behavior.
480. `        .member-card:nth-child(3) { animation-delay: 0.3s; }` - Operational source line participating in page/server behavior.
481. `        .member-card:nth-child(4) { animation-delay: 0.4s; }` - Operational source line participating in page/server behavior.
482. `    </style>` - HTML markup line contributing structure, metadata, scripts, or content containers.
483. `</head>` - HTML markup line contributing structure, metadata, scripts, or content containers.
484. `` - Blank line for readability / logical separation.
485. `<body class="bg-gray-100 text-gray-800">` - HTML markup line contributing structure, metadata, scripts, or content containers.
486. `    <!-- Loading Screen -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
487. `    <div id="loading-screen"` - HTML markup line contributing structure, metadata, scripts, or content containers.
488. `        style="position: fixed; inset: 0; background: linear-gradient(135deg, #0a0f2c, #1a2949); z-index: 9999; display: flex; align-items: center; justify-content: center; transition: opacity 0.6s ease;">` - Operational source line participating in page/server behavior.
489. `        <video id="loading-video" autoplay muted loop playsinline` - HTML markup line contributing structure, metadata, scripts, or content containers.
490. `            style="width: 150px; height: 150px; object-fit: contain; filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7)); border-radius: 12px;">` - Operational source line participating in page/server behavior.
491. `            <source src="/assets/load.mp4" type="video/mp4" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
492. `            Your browser does not support the video tag.` - Operational source line participating in page/server behavior.
493. `        </video>` - HTML markup line contributing structure, metadata, scripts, or content containers.
494. `    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
495. `` - Blank line for readability / logical separation.
496. `    <!-- Navbar -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
497. `    <nav class="text-white" style="background: #081032">` - HTML markup line contributing structure, metadata, scripts, or content containers.
498. `        <div class="container mx-auto px-4 py-4 flex justify-between items-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
499. `            <div class="flex items-center space-x-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
500. `                <img src="/assets/persev.png" alt="Logo" class="h-10 w-10 md:hidden" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
501. `                <span class="text-2xl" style="font-family: Mestizo" id="nav-title">` - HTML markup line contributing structure, metadata, scripts, or content containers.
502. `                    Perseverantia` - Operational source line participating in page/server behavior.
503. `                </span>` - HTML markup line contributing structure, metadata, scripts, or content containers.
504. `            </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
505. `            <div class="hidden md:flex space-x-6 text-lg" id="desktop-nav">` - HTML markup line contributing structure, metadata, scripts, or content containers.
506. `                <a href="/" class="hover:text-blue-200">Home</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
507. `                <a href="/events.html" class="hover:text-blue-200">Events</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
508. `                <a href="/organizing-committee.html" class="hover:text-blue-200">Organizing Committee</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
509. `            </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
510. `            <div class="md:hidden">` - HTML markup line contributing structure, metadata, scripts, or content containers.
511. `                <button id="menu-toggle" class="focus:outline-none" aria-label="menu">` - HTML markup line contributing structure, metadata, scripts, or content containers.
512. `                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"` - HTML markup line contributing structure, metadata, scripts, or content containers.
513. `                        stroke-linecap="round" stroke-linejoin="round">` - Operational source line participating in page/server behavior.
514. `                        <path d="M4 6h16M4 12h16M4 18h16" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
515. `                    </svg>` - HTML markup line contributing structure, metadata, scripts, or content containers.
516. `                </button>` - HTML markup line contributing structure, metadata, scripts, or content containers.
517. `            </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
518. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
519. `        <div id="mobile-menu" class="md:hidden hidden opacity-0 scale-y-90 -translate-y-4 transform transition-all duration-500 ease-out origin-top px-4 pb-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
520. `            <a href="/" class="block py-2 text-lg hover:text-blue-200">Home</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
521. `            <a href="/events.html" class="block py-2 text-lg hover:text-blue-200">Events</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
522. `            <a href="/organizing-committee.html" class="block py-2 text-lg hover:text-blue-200">Organizing Committee</a>` - HTML markup line contributing structure, metadata, scripts, or content containers.
523. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
524. `    </nav>` - HTML markup line contributing structure, metadata, scripts, or content containers.
525. `` - Blank line for readability / logical separation.
526. `    <!-- Organising Committee Section -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
527. `    <section class="py-12 text-white relative">` - HTML markup line contributing structure, metadata, scripts, or content containers.
528. `        <!-- Background Decorations -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
529. `        <div class="bg-decoration"></div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
530. `        ` - Blank line for readability / logical separation.
531. `        <div class="container mx-auto px-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
532. `            <h2 class="text-5xl mb-12 text-center section-title fade-in-up" style="font-family: Mestizo">` - HTML markup line contributing structure, metadata, scripts, or content containers.
533. `                Meet Our Organizing Committee` - Operational source line participating in page/server behavior.
534. `            </h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
535. `` - Blank line for readability / logical separation.
536. `            <!-- Presidents (enhanced with special container) -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
537. `            <div class="presidents-container fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
538. `                <div class="text-4xl text-center mb-8 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
539. `                    Presidents` - Operational source line participating in page/server behavior.
540. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
541. `                <div class="flex flex-wrap justify-center gap-8">` - HTML markup line contributing structure, metadata, scripts, or content containers.
542. `                    <div class="member-card w-72 p-6 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
543. `                        <img src="/assets/oc2025/presidents/darshil.avif" alt="Darshil Kochar" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
544. `                             class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
545. `                        <div class="text-xl member-name text-center">Darshil Kochar</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
546. `                        <div class="text-sm text-[#BE8E30] text-center mt-1">President</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
547. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
548. `                    <div class="member-card w-72 p-6 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
549. `                        <img src="/assets/oc2025/presidents/neel.avif" alt="Neel More" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
550. `                             class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
551. `                        <div class="text-xl member-name text-center">Neel More</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
552. `                        <div class="text-sm text-[#BE8E30] text-center mt-1">President</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
553. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
554. `                    <div class="member-card w-72 p-6 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
555. `                        <img src="/assets/oc2025/presidents/nishil.avif" alt="Nishil Iyer" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
556. `                             class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
557. `                        <div class="text-xl member-name text-center">Nishil Iyer</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
558. `                        <div class="text-sm text-[#BE8E30] text-center mt-1">President</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
559. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
560. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
561. `            </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
562. `` - Blank line for readability / logical separation.
563. `` - Blank line for readability / logical separation.
564. `                            ` - Blank line for readability / logical separation.
565. `` - Blank line for readability / logical separation.
566. `` - Blank line for readability / logical separation.
567. `            <!-- Department Grid -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
568. `            <div class="department-grid grid grid-cols-1 md:grid-cols-2 gap-12">` - HTML markup line contributing structure, metadata, scripts, or content containers.
569. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
570. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
571. `                        Administration ` - Operational source line participating in page/server behavior.
572. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
573. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
574. `                        ` - Blank line for readability / logical separation.
575. `` - Blank line for readability / logical separation.
576. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
577. `                            <img src="/assets/oc2025/administration/adhunya.avif" alt="Adhunya" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
578. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
579. `                            <div class="text-lg member-name text-center">Adhunya Pan</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
580. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Administration</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
581. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
582. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
583. `                            <img src="/assets/oc2025/administration/krishay.avif" alt="Krishay" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
584. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
585. `                            <div class="text-lg member-name text-center">Krishay Shreeram</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
586. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Administration</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
587. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
588. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
589. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
590. `                ` - Blank line for readability / logical separation.
591. `                <!-- Research & Development Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
592. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
593. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
594. `                        Research & Documentation` - Operational source line participating in page/server behavior.
595. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
596. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
597. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
598. `                            <img src="/assets/oc2025/rnd/varun.avif" alt="Varun" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
599. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
600. `                            <div class="text-lg member-name text-center">Varun Sinha</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
601. `                            <div class="text-xs text-[#BE8E30] text-center">Head of R&D</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
602. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
603. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
604. `                            <img src="/assets/oc2025/rnd/aadya.avif" alt="Aadya" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
605. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
606. `                            <div class="text-lg member-name text-center">Aadya Raikar</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
607. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of R&D</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
608. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
609. `                        ` - Blank line for readability / logical separation.
610. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
611. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
612. `` - Blank line for readability / logical separation.
613. `                <!-- Design Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
614. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
615. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
616. `                        Design` - Operational source line participating in page/server behavior.
617. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
618. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
619. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
620. `                            <img src="/assets/oc2025/design/janyaa.avif" alt="Janyaa" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
621. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
622. `                            <div class="text-lg member-name text-center">Janyaa Patkar</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
623. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Design</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
624. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
625. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
626. `                            <img src="/assets/oc2025/design/naisha.avif" alt="Naisha" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
627. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
628. `                            <div class="text-lg member-name text-center">Naisha Doshi</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
629. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Design</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
630. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
631. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
632. `` - Blank line for readability / logical separation.
633. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
634. `` - Blank line for readability / logical separation.
635. `` - Blank line for readability / logical separation.
636. `                                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
637. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
638. `                        Social Media` - Operational source line participating in page/server behavior.
639. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
640. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
641. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
642. `                            <img src="/assets/oc2025/social-media/sharanya.avif" alt="Sharanya" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
643. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
644. `                            <div class="text-lg member-name text-center">Sharanya Madan</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
645. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Social Media</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
646. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
647. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
648. `                            <img src="/assets/oc2025/social-media/tanisha.avif" alt="Tanisha" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
649. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
650. `                            <div class="text-lg member-name text-center">Tanisha Dutta</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
651. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Social Media</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
652. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
653. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
654. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
655. `` - Blank line for readability / logical separation.
656. `                <!-- Marketing Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
657. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
658. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
659. `                        Marketing` - Operational source line participating in page/server behavior.
660. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
661. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
662. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
663. `                            <img src="/assets/oc2025/marketing/aastha.avif" alt="Aastha" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
664. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
665. `                            <div class="text-lg member-name text-center">Aastha Shahane</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
666. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Marketing</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
667. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
668. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
669. `                            <img src="/assets/oc2025/marketing/yashvi.avif" alt="Yashvi" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
670. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
671. `                            <div class="text-lg member-name text-center">Yashvi Mehta</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
672. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Marketing</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
673. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
674. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
675. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
676. `` - Blank line for readability / logical separation.
677. `                <!-- Marketing Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
678. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
679. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
680. `                        Public Relations` - Operational source line participating in page/server behavior.
681. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
682. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
683. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
684. `                            <img src="/assets/oc2025/public-relations/anshrah.avif" alt="Anshrah" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
685. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
686. `                            <div class="text-lg member-name text-center">Anshrah Ahmed</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
687. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Public Relations</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
688. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
689. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
690. `                            <img src="/assets/oc2025/public-relations/anvi.avif" alt="Anvi" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
691. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
692. `                            <div class="text-lg member-name text-center">Anvi Khattar</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
693. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Public Relations</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
694. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
695. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
696. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
697. `` - Blank line for readability / logical separation.
698. `                <!-- Finance Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
699. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
700. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
701. `                        Finance` - Operational source line participating in page/server behavior.
702. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
703. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
704. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
705. `                            <img src="/assets/oc2025/finance/shaurya.avif" alt="Shaurya Raisoni" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
706. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
707. `                            <div class="text-lg member-name text-center">Shaurya Raisoni</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
708. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Finance</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
709. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
710. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
711. `                            <img src="/assets/oc2025/finance/vivaan.avif" alt="Vivaan Chakrabarti" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
712. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
713. `                            <div class="text-lg member-name text-center">Vivaan Chakrabarti</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
714. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Finance</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
715. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
716. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
717. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
718. `<!-- Technical Operations Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
719. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
720. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
721. `                        Technical Operations` - Operational source line participating in page/server behavior.
722. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
723. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
724. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
725. `                            <img src="/assets/oc2025/technical-operations/Hridhuun.avif" alt="Hridhuun Savant" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
726. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
727. `                            <div class="text-lg member-name text-center">Hridhuun Savant</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
728. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Technical Operations</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
729. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
730. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
731. `                            <img src="/assets/oc2025/technical-operations/Arhaan.avif" alt="Arhaan Barucha" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
732. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
733. `                            <div class="text-lg member-name text-center">Arhaan Barucha</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
734. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Technical Operations</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
735. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
736. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
737. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
738. `` - Blank line for readability / logical separation.
739. `                <!-- Hospitality Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
740. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
741. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
742. `                        Hospitality ` - Operational source line participating in page/server behavior.
743. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
744. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
745. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
746. `                            <img src="/assets/oc2025/hospitality/druvan.avif" alt="Druvan Kapoor" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
747. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
748. `                            <div class="text-lg member-name text-center">Druvan Kapoor</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
749. `                            <div class="text-xs text-[#BE8E30] text-center"> Head of Hospitality </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
750. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
751. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
752. `                            <img src="/assets/oc2025/hospitality/nandini.avif" alt="Nandini Gurav" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
753. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
754. `                            <div class="text-lg member-name text-center">Nandini Gurav</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
755. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Hospitality</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
756. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
757. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
758. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
759. `` - Blank line for readability / logical separation.
760. `                <!-- Security Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
761. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
762. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
763. `                        Security ` - Operational source line participating in page/server behavior.
764. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
765. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
766. `                        ` - Blank line for readability / logical separation.
767. `` - Blank line for readability / logical separation.
768. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
769. `                            <img src="/assets/oc2025/security/arjun.avif" alt="Arjun" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
770. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
771. `                            <div class="text-lg member-name text-center">Arjun Bapat</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
772. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Security</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
773. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
774. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
775. `                            <img src="/assets/oc2025/security/aadita.avif" alt="Aaditya" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
776. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
777. `                            <div class="text-lg member-name text-center">Aaditya Gupta</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
778. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Security</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
779. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
780. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
781. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
782. `` - Blank line for readability / logical separation.
783. `                <!-- Security Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
784. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
785. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
786. `                        Awards ` - Operational source line participating in page/server behavior.
787. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
788. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
789. `                        ` - Blank line for readability / logical separation.
790. `` - Blank line for readability / logical separation.
791. `                            <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
792. `                                <img src="/assets/oc2025/awards/aditi.avif" alt="Aditi" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
793. `                                    class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
794. `                                <div class="text-lg member-name text-center">Aditi Manchandani</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
795. `                                <div class="text-xs text-[#BE8E30] text-center">Head of Awards</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
796. `                            </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
797. `                        ` - Blank line for readability / logical separation.
798. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
799. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
800. `` - Blank line for readability / logical separation.
801. `` - Blank line for readability / logical separation.
802. `                <!-- Photography Department -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
803. `                <div class="department-section fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
804. `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
805. `                        Photography` - Operational source line participating in page/server behavior.
806. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
807. `                    <div class="flex flex-wrap justify-center gap-6">` - HTML markup line contributing structure, metadata, scripts, or content containers.
808. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
809. `                            <img src="/assets/oc2025/photography/suyash.avif" alt="Suyash" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
810. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
811. `                            <div class="text-lg member-name text-center">Suyash Agarwal</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
812. `                            <div class="text-xs text-[#BE8E30] text-center">Head of Photography</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
813. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
814. `                        <div class="member-card w-56 p-4 fade-in-up">` - HTML markup line contributing structure, metadata, scripts, or content containers.
815. `                            <img src="/assets/oc2025/photography/naman.avif" alt="Naman" ` - HTML markup line contributing structure, metadata, scripts, or content containers.
816. `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` - Operational source line participating in page/server behavior.
817. `                            <div class="text-lg member-name text-center">Naman Kalra</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
818. `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Photography</div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
819. `                        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
820. `                        ` - Blank line for readability / logical separation.
821. `                    </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
822. `                </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
823. `` - Blank line for readability / logical separation.
824. `                ` - Blank line for readability / logical separation.
825. `                ` - Blank line for readability / logical separation.
826. `            </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
827. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
828. `    </section>` - HTML markup line contributing structure, metadata, scripts, or content containers.
829. `` - Blank line for readability / logical separation.
830. `    <!-- Footer -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
831. `    <footer class="bg-gradient-to-r from-[#081032] to-[#0c1542] text-white py-8 border-t border-[#BE8E30]/30">` - HTML markup line contributing structure, metadata, scripts, or content containers.
832. `        <div class="container mx-auto text-center">` - HTML markup line contributing structure, metadata, scripts, or content containers.
833. `            <div class="mb-4">` - HTML markup line contributing structure, metadata, scripts, or content containers.
834. `                <img src="/assets/persevlogo.png" alt="Perseverantia Logo" class="w-12 h-12 mx-auto mb-2" style="filter: drop-shadow(0 0 10px rgba(190, 142, 48, 0.5));">` - HTML markup line contributing structure, metadata, scripts, or content containers.
835. `                <h3 class="text-xl" style="font-family: Mestizo; color: #BE8E30;">Perseverantia 2025</h3>` - HTML markup line contributing structure, metadata, scripts, or content containers.
836. `            </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
837. `            <p class="text-gray-300 mb-2">&copy; 2025 Bombay Scottish School, Mahim. All rights reserved.</p>` - HTML markup line contributing structure, metadata, scripts, or content containers.
838. `        </div>` - HTML markup line contributing structure, metadata, scripts, or content containers.
839. `    </footer>` - HTML markup line contributing structure, metadata, scripts, or content containers.
840. `` - Blank line for readability / logical separation.
841. `    <!-- Place this script before </body> -->` - HTML markup line contributing structure, metadata, scripts, or content containers.
842. `    <script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
843. `        // --- Enhanced Animations and Interactions ---` - Comment line describing intent or section.
844. `        ` - Blank line for readability / logical separation.
845. `        // Intersection Observer for fade-in animations` - Comment line describing intent or section.
846. `        const observerOptions = {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
847. `            threshold: 0.1,` - Operational source line participating in page/server behavior.
848. `            rootMargin: '0px 0px -50px 0px'` - Operational source line participating in page/server behavior.
849. `        };` - Closes a block (function, condition, loop, object, or element section).
850. `` - Blank line for readability / logical separation.
851. `        const observer = new IntersectionObserver((entries) => {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
852. `            entries.forEach(entry => {` - Arrow function expression used as callback or concise helper.
853. `                if (entry.isIntersecting) {` - Starts a conditional branch that decides behavior based on runtime state.
854. `                    entry.target.style.animationPlayState = 'running';` - Operational source line participating in page/server behavior.
855. `                }` - Closes a block (function, condition, loop, object, or element section).
856. `            });` - Closes a block (function, condition, loop, object, or element section).
857. `        }, observerOptions);` - Closes a block (function, condition, loop, object, or element section).
858. `` - Blank line for readability / logical separation.
859. `        document.querySelectorAll('.fade-in-up').forEach(el => {` - Arrow function expression used as callback or concise helper.
860. `            el.style.animationPlayState = 'paused';` - Operational source line participating in page/server behavior.
861. `            observer.observe(el);` - Operational source line participating in page/server behavior.
862. `        });` - Closes a block (function, condition, loop, object, or element section).
863. `` - Blank line for readability / logical separation.
864. `        // Add click sound effect and ripple animation to member cards` - Comment line describing intent or section.
865. `        document.querySelectorAll('.member-card').forEach(card => {` - Arrow function expression used as callback or concise helper.
866. `            card.addEventListener('click', function(e) {` - Attaches an event listener to react to user interaction or lifecycle events.
867. `                // Create ripple effect` - Comment line describing intent or section.
868. `                const ripple = document.createElement('div');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
869. `                const rect = this.getBoundingClientRect();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
870. `                const size = Math.max(rect.width, rect.height);` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
871. `                const x = e.clientX - rect.left - size / 2;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
872. `                const y = e.clientY - rect.top - size / 2;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
873. `                ` - Blank line for readability / logical separation.
874. `                ripple.style.cssText = `` - Operational source line participating in page/server behavior.
875. `                    position: absolute;` - Operational source line participating in page/server behavior.
876. `                    width: ${size}px;` - Operational source line participating in page/server behavior.
877. `                    height: ${size}px;` - Operational source line participating in page/server behavior.
878. `                    left: ${x}px;` - Operational source line participating in page/server behavior.
879. `                    top: ${y}px;` - Operational source line participating in page/server behavior.
880. `                    background: rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
881. `                    border-radius: 50%;` - Operational source line participating in page/server behavior.
882. `                    transform: scale(0);` - Operational source line participating in page/server behavior.
883. `                    animation: ripple 0.6s ease-out;` - Operational source line participating in page/server behavior.
884. `                    pointer-events: none;` - Operational source line participating in page/server behavior.
885. `                    z-index: 1;` - Operational source line participating in page/server behavior.
886. `                `;` - Operational source line participating in page/server behavior.
887. `                ` - Blank line for readability / logical separation.
888. `                this.appendChild(ripple);` - Operational source line participating in page/server behavior.
889. `                ` - Blank line for readability / logical separation.
890. `                // Remove ripple after animation` - Comment line describing intent or section.
891. `                setTimeout(() => {` - Arrow function expression used as callback or concise helper.
892. `                    ripple.remove();` - Operational source line participating in page/server behavior.
893. `                }, 600);` - Closes a block (function, condition, loop, object, or element section).
894. `            });` - Closes a block (function, condition, loop, object, or element section).
895. `        });` - Closes a block (function, condition, loop, object, or element section).
896. `` - Blank line for readability / logical separation.
897. `        // Add ripple animation keyframes` - Comment line describing intent or section.
898. `        const style = document.createElement('style');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
899. `        style.textContent = `` - Sets plain text content into a DOM node.
900. `            @keyframes ripple {` - Operational source line participating in page/server behavior.
901. `                to {` - Operational source line participating in page/server behavior.
902. `                    transform: scale(4);` - Operational source line participating in page/server behavior.
903. `                    opacity: 0;` - Operational source line participating in page/server behavior.
904. `                }` - Closes a block (function, condition, loop, object, or element section).
905. `            }` - Closes a block (function, condition, loop, object, or element section).
906. `        `;` - Operational source line participating in page/server behavior.
907. `        document.head.appendChild(style);` - Operational source line participating in page/server behavior.
908. `` - Blank line for readability / logical separation.
909. `        // Parallax effect for background decorations` - Comment line describing intent or section.
910. `        window.addEventListener('scroll', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
911. `            const scrolled = window.pageYOffset;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
912. `            const parallax = document.querySelector('.bg-decoration');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
913. `            if (parallax) {` - Starts a conditional branch that decides behavior based on runtime state.
914. `                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;` - Operational source line participating in page/server behavior.
915. `            }` - Closes a block (function, condition, loop, object, or element section).
916. `        });` - Closes a block (function, condition, loop, object, or element section).
917. `` - Blank line for readability / logical separation.
918. `        // --- Navbar Logic with better fallback ---` - Comment line describing intent or section.
919. `        async function setupNavbar() {` - Defines an async function that awaits I/O operations (usually fetch).
920. `            try {` - Operational source line participating in page/server behavior.
921. `                const res = await fetch('config.json');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
922. `                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);` - Starts a conditional branch that decides behavior based on runtime state.
923. `                const config = await res.json();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
924. `                const website = config.website \\|\\| {};` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
925. `                const navbar = website.navbar \\|\\| {};` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
926. `` - Blank line for readability / logical separation.
927. `                // Populate Navbar Links` - Comment line describing intent or section.
928. `                const desktopNav = document.getElementById("desktop-nav");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
929. `                const mobileMenu = document.getElementById("mobile-menu");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
930. `                ` - Blank line for readability / logical separation.
931. `                // Clear existing content` - Comment line describing intent or section.
932. `                desktopNav.innerHTML = '';` - Sets HTML markup into a container element.
933. `                mobileMenu.innerHTML = '';` - Sets HTML markup into a container element.
934. `                ` - Blank line for readability / logical separation.
935. `                // Add Home link` - Comment line describing intent or section.
936. `                const homeDesktop = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
937. `                homeDesktop.href = '/';` - Operational source line participating in page/server behavior.
938. `                homeDesktop.textContent = 'Home';` - Sets plain text content into a DOM node.
939. `                homeDesktop.className = 'hover:text-blue-200';` - Operational source line participating in page/server behavior.
940. `                desktopNav.appendChild(homeDesktop);` - Operational source line participating in page/server behavior.
941. `` - Blank line for readability / logical separation.
942. `                const homeMobile = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
943. `                homeMobile.href = '/';` - Operational source line participating in page/server behavior.
944. `                homeMobile.textContent = 'Home';` - Sets plain text content into a DOM node.
945. `                homeMobile.className = 'block py-2 text-lg hover:text-blue-200';` - Operational source line participating in page/server behavior.
946. `                mobileMenu.appendChild(homeMobile);` - Operational source line participating in page/server behavior.
947. `` - Blank line for readability / logical separation.
948. `                // Add config-based links` - Comment line describing intent or section.
949. `                (navbar.links \\|\\| []).forEach(link => {` - Arrow function expression used as callback or concise helper.
950. `                    // Desktop Nav` - Comment line describing intent or section.
951. `                    const desktopLink = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
952. `                    desktopLink.href = link.linkto;` - Operational source line participating in page/server behavior.
953. `                    desktopLink.textContent = link.name;` - Sets plain text content into a DOM node.
954. `                    desktopLink.className = 'hover:text-blue-200';` - Operational source line participating in page/server behavior.
955. `                    desktopNav.appendChild(desktopLink);` - Operational source line participating in page/server behavior.
956. `` - Blank line for readability / logical separation.
957. `                    // Mobile Nav` - Comment line describing intent or section.
958. `                    const mobileLink = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
959. `                    mobileLink.href = link.linkto;` - Operational source line participating in page/server behavior.
960. `                    mobileLink.textContent = link.name;` - Sets plain text content into a DOM node.
961. `                    mobileLink.className = 'block py-2 text-lg hover:text-blue-200';` - Operational source line participating in page/server behavior.
962. `                    mobileMenu.appendChild(mobileLink);` - Operational source line participating in page/server behavior.
963. `                });` - Closes a block (function, condition, loop, object, or element section).
964. `` - Blank line for readability / logical separation.
965. `                // Update navbar title` - Comment line describing intent or section.
966. `                document.getElementById("nav-title").textContent = navbar.title \\|\\| "Perseverantia";` - Reads a DOM element reference to manipulate content or behavior.
967. `            } catch (err) {` - Closes a block (function, condition, loop, object, or element section).
968. `                console.warn("Could not load config.json, using fallback navbar:", err);` - Operational source line participating in page/server behavior.
969. `                // Fallback: Add static navigation links` - Comment line describing intent or section.
970. `                const desktopNav = document.getElementById("desktop-nav");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
971. `                const mobileMenu = document.getElementById("mobile-menu");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
972. `                ` - Blank line for readability / logical separation.
973. `                // Clear existing content` - Comment line describing intent or section.
974. `                desktopNav.innerHTML = '';` - Sets HTML markup into a container element.
975. `                mobileMenu.innerHTML = '';` - Sets HTML markup into a container element.
976. `                ` - Blank line for readability / logical separation.
977. `                // Static fallback links` - Comment line describing intent or section.
978. `                const staticLinks = [` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
979. `                    { name: 'Home', href: '/' },` - Opens a block scope.
980. `                    { name: 'Events', href: '/events.html' },` - Opens a block scope.
981. `                    { name: 'Organizing Committee', href: '/organizing-committee.html' }` - Opens a block scope.
982. `                ];` - Operational source line participating in page/server behavior.
983. `                ` - Blank line for readability / logical separation.
984. `                staticLinks.forEach(link => {` - Arrow function expression used as callback or concise helper.
985. `                    // Desktop Nav` - Comment line describing intent or section.
986. `                    const desktopLink = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
987. `                    desktopLink.href = link.href;` - Operational source line participating in page/server behavior.
988. `                    desktopLink.textContent = link.name;` - Sets plain text content into a DOM node.
989. `                    desktopLink.className = 'hover:text-blue-200';` - Operational source line participating in page/server behavior.
990. `                    desktopNav.appendChild(desktopLink);` - Operational source line participating in page/server behavior.
991. `` - Blank line for readability / logical separation.
992. `                    // Mobile Nav` - Comment line describing intent or section.
993. `                    const mobileLink = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
994. `                    mobileLink.href = link.href;` - Operational source line participating in page/server behavior.
995. `                    mobileLink.textContent = link.name;` - Sets plain text content into a DOM node.
996. `                    mobileLink.className = 'block py-2 text-lg hover:text-blue-200';` - Operational source line participating in page/server behavior.
997. `                    mobileMenu.appendChild(mobileLink);` - Operational source line participating in page/server behavior.
998. `                });` - Closes a block (function, condition, loop, object, or element section).
999. `            }` - Closes a block (function, condition, loop, object, or element section).
1000. `        }` - Closes a block (function, condition, loop, object, or element section).
1001. `        document.addEventListener("DOMContentLoaded", setupNavbar);` - Attaches an event listener to react to user interaction or lifecycle events.
1002. `` - Blank line for readability / logical separation.
1003. `        // --- Mobile Menu Toggle Script ---` - Comment line describing intent or section.
1004. `        const toggleBtn = document.getElementById("menu-toggle");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1005. `        const mobileMenu = document.getElementById("mobile-menu");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1006. `        let menuOpen = false;` - Declares a mutable variable used for evolving UI/state values.
1007. `        toggleBtn.addEventListener("click", () => {` - Attaches an event listener to react to user interaction or lifecycle events.
1008. `            menuOpen = !menuOpen;` - Operational source line participating in page/server behavior.
1009. `            if (menuOpen) {` - Starts a conditional branch that decides behavior based on runtime state.
1010. `                mobileMenu.classList.remove("hidden");` - Adds/removes/toggles CSS classes to control visibility or animation state.
1011. `                void mobileMenu.offsetWidth;` - Operational source line participating in page/server behavior.
1012. `                mobileMenu.classList.remove("opacity-0", "scale-y-90", "-translate-y-4");` - Adds/removes/toggles CSS classes to control visibility or animation state.
1013. `                mobileMenu.classList.add("opacity-100", "scale-y-100", "translate-y-0");` - Adds/removes/toggles CSS classes to control visibility or animation state.
1014. `            } else {` - Closes a block (function, condition, loop, object, or element section).
1015. `                mobileMenu.classList.remove("opacity-100", "scale-y-100", "translate-y-0");` - Adds/removes/toggles CSS classes to control visibility or animation state.
1016. `                mobileMenu.classList.add("opacity-0", "scale-y-90", "-translate-y-4");` - Adds/removes/toggles CSS classes to control visibility or animation state.
1017. `                setTimeout(() => {` - Arrow function expression used as callback or concise helper.
1018. `                    if (!menuOpen) {` - Starts a conditional branch that decides behavior based on runtime state.
1019. `                        mobileMenu.classList.add("hidden");` - Adds/removes/toggles CSS classes to control visibility or animation state.
1020. `                    }` - Closes a block (function, condition, loop, object, or element section).
1021. `                }, 500);` - Closes a block (function, condition, loop, object, or element section).
1022. `            }` - Closes a block (function, condition, loop, object, or element section).
1023. `        });` - Closes a block (function, condition, loop, object, or element section).
1024. `` - Blank line for readability / logical separation.
1025. `        // --- Remove loading screen after 2 sec ---` - Comment line describing intent or section.
1026. `        window.addEventListener('load', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
1027. `            const loader = document.getElementById("loading-screen");` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1028. `            setTimeout(() => {` - Arrow function expression used as callback or concise helper.
1029. `                loader.classList.add("fade-out");` - Adds/removes/toggles CSS classes to control visibility or animation state.
1030. `                setTimeout(() => loader.remove(), 600);` - Arrow function expression used as callback or concise helper.
1031. `            }, 2000);` - Closes a block (function, condition, loop, object, or element section).
1032. `        });` - Closes a block (function, condition, loop, object, or element section).
1033. `` - Blank line for readability / logical separation.
1034. `        // --- Link Interception for Loading Screen (Optional for consistency) ---` - Comment line describing intent or section.
1035. `        document.body.addEventListener('click', function (e) {` - Attaches an event listener to react to user interaction or lifecycle events.
1036. `            let targetLink = e.target.closest('a[href]');` - Declares a mutable variable used for evolving UI/state values.
1037. `            if (targetLink && targetLink.href) {` - Starts a conditional branch that decides behavior based on runtime state.
1038. `                const isInternal = targetLink.origin === window.location.origin;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1039. `                const isFile = targetLink.href.includes('/assets/');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1040. `                const isMailto = targetLink.protocol === 'mailto:';` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1041. `                const isAnchor = targetLink.hash && targetLink.pathname === window.location.pathname;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
1042. `                if (isInternal && !isFile && !isMailto && !isAnchor) {` - Starts a conditional branch that decides behavior based on runtime state.
1043. `                    e.preventDefault();` - Operational source line participating in page/server behavior.
1044. `                    let loadingScreen = document.getElementById("loading-screen");` - Declares a mutable variable used for evolving UI/state values.
1045. `                    ` - Blank line for readability / logical separation.
1046. `                    // If loading screen doesn't exist, create it` - Comment line describing intent or section.
1047. `                    if (!loadingScreen) {` - Starts a conditional branch that decides behavior based on runtime state.
1048. `                        loadingScreen = document.createElement('div');` - Operational source line participating in page/server behavior.
1049. `                        loadingScreen.id = 'loading-screen';` - Operational source line participating in page/server behavior.
1050. `                        loadingScreen.style.cssText = `` - Operational source line participating in page/server behavior.
1051. `                            position: fixed;` - Operational source line participating in page/server behavior.
1052. `                            inset: 0;` - Operational source line participating in page/server behavior.
1053. `                            background: linear-gradient(135deg, #0a0f2c, #1a2949);` - Operational source line participating in page/server behavior.
1054. `                            z-index: 9999;` - Operational source line participating in page/server behavior.
1055. `                            display: flex;` - Operational source line participating in page/server behavior.
1056. `                            align-items: center;` - Operational source line participating in page/server behavior.
1057. `                            justify-content: center;` - Operational source line participating in page/server behavior.
1058. `                            transition: opacity 0.6s ease;` - Operational source line participating in page/server behavior.
1059. `                            opacity: 1;` - Operational source line participating in page/server behavior.
1060. `                        `;` - Operational source line participating in page/server behavior.
1061. `                        ` - Blank line for readability / logical separation.
1062. `                        loadingScreen.innerHTML = `` - Sets HTML markup into a container element.
1063. `                            <video autoplay muted loop playsinline style="width: 150px; height: 150px; object-fit: contain; filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7)); border-radius: 12px;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
1064. `                                <source src="/assets/load.mp4" type="video/mp4" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
1065. `                                Your browser does not support the video tag.` - Operational source line participating in page/server behavior.
1066. `                            </video>` - HTML markup line contributing structure, metadata, scripts, or content containers.
1067. `                        `;` - Operational source line participating in page/server behavior.
1068. `                        ` - Blank line for readability / logical separation.
1069. `                        document.body.appendChild(loadingScreen);` - Operational source line participating in page/server behavior.
1070. `                    } else {` - Closes a block (function, condition, loop, object, or element section).
1071. `                        // If it exists, show it` - Comment line describing intent or section.
1072. `                        loadingScreen.classList.remove("fade-out");` - Adds/removes/toggles CSS classes to control visibility or animation state.
1073. `                        loadingScreen.style.opacity = '1';` - Operational source line participating in page/server behavior.
1074. `                        loadingScreen.style.pointerEvents = 'auto';` - Operational source line participating in page/server behavior.
1075. `                        loadingScreen.style.display = 'flex';` - Operational source line participating in page/server behavior.
1076. `                    }` - Closes a block (function, condition, loop, object, or element section).
1077. `                    ` - Blank line for readability / logical separation.
1078. `                    setTimeout(() => {` - Arrow function expression used as callback or concise helper.
1079. `                        window.location.href = targetLink.href;` - Operational source line participating in page/server behavior.
1080. `                    }, 1000);` - Closes a block (function, condition, loop, object, or element section).
1081. `                }` - Closes a block (function, condition, loop, object, or element section).
1082. `            }` - Closes a block (function, condition, loop, object, or element section).
1083. `        });` - Closes a block (function, condition, loop, object, or element section).
1084. `    </script>` - HTML markup line contributing structure, metadata, scripts, or content containers.
1085. `</body>` - HTML markup line contributing structure, metadata, scripts, or content containers.
1086. `` - Blank line for readability / logical separation.
1087. `</html>` - HTML markup line contributing structure, metadata, scripts, or content containers.

## .\persev-compiled\frontend\static\events.js

1. `// --- Loading Screen and Initialization ---` - Comment line describing intent or section.
2. `const loadingScreen = document.getElementById('loading-screen');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
3. `` - Blank line for readability / logical separation.
4. `async function initializePage() {` - Defines an async function that awaits I/O operations (usually fetch).
5. `` - Blank line for readability / logical separation.
6. `` - Blank line for readability / logical separation.
7. `  // Ensure loading screen is visible at the very start` - Comment line describing intent or section.
8. `  loadingScreen.style.opacity = '1';` - Operational source line participating in page/server behavior.
9. `  loadingScreen.style.pointerEvents = 'auto';` - Operational source line participating in page/server behavior.
10. `  loadingScreen.style.display = 'flex';  // Ensure it is displayed` - Operational source line participating in page/server behavior.
11. `` - Blank line for readability / logical separation.
12. `  try {` - Operational source line participating in page/server behavior.
13. `    const res = await fetch('config.json');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
14. `    if (!res.ok) {` - Starts a conditional branch that decides behavior based on runtime state.
15. `      throw new Error(`HTTP error! status: ${res.status}`);` - Raises an error for invalid or failed state.
16. `    }` - Closes a block (function, condition, loop, object, or element section).
17. `    const config = await res.json();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
18. `    const website = config.website \\|\\| {};` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
19. `    const navbar = website.navbar \\|\\| {};` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
20. `    const events = website.events \\|\\| [];` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
21. `` - Blank line for readability / logical separation.
22. `    // Preload images using Promise-based approach (prevents duplicate requests)` - Comment line describing intent or section.
23. `    const imagePromises = [];` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
24. `    website.events.forEach(event => {` - Arrow function expression used as callback or concise helper.
25. `      if (event.eventHeadPhoto) {` - Starts a conditional branch that decides behavior based on runtime state.
26. `        imagePromises.push(new Promise((resolve, reject) => {` - Arrow function expression used as callback or concise helper.
27. `          const img = new Image();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
28. `          img.onload = () => resolve(img);` - Arrow function expression used as callback or concise helper.
29. `          img.onerror = () => reject(new Error(`Failed to load ${event.eventHeadPhoto}`));` - Arrow function expression used as callback or concise helper.
30. `          img.src = event.eventHeadPhoto;` - Operational source line participating in page/server behavior.
31. `        }));` - Closes a block (function, condition, loop, object, or element section).
32. `      }` - Closes a block (function, condition, loop, object, or element section).
33. `      if (event.logo) {` - Starts a conditional branch that decides behavior based on runtime state.
34. `        imagePromises.push(new Promise((resolve, reject) => {` - Arrow function expression used as callback or concise helper.
35. `          const img = new Image();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
36. `          img.onload = () => resolve(img);` - Arrow function expression used as callback or concise helper.
37. `          img.onerror = () => reject(new Error(`Failed to load ${event.logo}`));` - Arrow function expression used as callback or concise helper.
38. `          img.src = event.logo;` - Operational source line participating in page/server behavior.
39. `        }));` - Closes a block (function, condition, loop, object, or element section).
40. `      }` - Closes a block (function, condition, loop, object, or element section).
41. `    });` - Closes a block (function, condition, loop, object, or element section).
42. `` - Blank line for readability / logical separation.
43. `    // Wait for all images to preload (optional - don't block UI)` - Comment line describing intent or section.
44. `    Promise.allSettled(imagePromises).then(results => {` - Arrow function expression used as callback or concise helper.
45. `      console.log(`Preloaded ${results.filter(r => r.status === 'fulfilled').length}/${results.length} images`);` - Arrow function expression used as callback or concise helper.
46. `    });` - Closes a block (function, condition, loop, object, or element section).
47. `` - Blank line for readability / logical separation.
48. `    // Populate Navbar Links` - Comment line describing intent or section.
49. `    const desktopNav = document.getElementById('desktop-nav');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
50. `    const mobileMenu = document.getElementById('mobile-menu');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
51. `    desktopNav.innerHTML = '';  // Clear existing content if any` - Sets HTML markup into a container element.
52. `    mobileMenu.innerHTML = '';  // Clear existing content if any` - Sets HTML markup into a container element.
53. `    const homeDesktop = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
54. `    homeDesktop.href = '/';` - Operational source line participating in page/server behavior.
55. `    homeDesktop.textContent = 'Home';` - Sets plain text content into a DOM node.
56. `    homeDesktop.className = 'hover:text-blue-200';` - Operational source line participating in page/server behavior.
57. `    desktopNav.appendChild(homeDesktop);` - Operational source line participating in page/server behavior.
58. `` - Blank line for readability / logical separation.
59. `    const homeMobile = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
60. `    homeMobile.href = '/';` - Operational source line participating in page/server behavior.
61. `    homeMobile.textContent = 'Home';` - Sets plain text content into a DOM node.
62. `    homeMobile.className = 'block py-2 text-lg hover:text-blue-200';` - Operational source line participating in page/server behavior.
63. `    mobileMenu.appendChild(homeMobile);` - Operational source line participating in page/server behavior.
64. `` - Blank line for readability / logical separation.
65. `    (navbar.links \\|\\| []).forEach(link => {` - Arrow function expression used as callback or concise helper.
66. `      // Desktop Nav` - Comment line describing intent or section.
67. `      const desktopLink = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
68. `      desktopLink.href = link.linkto;` - Operational source line participating in page/server behavior.
69. `      desktopLink.textContent = link.name;` - Sets plain text content into a DOM node.
70. `      desktopLink.className =` - Operational source line participating in page/server behavior.
71. `          'hover:text-blue-200';  // Existing class from main page` - Operational source line participating in page/server behavior.
72. `      desktopNav.appendChild(desktopLink);` - Operational source line participating in page/server behavior.
73. `` - Blank line for readability / logical separation.
74. `      // Mobile Nav` - Comment line describing intent or section.
75. `      const mobileLink = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
76. `      mobileLink.href = link.linkto;` - Operational source line participating in page/server behavior.
77. `      mobileLink.textContent = link.name;` - Sets plain text content into a DOM node.
78. `      mobileLink.className =` - Operational source line participating in page/server behavior.
79. `          'block py-2 text-lg hover:text-blue-200';  // Existing class from main` - Operational source line participating in page/server behavior.
80. `                                                     // page` - Comment line describing intent or section.
81. `      mobileMenu.appendChild(mobileLink);` - Operational source line participating in page/server behavior.
82. `    });` - Closes a block (function, condition, loop, object, or element section).
83. `` - Blank line for readability / logical separation.
84. `    // Populate Navbar Title` - Comment line describing intent or section.
85. `    document.getElementById('nav-title').textContent =` - Reads a DOM element reference to manipulate content or behavior.
86. `        navbar.title \\|\\| 'Perseverantia';` - Operational source line participating in page/server behavior.
87. `` - Blank line for readability / logical separation.
88. `    // Events Grid Population with enhanced card structure` - Comment line describing intent or section.
89. `    const grid = document.getElementById('eventsGrid');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
90. `    grid.innerHTML = '';  // Clear existing content before populating` - Sets HTML markup into a container element.
91. `    events.forEach((event, index) => {` - Arrow function expression used as callback or concise helper.
92. `      const card = document.createElement('div');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
93. `      // Use event-card class to match organizing-committee.html style` - Comment line describing intent or section.
94. `      card.className = 'event-card w-full p-6 fade-in-up cursor-pointer';` - Operational source line participating in page/server behavior.
95. `      card.style.animationDelay = `${(index * 0.1) + 0.1}s`;` - Operational source line participating in page/server behavior.
96. `      card.innerHTML = `` - Sets HTML markup into a container element.
97. `            <img src="${event.logo}" alt="${` - HTML markup line contributing structure, metadata, scripts, or content containers.
98. `          event` - Operational source line participating in page/server behavior.
99. `              .name} Logo" class="w-28 h-36 object-contain mx-auto mb-4 transition-all duration-400" />` - Operational source line participating in page/server behavior.
100. `            <h2 class="text-xl event-name text-center">${event.name}</h2>` - HTML markup line contributing structure, metadata, scripts, or content containers.
101. `            <p class="text-sm italic text-gray-300 text-center mt-1">${` - HTML markup line contributing structure, metadata, scripts, or content containers.
102. `          event.shortDesc}</p>` - Operational source line participating in page/server behavior.
103. `          `;` - Operational source line participating in page/server behavior.
104. `      card.onclick = () => openModal(event);` - Arrow function expression used as callback or concise helper.
105. `      grid.appendChild(card);` - Operational source line participating in page/server behavior.
106. `    });` - Closes a block (function, condition, loop, object, or element section).
107. `` - Blank line for readability / logical separation.
108. `    // Once config is loaded and elements are populated, fade out loading screen` - Comment line describing intent or section.
109. `    // after 2 seconds.` - Comment line describing intent or section.
110. `    setTimeout(() => {` - Arrow function expression used as callback or concise helper.
111. `      loadingScreen.classList.add('fade-out');` - Adds/removes/toggles CSS classes to control visibility or animation state.
112. `      setTimeout(` - Operational source line participating in page/server behavior.
113. `          () => loadingScreen.remove(), 600);  // Remove after CSS transition` - Arrow function expression used as callback or concise helper.
114. `` - Blank line for readability / logical separation.
115. `      // Initialize enhanced animations after loading screen is removed` - Comment line describing intent or section.
116. `      initializeEnhancedAnimations();` - Operational source line participating in page/server behavior.
117. `    }, 1000);  // Show loading screen for 2 seconds (2000ms)` - Closes a block (function, condition, loop, object, or element section).
118. `` - Blank line for readability / logical separation.
119. `  } catch (err) {` - Closes a block (function, condition, loop, object, or element section).
120. `    console.error('Failed to load /config.json or populate content:', err);` - Operational source line participating in page/server behavior.
121. `` - Blank line for readability / logical separation.
122. `    // Fallback: Set basic navigation if config fails` - Comment line describing intent or section.
123. `    const desktopNav = document.getElementById('desktop-nav');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
124. `    const mobileMenu = document.getElementById('mobile-menu');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
125. `` - Blank line for readability / logical separation.
126. `    // Clear and set fallback navigation` - Comment line describing intent or section.
127. `    desktopNav.innerHTML = '';` - Sets HTML markup into a container element.
128. `    mobileMenu.innerHTML = '';` - Sets HTML markup into a container element.
129. `` - Blank line for readability / logical separation.
130. `    // Add Home link` - Comment line describing intent or section.
131. `    const homeDesktop = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
132. `    homeDesktop.href = '/';` - Operational source line participating in page/server behavior.
133. `    homeDesktop.textContent = 'Home';` - Sets plain text content into a DOM node.
134. `    homeDesktop.className = 'hover:text-blue-200';` - Operational source line participating in page/server behavior.
135. `    desktopNav.appendChild(homeDesktop);` - Operational source line participating in page/server behavior.
136. `` - Blank line for readability / logical separation.
137. `    const homeMobile = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
138. `    homeMobile.href = '/';` - Operational source line participating in page/server behavior.
139. `    homeMobile.textContent = 'Home';` - Sets plain text content into a DOM node.
140. `    homeMobile.className = 'block py-2 text-lg hover:text-blue-200';` - Operational source line participating in page/server behavior.
141. `    mobileMenu.appendChild(homeMobile);` - Operational source line participating in page/server behavior.
142. `` - Blank line for readability / logical separation.
143. `    // Add other essential links` - Comment line describing intent or section.
144. `    const eventsDesktop = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
145. `    eventsDesktop.href = '/events.html';` - Operational source line participating in page/server behavior.
146. `    eventsDesktop.textContent = 'Events';` - Sets plain text content into a DOM node.
147. `    eventsDesktop.className = 'hover:text-blue-200';` - Operational source line participating in page/server behavior.
148. `    desktopNav.appendChild(eventsDesktop);` - Operational source line participating in page/server behavior.
149. `` - Blank line for readability / logical separation.
150. `    const eventsMobile = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
151. `    eventsMobile.href = '/events.html';` - Operational source line participating in page/server behavior.
152. `    eventsMobile.textContent = 'Events';` - Sets plain text content into a DOM node.
153. `    eventsMobile.className = 'block py-2 text-lg hover:text-blue-200';` - Operational source line participating in page/server behavior.
154. `    mobileMenu.appendChild(eventsMobile);` - Operational source line participating in page/server behavior.
155. `` - Blank line for readability / logical separation.
156. `    const ocDesktop = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
157. `    ocDesktop.href = '/organizing-committee.html';` - Operational source line participating in page/server behavior.
158. `    ocDesktop.textContent = 'Organizing Committee';` - Sets plain text content into a DOM node.
159. `    ocDesktop.className = 'hover:text-blue-200';` - Operational source line participating in page/server behavior.
160. `    desktopNav.appendChild(ocDesktop);` - Operational source line participating in page/server behavior.
161. `` - Blank line for readability / logical separation.
162. `    const ocMobile = document.createElement('a');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
163. `    ocMobile.href = '/organizing-committee.html';` - Operational source line participating in page/server behavior.
164. `    ocMobile.textContent = 'Organizing Committee';` - Sets plain text content into a DOM node.
165. `    ocMobile.className = 'block py-2 text-lg hover:text-blue-200';` - Operational source line participating in page/server behavior.
166. `    mobileMenu.appendChild(ocMobile);` - Operational source line participating in page/server behavior.
167. `` - Blank line for readability / logical separation.
168. `    // If config fails, still hide the loading screen after a shorter delay` - Comment line describing intent or section.
169. `    setTimeout(() => {` - Arrow function expression used as callback or concise helper.
170. `      loadingScreen.classList.add('fade-out');` - Adds/removes/toggles CSS classes to control visibility or animation state.
171. `      setTimeout(() => loadingScreen.remove(), 600);` - Arrow function expression used as callback or concise helper.
172. `    }, 1000);  // Shorter delay if there's an error` - Closes a block (function, condition, loop, object, or element section).
173. `  }` - Closes a block (function, condition, loop, object, or element section).
174. `}` - Closes a block (function, condition, loop, object, or element section).
175. `` - Blank line for readability / logical separation.
176. `// Run the initialization function when the DOM is ready` - Comment line describing intent or section.
177. `document.addEventListener('DOMContentLoaded', initializePage);` - Attaches an event listener to react to user interaction or lifecycle events.
178. `` - Blank line for readability / logical separation.
179. `// --- Mobile Menu Toggle Script (Fixed to work with original structure) ---` - Comment line describing intent or section.
180. `document.addEventListener('DOMContentLoaded', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
181. `  const toggleBtn = document.getElementById('menu-toggle');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
182. `  const mobileMenu = document.getElementById('mobile-menu');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
183. `` - Blank line for readability / logical separation.
184. `  if (toggleBtn && mobileMenu) {` - Starts a conditional branch that decides behavior based on runtime state.
185. `    let menuOpen = false;` - Declares a mutable variable used for evolving UI/state values.
186. `    toggleBtn.addEventListener('click', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
187. `      menuOpen = !menuOpen;` - Operational source line participating in page/server behavior.
188. `      console.log('Menu toggle clicked, menuOpen:', menuOpen);  // Debug log` - Operational source line participating in page/server behavior.
189. `      if (menuOpen) {` - Starts a conditional branch that decides behavior based on runtime state.
190. `        mobileMenu.classList.remove('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
191. `        void mobileMenu.offsetWidth;` - Operational source line participating in page/server behavior.
192. `        mobileMenu.classList.remove(` - Adds/removes/toggles CSS classes to control visibility or animation state.
193. `            'opacity-0', 'scale-y-90', '-translate-y-4');` - Operational source line participating in page/server behavior.
194. `        mobileMenu.classList.add('opacity-100', 'scale-y-100', 'translate-y-0');` - Adds/removes/toggles CSS classes to control visibility or animation state.
195. `      } else {` - Closes a block (function, condition, loop, object, or element section).
196. `        mobileMenu.classList.remove(` - Adds/removes/toggles CSS classes to control visibility or animation state.
197. `            'opacity-100', 'scale-y-100', 'translate-y-0');` - Operational source line participating in page/server behavior.
198. `        mobileMenu.classList.add('opacity-0', 'scale-y-90', '-translate-y-4');` - Adds/removes/toggles CSS classes to control visibility or animation state.
199. `        setTimeout(() => {` - Arrow function expression used as callback or concise helper.
200. `          if (!menuOpen) {` - Starts a conditional branch that decides behavior based on runtime state.
201. `            mobileMenu.classList.add('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
202. `          }` - Closes a block (function, condition, loop, object, or element section).
203. `        }, 500);` - Closes a block (function, condition, loop, object, or element section).
204. `      }` - Closes a block (function, condition, loop, object, or element section).
205. `    });` - Closes a block (function, condition, loop, object, or element section).
206. `  } else {` - Closes a block (function, condition, loop, object, or element section).
207. `    console.error('Menu toggle elements not found:', {toggleBtn, mobileMenu});` - Operational source line participating in page/server behavior.
208. `  }` - Closes a block (function, condition, loop, object, or element section).
209. `});` - Closes a block (function, condition, loop, object, or element section).
210. `` - Blank line for readability / logical separation.
211. `// Initialize mobile menu after DOM is loaded` - Comment line describing intent or section.
212. `document.addEventListener(` - Attaches an event listener to react to user interaction or lifecycle events.
213. `    'DOMContentLoaded',` - Operational source line participating in page/server behavior.
214. `    () => {` - Arrow function expression used as callback or concise helper.
215. `        // Mobile menu is already set up above, no additional initialization` - Comment line describing intent or section.
216. `        // needed` - Comment line describing intent or section.
217. `    });` - Closes a block (function, condition, loop, object, or element section).
218. `// --- Modal Logic (Kept as is, functional) ---` - Comment line describing intent or section.
219. `const modal = document.getElementById('modal');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
220. `const modalTitle = document.getElementById('modalTitle');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
221. `const modalDesc = document.getElementById('modalDesc');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
222. `const ropLinkBtn = document.getElementById('ropLinkBtn');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
223. `const modalImage = document.getElementById('modalImage');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
224. `const eventHeadName = document.getElementById('eventHeadName');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
225. `const closeModal = document.getElementById('closeModal');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
226. `function isObject(variable) {` - Defines a named function used by the page/application flow.
227. `  return typeof variable === 'object' && variable !== null &&` - Returns a value or exits current function early.
228. `      !Array.isArray(variable);` - Operational source line participating in page/server behavior.
229. `}` - Closes a block (function, condition, loop, object, or element section).
230. `` - Blank line for readability / logical separation.
231. `function openModal(event) {` - Defines a named function used by the page/application flow.
232. `  if (!isObject(event)) {` - Starts a conditional branch that decides behavior based on runtime state.
233. `    console.log(event)` - Operational source line participating in page/server behavior.
234. `    // event = JSON.parse(event)` - Comment line describing intent or section.
235. `  }` - Closes a block (function, condition, loop, object, or element section).
236. `  modalTitle.textContent = event.name;` - Sets plain text content into a DOM node.
237. `  modalDesc.textContent = event.longDesc \\|\\| '';` - Sets plain text content into a DOM node.
238. `` - Blank line for readability / logical separation.
239. `  if (event.eventHeadPhoto) {` - Starts a conditional branch that decides behavior based on runtime state.
240. `    modalImage.src = event.eventHeadPhoto;` - Operational source line participating in page/server behavior.
241. `    modalImage.classList.remove('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
242. `  } else {` - Closes a block (function, condition, loop, object, or element section).
243. `    modalImage.classList.add('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
244. `  }` - Closes a block (function, condition, loop, object, or element section).
245. `` - Blank line for readability / logical separation.
246. `  eventHeadName.textContent = event.eventHeadName \\|\\| '';` - Sets plain text content into a DOM node.
247. `` - Blank line for readability / logical separation.
248. `  if (event.ropLink && event.ropLink.trim() !== '') {` - Starts a conditional branch that decides behavior based on runtime state.
249. `    ropLinkBtn.href = event.ropLink;` - Operational source line participating in page/server behavior.
250. `    ropLinkBtn.classList.remove('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
251. `  } else {` - Closes a block (function, condition, loop, object, or element section).
252. `    ropLinkBtn.classList.add('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
253. `  }` - Closes a block (function, condition, loop, object, or element section).
254. `` - Blank line for readability / logical separation.
255. `  modal.classList.remove('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
256. `  document.body.style.overflow = 'hidden';` - Operational source line participating in page/server behavior.
257. `}` - Closes a block (function, condition, loop, object, or element section).
258. `` - Blank line for readability / logical separation.
259. `closeModal.onclick = () => {` - Arrow function expression used as callback or concise helper.
260. `  modal.classList.add('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
261. `  document.body.style.overflow = '';` - Operational source line participating in page/server behavior.
262. `};` - Closes a block (function, condition, loop, object, or element section).
263. `` - Blank line for readability / logical separation.
264. `modal.addEventListener('click', e => {` - Attaches an event listener to react to user interaction or lifecycle events.
265. `  if (e.target === modal) {` - Starts a conditional branch that decides behavior based on runtime state.
266. `    modal.classList.add('hidden');` - Adds/removes/toggles CSS classes to control visibility or animation state.
267. `    document.body.style.overflow = '';` - Operational source line participating in page/server behavior.
268. `  }` - Closes a block (function, condition, loop, object, or element section).
269. `});` - Closes a block (function, condition, loop, object, or element section).
270. `` - Blank line for readability / logical separation.
271. `// --- Enhanced Animations and Interactions (matching organizing-committee.html)` - Comment line describing intent or section.
272. `// ---` - Comment line describing intent or section.
273. `function initializeEnhancedAnimations() {` - Defines a named function used by the page/application flow.
274. `  // Intersection Observer for fade-in animations` - Comment line describing intent or section.
275. `  const observerOptions = {threshold: 0.1, rootMargin: '0px 0px -50px 0px'};` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
276. `` - Blank line for readability / logical separation.
277. `  const observer = new IntersectionObserver((entries) => {` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
278. `    entries.forEach(entry => {` - Arrow function expression used as callback or concise helper.
279. `      if (entry.isIntersecting) {` - Starts a conditional branch that decides behavior based on runtime state.
280. `        entry.target.style.animationPlayState = 'running';` - Operational source line participating in page/server behavior.
281. `      }` - Closes a block (function, condition, loop, object, or element section).
282. `    });` - Closes a block (function, condition, loop, object, or element section).
283. `  }, observerOptions);` - Closes a block (function, condition, loop, object, or element section).
284. `` - Blank line for readability / logical separation.
285. `  document.querySelectorAll('.fade-in-up').forEach(el => {` - Arrow function expression used as callback or concise helper.
286. `    el.style.animationPlayState = 'paused';` - Operational source line participating in page/server behavior.
287. `    observer.observe(el);` - Operational source line participating in page/server behavior.
288. `  });` - Closes a block (function, condition, loop, object, or element section).
289. `` - Blank line for readability / logical separation.
290. `  // Add click ripple effect to event cards` - Comment line describing intent or section.
291. `  document.querySelectorAll('.event-card').forEach(card => {` - Arrow function expression used as callback or concise helper.
292. `    card.addEventListener('click', function(e) {` - Attaches an event listener to react to user interaction or lifecycle events.
293. `      // Create ripple effect` - Comment line describing intent or section.
294. `      const ripple = document.createElement('div');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
295. `      const rect = this.getBoundingClientRect();` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
296. `      const size = Math.max(rect.width, rect.height);` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
297. `      const x = e.clientX - rect.left - size / 2;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
298. `      const y = e.clientY - rect.top - size / 2;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
299. `` - Blank line for readability / logical separation.
300. `      ripple.style.cssText = `` - Operational source line participating in page/server behavior.
301. `            position: absolute;` - Operational source line participating in page/server behavior.
302. `            width: ${size}px;` - Operational source line participating in page/server behavior.
303. `            height: ${size}px;` - Operational source line participating in page/server behavior.
304. `            left: ${x}px;` - Operational source line participating in page/server behavior.
305. `            top: ${y}px;` - Operational source line participating in page/server behavior.
306. `            background: rgba(190, 142, 48, 0.3);` - Operational source line participating in page/server behavior.
307. `            border-radius: 50%;` - Operational source line participating in page/server behavior.
308. `            transform: scale(0);` - Operational source line participating in page/server behavior.
309. `            animation: ripple 0.6s ease-out;` - Operational source line participating in page/server behavior.
310. `            pointer-events: none;` - Operational source line participating in page/server behavior.
311. `            z-index: 1;` - Operational source line participating in page/server behavior.
312. `          `;` - Operational source line participating in page/server behavior.
313. `` - Blank line for readability / logical separation.
314. `      this.appendChild(ripple);` - Operational source line participating in page/server behavior.
315. `` - Blank line for readability / logical separation.
316. `      // Remove ripple after animation` - Comment line describing intent or section.
317. `      setTimeout(() => {` - Arrow function expression used as callback or concise helper.
318. `        ripple.remove();` - Operational source line participating in page/server behavior.
319. `      }, 600);` - Closes a block (function, condition, loop, object, or element section).
320. `    });` - Closes a block (function, condition, loop, object, or element section).
321. `  });` - Closes a block (function, condition, loop, object, or element section).
322. `` - Blank line for readability / logical separation.
323. `  // Add ripple animation keyframes if not already present` - Comment line describing intent or section.
324. `  if (!document.getElementById('ripple-styles')) {` - Reads a DOM element reference to manipulate content or behavior.
325. `    const style = document.createElement('style');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
326. `    style.id = 'ripple-styles';` - Operational source line participating in page/server behavior.
327. `    style.textContent = `` - Sets plain text content into a DOM node.
328. `          @keyframes ripple {` - Operational source line participating in page/server behavior.
329. `            to {` - Operational source line participating in page/server behavior.
330. `              transform: scale(4);` - Operational source line participating in page/server behavior.
331. `              opacity: 0;` - Operational source line participating in page/server behavior.
332. `            }` - Closes a block (function, condition, loop, object, or element section).
333. `          }` - Closes a block (function, condition, loop, object, or element section).
334. `        `;` - Operational source line participating in page/server behavior.
335. `    document.head.appendChild(style);` - Operational source line participating in page/server behavior.
336. `  }` - Closes a block (function, condition, loop, object, or element section).
337. `` - Blank line for readability / logical separation.
338. `  // Parallax effect for background decorations` - Comment line describing intent or section.
339. `  window.addEventListener('scroll', () => {` - Attaches an event listener to react to user interaction or lifecycle events.
340. `    const scrolled = window.pageYOffset;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
341. `    const parallax = document.querySelector('.bg-decoration');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
342. `    if (parallax) {` - Starts a conditional branch that decides behavior based on runtime state.
343. `      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;` - Operational source line participating in page/server behavior.
344. `    }` - Closes a block (function, condition, loop, object, or element section).
345. `  });` - Closes a block (function, condition, loop, object, or element section).
346. `}` - Closes a block (function, condition, loop, object, or element section).
347. `` - Blank line for readability / logical separation.
348. `// --- Link Interception for Loading Screen (Optional but good for consistency)` - Comment line describing intent or section.
349. `// ---` - Comment line describing intent or section.
350. `document.body.addEventListener('click', function(e) {` - Attaches an event listener to react to user interaction or lifecycle events.
351. `  let targetLink = e.target.closest('a[href]');` - Declares a mutable variable used for evolving UI/state values.
352. `` - Blank line for readability / logical separation.
353. `  if (targetLink && targetLink.href) {` - Starts a conditional branch that decides behavior based on runtime state.
354. `    const isInternal = targetLink.origin === window.location.origin;` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
355. `    const isFile = targetLink.href.includes('/assets/');` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
356. `    const isMailto = targetLink.protocol === 'mailto:';` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
357. `    const isAnchor =` - Declares an immutable binding for configuration, state, DOM handle, or helper reference.
358. `        targetLink.hash && targetLink.pathname === window.location.pathname;` - Operational source line participating in page/server behavior.
359. `` - Blank line for readability / logical separation.
360. `    if (isInternal && !isFile && !isMailto && !isAnchor) {` - Starts a conditional branch that decides behavior based on runtime state.
361. `      e.preventDefault();` - Operational source line participating in page/server behavior.
362. `` - Blank line for readability / logical separation.
363. `      let currentLoadingScreen = document.getElementById('loading-screen');` - Declares a mutable variable used for evolving UI/state values.
364. `` - Blank line for readability / logical separation.
365. `      // If loading screen doesn't exist, create it` - Comment line describing intent or section.
366. `      if (!currentLoadingScreen) {` - Starts a conditional branch that decides behavior based on runtime state.
367. `        currentLoadingScreen = document.createElement('div');` - Operational source line participating in page/server behavior.
368. `        currentLoadingScreen.id = 'loading-screen';` - Operational source line participating in page/server behavior.
369. `        currentLoadingScreen.style.cssText = `` - Operational source line participating in page/server behavior.
370. `              position: fixed;` - Operational source line participating in page/server behavior.
371. `              inset: 0;` - Operational source line participating in page/server behavior.
372. `              background: radial-gradient(circle at center, #1a2949 0%, #0a0f2c 100%);` - Operational source line participating in page/server behavior.
373. `              z-index: 9999;` - Operational source line participating in page/server behavior.
374. `              display: flex;` - Operational source line participating in page/server behavior.
375. `              align-items: center;` - Operational source line participating in page/server behavior.
376. `              justify-content: center;` - Operational source line participating in page/server behavior.
377. `              opacity: 1;` - Operational source line participating in page/server behavior.
378. `              pointer-events: auto;` - Operational source line participating in page/server behavior.
379. `              transition: opacity 0.6s ease;` - Operational source line participating in page/server behavior.
380. `            `;` - Operational source line participating in page/server behavior.
381. `` - Blank line for readability / logical separation.
382. `        currentLoadingScreen.innerHTML = `` - Sets HTML markup into a container element.
383. `              <video autoplay muted loop playsinline style="width: 150px; height: 150px; object-fit: contain; filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7)); border-radius: 12px; animation: pulse 2s ease-in-out infinite;">` - HTML markup line contributing structure, metadata, scripts, or content containers.
384. `                <source src="/assets/load.mp4" type="video/mp4" />` - HTML markup line contributing structure, metadata, scripts, or content containers.
385. `                Your browser does not support the video tag.` - Operational source line participating in page/server behavior.
386. `              </video>` - HTML markup line contributing structure, metadata, scripts, or content containers.
387. `            `;` - Operational source line participating in page/server behavior.
388. `` - Blank line for readability / logical separation.
389. `        document.body.appendChild(currentLoadingScreen);` - Operational source line participating in page/server behavior.
390. `      } else {` - Closes a block (function, condition, loop, object, or element section).
391. `        // If it exists, show it` - Comment line describing intent or section.
392. `        currentLoadingScreen.classList.remove('fade-out');` - Adds/removes/toggles CSS classes to control visibility or animation state.
393. `        currentLoadingScreen.style.opacity = '1';` - Operational source line participating in page/server behavior.
394. `        currentLoadingScreen.style.pointerEvents = 'auto';` - Operational source line participating in page/server behavior.
395. `        currentLoadingScreen.style.display = 'flex';` - Operational source line participating in page/server behavior.
396. `      }` - Closes a block (function, condition, loop, object, or element section).
397. `` - Blank line for readability / logical separation.
398. `      setTimeout(() => {` - Arrow function expression used as callback or concise helper.
399. `        window.location.href = targetLink.href;` - Operational source line participating in page/server behavior.
400. `      }, 1000);` - Closes a block (function, condition, loop, object, or element section).
401. `    }` - Closes a block (function, condition, loop, object, or element section).
402. `  }` - Closes a block (function, condition, loop, object, or element section).
403. `});` - Closes a block (function, condition, loop, object, or element section).

## .\persev-compiled\frontend\static\confetti.js

1. `var confetti = {` - Declares function/global-scoped variable (legacy style) used by script runtime.
2. `  maxCount: 150,		//set max confetti count` - Operational source line participating in page/server behavior.
3. `  speed: 2,			//set the particle animation speed` - Operational source line participating in page/server behavior.
4. `  frameInterval: 15,	//the confetti animation frame interval in milliseconds` - Operational source line participating in page/server behavior.
5. `  alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)` - Operational source line participating in page/server behavior.
6. `  gradient: false,	//whether to use gradients for the confetti particles` - Operational source line participating in page/server behavior.
7. `  start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)` - Operational source line participating in page/server behavior.
8. `  stop: null,			//call to stop adding confetti` - Operational source line participating in page/server behavior.
9. `  toggle: null,		//call to start or stop the confetti animation depending on whether it's already running` - Operational source line participating in page/server behavior.
10. `  pause: null,		//call to freeze confetti animation` - Operational source line participating in page/server behavior.
11. `  resume: null,		//call to unfreeze confetti animation` - Operational source line participating in page/server behavior.
12. `  togglePause: null,	//call to toggle whether the confetti animation is paused` - Operational source line participating in page/server behavior.
13. `  remove: null,		//call to stop the confetti animation and remove all confetti immediately` - Operational source line participating in page/server behavior.
14. `  isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused` - Operational source line participating in page/server behavior.
15. `  isRunning: null		//call and returns true or false depending on whether the animation is running` - Operational source line participating in page/server behavior.
16. `};` - Closes a block (function, condition, loop, object, or element section).
17. `` - Blank line for readability / logical separation.
18. `(function() {` - Operational source line participating in page/server behavior.
19. `  confetti.start = startConfetti;` - Operational source line participating in page/server behavior.
20. `  confetti.stop = stopConfetti;` - Operational source line participating in page/server behavior.
21. `  confetti.toggle = toggleConfetti;` - Operational source line participating in page/server behavior.
22. `  confetti.pause = pauseConfetti;` - Operational source line participating in page/server behavior.
23. `  confetti.resume = resumeConfetti;` - Operational source line participating in page/server behavior.
24. `  confetti.togglePause = toggleConfettiPause;` - Operational source line participating in page/server behavior.
25. `  confetti.isPaused = isConfettiPaused;` - Operational source line participating in page/server behavior.
26. `  confetti.remove = removeConfetti;` - Operational source line participating in page/server behavior.
27. `  confetti.isRunning = isConfettiRunning;` - Operational source line participating in page/server behavior.
28. `  var supportsAnimationFrame = window.requestAnimationFrame \\|\\| window.webkitRequestAnimationFrame \\|\\| window.mozRequestAnimationFrame \\|\\| window.oRequestAnimationFrame \\|\\| window.msRequestAnimationFrame;` - Declares function/global-scoped variable (legacy style) used by script runtime.
29. `  var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];` - Declares function/global-scoped variable (legacy style) used by script runtime.
30. `  var streamingConfetti = false;` - Declares function/global-scoped variable (legacy style) used by script runtime.
31. `  var animationTimer = null;` - Declares function/global-scoped variable (legacy style) used by script runtime.
32. `  var pause = false;` - Declares function/global-scoped variable (legacy style) used by script runtime.
33. `  var lastFrameTime = Date.now();` - Declares function/global-scoped variable (legacy style) used by script runtime.
34. `  var particles = [];` - Declares function/global-scoped variable (legacy style) used by script runtime.
35. `  var waveAngle = 0;` - Declares function/global-scoped variable (legacy style) used by script runtime.
36. `  var context = null;` - Declares function/global-scoped variable (legacy style) used by script runtime.
37. `` - Blank line for readability / logical separation.
38. `  function resetParticle(particle, width, height) {` - Defines a named function used by the page/application flow.
39. `    particle.color = colors[(Math.random() * colors.length) \\| 0] + (confetti.alpha + ")");` - Operational source line participating in page/server behavior.
40. `    particle.color2 = colors[(Math.random() * colors.length) \\| 0] + (confetti.alpha + ")");` - Operational source line participating in page/server behavior.
41. `    particle.x = Math.random() * width;` - Operational source line participating in page/server behavior.
42. `    particle.y = Math.random() * height - height;` - Operational source line participating in page/server behavior.
43. `    particle.diameter = Math.random() * 10 + 5;` - Operational source line participating in page/server behavior.
44. `    particle.tilt = Math.random() * 10 - 10;` - Operational source line participating in page/server behavior.
45. `    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;` - Operational source line participating in page/server behavior.
46. `    particle.tiltAngle = Math.random() * Math.PI;` - Operational source line participating in page/server behavior.
47. `    return particle;` - Returns a value or exits current function early.
48. `  }` - Closes a block (function, condition, loop, object, or element section).
49. `` - Blank line for readability / logical separation.
50. `  function toggleConfettiPause() {` - Defines a named function used by the page/application flow.
51. `    if (pause)` - Starts a conditional branch that decides behavior based on runtime state.
52. `      resumeConfetti();` - Operational source line participating in page/server behavior.
53. `    else` - Fallback branch for the preceding condition.
54. `      pauseConfetti();` - Operational source line participating in page/server behavior.
55. `  }` - Closes a block (function, condition, loop, object, or element section).
56. `` - Blank line for readability / logical separation.
57. `  function isConfettiPaused() {` - Defines a named function used by the page/application flow.
58. `    return pause;` - Returns a value or exits current function early.
59. `  }` - Closes a block (function, condition, loop, object, or element section).
60. `` - Blank line for readability / logical separation.
61. `  function pauseConfetti() {` - Defines a named function used by the page/application flow.
62. `    pause = true;` - Operational source line participating in page/server behavior.
63. `  }` - Closes a block (function, condition, loop, object, or element section).
64. `` - Blank line for readability / logical separation.
65. `  function resumeConfetti() {` - Defines a named function used by the page/application flow.
66. `    pause = false;` - Operational source line participating in page/server behavior.
67. `    runAnimation();` - Operational source line participating in page/server behavior.
68. `  }` - Closes a block (function, condition, loop, object, or element section).
69. `` - Blank line for readability / logical separation.
70. `  function runAnimation() {` - Defines a named function used by the page/application flow.
71. `    if (pause)` - Starts a conditional branch that decides behavior based on runtime state.
72. `      return;` - Returns a value or exits current function early.
73. `    else if (particles.length === 0) {` - Fallback branch for the preceding condition.
74. `      context.clearRect(0, 0, window.innerWidth, window.innerHeight);` - Operational source line participating in page/server behavior.
75. `      animationTimer = null;` - Operational source line participating in page/server behavior.
76. `    } else {` - Closes a block (function, condition, loop, object, or element section).
77. `      var now = Date.now();` - Declares function/global-scoped variable (legacy style) used by script runtime.
78. `      var delta = now - lastFrameTime;` - Declares function/global-scoped variable (legacy style) used by script runtime.
79. `      if (!supportsAnimationFrame \\|\\| delta > confetti.frameInterval) {` - Starts a conditional branch that decides behavior based on runtime state.
80. `        context.clearRect(0, 0, window.innerWidth, window.innerHeight);` - Operational source line participating in page/server behavior.
81. `        updateParticles();` - Operational source line participating in page/server behavior.
82. `        drawParticles(context);` - Operational source line participating in page/server behavior.
83. `        lastFrameTime = now - (delta % confetti.frameInterval);` - Operational source line participating in page/server behavior.
84. `      }` - Closes a block (function, condition, loop, object, or element section).
85. `      animationTimer = requestAnimationFrame(runAnimation);` - Operational source line participating in page/server behavior.
86. `    }` - Closes a block (function, condition, loop, object, or element section).
87. `  }` - Closes a block (function, condition, loop, object, or element section).
88. `` - Blank line for readability / logical separation.
89. `  function startConfetti(timeout, min, max) {` - Defines a named function used by the page/application flow.
90. `    var width = window.innerWidth;` - Declares function/global-scoped variable (legacy style) used by script runtime.
91. `    var height = window.innerHeight;` - Declares function/global-scoped variable (legacy style) used by script runtime.
92. `    window.requestAnimationFrame = (function() {` - Operational source line participating in page/server behavior.
93. `      return window.requestAnimationFrame \\|\\|` - Returns a value or exits current function early.
94. `        window.webkitRequestAnimationFrame \\|\\|` - Operational source line participating in page/server behavior.
95. `        window.mozRequestAnimationFrame \\|\\|` - Operational source line participating in page/server behavior.
96. `        window.oRequestAnimationFrame \\|\\|` - Operational source line participating in page/server behavior.
97. `        window.msRequestAnimationFrame \\|\\|` - Operational source line participating in page/server behavior.
98. `        function (callback) {` - Defines a named function used by the page/application flow.
99. `          return window.setTimeout(callback, confetti.frameInterval);` - Returns a value or exits current function early.
100. `        };` - Closes a block (function, condition, loop, object, or element section).
101. `    })();` - Closes a block (function, condition, loop, object, or element section).
102. `    var canvas = document.getElementById("confetti-canvas");` - Declares function/global-scoped variable (legacy style) used by script runtime.
103. `    if (canvas === null) {` - Starts a conditional branch that decides behavior based on runtime state.
104. `      canvas = document.createElement("canvas");` - Operational source line participating in page/server behavior.
105. `      canvas.setAttribute("id", "confetti-canvas");` - Operational source line participating in page/server behavior.
106. `      canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");` - Operational source line participating in page/server behavior.
107. `      document.body.prepend(canvas);` - Operational source line participating in page/server behavior.
108. `      canvas.width = width;` - Operational source line participating in page/server behavior.
109. `      canvas.height = height;` - Operational source line participating in page/server behavior.
110. `      window.addEventListener("resize", function() {` - Attaches an event listener to react to user interaction or lifecycle events.
111. `        canvas.width = window.innerWidth;` - Operational source line participating in page/server behavior.
112. `        canvas.height = window.innerHeight;` - Operational source line participating in page/server behavior.
113. `      }, true);` - Closes a block (function, condition, loop, object, or element section).
114. `      context = canvas.getContext("2d");` - Operational source line participating in page/server behavior.
115. `    } else if (context === null)` - Closes a block (function, condition, loop, object, or element section).
116. `      context = canvas.getContext("2d");` - Operational source line participating in page/server behavior.
117. `    var count = confetti.maxCount;` - Declares function/global-scoped variable (legacy style) used by script runtime.
118. `    if (min) {` - Starts a conditional branch that decides behavior based on runtime state.
119. `      if (max) {` - Starts a conditional branch that decides behavior based on runtime state.
120. `        if (min == max)` - Starts a conditional branch that decides behavior based on runtime state.
121. `          count = particles.length + max;` - Operational source line participating in page/server behavior.
122. `        else {` - Fallback branch for the preceding condition.
123. `          if (min > max) {` - Starts a conditional branch that decides behavior based on runtime state.
124. `            var temp = min;` - Declares function/global-scoped variable (legacy style) used by script runtime.
125. `            min = max;` - Operational source line participating in page/server behavior.
126. `            max = temp;` - Operational source line participating in page/server behavior.
127. `          }` - Closes a block (function, condition, loop, object, or element section).
128. `          count = particles.length + ((Math.random() * (max - min) + min) \\| 0);` - Operational source line participating in page/server behavior.
129. `        }` - Closes a block (function, condition, loop, object, or element section).
130. `      } else` - Closes a block (function, condition, loop, object, or element section).
131. `        count = particles.length + min;` - Operational source line participating in page/server behavior.
132. `    } else if (max)` - Closes a block (function, condition, loop, object, or element section).
133. `      count = particles.length + max;` - Operational source line participating in page/server behavior.
134. `    while (particles.length < count)` - Operational source line participating in page/server behavior.
135. `      particles.push(resetParticle({}, width, height));` - Operational source line participating in page/server behavior.
136. `    streamingConfetti = true;` - Operational source line participating in page/server behavior.
137. `    pause = false;` - Operational source line participating in page/server behavior.
138. `    runAnimation();` - Operational source line participating in page/server behavior.
139. `    if (timeout) {` - Starts a conditional branch that decides behavior based on runtime state.
140. `      window.setTimeout(stopConfetti, timeout);` - Operational source line participating in page/server behavior.
141. `    }` - Closes a block (function, condition, loop, object, or element section).
142. `  }` - Closes a block (function, condition, loop, object, or element section).
143. `` - Blank line for readability / logical separation.
144. `  function stopConfetti() {` - Defines a named function used by the page/application flow.
145. `    streamingConfetti = false;` - Operational source line participating in page/server behavior.
146. `  }` - Closes a block (function, condition, loop, object, or element section).
147. `` - Blank line for readability / logical separation.
148. `  function removeConfetti() {` - Defines a named function used by the page/application flow.
149. `    stop();` - Operational source line participating in page/server behavior.
150. `    pause = false;` - Operational source line participating in page/server behavior.
151. `    particles = [];` - Starts an array literal assignment / list definition.
152. `  }` - Closes a block (function, condition, loop, object, or element section).
153. `` - Blank line for readability / logical separation.
154. `  function toggleConfetti() {` - Defines a named function used by the page/application flow.
155. `    if (streamingConfetti)` - Starts a conditional branch that decides behavior based on runtime state.
156. `      stopConfetti();` - Operational source line participating in page/server behavior.
157. `    else` - Fallback branch for the preceding condition.
158. `      startConfetti();` - Operational source line participating in page/server behavior.
159. `  }` - Closes a block (function, condition, loop, object, or element section).
160. `` - Blank line for readability / logical separation.
161. `  function isConfettiRunning() {` - Defines a named function used by the page/application flow.
162. `    return streamingConfetti;` - Returns a value or exits current function early.
163. `  }` - Closes a block (function, condition, loop, object, or element section).
164. `` - Blank line for readability / logical separation.
165. `  function drawParticles(context) {` - Defines a named function used by the page/application flow.
166. `    var particle;` - Declares function/global-scoped variable (legacy style) used by script runtime.
167. `    var x, y, x2, y2;` - Declares function/global-scoped variable (legacy style) used by script runtime.
168. `    for (var i = 0; i < particles.length; i++) {` - Iterates through a list/collection to build UI or process records.
169. `      particle = particles[i];` - Operational source line participating in page/server behavior.
170. `      context.beginPath();` - Operational source line participating in page/server behavior.
171. `      context.lineWidth = particle.diameter;` - Operational source line participating in page/server behavior.
172. `      x2 = particle.x + particle.tilt;` - Operational source line participating in page/server behavior.
173. `      x = x2 + particle.diameter / 2;` - Operational source line participating in page/server behavior.
174. `      y2 = particle.y + particle.tilt + particle.diameter / 2;` - Operational source line participating in page/server behavior.
175. `      if (confetti.gradient) {` - Starts a conditional branch that decides behavior based on runtime state.
176. `        var gradient = context.createLinearGradient(x, particle.y, x2, y2);` - Declares function/global-scoped variable (legacy style) used by script runtime.
177. `        gradient.addColorStop("0", particle.color);` - Operational source line participating in page/server behavior.
178. `        gradient.addColorStop("1.0", particle.color2);` - Operational source line participating in page/server behavior.
179. `        context.strokeStyle = gradient;` - Operational source line participating in page/server behavior.
180. `      } else` - Closes a block (function, condition, loop, object, or element section).
181. `        context.strokeStyle = particle.color;` - Operational source line participating in page/server behavior.
182. `      context.moveTo(x, particle.y);` - Operational source line participating in page/server behavior.
183. `      context.lineTo(x2, y2);` - Operational source line participating in page/server behavior.
184. `      context.stroke();` - Operational source line participating in page/server behavior.
185. `    }` - Closes a block (function, condition, loop, object, or element section).
186. `  }` - Closes a block (function, condition, loop, object, or element section).
187. `` - Blank line for readability / logical separation.
188. `  function updateParticles() {` - Defines a named function used by the page/application flow.
189. `    var width = window.innerWidth;` - Declares function/global-scoped variable (legacy style) used by script runtime.
190. `    var height = window.innerHeight;` - Declares function/global-scoped variable (legacy style) used by script runtime.
191. `    var particle;` - Declares function/global-scoped variable (legacy style) used by script runtime.
192. `    waveAngle += 0.01;` - Operational source line participating in page/server behavior.
193. `    for (var i = 0; i < particles.length; i++) {` - Iterates through a list/collection to build UI or process records.
194. `      particle = particles[i];` - Operational source line participating in page/server behavior.
195. `      if (!streamingConfetti && particle.y < -15)` - Starts a conditional branch that decides behavior based on runtime state.
196. `        particle.y = height + 100;` - Operational source line participating in page/server behavior.
197. `      else {` - Fallback branch for the preceding condition.
198. `        particle.tiltAngle += particle.tiltAngleIncrement;` - Operational source line participating in page/server behavior.
199. `        particle.x += Math.sin(waveAngle) - 0.5;` - Operational source line participating in page/server behavior.
200. `        particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;` - Operational source line participating in page/server behavior.
201. `        particle.tilt = Math.sin(particle.tiltAngle) * 15;` - Operational source line participating in page/server behavior.
202. `      }` - Closes a block (function, condition, loop, object, or element section).
203. `      if (particle.x > width + 20 \\|\\| particle.x < -20 \\|\\| particle.y > height) {` - Starts a conditional branch that decides behavior based on runtime state.
204. `        if (streamingConfetti && particles.length <= confetti.maxCount)` - Starts a conditional branch that decides behavior based on runtime state.
205. `          resetParticle(particle, width, height);` - Operational source line participating in page/server behavior.
206. `        else {` - Fallback branch for the preceding condition.
207. `          particles.splice(i, 1);` - Operational source line participating in page/server behavior.
208. `          i--;` - Operational source line participating in page/server behavior.
209. `        }` - Closes a block (function, condition, loop, object, or element section).
210. `      }` - Closes a block (function, condition, loop, object, or element section).
211. `    }` - Closes a block (function, condition, loop, object, or element section).
212. `  }` - Closes a block (function, condition, loop, object, or element section).
213. `})();` - Closes a block (function, condition, loop, object, or element section).

