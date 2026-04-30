# Anime.js Animation Implementation TODO

- [x] 1. Create shared animation library (`anime-animations.js`)
- [x] 2. Update `landing.html` — cinematic entry experience
- [x] 3. Update `index.html` — RESTORED to original (design untouched per user request)
- [x] 4. Update `events.html` — dynamic events page
- [x] 5. Update `organizing-committee.html` — premium OC page
- [x] 6. Update `links.html` — interactive links hub
- [x] 7. Update `locations.html` — animated "Coming Soon"
- [x] 8. Update `leaderboard.html` — RESTORED to original (untouched per user request)
- [x] 9. Update `persev-navbar.js` — `data-anime-hooked` guard, menu timeline, entrance animations
- [x] 10. Final review & restoration complete

## Summary of Changes

### NEW FILE: `public/static/anime-animations.js`
Shared animation library with 15 utilities:
- `pageEntrance()` — staggered fade-in for page elements
- `staggerReveal()` — child element stagger animations
- `scrollReveal()` — IntersectionObserver-triggered scroll animations
- `magneticButton()` — 3D tilt magnetic hover effect
- `textStagger()` — character-by-character text reveal
- `floatingOrbs()` — animated background orbs
- `navbarEntrance()` — nav link stagger entrance
- `menuTimeline()` — open/close overlay timeline
- `idlePulse()` — idle glow/breath animation
- `loadingExit()` — loading screen exit animation
- `modalOpen/Close()` — modal enter/exit transitions
- `cardTilt()` — 3D perspective card tilt on hover
- `ripple()` — click ripple effect
- `autoInit()` — automatic data-attribute initialization
- `hookNavbarMenu()` — navbar menu hook with duplicate guard

### PAGES ENHANCED WITH ANIME.JS:

| Page | Key Animations |
|------|---------------|
| `landing.html` | Rings stagger scale/opacity, character text reveal, idle pulse, exit transition |
| `events.html` | Loading exit, section stagger reveal, modal scale/blur, magnetic arrows, ripple |
| `organizing-committee.html` | Text character stagger, scroll reveals, 3D card tilt, idle glow |
| `links.html` | Floating orbs, magnetic buttons, ripple effects, border glow pulse |
| `locations.html` | Full redesign: floating orbs, geometric shapes, particle dots, text stagger |

### PAGES LEFT UNTOUCHED (per user request):
- `index.html` — restored from checkpoint backup
- `leaderboard.html` — restored to original minimal iframe page

### SHARED COMPONENT ENHANCED:
- `persev-navbar.js` — `data-anime-hooked` duplicate guard, enhanced menu open/close timeline, navbar entrance animation, logo idle pulse. Safe to use on any page (index, leaderboard, etc.) without conflicts.

---

# Transition Enhancement TODO

- [x] 1. Add new atmospheric elements (butterflies, fireflies, petals, light rays, dust motes)
- [x] 2. Implement depth-layer parallax system (far/mid/near)
- [x] 3. Rework exit transitions for "perspective change" feel (camera rotation)
- [x] 4. Rework page entrances for perspective arrival
- [ ] 5. Test all page transitions

### Elements Added:
| Element | Count | Layer | Modes |
|---------|-------|-------|-------|
| Butterflies | 7 (sky/gallery/assembly) / 3 (others) | mid | sky, gallery, assembly |
| Fireflies | 18 (cosmos/portal/signal) / 10 (others) | near | all |
| Petals | 10 (sky/gallery/assembly) / 5 (others) | mid | gallery, assembly, sky |
| Light Rays | 4 (sky/cosmos) / 2 (others) | far | sky, cosmos |
| Dust Motes | 25 | near | all |

### Changes Made to `gsap-transitions.js`:
1. **CSS**: Added styles for `.persev-transition-layer-far/mid/near`, butterflies, fireflies, petals, rays, dust
2. **`createOverlay()`**: Created 3 depth layers, distributed elements across them, added SVG butterflies with wing paths
3. **`animateOverlayForMode()`**: Added parallax camera rotation to shell + all 3 layers, animated new elements per mode
4. **`playExitTransition()`**: Page now rotates away with `exitRotY * 1.35`, `exitRotX * 1.2`, `z: -180`, stronger blur/filter
5. **`animateIndex()`**: Depth layers parallax in from below-left, page content arrives with `rotationY: -14`, `rotationX: 3`
6. **`animateLeaderboard()`**: Depth layers parallax in from above, page content arrives with `rotationY: -14`, `rotationX: -3`

### Perspective Change Goals:
- Exit: page rotates away in 3D space like turning your head
- Overlay: environment stays consistent, moves with parallax
- Enter: page arrives from an angle, not just fading in
- No "loading" feeling — continuous spatial experience
