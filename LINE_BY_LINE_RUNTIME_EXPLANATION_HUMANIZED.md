# Humanized Line-by-Line Runtime Explanation

- Scope: Active server/client runtime files for the rebuilt site.
- Format: line-by-line notes with practical, human-readable explanations.

## persev-compiled/backend/index.js

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `const express = require("express");` | Defines a constant binding for config, module import, or computed value. |
| 2 | `const path = require("path");` | Defines a constant binding for config, module import, or computed value. |
| 3 | `const siteData = require("./data/siteData");` | Defines a constant binding for config, module import, or computed value. |
| 4 | `` | Spacing line to separate blocks and improve readability. |
| 5 | `const app = express();` | Defines a constant binding for config, module import, or computed value. |
| 6 | `const PORT = process.env.PORT &#124;&#124; 3000;` | Defines a constant binding for config, module import, or computed value. |
| 7 | `const frontendDir = path.join(__dirname, "..", "frontend");` | Defines a constant binding for config, module import, or computed value. |
| 8 | `` | Spacing line to separate blocks and improve readability. |
| 9 | `app.use(express.json());` | Registers Express middleware in request-processing order. |
| 10 | `app.use("/public", express.static(path.join(__dirname, "public")));` | Registers Express middleware in request-processing order. |
| 11 | `app.use(express.static(frontendDir, { extensions: ["html"] }));` | Registers Express middleware in request-processing order. |
| 12 | `` | Spacing line to separate blocks and improve readability. |
| 13 | `// In-memory registrations for demo simplicity.` | Comment that documents intent for the following code block. |
| 14 | `const registrations = [];` | Defines a constant binding for config, module import, or computed value. |
| 15 | `` | Spacing line to separate blocks and improve readability. |
| 16 | `app.get("/api/health", (_req, res) => {` | Registers an HTTP GET route handler. |
| 17 | `  res.json({ ok: true, service: "persev-backend" });` | Executable statement used by the server or client runtime. |
| 18 | `});` | Closes the current code block. |
| 19 | `` | Spacing line to separate blocks and improve readability. |
| 20 | `app.get("/api/site", (_req, res) => {` | Registers an HTTP GET route handler. |
| 21 | `  res.json(siteData.site);` | Executable statement used by the server or client runtime. |
| 22 | `});` | Closes the current code block. |
| 23 | `` | Spacing line to separate blocks and improve readability. |
| 24 | `app.get("/api/events", (_req, res) => {` | Registers an HTTP GET route handler. |
| 25 | `  res.json(siteData.events);` | Executable statement used by the server or client runtime. |
| 26 | `});` | Closes the current code block. |
| 27 | `` | Spacing line to separate blocks and improve readability. |
| 28 | `app.get("/api/leaderboard", (_req, res) => {` | Registers an HTTP GET route handler. |
| 29 | `  res.json(siteData.leaderboard);` | Executable statement used by the server or client runtime. |
| 30 | `});` | Closes the current code block. |
| 31 | `` | Spacing line to separate blocks and improve readability. |
| 32 | `app.post("/api/register", (req, res) => {` | Registers an HTTP POST route handler. |
| 33 | `  const { school, eventId, participants } = req.body &#124;&#124; {};` | Defines a constant binding for config, module import, or computed value. |
| 34 | `` | Spacing line to separate blocks and improve readability. |
| 35 | `  if (!school &#124;&#124; !eventId &#124;&#124; !Array.isArray(participants) &#124;&#124; participants.length === 0) {` | Starts a conditional branch based on current runtime state. |
| 36 | `    return res.status(400).json({` | Returns a value or exits this function early. |
| 37 | `      error: "school, eventId, and at least one participant are required"` | Executable statement used by the server or client runtime. |
| 38 | `    });` | Closes the current code block. |
| 39 | `  }` | Closes the current code block. |
| 40 | `` | Spacing line to separate blocks and improve readability. |
| 41 | `  const event = siteData.events.find((item) => item.id === eventId);` | Defines a constant binding for config, module import, or computed value. |
| 42 | `  if (!event) {` | Starts a conditional branch based on current runtime state. |
| 43 | `    return res.status(404).json({ error: "event not found" });` | Returns a value or exits this function early. |
| 44 | `  }` | Closes the current code block. |
| 45 | `` | Spacing line to separate blocks and improve readability. |
| 46 | `  const saved = {` | Defines a constant binding for config, module import, or computed value. |
| 47 | `    id: \`reg-${registrations.length + 1}\`,` | Executable statement used by the server or client runtime. |
| 48 | `    school,` | Executable statement used by the server or client runtime. |
| 49 | `    eventId,` | Executable statement used by the server or client runtime. |
| 50 | `    participants,` | Executable statement used by the server or client runtime. |
| 51 | `    createdAt: new Date().toISOString()` | Executable statement used by the server or client runtime. |
| 52 | `  };` | Closes the current code block. |
| 53 | `` | Spacing line to separate blocks and improve readability. |
| 54 | `  registrations.push(saved);` | Executable statement used by the server or client runtime. |
| 55 | `  return res.status(201).json(saved);` | Returns a value or exits this function early. |
| 56 | `});` | Closes the current code block. |
| 57 | `` | Spacing line to separate blocks and improve readability. |
| 58 | `app.get("/api/registrations", (_req, res) => {` | Registers an HTTP GET route handler. |
| 59 | `  res.json(registrations);` | Executable statement used by the server or client runtime. |
| 60 | `});` | Closes the current code block. |
| 61 | `` | Spacing line to separate blocks and improve readability. |
| 62 | `app.get("/", (_req, res) => {` | Registers an HTTP GET route handler. |
| 63 | `  res.sendFile(path.join(frontendDir, "index.html"));` | Executable statement used by the server or client runtime. |
| 64 | `});` | Closes the current code block. |
| 65 | `` | Spacing line to separate blocks and improve readability. |
| 66 | `const startServer = (port) => {` | Defines a constant binding for config, module import, or computed value. |
| 67 | `  const server = app.listen(port, () => {` | Defines a constant binding for config, module import, or computed value. |
| 68 | `    console.log(\`Persev backend running on http://localhost:${port}\`);` | Executable statement used by the server or client runtime. |
| 69 | `  });` | Closes the current code block. |
| 70 | `` | Spacing line to separate blocks and improve readability. |
| 71 | `  server.on("error", (err) => {` | Arrow-function expression used as a concise callback/helper. |
| 72 | `    if (err.code === "EADDRINUSE") {` | Starts a conditional branch based on current runtime state. |
| 73 | `      const nextPort = Number(port) + 1;` | Defines a constant binding for config, module import, or computed value. |
| 74 | `      console.log(\`Port ${port} is busy, retrying on ${nextPort}...\`);` | Executable statement used by the server or client runtime. |
| 75 | `      startServer(nextPort);` | Executable statement used by the server or client runtime. |
| 76 | `      return;` | Returns a value or exits this function early. |
| 77 | `    }` | Closes the current code block. |
| 78 | `` | Spacing line to separate blocks and improve readability. |
| 79 | `    console.error("Failed to start server:", err);` | Executable statement used by the server or client runtime. |
| 80 | `    process.exit(1);` | Executable statement used by the server or client runtime. |
| 81 | `  });` | Closes the current code block. |
| 82 | `};` | Closes the current code block. |
| 83 | `` | Spacing line to separate blocks and improve readability. |
| 84 | `startServer(PORT);` | Executable statement used by the server or client runtime. |
| 85 | `` | Spacing line to separate blocks and improve readability. |
| 86 | `` | Spacing line to separate blocks and improve readability. |
| 87 | `` | Spacing line to separate blocks and improve readability. |
| 88 | `` | Spacing line to separate blocks and improve readability. |

## persev-compiled/backend/data/siteData.js

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `const PLACEHOLDER_MEDIA = "/public/placeholder.svg"; // Placeholder media from user request.` | Defines a constant binding for config, module import, or computed value. |
| 2 | `` | Spacing line to separate blocks and improve readability. |
| 3 | `const site = {` | Defines a constant binding for config, module import, or computed value. |
| 4 | `  title: "Perseverantia 2025",` | Executable statement used by the server or client runtime. |
| 5 | `  subtitle: "Simplified hardcoded backend",` | Executable statement used by the server or client runtime. |
| 6 | `  description: "A minimal backend rebuild with readable and maintainable structure.",` | Executable statement used by the server or client runtime. |
| 7 | `  heroImage: PLACEHOLDER_MEDIA,` | Executable statement used by the server or client runtime. |
| 8 | `  heroVideo: PLACEHOLDER_MEDIA` | Executable statement used by the server or client runtime. |
| 9 | `};` | Closes the current code block. |
| 10 | `` | Spacing line to separate blocks and improve readability. |
| 11 | `const events = [` | Defines a constant binding for config, module import, or computed value. |
| 12 | `  {` | Opens a new code block scope. |
| 13 | `    id: "admeta",` | Executable statement used by the server or client runtime. |
| 14 | `    name: "Admeta",` | Executable statement used by the server or client runtime. |
| 15 | `    category: "Literary",` | Executable statement used by the server or client runtime. |
| 16 | `    description: "Debate event focused on originality and perspective.",` | Executable statement used by the server or client runtime. |
| 17 | `    logo: PLACEHOLDER_MEDIA,` | Executable statement used by the server or client runtime. |
| 18 | `    eventHeadPhoto: PLACEHOLDER_MEDIA` | Executable statement used by the server or client runtime. |
| 19 | `  },` | Closes the current code block. |
| 20 | `  {` | Opens a new code block scope. |
| 21 | `    id: "codeferno",` | Executable statement used by the server or client runtime. |
| 22 | `    name: "Codeferno",` | Executable statement used by the server or client runtime. |
| 23 | `    category: "Tech",` | Executable statement used by the server or client runtime. |
| 24 | `    description: "Timed coding challenge with algorithmic problems.",` | Executable statement used by the server or client runtime. |
| 25 | `    logo: PLACEHOLDER_MEDIA,` | Executable statement used by the server or client runtime. |
| 26 | `    eventHeadPhoto: PLACEHOLDER_MEDIA` | Executable statement used by the server or client runtime. |
| 27 | `  },` | Closes the current code block. |
| 28 | `  {` | Opens a new code block scope. |
| 29 | `    id: "gratia",` | Executable statement used by the server or client runtime. |
| 30 | `    name: "Gratia",` | Executable statement used by the server or client runtime. |
| 31 | `    category: "Performing Arts",` | Executable statement used by the server or client runtime. |
| 32 | `    description: "Dance competition blending tradition and creativity.",` | Executable statement used by the server or client runtime. |
| 33 | `    logo: PLACEHOLDER_MEDIA,` | Executable statement used by the server or client runtime. |
| 34 | `    eventHeadPhoto: PLACEHOLDER_MEDIA` | Executable statement used by the server or client runtime. |
| 35 | `  },` | Closes the current code block. |
| 36 | `  {` | Opens a new code block scope. |
| 37 | `    id: "football",` | Executable statement used by the server or client runtime. |
| 38 | `    name: "Football",` | Executable statement used by the server or client runtime. |
| 39 | `    category: "Sports",` | Executable statement used by the server or client runtime. |
| 40 | `    description: "High-intensity interschool football face-off.",` | Executable statement used by the server or client runtime. |
| 41 | `    logo: PLACEHOLDER_MEDIA,` | Executable statement used by the server or client runtime. |
| 42 | `    eventHeadPhoto: PLACEHOLDER_MEDIA` | Executable statement used by the server or client runtime. |
| 43 | `  }` | Closes the current code block. |
| 44 | `];` | Executable statement used by the server or client runtime. |
| 45 | `` | Spacing line to separate blocks and improve readability. |
| 46 | `const leaderboard = {` | Defines a constant binding for config, module import, or computed value. |
| 47 | `  eventEnded: true,` | Executable statement used by the server or client runtime. |
| 48 | `  schools: [` | Executable statement used by the server or client runtime. |
| 49 | `    { name: "Bombay Scottish", points: 240 },` | Opens a new code block scope. |
| 50 | `    { name: "Delhi Public School", points: 210 },` | Opens a new code block scope. |
| 51 | `    { name: "St. Xavier's High School", points: 195 }` | Opens a new code block scope. |
| 52 | `  ]` | Executable statement used by the server or client runtime. |
| 53 | `};` | Closes the current code block. |
| 54 | `` | Spacing line to separate blocks and improve readability. |
| 55 | `module.exports = {` | Exports this module API so other files can import and use it. |
| 56 | `  site,` | Executable statement used by the server or client runtime. |
| 57 | `  events,` | Executable statement used by the server or client runtime. |
| 58 | `  leaderboard` | Executable statement used by the server or client runtime. |
| 59 | `};` | Closes the current code block. |

## persev-compiled/frontend/index.html

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `<!doctype html>` | HTML markup that contributes structure, metadata, or visible content. |
| 2 | `<html lang=en>` | HTML markup that contributes structure, metadata, or visible content. |
| 3 | `<head>` | HTML markup that contributes structure, metadata, or visible content. |
| 4 | `<meta charset=UTF-8>` | HTML markup that contributes structure, metadata, or visible content. |
| 5 | `<meta name=viewport content="width=device-width,initial-scale=1">` | HTML markup that contributes structure, metadata, or visible content. |
| 6 | `<meta name=description content="Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | HTML markup that contributes structure, metadata, or visible content. |
| 7 | `<link rel=icon type=image/png href="https://bss-perseverantia.github.io/assets/persev.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 8 | `<meta name=msapplication-TileImage content="https://bss-perseverantia.github.io/assets/persev.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 9 | `<meta property=og:site_name content=Perseverantia>` | HTML markup that contributes structure, metadata, or visible content. |
| 10 | `<meta property=og:title content="Perseverantia, 2025">` | HTML markup that contributes structure, metadata, or visible content. |
| 11 | `<meta property=og:description content="Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | HTML markup that contributes structure, metadata, or visible content. |
| 12 | `<meta property=og:image content="https://bss-perseverantia.github.io/assets/persev2.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 13 | `<meta property=og:type content=website>` | HTML markup that contributes structure, metadata, or visible content. |
| 14 | `<meta property=og:image:type content=image/jpeg>` | HTML markup that contributes structure, metadata, or visible content. |
| 15 | `<meta property=og:image:width content=300>` | HTML markup that contributes structure, metadata, or visible content. |
| 16 | `<meta property=og:image:height content=300>` | HTML markup that contributes structure, metadata, or visible content. |
| 17 | `<meta property=og:url content="https://bss-perseverantia.github.io/" >` | HTML markup that contributes structure, metadata, or visible content. |
| 18 | `<meta name="twitter:card" content="summary_large_image">` | HTML markup that contributes structure, metadata, or visible content. |
| 19 | `<meta name=twitter:title content=Perseverantia>` | HTML markup that contributes structure, metadata, or visible content. |
| 20 | `<meta name=twitter:description content="Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | HTML markup that contributes structure, metadata, or visible content. |
| 21 | `<meta name=twitter:image content="https://bss-perseverantia.github.io/assets/persev2.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 22 | `<meta name=twitter:url content="https://bss-perseverantia.github.io/" >` | HTML markup that contributes structure, metadata, or visible content. |
| 23 | `<meta name="keywords" content="` | HTML markup that contributes structure, metadata, or visible content. |
| 24 | `Perseverantia,` | Executable statement used by the server or client runtime. |
| 25 | `Perseverantia 2025,` | Executable statement used by the server or client runtime. |
| 26 | `Perseverantia Bombay Scottish,` | Executable statement used by the server or client runtime. |
| 27 | `Bombay Scottish School Mahim,` | Executable statement used by the server or client runtime. |
| 28 | `Bombay Scottish fest,` | Executable statement used by the server or client runtime. |
| 29 | `Persev,` | Executable statement used by the server or client runtime. |
| 30 | `Persev 2025,` | Executable statement used by the server or client runtime. |
| 31 | `Bombay Scottish interschool festival,` | Executable statement used by the server or client runtime. |
| 32 | `Scottish Mahim events,` | Executable statement used by the server or client runtime. |
| 33 | `Perseverantia events,` | Executable statement used by the server or client runtime. |
| 34 | `Perseverantia competitions,` | Executable statement used by the server or client runtime. |
| 35 | `Perseverantia fest Mumbai` | Executable statement used by the server or client runtime. |
| 36 | `">` | Executable statement used by the server or client runtime. |
| 37 | `<link rel="canonical" href="https://bss-perseverantia.github.io/">` | HTML markup that contributes structure, metadata, or visible content. |
| 38 | `<script type="application/ld+json">` | HTML markup that contributes structure, metadata, or visible content. |
| 39 | `{` | Opens a new code block scope. |
| 40 | ` "@context": "https://schema.org",` | Executable statement used by the server or client runtime. |
| 41 | ` "@type": "Event",` | Executable statement used by the server or client runtime. |
| 42 | ` "name": "Perseverantia 2025",` | Executable statement used by the server or client runtime. |
| 43 | ` "description": "Perseverantia is the annual inter-school festival of Bombay Scottish School Mahim.",` | Executable statement used by the server or client runtime. |
| 44 | ` "url": "https://bss-perseverantia.github.io/",` | Executable statement used by the server or client runtime. |
| 45 | `  "startDate": "2025-10-03T07:00:00+05:30",` | Executable statement used by the server or client runtime. |
| 46 | `  "endDate": "2025-10-05T11:00:00+05:30",` | Executable statement used by the server or client runtime. |
| 47 | `  "location": {` | Executable statement used by the server or client runtime. |
| 48 | `        "@type": "Place",` | Executable statement used by the server or client runtime. |
| 49 | `        "name": "Bombay Scottish School, Mahim",` | Executable statement used by the server or client runtime. |
| 50 | `        "address": {` | Executable statement used by the server or client runtime. |
| 51 | `          "@type": "PostalAddress",` | Executable statement used by the server or client runtime. |
| 52 | `          "streetAddress": "153 Swatantryaveer Savarkar Rd",` | Executable statement used by the server or client runtime. |
| 53 | `          "addressLocality": "Mahim West",` | Executable statement used by the server or client runtime. |
| 54 | `          "postalCode": "400016",` | Executable statement used by the server or client runtime. |
| 55 | `          "addressRegion": "MH",` | Executable statement used by the server or client runtime. |
| 56 | `          "addressCountry": "IN"` | Executable statement used by the server or client runtime. |
| 57 | `        }` | Closes the current code block. |
| 58 | `      },` | Closes the current code block. |
| 59 | ` "organizer": {` | Executable statement used by the server or client runtime. |
| 60 | `   "@type": "Organization",` | Executable statement used by the server or client runtime. |
| 61 | `   "name": "Bombay Scottish School Mahim",` | Executable statement used by the server or client runtime. |
| 62 | `   "url":"https://bombayscottishmahim.in/"` | Executable statement used by the server or client runtime. |
| 63 | ` },` | Closes the current code block. |
| 64 | ` "eventStatus": "https://schema.org/EventScheduled"` | Executable statement used by the server or client runtime. |
| 65 | `}` | Closes the current code block. |
| 66 | `</script>` | HTML markup that contributes structure, metadata, or visible content. |
| 67 | `<title>Perseverantia</title>` | HTML markup that contributes structure, metadata, or visible content. |
| 68 | `<link rel=preload href=/static/style.min.css as=style onload='this.rel="stylesheet"'>` | HTML markup that contributes structure, metadata, or visible content. |
| 69 | `<noscript><link rel=stylesheet href=/static/style.min.css></noscript>` | HTML markup that contributes structure, metadata, or visible content. |
| 70 | `<style>@font-face{font-family:Mestizo;src:url(/assets/MestizoFont.ttf);font-display:swap}#loading-screen.fade-out{opacity:0;pointer-events:none}.animate-slide-in-top{animation:slideInFromTop 1s ease-out .3s both}.animate-fade-in-up{animation:fadeInUp 1s ease-out .6s both}.animate-border-glow{animation:borderGlow 3s ease-in-out infinite alternate}.animate-fade-in-scale-1{animation:fadeInScale .6s ease-out .9s both}.animate-fade-in-scale-2{animation:fadeInScale .6s ease-out 1.1s both}.animate-fade-in-scale-3{animation:fadeInScale .6s ease-out 1.3s both}.animate-fade-in-scale-4{animation:fadeInScale .6s ease-out 1.5s both}.animate-slide-in-bottom{animation:slideInFromBottom 1s ease-out 1.2s both}.glowing-digit{animation:digitPulse 2s ease-in-out infinite;text-shadow:0 0 15px rgba(190,142,48,.6)}@keyframes slideInFromTop{0%{opacity:0;transform:translateY(-50px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}@keyframes slideInFromBottom{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}@keyframes borderGlow{0%{box-shadow:0 0 20px rgba(190,142,48,.3)}100%{box-shadow:0 0 40px rgba(190,142,48,.8),0 0 60px rgba(190,142,48,.4)}}@keyframes digitPulse{0%,100%{text-shadow:0 0 15px rgba(190,142,48,.6);transform:scale(1)}50%{text-shadow:0 0 25px rgba(190,142,48,.9),0 0 35px rgba(190,142,48,.5);transform:scale(1.02)}}.countdown-digit:hover .glowing-digit{animation-duration:.5s;text-shadow:0 0 30px #be8e30,0 0 50px rgba(190,142,48,.6)}.countdown-container{animation:fadeInScale 1.5s ease-out;transform-origin:center}@keyframes fadeInScale{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}.countdown-digit{animation:pulseGlow 2s ease-in-out infinite;transition:all .3s ease}@keyframes pulseGlow{0%,100%{text-shadow:0 0 10px rgba(190,142,48,.5)}50%{text-shadow:0 0 20px rgba(190,142,48,.8),0 0 30px rgba(190,142,48,.3)}}.countdown-digit:hover{transform:scale(1.1);text-shadow:0 0 25px #be8e30}.countdown-border{position:relative;overflow:hidden}.countdown-border::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;background:linear-gradient(45deg,#be8e30,gold,#be8e30,gold);background-size:400% 400%;border-radius:34px;z-index:-1;animation:gradientShift 3s ease infinite}@keyframes gradientShift{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}.countdown-title{animation:slideInFromTop 1s ease-out .5s both}@keyframes slideInFromTop{0%{opacity:0;transform:translateY(-30px)}100%{opacity:1;transform:translateY(0)}}.event-date{animation:slideInFromBottom 1s ease-out 1s both}@keyframes slideInFromBottom{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}.animate-navbar{animation:slideInFromTop .8s ease-out}.animate-nav-buttons{animation:fadeInUp 1s ease-out .3s both}.animate-about-title{animation:slideInFromLeft .8s ease-out .2s both}.animate-about-text-1{animation:fadeInUp .8s ease-out .4s both}.animate-about-text-2{animation:fadeInUp .8s ease-out .6s both}.animate-about-text-3{animation:fadeInUp .8s ease-out .8s both}.animate-about-buttons{animation:slideInFromBottom .8s ease-out 1s both}.animate-about-image{animation:slideInFromRight .8s ease-out .5s both}.animate-follow-section{animation:slideInFromLeft .8s ease-out .3s both}.animate-contact-section{animation:slideInFromRight .8s ease-out .3s both}.animate-footer{animation:fadeInUp .8s ease-out .2s both}@keyframes slideInFromLeft{0%{opacity:0;transform:translateX(-50px)}100%{opacity:1;transform:translateX(0)}}@keyframes slideInFromRight{0%{opacity:0;transform:translateX(50px)}100%{opacity:1;transform:translateX(0)}}.hover-lift{transition:all .3s ease}.hover-lift:hover{transform:translateY(-5px);box-shadow:0 10px 25px rgba(190,142,48,.3)}.hover-glow{transition:all .3s ease}.hover-glow:hover{text-shadow:0 0 15px rgba(190,142,48,.8);transform:scale(1.02)}.text-reveal{animation:textReveal .8s ease-out both}@keyframes textReveal{0%{opacity:0;transform:translateY(20px);filter:blur(5px)}100%{opacity:1;transform:translateY(0);filter:blur(0px)}}.fade-in-section{opacity:0;transform:translateY(30px);transition:all .8s ease-out}.fade-in-section.visible{opacity:1;transform:translateY(0)}.slide-in-left{opacity:0;transform:translateX(-50px);transition:all .8s ease-out}.slide-in-left.visible{opacity:1;transform:translateX(0)}.slide-in-right{opacity:0;transform:translateX(50px);transition:all .8s ease-out}.slide-in-right.visible{opacity:1;transform:translateX(0)}</style>` | HTML markup that contributes structure, metadata, or visible content. |
| 71 | `<script>const queryString=window.location.search,urlParams=new URLSearchParams(queryString);var day=0,month=0,year=0;async function a(){await fetch("/config.json").then((t=>t.json())).then((t=>{const e=t.website;day=e.countdown.day,month=e.countdown.month,year=e.countdown.year;for(let t=0;t<e.navbar.links.length;t++)document.getElementById("desktop-nav").innerHTML+=\`<a href="${e.navbar.links[t].linkto}" class="hover:text-blue-200">${e.navbar.links[t].name}</a>\`,document.getElementById("mobile-menu").innerHTML+=\`<a href="${e.navbar.links[t].linkto}" class="block py-2 text-lg hover:text-blue-200">${e.navbar.links[t].name}</a>\`;document.getElementById("nav-title").textContent=e.navbar.title,document.getElementById("tb1").textContent=e.about.tb1,document.getElementById("tbg").textContent=e.about.tbg,document.getElementById("tb2").innerHTML=e.about.tb2;const n=document.getElementById("button1");n.textContent=e.about.button1.name,n.href=e.about.button1.link;const o=document.getElementById("button2");o.textContent=e.about.button2.name,o.href=e.about.button2.link,document.getElementById("about-img").src=e.about.photo;const a=document.getElementById("main-video");a&&(a.src=e["main-video"]&#124;&#124;e.mainVideo),document.getElementById("contact-numbers").textContent=e.contact.mobileNos;const c=document.getElementById("contact-email");c.href="mailto:"+e.contact.email,c.textContent=e.contact.email})).then((()=>{const t=document.getElementById("loading-screen");setTimeout((()=>{t.classList.add("fade-out"),setTimeout((()=>t.remove()),600)}),2e3)})).catch((t=>{console.error("Failed to load /config",t);const e=document.getElementById("loading-screen");setTimeout((()=>{e.classList.add("fade-out"),setTimeout((()=>e.remove()),600)}),1e3)}))}a()</script>` | Performs an HTTP request to load external or API data. |
| 72 | `</head>` | HTML markup that contributes structure, metadata, or visible content. |
| 73 | `<body class="bg-gray-100 text-gray-800">` | HTML markup that contributes structure, metadata, or visible content. |
| 74 | `<div id=loading-screen style="position:fixed;inset:0;background:linear-gradient(135deg,#0a0f2c,#1a2949);z-index:9999;display:flex;align-items:center;justify-content:center;transition:opacity .6s ease">` | HTML markup that contributes structure, metadata, or visible content. |
| 75 | `<video id=loading-video autoplay muted loop playsinline style="width:150px;height:150px;object-fit:contain;filter:drop-shadow(0 0 20px rgba(190, 142, 48, .7));border-radius:12px">` | HTML markup that contributes structure, metadata, or visible content. |
| 76 | `<source src=/assets/load.mp4 type=video/mp4>` | HTML markup that contributes structure, metadata, or visible content. |
| 77 | `Your browser does not support the video tag.` | Executable statement used by the server or client runtime. |
| 78 | `</video>` | HTML markup that contributes structure, metadata, or visible content. |
| 79 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 80 | `<nav class="text-white animate-navbar" style=background:#081032>` | HTML markup that contributes structure, metadata, or visible content. |
| 81 | `<div class="container mx-auto px-4 py-4 flex justify-between items-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 82 | `<div class="text-2xl hover-glow" style=font-family:Mestizo id=nav-title>` | HTML markup that contributes structure, metadata, or visible content. |
| 83 | `Perseverantia` | Executable statement used by the server or client runtime. |
| 84 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 85 | `<div class="hidden md:flex space-x-6 text-lg" id=desktop-nav>` | HTML markup that contributes structure, metadata, or visible content. |
| 86 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 87 | `<div class=md:hidden>` | HTML markup that contributes structure, metadata, or visible content. |
| 88 | `<button id=menu-toggle class=focus:outline-none aria-label=menu>` | HTML markup that contributes structure, metadata, or visible content. |
| 89 | `<svg class="w-6 h-6" fill=none stroke=currentColor stroke-width=2 viewBox="0 0 24 24" stroke-linecap=round stroke-linejoin=round>` | HTML markup that contributes structure, metadata, or visible content. |
| 90 | `<path d="M4 6h16M4 12h16M4 18h16"/>` | HTML markup that contributes structure, metadata, or visible content. |
| 91 | `</svg>` | HTML markup that contributes structure, metadata, or visible content. |
| 92 | `</button>` | HTML markup that contributes structure, metadata, or visible content. |
| 93 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 94 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 95 | `<div id=mobile-menu class="md:hidden hidden opacity-0 scale-y-90 -translate-y-4 transform transition-all duration-500 ease-out origin-top px-4 pb-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 96 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 97 | `</nav>` | HTML markup that contributes structure, metadata, or visible content. |
| 98 | `<header class=relative style="background:linear-gradient(90deg,#0d122c 0,#131d3f 100%)">` | HTML markup that contributes structure, metadata, or visible content. |
| 99 | `<div class="relative pt-6 flex justify-center z-10">` | HTML markup that contributes structure, metadata, or visible content. |
| 100 | `<video autoplay muted playsinline class="max-w-md w-full shadow-[0_0_20px_rgba(255,255,255,0.1)] h-auto object-contain z-10" id=main-video style=mix-blend-mode:lighten;border-radius:20px>` | HTML markup that contributes structure, metadata, or visible content. |
| 101 | `<source src=/assets/bannerv2.mp4 type=video/mp4>` | HTML markup that contributes structure, metadata, or visible content. |
| 102 | `Your browser does not support the video tag.` | Executable statement used by the server or client runtime. |
| 103 | `</video>` | HTML markup that contributes structure, metadata, or visible content. |
| 104 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 105 | `<div class="relative py-8 flex justify-center z-10 animate-nav-buttons">` | HTML markup that contributes structure, metadata, or visible content. |
| 106 | `<div class="flex flex-col sm:flex-row gap-4 sm:gap-8 px-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 107 | `<a href=/leaderboard class="text-white bg-[#081032] mb-4 py-3 px-6 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2 text-center font-semibold text-base sm:text-lg hover-lift whitespace-nowrap">` | HTML markup that contributes structure, metadata, or visible content. |
| 108 | `Leaderboard` | Executable statement used by the server or client runtime. |
| 109 | `</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 110 | `<a href="/assets/handbook.pdf" class="text-white bg-[#081032] py-3 px-6 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2 text-center font-semibold text-base sm:text-lg hover-lift">` | HTML markup that contributes structure, metadata, or visible content. |
| 111 | `Handbook` | Executable statement used by the server or client runtime. |
| 112 | `</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 113 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 114 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 115 | `<section class="text-white py-8 mx-8">` | HTML markup that contributes structure, metadata, or visible content. |
| 116 | `<div class="container mx-auto text-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 117 | `<h2 class="text-5xl countdown-title animate-slide-in-top" style=font-family:Mestizo>` | HTML markup that contributes structure, metadata, or visible content. |
| 118 | `Event has ended!` | Executable statement used by the server or client runtime. |
| 119 | `</h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 120 | `<div class="countdown-container countdown-border animate-fade-in-up animate-border-glow mt-8 max-w-4xl mx-auto text-center text-white border-8 border-[#BE8E30] rounded-[30px] px-4 py-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 121 | `<div class="grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-6 text-5xl sm:text-6xl md:text-7xl font-bold">` | HTML markup that contributes structure, metadata, or visible content. |
| 122 | `<div class="countdown-digit animate-fade-in-scale-1">` | HTML markup that contributes structure, metadata, or visible content. |
| 123 | `<span id=d class=glowing-digit>00</span><br>` | HTML markup that contributes structure, metadata, or visible content. |
| 124 | `<div class="mt-2 text-base sm:text-lg md:text-xl font-medium">` | HTML markup that contributes structure, metadata, or visible content. |
| 125 | `Days` | Executable statement used by the server or client runtime. |
| 126 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 127 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 128 | `<div class="countdown-digit animate-fade-in-scale-2">` | HTML markup that contributes structure, metadata, or visible content. |
| 129 | `<span id=h class=glowing-digit>00</span><br>` | HTML markup that contributes structure, metadata, or visible content. |
| 130 | `<div class="mt-2 text-base sm:text-lg md:text-xl font-medium">` | HTML markup that contributes structure, metadata, or visible content. |
| 131 | `Hours` | Executable statement used by the server or client runtime. |
| 132 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 133 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 134 | `<div class="countdown-digit animate-fade-in-scale-3">` | HTML markup that contributes structure, metadata, or visible content. |
| 135 | `<span id=m class=glowing-digit>00</span>` | HTML markup that contributes structure, metadata, or visible content. |
| 136 | `<div class="mt-2 text-base sm:text-lg md:text-xl font-medium">` | HTML markup that contributes structure, metadata, or visible content. |
| 137 | `Minutes` | Executable statement used by the server or client runtime. |
| 138 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 139 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 140 | `<div class="countdown-digit animate-fade-in-scale-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 141 | `<span id=s class=glowing-digit>00</span>` | HTML markup that contributes structure, metadata, or visible content. |
| 142 | `<div class="mt-2 text-base sm:text-lg md:text-xl font-medium">` | HTML markup that contributes structure, metadata, or visible content. |
| 143 | `Seconds` | Executable statement used by the server or client runtime. |
| 144 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 145 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 146 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 147 | `<p class="text-xl sm:text-2xl md:text-3xl mt-6 event-date animate-slide-in-bottom">` | HTML markup that contributes structure, metadata, or visible content. |
| 148 | `3rd October,2025 @ 7:00 a.m.` | Executable statement used by the server or client runtime. |
| 149 | `</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 150 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 151 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 152 | `</section>` | HTML markup that contributes structure, metadata, or visible content. |
| 153 | `</header>` | HTML markup that contributes structure, metadata, or visible content. |
| 154 | `<section class="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">` | HTML markup that contributes structure, metadata, or visible content. |
| 155 | `<div class="text-white p-8 md:p-12 flex flex-col justify-between h-full" style="background:linear-gradient(90deg,#0d122c 0,#131d3f 100%)">` | HTML markup that contributes structure, metadata, or visible content. |
| 156 | `<div id=about-section>` | HTML markup that contributes structure, metadata, or visible content. |
| 157 | `<h2 class="text-4xl mb-4 animate-about-title hover-glow" style=font-family:Mestizo>About</h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 158 | `<p class="text-lg mb-4 animate-about-text-1 text-reveal" id=tb1>` | HTML markup that contributes structure, metadata, or visible content. |
| 159 | `Bombay Scottish School, Mahim has returned with the third edition of its Annual Inter-School Fest - Perseverantia! Perseverantia aims to sensitise youth towards societal issues and conflicts through various performing, tech, literary and fine-art events.` | Executable statement used by the server or client runtime. |
| 160 | `</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 161 | `<p class="text-lg text-yellow-400 font-semibold mb-4 animate-about-text-2 hover-glow" id=tbg>` | HTML markup that contributes structure, metadata, or visible content. |
| 162 | `Our theme for the year was INCLUSIVITY.` | Executable statement used by the server or client runtime. |
| 163 | `</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 164 | `<p class="text-lg mb-4 animate-about-text-3 text-reveal" id=tb2>` | HTML markup that contributes structure, metadata, or visible content. |
| 165 | `Whether you are a Gaming Geek or a Football Freak, a Fashionista or a Filmmaker, a Dancer or a Debater, a Writer or the Wolf of Wall Street, we have something for everyone.` | Executable statement used by the server or client runtime. |
| 166 | `</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 167 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 168 | `<div class="mt-8 flex flex-col gap-y-6 animate-about-buttons">` | HTML markup that contributes structure, metadata, or visible content. |
| 169 | `<a href=/events id=button1 class="text-white bg-[#081032] lg:mx-52 py-3 px-6 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2 text-center hover-lift">` | HTML markup that contributes structure, metadata, or visible content. |
| 170 | `View Events` | Executable statement used by the server or client runtime. |
| 171 | `</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 172 | `<a href=/organizing-committee id=button2 class="text-white bg-[#081032] lg:mx-44 py-3 px-6 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2 text-center hover-lift">` | HTML markup that contributes structure, metadata, or visible content. |
| 173 | `Organizing Committee` | Executable statement used by the server or client runtime. |
| 174 | `</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 175 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 176 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 177 | `<div class="bg-[#081032] relative w-full h-64 md:h-auto min-h-[500px] animate-about-image">` | HTML markup that contributes structure, metadata, or visible content. |
| 178 | `<img id=about-img src=https://static.wixstatic.com/media/447894_0bcb6114fe254d76a4301c97bad20409~mv2.jpg/v1/crop/x_266,y_21,w_1082,h_1045/fill/w_408,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202024-06-10%20at%2019_40_edite.jpg alt="About Perseverantia" class="w-full h-full object-cover object-center rounded-none hover-lift">` | HTML markup that contributes structure, metadata, or visible content. |
| 179 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 180 | `</section>` | HTML markup that contributes structure, metadata, or visible content. |
| 181 | `<section class="grid grid-cols-1 md:grid-cols-2">` | HTML markup that contributes structure, metadata, or visible content. |
| 182 | `<div class="p-10 text-white flex flex-col justify-center items-center animate-follow-section" style="background:linear-gradient(90deg,#0d122c 0,#131d3f 100%)">` | HTML markup that contributes structure, metadata, or visible content. |
| 183 | `<h2 class="text-4xl mb-4 mt-4 text-center hover-glow" style=font-family:Mestizo>` | HTML markup that contributes structure, metadata, or visible content. |
| 184 | `Follow Us` | Executable statement used by the server or client runtime. |
| 185 | `</h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 186 | `<p class="text-lg text-center mb-6 max-w-md text-reveal" id=register-content>` | HTML markup that contributes structure, metadata, or visible content. |
| 187 | `Stay connected with us on Instagram for the latest updates, exclusive behind-the-scenes content, event highlights, and all things Perseverantia!` | Executable statement used by the server or client runtime. |
| 188 | `</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 189 | `<a href=https://www.instagram.com/bss.perseverantia target=_blank class="gradient-outline-button hover-lift">` | HTML markup that contributes structure, metadata, or visible content. |
| 190 | `<svg xmlns=http://www.w3.org/2000/svg class=icon fill=white viewBox="0 0 24 24">` | HTML markup that contributes structure, metadata, or visible content. |
| 191 | `<path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>` | HTML markup that contributes structure, metadata, or visible content. |
| 192 | `</svg>` | HTML markup that contributes structure, metadata, or visible content. |
| 193 | `Follow on Instagram` | Executable statement used by the server or client runtime. |
| 194 | `</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 195 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 196 | `<div class="text-white p-10 flex flex-col justify-center animate-contact-section" style="background:linear-gradient(270deg,#0d122c 0,#131d3f 100%)">` | HTML markup that contributes structure, metadata, or visible content. |
| 197 | `<h2 class="text-4xl mb-4 hover-glow" style=font-family:Mestizo>Contact Us</h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 198 | `<p class="text-lg mb-2 text-reveal" id=contact-numbers>` | HTML markup that contributes structure, metadata, or visible content. |
| 199 | `📞 +91 84258 98552 / +91 77380 99474 / +91 70211 38415` | Executable statement used by the server or client runtime. |
| 200 | `</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 201 | `<p class="text-lg mb-2 break-words text-reveal">` | HTML markup that contributes structure, metadata, or visible content. |
| 202 | `✉️` | Executable statement used by the server or client runtime. |
| 203 | `<a id=contact-email href=mailto:perseverantia.mahim@bombayscottish.in class="text-blue-400 hover:underline break-all hover-glow">` | HTML markup that contributes structure, metadata, or visible content. |
| 204 | `perseverantia.mahim@bombayscottish.in` | Executable statement used by the server or client runtime. |
| 205 | `</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 206 | `</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 207 | `<p class="text-lg text-reveal">` | HTML markup that contributes structure, metadata, or visible content. |
| 208 | `📍 153, Swatantryaveer Savarkar Road,<br>` | Executable statement used by the server or client runtime. |
| 209 | `Mahim West, Mumbai, Maharashtra - 400016` | Executable statement used by the server or client runtime. |
| 210 | `</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 211 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 212 | `</section>` | HTML markup that contributes structure, metadata, or visible content. |
| 213 | `<footer class="bg-blue-900 text-white py-6 animate-footer">` | HTML markup that contributes structure, metadata, or visible content. |
| 214 | `<div class="container mx-auto text-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 215 | `<p class=hover-glow>&copy; 2025 Bombay Scottish School, Mahim. All rights reserved.</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 216 | `</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 217 | `</footer>` | HTML markup that contributes structure, metadata, or visible content. |
| 218 | `<script>const toggleBtn=document.getElementById("menu-toggle"),mobileMenu=document.getElementById("mobile-menu");let menuOpen=!1;toggleBtn.addEventListener("click",(()=>{menuOpen=!menuOpen,menuOpen?(mobileMenu.classList.remove("hidden"),mobileMenu.offsetWidth,mobileMenu.classList.remove("opacity-0","scale-y-90","-translate-y-4"),mobileMenu.classList.add("opacity-100","scale-y-100","translate-y-0")):(mobileMenu.classList.remove("opacity-100","scale-y-100","translate-y-0"),mobileMenu.classList.add("opacity-0","scale-y-90","-translate-y-4"),setTimeout((()=>{menuOpen&#124;&#124;mobileMenu.classList.add("hidden")}),500))}))</script>` | Subscribes to a browser event and runs callback logic when triggered. |
| 219 | `<script>let d=document.getElementById("d"),h=document.getElementById("h"),m=document.getElementById("m"),s=document.getElementById("s");setInterval((()=>{new Date(year,month-1,day,7,0,0)>new Date&&(d.innerHTML=(""+Math.floor((new Date(year,month-1,day,7,0,0)-new Date)/864e5)).padStart(2,"0"),h.innerHTML=(""+Math.floor((new Date(year,month-1,day,7,0,0).getTime()-Date.now())/36e5%24)).padStart(2,"0"),m.innerHTML=(""+Math.floor((new Date(year,month-1,day,7,0,0).getTime()-Date.now())/6e4%60)).padStart(2,"0"),s.innerHTML=(""+Math.floor((new Date(year,month-1,day,7,0,0).getTime()-Date.now())/1e3%60)).padStart(2,"0"))}),1e3)</script>` | Finds a DOM node so it can be read or updated. |
| 220 | `<script>const updateDaysRemaining=()=>{const e=new Date(year,month-1,day,7,0,0),t=new Date;if(e>t){const n=Math.floor((e-t)/864e5);document.getElementById("days-remaining").textContent=\`${n} Days Remaining\`}else document.getElementById("days-remaining").textContent="Event has started!"};setInterval(updateDaysRemaining,36e5)</script>` | Finds a DOM node so it can be read or updated. |
| 221 | `<script>const observerOptions={threshold:.1,rootMargin:"0px 0px -50px 0px"},observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("visible")}))}),observerOptions);document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".fade-in-section, .slide-in-left, .slide-in-right").forEach((e=>observer.observe(e)))}));const navTitle=document.getElementById("nav-title");navTitle&&(navTitle.addEventListener("mouseenter",(()=>{navTitle.style.animation="digitPulse 0.6s ease-in-out"})),navTitle.addEventListener("animationend",(()=>{navTitle.style.animation=""}))),document.querySelectorAll('a[class*="hover-lift"]').forEach((e=>{e.addEventListener("click",(function(e){const t=document.createElement("span"),n=this.getBoundingClientRect(),i=Math.max(n.width,n.height),s=e.clientX-n.left-i/2,l=e.clientY-n.top-i/2;t.style.width=t.style.height=i+"px",t.style.left=s+"px",t.style.top=l+"px",t.classList.add("ripple"),this.appendChild(t),setTimeout((()=>{t.remove()}),600)}))}))</script>` | Subscribes to a browser event and runs callback logic when triggered. |
| 222 | `<style>.ripple{position:absolute;border-radius:50%;background:rgba(190,142,48,.6);transform:scale(0);animation:ripple-animation .6s linear;pointer-events:none}@keyframes ripple-animation{to{transform:scale(4);opacity:0}}</style>` | HTML markup that contributes structure, metadata, or visible content. |
| 223 | `</body>` | HTML markup that contributes structure, metadata, or visible content. |
| 224 | `</html>` | HTML markup that contributes structure, metadata, or visible content. |

## persev-compiled/frontend/events.html

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `<!DOCTYPE html>` | HTML markup that contributes structure, metadata, or visible content. |
| 2 | `<html lang="en">` | HTML markup that contributes structure, metadata, or visible content. |
| 3 | `` | Spacing line to separate blocks and improve readability. |
| 4 | `<head>` | HTML markup that contributes structure, metadata, or visible content. |
| 5 | `  <meta charset="UTF-8" />` | HTML markup that contributes structure, metadata, or visible content. |
| 6 | `  <meta name="viewport" content="width=device-width, initial-scale=1.0" />` | HTML markup that contributes structure, metadata, or visible content. |
| 7 | `  <meta name="description" content="Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | HTML markup that contributes structure, metadata, or visible content. |
| 8 | `  <link rel="icon" type="image/png" href="https://bss-perseverantia.github.io/assets/persevlogo.png" />` | HTML markup that contributes structure, metadata, or visible content. |
| 9 | `  <meta name="msapplication-TileImage" content="https://bss-perseverantia.github.io/assets/persev.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 10 | `  <meta property="og:site_name" content="Perseverantia">` | HTML markup that contributes structure, metadata, or visible content. |
| 11 | `  <meta property="og:title" content="Perseverantia, 2025 - Events">` | HTML markup that contributes structure, metadata, or visible content. |
| 12 | `  <meta property="og:description"` | HTML markup that contributes structure, metadata, or visible content. |
| 13 | `    content="Explore the exciting events of Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | Executable statement used by the server or client runtime. |
| 14 | `  <meta property="og:image" content="https://bss-perseverantia.github.io/assets/persev2.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 15 | `  <meta property="og:type" content="website" />` | HTML markup that contributes structure, metadata, or visible content. |
| 16 | `  <meta property="og:image:type" content="image/jpeg">` | HTML markup that contributes structure, metadata, or visible content. |
| 17 | `  <meta property="og:image:width" content="300">` | HTML markup that contributes structure, metadata, or visible content. |
| 18 | `  <meta property="og:image:height" content="300">` | HTML markup that contributes structure, metadata, or visible content. |
| 19 | `  <meta property="og:url" content="https://bss-perseverantia.github.io/events">` | HTML markup that contributes structure, metadata, or visible content. |
| 20 | `  <meta name="twitter:card" content="https://bss-perseverantia.github.io/assets/banner3.jpeg" />` | HTML markup that contributes structure, metadata, or visible content. |
| 21 | `  <meta name="twitter:title" content="Perseverantia Events" />` | HTML markup that contributes structure, metadata, or visible content. |
| 22 | `  <meta name="twitter:description"` | HTML markup that contributes structure, metadata, or visible content. |
| 23 | `    content="Explore the exciting events of Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim." />` | Executable statement used by the server or client runtime. |
| 24 | `  <meta name="twitter:image" content="https://bss-perseverantia.github.io/persev2.png" />` | HTML markup that contributes structure, metadata, or visible content. |
| 25 | `  <meta name="twitter:url" content="https://bss-perseverantia.github.io/events" />` | HTML markup that contributes structure, metadata, or visible content. |
| 26 | `  <meta name="keywords" content="` | HTML markup that contributes structure, metadata, or visible content. |
| 27 | `Perseverantia,` | Executable statement used by the server or client runtime. |
| 28 | `Perseverantia 2025,` | Executable statement used by the server or client runtime. |
| 29 | `Perseverantia events,` | Executable statement used by the server or client runtime. |
| 30 | `Perseverantia fest,` | Executable statement used by the server or client runtime. |
| 31 | `Bombay Scottish School Mahim,` | Executable statement used by the server or client runtime. |
| 32 | `Bombay Scottish interschool festival,` | Executable statement used by the server or client runtime. |
| 33 | `Scottish Mahim fest,` | Executable statement used by the server or client runtime. |
| 34 | `Persev 2025,` | Executable statement used by the server or client runtime. |
| 35 | `Persev events,` | Executable statement used by the server or client runtime. |
| 36 | `Perseverantia Bombay Scottish School,` | Executable statement used by the server or client runtime. |
| 37 | `` | Spacing line to separate blocks and improve readability. |
| 38 | `ADMETA debate event,` | Executable statement used by the server or client runtime. |
| 39 | `ARTEM art event,` | Executable statement used by the server or client runtime. |
| 40 | `CARMEN poetry event,` | Executable statement used by the server or client runtime. |
| 41 | `FABULA filmmaking event,` | Executable statement used by the server or client runtime. |
| 42 | `FORTUNA stock market simulation,` | Executable statement used by the server or client runtime. |
| 43 | `CODEFERNO coding competition,` | Executable statement used by the server or client runtime. |
| 44 | `GUSTATIO cooking competition,` | Executable statement used by the server or client runtime. |
| 45 | `MAHIM16 mystery event,` | Executable statement used by the server or client runtime. |
| 46 | `Adventurium advertising event,` | Executable statement used by the server or client runtime. |
| 47 | `GRATIA dance competition,` | Executable statement used by the server or client runtime. |
| 48 | `PANACHE fashion show,` | Executable statement used by the server or client runtime. |
| 49 | `SYMPHONIA music band competition,` | Executable statement used by the server or client runtime. |
| 50 | `MR AND MS PERSEVERANTIA personality contest,` | Executable statement used by the server or client runtime. |
| 51 | `EXPLORARE treasure hunt,` | Executable statement used by the server or client runtime. |
| 52 | `MONOPOLIUM business simulation,` | Executable statement used by the server or client runtime. |
| 53 | `Football Perseverantia,` | Executable statement used by the server or client runtime. |
| 54 | `Basketball Perseverantia,` | Executable statement used by the server or client runtime. |
| 55 | `Gully Cricket Perseverantia,` | Executable statement used by the server or client runtime. |
| 56 | `Table Tennis Perseverantia,` | Executable statement used by the server or client runtime. |
| 57 | `Tug of War Perseverantia,` | Executable statement used by the server or client runtime. |
| 58 | `E Sports Perseverantia,` | Executable statement used by the server or client runtime. |
| 59 | `` | Spacing line to separate blocks and improve readability. |
| 60 | `Dia Jain,` | Executable statement used by the server or client runtime. |
| 61 | `Nicole Lee,` | Executable statement used by the server or client runtime. |
| 62 | `Joalene Kotian,` | Executable statement used by the server or client runtime. |
| 63 | `Mira Bhimbat,` | Executable statement used by the server or client runtime. |
| 64 | `Rayhan Bhatia,` | Executable statement used by the server or client runtime. |
| 65 | `Avighna Chhatrapati,` | Executable statement used by the server or client runtime. |
| 66 | `Prajna Raykathi,` | Executable statement used by the server or client runtime. |
| 67 | `Shreya Sangal,` | Executable statement used by the server or client runtime. |
| 68 | `Gaurika Aggarwal,` | Executable statement used by the server or client runtime. |
| 69 | `Samaya Satyani,` | Executable statement used by the server or client runtime. |
| 70 | `Ishita Agarwal,` | Executable statement used by the server or client runtime. |
| 71 | `Jasleen Kaur,` | Executable statement used by the server or client runtime. |
| 72 | `Ashriya Agarwal,` | Executable statement used by the server or client runtime. |
| 73 | `Bhriti Khanna,` | Executable statement used by the server or client runtime. |
| 74 | `Sharan Dhanu,` | Executable statement used by the server or client runtime. |
| 75 | `Ved Chopde,` | Executable statement used by the server or client runtime. |
| 76 | `Rehaan Bhat,` | Executable statement used by the server or client runtime. |
| 77 | `Veda Sriranjan,` | Executable statement used by the server or client runtime. |
| 78 | `Arrmaan Anand,` | Executable statement used by the server or client runtime. |
| 79 | `Anmol Kampani,` | Executable statement used by the server or client runtime. |
| 80 | `Agastya Katiyar,` | Executable statement used by the server or client runtime. |
| 81 | `Ruuhan Malde` | Executable statement used by the server or client runtime. |
| 82 | `">` | Executable statement used by the server or client runtime. |
| 83 | `` | Spacing line to separate blocks and improve readability. |
| 84 | `<script type="application/ld+json">` | HTML markup that contributes structure, metadata, or visible content. |
| 85 | `{` | Opens a new code block scope. |
| 86 | ` "@context": "https://schema.org",` | Executable statement used by the server or client runtime. |
| 87 | ` "@type": "EventSeries",` | Executable statement used by the server or client runtime. |
| 88 | ` "name": "Perseverantia 2025 Events",` | Executable statement used by the server or client runtime. |
| 89 | ` "url": "https://bss-perseverantia.github.io/events",` | Executable statement used by the server or client runtime. |
| 90 | ` "organizer": {` | Executable statement used by the server or client runtime. |
| 91 | `   "@type": "Organization",` | Executable statement used by the server or client runtime. |
| 92 | `   "name": "Bombay Scottish School Mahim",` | Executable statement used by the server or client runtime. |
| 93 | `   "event": [` | Executable statement used by the server or client runtime. |
| 94 | `` | Spacing line to separate blocks and improve readability. |
| 95 | `     {"@type":"Event","name":"ADMETA","performer":{"@type":"Person","name":"Dia Jain"}},` | Opens a new code block scope. |
| 96 | `     {"@type":"Event","name":"ARTEM","performer":{"@type":"Person","name":"Nicole Lee"}},` | Opens a new code block scope. |
| 97 | `     {"@type":"Event","name":"CARMEN","performer":{"@type":"Person","name":"Joalene Kotian"}},` | Opens a new code block scope. |
| 98 | `     {"@type":"Event","name":"FABULA","performer":{"@type":"Person","name":"Mira Bhimbat"}},` | Opens a new code block scope. |
| 99 | `     {"@type":"Event","name":"FORTUNA","performer":{"@type":"Person","name":"Rayhan Bhatia"}},` | Opens a new code block scope. |
| 100 | `     {"@type":"Event","name":"CODEFERNO","performer":{"@type":"Person","name":"Avighna Chhatrapati"}},` | Opens a new code block scope. |
| 101 | `     {"@type":"Event","name":"GUSTATIO","performer":{"@type":"Person","name":"Prajna Raykathi"}},` | Opens a new code block scope. |
| 102 | `     {"@type":"Event","name":"MAHIM16","performer":{"@type":"Person","name":"Shreya Sangal"}},` | Opens a new code block scope. |
| 103 | `     {"@type":"Event","name":"Adventurium","performer":{"@type":"Person","name":"Gaurika Aggarwal"}},` | Opens a new code block scope. |
| 104 | `     {"@type":"Event","name":"GRATIA","performer":{"@type":"Person","name":"Samaya Satyani"}},` | Opens a new code block scope. |
| 105 | `     {"@type":"Event","name":"PANACHE","performer":{"@type":"Person","name":"Ishita Agarwal"}},` | Opens a new code block scope. |
| 106 | `     {"@type":"Event","name":"SYMPHONIA","performer":{"@type":"Person","name":"Jasleen Kaur"}},` | Opens a new code block scope. |
| 107 | `     {"@type":"Event","name":"MR AND MS PERSEVERANTIA","performer":{"@type":"Person","name":"Ashriya Agarwal"}},` | Opens a new code block scope. |
| 108 | `     {"@type":"Event","name":"EXPLORARE","performer":[` | Opens a new code block scope. |
| 109 | `        {"@type":"Person","name":"Bhriti Khanna"},` | Opens a new code block scope. |
| 110 | `        {"@type":"Person","name":"Sharan Dhanu"}` | Opens a new code block scope. |
| 111 | `     ]},` | Executable statement used by the server or client runtime. |
| 112 | `     {"@type":"Event","name":"MONOPOLIUM","performer":{"@type":"Person","name":"Ved Chopde"}},` | Opens a new code block scope. |
| 113 | `     {"@type":"Event","name":"FOOTBALL","performer":{"@type":"Person","name":"Rehaan Bhat"}},` | Opens a new code block scope. |
| 114 | `     {"@type":"Event","name":"BASKETBALL","performer":{"@type":"Person","name":"Veda Sriranjan"}},` | Opens a new code block scope. |
| 115 | `     {"@type":"Event","name":"GULLY CRICKET","performer":{"@type":"Person","name":"Arrmaan Anand"}},` | Opens a new code block scope. |
| 116 | `     {"@type":"Event","name":"TABLE TENNIS","performer":{"@type":"Person","name":"Anmol Kampani"}},` | Opens a new code block scope. |
| 117 | `     {"@type":"Event","name":"TUG OF WAR","performer":{"@type":"Person","name":"Agastya Katiyar"}},` | Opens a new code block scope. |
| 118 | `     {"@type":"Event","name":"E SPORTS","performer":{"@type":"Person","name":"Ruuhan Malde"}}` | Opens a new code block scope. |
| 119 | `` | Spacing line to separate blocks and improve readability. |
| 120 | `   ]` | Executable statement used by the server or client runtime. |
| 121 | ` }` | Closes the current code block. |
| 122 | `}` | Closes the current code block. |
| 123 | `</script>` | HTML markup that contributes structure, metadata, or visible content. |
| 124 | `  <title>Perseverantia Events</title>` | HTML markup that contributes structure, metadata, or visible content. |
| 125 | `` | Spacing line to separate blocks and improve readability. |
| 126 | `  <!-- Preload stylesheets for critical rendering, then apply with onload -->` | HTML markup that contributes structure, metadata, or visible content. |
| 127 | `  <link rel="preload" href="/static/style2.css" as="style" onload="this.rel='stylesheet'">` | HTML markup that contributes structure, metadata, or visible content. |
| 128 | `  <noscript><link rel="stylesheet" href="/static/style2.css"></noscript>` | HTML markup that contributes structure, metadata, or visible content. |
| 129 | `  <link rel="preload" href="/static/style_events.css" as="style" onload="this.rel='stylesheet'">` | HTML markup that contributes structure, metadata, or visible content. |
| 130 | `  <noscript><link rel="stylesheet" href="/static/style_events.css"></noscript>` | HTML markup that contributes structure, metadata, or visible content. |
| 131 | `` | Spacing line to separate blocks and improve readability. |
| 132 | `  <!-- Inline font-face with swap to reduce render-blocking and font load delay -->` | HTML markup that contributes structure, metadata, or visible content. |
| 133 | `  <style>` | HTML markup that contributes structure, metadata, or visible content. |
| 134 | `    @font-face {` | Executable statement used by the server or client runtime. |
| 135 | `      font-family: 'Mestizo';` | Executable statement used by the server or client runtime. |
| 136 | `      src: url('/assets/MestizoFont.woff2') format('woff2'),` | Executable statement used by the server or client runtime. |
| 137 | `           url('/assets/MestizoFont.woff') format('woff'),` | Executable statement used by the server or client runtime. |
| 138 | `           url('/assets/MestizoFont.ttf') format('truetype');` | Executable statement used by the server or client runtime. |
| 139 | `      font-weight: normal;` | Executable statement used by the server or client runtime. |
| 140 | `      font-style: normal;` | Executable statement used by the server or client runtime. |
| 141 | `      font-display: swap;` | Executable statement used by the server or client runtime. |
| 142 | `    }` | Closes the current code block. |
| 143 | `  </style>` | HTML markup that contributes structure, metadata, or visible content. |
| 144 | `</head>` | HTML markup that contributes structure, metadata, or visible content. |
| 145 | `` | Spacing line to separate blocks and improve readability. |
| 146 | `<body class="min-h-screen">` | HTML markup that contributes structure, metadata, or visible content. |
| 147 | `` | Spacing line to separate blocks and improve readability. |
| 148 | `  <div id="loading-screen">` | HTML markup that contributes structure, metadata, or visible content. |
| 149 | `    <video id="loading-video" autoplay muted loop playsinline style="` | HTML markup that contributes structure, metadata, or visible content. |
| 150 | `        width: 150px;` | Executable statement used by the server or client runtime. |
| 151 | `        height: 150px;` | Executable statement used by the server or client runtime. |
| 152 | `        object-fit: contain;` | Executable statement used by the server or client runtime. |
| 153 | `        filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7));` | Executable statement used by the server or client runtime. |
| 154 | `        border-radius: 12px;` | Executable statement used by the server or client runtime. |
| 155 | `      ">` | Executable statement used by the server or client runtime. |
| 156 | `      <source src="/assets/load.mp4" type="video/mp4" />` | HTML markup that contributes structure, metadata, or visible content. |
| 157 | `      Your browser does not support the video tag.` | Executable statement used by the server or client runtime. |
| 158 | `    </video>` | HTML markup that contributes structure, metadata, or visible content. |
| 159 | `  </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 160 | `` | Spacing line to separate blocks and improve readability. |
| 161 | `  <nav class="text-white" style="background: #081032">` | HTML markup that contributes structure, metadata, or visible content. |
| 162 | `    <div class="container mx-auto px-4 py-4 flex justify-between items-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 163 | `      <div class="flex items-center space-x-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 164 | `        <img src="https://bss-perseverantia.github.io/assets/persevlogo.png" alt="Logo" class="h-10 w-auto md:hidden" />` | HTML markup that contributes structure, metadata, or visible content. |
| 165 | `        <span class="text-2xl" style="font-family: Mestizo" id="nav-title">` | HTML markup that contributes structure, metadata, or visible content. |
| 166 | `          Perseverantia` | Executable statement used by the server or client runtime. |
| 167 | `        </span>` | HTML markup that contributes structure, metadata, or visible content. |
| 168 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 169 | `` | Spacing line to separate blocks and improve readability. |
| 170 | `      <div class="hidden md:flex space-x-6 text-lg" id="desktop-nav">` | HTML markup that contributes structure, metadata, or visible content. |
| 171 | `        <a href="/" class="hover:text-blue-200">Home</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 172 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 173 | `` | Spacing line to separate blocks and improve readability. |
| 174 | `` | Spacing line to separate blocks and improve readability. |
| 175 | `      <div class="md:hidden">` | HTML markup that contributes structure, metadata, or visible content. |
| 176 | `        <button id="menu-toggle" class="focus:outline-none" aria-label="menu">` | HTML markup that contributes structure, metadata, or visible content. |
| 177 | `          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"` | HTML markup that contributes structure, metadata, or visible content. |
| 178 | `            stroke-linecap="round" stroke-linejoin="round">` | Executable statement used by the server or client runtime. |
| 179 | `            <path d="M4 6h16M4 12h16M4 18h16" />` | HTML markup that contributes structure, metadata, or visible content. |
| 180 | `          </svg>` | HTML markup that contributes structure, metadata, or visible content. |
| 181 | `        </button>` | HTML markup that contributes structure, metadata, or visible content. |
| 182 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 183 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 184 | `` | Spacing line to separate blocks and improve readability. |
| 185 | `` | Spacing line to separate blocks and improve readability. |
| 186 | `    <div id="mobile-menu" class="md:hidden hidden opacity-0 scale-y-90 -translate-y-4 transform transition-all duration-500 ease-out origin-top px-4 pb-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 187 | `      <a href="/" class="block py-2 text-lg hover:text-blue-200">Home</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 188 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 189 | `  </nav>` | HTML markup that contributes structure, metadata, or visible content. |
| 190 | `` | Spacing line to separate blocks and improve readability. |
| 191 | `  <main class="max-w-7xl mx-auto px-4 sm:px-6 py-10">` | HTML markup that contributes structure, metadata, or visible content. |
| 192 | `    <!-- Background Decorations -->` | HTML markup that contributes structure, metadata, or visible content. |
| 193 | `    <div class="bg-decoration"></div>` | HTML markup that contributes structure, metadata, or visible content. |
| 194 | `    ` | Spacing line to separate blocks and improve readability. |
| 195 | `    <header class="text-center mb-12">` | HTML markup that contributes structure, metadata, or visible content. |
| 196 | `      <h1 class="text-3xl sm:text-5xl text-[#BE8E30] mb-4 section-title fade-in-up">Our Events</h1>` | HTML markup that contributes structure, metadata, or visible content. |
| 197 | `      <p class="text-gray-300 text-base sm:text-lg fade-in-up">Explore the thrilling line-up of competitions at Perseverantia '25.` | HTML markup that contributes structure, metadata, or visible content. |
| 198 | `      </p>` | HTML markup that contributes structure, metadata, or visible content. |
| 199 | `    </header>` | HTML markup that contributes structure, metadata, or visible content. |
| 200 | `` | Spacing line to separate blocks and improve readability. |
| 201 | `    <div id="eventsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">` | HTML markup that contributes structure, metadata, or visible content. |
| 202 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 203 | `  </main>` | HTML markup that contributes structure, metadata, or visible content. |
| 204 | `` | Spacing line to separate blocks and improve readability. |
| 205 | `  <!-- Footer matching organizing-committee.html -->` | HTML markup that contributes structure, metadata, or visible content. |
| 206 | `  <footer class="bg-gradient-to-r from-[#081032] to-[#0c1542] text-white py-8 border-t border-[#BE8E30]/30">` | HTML markup that contributes structure, metadata, or visible content. |
| 207 | `    <div class="container mx-auto text-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 208 | `      <div class="mb-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 209 | `        <h3 class="text-xl" style="font-family: Mestizo; color: #BE8E30;">Perseverantia 2025</h3>` | HTML markup that contributes structure, metadata, or visible content. |
| 210 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 211 | `      <p class="text-gray-300 mb-2">&copy; 2025 Bombay Scottish School, Mahim. All rights reserved.</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 212 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 213 | `  </footer>` | HTML markup that contributes structure, metadata, or visible content. |
| 214 | `` | Spacing line to separate blocks and improve readability. |
| 215 | `  <div id="modal" class="fixed inset-0 bg-[#08103280] flex items-center justify-center z-50 hidden overflow-y-auto p-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 216 | `    <div` | HTML markup that contributes structure, metadata, or visible content. |
| 217 | `      class="bg-[#0C1542] border-4 border-[#BE8E30] rounded-xl relative flex flex-col lg:flex-row gap-6 sm:gap-8 shadow-2xl modal-content"` | Executable statement used by the server or client runtime. |
| 218 | `      style="box-shadow: 0 0 25px 5px #BE8E30;">` | Executable statement used by the server or client runtime. |
| 219 | `      <button id="closeModal"` | HTML markup that contributes structure, metadata, or visible content. |
| 220 | `        class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 transition z-10"` | Executable statement used by the server or client runtime. |
| 221 | `        aria-label="Close modal">` | Executable statement used by the server or client runtime. |
| 222 | `        &times;` | Executable statement used by the server or client runtime. |
| 223 | `      </button>` | HTML markup that contributes structure, metadata, or visible content. |
| 224 | `` | Spacing line to separate blocks and improve readability. |
| 225 | `      <div class="flex-1 p-6 sm:p-8 pt-12 sm:pt-12">` | HTML markup that contributes structure, metadata, or visible content. |
| 226 | `        <h2 class="text-2xl sm:text-4xl text-[#BE8E30] mb-4 sm:mb-6 leading-tight" id="modalTitle"></h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 227 | `        <p id="modalDesc" class="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line mb-6"></p>` | HTML markup that contributes structure, metadata, or visible content. |
| 228 | `        <a id="ropLinkBtn" href="#" target="_blank"` | HTML markup that contributes structure, metadata, or visible content. |
| 229 | `          class="inline-block text-white bg-[#081032] py-2.5 px-6 sm:py-3 sm:px-8 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2">` | Executable statement used by the server or client runtime. |
| 230 | `          View ROP` | Executable statement used by the server or client runtime. |
| 231 | `        </a>` | HTML markup that contributes structure, metadata, or visible content. |
| 232 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 233 | `` | Spacing line to separate blocks and improve readability. |
| 234 | `      <div class="flex-shrink-0 w-full lg:w-1/3 rounded-lg overflow-hidden shadow-lg p-6 lg:mt-0">` | HTML markup that contributes structure, metadata, or visible content. |
| 235 | `        <div class="modal-event-head-wrapper">` | HTML markup that contributes structure, metadata, or visible content. |
| 236 | `          <img id="modalImage" src="" alt="Event Head" class="w-full h-full object-cover rounded-lg mb-4 sm:hidden lg:block" />` | HTML markup that contributes structure, metadata, or visible content. |
| 237 | `          <p id="eventHeadName" class="text-[#BE8E30] font-semibold text-lg text-center"></p>` | HTML markup that contributes structure, metadata, or visible content. |
| 238 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 239 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 240 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 241 | `  </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 242 | `` | Spacing line to separate blocks and improve readability. |
| 243 | `  <script src='/static/events.js'></script>` | HTML markup that contributes structure, metadata, or visible content. |
| 244 | `` | Spacing line to separate blocks and improve readability. |
| 245 | `</body>` | HTML markup that contributes structure, metadata, or visible content. |
| 246 | `` | Spacing line to separate blocks and improve readability. |
| 247 | `</html>` | HTML markup that contributes structure, metadata, or visible content. |

## persev-compiled/frontend/leaderboard.html

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `<!doctype html>` | HTML markup that contributes structure, metadata, or visible content. |
| 2 | `<html lang="en">` | HTML markup that contributes structure, metadata, or visible content. |
| 3 | `  <head>` | HTML markup that contributes structure, metadata, or visible content. |
| 4 | `    <meta charset="UTF-8" />` | HTML markup that contributes structure, metadata, or visible content. |
| 5 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>` | HTML markup that contributes structure, metadata, or visible content. |
| 6 | `    <title>Perseverantia 2025 Leaderboard</title>` | HTML markup that contributes structure, metadata, or visible content. |
| 7 | `    <meta name="description" content="Perseverantia 2025 School Leaderboard.">` | HTML markup that contributes structure, metadata, or visible content. |
| 8 | `    <meta name=description content="Leaderboard for Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | HTML markup that contributes structure, metadata, or visible content. |
| 9 | `    <link rel=icon type=image/png href="https://bss-perseverantia.github.io/assets/persev.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 10 | `    <meta name=msapplication-TileImage content="https://bss-perseverantia.github.io/assets/persev.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 11 | `    <meta property=og:site_name content=Perseverantia>` | HTML markup that contributes structure, metadata, or visible content. |
| 12 | `    <meta property=og:title content="Perseverantia, 2025">` | HTML markup that contributes structure, metadata, or visible content. |
| 13 | `    <meta property=og:description content="Leaderboard for Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | HTML markup that contributes structure, metadata, or visible content. |
| 14 | `    <meta property=og:image content="https://bss-perseverantia.github.io/assets/persev2.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 15 | `    <meta property=og:type content=website>` | HTML markup that contributes structure, metadata, or visible content. |
| 16 | `    <meta property=og:image:type content=image/jpeg>` | HTML markup that contributes structure, metadata, or visible content. |
| 17 | `    <meta property=og:image:width content=300>` | HTML markup that contributes structure, metadata, or visible content. |
| 18 | `    <meta property=og:image:height content=300>` | HTML markup that contributes structure, metadata, or visible content. |
| 19 | `    <meta property=og:url content="https://bss-perseverantia.github.io/leaderboard" >` | HTML markup that contributes structure, metadata, or visible content. |
| 20 | `<meta name="twitter:card" content="summary_large_image">` | HTML markup that contributes structure, metadata, or visible content. |
| 21 | `<link rel="canonical" href="https://bss-perseverantia.github.io/leaderboard">` | HTML markup that contributes structure, metadata, or visible content. |
| 22 | `    <meta name=twitter:title content=Perseverantia>` | HTML markup that contributes structure, metadata, or visible content. |
| 23 | `    <meta name=twitter:description content="Leaderboard for Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | HTML markup that contributes structure, metadata, or visible content. |
| 24 | `    <meta name=twitter:image content="https://bss-perseverantia.github.io/assets/persev2.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 25 | `    <meta name=twitter:url content="https://bss-perseverantia.github.io/leaderboard" >` | HTML markup that contributes structure, metadata, or visible content. |
| 26 | `<meta name="keywords" content="` | HTML markup that contributes structure, metadata, or visible content. |
| 27 | `Perseverantia leaderboard,` | Executable statement used by the server or client runtime. |
| 28 | `Perseverantia 2025 leaderboard,` | Executable statement used by the server or client runtime. |
| 29 | `Persev leaderboard,` | Executable statement used by the server or client runtime. |
| 30 | `Bombay Scottish School Mahim leaderboard,` | Executable statement used by the server or client runtime. |
| 31 | `Perseverantia school rankings,` | Executable statement used by the server or client runtime. |
| 32 | `Perseverantia results,` | Executable statement used by the server or client runtime. |
| 33 | `Persev results,` | Executable statement used by the server or client runtime. |
| 34 | `Bombay Scottish fest leaderboard,` | Executable statement used by the server or client runtime. |
| 35 | `Perseverantia standings` | Executable statement used by the server or client runtime. |
| 36 | `">` | Executable statement used by the server or client runtime. |
| 37 | `<script type="application/ld+json">` | HTML markup that contributes structure, metadata, or visible content. |
| 38 | `{` | Opens a new code block scope. |
| 39 | ` "@context": "https://schema.org",` | Executable statement used by the server or client runtime. |
| 40 | ` "@type": "SportsEvent",` | Executable statement used by the server or client runtime. |
| 41 | ` "name": "Perseverantia 2025 Leaderboard",` | Executable statement used by the server or client runtime. |
| 42 | ` "url": "https://bss-perseverantia.github.io/leaderboard",` | Executable statement used by the server or client runtime. |
| 43 | ` "organizer": {` | Executable statement used by the server or client runtime. |
| 44 | `   "@type": "Organization",` | Executable statement used by the server or client runtime. |
| 45 | `   "name": "Bombay Scottish School Mahim"` | Executable statement used by the server or client runtime. |
| 46 | ` }` | Closes the current code block. |
| 47 | `}` | Closes the current code block. |
| 48 | `</script>` | HTML markup that contributes structure, metadata, or visible content. |
| 49 | `    <style>` | HTML markup that contributes structure, metadata, or visible content. |
| 50 | `        @font-face {` | Executable statement used by the server or client runtime. |
| 51 | `          font-family: Mestizo;` | Executable statement used by the server or client runtime. |
| 52 | `          src: url(/static/MestizoFont.ttf);` | Executable statement used by the server or client runtime. |
| 53 | `          font-display: swap;` | Executable statement used by the server or client runtime. |
| 54 | `        }` | Closes the current code block. |
| 55 | `` | Spacing line to separate blocks and improve readability. |
| 56 | `        /* Enhanced Background and Animations */` | Block comment content or boundary. |
| 57 | `        body {` | Executable statement used by the server or client runtime. |
| 58 | `            background: linear-gradient(135deg, #0a0f2c 0%, #1a2949 50%, #0d122c 100%);` | Executable statement used by the server or client runtime. |
| 59 | `            min-height: 100vh;` | Executable statement used by the server or client runtime. |
| 60 | `            position: relative;` | Executable statement used by the server or client runtime. |
| 61 | `            overflow-x: hidden;` | Executable statement used by the server or client runtime. |
| 62 | `            /* Disable WebKit color scheme override */` | Block comment content or boundary. |
| 63 | `            -webkit-color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 64 | `            color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 65 | `        }` | Closes the current code block. |
| 66 | `        ` | Spacing line to separate blocks and improve readability. |
| 67 | `        /* Force dark background for iOS Safari */` | Block comment content or boundary. |
| 68 | `        html {` | Executable statement used by the server or client runtime. |
| 69 | `            background: #0a0f2c !important;` | Executable statement used by the server or client runtime. |
| 70 | `            -webkit-color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 71 | `            color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 72 | `        }` | Closes the current code block. |
| 73 | `        ` | Spacing line to separate blocks and improve readability. |
| 74 | `        /* Prevent iOS from changing colors */` | Block comment content or boundary. |
| 75 | `        * {` | Executable statement used by the server or client runtime. |
| 76 | `            -webkit-color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 77 | `            color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 78 | `        }` | Closes the current code block. |
| 79 | `` | Spacing line to separate blocks and improve readability. |
| 80 | `        /* Floating Background Elements */` | Block comment content or boundary. |
| 81 | `        .bg-decoration {` | Executable statement used by the server or client runtime. |
| 82 | `            position: fixed;` | Executable statement used by the server or client runtime. |
| 83 | `            pointer-events: none;` | Executable statement used by the server or client runtime. |
| 84 | `            z-index: 1;` | Executable statement used by the server or client runtime. |
| 85 | `        }` | Closes the current code block. |
| 86 | `` | Spacing line to separate blocks and improve readability. |
| 87 | `        .bg-decoration::before,` | Executable statement used by the server or client runtime. |
| 88 | `        .bg-decoration::after {` | Executable statement used by the server or client runtime. |
| 89 | `            content: '';` | Executable statement used by the server or client runtime. |
| 90 | `            position: absolute;` | Executable statement used by the server or client runtime. |
| 91 | `            border-radius: 50%;` | Executable statement used by the server or client runtime. |
| 92 | `            background: rgba(190, 142, 48, 0.15);` | Executable statement used by the server or client runtime. |
| 93 | `            animation: float 6s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 94 | `            box-shadow: 0 0 30px rgba(190, 142, 48, 0.2);` | Executable statement used by the server or client runtime. |
| 95 | `        }` | Closes the current code block. |
| 96 | `` | Spacing line to separate blocks and improve readability. |
| 97 | `        .bg-decoration::before {` | Executable statement used by the server or client runtime. |
| 98 | `            width: 200px;` | Executable statement used by the server or client runtime. |
| 99 | `            height: 200px;` | Executable statement used by the server or client runtime. |
| 100 | `            top: 10%;` | Executable statement used by the server or client runtime. |
| 101 | `            left: 80%;` | Executable statement used by the server or client runtime. |
| 102 | `            animation-delay: 0s;` | Executable statement used by the server or client runtime. |
| 103 | `        }` | Closes the current code block. |
| 104 | `` | Spacing line to separate blocks and improve readability. |
| 105 | `        .bg-decoration::after {` | Executable statement used by the server or client runtime. |
| 106 | `            width: 150px;` | Executable statement used by the server or client runtime. |
| 107 | `            height: 150px;` | Executable statement used by the server or client runtime. |
| 108 | `            bottom: 20%;` | Executable statement used by the server or client runtime. |
| 109 | `            left: 10%;` | Executable statement used by the server or client runtime. |
| 110 | `            animation-delay: 3s;` | Executable statement used by the server or client runtime. |
| 111 | `        }` | Closes the current code block. |
| 112 | `` | Spacing line to separate blocks and improve readability. |
| 113 | `        @keyframes float {` | Executable statement used by the server or client runtime. |
| 114 | `            0%, 100% { transform: translateY(0px) rotate(0deg); }` | Executable statement used by the server or client runtime. |
| 115 | `            50% { transform: translateY(-20px) rotate(180deg); }` | Executable statement used by the server or client runtime. |
| 116 | `        }` | Closes the current code block. |
| 117 | `` | Spacing line to separate blocks and improve readability. |
| 118 | `        /* Enhanced Navbar */` | Block comment content or boundary. |
| 119 | `        header {` | Executable statement used by the server or client runtime. |
| 120 | `            position: relative;` | Executable statement used by the server or client runtime. |
| 121 | `            z-index: 100;` | Executable statement used by the server or client runtime. |
| 122 | `        }` | Closes the current code block. |
| 123 | `    </style>` | HTML markup that contributes structure, metadata, or visible content. |
| 124 | `    <link` | HTML markup that contributes structure, metadata, or visible content. |
| 125 | `      href="/static/lbstyle.css"` | Executable statement used by the server or client runtime. |
| 126 | `      rel="stylesheet"` | Executable statement used by the server or client runtime. |
| 127 | `    />` | Executable statement used by the server or client runtime. |
| 128 | `    <script src="/static/confetti.js"></script>` | HTML markup that contributes structure, metadata, or visible content. |
| 129 | `    <link rel="icon" type="image/png" href="/assets/persev.avif" />` | HTML markup that contributes structure, metadata, or visible content. |
| 130 | `    <script>` | HTML markup that contributes structure, metadata, or visible content. |
| 131 | `      var stoptime = false;` | Legacy-scoped variable declaration used by older script patterns. |
| 132 | `      ` | Spacing line to separate blocks and improve readability. |
| 133 | `      const start = () => {` | Defines a constant binding for config, module import, or computed value. |
| 134 | `          setTimeout(function() {` | Executable statement used by the server or client runtime. |
| 135 | `              confetti.start()` | Executable statement used by the server or client runtime. |
| 136 | `          }, 1000); ` | Closes the current code block. |
| 137 | `      };` | Closes the current code block. |
| 138 | `      ` | Spacing line to separate blocks and improve readability. |
| 139 | `` | Spacing line to separate blocks and improve readability. |
| 140 | `      const stop = (t) => {` | Defines a constant binding for config, module import, or computed value. |
| 141 | `          setTimeout(function() {` | Executable statement used by the server or client runtime. |
| 142 | `            ` | Spacing line to separate blocks and improve readability. |
| 143 | `              confetti.stop()` | Executable statement used by the server or client runtime. |
| 144 | `              stoptime=true;` | Executable statement used by the server or client runtime. |
| 145 | `          }, t); ` | Closes the current code block. |
| 146 | `      };` | Closes the current code block. |
| 147 | `      ` | Spacing line to separate blocks and improve readability. |
| 148 | `      ` | Spacing line to separate blocks and improve readability. |
| 149 | `    </script>` | HTML markup that contributes structure, metadata, or visible content. |
| 150 | `    <style>` | HTML markup that contributes structure, metadata, or visible content. |
| 151 | `      /* Enhanced Typography */` | Block comment content or boundary. |
| 152 | `      .section-title {` | Executable statement used by the server or client runtime. |
| 153 | `        background: linear-gradient(45deg, #BE8E30, #FFD700, #BE8E30);` | Executable statement used by the server or client runtime. |
| 154 | `        background-size: 200% 200%;` | Executable statement used by the server or client runtime. |
| 155 | `        -webkit-background-clip: text;` | Executable statement used by the server or client runtime. |
| 156 | `        -webkit-text-fill-color: transparent;` | Executable statement used by the server or client runtime. |
| 157 | `        background-clip: text;` | Executable statement used by the server or client runtime. |
| 158 | `        animation: gradientShift 3s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 159 | `        text-shadow: 0 0 30px rgba(190, 142, 48, 0.5);` | Executable statement used by the server or client runtime. |
| 160 | `      }` | Closes the current code block. |
| 161 | `` | Spacing line to separate blocks and improve readability. |
| 162 | `      @keyframes gradientShift {` | Executable statement used by the server or client runtime. |
| 163 | `        0%, 100% { background-position: 0% 50%; }` | Executable statement used by the server or client runtime. |
| 164 | `        50% { background-position: 100% 50%; }` | Executable statement used by the server or client runtime. |
| 165 | `      }` | Closes the current code block. |
| 166 | `` | Spacing line to separate blocks and improve readability. |
| 167 | `      /* Enhanced Table Styling */` | Block comment content or boundary. |
| 168 | `      .leaderboard-table {` | Executable statement used by the server or client runtime. |
| 169 | `        background: linear-gradient(145deg, #081032 0%, #0c1542 100%);` | Executable statement used by the server or client runtime. |
| 170 | `        border: 2px solid rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 171 | `        border-radius: 20px !important;` | Executable statement used by the server or client runtime. |
| 172 | `        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);` | Executable statement used by the server or client runtime. |
| 173 | `        position: relative;` | Executable statement used by the server or client runtime. |
| 174 | `        overflow: hidden;` | Executable statement used by the server or client runtime. |
| 175 | `        backdrop-filter: blur(10px);` | Executable statement used by the server or client runtime. |
| 176 | `        border-collapse: separate !important;` | Executable statement used by the server or client runtime. |
| 177 | `        border-spacing: 0 !important;` | Executable statement used by the server or client runtime. |
| 178 | `        z-index: 10;` | Executable statement used by the server or client runtime. |
| 179 | `      }` | Closes the current code block. |
| 180 | `` | Spacing line to separate blocks and improve readability. |
| 181 | `      .leaderboard-table thead tr:first-child th:first-child {` | Executable statement used by the server or client runtime. |
| 182 | `        border-top-left-radius: 18px;` | Executable statement used by the server or client runtime. |
| 183 | `      }` | Closes the current code block. |
| 184 | `` | Spacing line to separate blocks and improve readability. |
| 185 | `      .leaderboard-table thead tr:first-child th:last-child {` | Executable statement used by the server or client runtime. |
| 186 | `        border-top-right-radius: 18px;` | Executable statement used by the server or client runtime. |
| 187 | `      }` | Closes the current code block. |
| 188 | `` | Spacing line to separate blocks and improve readability. |
| 189 | `      .leaderboard-table tbody tr:last-child td:first-child {` | Executable statement used by the server or client runtime. |
| 190 | `        border-bottom-left-radius: 18px;` | Executable statement used by the server or client runtime. |
| 191 | `      }` | Closes the current code block. |
| 192 | `` | Spacing line to separate blocks and improve readability. |
| 193 | `      .leaderboard-table tbody tr:last-child td:last-child {` | Executable statement used by the server or client runtime. |
| 194 | `        border-bottom-right-radius: 18px;` | Executable statement used by the server or client runtime. |
| 195 | `      }` | Closes the current code block. |
| 196 | `` | Spacing line to separate blocks and improve readability. |
| 197 | `      .leaderboard-table th,` | Executable statement used by the server or client runtime. |
| 198 | `      .leaderboard-table td {` | Executable statement used by the server or client runtime. |
| 199 | `        border: none !important;` | Executable statement used by the server or client runtime. |
| 200 | `      }` | Closes the current code block. |
| 201 | `` | Spacing line to separate blocks and improve readability. |
| 202 | `      .leaderboard-table::before {` | Executable statement used by the server or client runtime. |
| 203 | `        content: '';` | Executable statement used by the server or client runtime. |
| 204 | `        position: absolute;` | Executable statement used by the server or client runtime. |
| 205 | `        top: 0;` | Executable statement used by the server or client runtime. |
| 206 | `        left: -100%;` | Executable statement used by the server or client runtime. |
| 207 | `        width: 100%;` | Executable statement used by the server or client runtime. |
| 208 | `        height: 100%;` | Executable statement used by the server or client runtime. |
| 209 | `        background: linear-gradient(90deg, transparent, rgba(190, 142, 48, 0.1), transparent);` | Executable statement used by the server or client runtime. |
| 210 | `        transition: left 0.5s;` | Executable statement used by the server or client runtime. |
| 211 | `        border-radius: 18px;` | Executable statement used by the server or client runtime. |
| 212 | `      }` | Closes the current code block. |
| 213 | `` | Spacing line to separate blocks and improve readability. |
| 214 | `      .leaderboard-table:hover::before {` | Executable statement used by the server or client runtime. |
| 215 | `        left: 100%;` | Executable statement used by the server or client runtime. |
| 216 | `      }` | Closes the current code block. |
| 217 | `` | Spacing line to separate blocks and improve readability. |
| 218 | `      .leaderboard-table:hover {` | Executable statement used by the server or client runtime. |
| 219 | `        border-color: #BE8E30;` | Executable statement used by the server or client runtime. |
| 220 | `        box-shadow: ` | Executable statement used by the server or client runtime. |
| 221 | `            0 20px 40px rgba(190, 142, 48, 0.2),` | Executable statement used by the server or client runtime. |
| 222 | `            0 0 30px rgba(190, 142, 48, 0.1);` | Executable statement used by the server or client runtime. |
| 223 | `      }` | Closes the current code block. |
| 224 | `` | Spacing line to separate blocks and improve readability. |
| 225 | `      .fade-move {` | Executable statement used by the server or client runtime. |
| 226 | `        transition:` | Executable statement used by the server or client runtime. |
| 227 | `          transform 0.5s ease,` | Executable statement used by the server or client runtime. |
| 228 | `          opacity 0.5s ease;` | Executable statement used by the server or client runtime. |
| 229 | `      }` | Closes the current code block. |
| 230 | `      .progress-bar {` | Executable statement used by the server or client runtime. |
| 231 | `        transition: width 1s ease-in-out;` | Executable statement used by the server or client runtime. |
| 232 | `      }` | Closes the current code block. |
| 233 | `      #leaderboard-container {` | Executable statement used by the server or client runtime. |
| 234 | `        transition: margin-right 0.3s ease;` | Executable statement used by the server or client runtime. |
| 235 | `      }` | Closes the current code block. |
| 236 | `      ` | Spacing line to separate blocks and improve readability. |
| 237 | `      /* Enhanced Side Panel */` | Block comment content or boundary. |
| 238 | `      .side-panel {` | Executable statement used by the server or client runtime. |
| 239 | `        background: linear-gradient(145deg, #081032 0%, #0c1542 100%);` | Executable statement used by the server or client runtime. |
| 240 | `        border: 2px solid rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 241 | `        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);` | Executable statement used by the server or client runtime. |
| 242 | `        z-index: 150 !important;` | Executable statement used by the server or client runtime. |
| 243 | `      }` | Closes the current code block. |
| 244 | `` | Spacing line to separate blocks and improve readability. |
| 245 | `      .side-panel-header {` | Executable statement used by the server or client runtime. |
| 246 | `        background: linear-gradient(90deg, #081032, #0c1542);` | Executable statement used by the server or client runtime. |
| 247 | `        border-bottom: 2px solid rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 248 | `      }` | Closes the current code block. |
| 249 | `` | Spacing line to separate blocks and improve readability. |
| 250 | `      /* Enhanced Result Container */` | Block comment content or boundary. |
| 251 | `      .result-container {` | Executable statement used by the server or client runtime. |
| 252 | `        background: rgba(255, 255, 255, 0.05);` | Executable statement used by the server or client runtime. |
| 253 | `        border: 2px solid rgba(190, 142, 48, 0.2);` | Executable statement used by the server or client runtime. |
| 254 | `        border-radius: 30px;` | Executable statement used by the server or client runtime. |
| 255 | `        box-shadow: 0 0 30px rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 256 | `        position: relative;` | Executable statement used by the server or client runtime. |
| 257 | `      }` | Closes the current code block. |
| 258 | `` | Spacing line to separate blocks and improve readability. |
| 259 | `      .result-container::before {` | Executable statement used by the server or client runtime. |
| 260 | `        content: '';` | Executable statement used by the server or client runtime. |
| 261 | `        position: absolute;` | Executable statement used by the server or client runtime. |
| 262 | `        top: -10px;` | Executable statement used by the server or client runtime. |
| 263 | `        left: 51%;` | Executable statement used by the server or client runtime. |
| 264 | `        transform: translateX(-50%);` | Executable statement used by the server or client runtime. |
| 265 | `        width: 20px;` | Executable statement used by the server or client runtime. |
| 266 | `        height: 20px;` | Executable statement used by the server or client runtime. |
| 267 | `        background: linear-gradient(45deg, #BE8E30, #FFD700);` | Executable statement used by the server or client runtime. |
| 268 | `        border-radius: 50%;` | Executable statement used by the server or client runtime. |
| 269 | `        border: 2px solid #081032;` | Executable statement used by the server or client runtime. |
| 270 | `      }` | Closes the current code block. |
| 271 | `` | Spacing line to separate blocks and improve readability. |
| 272 | `      /* Enhanced animations from index.html theme */` | Block comment content or boundary. |
| 273 | `      .hover-lift {` | Executable statement used by the server or client runtime. |
| 274 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 275 | `      }` | Closes the current code block. |
| 276 | `      ` | Spacing line to separate blocks and improve readability. |
| 277 | `      .hover-lift:hover {` | Executable statement used by the server or client runtime. |
| 278 | `        transform: translateY(-5px);` | Executable statement used by the server or client runtime. |
| 279 | `        box-shadow: 0 10px 25px rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 280 | `      }` | Closes the current code block. |
| 281 | `      ` | Spacing line to separate blocks and improve readability. |
| 282 | `      .hover-glow {` | Executable statement used by the server or client runtime. |
| 283 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 284 | `      }` | Closes the current code block. |
| 285 | `      ` | Spacing line to separate blocks and improve readability. |
| 286 | `      .hover-glow:hover {` | Executable statement used by the server or client runtime. |
| 287 | `        text-shadow: 0 0 15px rgba(190, 142, 48, 0.8);` | Executable statement used by the server or client runtime. |
| 288 | `        transform: scale(1.02);` | Executable statement used by the server or client runtime. |
| 289 | `      }` | Closes the current code block. |
| 290 | `      ` | Spacing line to separate blocks and improve readability. |
| 291 | `      .text-reveal {` | Executable statement used by the server or client runtime. |
| 292 | `        animation: textReveal 0.8s ease-out both;` | Executable statement used by the server or client runtime. |
| 293 | `      }` | Closes the current code block. |
| 294 | `      ` | Spacing line to separate blocks and improve readability. |
| 295 | `      @keyframes textReveal {` | Executable statement used by the server or client runtime. |
| 296 | `        0% {` | Executable statement used by the server or client runtime. |
| 297 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 298 | `          transform: translateY(20px);` | Executable statement used by the server or client runtime. |
| 299 | `          filter: blur(5px);` | Executable statement used by the server or client runtime. |
| 300 | `        }` | Closes the current code block. |
| 301 | `        100% {` | Executable statement used by the server or client runtime. |
| 302 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 303 | `          transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 304 | `          filter: blur(0px);` | Executable statement used by the server or client runtime. |
| 305 | `        }` | Closes the current code block. |
| 306 | `      }` | Closes the current code block. |
| 307 | `      ` | Spacing line to separate blocks and improve readability. |
| 308 | `      .animate-navbar {` | Executable statement used by the server or client runtime. |
| 309 | `        animation: slideInFromTop 0.8s ease-out;` | Executable statement used by the server or client runtime. |
| 310 | `      }` | Closes the current code block. |
| 311 | `      ` | Spacing line to separate blocks and improve readability. |
| 312 | `      @keyframes slideInFromTop {` | Executable statement used by the server or client runtime. |
| 313 | `        0% {` | Executable statement used by the server or client runtime. |
| 314 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 315 | `          transform: translateY(-30px);` | Executable statement used by the server or client runtime. |
| 316 | `        }` | Closes the current code block. |
| 317 | `        100% {` | Executable statement used by the server or client runtime. |
| 318 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 319 | `          transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 320 | `        }` | Closes the current code block. |
| 321 | `      }` | Closes the current code block. |
| 322 | `      ` | Spacing line to separate blocks and improve readability. |
| 323 | `      .fade-in-section {` | Executable statement used by the server or client runtime. |
| 324 | `        opacity: 0;` | Executable statement used by the server or client runtime. |
| 325 | `        transform: translateY(30px);` | Executable statement used by the server or client runtime. |
| 326 | `        transition: all 0.8s ease-out;` | Executable statement used by the server or client runtime. |
| 327 | `      }` | Closes the current code block. |
| 328 | `      ` | Spacing line to separate blocks and improve readability. |
| 329 | `      .fade-in-section.visible {` | Executable statement used by the server or client runtime. |
| 330 | `        opacity: 1;` | Executable statement used by the server or client runtime. |
| 331 | `        transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 332 | `      }` | Closes the current code block. |
| 333 | `      ` | Spacing line to separate blocks and improve readability. |
| 334 | `      /* Enhanced button styling to match index.html */` | Block comment content or boundary. |
| 335 | `      .theme-button {` | Executable statement used by the server or client runtime. |
| 336 | `        text-decoration: none;` | Executable statement used by the server or client runtime. |
| 337 | `        display: inline-block;` | Executable statement used by the server or client runtime. |
| 338 | `        color: white;` | Executable statement used by the server or client runtime. |
| 339 | `        background: #081032;` | Executable statement used by the server or client runtime. |
| 340 | `        padding: 12px 24px;` | Executable statement used by the server or client runtime. |
| 341 | `        border-radius: 50px;` | Executable statement used by the server or client runtime. |
| 342 | `        border: 4px solid #BE8E30;` | Executable statement used by the server or client runtime. |
| 343 | `        font-weight: 600;` | Executable statement used by the server or client runtime. |
| 344 | `        text-align: center;` | Executable statement used by the server or client runtime. |
| 345 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 346 | `        box-shadow: 0 4px 15px rgba(190, 142, 48, 0.2);` | Executable statement used by the server or client runtime. |
| 347 | `      }` | Closes the current code block. |
| 348 | `      ` | Spacing line to separate blocks and improve readability. |
| 349 | `      .theme-button:hover {` | Executable statement used by the server or client runtime. |
| 350 | `        background: #BE8E30;` | Executable statement used by the server or client runtime. |
| 351 | `        color: #081032;` | Executable statement used by the server or client runtime. |
| 352 | `        box-shadow: 0 8px 25px rgba(190, 142, 48, 0.4);` | Executable statement used by the server or client runtime. |
| 353 | `        transform: translateY(-2px);` | Executable statement used by the server or client runtime. |
| 354 | `      }` | Closes the current code block. |
| 355 | `` | Spacing line to separate blocks and improve readability. |
| 356 | `      /* Scrollbar Styling */` | Block comment content or boundary. |
| 357 | `      ::-webkit-scrollbar {` | Executable statement used by the server or client runtime. |
| 358 | `        width: 12px;` | Executable statement used by the server or client runtime. |
| 359 | `      }` | Closes the current code block. |
| 360 | `` | Spacing line to separate blocks and improve readability. |
| 361 | `      ::-webkit-scrollbar-track {` | Executable statement used by the server or client runtime. |
| 362 | `        background: #081032;` | Executable statement used by the server or client runtime. |
| 363 | `      }` | Closes the current code block. |
| 364 | `` | Spacing line to separate blocks and improve readability. |
| 365 | `      ::-webkit-scrollbar-thumb {` | Executable statement used by the server or client runtime. |
| 366 | `        background: linear-gradient(45deg, #BE8E30, #FFD700);` | Executable statement used by the server or client runtime. |
| 367 | `        border-radius: 6px;` | Executable statement used by the server or client runtime. |
| 368 | `      }` | Closes the current code block. |
| 369 | `` | Spacing line to separate blocks and improve readability. |
| 370 | `      ::-webkit-scrollbar-thumb:hover {` | Executable statement used by the server or client runtime. |
| 371 | `        background: linear-gradient(45deg, #FFD700, #BE8E30);` | Executable statement used by the server or client runtime. |
| 372 | `      }` | Closes the current code block. |
| 373 | `` | Spacing line to separate blocks and improve readability. |
| 374 | `      /* Prevent horizontal overflow while maintaining table layout */` | Block comment content or boundary. |
| 375 | `      .container {` | Executable statement used by the server or client runtime. |
| 376 | `        max-width: 100vw;` | Executable statement used by the server or client runtime. |
| 377 | `        overflow-x: hidden;` | Executable statement used by the server or client runtime. |
| 378 | `      }` | Closes the current code block. |
| 379 | `      ` | Spacing line to separate blocks and improve readability. |
| 380 | `      .overflow-x-auto {` | Executable statement used by the server or client runtime. |
| 381 | `        overflow-x: hidden;` | Executable statement used by the server or client runtime. |
| 382 | `      }` | Closes the current code block. |
| 383 | `` | Spacing line to separate blocks and improve readability. |
| 384 | `      /* Enhanced Mobile Responsiveness */` | Block comment content or boundary. |
| 385 | `      @media (max-width: 768px) {` | Executable statement used by the server or client runtime. |
| 386 | `        .leaderboard-table {` | Executable statement used by the server or client runtime. |
| 387 | `          margin-bottom: 1rem;` | Executable statement used by the server or client runtime. |
| 388 | `        }` | Closes the current code block. |
| 389 | `        ` | Spacing line to separate blocks and improve readability. |
| 390 | `        .section-title {` | Executable statement used by the server or client runtime. |
| 391 | `          font-size: 2rem !important;` | Executable statement used by the server or client runtime. |
| 392 | `        }` | Closes the current code block. |
| 393 | `` | Spacing line to separate blocks and improve readability. |
| 394 | `        .bg-decoration::before,` | Executable statement used by the server or client runtime. |
| 395 | `        .bg-decoration::after {` | Executable statement used by the server or client runtime. |
| 396 | `          display: none;` | Executable statement used by the server or client runtime. |
| 397 | `        }` | Closes the current code block. |
| 398 | `        ` | Spacing line to separate blocks and improve readability. |
| 399 | `        /* On mobile, allow horizontal scroll for the table only */` | Block comment content or boundary. |
| 400 | `        .overflow-x-auto {` | Executable statement used by the server or client runtime. |
| 401 | `          overflow-x: auto;` | Executable statement used by the server or client runtime. |
| 402 | `        }` | Closes the current code block. |
| 403 | `      }` | Closes the current code block. |
| 404 | `` | Spacing line to separate blocks and improve readability. |
| 405 | `      /* Entrance Animations */` | Block comment content or boundary. |
| 406 | `      .fade-in-up {` | Executable statement used by the server or client runtime. |
| 407 | `        opacity: 0;` | Executable statement used by the server or client runtime. |
| 408 | `        transform: translateY(30px);` | Executable statement used by the server or client runtime. |
| 409 | `        animation: fadeInUp 0.8s ease forwards;` | Executable statement used by the server or client runtime. |
| 410 | `      }` | Closes the current code block. |
| 411 | `` | Spacing line to separate blocks and improve readability. |
| 412 | `      @keyframes fadeInUp {` | Executable statement used by the server or client runtime. |
| 413 | `        to {` | Executable statement used by the server or client runtime. |
| 414 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 415 | `          transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 416 | `        }` | Closes the current code block. |
| 417 | `      }` | Closes the current code block. |
| 418 | `    </style>` | HTML markup that contributes structure, metadata, or visible content. |
| 419 | `  </head>` | HTML markup that contributes structure, metadata, or visible content. |
| 420 | `<body style="background: linear-gradient(135deg, #0a0f2c, #1a2949);" class="text-white">` | HTML markup that contributes structure, metadata, or visible content. |
| 421 | `    <!-- Background Decorations -->` | HTML markup that contributes structure, metadata, or visible content. |
| 422 | `    <div class="bg-decoration"></div>` | HTML markup that contributes structure, metadata, or visible content. |
| 423 | `    ` | Spacing line to separate blocks and improve readability. |
| 424 | `    <header style="background-color: #081032;" class="shadow-md animate-navbar">` | HTML markup that contributes structure, metadata, or visible content. |
| 425 | `      <div class="container pt-2 mx-auto flex items-center justify-between">` | HTML markup that contributes structure, metadata, or visible content. |
| 426 | `        <div class="flex items-center space-x-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 427 | `          <img` | HTML markup that contributes structure, metadata, or visible content. |
| 428 | `            src="/assets/persev.avif"` | Executable statement used by the server or client runtime. |
| 429 | `            alt="Logo"` | Executable statement used by the server or client runtime. |
| 430 | `            class="h-auto w-16 rounded-full"` | Executable statement used by the server or client runtime. |
| 431 | `          />` | Executable statement used by the server or client runtime. |
| 432 | `          <a href="/"><h1 class="text-3xl sm:text-3xl text-blue-200" style = "font-family:Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 433 | `            Perseverantia 2025` | Executable statement used by the server or client runtime. |
| 434 | `          </h1></a>` | HTML markup that contributes structure, metadata, or visible content. |
| 435 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 436 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 437 | `    </header>` | HTML markup that contributes structure, metadata, or visible content. |
| 438 | `` | Spacing line to separate blocks and improve readability. |
| 439 | `    <div class="container mx-auto mt-12 px-4 fade-in-section fade-in-up" id="leaderboard-container">` | HTML markup that contributes structure, metadata, or visible content. |
| 440 | `      <h1 class="text-4xl font-bold text-center text-blue-200 mb-8 section-title hover-glow" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 441 | `        Leaderboard` | Executable statement used by the server or client runtime. |
| 442 | `        <div id="mobilelay" class="hidden md:block"></div>` | HTML markup that contributes structure, metadata, or visible content. |
| 443 | `      </h1>` | HTML markup that contributes structure, metadata, or visible content. |
| 444 | `      <div class="overflow-x-auto" >` | HTML markup that contributes structure, metadata, or visible content. |
| 445 | `        <table` | HTML markup that contributes structure, metadata, or visible content. |
| 446 | `          class="min-w-full leaderboard-table rounded-lg shadow-lg overflow-hidden my-8 hover-lift"` | Executable statement used by the server or client runtime. |
| 447 | `          id="leaderboard"` | Executable statement used by the server or client runtime. |
| 448 | `        >` | Executable statement used by the server or client runtime. |
| 449 | `          <thead>` | HTML markup that contributes structure, metadata, or visible content. |
| 450 | `            <tr` | HTML markup that contributes structure, metadata, or visible content. |
| 451 | `              class="bg-blue-700 text-blue-200 uppercase text-md tracking-wider"` | Executable statement used by the server or client runtime. |
| 452 | `            >` | Executable statement used by the server or client runtime. |
| 453 | `              <th class="py-4 px-2 text-center w-16" scope="col">Position</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 454 | `              <th class="py-4 pl-8 px-2 text-left w-48" scope="col">School</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 455 | `              <th class="py-4 px-2 text-center w-24" scope="col">Points</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 456 | `              <th class="py-4 px-2 text-center hidden sm:table-cell" scope="col">` | HTML markup that contributes structure, metadata, or visible content. |
| 457 | `                Progress` | Executable statement used by the server or client runtime. |
| 458 | `              </th>` | HTML markup that contributes structure, metadata, or visible content. |
| 459 | `            </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 460 | `          </thead>` | HTML markup that contributes structure, metadata, or visible content. |
| 461 | `          <tbody id="leaderboard-body" class="text-blue-100"></tbody>` | HTML markup that contributes structure, metadata, or visible content. |
| 462 | `        </table>` | HTML markup that contributes structure, metadata, or visible content. |
| 463 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 464 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 465 | `` | Spacing line to separate blocks and improve readability. |
| 466 | `    <div` | HTML markup that contributes structure, metadata, or visible content. |
| 467 | `      id="school-panel"` | Executable statement used by the server or client runtime. |
| 468 | `      class="fixed top-0 right-0 h-full w-full md:w-1/4 side-panel shadow-lg transform overflow-y-auto translate-x-full transition-transform duration-300"` | Executable statement used by the server or client runtime. |
| 469 | `    >` | Executable statement used by the server or client runtime. |
| 470 | `      <div` | HTML markup that contributes structure, metadata, or visible content. |
| 471 | `        class="flex justify-between items-center p-4 side-panel-header"` | Executable statement used by the server or client runtime. |
| 472 | `      >` | Executable statement used by the server or client runtime. |
| 473 | `        <h2 id="school-title" class="text-2xl font-bold text-blue-300 hover-glow" style="font-family: Mestizo;"></h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 474 | `        <button` | HTML markup that contributes structure, metadata, or visible content. |
| 475 | `          onclick="closePanel()"` | Executable statement used by the server or client runtime. |
| 476 | `          class="text-white text-2xl focus:outline-none hover:text-red-500 hover-glow"` | Executable statement used by the server or client runtime. |
| 477 | `          aria-label="Close"` | Executable statement used by the server or client runtime. |
| 478 | `        >` | Executable statement used by the server or client runtime. |
| 479 | `          &times;` | Executable statement used by the server or client runtime. |
| 480 | `        </button>` | HTML markup that contributes structure, metadata, or visible content. |
| 481 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 482 | `      <div class="p-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 483 | `        <table class="w-full text-left table-auto">` | HTML markup that contributes structure, metadata, or visible content. |
| 484 | `          <tbody id="school-detail-body" class="text-blue-100">` | HTML markup that contributes structure, metadata, or visible content. |
| 485 | `            <tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 486 | `              <td class="py-2 font-semibold text-blue-200">Points:</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 487 | `              <td id="school-points" class="py-2"></td>` | HTML markup that contributes structure, metadata, or visible content. |
| 488 | `            </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 489 | `            <tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 490 | `              <td class="py-2 font-semibold text-blue-200">Rank:</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 491 | `              <td id="school-rank" class="py-2"></td>` | HTML markup that contributes structure, metadata, or visible content. |
| 492 | `            </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 493 | `          </tbody>` | HTML markup that contributes structure, metadata, or visible content. |
| 494 | `        </table>` | HTML markup that contributes structure, metadata, or visible content. |
| 495 | `        ` | Spacing line to separate blocks and improve readability. |
| 496 | `` | Spacing line to separate blocks and improve readability. |
| 497 | `        <table class="w-full text-left rounded-lg mt-8 border-collapse">` | HTML markup that contributes structure, metadata, or visible content. |
| 498 | `          <thead` | HTML markup that contributes structure, metadata, or visible content. |
| 499 | `            class="bg-blue-700 text-blue-200 uppercase text-md tracking-wider"` | Executable statement used by the server or client runtime. |
| 500 | `          >` | Executable statement used by the server or client runtime. |
| 501 | `            <tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 502 | `              <th class="px-4 py-3">Event</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 503 | `              <th class="px-4 py-3">Points</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 504 | `            </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 505 | `          </thead>` | HTML markup that contributes structure, metadata, or visible content. |
| 506 | `          <tbody id="scc" class="text-blue-100"></tbody>` | HTML markup that contributes structure, metadata, or visible content. |
| 507 | `        </table>` | HTML markup that contributes structure, metadata, or visible content. |
| 508 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 509 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 510 | `` | Spacing line to separate blocks and improve readability. |
| 511 | `    <script>` | HTML markup that contributes structure, metadata, or visible content. |
| 512 | `      let previousData = [];` | Defines mutable state used later in control flow or UI updates. |
| 513 | `` | Spacing line to separate blocks and improve readability. |
| 514 | `      async function openPanel(school) {` | Declares an async function that can await network or file operations. |
| 515 | `        document.getElementById("school-title").innerText = school.name;` | Finds a DOM node so it can be read or updated. |
| 516 | `        document.getElementById("school-points").innerText = school.points;` | Finds a DOM node so it can be read or updated. |
| 517 | `        document.getElementById("school-rank").innerText = \`#${school.rank}\`;` | Finds a DOM node so it can be read or updated. |
| 518 | `        document` | Executable statement used by the server or client runtime. |
| 519 | `          .getElementById("school-panel")` | Finds a DOM node so it can be read or updated. |
| 520 | `          .classList.remove("translate-x-full");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 521 | `` | Spacing line to separate blocks and improve readability. |
| 522 | `        document.getElementById("leaderboard-container").classList.add("mr-96");` | Finds a DOM node so it can be read or updated. |
| 523 | `        document.getElementById("leaderboard-container").classList.add("w-2/3");` | Finds a DOM node so it can be read or updated. |
| 524 | `        const response = await fetch("db.json");` | Defines a constant binding for config, module import, or computed value. |
| 525 | `        var data = await response.json();` | Legacy-scoped variable declaration used by older script patterns. |
| 526 | `        let db = {` | Defines mutable state used later in control flow or UI updates. |
| 527 | `  port: 3000,` | Executable statement used by the server or client runtime. |
| 528 | `  events: [` | Executable statement used by the server or client runtime. |
| 529 | `    "Admeta: Category 1", "Admeta: Category 2",` | Executable statement used by the server or client runtime. |
| 530 | `    "Artem",` | Executable statement used by the server or client runtime. |
| 531 | `    "Carmen: Category 1","Carmen: Category 2",` | Executable statement used by the server or client runtime. |
| 532 | `    "Fabula",` | Executable statement used by the server or client runtime. |
| 533 | `    "Fortuna",` | Executable statement used by the server or client runtime. |
| 534 | `    "Codeferno",` | Executable statement used by the server or client runtime. |
| 535 | `    "Gustatio",` | Executable statement used by the server or client runtime. |
| 536 | `    "Mahim 16",` | Executable statement used by the server or client runtime. |
| 537 | `    "'Ad'venturium",` | Executable statement used by the server or client runtime. |
| 538 | `    "Gratia",` | Executable statement used by the server or client runtime. |
| 539 | `    "Panache",` | Executable statement used by the server or client runtime. |
| 540 | `    "Symphonia",` | Executable statement used by the server or client runtime. |
| 541 | `    "Mr. and Mrs. Perseverantia",` | Executable statement used by the server or client runtime. |
| 542 | `    "Explorare",` | Executable statement used by the server or client runtime. |
| 543 | `    "Monopolium",` | Executable statement used by the server or client runtime. |
| 544 | `    "Football: U17 Boys","Football: U19 Boys","Football: U19 Girls",` | Executable statement used by the server or client runtime. |
| 545 | `    "Basketball: U19 Girls","Basketball: U19 Boys",` | Executable statement used by the server or client runtime. |
| 546 | `    "Gully Cricket",` | Executable statement used by the server or client runtime. |
| 547 | `    "Table Tennis",` | Executable statement used by the server or client runtime. |
| 548 | `    "Tug of War: U16 Boys","Tug of War: U16 Girls","Tug of War: U19 Boys","Tug of War: U19 Girls",` | Executable statement used by the server or client runtime. |
| 549 | `    "E-Sports"` | Executable statement used by the server or client runtime. |
| 550 | `  ],` | Executable statement used by the server or client runtime. |
| 551 | `  schools: [` | Executable statement used by the server or client runtime. |
| 552 | `    "P1",` | Executable statement used by the server or client runtime. |
| 553 | `    "P2",` | Executable statement used by the server or client runtime. |
| 554 | `    "P3",` | Executable statement used by the server or client runtime. |
| 555 | `    "P4",` | Executable statement used by the server or client runtime. |
| 556 | `    "P5",` | Executable statement used by the server or client runtime. |
| 557 | `    "P6",` | Executable statement used by the server or client runtime. |
| 558 | `    "P7",` | Executable statement used by the server or client runtime. |
| 559 | `    "P8",` | Executable statement used by the server or client runtime. |
| 560 | `    "P9",` | Executable statement used by the server or client runtime. |
| 561 | `    "P10",` | Executable statement used by the server or client runtime. |
| 562 | `    "P11",` | Executable statement used by the server or client runtime. |
| 563 | `    "P12",` | Executable statement used by the server or client runtime. |
| 564 | `    "P13",` | Executable statement used by the server or client runtime. |
| 565 | `    "P14",` | Executable statement used by the server or client runtime. |
| 566 | `    "P15",` | Executable statement used by the server or client runtime. |
| 567 | `    "P16",` | Executable statement used by the server or client runtime. |
| 568 | `    "P17",` | Executable statement used by the server or client runtime. |
| 569 | `    "P18",` | Executable statement used by the server or client runtime. |
| 570 | `    "P20",` | Executable statement used by the server or client runtime. |
| 571 | `    "P21",` | Executable statement used by the server or client runtime. |
| 572 | `    "P22",` | Executable statement used by the server or client runtime. |
| 573 | `    "P23",` | Executable statement used by the server or client runtime. |
| 574 | `    "P24",` | Executable statement used by the server or client runtime. |
| 575 | `    "P25",` | Executable statement used by the server or client runtime. |
| 576 | `    "P26",` | Executable statement used by the server or client runtime. |
| 577 | `    "P28",` | Executable statement used by the server or client runtime. |
| 578 | `    "P29",` | Executable statement used by the server or client runtime. |
| 579 | `  ]` | Executable statement used by the server or client runtime. |
| 580 | `};` | Closes the current code block. |
| 581 | `` | Spacing line to separate blocks and improve readability. |
| 582 | `        let points = [];` | Defines mutable state used later in control flow or UI updates. |
| 583 | `        for (let i = 0; i < data.schools.length; i++) {` | Iterates over a list to process each item. |
| 584 | `          points.push(data.schools[i].points);` | Executable statement used by the server or client runtime. |
| 585 | `        }` | Closes the current code block. |
| 586 | `        data = { schools: db.schools, events: db.events, points: points, eventEnd:true, db:data };` | Executable statement used by the server or client runtime. |
| 587 | `        //sidepanel` | Comment that documents intent for the following code block. |
| 588 | `        const scd = data.db.schools.filter((e) => e.name === school.name)[0];` | Defines a constant binding for config, module import, or computed value. |
| 589 | `` | Spacing line to separate blocks and improve readability. |
| 590 | `        console.log(scd)` | Executable statement used by the server or client runtime. |
| 591 | `        document.getElementById("scc").innerHTML = "";` | Finds a DOM node so it can be read or updated. |
| 592 | `` | Spacing line to separate blocks and improve readability. |
| 593 | `        data.events.forEach((event, index) => {` | Iterates over a list to process each item. |
| 594 | `          const row = document.createElement("tr");` | Defines a constant binding for config, module import, or computed value. |
| 595 | `          row.innerHTML = \`` | Injects HTML markup into the selected DOM container. |
| 596 | `            <td class="px-2 py-2 whitespace-nowrap text-blue-100 border-b border-gray-700">` | HTML markup that contributes structure, metadata, or visible content. |
| 597 | `              ${event}` | Executable statement used by the server or client runtime. |
| 598 | `            </td>` | HTML markup that contributes structure, metadata, or visible content. |
| 599 | `            <td class="px-2 py-2 whitespace-nowrap text-blue-100 border-b border-gray-700">` | HTML markup that contributes structure, metadata, or visible content. |
| 600 | `              ${scd.eventpoints[index]}` | Executable statement used by the server or client runtime. |
| 601 | `            </td>` | HTML markup that contributes structure, metadata, or visible content. |
| 602 | `          \`;` | Executable statement used by the server or client runtime. |
| 603 | `          document.getElementById("scc").appendChild(row);` | Finds a DOM node so it can be read or updated. |
| 604 | `        });` | Closes the current code block. |
| 605 | `      }` | Closes the current code block. |
| 606 | `` | Spacing line to separate blocks and improve readability. |
| 607 | `      function closePanel() {` | Declares a named function used by runtime behavior. |
| 608 | `        document` | Executable statement used by the server or client runtime. |
| 609 | `          .getElementById("school-panel")` | Finds a DOM node so it can be read or updated. |
| 610 | `          .classList.add("translate-x-full");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 611 | `` | Spacing line to separate blocks and improve readability. |
| 612 | `        document` | Executable statement used by the server or client runtime. |
| 613 | `          .getElementById("leaderboard-container")` | Finds a DOM node so it can be read or updated. |
| 614 | `          .classList.remove("mr-96");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 615 | `        document` | Executable statement used by the server or client runtime. |
| 616 | `          .getElementById("leaderboard-container")` | Finds a DOM node so it can be read or updated. |
| 617 | `          .classList.remove("w-2/3");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 618 | `      }` | Closes the current code block. |
| 619 | `` | Spacing line to separate blocks and improve readability. |
| 620 | `      function renderLeaderboard(data) {` | Declares a named function used by runtime behavior. |
| 621 | `        const leaderboardBody = document.getElementById("leaderboard-body");` | Defines a constant binding for config, module import, or computed value. |
| 622 | `        const maxPoints = Math.max(...data.map((item) => item.points)) &#124;&#124; 1;` | Defines a constant binding for config, module import, or computed value. |
| 623 | `` | Spacing line to separate blocks and improve readability. |
| 624 | `        data.sort((a, b) => b.points - a.points);` | Arrow-function expression used as a concise callback/helper. |
| 625 | `` | Spacing line to separate blocks and improve readability. |
| 626 | `        if (data.length > 0) {` | Starts a conditional branch based on current runtime state. |
| 627 | `            data[0].rank = 1; ` | Executable statement used by the server or client runtime. |
| 628 | `            for (let i = 1; i < data.length; i++) {` | Iterates over a list to process each item. |
| 629 | `                if (data[i].points === data[i - 1].points) {` | Starts a conditional branch based on current runtime state. |
| 630 | `                    data[i].rank = data[i - 1].rank; ` | Executable statement used by the server or client runtime. |
| 631 | `                } else {` | Closes the current code block. |
| 632 | `                    data[i].rank = data[i - 1].rank + 1;` | Executable statement used by the server or client runtime. |
| 633 | `                }` | Closes the current code block. |
| 634 | `            }` | Closes the current code block. |
| 635 | `        }` | Closes the current code block. |
| 636 | `` | Spacing line to separate blocks and improve readability. |
| 637 | `        leaderboardBody.innerHTML = "";` | Injects HTML markup into the selected DOM container. |
| 638 | `` | Spacing line to separate blocks and improve readability. |
| 639 | `        data.forEach((item) => {` | Iterates over a list to process each item. |
| 640 | `          const percentage = (item.points / maxPoints) * 100;` | Defines a constant binding for config, module import, or computed value. |
| 641 | `` | Spacing line to separate blocks and improve readability. |
| 642 | `          let barColor = "bg-blue-500";` | Defines mutable state used later in control flow or UI updates. |
| 643 | `          if (item.rank === 1) barColor = "bg-yellow-400";` | Starts a conditional branch based on current runtime state. |
| 644 | `          else if (item.rank === 2) barColor = "bg-gray-300";` | Defines fallback behavior when previous condition is false. |
| 645 | `          else if (item.rank === 3) barColor = "bg-yellow-700";` | Defines fallback behavior when previous condition is false. |
| 646 | `` | Spacing line to separate blocks and improve readability. |
| 647 | `          const previousItem = previousData.find((d) => d.name === item.name);` | Defines a constant binding for config, module import, or computed value. |
| 648 | `          const previousPosition = previousItem ? previousItem.rank : null;` | Defines a constant binding for config, module import, or computed value. |
| 649 | `          const positionChange = previousPosition` | Defines a constant binding for config, module import, or computed value. |
| 650 | `            ? previousPosition - item.rank` | Executable statement used by the server or client runtime. |
| 651 | `            : 0;` | Executable statement used by the server or client runtime. |
| 652 | `` | Spacing line to separate blocks and improve readability. |
| 653 | `          let highlightClass = "";` | Defines mutable state used later in control flow or UI updates. |
| 654 | `          let positionArrow = "";` | Defines mutable state used later in control flow or UI updates. |
| 655 | `` | Spacing line to separate blocks and improve readability. |
| 656 | `          if (positionChange > 0) {` | Starts a conditional branch based on current runtime state. |
| 657 | `            highlightClass = "bg-green-800";` | Executable statement used by the server or client runtime. |
| 658 | `            positionArrow = "▲";` | Executable statement used by the server or client runtime. |
| 659 | `          } else if (positionChange < 0) {` | Closes the current code block. |
| 660 | `            highlightClass = "bg-red-800";` | Executable statement used by the server or client runtime. |
| 661 | `            positionArrow = "▼";` | Executable statement used by the server or client runtime. |
| 662 | `          }` | Closes the current code block. |
| 663 | `` | Spacing line to separate blocks and improve readability. |
| 664 | `          const row = document.createElement("tr");` | Defines a constant binding for config, module import, or computed value. |
| 665 | `          row.dataset.school = item.name;` | Executable statement used by the server or client runtime. |
| 666 | `          row.className = \`transition-colors duration-500 ${highlightClass} hover:bg-gray-600\`;` | Executable statement used by the server or client runtime. |
| 667 | `` | Spacing line to separate blocks and improve readability. |
| 668 | `          row.innerHTML = \`` | Injects HTML markup into the selected DOM container. |
| 669 | `            <td class="py-4 px-6 font-semibold text-center text-md">` | HTML markup that contributes structure, metadata, or visible content. |
| 670 | `              #${item.rank} ${positionArrow ? \`<span class="inline">${positionArrow}</span>\` : ""}` | Executable statement used by the server or client runtime. |
| 671 | `            </td>` | HTML markup that contributes structure, metadata, or visible content. |
| 672 | `            <td class="py-4 px-6 text-left cursor-pointer text-blue-100">` | HTML markup that contributes structure, metadata, or visible content. |
| 673 | `              ${item.rank === 1 ? "🥇" : item.rank === 2 ? "🥈" : item.rank === 3 ? "🥉" : ""} ${item.name}` | Executable statement used by the server or client runtime. |
| 674 | `            </td>` | HTML markup that contributes structure, metadata, or visible content. |
| 675 | `            <td class="py-4 px-6 text-center">${item.points}</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 676 | `            <td class="py-4 px-6 hidden sm:table-cell">` | HTML markup that contributes structure, metadata, or visible content. |
| 677 | `              <div class="w-full bg-gray-700 rounded-full h-4 overflow-hidden">` | HTML markup that contributes structure, metadata, or visible content. |
| 678 | `                <div class="${barColor} h-4 rounded-full progress-bar" data-progress="${item.name}"></div>` | HTML markup that contributes structure, metadata, or visible content. |
| 679 | `              </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 680 | `            </td>` | HTML markup that contributes structure, metadata, or visible content. |
| 681 | `          \`;` | Executable statement used by the server or client runtime. |
| 682 | `` | Spacing line to separate blocks and improve readability. |
| 683 | `          row.addEventListener("click", () => openPanel(item));` | Subscribes to a browser event and runs callback logic when triggered. |
| 684 | `          leaderboardBody.appendChild(row);` | Executable statement used by the server or client runtime. |
| 685 | `` | Spacing line to separate blocks and improve readability. |
| 686 | `          const progressBar = row.querySelector(` | Defines a constant binding for config, module import, or computed value. |
| 687 | `            \`[data-progress="${item.name}"]\`,` | Executable statement used by the server or client runtime. |
| 688 | `          );` | Executable statement used by the server or client runtime. |
| 689 | `          requestAnimationFrame(() => {` | Arrow-function expression used as a concise callback/helper. |
| 690 | `            progressBar.style.width = \`${percentage}%\`;` | Executable statement used by the server or client runtime. |
| 691 | `          });` | Closes the current code block. |
| 692 | `` | Spacing line to separate blocks and improve readability. |
| 693 | `          if (highlightClass) {` | Starts a conditional branch based on current runtime state. |
| 694 | `            setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 695 | `              row.classList.remove(highlightClass);` | Toggles CSS classes to change visibility, styling, or animation state. |
| 696 | `              const positionCell = row.querySelector("td");` | Defines a constant binding for config, module import, or computed value. |
| 697 | `              if (positionCell) positionCell.innerHTML = \`#${item.rank}\`;` | Injects HTML markup into the selected DOM container. |
| 698 | `            }, 6000);` | Closes the current code block. |
| 699 | `          }` | Closes the current code block. |
| 700 | `        });` | Closes the current code block. |
| 701 | `` | Spacing line to separate blocks and improve readability. |
| 702 | `        previousData = JSON.parse(JSON.stringify(data)); ` | Executable statement used by the server or client runtime. |
| 703 | `      }` | Closes the current code block. |
| 704 | `` | Spacing line to separate blocks and improve readability. |
| 705 | `      async function fetchAndRender() {` | Declares an async function that can await network or file operations. |
| 706 | `        try {` | Executable statement used by the server or client runtime. |
| 707 | `          const response = await fetch("db.json");` | Defines a constant binding for config, module import, or computed value. |
| 708 | `        var data = await response.json();` | Legacy-scoped variable declaration used by older script patterns. |
| 709 | `        let db = {` | Defines mutable state used later in control flow or UI updates. |
| 710 | `  port: 3000,` | Executable statement used by the server or client runtime. |
| 711 | `  events: [` | Executable statement used by the server or client runtime. |
| 712 | `    "Admeta: Category 1", "Admeta: Category 2",` | Executable statement used by the server or client runtime. |
| 713 | `    "Artem",` | Executable statement used by the server or client runtime. |
| 714 | `    "Carmen: Category 1","Carmen: Category 2",` | Executable statement used by the server or client runtime. |
| 715 | `    "Fabula",` | Executable statement used by the server or client runtime. |
| 716 | `    "Fortuna",` | Executable statement used by the server or client runtime. |
| 717 | `    "Codeferno",` | Executable statement used by the server or client runtime. |
| 718 | `    "Gustatio",` | Executable statement used by the server or client runtime. |
| 719 | `    "Mahim 16",` | Executable statement used by the server or client runtime. |
| 720 | `    "'Ad'venturium",` | Executable statement used by the server or client runtime. |
| 721 | `    "Gratia",` | Executable statement used by the server or client runtime. |
| 722 | `    "Panache",` | Executable statement used by the server or client runtime. |
| 723 | `    "Symphonia",` | Executable statement used by the server or client runtime. |
| 724 | `    "Mr. and Mrs. Perseverantia",` | Executable statement used by the server or client runtime. |
| 725 | `    "Explorare",` | Executable statement used by the server or client runtime. |
| 726 | `    "Monopolium",` | Executable statement used by the server or client runtime. |
| 727 | `    "Football: U17 Boys","Football: U19 Boys","Football: U19 Girls",` | Executable statement used by the server or client runtime. |
| 728 | `    "Basketball: U19 Girls","Basketball: U19 Boys",` | Executable statement used by the server or client runtime. |
| 729 | `    "Gully Cricket",` | Executable statement used by the server or client runtime. |
| 730 | `    "Table Tennis",` | Executable statement used by the server or client runtime. |
| 731 | `    "Tug of War: U16 Boys","Tug of War: U16 Girls","Tug of War: U19 Boys","Tug of War: U19 Girls",` | Executable statement used by the server or client runtime. |
| 732 | `    "E-Sports"` | Executable statement used by the server or client runtime. |
| 733 | `  ],` | Executable statement used by the server or client runtime. |
| 734 | `  schools: [` | Executable statement used by the server or client runtime. |
| 735 | `    "P1",` | Executable statement used by the server or client runtime. |
| 736 | `    "P2",` | Executable statement used by the server or client runtime. |
| 737 | `    "P3",` | Executable statement used by the server or client runtime. |
| 738 | `    "P4",` | Executable statement used by the server or client runtime. |
| 739 | `    "P5",` | Executable statement used by the server or client runtime. |
| 740 | `    "P6",` | Executable statement used by the server or client runtime. |
| 741 | `    "P7",` | Executable statement used by the server or client runtime. |
| 742 | `    "P8",` | Executable statement used by the server or client runtime. |
| 743 | `    "P9",` | Executable statement used by the server or client runtime. |
| 744 | `    "P10",` | Executable statement used by the server or client runtime. |
| 745 | `    "P11",` | Executable statement used by the server or client runtime. |
| 746 | `    "P12",` | Executable statement used by the server or client runtime. |
| 747 | `    "P13",` | Executable statement used by the server or client runtime. |
| 748 | `    "P14",` | Executable statement used by the server or client runtime. |
| 749 | `    "P15",` | Executable statement used by the server or client runtime. |
| 750 | `    "P16",` | Executable statement used by the server or client runtime. |
| 751 | `    "P17",` | Executable statement used by the server or client runtime. |
| 752 | `    "P18",` | Executable statement used by the server or client runtime. |
| 753 | `    "P20",` | Executable statement used by the server or client runtime. |
| 754 | `    "P21",` | Executable statement used by the server or client runtime. |
| 755 | `    "P22",` | Executable statement used by the server or client runtime. |
| 756 | `    "P23",` | Executable statement used by the server or client runtime. |
| 757 | `    "P24",` | Executable statement used by the server or client runtime. |
| 758 | `    "P25",` | Executable statement used by the server or client runtime. |
| 759 | `    "P26",` | Executable statement used by the server or client runtime. |
| 760 | `    "P28",` | Executable statement used by the server or client runtime. |
| 761 | `    "P29",` | Executable statement used by the server or client runtime. |
| 762 | `  ]` | Executable statement used by the server or client runtime. |
| 763 | `};` | Closes the current code block. |
| 764 | `` | Spacing line to separate blocks and improve readability. |
| 765 | `        let pointsa = [];` | Defines mutable state used later in control flow or UI updates. |
| 766 | `        for (let i = 0; i < data.schools.length; i++) {` | Iterates over a list to process each item. |
| 767 | `          pointsa.push(data.schools[i].points);` | Executable statement used by the server or client runtime. |
| 768 | `        }` | Closes the current code block. |
| 769 | `        data = { schools: db.schools, events: db.events, points: pointsa, eventEnd:true };` | Executable statement used by the server or client runtime. |
| 770 | `          if(data.eventEnd) onEventsEnd();` | Starts a conditional branch based on current runtime state. |
| 771 | `          console.log(data.eventEnd)` | Executable statement used by the server or client runtime. |
| 772 | `          console.log(ee)` | Executable statement used by the server or client runtime. |
| 773 | `          if(!data.eventEnd && ee) window.location.reload()` | Starts a conditional branch based on current runtime state. |
| 774 | `` | Spacing line to separate blocks and improve readability. |
| 775 | `` | Spacing line to separate blocks and improve readability. |
| 776 | `          const schools = data.schools;` | Defines a constant binding for config, module import, or computed value. |
| 777 | `          const points = data.points;` | Defines a constant binding for config, module import, or computed value. |
| 778 | `` | Spacing line to separate blocks and improve readability. |
| 779 | `          const leaderboardData = schools.map((school, index) => ({` | Defines a constant binding for config, module import, or computed value. |
| 780 | `            name: school,` | Executable statement used by the server or client runtime. |
| 781 | `            points: points[index],` | Executable statement used by the server or client runtime. |
| 782 | `          }));` | Closes the current code block. |
| 783 | `` | Spacing line to separate blocks and improve readability. |
| 784 | `          renderLeaderboard(leaderboardData);` | Executable statement used by the server or client runtime. |
| 785 | `        } catch (error) {` | Closes the current code block. |
| 786 | `          console.error("Error fetching data:", error);` | Executable statement used by the server or client runtime. |
| 787 | `        }` | Closes the current code block. |
| 788 | `      }` | Closes the current code block. |
| 789 | `` | Spacing line to separate blocks and improve readability. |
| 790 | `      fetchAndRender();` | Executable statement used by the server or client runtime. |
| 791 | `      setInterval(fetchAndRender, 5000);` | Executable statement used by the server or client runtime. |
| 792 | `    </script>` | HTML markup that contributes structure, metadata, or visible content. |
| 793 | `` | Spacing line to separate blocks and improve readability. |
| 794 | `    <script>` | HTML markup that contributes structure, metadata, or visible content. |
| 795 | `      const trophyImages = {` | Defines a constant binding for config, module import, or computed value. |
| 796 | `        1: "https://i.pinimg.com/736x/df/43/6e/df436ea7c7fbb220803957062cb163de.jpg",` | Executable statement used by the server or client runtime. |
| 797 | `        2: "assets/silver.jpg",` | Executable statement used by the server or client runtime. |
| 798 | `        3: "/assets/bronze.jpg",` | Executable statement used by the server or client runtime. |
| 799 | `      };` | Closes the current code block. |
| 800 | `      var ee = false;` | Legacy-scoped variable declaration used by older script patterns. |
| 801 | `      var podiumCreated = false;` | Legacy-scoped variable declaration used by older script patterns. |
| 802 | `` | Spacing line to separate blocks and improve readability. |
| 803 | `      function onEventsEnd() {` | Declares a named function used by runtime behavior. |
| 804 | `        ` | Spacing line to separate blocks and improve readability. |
| 805 | `        ee=true;` | Executable statement used by the server or client runtime. |
| 806 | `        if (podiumCreated) return; // Prevent recreating podium multiple times` | Starts a conditional branch based on current runtime state. |
| 807 | `        ` | Spacing line to separate blocks and improve readability. |
| 808 | `        fetch("db.json")` | Performs an HTTP request to load external or API data. |
| 809 | `          .then((res) => res.json())` | Arrow-function expression used as a concise callback/helper. |
| 810 | `          .then((da) => {` | Arrow-function expression used as a concise callback/helper. |
| 811 | `            ` | Spacing line to separate blocks and improve readability. |
| 812 | `        let db = {` | Defines mutable state used later in control flow or UI updates. |
| 813 | `  port: 3000,` | Executable statement used by the server or client runtime. |
| 814 | `  events: [` | Executable statement used by the server or client runtime. |
| 815 | `    "Admeta: Category 1", "Admeta: Category 2",` | Executable statement used by the server or client runtime. |
| 816 | `    "Artem",` | Executable statement used by the server or client runtime. |
| 817 | `    "Carmen: Category 1","Carmen: Category 2",` | Executable statement used by the server or client runtime. |
| 818 | `    "Fabula",` | Executable statement used by the server or client runtime. |
| 819 | `    "Fortuna",` | Executable statement used by the server or client runtime. |
| 820 | `    "Codeferno",` | Executable statement used by the server or client runtime. |
| 821 | `    "Gustatio",` | Executable statement used by the server or client runtime. |
| 822 | `    "Mahim 16",` | Executable statement used by the server or client runtime. |
| 823 | `    "'Ad'venturium",` | Executable statement used by the server or client runtime. |
| 824 | `    "Gratia",` | Executable statement used by the server or client runtime. |
| 825 | `    "Panache",` | Executable statement used by the server or client runtime. |
| 826 | `    "Symphonia",` | Executable statement used by the server or client runtime. |
| 827 | `    "Mr. and Mrs. Perseverantia",` | Executable statement used by the server or client runtime. |
| 828 | `    "Explorare",` | Executable statement used by the server or client runtime. |
| 829 | `    "Monopolium",` | Executable statement used by the server or client runtime. |
| 830 | `    "Football: U17 Boys","Football: U19 Boys","Football: U19 Girls",` | Executable statement used by the server or client runtime. |
| 831 | `    "Basketball: U19 Girls","Basketball: U19 Boys",` | Executable statement used by the server or client runtime. |
| 832 | `    "Gully Cricket",` | Executable statement used by the server or client runtime. |
| 833 | `    "Table Tennis",` | Executable statement used by the server or client runtime. |
| 834 | `    "Tug of War: U16 Boys","Tug of War: U16 Girls","Tug of War: U19 Boys","Tug of War: U19 Girls",` | Executable statement used by the server or client runtime. |
| 835 | `    "E-Sports"` | Executable statement used by the server or client runtime. |
| 836 | `  ],` | Executable statement used by the server or client runtime. |
| 837 | `  schools: [` | Executable statement used by the server or client runtime. |
| 838 | `    "P1",` | Executable statement used by the server or client runtime. |
| 839 | `    "P2",` | Executable statement used by the server or client runtime. |
| 840 | `    "P3",` | Executable statement used by the server or client runtime. |
| 841 | `    "P4",` | Executable statement used by the server or client runtime. |
| 842 | `    "P5",` | Executable statement used by the server or client runtime. |
| 843 | `    "P6",` | Executable statement used by the server or client runtime. |
| 844 | `    "P7",` | Executable statement used by the server or client runtime. |
| 845 | `    "P8",` | Executable statement used by the server or client runtime. |
| 846 | `    "P9",` | Executable statement used by the server or client runtime. |
| 847 | `    "P10",` | Executable statement used by the server or client runtime. |
| 848 | `    "P11",` | Executable statement used by the server or client runtime. |
| 849 | `    "P12",` | Executable statement used by the server or client runtime. |
| 850 | `    "P13",` | Executable statement used by the server or client runtime. |
| 851 | `    "P14",` | Executable statement used by the server or client runtime. |
| 852 | `    "P15",` | Executable statement used by the server or client runtime. |
| 853 | `    "P16",` | Executable statement used by the server or client runtime. |
| 854 | `    "P17",` | Executable statement used by the server or client runtime. |
| 855 | `    "P18",` | Executable statement used by the server or client runtime. |
| 856 | `    "P20",` | Executable statement used by the server or client runtime. |
| 857 | `    "P21",` | Executable statement used by the server or client runtime. |
| 858 | `    "P22",` | Executable statement used by the server or client runtime. |
| 859 | `    "P23",` | Executable statement used by the server or client runtime. |
| 860 | `    "P24",` | Executable statement used by the server or client runtime. |
| 861 | `    "P25",` | Executable statement used by the server or client runtime. |
| 862 | `    "P26",` | Executable statement used by the server or client runtime. |
| 863 | `    "P28",` | Executable statement used by the server or client runtime. |
| 864 | `    "P29",` | Executable statement used by the server or client runtime. |
| 865 | `  ]` | Executable statement used by the server or client runtime. |
| 866 | `};` | Closes the current code block. |
| 867 | `` | Spacing line to separate blocks and improve readability. |
| 868 | `        let po = [];` | Defines mutable state used later in control flow or UI updates. |
| 869 | `        for (let i = 0; i < da.schools.length; i++) {` | Iterates over a list to process each item. |
| 870 | `          po.push(da.schools[i].points);` | Executable statement used by the server or client runtime. |
| 871 | `        }` | Closes the current code block. |
| 872 | `        data = { schools: db.schools, events: db.events, points: po, eventEnd:true };` | Executable statement used by the server or client runtime. |
| 873 | `` | Spacing line to separate blocks and improve readability. |
| 874 | `` | Spacing line to separate blocks and improve readability. |
| 875 | `            const schools = data.schools;` | Defines a constant binding for config, module import, or computed value. |
| 876 | `            const points = data.points;` | Defines a constant binding for config, module import, or computed value. |
| 877 | `            if(data.eventEnd && !ee) window.location.reload()` | Starts a conditional branch based on current runtime state. |
| 878 | `` | Spacing line to separate blocks and improve readability. |
| 879 | `            let leaderboard = schools.map((school, index) => ({` | Defines mutable state used later in control flow or UI updates. |
| 880 | `              name: school,` | Executable statement used by the server or client runtime. |
| 881 | `              points: points[index],` | Executable statement used by the server or client runtime. |
| 882 | `            }));` | Closes the current code block. |
| 883 | `` | Spacing line to separate blocks and improve readability. |
| 884 | `            leaderboard.sort((a, b) => b.points - a.points);` | Arrow-function expression used as a concise callback/helper. |
| 885 | `` | Spacing line to separate blocks and improve readability. |
| 886 | `            leaderboard[0].rank = 1;` | Executable statement used by the server or client runtime. |
| 887 | `            for (let i = 1; i < leaderboard.length; i++) {` | Iterates over a list to process each item. |
| 888 | `              leaderboard[i].rank =` | Executable statement used by the server or client runtime. |
| 889 | `                leaderboard[i].points === leaderboard[i - 1].points` | Executable statement used by the server or client runtime. |
| 890 | `                  ? leaderboard[i - 1].rank` | Executable statement used by the server or client runtime. |
| 891 | `                  : leaderboard[i - 1].rank + 1;` | Executable statement used by the server or client runtime. |
| 892 | `            }` | Closes the current code block. |
| 893 | `` | Spacing line to separate blocks and improve readability. |
| 894 | `            const grouped = { 1: [], 2: [], 3: [], others: [] };` | Defines a constant binding for config, module import, or computed value. |
| 895 | `            leaderboard.forEach((entry) => {` | Iterates over a list to process each item. |
| 896 | `              if ([1, 2, 3].includes(entry.rank)) grouped[entry.rank].push(entry);` | Starts a conditional branch based on current runtime state. |
| 897 | `              else grouped.others.push(entry);` | Defines fallback behavior when previous condition is false. |
| 898 | `            });` | Closes the current code block. |
| 899 | `` | Spacing line to separate blocks and improve readability. |
| 900 | `            const resultContainer = document.createElement("div");` | Defines a constant binding for config, module import, or computed value. |
| 901 | `            resultContainer.id = "final-results";` | Executable statement used by the server or client runtime. |
| 902 | `            resultContainer.className =` | Executable statement used by the server or client runtime. |
| 903 | `  "mt-12 p-6 result-container text-blue-100 mb-16 pt-20 hidden md:block fade-in-section hover-lift fade-in-up";` | Executable statement used by the server or client runtime. |
| 904 | `            const podium = document.createElement("div");` | Defines a constant binding for config, module import, or computed value. |
| 905 | `            podium.className = "hidden sm:flex justify-center items-end gap-8 mb-12 text-center flex-wrap";` | Executable statement used by the server or client runtime. |
| 906 | `` | Spacing line to separate blocks and improve readability. |
| 907 | `            if (grouped[2].length > 0)` | Starts a conditional branch based on current runtime state. |
| 908 | `              podium.appendChild(createRankBox(grouped[2], 2, "h-48 w-64"));` | Executable statement used by the server or client runtime. |
| 909 | `            if (grouped[1].length > 0)` | Starts a conditional branch based on current runtime state. |
| 910 | `              podium.appendChild(createRankBox(grouped[1], 1, "h-56 w-72"));` | Executable statement used by the server or client runtime. |
| 911 | `            if (grouped[3].length > 0)` | Starts a conditional branch based on current runtime state. |
| 912 | `              podium.appendChild(createRankBox(grouped[3], 3, "h-40 w-56"));` | Executable statement used by the server or client runtime. |
| 913 | `` | Spacing line to separate blocks and improve readability. |
| 914 | `            resultContainer.appendChild(podium);` | Executable statement used by the server or client runtime. |
| 915 | `            const existing = document.getElementById("final-results");` | Defines a constant binding for config, module import, or computed value. |
| 916 | `            if (existing) existing.remove();` | Starts a conditional branch based on current runtime state. |
| 917 | `            ` | Spacing line to separate blocks and improve readability. |
| 918 | `            document.getElementById("leaderboard-container").insertBefore(resultContainer,document.getElementById("leaderboard-container").firstChild)` | Finds a DOM node so it can be read or updated. |
| 919 | `            podiumCreated = true; // Set flag to prevent recreation` | Executable statement used by the server or client runtime. |
| 920 | `            if(!stoptime){` | Starts a conditional branch based on current runtime state. |
| 921 | `              start();` | Executable statement used by the server or client runtime. |
| 922 | `              stop(15000);` | Executable statement used by the server or client runtime. |
| 923 | `            }` | Closes the current code block. |
| 924 | `          })` | Closes the current code block. |
| 925 | `          .catch((err) => console.error("Error loading final results:", err));` | Arrow-function expression used as a concise callback/helper. |
| 926 | `      }` | Closes the current code block. |
| 927 | `      ` | Spacing line to separate blocks and improve readability. |
| 928 | `` | Spacing line to separate blocks and improve readability. |
| 929 | `      function createRankBox(schools, rank, sizeClasses) {` | Declares a named function used by runtime behavior. |
| 930 | `        const box = document.createElement("div");` | Defines a constant binding for config, module import, or computed value. |
| 931 | `        box.className = \`relative bg-gray-900 rounded-xl p-4 pt-20 flex flex-col justify-end items-center shadow-xl ${sizeClasses} cursor-pointer hover:bg-gray-700 transition-all duration-300 hover-lift\`;` | Executable statement used by the server or client runtime. |
| 932 | `` | Spacing line to separate blocks and improve readability. |
| 933 | `        const imageWrapper = document.createElement("div");` | Defines a constant binding for config, module import, or computed value. |
| 934 | `        imageWrapper.className =` | Executable statement used by the server or client runtime. |
| 935 | `          "absolute -top-12 left-1/2 transform -translate-x-1/2";` | Executable statement used by the server or client runtime. |
| 936 | `        const img = document.createElement("img");` | Defines a constant binding for config, module import, or computed value. |
| 937 | `        img.src = trophyImages[rank];` | Executable statement used by the server or client runtime. |
| 938 | `        img.alt = \`Rank ${rank} Trophy\`;` | Executable statement used by the server or client runtime. |
| 939 | `        img.className =` | Executable statement used by the server or client runtime. |
| 940 | `          "w-24 h-24 rounded-full border-4 border-yellow-300 shadow-lg object-cover hover-glow";` | Executable statement used by the server or client runtime. |
| 941 | `        imageWrapper.appendChild(img);` | Executable statement used by the server or client runtime. |
| 942 | `        box.appendChild(imageWrapper);` | Executable statement used by the server or client runtime. |
| 943 | `` | Spacing line to separate blocks and improve readability. |
| 944 | `        const title = document.createElement("div");` | Defines a constant binding for config, module import, or computed value. |
| 945 | `        title.className = "font-bold text-xl text-yellow-300 mb-2 hover-glow";` | Executable statement used by the server or client runtime. |
| 946 | `        title.style.fontFamily = "Mestizo";` | Executable statement used by the server or client runtime. |
| 947 | `        title.innerText = \`Rank ${rank}\`;` | Executable statement used by the server or client runtime. |
| 948 | `        box.appendChild(title);` | Executable statement used by the server or client runtime. |
| 949 | `` | Spacing line to separate blocks and improve readability. |
| 950 | `        const names = document.createElement("div");` | Defines a constant binding for config, module import, or computed value. |
| 951 | `        names.className = "text-blue-100 text-base leading-tight text-reveal";` | Executable statement used by the server or client runtime. |
| 952 | `        names.innerHTML = schools.map((s) => s.name).join(" &<br>");` | Injects HTML markup into the selected DOM container. |
| 953 | `        box.appendChild(names);` | Executable statement used by the server or client runtime. |
| 954 | `` | Spacing line to separate blocks and improve readability. |
| 955 | `        const points = document.createElement("div");` | Defines a constant binding for config, module import, or computed value. |
| 956 | `        points.className = "mt-2 text-blue-300 text-sm hover-glow";` | Executable statement used by the server or client runtime. |
| 957 | `        points.innerText = \`${schools[0].points} pts\`;` | Executable statement used by the server or client runtime. |
| 958 | `        box.appendChild(points);` | Executable statement used by the server or client runtime. |
| 959 | `` | Spacing line to separate blocks and improve readability. |
| 960 | `        ` | Spacing line to separate blocks and improve readability. |
| 961 | `` | Spacing line to separate blocks and improve readability. |
| 962 | `        return box;` | Returns a value or exits this function early. |
| 963 | `      }` | Closes the current code block. |
| 964 | `` | Spacing line to separate blocks and improve readability. |
| 965 | `    </script>` | HTML markup that contributes structure, metadata, or visible content. |
| 966 | `` | Spacing line to separate blocks and improve readability. |
| 967 | `    <!-- Enhanced Intersection Observer and Animations -->` | HTML markup that contributes structure, metadata, or visible content. |
| 968 | `    <script>` | HTML markup that contributes structure, metadata, or visible content. |
| 969 | `      // Create intersection observer for scroll-triggered animations` | Comment that documents intent for the following code block. |
| 970 | `      const observerOptions = {` | Defines a constant binding for config, module import, or computed value. |
| 971 | `        threshold: 0.1,` | Executable statement used by the server or client runtime. |
| 972 | `        rootMargin: '0px 0px -50px 0px'` | Executable statement used by the server or client runtime. |
| 973 | `      };` | Closes the current code block. |
| 974 | `` | Spacing line to separate blocks and improve readability. |
| 975 | `      const observer = new IntersectionObserver((entries) => {` | Defines a constant binding for config, module import, or computed value. |
| 976 | `        entries.forEach(entry => {` | Iterates over a list to process each item. |
| 977 | `          if (entry.isIntersecting) {` | Starts a conditional branch based on current runtime state. |
| 978 | `            entry.target.classList.add('visible');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 979 | `            // Trigger fade-in-up animation` | Comment that documents intent for the following code block. |
| 980 | `            if (entry.target.classList.contains('fade-in-up')) {` | Toggles CSS classes to change visibility, styling, or animation state. |
| 981 | `              entry.target.style.animationPlayState = 'running';` | Executable statement used by the server or client runtime. |
| 982 | `            }` | Closes the current code block. |
| 983 | `          }` | Closes the current code block. |
| 984 | `        });` | Closes the current code block. |
| 985 | `      }, observerOptions);` | Closes the current code block. |
| 986 | `` | Spacing line to separate blocks and improve readability. |
| 987 | `      // Observe elements with animation classes` | Comment that documents intent for the following code block. |
| 988 | `      document.addEventListener('DOMContentLoaded', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 989 | `        const animatedElements = document.querySelectorAll('.fade-in-section, .fade-in-up');` | Defines a constant binding for config, module import, or computed value. |
| 990 | `        animatedElements.forEach(el => {` | Iterates over a list to process each item. |
| 991 | `          if (el.classList.contains('fade-in-up')) {` | Toggles CSS classes to change visibility, styling, or animation state. |
| 992 | `            el.style.animationPlayState = 'paused';` | Executable statement used by the server or client runtime. |
| 993 | `          }` | Closes the current code block. |
| 994 | `          observer.observe(el);` | Executable statement used by the server or client runtime. |
| 995 | `        });` | Closes the current code block. |
| 996 | `      });` | Closes the current code block. |
| 997 | `` | Spacing line to separate blocks and improve readability. |
| 998 | `      // Parallax effect for background decorations` | Comment that documents intent for the following code block. |
| 999 | `      window.addEventListener('scroll', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 1000 | `        const scrolled = window.pageYOffset;` | Defines a constant binding for config, module import, or computed value. |
| 1001 | `        const parallax = document.querySelector('.bg-decoration');` | Defines a constant binding for config, module import, or computed value. |
| 1002 | `        if (parallax) {` | Starts a conditional branch based on current runtime state. |
| 1003 | `          parallax.style.transform = \`translateY(${scrolled * 0.5}px)\`;` | Executable statement used by the server or client runtime. |
| 1004 | `        }` | Closes the current code block. |
| 1005 | `      });` | Closes the current code block. |
| 1006 | `    </script>` | HTML markup that contributes structure, metadata, or visible content. |
| 1007 | `  </body>` | HTML markup that contributes structure, metadata, or visible content. |
| 1008 | `</html>` | HTML markup that contributes structure, metadata, or visible content. |

## persev-compiled/frontend/links.html

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `<!doctype html>` | HTML markup that contributes structure, metadata, or visible content. |
| 2 | `<html lang="en">` | HTML markup that contributes structure, metadata, or visible content. |
| 3 | `  <head>` | HTML markup that contributes structure, metadata, or visible content. |
| 4 | `    <meta charset="UTF-8" />` | HTML markup that contributes structure, metadata, or visible content. |
| 5 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />` | HTML markup that contributes structure, metadata, or visible content. |
| 6 | `    <meta name="description" content="Perseverantia Quick Links - Access all important pages">` | HTML markup that contributes structure, metadata, or visible content. |
| 7 | `    <link rel="icon" type="image/png" href="/assets/persev.png" />` | HTML markup that contributes structure, metadata, or visible content. |
| 8 | `    <title>Quick Links - Perseverantia</title>` | HTML markup that contributes structure, metadata, or visible content. |
| 9 | `    <script src="https://cdn.tailwindcss.com"></script>` | HTML markup that contributes structure, metadata, or visible content. |
| 10 | `    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">` | HTML markup that contributes structure, metadata, or visible content. |
| 11 | `    ` | Spacing line to separate blocks and improve readability. |
| 12 | `    <style>` | HTML markup that contributes structure, metadata, or visible content. |
| 13 | `      @font-face {` | Executable statement used by the server or client runtime. |
| 14 | `        font-family: Mestizo;` | Executable statement used by the server or client runtime. |
| 15 | `        src: url(/assets/MestizoFont.ttf);` | Executable statement used by the server or client runtime. |
| 16 | `        font-display: swap;` | Executable statement used by the server or client runtime. |
| 17 | `      }` | Closes the current code block. |
| 18 | `      ` | Spacing line to separate blocks and improve readability. |
| 19 | `      body {` | Executable statement used by the server or client runtime. |
| 20 | `        background: linear-gradient(135deg, #0a0f2c, #1a2949);` | Executable statement used by the server or client runtime. |
| 21 | `        min-height: 100vh;` | Executable statement used by the server or client runtime. |
| 22 | `        margin: 0;` | Executable statement used by the server or client runtime. |
| 23 | `        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;` | Executable statement used by the server or client runtime. |
| 24 | `      }` | Closes the current code block. |
| 25 | `      ` | Spacing line to separate blocks and improve readability. |
| 26 | `      .container {` | Executable statement used by the server or client runtime. |
| 27 | `        max-width: 1200px;` | Executable statement used by the server or client runtime. |
| 28 | `        margin: 0 auto;` | Executable statement used by the server or client runtime. |
| 29 | `        padding: 0 1rem;` | Executable statement used by the server or client runtime. |
| 30 | `      }` | Closes the current code block. |
| 31 | `      ` | Spacing line to separate blocks and improve readability. |
| 32 | `      #loading-screen {` | Executable statement used by the server or client runtime. |
| 33 | `        position: fixed;` | Executable statement used by the server or client runtime. |
| 34 | `        inset: 0;` | Executable statement used by the server or client runtime. |
| 35 | `        background: linear-gradient(135deg, #0a0f2c, #1a2949);` | Executable statement used by the server or client runtime. |
| 36 | `        z-index: 9999;` | Executable statement used by the server or client runtime. |
| 37 | `        display: flex;` | Executable statement used by the server or client runtime. |
| 38 | `        align-items: center;` | Executable statement used by the server or client runtime. |
| 39 | `        justify-content: center;` | Executable statement used by the server or client runtime. |
| 40 | `        transition: opacity 0.6s ease;` | Executable statement used by the server or client runtime. |
| 41 | `      }` | Closes the current code block. |
| 42 | `      ` | Spacing line to separate blocks and improve readability. |
| 43 | `      #loading-screen.fade-out {` | Executable statement used by the server or client runtime. |
| 44 | `        opacity: 0;` | Executable statement used by the server or client runtime. |
| 45 | `        pointer-events: none;` | Executable statement used by the server or client runtime. |
| 46 | `      }` | Closes the current code block. |
| 47 | `      ` | Spacing line to separate blocks and improve readability. |
| 48 | `      .loading-video {` | Executable statement used by the server or client runtime. |
| 49 | `        width: 150px;` | Executable statement used by the server or client runtime. |
| 50 | `        height: 150px;` | Executable statement used by the server or client runtime. |
| 51 | `        object-fit: contain;` | Executable statement used by the server or client runtime. |
| 52 | `        filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7));` | Executable statement used by the server or client runtime. |
| 53 | `        border-radius: 12px;` | Executable statement used by the server or client runtime. |
| 54 | `      }` | Closes the current code block. |
| 55 | `      ` | Spacing line to separate blocks and improve readability. |
| 56 | `      /* Enhanced Animations */` | Block comment content or boundary. |
| 57 | `      .animate-navbar {` | Executable statement used by the server or client runtime. |
| 58 | `        animation: slideInFromTop 0.8s ease-out;` | Executable statement used by the server or client runtime. |
| 59 | `      }` | Closes the current code block. |
| 60 | `      ` | Spacing line to separate blocks and improve readability. |
| 61 | `      .animate-logo {` | Executable statement used by the server or client runtime. |
| 62 | `        animation: logoFloat 1.2s ease-out 0.5s both;` | Executable statement used by the server or client runtime. |
| 63 | `      }` | Closes the current code block. |
| 64 | `      ` | Spacing line to separate blocks and improve readability. |
| 65 | `      .animate-title {` | Executable statement used by the server or client runtime. |
| 66 | `        animation: fadeInUp 1s ease-out 0.8s both;` | Executable statement used by the server or client runtime. |
| 67 | `      }` | Closes the current code block. |
| 68 | `      ` | Spacing line to separate blocks and improve readability. |
| 69 | `      .animate-subtitle {` | Executable statement used by the server or client runtime. |
| 70 | `        animation: fadeInUp 1s ease-out 1s both;` | Executable statement used by the server or client runtime. |
| 71 | `      }` | Closes the current code block. |
| 72 | `      ` | Spacing line to separate blocks and improve readability. |
| 73 | `      .animate-link-1 {` | Executable statement used by the server or client runtime. |
| 74 | `        animation: fadeInScale 0.8s ease-out 1.2s both;` | Executable statement used by the server or client runtime. |
| 75 | `      }` | Closes the current code block. |
| 76 | `      ` | Spacing line to separate blocks and improve readability. |
| 77 | `      .animate-link-2 {` | Executable statement used by the server or client runtime. |
| 78 | `        animation: fadeInScale 0.8s ease-out 1.4s both;` | Executable statement used by the server or client runtime. |
| 79 | `      }` | Closes the current code block. |
| 80 | `      ` | Spacing line to separate blocks and improve readability. |
| 81 | `      .animate-link-3 {` | Executable statement used by the server or client runtime. |
| 82 | `        animation: fadeInScale 0.8s ease-out 1.6s both;` | Executable statement used by the server or client runtime. |
| 83 | `      }` | Closes the current code block. |
| 84 | `      ` | Spacing line to separate blocks and improve readability. |
| 85 | `      .animate-footer {` | Executable statement used by the server or client runtime. |
| 86 | `        animation: slideInFromBottom 0.8s ease-out 1.8s both;` | Executable statement used by the server or client runtime. |
| 87 | `      }` | Closes the current code block. |
| 88 | `      ` | Spacing line to separate blocks and improve readability. |
| 89 | `      @keyframes slideInFromTop {` | Executable statement used by the server or client runtime. |
| 90 | `        0% {` | Executable statement used by the server or client runtime. |
| 91 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 92 | `          transform: translateY(-30px);` | Executable statement used by the server or client runtime. |
| 93 | `        }` | Closes the current code block. |
| 94 | `        100% {` | Executable statement used by the server or client runtime. |
| 95 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 96 | `          transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 97 | `        }` | Closes the current code block. |
| 98 | `      }` | Closes the current code block. |
| 99 | `      ` | Spacing line to separate blocks and improve readability. |
| 100 | `      @keyframes logoFloat {` | Executable statement used by the server or client runtime. |
| 101 | `        0% {` | Executable statement used by the server or client runtime. |
| 102 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 103 | `          transform: translateY(20px) scale(0.9);` | Executable statement used by the server or client runtime. |
| 104 | `        }` | Closes the current code block. |
| 105 | `        100% {` | Executable statement used by the server or client runtime. |
| 106 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 107 | `          transform: translateY(0) scale(1);` | Executable statement used by the server or client runtime. |
| 108 | `        }` | Closes the current code block. |
| 109 | `      }` | Closes the current code block. |
| 110 | `      ` | Spacing line to separate blocks and improve readability. |
| 111 | `      @keyframes fadeInUp {` | Executable statement used by the server or client runtime. |
| 112 | `        0% {` | Executable statement used by the server or client runtime. |
| 113 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 114 | `          transform: translateY(30px);` | Executable statement used by the server or client runtime. |
| 115 | `        }` | Closes the current code block. |
| 116 | `        100% {` | Executable statement used by the server or client runtime. |
| 117 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 118 | `          transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 119 | `        }` | Closes the current code block. |
| 120 | `      }` | Closes the current code block. |
| 121 | `      ` | Spacing line to separate blocks and improve readability. |
| 122 | `      @keyframes fadeInScale {` | Executable statement used by the server or client runtime. |
| 123 | `        0% {` | Executable statement used by the server or client runtime. |
| 124 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 125 | `          transform: scale(0.8) translateY(20px);` | Executable statement used by the server or client runtime. |
| 126 | `        }` | Closes the current code block. |
| 127 | `        100% {` | Executable statement used by the server or client runtime. |
| 128 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 129 | `          transform: scale(1) translateY(0);` | Executable statement used by the server or client runtime. |
| 130 | `        }` | Closes the current code block. |
| 131 | `      }` | Closes the current code block. |
| 132 | `      ` | Spacing line to separate blocks and improve readability. |
| 133 | `      @keyframes slideInFromBottom {` | Executable statement used by the server or client runtime. |
| 134 | `        0% {` | Executable statement used by the server or client runtime. |
| 135 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 136 | `          transform: translateY(30px);` | Executable statement used by the server or client runtime. |
| 137 | `        }` | Closes the current code block. |
| 138 | `        100% {` | Executable statement used by the server or client runtime. |
| 139 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 140 | `          transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 141 | `        }` | Closes the current code block. |
| 142 | `      }` | Closes the current code block. |
| 143 | `      ` | Spacing line to separate blocks and improve readability. |
| 144 | `      /* Link Button Styles */` | Block comment content or boundary. |
| 145 | `      .link-button {` | Executable statement used by the server or client runtime. |
| 146 | `        background: rgba(255, 255, 255, 0.05);` | Executable statement used by the server or client runtime. |
| 147 | `        backdrop-filter: blur(10px);` | Executable statement used by the server or client runtime. |
| 148 | `        border: 2px solid rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 149 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 150 | `        position: relative;` | Executable statement used by the server or client runtime. |
| 151 | `        overflow: hidden;` | Executable statement used by the server or client runtime. |
| 152 | `      }` | Closes the current code block. |
| 153 | `      ` | Spacing line to separate blocks and improve readability. |
| 154 | `      .link-button::before {` | Executable statement used by the server or client runtime. |
| 155 | `        content: '';` | Executable statement used by the server or client runtime. |
| 156 | `        position: absolute;` | Executable statement used by the server or client runtime. |
| 157 | `        top: 0;` | Executable statement used by the server or client runtime. |
| 158 | `        left: -100%;` | Executable statement used by the server or client runtime. |
| 159 | `        width: 100%;` | Executable statement used by the server or client runtime. |
| 160 | `        height: 100%;` | Executable statement used by the server or client runtime. |
| 161 | `        background: linear-gradient(90deg, transparent, rgba(190, 142, 48, 0.2), transparent);` | Executable statement used by the server or client runtime. |
| 162 | `        transition: left 0.5s;` | Executable statement used by the server or client runtime. |
| 163 | `      }` | Closes the current code block. |
| 164 | `      ` | Spacing line to separate blocks and improve readability. |
| 165 | `      .link-button:hover::before {` | Executable statement used by the server or client runtime. |
| 166 | `        left: 100%;` | Executable statement used by the server or client runtime. |
| 167 | `      }` | Closes the current code block. |
| 168 | `      ` | Spacing line to separate blocks and improve readability. |
| 169 | `      .link-button:hover {` | Executable statement used by the server or client runtime. |
| 170 | `        background: rgba(190, 142, 48, 0.1);` | Executable statement used by the server or client runtime. |
| 171 | `        border-color: #BE8E30;` | Executable statement used by the server or client runtime. |
| 172 | `        box-shadow: 0 0 30px rgba(190, 142, 48, 0.4);` | Executable statement used by the server or client runtime. |
| 173 | `        transform: translateY(-5px) scale(1.02);` | Executable statement used by the server or client runtime. |
| 174 | `      }` | Closes the current code block. |
| 175 | `      ` | Spacing line to separate blocks and improve readability. |
| 176 | `      .link-icon {` | Executable statement used by the server or client runtime. |
| 177 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 178 | `        filter: drop-shadow(0 0 10px rgba(190, 142, 48, 0.6));` | Executable statement used by the server or client runtime. |
| 179 | `      }` | Closes the current code block. |
| 180 | `      ` | Spacing line to separate blocks and improve readability. |
| 181 | `      .link-button:hover .link-icon {` | Executable statement used by the server or client runtime. |
| 182 | `        transform: scale(1.1);` | Executable statement used by the server or client runtime. |
| 183 | `        filter: drop-shadow(0 0 15px rgba(190, 142, 48, 0.8));` | Executable statement used by the server or client runtime. |
| 184 | `      }` | Closes the current code block. |
| 185 | `      ` | Spacing line to separate blocks and improve readability. |
| 186 | `      /* Hover Glow Effect */` | Block comment content or boundary. |
| 187 | `      .hover-glow {` | Executable statement used by the server or client runtime. |
| 188 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 189 | `      }` | Closes the current code block. |
| 190 | `      ` | Spacing line to separate blocks and improve readability. |
| 191 | `      .hover-glow:hover {` | Executable statement used by the server or client runtime. |
| 192 | `        text-shadow: 0 0 15px rgba(190, 142, 48, 0.8);` | Executable statement used by the server or client runtime. |
| 193 | `        transform: scale(1.02);` | Executable statement used by the server or client runtime. |
| 194 | `      }` | Closes the current code block. |
| 195 | `      ` | Spacing line to separate blocks and improve readability. |
| 196 | `      /* Background Decorations */` | Block comment content or boundary. |
| 197 | `      .bg-decoration {` | Executable statement used by the server or client runtime. |
| 198 | `        position: fixed;` | Executable statement used by the server or client runtime. |
| 199 | `        pointer-events: none;` | Executable statement used by the server or client runtime. |
| 200 | `        z-index: 1;` | Executable statement used by the server or client runtime. |
| 201 | `      }` | Closes the current code block. |
| 202 | `      ` | Spacing line to separate blocks and improve readability. |
| 203 | `      .bg-decoration::before,` | Executable statement used by the server or client runtime. |
| 204 | `      .bg-decoration::after {` | Executable statement used by the server or client runtime. |
| 205 | `        content: '';` | Executable statement used by the server or client runtime. |
| 206 | `        position: absolute;` | Executable statement used by the server or client runtime. |
| 207 | `        border-radius: 50%;` | Executable statement used by the server or client runtime. |
| 208 | `        background: rgba(190, 142, 48, 0.1);` | Executable statement used by the server or client runtime. |
| 209 | `        animation: float 6s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 210 | `        box-shadow: 0 0 30px rgba(190, 142, 48, 0.2);` | Executable statement used by the server or client runtime. |
| 211 | `      }` | Closes the current code block. |
| 212 | `      ` | Spacing line to separate blocks and improve readability. |
| 213 | `      .bg-decoration::before {` | Executable statement used by the server or client runtime. |
| 214 | `        width: 200px;` | Executable statement used by the server or client runtime. |
| 215 | `        height: 200px;` | Executable statement used by the server or client runtime. |
| 216 | `        top: 10%;` | Executable statement used by the server or client runtime. |
| 217 | `        right: 10%;` | Executable statement used by the server or client runtime. |
| 218 | `        animation-delay: 0s;` | Executable statement used by the server or client runtime. |
| 219 | `      }` | Closes the current code block. |
| 220 | `      ` | Spacing line to separate blocks and improve readability. |
| 221 | `      .bg-decoration::after {` | Executable statement used by the server or client runtime. |
| 222 | `        width: 150px;` | Executable statement used by the server or client runtime. |
| 223 | `        height: 150px;` | Executable statement used by the server or client runtime. |
| 224 | `        bottom: 20%;` | Executable statement used by the server or client runtime. |
| 225 | `        left: 10%;` | Executable statement used by the server or client runtime. |
| 226 | `        animation-delay: 3s;` | Executable statement used by the server or client runtime. |
| 227 | `      }` | Closes the current code block. |
| 228 | `      ` | Spacing line to separate blocks and improve readability. |
| 229 | `      @keyframes float {` | Executable statement used by the server or client runtime. |
| 230 | `        0%, 100% { transform: translateY(0px) rotate(0deg); }` | Executable statement used by the server or client runtime. |
| 231 | `        50% { transform: translateY(-20px) rotate(180deg); }` | Executable statement used by the server or client runtime. |
| 232 | `      }` | Closes the current code block. |
| 233 | `      ` | Spacing line to separate blocks and improve readability. |
| 234 | `      /* Ripple Effect */` | Block comment content or boundary. |
| 235 | `      .ripple {` | Executable statement used by the server or client runtime. |
| 236 | `        position: absolute;` | Executable statement used by the server or client runtime. |
| 237 | `        border-radius: 50%;` | Executable statement used by the server or client runtime. |
| 238 | `        background: rgba(190, 142, 48, 0.6);` | Executable statement used by the server or client runtime. |
| 239 | `        transform: scale(0);` | Executable statement used by the server or client runtime. |
| 240 | `        animation: ripple-animation 0.6s linear;` | Executable statement used by the server or client runtime. |
| 241 | `        pointer-events: none;` | Executable statement used by the server or client runtime. |
| 242 | `      }` | Closes the current code block. |
| 243 | `      ` | Spacing line to separate blocks and improve readability. |
| 244 | `      @keyframes ripple-animation {` | Executable statement used by the server or client runtime. |
| 245 | `        to {` | Executable statement used by the server or client runtime. |
| 246 | `          transform: scale(4);` | Executable statement used by the server or client runtime. |
| 247 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 248 | `        }` | Closes the current code block. |
| 249 | `      }` | Closes the current code block. |
| 250 | `      ` | Spacing line to separate blocks and improve readability. |
| 251 | `      /* Mobile Responsiveness */` | Block comment content or boundary. |
| 252 | `      @media (max-width: 768px) {` | Executable statement used by the server or client runtime. |
| 253 | `        .bg-decoration::before,` | Executable statement used by the server or client runtime. |
| 254 | `        .bg-decoration::after {` | Executable statement used by the server or client runtime. |
| 255 | `          display: none;` | Executable statement used by the server or client runtime. |
| 256 | `        }` | Closes the current code block. |
| 257 | `      }` | Closes the current code block. |
| 258 | `    </style>` | HTML markup that contributes structure, metadata, or visible content. |
| 259 | `  </head>` | HTML markup that contributes structure, metadata, or visible content. |
| 260 | `  ` | Spacing line to separate blocks and improve readability. |
| 261 | `  <body class="text-white">` | HTML markup that contributes structure, metadata, or visible content. |
| 262 | `    <!-- Loading Screen -->` | HTML markup that contributes structure, metadata, or visible content. |
| 263 | `    <div id="loading-screen">` | HTML markup that contributes structure, metadata, or visible content. |
| 264 | `      <video` | HTML markup that contributes structure, metadata, or visible content. |
| 265 | `        autoplay` | Executable statement used by the server or client runtime. |
| 266 | `        muted` | Executable statement used by the server or client runtime. |
| 267 | `        loop` | Executable statement used by the server or client runtime. |
| 268 | `        playsinline` | Executable statement used by the server or client runtime. |
| 269 | `        class="loading-video"` | Executable statement used by the server or client runtime. |
| 270 | `      >` | Executable statement used by the server or client runtime. |
| 271 | `        <source src="/assets/load.mp4" type="video/mp4" />` | HTML markup that contributes structure, metadata, or visible content. |
| 272 | `        Your browser does not support the video tag.` | Executable statement used by the server or client runtime. |
| 273 | `      </video>` | HTML markup that contributes structure, metadata, or visible content. |
| 274 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 275 | `` | Spacing line to separate blocks and improve readability. |
| 276 | `    <!-- Background Decorations -->` | HTML markup that contributes structure, metadata, or visible content. |
| 277 | `    <div class="bg-decoration"></div>` | HTML markup that contributes structure, metadata, or visible content. |
| 278 | `` | Spacing line to separate blocks and improve readability. |
| 279 | `    <!-- Navbar -->` | HTML markup that contributes structure, metadata, or visible content. |
| 280 | `    <nav class="text-white animate-navbar" style="background: #081032">` | HTML markup that contributes structure, metadata, or visible content. |
| 281 | `      <div class="container mx-auto px-4 py-4 flex justify-between items-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 282 | `        <div class="text-2xl hover-glow" style="font-family: Mestizo">` | HTML markup that contributes structure, metadata, or visible content. |
| 283 | `          Perseverantia` | Executable statement used by the server or client runtime. |
| 284 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 285 | `        <div>` | HTML markup that contributes structure, metadata, or visible content. |
| 286 | `          <a href="/" class="text-white hover:text-yellow-300 transition-colors">` | HTML markup that contributes structure, metadata, or visible content. |
| 287 | `            <i class="fas fa-home text-xl"></i>` | HTML markup that contributes structure, metadata, or visible content. |
| 288 | `          </a>` | HTML markup that contributes structure, metadata, or visible content. |
| 289 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 290 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 291 | `    </nav>` | HTML markup that contributes structure, metadata, or visible content. |
| 292 | `` | Spacing line to separate blocks and improve readability. |
| 293 | `    <!-- Main Content -->` | HTML markup that contributes structure, metadata, or visible content. |
| 294 | `    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-8">` | HTML markup that contributes structure, metadata, or visible content. |
| 295 | `      <!-- Logo -->` | HTML markup that contributes structure, metadata, or visible content. |
| 296 | `      <div class="mb-8 animate-logo">` | HTML markup that contributes structure, metadata, or visible content. |
| 297 | `        <img` | HTML markup that contributes structure, metadata, or visible content. |
| 298 | `          src="/assets/persev.png"` | Executable statement used by the server or client runtime. |
| 299 | `          alt="Perseverantia Logo"` | Executable statement used by the server or client runtime. |
| 300 | `          class="w-24 h-24 mx-auto filter drop-shadow-lg"` | Executable statement used by the server or client runtime. |
| 301 | `        />` | Executable statement used by the server or client runtime. |
| 302 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 303 | `` | Spacing line to separate blocks and improve readability. |
| 304 | `      <!-- Title -->` | HTML markup that contributes structure, metadata, or visible content. |
| 305 | `      <h1 class="text-4xl md:text-5xl font-bold text-center mb-4 animate-title hover-glow" style="font-family: Mestizo">` | HTML markup that contributes structure, metadata, or visible content. |
| 306 | `        Quick Links` | Executable statement used by the server or client runtime. |
| 307 | `      </h1>` | HTML markup that contributes structure, metadata, or visible content. |
| 308 | `      ` | Spacing line to separate blocks and improve readability. |
| 309 | `      <!-- Subtitle -->` | HTML markup that contributes structure, metadata, or visible content. |
| 310 | `      <p class="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-md animate-subtitle">` | HTML markup that contributes structure, metadata, or visible content. |
| 311 | `        Access all the important information and resources for Perseverantia 2025` | Executable statement used by the server or client runtime. |
| 312 | `      </p>` | HTML markup that contributes structure, metadata, or visible content. |
| 313 | `` | Spacing line to separate blocks and improve readability. |
| 314 | `      <!-- Links Container -->` | HTML markup that contributes structure, metadata, or visible content. |
| 315 | `      <div class="w-full max-w-md space-y-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 316 | `        ` | Spacing line to separate blocks and improve readability. |
| 317 | `        <!-- Menu Items Link -->` | HTML markup that contributes structure, metadata, or visible content. |
| 318 | `        <a` | HTML markup that contributes structure, metadata, or visible content. |
| 319 | `          href="/food-menu"` | Executable statement used by the server or client runtime. |
| 320 | `          class="link-button w-full flex items-center justify-center p-6 rounded-2xl text-white text-lg font-semibold animate-link-1"` | Executable statement used by the server or client runtime. |
| 321 | `        >` | Executable statement used by the server or client runtime. |
| 322 | `          <i class="fas fa-utensils text-2xl mr-4 text-[#BE8E30] link-icon"></i>` | HTML markup that contributes structure, metadata, or visible content. |
| 323 | `          <span>Menu Items</span>` | HTML markup that contributes structure, metadata, or visible content. |
| 324 | `        </a>` | HTML markup that contributes structure, metadata, or visible content. |
| 325 | `` | Spacing line to separate blocks and improve readability. |
| 326 | `        <!-- School Leaderboard Link -->` | HTML markup that contributes structure, metadata, or visible content. |
| 327 | `        <a` | HTML markup that contributes structure, metadata, or visible content. |
| 328 | `          href="/leaderboard"` | Executable statement used by the server or client runtime. |
| 329 | `          class="link-button w-full flex items-center justify-center p-6 rounded-2xl text-white text-lg font-semibold animate-link-2"` | Executable statement used by the server or client runtime. |
| 330 | `        >` | Executable statement used by the server or client runtime. |
| 331 | `          <i class="fas fa-trophy text-2xl mr-4 text-[#BE8E30] link-icon"></i>` | HTML markup that contributes structure, metadata, or visible content. |
| 332 | `          <span>School Leaderboard</span>` | HTML markup that contributes structure, metadata, or visible content. |
| 333 | `        </a>` | HTML markup that contributes structure, metadata, or visible content. |
| 334 | `` | Spacing line to separate blocks and improve readability. |
| 335 | `        <!-- Event Locations Link -->` | HTML markup that contributes structure, metadata, or visible content. |
| 336 | `        <a` | HTML markup that contributes structure, metadata, or visible content. |
| 337 | `          href="/locations"` | Executable statement used by the server or client runtime. |
| 338 | `          class="link-button w-full flex items-center justify-center p-6 rounded-2xl text-white text-lg font-semibold animate-link-3"` | Executable statement used by the server or client runtime. |
| 339 | `        >` | Executable statement used by the server or client runtime. |
| 340 | `          <i class="fas fa-map-marker-alt text-2xl mr-4 text-[#BE8E30] link-icon"></i>` | HTML markup that contributes structure, metadata, or visible content. |
| 341 | `          <span>Event Locations</span>` | HTML markup that contributes structure, metadata, or visible content. |
| 342 | `        </a>` | HTML markup that contributes structure, metadata, or visible content. |
| 343 | `` | Spacing line to separate blocks and improve readability. |
| 344 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 345 | `` | Spacing line to separate blocks and improve readability. |
| 346 | `      <!-- Footer -->` | HTML markup that contributes structure, metadata, or visible content. |
| 347 | `      <div class="mt-16 text-center animate-footer">` | HTML markup that contributes structure, metadata, or visible content. |
| 348 | `        <p class="text-gray-400 text-sm hover-glow">` | HTML markup that contributes structure, metadata, or visible content. |
| 349 | `          &copy; 2025 Bombay Scottish School, Mahim` | Executable statement used by the server or client runtime. |
| 350 | `        </p>` | HTML markup that contributes structure, metadata, or visible content. |
| 351 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 352 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 353 | `` | Spacing line to separate blocks and improve readability. |
| 354 | `    <!-- Scripts -->` | HTML markup that contributes structure, metadata, or visible content. |
| 355 | `    <script>` | HTML markup that contributes structure, metadata, or visible content. |
| 356 | `      // Loading screen fade out` | Comment that documents intent for the following code block. |
| 357 | `      window.addEventListener('load', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 358 | `        const loader = document.getElementById("loading-screen");` | Defines a constant binding for config, module import, or computed value. |
| 359 | `        setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 360 | `          loader.classList.add("fade-out");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 361 | `          setTimeout(() => loader.remove(), 600);` | Arrow-function expression used as a concise callback/helper. |
| 362 | `        }, 1500);` | Closes the current code block. |
| 363 | `      });` | Closes the current code block. |
| 364 | `` | Spacing line to separate blocks and improve readability. |
| 365 | `      // Ripple effect for buttons` | Comment that documents intent for the following code block. |
| 366 | `      document.querySelectorAll('.link-button').forEach(button => {` | Iterates over a list to process each item. |
| 367 | `        button.addEventListener('click', function(e) {` | Subscribes to a browser event and runs callback logic when triggered. |
| 368 | `          const ripple = document.createElement('span');` | Defines a constant binding for config, module import, or computed value. |
| 369 | `          const rect = this.getBoundingClientRect();` | Defines a constant binding for config, module import, or computed value. |
| 370 | `          const size = Math.max(rect.width, rect.height);` | Defines a constant binding for config, module import, or computed value. |
| 371 | `          const x = e.clientX - rect.left - size / 2;` | Defines a constant binding for config, module import, or computed value. |
| 372 | `          const y = e.clientY - rect.top - size / 2;` | Defines a constant binding for config, module import, or computed value. |
| 373 | `          ` | Spacing line to separate blocks and improve readability. |
| 374 | `          ripple.style.width = ripple.style.height = size + 'px';` | Executable statement used by the server or client runtime. |
| 375 | `          ripple.style.left = x + 'px';` | Executable statement used by the server or client runtime. |
| 376 | `          ripple.style.top = y + 'px';` | Executable statement used by the server or client runtime. |
| 377 | `          ripple.classList.add('ripple');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 378 | `          ` | Spacing line to separate blocks and improve readability. |
| 379 | `          this.appendChild(ripple);` | Executable statement used by the server or client runtime. |
| 380 | `          ` | Spacing line to separate blocks and improve readability. |
| 381 | `          setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 382 | `            ripple.remove();` | Executable statement used by the server or client runtime. |
| 383 | `          }, 600);` | Closes the current code block. |
| 384 | `        });` | Closes the current code block. |
| 385 | `      });` | Closes the current code block. |
| 386 | `` | Spacing line to separate blocks and improve readability. |
| 387 | `      // Add floating animation to navbar title` | Comment that documents intent for the following code block. |
| 388 | `      const navTitle = document.querySelector('.hover-glow');` | Defines a constant binding for config, module import, or computed value. |
| 389 | `      if (navTitle) {` | Starts a conditional branch based on current runtime state. |
| 390 | `        navTitle.addEventListener('mouseenter', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 391 | `          navTitle.style.animation = 'logoFloat 0.6s ease-in-out';` | Executable statement used by the server or client runtime. |
| 392 | `        });` | Closes the current code block. |
| 393 | `        navTitle.addEventListener('animationend', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 394 | `          navTitle.style.animation = '';` | Executable statement used by the server or client runtime. |
| 395 | `        });` | Closes the current code block. |
| 396 | `      }` | Closes the current code block. |
| 397 | `    </script>` | HTML markup that contributes structure, metadata, or visible content. |
| 398 | `  </body>` | HTML markup that contributes structure, metadata, or visible content. |
| 399 | `</html>` | HTML markup that contributes structure, metadata, or visible content. |

## persev-compiled/frontend/locations.html

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `<!doctype html>` | HTML markup that contributes structure, metadata, or visible content. |
| 2 | `<html lang="en">` | HTML markup that contributes structure, metadata, or visible content. |
| 3 | `  <head>` | HTML markup that contributes structure, metadata, or visible content. |
| 4 | `    <meta charset="UTF-8" />` | HTML markup that contributes structure, metadata, or visible content. |
| 5 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />` | HTML markup that contributes structure, metadata, or visible content. |
| 6 | `    <meta name="description" content="Event Locations and Schedule - Perseverantia 2025">` | HTML markup that contributes structure, metadata, or visible content. |
| 7 | `    <link rel="icon" type="image/png" href="/assets/persev.png" />` | HTML markup that contributes structure, metadata, or visible content. |
| 8 | `    <title>Event Locations - Perseverantia</title>` | HTML markup that contributes structure, metadata, or visible content. |
| 9 | `    <link rel="preload" href="/static/style.min.css" as="style" onload="this.rel='stylesheet'">` | HTML markup that contributes structure, metadata, or visible content. |
| 10 | `    <noscript><link rel="stylesheet" href="/static/style.min.css"></noscript>` | HTML markup that contributes structure, metadata, or visible content. |
| 11 | `    <script src="https://cdn.tailwindcss.com"></script>` | HTML markup that contributes structure, metadata, or visible content. |
| 12 | `    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">` | HTML markup that contributes structure, metadata, or visible content. |
| 13 | `` | Spacing line to separate blocks and improve readability. |
| 14 | `    <style>` | HTML markup that contributes structure, metadata, or visible content. |
| 15 | `      @font-face {` | Executable statement used by the server or client runtime. |
| 16 | `        font-family: Mestizo;` | Executable statement used by the server or client runtime. |
| 17 | `        src: url(/assets/MestizoFont.ttf);` | Executable statement used by the server or client runtime. |
| 18 | `        font-display: swap;` | Executable statement used by the server or client runtime. |
| 19 | `      }` | Closes the current code block. |
| 20 | `      ` | Spacing line to separate blocks and improve readability. |
| 21 | `      #loading-screen.fade-out {` | Executable statement used by the server or client runtime. |
| 22 | `        opacity: 0;` | Executable statement used by the server or client runtime. |
| 23 | `        pointer-events: none;` | Executable statement used by the server or client runtime. |
| 24 | `      }` | Closes the current code block. |
| 25 | `      ` | Spacing line to separate blocks and improve readability. |
| 26 | `      /* Animation Styles */` | Block comment content or boundary. |
| 27 | `      .animate-slide-in-top {` | Executable statement used by the server or client runtime. |
| 28 | `        animation: slideInFromTop 1s ease-out 0.3s both;` | Executable statement used by the server or client runtime. |
| 29 | `      }` | Closes the current code block. |
| 30 | `      ` | Spacing line to separate blocks and improve readability. |
| 31 | `      .animate-fade-in-up {` | Executable statement used by the server or client runtime. |
| 32 | `        animation: fadeInUp 1s ease-out 0.6s both;` | Executable statement used by the server or client runtime. |
| 33 | `      }` | Closes the current code block. |
| 34 | `      ` | Spacing line to separate blocks and improve readability. |
| 35 | `      .animate-navbar {` | Executable statement used by the server or client runtime. |
| 36 | `        animation: slideInFromTop 0.8s ease-out;` | Executable statement used by the server or client runtime. |
| 37 | `      }` | Closes the current code block. |
| 38 | `      ` | Spacing line to separate blocks and improve readability. |
| 39 | `      .hover-glow {` | Executable statement used by the server or client runtime. |
| 40 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 41 | `      }` | Closes the current code block. |
| 42 | `      ` | Spacing line to separate blocks and improve readability. |
| 43 | `      .hover-glow:hover {` | Executable statement used by the server or client runtime. |
| 44 | `        text-shadow: 0 0 15px rgba(190, 142, 48, 0.8);` | Executable statement used by the server or client runtime. |
| 45 | `        transform: scale(1.02);` | Executable statement used by the server or client runtime. |
| 46 | `      }` | Closes the current code block. |
| 47 | `      ` | Spacing line to separate blocks and improve readability. |
| 48 | `      .hover-lift:hover {` | Executable statement used by the server or client runtime. |
| 49 | `        transform: translateY(-5px);` | Executable statement used by the server or client runtime. |
| 50 | `        box-shadow: 0 10px 25px rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 51 | `      }` | Closes the current code block. |
| 52 | `      ` | Spacing line to separate blocks and improve readability. |
| 53 | `      @keyframes slideInFromTop {` | Executable statement used by the server or client runtime. |
| 54 | `        0% {` | Executable statement used by the server or client runtime. |
| 55 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 56 | `          transform: translateY(-50px);` | Executable statement used by the server or client runtime. |
| 57 | `        }` | Closes the current code block. |
| 58 | `        100% {` | Executable statement used by the server or client runtime. |
| 59 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 60 | `          transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 61 | `        }` | Closes the current code block. |
| 62 | `      }` | Closes the current code block. |
| 63 | `      ` | Spacing line to separate blocks and improve readability. |
| 64 | `      @keyframes fadeInUp {` | Executable statement used by the server or client runtime. |
| 65 | `        0% {` | Executable statement used by the server or client runtime. |
| 66 | `          opacity: 0;` | Executable statement used by the server or client runtime. |
| 67 | `          transform: translateY(30px);` | Executable statement used by the server or client runtime. |
| 68 | `        }` | Closes the current code block. |
| 69 | `        100% {` | Executable statement used by the server or client runtime. |
| 70 | `          opacity: 1;` | Executable statement used by the server or client runtime. |
| 71 | `          transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 72 | `        }` | Closes the current code block. |
| 73 | `      }` | Closes the current code block. |
| 74 | `      ` | Spacing line to separate blocks and improve readability. |
| 75 | `      /* Table Styles */` | Block comment content or boundary. |
| 76 | `      .event-table {` | Executable statement used by the server or client runtime. |
| 77 | `        background: linear-gradient(135deg, rgba(8, 16, 50, 0.95), rgba(26, 41, 73, 0.95));` | Executable statement used by the server or client runtime. |
| 78 | `        backdrop-filter: blur(15px);` | Executable statement used by the server or client runtime. |
| 79 | `        border: 2px solid rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 80 | `        border-radius: 25px;` | Executable statement used by the server or client runtime. |
| 81 | `        box-shadow: ` | Executable statement used by the server or client runtime. |
| 82 | `          0 25px 50px rgba(0, 0, 0, 0.3),` | Executable statement used by the server or client runtime. |
| 83 | `          0 0 30px rgba(190, 142, 48, 0.2),` | Executable statement used by the server or client runtime. |
| 84 | `          inset 0 1px 0 rgba(255, 215, 0, 0.1);` | Executable statement used by the server or client runtime. |
| 85 | `        overflow-x: auto;` | Executable statement used by the server or client runtime. |
| 86 | `        overflow-y: visible;` | Executable statement used by the server or client runtime. |
| 87 | `        animation: fadeInUp 0.8s ease-out 0.4s both;` | Executable statement used by the server or client runtime. |
| 88 | `        position: relative;` | Executable statement used by the server or client runtime. |
| 89 | `        -webkit-overflow-scrolling: touch;` | Executable statement used by the server or client runtime. |
| 90 | `      }` | Closes the current code block. |
| 91 | `      ` | Spacing line to separate blocks and improve readability. |
| 92 | `      .event-table::before {` | Executable statement used by the server or client runtime. |
| 93 | `        content: '';` | Executable statement used by the server or client runtime. |
| 94 | `        position: absolute;` | Executable statement used by the server or client runtime. |
| 95 | `        top: 0;` | Executable statement used by the server or client runtime. |
| 96 | `        left: 0;` | Executable statement used by the server or client runtime. |
| 97 | `        right: 0;` | Executable statement used by the server or client runtime. |
| 98 | `        bottom: 0;` | Executable statement used by the server or client runtime. |
| 99 | `        background: linear-gradient(45deg, ` | Executable statement used by the server or client runtime. |
| 100 | `          transparent 0%, ` | Executable statement used by the server or client runtime. |
| 101 | `          rgba(190, 142, 48, 0.05) 25%, ` | Executable statement used by the server or client runtime. |
| 102 | `          transparent 50%, ` | Executable statement used by the server or client runtime. |
| 103 | `          rgba(255, 215, 0, 0.05) 75%, ` | Executable statement used by the server or client runtime. |
| 104 | `          transparent 100%);` | Executable statement used by the server or client runtime. |
| 105 | `        pointer-events: none;` | Executable statement used by the server or client runtime. |
| 106 | `      }` | Closes the current code block. |
| 107 | `      ` | Spacing line to separate blocks and improve readability. |
| 108 | `      .table-header {` | Executable statement used by the server or client runtime. |
| 109 | `        background: linear-gradient(135deg, #BE8E30, #FFD700, #BE8E30);` | Executable statement used by the server or client runtime. |
| 110 | `        background-size: 200% 200%;` | Executable statement used by the server or client runtime. |
| 111 | `        animation: goldShimmer 3s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 112 | `        color: #081032;` | Executable statement used by the server or client runtime. |
| 113 | `        font-weight: bold;` | Executable statement used by the server or client runtime. |
| 114 | `        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);` | Executable statement used by the server or client runtime. |
| 115 | `        position: relative;` | Executable statement used by the server or client runtime. |
| 116 | `      }` | Closes the current code block. |
| 117 | `      ` | Spacing line to separate blocks and improve readability. |
| 118 | `      .table-header::after {` | Executable statement used by the server or client runtime. |
| 119 | `        content: '';` | Executable statement used by the server or client runtime. |
| 120 | `        position: absolute;` | Executable statement used by the server or client runtime. |
| 121 | `        top: 0;` | Executable statement used by the server or client runtime. |
| 122 | `        left: 0;` | Executable statement used by the server or client runtime. |
| 123 | `        right: 0;` | Executable statement used by the server or client runtime. |
| 124 | `        bottom: 0;` | Executable statement used by the server or client runtime. |
| 125 | `        background: linear-gradient(90deg, ` | Executable statement used by the server or client runtime. |
| 126 | `          transparent 0%, ` | Executable statement used by the server or client runtime. |
| 127 | `          rgba(255, 255, 255, 0.2) 50%, ` | Executable statement used by the server or client runtime. |
| 128 | `          transparent 100%);` | Executable statement used by the server or client runtime. |
| 129 | `        animation: headerGlow 2s ease-in-out infinite alternate;` | Executable statement used by the server or client runtime. |
| 130 | `      }` | Closes the current code block. |
| 131 | `      ` | Spacing line to separate blocks and improve readability. |
| 132 | `      @keyframes goldShimmer {` | Executable statement used by the server or client runtime. |
| 133 | `        0%, 100% { background-position: 0% 50%; }` | Executable statement used by the server or client runtime. |
| 134 | `        50% { background-position: 100% 50%; }` | Executable statement used by the server or client runtime. |
| 135 | `      }` | Closes the current code block. |
| 136 | `      ` | Spacing line to separate blocks and improve readability. |
| 137 | `      @keyframes headerGlow {` | Executable statement used by the server or client runtime. |
| 138 | `        0% { opacity: 0.3; }` | Executable statement used by the server or client runtime. |
| 139 | `        100% { opacity: 0.7; }` | Executable statement used by the server or client runtime. |
| 140 | `      }` | Closes the current code block. |
| 141 | `      ` | Spacing line to separate blocks and improve readability. |
| 142 | `      .table-row {` | Executable statement used by the server or client runtime. |
| 143 | `        background: linear-gradient(90deg, ` | Executable statement used by the server or client runtime. |
| 144 | `          rgba(190, 142, 48, 0.08), ` | Executable statement used by the server or client runtime. |
| 145 | `          rgba(255, 215, 0, 0.05), ` | Executable statement used by the server or client runtime. |
| 146 | `          rgba(190, 142, 48, 0.08));` | Executable statement used by the server or client runtime. |
| 147 | `        border-bottom: 1px solid rgba(190, 142, 48, 0.2);` | Executable statement used by the server or client runtime. |
| 148 | `        color: #FFD700;` | Executable statement used by the server or client runtime. |
| 149 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 150 | `      }` | Closes the current code block. |
| 151 | `      ` | Spacing line to separate blocks and improve readability. |
| 152 | `      .table-row:nth-child(even) {` | Executable statement used by the server or client runtime. |
| 153 | `        background: linear-gradient(90deg, ` | Executable statement used by the server or client runtime. |
| 154 | `          rgba(190, 142, 48, 0.12), ` | Executable statement used by the server or client runtime. |
| 155 | `          rgba(255, 215, 0, 0.08), ` | Executable statement used by the server or client runtime. |
| 156 | `          rgba(190, 142, 48, 0.12));` | Executable statement used by the server or client runtime. |
| 157 | `      }` | Closes the current code block. |
| 158 | `      ` | Spacing line to separate blocks and improve readability. |
| 159 | `      .table-row:hover {` | Executable statement used by the server or client runtime. |
| 160 | `        background: linear-gradient(90deg, ` | Executable statement used by the server or client runtime. |
| 161 | `          rgba(190, 142, 48, 0.25), ` | Executable statement used by the server or client runtime. |
| 162 | `          rgba(255, 215, 0, 0.2), ` | Executable statement used by the server or client runtime. |
| 163 | `          rgba(190, 142, 48, 0.25));` | Executable statement used by the server or client runtime. |
| 164 | `        transform: translateY(-2px);` | Executable statement used by the server or client runtime. |
| 165 | `        box-shadow: ` | Executable statement used by the server or client runtime. |
| 166 | `          0 8px 25px rgba(190, 142, 48, 0.4),` | Executable statement used by the server or client runtime. |
| 167 | `          0 0 20px rgba(255, 215, 0, 0.2),` | Executable statement used by the server or client runtime. |
| 168 | `          inset 0 1px 0 rgba(255, 215, 0, 0.1);` | Executable statement used by the server or client runtime. |
| 169 | `        border-left: 4px solid #FFD700;` | Executable statement used by the server or client runtime. |
| 170 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 171 | `      }` | Closes the current code block. |
| 172 | `      ` | Spacing line to separate blocks and improve readability. |
| 173 | `      .event-name {` | Executable statement used by the server or client runtime. |
| 174 | `        color: #FFD700;` | Executable statement used by the server or client runtime. |
| 175 | `        font-weight: 600;` | Executable statement used by the server or client runtime. |
| 176 | `        text-shadow: 0 0 5px rgba(255, 215, 0, 0.3);` | Executable statement used by the server or client runtime. |
| 177 | `      }` | Closes the current code block. |
| 178 | `      ` | Spacing line to separate blocks and improve readability. |
| 179 | `      .table-cell {` | Executable statement used by the server or client runtime. |
| 180 | `        color: rgba(255, 255, 255, 0.9);` | Executable statement used by the server or client runtime. |
| 181 | `        transition: color 0.3s ease;` | Executable statement used by the server or client runtime. |
| 182 | `      }` | Closes the current code block. |
| 183 | `      ` | Spacing line to separate blocks and improve readability. |
| 184 | `      .table-row:hover .table-cell {` | Executable statement used by the server or client runtime. |
| 185 | `        color: #FFD700;` | Executable statement used by the server or client runtime. |
| 186 | `        text-shadow: 0 0 5px rgba(255, 215, 0, 0.2);` | Executable statement used by the server or client runtime. |
| 187 | `      }` | Closes the current code block. |
| 188 | `      ` | Spacing line to separate blocks and improve readability. |
| 189 | `      .search-container {` | Executable statement used by the server or client runtime. |
| 190 | `        animation: fadeInUp 0.8s ease-out 0.2s both;` | Executable statement used by the server or client runtime. |
| 191 | `      }` | Closes the current code block. |
| 192 | `      ` | Spacing line to separate blocks and improve readability. |
| 193 | `      .search-input {` | Executable statement used by the server or client runtime. |
| 194 | `        background: linear-gradient(135deg, rgba(8, 16, 50, 0.9), rgba(26, 41, 73, 0.9));` | Executable statement used by the server or client runtime. |
| 195 | `        backdrop-filter: blur(15px);` | Executable statement used by the server or client runtime. |
| 196 | `        border: 2px solid #BE8E30;` | Executable statement used by the server or client runtime. |
| 197 | `        border-radius: 20px;` | Executable statement used by the server or client runtime. |
| 198 | `        padding: 15px 50px 15px 25px;` | Executable statement used by the server or client runtime. |
| 199 | `        font-size: 16px;` | Executable statement used by the server or client runtime. |
| 200 | `        transition: all 0.4s ease;` | Executable statement used by the server or client runtime. |
| 201 | `        width: 100%;` | Executable statement used by the server or client runtime. |
| 202 | `        max-width: 500px;` | Executable statement used by the server or client runtime. |
| 203 | `        color: #FFD700;` | Executable statement used by the server or client runtime. |
| 204 | `        box-shadow: ` | Executable statement used by the server or client runtime. |
| 205 | `          0 10px 25px rgba(0, 0, 0, 0.2),` | Executable statement used by the server or client runtime. |
| 206 | `          0 0 20px rgba(190, 142, 48, 0.1),` | Executable statement used by the server or client runtime. |
| 207 | `          inset 0 1px 0 rgba(255, 215, 0, 0.1);` | Executable statement used by the server or client runtime. |
| 208 | `      }` | Closes the current code block. |
| 209 | `      ` | Spacing line to separate blocks and improve readability. |
| 210 | `      .search-input::placeholder {` | Executable statement used by the server or client runtime. |
| 211 | `        color: rgba(255, 215, 0, 0.6);` | Executable statement used by the server or client runtime. |
| 212 | `      }` | Closes the current code block. |
| 213 | `      ` | Spacing line to separate blocks and improve readability. |
| 214 | `      .search-input:focus {` | Executable statement used by the server or client runtime. |
| 215 | `        outline: none;` | Executable statement used by the server or client runtime. |
| 216 | `        border-color: #FFD700;` | Executable statement used by the server or client runtime. |
| 217 | `        background: linear-gradient(135deg, rgba(8, 16, 50, 0.95), rgba(26, 41, 73, 0.95));` | Executable statement used by the server or client runtime. |
| 218 | `        box-shadow: ` | Executable statement used by the server or client runtime. |
| 219 | `          0 15px 35px rgba(0, 0, 0, 0.3),` | Executable statement used by the server or client runtime. |
| 220 | `          0 0 30px rgba(255, 215, 0, 0.4),` | Executable statement used by the server or client runtime. |
| 221 | `          inset 0 1px 0 rgba(255, 215, 0, 0.2);` | Executable statement used by the server or client runtime. |
| 222 | `        transform: scale(1.05);` | Executable statement used by the server or client runtime. |
| 223 | `        color: #FFD700;` | Executable statement used by the server or client runtime. |
| 224 | `      }` | Closes the current code block. |
| 225 | `      ` | Spacing line to separate blocks and improve readability. |
| 226 | `      .search-icon {` | Executable statement used by the server or client runtime. |
| 227 | `        color: #BE8E30;` | Executable statement used by the server or client runtime. |
| 228 | `        transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 229 | `      }` | Closes the current code block. |
| 230 | `      ` | Spacing line to separate blocks and improve readability. |
| 231 | `      .search-input:focus + .search-icon {` | Executable statement used by the server or client runtime. |
| 232 | `        color: #FFD700;` | Executable statement used by the server or client runtime. |
| 233 | `        text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);` | Executable statement used by the server or client runtime. |
| 234 | `      }` | Closes the current code block. |
| 235 | `      ` | Spacing line to separate blocks and improve readability. |
| 236 | `      .day-header {` | Executable statement used by the server or client runtime. |
| 237 | `        background: linear-gradient(135deg, #081032, #1a2949, #081032);` | Executable statement used by the server or client runtime. |
| 238 | `        background-size: 200% 200%;` | Executable statement used by the server or client runtime. |
| 239 | `        animation: dayHeaderShimmer 4s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 240 | `        color: #FFD700;` | Executable statement used by the server or client runtime. |
| 241 | `        font-family: Mestizo, serif;` | Executable statement used by the server or client runtime. |
| 242 | `        font-size: 2.5rem;` | Executable statement used by the server or client runtime. |
| 243 | `        text-shadow: ` | Executable statement used by the server or client runtime. |
| 244 | `          0 0 15px rgba(255, 215, 0, 0.6),` | Executable statement used by the server or client runtime. |
| 245 | `          0 0 30px rgba(190, 142, 48, 0.4);` | Executable statement used by the server or client runtime. |
| 246 | `        border-bottom: 3px solid rgba(190, 142, 48, 0.5);` | Executable statement used by the server or client runtime. |
| 247 | `        position: relative;` | Executable statement used by the server or client runtime. |
| 248 | `        overflow: hidden;` | Executable statement used by the server or client runtime. |
| 249 | `      }` | Closes the current code block. |
| 250 | `      ` | Spacing line to separate blocks and improve readability. |
| 251 | `      .day-header::before {` | Executable statement used by the server or client runtime. |
| 252 | `        content: '';` | Executable statement used by the server or client runtime. |
| 253 | `        position: absolute;` | Executable statement used by the server or client runtime. |
| 254 | `        top: 0;` | Executable statement used by the server or client runtime. |
| 255 | `        left: -100%;` | Executable statement used by the server or client runtime. |
| 256 | `        width: 100%;` | Executable statement used by the server or client runtime. |
| 257 | `        height: 100%;` | Executable statement used by the server or client runtime. |
| 258 | `        background: linear-gradient(90deg, ` | Executable statement used by the server or client runtime. |
| 259 | `          transparent, ` | Executable statement used by the server or client runtime. |
| 260 | `          rgba(255, 215, 0, 0.2), ` | Executable statement used by the server or client runtime. |
| 261 | `          transparent);` | Executable statement used by the server or client runtime. |
| 262 | `        animation: dayHeaderSweep 3s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 263 | `      }` | Closes the current code block. |
| 264 | `      ` | Spacing line to separate blocks and improve readability. |
| 265 | `      @keyframes dayHeaderShimmer {` | Executable statement used by the server or client runtime. |
| 266 | `        0%, 100% { background-position: 0% 50%; }` | Executable statement used by the server or client runtime. |
| 267 | `        50% { background-position: 100% 50%; }` | Executable statement used by the server or client runtime. |
| 268 | `      }` | Closes the current code block. |
| 269 | `      ` | Spacing line to separate blocks and improve readability. |
| 270 | `      @keyframes dayHeaderSweep {` | Executable statement used by the server or client runtime. |
| 271 | `        0% { left: -100%; }` | Executable statement used by the server or client runtime. |
| 272 | `        50% { left: 100%; }` | Executable statement used by the server or client runtime. |
| 273 | `        100% { left: 100%; }` | Executable statement used by the server or client runtime. |
| 274 | `      }` | Closes the current code block. |
| 275 | `      ` | Spacing line to separate blocks and improve readability. |
| 276 | `      /* No Results Message */` | Block comment content or boundary. |
| 277 | `      .no-results {` | Executable statement used by the server or client runtime. |
| 278 | `        text-align: center;` | Executable statement used by the server or client runtime. |
| 279 | `        padding: 40px 20px;` | Executable statement used by the server or client runtime. |
| 280 | `        color: #666;` | Executable statement used by the server or client runtime. |
| 281 | `        font-size: 18px;` | Executable statement used by the server or client runtime. |
| 282 | `        animation: fadeInUp 0.5s ease-out;` | Executable statement used by the server or client runtime. |
| 283 | `        margin-bottom: 0;` | Executable statement used by the server or client runtime. |
| 284 | `      }` | Closes the current code block. |
| 285 | `      ` | Spacing line to separate blocks and improve readability. |
| 286 | `      /* Remove default body margin */` | Block comment content or boundary. |
| 287 | `      body {` | Executable statement used by the server or client runtime. |
| 288 | `        margin: 0;` | Executable statement used by the server or client runtime. |
| 289 | `        padding: 0;` | Executable statement used by the server or client runtime. |
| 290 | `      }` | Closes the current code block. |
| 291 | `      ` | Spacing line to separate blocks and improve readability. |
| 292 | `      /* Mobile responsiveness */` | Block comment content or boundary. |
| 293 | `      @media (max-width: 768px) {` | Executable statement used by the server or client runtime. |
| 294 | `        .table-container {` | Executable statement used by the server or client runtime. |
| 295 | `          overflow-x: auto;` | Executable statement used by the server or client runtime. |
| 296 | `          overflow-y: visible;` | Executable statement used by the server or client runtime. |
| 297 | `          -webkit-overflow-scrolling: touch;` | Executable statement used by the server or client runtime. |
| 298 | `          width: 100%;` | Executable statement used by the server or client runtime. |
| 299 | `          position: relative;` | Executable statement used by the server or client runtime. |
| 300 | `        }` | Closes the current code block. |
| 301 | `        ` | Spacing line to separate blocks and improve readability. |
| 302 | `        .event-table {` | Executable statement used by the server or client runtime. |
| 303 | `          min-width: 100%;` | Executable statement used by the server or client runtime. |
| 304 | `          border-radius: 15px;` | Executable statement used by the server or client runtime. |
| 305 | `          overflow: visible;` | Executable statement used by the server or client runtime. |
| 306 | `        }` | Closes the current code block. |
| 307 | `        ` | Spacing line to separate blocks and improve readability. |
| 308 | `        .event-table table {` | Executable statement used by the server or client runtime. |
| 309 | `          min-width: 650px;` | Executable statement used by the server or client runtime. |
| 310 | `          font-size: 14px;` | Executable statement used by the server or client runtime. |
| 311 | `          display: table;` | Executable statement used by the server or client runtime. |
| 312 | `          table-layout: auto;` | Executable statement used by the server or client runtime. |
| 313 | `        }` | Closes the current code block. |
| 314 | `        ` | Spacing line to separate blocks and improve readability. |
| 315 | `        .table-header th {` | Executable statement used by the server or client runtime. |
| 316 | `          padding: 12px 8px;` | Executable statement used by the server or client runtime. |
| 317 | `          font-size: 13px;` | Executable statement used by the server or client runtime. |
| 318 | `        }` | Closes the current code block. |
| 319 | `        ` | Spacing line to separate blocks and improve readability. |
| 320 | `        .table-row td {` | Executable statement used by the server or client runtime. |
| 321 | `          padding: 12px 8px;` | Executable statement used by the server or client runtime. |
| 322 | `          font-size: 13px;` | Executable statement used by the server or client runtime. |
| 323 | `        }` | Closes the current code block. |
| 324 | `        ` | Spacing line to separate blocks and improve readability. |
| 325 | `        .search-input {` | Executable statement used by the server or client runtime. |
| 326 | `          max-width: 100%;` | Executable statement used by the server or client runtime. |
| 327 | `          font-size: 16px;` | Executable statement used by the server or client runtime. |
| 328 | `          padding: 12px 45px 12px 20px;` | Executable statement used by the server or client runtime. |
| 329 | `        }` | Closes the current code block. |
| 330 | `        ` | Spacing line to separate blocks and improve readability. |
| 331 | `        .day-header {` | Executable statement used by the server or client runtime. |
| 332 | `          font-size: 2rem;` | Executable statement used by the server or client runtime. |
| 333 | `          padding: 20px;` | Executable statement used by the server or client runtime. |
| 334 | `        }` | Closes the current code block. |
| 335 | `        ` | Spacing line to separate blocks and improve readability. |
| 336 | `        h1 {` | Executable statement used by the server or client runtime. |
| 337 | `          font-size: 2.5rem !important;` | Executable statement used by the server or client runtime. |
| 338 | `        }` | Closes the current code block. |
| 339 | `        ` | Spacing line to separate blocks and improve readability. |
| 340 | `        .container {` | Executable statement used by the server or client runtime. |
| 341 | `          padding-left: 12px;` | Executable statement used by the server or client runtime. |
| 342 | `          padding-right: 12px;` | Executable statement used by the server or client runtime. |
| 343 | `        }` | Closes the current code block. |
| 344 | `        ` | Spacing line to separate blocks and improve readability. |
| 345 | `        /* Improve mobile table readability */` | Block comment content or boundary. |
| 346 | `        .event-name {` | Executable statement used by the server or client runtime. |
| 347 | `          min-width: 120px;` | Executable statement used by the server or client runtime. |
| 348 | `          font-weight: 600;` | Executable statement used by the server or client runtime. |
| 349 | `        }` | Closes the current code block. |
| 350 | `        ` | Spacing line to separate blocks and improve readability. |
| 351 | `        .table-cell {` | Executable statement used by the server or client runtime. |
| 352 | `          white-space: nowrap;` | Executable statement used by the server or client runtime. |
| 353 | `        }` | Closes the current code block. |
| 354 | `        ` | Spacing line to separate blocks and improve readability. |
| 355 | `        /* Mobile scroll indicator */` | Block comment content or boundary. |
| 356 | `        .table-container::after {` | Executable statement used by the server or client runtime. |
| 357 | `          content: "← Swipe to see more →";` | Executable statement used by the server or client runtime. |
| 358 | `          display: block;` | Executable statement used by the server or client runtime. |
| 359 | `          text-align: center;` | Executable statement used by the server or client runtime. |
| 360 | `          padding: 8px;` | Executable statement used by the server or client runtime. |
| 361 | `          font-size: 12px;` | Executable statement used by the server or client runtime. |
| 362 | `          color: rgba(255, 215, 0, 0.6);` | Executable statement used by the server or client runtime. |
| 363 | `          background: rgba(8, 16, 50, 0.8);` | Executable statement used by the server or client runtime. |
| 364 | `          border-radius: 0 0 15px 15px;` | Executable statement used by the server or client runtime. |
| 365 | `        }` | Closes the current code block. |
| 366 | `      }` | Closes the current code block. |
| 367 | `      ` | Spacing line to separate blocks and improve readability. |
| 368 | `      @media (max-width: 480px) {` | Executable statement used by the server or client runtime. |
| 369 | `        h1 {` | Executable statement used by the server or client runtime. |
| 370 | `          font-size: 2rem !important;` | Executable statement used by the server or client runtime. |
| 371 | `        }` | Closes the current code block. |
| 372 | `        ` | Spacing line to separate blocks and improve readability. |
| 373 | `        .day-header {` | Executable statement used by the server or client runtime. |
| 374 | `          font-size: 1.75rem;` | Executable statement used by the server or client runtime. |
| 375 | `          padding: 15px;` | Executable statement used by the server or client runtime. |
| 376 | `        }` | Closes the current code block. |
| 377 | `        ` | Spacing line to separate blocks and improve readability. |
| 378 | `        .event-table table {` | Executable statement used by the server or client runtime. |
| 379 | `          min-width: 600px;` | Executable statement used by the server or client runtime. |
| 380 | `          font-size: 13px;` | Executable statement used by the server or client runtime. |
| 381 | `        }` | Closes the current code block. |
| 382 | `        ` | Spacing line to separate blocks and improve readability. |
| 383 | `        .table-header th {` | Executable statement used by the server or client runtime. |
| 384 | `          padding: 10px 6px;` | Executable statement used by the server or client runtime. |
| 385 | `          font-size: 12px;` | Executable statement used by the server or client runtime. |
| 386 | `        }` | Closes the current code block. |
| 387 | `        ` | Spacing line to separate blocks and improve readability. |
| 388 | `        .table-row td {` | Executable statement used by the server or client runtime. |
| 389 | `          padding: 10px 6px;` | Executable statement used by the server or client runtime. |
| 390 | `          font-size: 12px;` | Executable statement used by the server or client runtime. |
| 391 | `        }` | Closes the current code block. |
| 392 | `        ` | Spacing line to separate blocks and improve readability. |
| 393 | `        .search-input {` | Executable statement used by the server or client runtime. |
| 394 | `          padding: 10px 40px 10px 18px;` | Executable statement used by the server or client runtime. |
| 395 | `          font-size: 16px;` | Executable statement used by the server or client runtime. |
| 396 | `        }` | Closes the current code block. |
| 397 | `        ` | Spacing line to separate blocks and improve readability. |
| 398 | `        .container {` | Executable statement used by the server or client runtime. |
| 399 | `          padding-left: 8px;` | Executable statement used by the server or client runtime. |
| 400 | `          padding-right: 8px;` | Executable statement used by the server or client runtime. |
| 401 | `        }` | Closes the current code block. |
| 402 | `      }` | Closes the current code block. |
| 403 | `    </style>` | HTML markup that contributes structure, metadata, or visible content. |
| 404 | `    ` | Spacing line to separate blocks and improve readability. |
| 405 | `    <script>` | HTML markup that contributes structure, metadata, or visible content. |
| 406 | `      async function loadConfig() {` | Declares an async function that can await network or file operations. |
| 407 | `        try {` | Executable statement used by the server or client runtime. |
| 408 | `          const response = await fetch("/config.json");` | Defines a constant binding for config, module import, or computed value. |
| 409 | `          const data = await response.json();` | Defines a constant binding for config, module import, or computed value. |
| 410 | `          const site = data.website;` | Defines a constant binding for config, module import, or computed value. |
| 411 | `          ` | Spacing line to separate blocks and improve readability. |
| 412 | `          // Load navbar` | Comment that documents intent for the following code block. |
| 413 | `          for(let i = 0; i < site.navbar.links.length; i++) {` | Iterates over a list to process each item. |
| 414 | `            document.getElementById("desktop-nav").innerHTML += \`<a href="${site.navbar.links[i].linkto}" class="hover:text-blue-200">${site.navbar.links[i].name}</a>\`;` | Finds a DOM node so it can be read or updated. |
| 415 | `            document.getElementById("mobile-menu").innerHTML += \`<a href="${site.navbar.links[i].linkto}" class="block py-2 text-lg hover:text-blue-200">${site.navbar.links[i].name}</a>\`;` | Finds a DOM node so it can be read or updated. |
| 416 | `          }` | Closes the current code block. |
| 417 | `          ` | Spacing line to separate blocks and improve readability. |
| 418 | `          document.getElementById("nav-title").textContent = site.navbar.title;` | Finds a DOM node so it can be read or updated. |
| 419 | `          ` | Spacing line to separate blocks and improve readability. |
| 420 | `        } catch (error) {` | Closes the current code block. |
| 421 | `          console.error("Failed to load config:", error);` | Executable statement used by the server or client runtime. |
| 422 | `        } finally {` | Closes the current code block. |
| 423 | `          // Hide loading screen` | Comment that documents intent for the following code block. |
| 424 | `          const loader = document.getElementById("loading-screen");` | Defines a constant binding for config, module import, or computed value. |
| 425 | `          setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 426 | `            loader.classList.add("fade-out");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 427 | `            setTimeout(() => loader.remove(), 600);` | Arrow-function expression used as a concise callback/helper. |
| 428 | `          }, 1500);` | Closes the current code block. |
| 429 | `        }` | Closes the current code block. |
| 430 | `      }` | Closes the current code block. |
| 431 | `      ` | Spacing line to separate blocks and improve readability. |
| 432 | `      loadConfig();` | Executable statement used by the server or client runtime. |
| 433 | `    </script>` | HTML markup that contributes structure, metadata, or visible content. |
| 434 | `  </head>` | HTML markup that contributes structure, metadata, or visible content. |
| 435 | `  <body class="bg-gray-100 text-gray-800">` | HTML markup that contributes structure, metadata, or visible content. |
| 436 | `    <!-- Loading Screen -->` | HTML markup that contributes structure, metadata, or visible content. |
| 437 | `    <div id="loading-screen" style="` | HTML markup that contributes structure, metadata, or visible content. |
| 438 | `      position: fixed;` | Executable statement used by the server or client runtime. |
| 439 | `      inset: 0;` | Executable statement used by the server or client runtime. |
| 440 | `      background: linear-gradient(135deg, #0a0f2c, #1a2949);` | Executable statement used by the server or client runtime. |
| 441 | `      z-index: 9999;` | Executable statement used by the server or client runtime. |
| 442 | `      display: flex;` | Executable statement used by the server or client runtime. |
| 443 | `      align-items: center;` | Executable statement used by the server or client runtime. |
| 444 | `      justify-content: center;` | Executable statement used by the server or client runtime. |
| 445 | `      transition: opacity 0.6s ease;` | Executable statement used by the server or client runtime. |
| 446 | `    ">` | Executable statement used by the server or client runtime. |
| 447 | `      <video` | HTML markup that contributes structure, metadata, or visible content. |
| 448 | `        id="loading-video"` | Executable statement used by the server or client runtime. |
| 449 | `        autoplay` | Executable statement used by the server or client runtime. |
| 450 | `        muted` | Executable statement used by the server or client runtime. |
| 451 | `        loop` | Executable statement used by the server or client runtime. |
| 452 | `        playsinline` | Executable statement used by the server or client runtime. |
| 453 | `        style="` | Executable statement used by the server or client runtime. |
| 454 | `          width: 150px;` | Executable statement used by the server or client runtime. |
| 455 | `          height: 150px;` | Executable statement used by the server or client runtime. |
| 456 | `          object-fit: contain;` | Executable statement used by the server or client runtime. |
| 457 | `          filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7));` | Executable statement used by the server or client runtime. |
| 458 | `          border-radius: 12px;` | Executable statement used by the server or client runtime. |
| 459 | `        "` | Executable statement used by the server or client runtime. |
| 460 | `      >` | Executable statement used by the server or client runtime. |
| 461 | `        <source src="/assets/load.mp4" type="video/mp4" />` | HTML markup that contributes structure, metadata, or visible content. |
| 462 | `        Your browser does not support the video tag.` | Executable statement used by the server or client runtime. |
| 463 | `      </video>` | HTML markup that contributes structure, metadata, or visible content. |
| 464 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 465 | `` | Spacing line to separate blocks and improve readability. |
| 466 | `    <!-- Navbar -->` | HTML markup that contributes structure, metadata, or visible content. |
| 467 | `    <nav class="text-white animate-navbar" style="background: #081032">` | HTML markup that contributes structure, metadata, or visible content. |
| 468 | `      <div class="container mx-auto px-4 py-4 flex justify-between items-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 469 | `        <div class="text-2xl hover-glow" style="font-family: Mestizo" id="nav-title">` | HTML markup that contributes structure, metadata, or visible content. |
| 470 | `          Perseverantia` | Executable statement used by the server or client runtime. |
| 471 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 472 | `` | Spacing line to separate blocks and improve readability. |
| 473 | `        <!-- Desktop Nav -->` | HTML markup that contributes structure, metadata, or visible content. |
| 474 | `        <div class="hidden md:flex space-x-6 text-lg" id="desktop-nav">` | HTML markup that contributes structure, metadata, or visible content. |
| 475 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 476 | `` | Spacing line to separate blocks and improve readability. |
| 477 | `        <!-- Mobile Menu Button -->` | HTML markup that contributes structure, metadata, or visible content. |
| 478 | `        <div class="md:hidden">` | HTML markup that contributes structure, metadata, or visible content. |
| 479 | `          <button id="menu-toggle" class="focus:outline-none" aria-label="menu">` | HTML markup that contributes structure, metadata, or visible content. |
| 480 | `            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">` | HTML markup that contributes structure, metadata, or visible content. |
| 481 | `              <path d="M4 6h16M4 12h16M4 18h16" />` | HTML markup that contributes structure, metadata, or visible content. |
| 482 | `            </svg>` | HTML markup that contributes structure, metadata, or visible content. |
| 483 | `          </button>` | HTML markup that contributes structure, metadata, or visible content. |
| 484 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 485 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 486 | `` | Spacing line to separate blocks and improve readability. |
| 487 | `      <!-- Mobile Menu -->` | HTML markup that contributes structure, metadata, or visible content. |
| 488 | `      <div id="mobile-menu" class="md:hidden hidden opacity-0 scale-y-90 -translate-y-4 transform transition-all duration-500 ease-out origin-top px-4 pb-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 489 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 490 | `    </nav>` | HTML markup that contributes structure, metadata, or visible content. |
| 491 | `` | Spacing line to separate blocks and improve readability. |
| 492 | `    <!-- Main Content -->` | HTML markup that contributes structure, metadata, or visible content. |
| 493 | `    <div class="min-h-screen pb-8" style="background: linear-gradient(135deg, #0D122C 0%, #131D3F 100%);">` | HTML markup that contributes structure, metadata, or visible content. |
| 494 | `      ` | Spacing line to separate blocks and improve readability. |
| 495 | `      <!-- Header Section -->` | HTML markup that contributes structure, metadata, or visible content. |
| 496 | `      <div class="pt-8 pb-6 text-center px-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 497 | `        <h1 class="text-3xl md:text-5xl font-bold text-white animate-slide-in-top" style="font-family: Mestizo">` | HTML markup that contributes structure, metadata, or visible content. |
| 498 | `          Event Locations & Schedule` | Executable statement used by the server or client runtime. |
| 499 | `        </h1>` | HTML markup that contributes structure, metadata, or visible content. |
| 500 | `        <p class="text-lg md:text-xl text-gray-300 mt-4 animate-fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 501 | `          Find your event locations and timings for Perseverantia 2025` | Executable statement used by the server or client runtime. |
| 502 | `        </p>` | HTML markup that contributes structure, metadata, or visible content. |
| 503 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 504 | `` | Spacing line to separate blocks and improve readability. |
| 505 | `      <!-- Search Section -->` | HTML markup that contributes structure, metadata, or visible content. |
| 506 | `      <div class="search-container flex justify-center mb-6 px-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 507 | `        <div class="relative w-full max-w-md">` | HTML markup that contributes structure, metadata, or visible content. |
| 508 | `          <input ` | HTML markup that contributes structure, metadata, or visible content. |
| 509 | `            type="text" ` | Executable statement used by the server or client runtime. |
| 510 | `            id="searchInput" ` | Executable statement used by the server or client runtime. |
| 511 | `            placeholder="Search events, locations, or timings..." ` | Executable statement used by the server or client runtime. |
| 512 | `            class="search-input pl-12 w-full"` | Executable statement used by the server or client runtime. |
| 513 | `          >` | Executable statement used by the server or client runtime. |
| 514 | `          <i class="fas fa-search search-icon absolute left-4 top-1/2 transform -translate-y-1/2"></i>` | HTML markup that contributes structure, metadata, or visible content. |
| 515 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 516 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 517 | `` | Spacing line to separate blocks and improve readability. |
| 518 | `      <!-- Day 1 Table -->` | HTML markup that contributes structure, metadata, or visible content. |
| 519 | `      <div class="container mx-auto px-2 sm:px-4 mb-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 520 | `        <div class="event-table">` | HTML markup that contributes structure, metadata, or visible content. |
| 521 | `          <div class="day-header text-center py-4 md:py-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 522 | `            <h2>Day 1</h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 523 | `          </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 524 | `          ` | Spacing line to separate blocks and improve readability. |
| 525 | `          <div class="table-container">` | HTML markup that contributes structure, metadata, or visible content. |
| 526 | `            <table class="w-full">` | HTML markup that contributes structure, metadata, or visible content. |
| 527 | `              <thead class="table-header">` | HTML markup that contributes structure, metadata, or visible content. |
| 528 | `                <tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 529 | `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Name</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 530 | `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Registration Time</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 531 | `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Location</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 532 | `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Timing</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 533 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 534 | `              </thead>` | HTML markup that contributes structure, metadata, or visible content. |
| 535 | `              <tbody id="day1-tbody">` | HTML markup that contributes structure, metadata, or visible content. |
| 536 | `                <tr class="table-row border-b border-gray-200" data-day="1">` | HTML markup that contributes structure, metadata, or visible content. |
| 537 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Codeferno</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 538 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 539 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Computer Lab</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 540 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 541 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 542 | `                <tr class="table-row border-b border-gray-200" data-day="1">` | HTML markup that contributes structure, metadata, or visible content. |
| 543 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Football</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 544 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">6:00 AM - 7:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 545 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Field</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 546 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 2:00 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 547 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 548 | `                <tr class="table-row border-b border-gray-200" data-day="1">` | HTML markup that contributes structure, metadata, or visible content. |
| 549 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Basketball</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 550 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">6:00 AM - 7:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 551 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 552 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 12:30 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 553 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 554 | `                <tr class="table-row border-b border-gray-200" data-day="1">` | HTML markup that contributes structure, metadata, or visible content. |
| 555 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Esports</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 556 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 557 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Dance Room 2</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 558 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 559 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 560 | `                <tr class="table-row border-b border-gray-200" data-day="1">` | HTML markup that contributes structure, metadata, or visible content. |
| 561 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Gully Cricket</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 562 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 563 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Heritage Block</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 564 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 2:00 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 565 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 566 | `                <tr class="table-row border-b border-gray-200" data-day="1">` | HTML markup that contributes structure, metadata, or visible content. |
| 567 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Table Tennis</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 568 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 569 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Prefab Hall</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 570 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 571 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 572 | `                <tr class="table-row border-b border-gray-200" data-day="1">` | HTML markup that contributes structure, metadata, or visible content. |
| 573 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Tug of War</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 574 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">11:00 AM - 11:30 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 575 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 576 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">12:30 PM - 2:30 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 577 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 578 | `                <tr class="table-row border-b border-gray-200" data-day="1">` | HTML markup that contributes structure, metadata, or visible content. |
| 579 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Explorare</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 580 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 581 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">School</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 582 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 583 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 584 | `              </tbody>` | HTML markup that contributes structure, metadata, or visible content. |
| 585 | `            </table>` | HTML markup that contributes structure, metadata, or visible content. |
| 586 | `          </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 587 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 588 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 589 | `` | Spacing line to separate blocks and improve readability. |
| 590 | `      <!-- Day 2 Table -->` | HTML markup that contributes structure, metadata, or visible content. |
| 591 | `      <div class="container mx-auto px-2 sm:px-4 mb-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 592 | `        <div class="event-table">` | HTML markup that contributes structure, metadata, or visible content. |
| 593 | `          <div class="day-header text-center py-4 md:py-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 594 | `            <h2>Day 2</h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 595 | `          </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 596 | `          ` | Spacing line to separate blocks and improve readability. |
| 597 | `          <div class="table-container">` | HTML markup that contributes structure, metadata, or visible content. |
| 598 | `            <table class="w-full">` | HTML markup that contributes structure, metadata, or visible content. |
| 599 | `              <thead class="table-header">` | HTML markup that contributes structure, metadata, or visible content. |
| 600 | `                <tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 601 | `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Name</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 602 | `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Registration Time</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 603 | `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Location</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 604 | `                  <th class="px-3 sm:px-6 py-3 sm:py-4 text-left">Event Timing</th>` | HTML markup that contributes structure, metadata, or visible content. |
| 605 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 606 | `              </thead>` | HTML markup that contributes structure, metadata, or visible content. |
| 607 | `              <tbody id="day2-tbody">` | HTML markup that contributes structure, metadata, or visible content. |
| 608 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 609 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Fabula</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 610 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 611 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">401, 402</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 612 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 12:00 Noon</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 613 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 614 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 615 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Adventurium</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 616 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 617 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">403, 404</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 618 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 10:30 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 619 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 620 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 621 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Carmen 1</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 622 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 623 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">405, 406</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 624 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 10:30 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 625 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 626 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 627 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Carmen 2</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 628 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 629 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">405, 406</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 630 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 10:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 631 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 632 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 633 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Admeta</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 634 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 635 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">502, 503</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 636 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 12:00 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 637 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 638 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 639 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Fortuna</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 640 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 641 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">504</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 642 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 643 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 644 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 645 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Mahim - 16</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 646 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 647 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">501, 505, 506, 507</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 648 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">9:00 AM - 12:00 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 649 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 650 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 651 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Artem</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 652 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 653 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Art Room</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 654 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 11:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 655 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 656 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 657 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Gustatio</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 658 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 659 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Physics Lab</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 660 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:30 AM - 11:30 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 661 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 662 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 663 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Monopolium</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 664 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">7:00 AM - 8:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 665 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Prefab Hall</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 666 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">8:00 AM - 10:00 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 667 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 668 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 669 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Symphonia</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 670 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">9:45 AM - 10:30 AM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 671 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 672 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">11:00 AM - 12:30 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 673 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 674 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 675 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Prize Distribution</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 676 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">N/A</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 677 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 678 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">12:30 PM - 1:15 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 679 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 680 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 681 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">MR & MS Perseverantia</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 682 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">11:00 AM - 12:00 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 683 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 684 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">1:30 PM - 3:30 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 685 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 686 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 687 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Panache</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 688 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">1:00 PM - 2:00 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 689 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 690 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">3:45 PM - 4:45 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 691 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 692 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 693 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Gratia</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 694 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">3:00 PM - 3:30 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 695 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 696 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">5:00 PM - 6:30 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 697 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 698 | `                <tr class="table-row border-b border-gray-200" data-day="2">` | HTML markup that contributes structure, metadata, or visible content. |
| 699 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 event-name">Prize Distribution</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 700 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">N/A</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 701 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">Basketball Court</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 702 | `                  <td class="px-3 sm:px-6 py-3 sm:py-4 table-cell">6:30 PM - 7:15 PM</td>` | HTML markup that contributes structure, metadata, or visible content. |
| 703 | `                </tr>` | HTML markup that contributes structure, metadata, or visible content. |
| 704 | `              </tbody>` | HTML markup that contributes structure, metadata, or visible content. |
| 705 | `            </table>` | HTML markup that contributes structure, metadata, or visible content. |
| 706 | `          </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 707 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 708 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 709 | `` | Spacing line to separate blocks and improve readability. |
| 710 | `      <!-- No Results Message -->` | HTML markup that contributes structure, metadata, or visible content. |
| 711 | `      <div id="no-results" class="no-results hidden">` | HTML markup that contributes structure, metadata, or visible content. |
| 712 | `        <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>` | HTML markup that contributes structure, metadata, or visible content. |
| 713 | `        <p>No events found matching your search criteria.</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 714 | `      </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 715 | `` | Spacing line to separate blocks and improve readability. |
| 716 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 717 | `` | Spacing line to separate blocks and improve readability. |
| 718 | `    <!-- Search Functionality -->` | HTML markup that contributes structure, metadata, or visible content. |
| 719 | `    <script>` | HTML markup that contributes structure, metadata, or visible content. |
| 720 | `      // Mobile menu toggle` | Comment that documents intent for the following code block. |
| 721 | `      document.getElementById('menu-toggle').addEventListener('click', function() {` | Subscribes to a browser event and runs callback logic when triggered. |
| 722 | `        const mobileMenu = document.getElementById('mobile-menu');` | Defines a constant binding for config, module import, or computed value. |
| 723 | `        mobileMenu.classList.toggle('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 724 | `        mobileMenu.classList.toggle('opacity-0');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 725 | `        mobileMenu.classList.toggle('scale-y-90');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 726 | `        mobileMenu.classList.toggle('-translate-y-4');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 727 | `      });` | Closes the current code block. |
| 728 | `` | Spacing line to separate blocks and improve readability. |
| 729 | `      // Search functionality` | Comment that documents intent for the following code block. |
| 730 | `      const searchInput = document.getElementById('searchInput');` | Defines a constant binding for config, module import, or computed value. |
| 731 | `      const day1Tbody = document.getElementById('day1-tbody');` | Defines a constant binding for config, module import, or computed value. |
| 732 | `      const day2Tbody = document.getElementById('day2-tbody');` | Defines a constant binding for config, module import, or computed value. |
| 733 | `      const noResults = document.getElementById('no-results');` | Defines a constant binding for config, module import, or computed value. |
| 734 | `      ` | Spacing line to separate blocks and improve readability. |
| 735 | `      searchInput.addEventListener('input', function() {` | Subscribes to a browser event and runs callback logic when triggered. |
| 736 | `        const searchTerm = this.value.toLowerCase().trim();` | Defines a constant binding for config, module import, or computed value. |
| 737 | `        const allRows = document.querySelectorAll('.table-row');` | Defines a constant binding for config, module import, or computed value. |
| 738 | `        let visibleRowsCount = 0;` | Defines mutable state used later in control flow or UI updates. |
| 739 | `        ` | Spacing line to separate blocks and improve readability. |
| 740 | `        allRows.forEach(row => {` | Iterates over a list to process each item. |
| 741 | `          const eventName = row.cells[0].textContent.toLowerCase();` | Defines a constant binding for config, module import, or computed value. |
| 742 | `          const registrationTime = row.cells[1].textContent.toLowerCase();` | Defines a constant binding for config, module import, or computed value. |
| 743 | `          const location = row.cells[2].textContent.toLowerCase();` | Defines a constant binding for config, module import, or computed value. |
| 744 | `          const eventTiming = row.cells[3].textContent.toLowerCase();` | Defines a constant binding for config, module import, or computed value. |
| 745 | `          ` | Spacing line to separate blocks and improve readability. |
| 746 | `          const isMatch = eventName.includes(searchTerm) &#124;&#124;` | Defines a constant binding for config, module import, or computed value. |
| 747 | `                         registrationTime.includes(searchTerm) &#124;&#124;` | Executable statement used by the server or client runtime. |
| 748 | `                         location.includes(searchTerm) &#124;&#124;` | Executable statement used by the server or client runtime. |
| 749 | `                         eventTiming.includes(searchTerm);` | Executable statement used by the server or client runtime. |
| 750 | `          ` | Spacing line to separate blocks and improve readability. |
| 751 | `          if (isMatch) {` | Starts a conditional branch based on current runtime state. |
| 752 | `            row.style.display = '';` | Executable statement used by the server or client runtime. |
| 753 | `            visibleRowsCount++;` | Executable statement used by the server or client runtime. |
| 754 | `          } else {` | Closes the current code block. |
| 755 | `            row.style.display = 'none';` | Executable statement used by the server or client runtime. |
| 756 | `          }` | Closes the current code block. |
| 757 | `        });` | Closes the current code block. |
| 758 | `        ` | Spacing line to separate blocks and improve readability. |
| 759 | `        // Show/hide no results message` | Comment that documents intent for the following code block. |
| 760 | `        if (visibleRowsCount === 0 && searchTerm !== '') {` | Starts a conditional branch based on current runtime state. |
| 761 | `          noResults.classList.remove('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 762 | `        } else {` | Closes the current code block. |
| 763 | `          noResults.classList.add('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 764 | `        }` | Closes the current code block. |
| 765 | `        ` | Spacing line to separate blocks and improve readability. |
| 766 | `        // Hide/show tables based on visible rows` | Comment that documents intent for the following code block. |
| 767 | `        const day1VisibleRows = day1Tbody.querySelectorAll('.table-row:not([style*="display: none"])').length;` | Defines a constant binding for config, module import, or computed value. |
| 768 | `        const day2VisibleRows = day2Tbody.querySelectorAll('.table-row:not([style*="display: none"])').length;` | Defines a constant binding for config, module import, or computed value. |
| 769 | `        ` | Spacing line to separate blocks and improve readability. |
| 770 | `        day1Tbody.closest('.event-table').style.display = day1VisibleRows > 0 ? '' : 'none';` | Executable statement used by the server or client runtime. |
| 771 | `        day2Tbody.closest('.event-table').style.display = day2VisibleRows > 0 ? '' : 'none';` | Executable statement used by the server or client runtime. |
| 772 | `      });` | Closes the current code block. |
| 773 | `      ` | Spacing line to separate blocks and improve readability. |
| 774 | `      // Clear search when clicking outside` | Comment that documents intent for the following code block. |
| 775 | `      document.addEventListener('click', function(e) {` | Subscribes to a browser event and runs callback logic when triggered. |
| 776 | `        if (!searchInput.contains(e.target)) {` | Starts a conditional branch based on current runtime state. |
| 777 | `          // Optional: Clear search when clicking outside` | Comment that documents intent for the following code block. |
| 778 | `        }` | Closes the current code block. |
| 779 | `      });` | Closes the current code block. |
| 780 | `    </script>` | HTML markup that contributes structure, metadata, or visible content. |
| 781 | `  </body>` | HTML markup that contributes structure, metadata, or visible content. |
| 782 | `</html>` | HTML markup that contributes structure, metadata, or visible content. |

## persev-compiled/frontend/organizing-committee.html

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `<!doctype html>` | HTML markup that contributes structure, metadata, or visible content. |
| 2 | `<html lang="en">` | HTML markup that contributes structure, metadata, or visible content. |
| 3 | `` | Spacing line to separate blocks and improve readability. |
| 4 | `<head>` | HTML markup that contributes structure, metadata, or visible content. |
| 5 | `    <meta charset="UTF-8" />` | HTML markup that contributes structure, metadata, or visible content. |
| 6 | `    <meta name="viewport" content="width=device-width, initial-scale=1.0" />` | HTML markup that contributes structure, metadata, or visible content. |
| 7 | `    <meta name="description" content="Meet the Organising Committee of Perseverantia, Bombay Scottish School, Mahim.">` | HTML markup that contributes structure, metadata, or visible content. |
| 8 | `    <meta name="color-scheme" content="dark">` | HTML markup that contributes structure, metadata, or visible content. |
| 9 | `    <meta name="theme-color" content="#0a0f2c">` | HTML markup that contributes structure, metadata, or visible content. |
| 10 | `    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">` | HTML markup that contributes structure, metadata, or visible content. |
| 11 | `    <link rel="canonical" href="https://bss-perseverantia.github.io/organizing-committee">` | HTML markup that contributes structure, metadata, or visible content. |
| 12 | `    <link rel="icon" type="image/png" href="/assets/persev.png" />` | HTML markup that contributes structure, metadata, or visible content. |
| 13 | `    <meta property="og:site_name" content="Perseverantia">` | HTML markup that contributes structure, metadata, or visible content. |
| 14 | `    <meta property="og:title" content="Organising Committee - Perseverantia 2025">` | HTML markup that contributes structure, metadata, or visible content. |
| 15 | `    <meta property="og:description"` | HTML markup that contributes structure, metadata, or visible content. |
| 16 | `        content="Meet the brilliant team behind Perseverantia, The Annual Inter-school Festival of Bombay Scottish School, Mahim.">` | Executable statement used by the server or client runtime. |
| 17 | `    <meta property="og:image" content="https://bss-perseverantia.github.io/assets/persev2.png">` | HTML markup that contributes structure, metadata, or visible content. |
| 18 | `    <meta property="og:type" content="website" />` | HTML markup that contributes structure, metadata, or visible content. |
| 19 | `    <meta property="og:url" content="https://bss-perseverantia.github.io/organizing-committee">` | HTML markup that contributes structure, metadata, or visible content. |
| 20 | `    <meta name="twitter:card" content="summary_large_image" />` | HTML markup that contributes structure, metadata, or visible content. |
| 21 | `    <meta name="twitter:title" content="Organising Committee - Perseverantia 2025" />` | HTML markup that contributes structure, metadata, or visible content. |
| 22 | `    <meta name="twitter:description" content="Meet the team behind Perseverantia, Bombay Scottish School, Mahim." />` | HTML markup that contributes structure, metadata, or visible content. |
| 23 | `    <meta name="twitter:image" content="https://bss-perseverantia.github.io/persev2.png" />` | HTML markup that contributes structure, metadata, or visible content. |
| 24 | `    <meta name="keywords" content="` | HTML markup that contributes structure, metadata, or visible content. |
| 25 | `Perseverantia,` | Executable statement used by the server or client runtime. |
| 26 | `Perseverantia 2025,` | Executable statement used by the server or client runtime. |
| 27 | `Perseverantia Bombay Scottish School,` | Executable statement used by the server or client runtime. |
| 28 | `Bombay Scottish School Mahim,` | Executable statement used by the server or client runtime. |
| 29 | `Bombay Scottish School Mahim fest,` | Executable statement used by the server or client runtime. |
| 30 | `Perseverantia Organising Committee,` | Executable statement used by the server or client runtime. |
| 31 | `Perseverantia Organizing Committee,` | Executable statement used by the server or client runtime. |
| 32 | `Perseverantia OC 2025,` | Executable statement used by the server or client runtime. |
| 33 | `Bombay Scottish Inter School Festival,` | Executable statement used by the server or client runtime. |
| 34 | `persev oc,` | Executable statement used by the server or client runtime. |
| 35 | `persev organizing,` | Executable statement used by the server or client runtime. |
| 36 | `persev Committee,` | Executable statement used by the server or client runtime. |
| 37 | `oc,` | Executable statement used by the server or client runtime. |
| 38 | `organizing committee,` | Executable statement used by the server or client runtime. |
| 39 | `` | Spacing line to separate blocks and improve readability. |
| 40 | `Darshil Kochar,` | Executable statement used by the server or client runtime. |
| 41 | `Neel More,` | Executable statement used by the server or client runtime. |
| 42 | `Nishil Iyer,` | Executable statement used by the server or client runtime. |
| 43 | `` | Spacing line to separate blocks and improve readability. |
| 44 | `Adhunya Pan,` | Executable statement used by the server or client runtime. |
| 45 | `Krishay Shreeram,` | Executable statement used by the server or client runtime. |
| 46 | `` | Spacing line to separate blocks and improve readability. |
| 47 | `Varun Sinha,` | Executable statement used by the server or client runtime. |
| 48 | `Aadya Raikar,` | Executable statement used by the server or client runtime. |
| 49 | `` | Spacing line to separate blocks and improve readability. |
| 50 | `Janyaa Patkar,` | Executable statement used by the server or client runtime. |
| 51 | `Naisha Doshi,` | Executable statement used by the server or client runtime. |
| 52 | `` | Spacing line to separate blocks and improve readability. |
| 53 | `Sharanya Madan,` | Executable statement used by the server or client runtime. |
| 54 | `Tanisha Dutta,` | Executable statement used by the server or client runtime. |
| 55 | `` | Spacing line to separate blocks and improve readability. |
| 56 | `Aastha Shahane,` | Executable statement used by the server or client runtime. |
| 57 | `Yashvi Mehta,` | Executable statement used by the server or client runtime. |
| 58 | `` | Spacing line to separate blocks and improve readability. |
| 59 | `Anshrah Ahmed,` | Executable statement used by the server or client runtime. |
| 60 | `Anvi Khattar,` | Executable statement used by the server or client runtime. |
| 61 | `` | Spacing line to separate blocks and improve readability. |
| 62 | `Shaurya Raisoni,` | Executable statement used by the server or client runtime. |
| 63 | `Vivaan Chakrabarti,` | Executable statement used by the server or client runtime. |
| 64 | `` | Spacing line to separate blocks and improve readability. |
| 65 | `Hridhuun Savant,` | Executable statement used by the server or client runtime. |
| 66 | `Arhaan Barucha,` | Executable statement used by the server or client runtime. |
| 67 | `` | Spacing line to separate blocks and improve readability. |
| 68 | `Druvan Kapoor,` | Executable statement used by the server or client runtime. |
| 69 | `Nandini Gurav,` | Executable statement used by the server or client runtime. |
| 70 | `` | Spacing line to separate blocks and improve readability. |
| 71 | `Arjun Bapat,` | Executable statement used by the server or client runtime. |
| 72 | `Aaditya Gupta,` | Executable statement used by the server or client runtime. |
| 73 | `` | Spacing line to separate blocks and improve readability. |
| 74 | `Aditi Manchandani,` | Executable statement used by the server or client runtime. |
| 75 | `` | Spacing line to separate blocks and improve readability. |
| 76 | `Suyash Agarwal,` | Executable statement used by the server or client runtime. |
| 77 | `Naman Kalra` | Executable statement used by the server or client runtime. |
| 78 | `">` | Executable statement used by the server or client runtime. |
| 79 | `<script type="application/ld+json">` | HTML markup that contributes structure, metadata, or visible content. |
| 80 | `{` | Opens a new code block scope. |
| 81 | `  "@context": "https://schema.org",` | Executable statement used by the server or client runtime. |
| 82 | `  "@type": "Organization",` | Executable statement used by the server or client runtime. |
| 83 | `  "name": "Perseverantia 2025",` | Executable statement used by the server or client runtime. |
| 84 | `  "url": "https://bss-perseverantia.github.io/organizing-committee",` | Executable statement used by the server or client runtime. |
| 85 | `  "parentOrganization": {` | Executable statement used by the server or client runtime. |
| 86 | `   "@type": "School",` | Executable statement used by the server or client runtime. |
| 87 | `   "name": "Bombay Scottish School Mahim"` | Executable statement used by the server or client runtime. |
| 88 | ` },` | Closes the current code block. |
| 89 | `  "member": [` | Executable statement used by the server or client runtime. |
| 90 | `    {` | Opens a new code block scope. |
| 91 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 92 | `      "name": "Darshil Kochar",` | Executable statement used by the server or client runtime. |
| 93 | `      "jobTitle": "President",` | Executable statement used by the server or client runtime. |
| 94 | `      "affiliation": "Bombay Scottish School Mahim"` | Executable statement used by the server or client runtime. |
| 95 | `    },` | Closes the current code block. |
| 96 | `    {` | Opens a new code block scope. |
| 97 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 98 | `      "name": "Neel More",` | Executable statement used by the server or client runtime. |
| 99 | `      "jobTitle": "President",` | Executable statement used by the server or client runtime. |
| 100 | `      "affiliation": "Bombay Scottish School Mahim"` | Executable statement used by the server or client runtime. |
| 101 | `    },` | Closes the current code block. |
| 102 | `    {` | Opens a new code block scope. |
| 103 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 104 | `      "name": "Nishil Iyer",` | Executable statement used by the server or client runtime. |
| 105 | `      "jobTitle": "President",` | Executable statement used by the server or client runtime. |
| 106 | `      "affiliation": "Bombay Scottish School Mahim"` | Executable statement used by the server or client runtime. |
| 107 | `    },` | Closes the current code block. |
| 108 | `    {` | Opens a new code block scope. |
| 109 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 110 | `      "name": "Adhunya Pan",` | Executable statement used by the server or client runtime. |
| 111 | `      "jobTitle": "Head of Administration"` | Executable statement used by the server or client runtime. |
| 112 | `    },` | Closes the current code block. |
| 113 | `    {` | Opens a new code block scope. |
| 114 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 115 | `      "name": "Krishay Shreeram",` | Executable statement used by the server or client runtime. |
| 116 | `      "jobTitle": "Deputy Head of Administration"` | Executable statement used by the server or client runtime. |
| 117 | `    },` | Closes the current code block. |
| 118 | `    {` | Opens a new code block scope. |
| 119 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 120 | `      "name": "Varun Sinha",` | Executable statement used by the server or client runtime. |
| 121 | `      "jobTitle": "Head of R&D"` | Executable statement used by the server or client runtime. |
| 122 | `    },` | Closes the current code block. |
| 123 | `    {` | Opens a new code block scope. |
| 124 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 125 | `      "name": "Aadya Raikar",` | Executable statement used by the server or client runtime. |
| 126 | `      "jobTitle": "Deputy Head of R&D"` | Executable statement used by the server or client runtime. |
| 127 | `    },` | Closes the current code block. |
| 128 | `    {` | Opens a new code block scope. |
| 129 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 130 | `      "name": "Janyaa Patkar",` | Executable statement used by the server or client runtime. |
| 131 | `      "jobTitle": "Head of Design"` | Executable statement used by the server or client runtime. |
| 132 | `    },` | Closes the current code block. |
| 133 | `    {` | Opens a new code block scope. |
| 134 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 135 | `      "name": "Naisha Doshi",` | Executable statement used by the server or client runtime. |
| 136 | `      "jobTitle": "Deputy Head of Design"` | Executable statement used by the server or client runtime. |
| 137 | `    },` | Closes the current code block. |
| 138 | `    {` | Opens a new code block scope. |
| 139 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 140 | `      "name": "Sharanya Madan",` | Executable statement used by the server or client runtime. |
| 141 | `      "jobTitle": "Head of Social Media"` | Executable statement used by the server or client runtime. |
| 142 | `    },` | Closes the current code block. |
| 143 | `    {` | Opens a new code block scope. |
| 144 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 145 | `      "name": "Tanisha Dutta",` | Executable statement used by the server or client runtime. |
| 146 | `      "jobTitle": "Deputy Head of Social Media"` | Executable statement used by the server or client runtime. |
| 147 | `    },` | Closes the current code block. |
| 148 | `    {` | Opens a new code block scope. |
| 149 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 150 | `      "name": "Aastha Shahane",` | Executable statement used by the server or client runtime. |
| 151 | `      "jobTitle": "Head of Marketing"` | Executable statement used by the server or client runtime. |
| 152 | `    },` | Closes the current code block. |
| 153 | `    {` | Opens a new code block scope. |
| 154 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 155 | `      "name": "Yashvi Mehta",` | Executable statement used by the server or client runtime. |
| 156 | `      "jobTitle": "Deputy Head of Marketing"` | Executable statement used by the server or client runtime. |
| 157 | `    },` | Closes the current code block. |
| 158 | `    {` | Opens a new code block scope. |
| 159 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 160 | `      "name": "Anshrah Ahmed",` | Executable statement used by the server or client runtime. |
| 161 | `      "jobTitle": "Head of Public Relations"` | Executable statement used by the server or client runtime. |
| 162 | `    },` | Closes the current code block. |
| 163 | `    {` | Opens a new code block scope. |
| 164 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 165 | `      "name": "Anvi Khattar",` | Executable statement used by the server or client runtime. |
| 166 | `      "jobTitle": "Deputy Head of Public Relations"` | Executable statement used by the server or client runtime. |
| 167 | `    },` | Closes the current code block. |
| 168 | `    {` | Opens a new code block scope. |
| 169 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 170 | `      "name": "Shaurya Raisoni",` | Executable statement used by the server or client runtime. |
| 171 | `      "jobTitle": "Head of Finance"` | Executable statement used by the server or client runtime. |
| 172 | `    },` | Closes the current code block. |
| 173 | `    {` | Opens a new code block scope. |
| 174 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 175 | `      "name": "Vivaan Chakrabarti",` | Executable statement used by the server or client runtime. |
| 176 | `      "jobTitle": "Deputy Head of Finance"` | Executable statement used by the server or client runtime. |
| 177 | `    },` | Closes the current code block. |
| 178 | `    {` | Opens a new code block scope. |
| 179 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 180 | `      "name": "Hridhuun Savant",` | Executable statement used by the server or client runtime. |
| 181 | `      "jobTitle": "Head of Technical Operations"` | Executable statement used by the server or client runtime. |
| 182 | `    },` | Closes the current code block. |
| 183 | `    {` | Opens a new code block scope. |
| 184 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 185 | `      "name": "Arhaan Barucha",` | Executable statement used by the server or client runtime. |
| 186 | `      "jobTitle": "Deputy Head of Technical Operations"` | Executable statement used by the server or client runtime. |
| 187 | `    },` | Closes the current code block. |
| 188 | `    {` | Opens a new code block scope. |
| 189 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 190 | `      "name": "Druvan Kapoor",` | Executable statement used by the server or client runtime. |
| 191 | `      "jobTitle": "Head of Hospitality"` | Executable statement used by the server or client runtime. |
| 192 | `    },` | Closes the current code block. |
| 193 | `    {` | Opens a new code block scope. |
| 194 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 195 | `      "name": "Nandini Gurav",` | Executable statement used by the server or client runtime. |
| 196 | `      "jobTitle": "Deputy Head of Hospitality"` | Executable statement used by the server or client runtime. |
| 197 | `    },` | Closes the current code block. |
| 198 | `    {` | Opens a new code block scope. |
| 199 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 200 | `      "name": "Arjun Bapat",` | Executable statement used by the server or client runtime. |
| 201 | `      "jobTitle": "Head of Security"` | Executable statement used by the server or client runtime. |
| 202 | `    },` | Closes the current code block. |
| 203 | `    {` | Opens a new code block scope. |
| 204 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 205 | `      "name": "Aaditya Gupta",` | Executable statement used by the server or client runtime. |
| 206 | `      "jobTitle": "Deputy Head of Security"` | Executable statement used by the server or client runtime. |
| 207 | `    },` | Closes the current code block. |
| 208 | `    {` | Opens a new code block scope. |
| 209 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 210 | `      "name": "Aditi Manchandani",` | Executable statement used by the server or client runtime. |
| 211 | `      "jobTitle": "Head of Awards"` | Executable statement used by the server or client runtime. |
| 212 | `    },` | Closes the current code block. |
| 213 | `    {` | Opens a new code block scope. |
| 214 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 215 | `      "name": "Suyash Agarwal",` | Executable statement used by the server or client runtime. |
| 216 | `      "jobTitle": "Head of Photography"` | Executable statement used by the server or client runtime. |
| 217 | `    },` | Closes the current code block. |
| 218 | `    {` | Opens a new code block scope. |
| 219 | `      "@type": "Person",` | Executable statement used by the server or client runtime. |
| 220 | `      "name": "Naman Kalra",` | Executable statement used by the server or client runtime. |
| 221 | `      "jobTitle": "Deputy Head of Photography"` | Executable statement used by the server or client runtime. |
| 222 | `    }` | Closes the current code block. |
| 223 | `  ]` | Executable statement used by the server or client runtime. |
| 224 | `}` | Closes the current code block. |
| 225 | `</script>` | HTML markup that contributes structure, metadata, or visible content. |
| 226 | `` | Spacing line to separate blocks and improve readability. |
| 227 | `    <title>Organising Committee - Perseverantia</title>` | HTML markup that contributes structure, metadata, or visible content. |
| 228 | `` | Spacing line to separate blocks and improve readability. |
| 229 | `    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>` | HTML markup that contributes structure, metadata, or visible content. |
| 230 | `` | Spacing line to separate blocks and improve readability. |
| 231 | `    <style>` | HTML markup that contributes structure, metadata, or visible content. |
| 232 | `        @font-face {` | Executable statement used by the server or client runtime. |
| 233 | `            font-family: Mestizo;` | Executable statement used by the server or client runtime. |
| 234 | `            src: url(/assets/MestizoFont.ttf);` | Executable statement used by the server or client runtime. |
| 235 | `        }` | Closes the current code block. |
| 236 | `` | Spacing line to separate blocks and improve readability. |
| 237 | `        #loading-screen.fade-out {` | Executable statement used by the server or client runtime. |
| 238 | `            opacity: 0;` | Executable statement used by the server or client runtime. |
| 239 | `            pointer-events: none;` | Executable statement used by the server or client runtime. |
| 240 | `        }` | Closes the current code block. |
| 241 | `` | Spacing line to separate blocks and improve readability. |
| 242 | `        /* Enhanced Background and Animations */` | Block comment content or boundary. |
| 243 | `        body {` | Executable statement used by the server or client runtime. |
| 244 | `            background: linear-gradient(135deg, #0a0f2c 0%, #1a2949 50%, #0d122c 100%);` | Executable statement used by the server or client runtime. |
| 245 | `            min-height: 100vh;` | Executable statement used by the server or client runtime. |
| 246 | `            position: relative;` | Executable statement used by the server or client runtime. |
| 247 | `            overflow-x: hidden;` | Executable statement used by the server or client runtime. |
| 248 | `            /* Disable WebKit color scheme override */` | Block comment content or boundary. |
| 249 | `            -webkit-color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 250 | `            color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 251 | `        }` | Closes the current code block. |
| 252 | `        ` | Spacing line to separate blocks and improve readability. |
| 253 | `        /* Force dark background for iOS Safari */` | Block comment content or boundary. |
| 254 | `        html {` | Executable statement used by the server or client runtime. |
| 255 | `            background: #0a0f2c !important;` | Executable statement used by the server or client runtime. |
| 256 | `            -webkit-color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 257 | `            color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 258 | `        }` | Closes the current code block. |
| 259 | `        ` | Spacing line to separate blocks and improve readability. |
| 260 | `        /* Prevent iOS from changing colors */` | Block comment content or boundary. |
| 261 | `        * {` | Executable statement used by the server or client runtime. |
| 262 | `            -webkit-color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 263 | `            color-scheme: dark;` | Executable statement used by the server or client runtime. |
| 264 | `        }` | Closes the current code block. |
| 265 | `` | Spacing line to separate blocks and improve readability. |
| 266 | `        /* Floating Background Elements */` | Block comment content or boundary. |
| 267 | `        .bg-decoration {` | Executable statement used by the server or client runtime. |
| 268 | `            position: fixed;` | Executable statement used by the server or client runtime. |
| 269 | `            pointer-events: none;` | Executable statement used by the server or client runtime. |
| 270 | `            z-index: -1;` | Executable statement used by the server or client runtime. |
| 271 | `        }` | Closes the current code block. |
| 272 | `` | Spacing line to separate blocks and improve readability. |
| 273 | `        .bg-decoration::before,` | Executable statement used by the server or client runtime. |
| 274 | `        .bg-decoration::after {` | Executable statement used by the server or client runtime. |
| 275 | `            content: '';` | Executable statement used by the server or client runtime. |
| 276 | `            position: absolute;` | Executable statement used by the server or client runtime. |
| 277 | `            border-radius: 50%;` | Executable statement used by the server or client runtime. |
| 278 | `            background: rgba(190, 142, 48, 0.1);` | Executable statement used by the server or client runtime. |
| 279 | `            animation: float 6s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 280 | `        }` | Closes the current code block. |
| 281 | `` | Spacing line to separate blocks and improve readability. |
| 282 | `        .bg-decoration::before {` | Executable statement used by the server or client runtime. |
| 283 | `            width: 200px;` | Executable statement used by the server or client runtime. |
| 284 | `            height: 200px;` | Executable statement used by the server or client runtime. |
| 285 | `            top: 10%;` | Executable statement used by the server or client runtime. |
| 286 | `            left: 80%;` | Executable statement used by the server or client runtime. |
| 287 | `            animation-delay: 0s;` | Executable statement used by the server or client runtime. |
| 288 | `        }` | Closes the current code block. |
| 289 | `` | Spacing line to separate blocks and improve readability. |
| 290 | `        .bg-decoration::after {` | Executable statement used by the server or client runtime. |
| 291 | `            width: 150px;` | Executable statement used by the server or client runtime. |
| 292 | `            height: 150px;` | Executable statement used by the server or client runtime. |
| 293 | `            bottom: 20%;` | Executable statement used by the server or client runtime. |
| 294 | `            left: 10%;` | Executable statement used by the server or client runtime. |
| 295 | `            animation-delay: 3s;` | Executable statement used by the server or client runtime. |
| 296 | `        }` | Closes the current code block. |
| 297 | `` | Spacing line to separate blocks and improve readability. |
| 298 | `        @keyframes float {` | Executable statement used by the server or client runtime. |
| 299 | `            0%, 100% { transform: translateY(0px) rotate(0deg); }` | Executable statement used by the server or client runtime. |
| 300 | `            50% { transform: translateY(-20px) rotate(180deg); }` | Executable statement used by the server or client runtime. |
| 301 | `        }` | Closes the current code block. |
| 302 | `` | Spacing line to separate blocks and improve readability. |
| 303 | `        /* Enhanced Card Animations */` | Block comment content or boundary. |
| 304 | `        .member-card {` | Executable statement used by the server or client runtime. |
| 305 | `            background: linear-gradient(145deg, #081032 0%, #0c1542 100%);` | Executable statement used by the server or client runtime. |
| 306 | `            border: 2px solid rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 307 | `            border-radius: 20px;` | Executable statement used by the server or client runtime. |
| 308 | `            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);` | Executable statement used by the server or client runtime. |
| 309 | `            position: relative;` | Executable statement used by the server or client runtime. |
| 310 | `            overflow: hidden;` | Executable statement used by the server or client runtime. |
| 311 | `            backdrop-filter: blur(10px);` | Executable statement used by the server or client runtime. |
| 312 | `        }` | Closes the current code block. |
| 313 | `` | Spacing line to separate blocks and improve readability. |
| 314 | `        .member-card::before {` | Executable statement used by the server or client runtime. |
| 315 | `            content: '';` | Executable statement used by the server or client runtime. |
| 316 | `            position: absolute;` | Executable statement used by the server or client runtime. |
| 317 | `            top: 0;` | Executable statement used by the server or client runtime. |
| 318 | `            left: -100%;` | Executable statement used by the server or client runtime. |
| 319 | `            width: 100%;` | Executable statement used by the server or client runtime. |
| 320 | `            height: 100%;` | Executable statement used by the server or client runtime. |
| 321 | `            background: linear-gradient(90deg, transparent, rgba(190, 142, 48, 0.2), transparent);` | Executable statement used by the server or client runtime. |
| 322 | `            transition: left 0.5s;` | Executable statement used by the server or client runtime. |
| 323 | `        }` | Closes the current code block. |
| 324 | `` | Spacing line to separate blocks and improve readability. |
| 325 | `        .member-card:hover::before {` | Executable statement used by the server or client runtime. |
| 326 | `            left: 100%;` | Executable statement used by the server or client runtime. |
| 327 | `        }` | Closes the current code block. |
| 328 | `` | Spacing line to separate blocks and improve readability. |
| 329 | `        .member-card:hover {` | Executable statement used by the server or client runtime. |
| 330 | `            transform: translateY(-10px) scale(1.05);` | Executable statement used by the server or client runtime. |
| 331 | `            border-color: #BE8E30;` | Executable statement used by the server or client runtime. |
| 332 | `            box-shadow: ` | Executable statement used by the server or client runtime. |
| 333 | `                0 20px 40px rgba(190, 142, 48, 0.3),` | Executable statement used by the server or client runtime. |
| 334 | `                0 0 30px rgba(190, 142, 48, 0.2);` | Executable statement used by the server or client runtime. |
| 335 | `        }` | Closes the current code block. |
| 336 | `` | Spacing line to separate blocks and improve readability. |
| 337 | `        .member-card img {` | Executable statement used by the server or client runtime. |
| 338 | `            transition: all 0.4s ease;` | Executable statement used by the server or client runtime. |
| 339 | `            filter: grayscale(20%);` | Executable statement used by the server or client runtime. |
| 340 | `        }` | Closes the current code block. |
| 341 | `` | Spacing line to separate blocks and improve readability. |
| 342 | `        .member-card:hover img {` | Executable statement used by the server or client runtime. |
| 343 | `            filter: grayscale(0%) brightness(110%);` | Executable statement used by the server or client runtime. |
| 344 | `            transform: scale(1.1);` | Executable statement used by the server or client runtime. |
| 345 | `        }` | Closes the current code block. |
| 346 | `` | Spacing line to separate blocks and improve readability. |
| 347 | `        /* Enhanced Typography */` | Block comment content or boundary. |
| 348 | `        .section-title {` | Executable statement used by the server or client runtime. |
| 349 | `            background: linear-gradient(45deg, #BE8E30, #FFD700, #BE8E30);` | Executable statement used by the server or client runtime. |
| 350 | `            background-size: 200% 200%;` | Executable statement used by the server or client runtime. |
| 351 | `            -webkit-background-clip: text;` | Executable statement used by the server or client runtime. |
| 352 | `            -webkit-text-fill-color: transparent;` | Executable statement used by the server or client runtime. |
| 353 | `            background-clip: text;` | Executable statement used by the server or client runtime. |
| 354 | `            animation: gradientShift 3s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 355 | `            text-shadow: 0 0 30px rgba(190, 142, 48, 0.5);` | Executable statement used by the server or client runtime. |
| 356 | `        }` | Closes the current code block. |
| 357 | `` | Spacing line to separate blocks and improve readability. |
| 358 | `        @keyframes gradientShift {` | Executable statement used by the server or client runtime. |
| 359 | `            0%, 100% { background-position: 0% 50%; }` | Executable statement used by the server or client runtime. |
| 360 | `            50% { background-position: 100% 50%; }` | Executable statement used by the server or client runtime. |
| 361 | `        }` | Closes the current code block. |
| 362 | `` | Spacing line to separate blocks and improve readability. |
| 363 | `        .member-name {` | Executable statement used by the server or client runtime. |
| 364 | `            font-weight: 600;` | Executable statement used by the server or client runtime. |
| 365 | `            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);` | Executable statement used by the server or client runtime. |
| 366 | `            transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 367 | `        }` | Closes the current code block. |
| 368 | `` | Spacing line to separate blocks and improve readability. |
| 369 | `        .member-card:hover .member-name {` | Executable statement used by the server or client runtime. |
| 370 | `            text-shadow: 0 0 20px rgba(190, 142, 48, 0.8);` | Executable statement used by the server or client runtime. |
| 371 | `        }` | Closes the current code block. |
| 372 | `` | Spacing line to separate blocks and improve readability. |
| 373 | `        /* Enhanced Presidents Section */` | Block comment content or boundary. |
| 374 | `        .presidents-container {` | Executable statement used by the server or client runtime. |
| 375 | `            position: relative;` | Executable statement used by the server or client runtime. |
| 376 | `            padding: 2rem;` | Executable statement used by the server or client runtime. |
| 377 | `            border-radius: 30px;` | Executable statement used by the server or client runtime. |
| 378 | `            background: rgba(255, 255, 255, 0.05);` | Executable statement used by the server or client runtime. |
| 379 | `            backdrop-filter: blur(15px);` | Executable statement used by the server or client runtime. |
| 380 | `            border: 2px solid rgba(190, 142, 48, 0.2);` | Executable statement used by the server or client runtime. |
| 381 | `            margin-bottom: 3rem;` | Executable statement used by the server or client runtime. |
| 382 | `        }` | Closes the current code block. |
| 383 | `` | Spacing line to separate blocks and improve readability. |
| 384 | `        .presidents-container::before {` | Executable statement used by the server or client runtime. |
| 385 | `            content: '';` | Executable statement used by the server or client runtime. |
| 386 | `            position: absolute;` | Executable statement used by the server or client runtime. |
| 387 | `            top: -10px;` | Executable statement used by the server or client runtime. |
| 388 | `            left: 50%;` | Executable statement used by the server or client runtime. |
| 389 | `            transform: translateX(-50%);` | Executable statement used by the server or client runtime. |
| 390 | `            width: 20px;` | Executable statement used by the server or client runtime. |
| 391 | `            height: 20px;` | Executable statement used by the server or client runtime. |
| 392 | `            background: linear-gradient(45deg, #BE8E30, #FFD700);` | Executable statement used by the server or client runtime. |
| 393 | `            border-radius: 50%;` | Executable statement used by the server or client runtime. |
| 394 | `            border: 2px solid #081032;` | Executable statement used by the server or client runtime. |
| 395 | `        }` | Closes the current code block. |
| 396 | `` | Spacing line to separate blocks and improve readability. |
| 397 | `        /* Grid Enhancement */` | Block comment content or boundary. |
| 398 | `        .department-grid {` | Executable statement used by the server or client runtime. |
| 399 | `            position: relative;` | Executable statement used by the server or client runtime. |
| 400 | `        }` | Closes the current code block. |
| 401 | `` | Spacing line to separate blocks and improve readability. |
| 402 | `        .department-section {` | Executable statement used by the server or client runtime. |
| 403 | `            position: relative;` | Executable statement used by the server or client runtime. |
| 404 | `            padding: 1.5rem;` | Executable statement used by the server or client runtime. |
| 405 | `            border-radius: 20px;` | Executable statement used by the server or client runtime. |
| 406 | `            background: rgba(255, 255, 255, 0.02);` | Executable statement used by the server or client runtime. |
| 407 | `            border: 1px solid rgba(190, 142, 48, 0.1);` | Executable statement used by the server or client runtime. |
| 408 | `            transition: all 0.3s ease;` | Executable statement used by the server or client runtime. |
| 409 | `        }` | Closes the current code block. |
| 410 | `` | Spacing line to separate blocks and improve readability. |
| 411 | `        .department-section:hover {` | Executable statement used by the server or client runtime. |
| 412 | `            background: rgba(255, 255, 255, 0.05);` | Executable statement used by the server or client runtime. |
| 413 | `            border-color: rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 414 | `        }` | Closes the current code block. |
| 415 | `` | Spacing line to separate blocks and improve readability. |
| 416 | `        /* Loading Animation Enhancement */` | Block comment content or boundary. |
| 417 | `        #loading-screen {` | Executable statement used by the server or client runtime. |
| 418 | `            background: radial-gradient(circle at center, #1a2949 0%, #0a0f2c 100%);` | Executable statement used by the server or client runtime. |
| 419 | `        }` | Closes the current code block. |
| 420 | `` | Spacing line to separate blocks and improve readability. |
| 421 | `        #loading-video {` | Executable statement used by the server or client runtime. |
| 422 | `            animation: pulse 2s ease-in-out infinite;` | Executable statement used by the server or client runtime. |
| 423 | `        }` | Closes the current code block. |
| 424 | `` | Spacing line to separate blocks and improve readability. |
| 425 | `        @keyframes pulse {` | Executable statement used by the server or client runtime. |
| 426 | `            0%, 100% { transform: scale(1); }` | Executable statement used by the server or client runtime. |
| 427 | `            50% { transform: scale(1.1); }` | Executable statement used by the server or client runtime. |
| 428 | `        }` | Closes the current code block. |
| 429 | `` | Spacing line to separate blocks and improve readability. |
| 430 | `        /* Responsive Enhancements */` | Block comment content or boundary. |
| 431 | `        @media (max-width: 768px) {` | Executable statement used by the server or client runtime. |
| 432 | `            .member-card {` | Executable statement used by the server or client runtime. |
| 433 | `                margin-bottom: 1rem;` | Executable statement used by the server or client runtime. |
| 434 | `            }` | Closes the current code block. |
| 435 | `            ` | Spacing line to separate blocks and improve readability. |
| 436 | `            .section-title {` | Executable statement used by the server or client runtime. |
| 437 | `                font-size: 2rem !important;` | Executable statement used by the server or client runtime. |
| 438 | `            }` | Closes the current code block. |
| 439 | `` | Spacing line to separate blocks and improve readability. |
| 440 | `            .presidents-container {` | Executable statement used by the server or client runtime. |
| 441 | `                padding: 1rem;` | Executable statement used by the server or client runtime. |
| 442 | `            }` | Closes the current code block. |
| 443 | `        }` | Closes the current code block. |
| 444 | `` | Spacing line to separate blocks and improve readability. |
| 445 | `        /* Scrollbar Styling */` | Block comment content or boundary. |
| 446 | `        ::-webkit-scrollbar {` | Executable statement used by the server or client runtime. |
| 447 | `            width: 12px;` | Executable statement used by the server or client runtime. |
| 448 | `        }` | Closes the current code block. |
| 449 | `` | Spacing line to separate blocks and improve readability. |
| 450 | `        ::-webkit-scrollbar-track {` | Executable statement used by the server or client runtime. |
| 451 | `            background: #081032;` | Executable statement used by the server or client runtime. |
| 452 | `        }` | Closes the current code block. |
| 453 | `` | Spacing line to separate blocks and improve readability. |
| 454 | `        ::-webkit-scrollbar-thumb {` | Executable statement used by the server or client runtime. |
| 455 | `            background: linear-gradient(45deg, #BE8E30, #FFD700);` | Executable statement used by the server or client runtime. |
| 456 | `            border-radius: 6px;` | Executable statement used by the server or client runtime. |
| 457 | `        }` | Closes the current code block. |
| 458 | `` | Spacing line to separate blocks and improve readability. |
| 459 | `        ::-webkit-scrollbar-thumb:hover {` | Executable statement used by the server or client runtime. |
| 460 | `            background: linear-gradient(45deg, #FFD700, #BE8E30);` | Executable statement used by the server or client runtime. |
| 461 | `        }` | Closes the current code block. |
| 462 | `` | Spacing line to separate blocks and improve readability. |
| 463 | `        /* Entrance Animations */` | Block comment content or boundary. |
| 464 | `        .fade-in-up {` | Executable statement used by the server or client runtime. |
| 465 | `            opacity: 0;` | Executable statement used by the server or client runtime. |
| 466 | `            transform: translateY(30px);` | Executable statement used by the server or client runtime. |
| 467 | `            animation: fadeInUp 0.8s ease forwards;` | Executable statement used by the server or client runtime. |
| 468 | `        }` | Closes the current code block. |
| 469 | `` | Spacing line to separate blocks and improve readability. |
| 470 | `        @keyframes fadeInUp {` | Executable statement used by the server or client runtime. |
| 471 | `            to {` | Executable statement used by the server or client runtime. |
| 472 | `                opacity: 1;` | Executable statement used by the server or client runtime. |
| 473 | `                transform: translateY(0);` | Executable statement used by the server or client runtime. |
| 474 | `            }` | Closes the current code block. |
| 475 | `        }` | Closes the current code block. |
| 476 | `` | Spacing line to separate blocks and improve readability. |
| 477 | `        /* Stagger animation delays */` | Block comment content or boundary. |
| 478 | `        .member-card:nth-child(1) { animation-delay: 0.1s; }` | Executable statement used by the server or client runtime. |
| 479 | `        .member-card:nth-child(2) { animation-delay: 0.2s; }` | Executable statement used by the server or client runtime. |
| 480 | `        .member-card:nth-child(3) { animation-delay: 0.3s; }` | Executable statement used by the server or client runtime. |
| 481 | `        .member-card:nth-child(4) { animation-delay: 0.4s; }` | Executable statement used by the server or client runtime. |
| 482 | `    </style>` | HTML markup that contributes structure, metadata, or visible content. |
| 483 | `</head>` | HTML markup that contributes structure, metadata, or visible content. |
| 484 | `` | Spacing line to separate blocks and improve readability. |
| 485 | `<body class="bg-gray-100 text-gray-800">` | HTML markup that contributes structure, metadata, or visible content. |
| 486 | `    <!-- Loading Screen -->` | HTML markup that contributes structure, metadata, or visible content. |
| 487 | `    <div id="loading-screen"` | HTML markup that contributes structure, metadata, or visible content. |
| 488 | `        style="position: fixed; inset: 0; background: linear-gradient(135deg, #0a0f2c, #1a2949); z-index: 9999; display: flex; align-items: center; justify-content: center; transition: opacity 0.6s ease;">` | Executable statement used by the server or client runtime. |
| 489 | `        <video id="loading-video" autoplay muted loop playsinline` | HTML markup that contributes structure, metadata, or visible content. |
| 490 | `            style="width: 150px; height: 150px; object-fit: contain; filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7)); border-radius: 12px;">` | Executable statement used by the server or client runtime. |
| 491 | `            <source src="/assets/load.mp4" type="video/mp4" />` | HTML markup that contributes structure, metadata, or visible content. |
| 492 | `            Your browser does not support the video tag.` | Executable statement used by the server or client runtime. |
| 493 | `        </video>` | HTML markup that contributes structure, metadata, or visible content. |
| 494 | `    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 495 | `` | Spacing line to separate blocks and improve readability. |
| 496 | `    <!-- Navbar -->` | HTML markup that contributes structure, metadata, or visible content. |
| 497 | `    <nav class="text-white" style="background: #081032">` | HTML markup that contributes structure, metadata, or visible content. |
| 498 | `        <div class="container mx-auto px-4 py-4 flex justify-between items-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 499 | `            <div class="flex items-center space-x-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 500 | `                <img src="/assets/persev.png" alt="Logo" class="h-10 w-10 md:hidden" />` | HTML markup that contributes structure, metadata, or visible content. |
| 501 | `                <span class="text-2xl" style="font-family: Mestizo" id="nav-title">` | HTML markup that contributes structure, metadata, or visible content. |
| 502 | `                    Perseverantia` | Executable statement used by the server or client runtime. |
| 503 | `                </span>` | HTML markup that contributes structure, metadata, or visible content. |
| 504 | `            </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 505 | `            <div class="hidden md:flex space-x-6 text-lg" id="desktop-nav">` | HTML markup that contributes structure, metadata, or visible content. |
| 506 | `                <a href="/" class="hover:text-blue-200">Home</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 507 | `                <a href="/events.html" class="hover:text-blue-200">Events</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 508 | `                <a href="/organizing-committee.html" class="hover:text-blue-200">Organizing Committee</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 509 | `            </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 510 | `            <div class="md:hidden">` | HTML markup that contributes structure, metadata, or visible content. |
| 511 | `                <button id="menu-toggle" class="focus:outline-none" aria-label="menu">` | HTML markup that contributes structure, metadata, or visible content. |
| 512 | `                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"` | HTML markup that contributes structure, metadata, or visible content. |
| 513 | `                        stroke-linecap="round" stroke-linejoin="round">` | Executable statement used by the server or client runtime. |
| 514 | `                        <path d="M4 6h16M4 12h16M4 18h16" />` | HTML markup that contributes structure, metadata, or visible content. |
| 515 | `                    </svg>` | HTML markup that contributes structure, metadata, or visible content. |
| 516 | `                </button>` | HTML markup that contributes structure, metadata, or visible content. |
| 517 | `            </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 518 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 519 | `        <div id="mobile-menu" class="md:hidden hidden opacity-0 scale-y-90 -translate-y-4 transform transition-all duration-500 ease-out origin-top px-4 pb-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 520 | `            <a href="/" class="block py-2 text-lg hover:text-blue-200">Home</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 521 | `            <a href="/events.html" class="block py-2 text-lg hover:text-blue-200">Events</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 522 | `            <a href="/organizing-committee.html" class="block py-2 text-lg hover:text-blue-200">Organizing Committee</a>` | HTML markup that contributes structure, metadata, or visible content. |
| 523 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 524 | `    </nav>` | HTML markup that contributes structure, metadata, or visible content. |
| 525 | `` | Spacing line to separate blocks and improve readability. |
| 526 | `    <!-- Organising Committee Section -->` | HTML markup that contributes structure, metadata, or visible content. |
| 527 | `    <section class="py-12 text-white relative">` | HTML markup that contributes structure, metadata, or visible content. |
| 528 | `        <!-- Background Decorations -->` | HTML markup that contributes structure, metadata, or visible content. |
| 529 | `        <div class="bg-decoration"></div>` | HTML markup that contributes structure, metadata, or visible content. |
| 530 | `        ` | Spacing line to separate blocks and improve readability. |
| 531 | `        <div class="container mx-auto px-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 532 | `            <h2 class="text-5xl mb-12 text-center section-title fade-in-up" style="font-family: Mestizo">` | HTML markup that contributes structure, metadata, or visible content. |
| 533 | `                Meet Our Organizing Committee` | Executable statement used by the server or client runtime. |
| 534 | `            </h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 535 | `` | Spacing line to separate blocks and improve readability. |
| 536 | `            <!-- Presidents (enhanced with special container) -->` | HTML markup that contributes structure, metadata, or visible content. |
| 537 | `            <div class="presidents-container fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 538 | `                <div class="text-4xl text-center mb-8 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 539 | `                    Presidents` | Executable statement used by the server or client runtime. |
| 540 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 541 | `                <div class="flex flex-wrap justify-center gap-8">` | HTML markup that contributes structure, metadata, or visible content. |
| 542 | `                    <div class="member-card w-72 p-6 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 543 | `                        <img src="/assets/oc2025/presidents/darshil.avif" alt="Darshil Kochar" ` | HTML markup that contributes structure, metadata, or visible content. |
| 544 | `                             class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 545 | `                        <div class="text-xl member-name text-center">Darshil Kochar</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 546 | `                        <div class="text-sm text-[#BE8E30] text-center mt-1">President</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 547 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 548 | `                    <div class="member-card w-72 p-6 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 549 | `                        <img src="/assets/oc2025/presidents/neel.avif" alt="Neel More" ` | HTML markup that contributes structure, metadata, or visible content. |
| 550 | `                             class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 551 | `                        <div class="text-xl member-name text-center">Neel More</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 552 | `                        <div class="text-sm text-[#BE8E30] text-center mt-1">President</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 553 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 554 | `                    <div class="member-card w-72 p-6 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 555 | `                        <img src="/assets/oc2025/presidents/nishil.avif" alt="Nishil Iyer" ` | HTML markup that contributes structure, metadata, or visible content. |
| 556 | `                             class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 557 | `                        <div class="text-xl member-name text-center">Nishil Iyer</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 558 | `                        <div class="text-sm text-[#BE8E30] text-center mt-1">President</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 559 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 560 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 561 | `            </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 562 | `` | Spacing line to separate blocks and improve readability. |
| 563 | `` | Spacing line to separate blocks and improve readability. |
| 564 | `                            ` | Spacing line to separate blocks and improve readability. |
| 565 | `` | Spacing line to separate blocks and improve readability. |
| 566 | `` | Spacing line to separate blocks and improve readability. |
| 567 | `            <!-- Department Grid -->` | HTML markup that contributes structure, metadata, or visible content. |
| 568 | `            <div class="department-grid grid grid-cols-1 md:grid-cols-2 gap-12">` | HTML markup that contributes structure, metadata, or visible content. |
| 569 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 570 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 571 | `                        Administration ` | Executable statement used by the server or client runtime. |
| 572 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 573 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 574 | `                        ` | Spacing line to separate blocks and improve readability. |
| 575 | `` | Spacing line to separate blocks and improve readability. |
| 576 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 577 | `                            <img src="/assets/oc2025/administration/adhunya.avif" alt="Adhunya" ` | HTML markup that contributes structure, metadata, or visible content. |
| 578 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 579 | `                            <div class="text-lg member-name text-center">Adhunya Pan</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 580 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Administration</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 581 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 582 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 583 | `                            <img src="/assets/oc2025/administration/krishay.avif" alt="Krishay" ` | HTML markup that contributes structure, metadata, or visible content. |
| 584 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 585 | `                            <div class="text-lg member-name text-center">Krishay Shreeram</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 586 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Administration</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 587 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 588 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 589 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 590 | `                ` | Spacing line to separate blocks and improve readability. |
| 591 | `                <!-- Research & Development Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 592 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 593 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 594 | `                        Research & Documentation` | Executable statement used by the server or client runtime. |
| 595 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 596 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 597 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 598 | `                            <img src="/assets/oc2025/rnd/varun.avif" alt="Varun" ` | HTML markup that contributes structure, metadata, or visible content. |
| 599 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 600 | `                            <div class="text-lg member-name text-center">Varun Sinha</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 601 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of R&D</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 602 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 603 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 604 | `                            <img src="/assets/oc2025/rnd/aadya.avif" alt="Aadya" ` | HTML markup that contributes structure, metadata, or visible content. |
| 605 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 606 | `                            <div class="text-lg member-name text-center">Aadya Raikar</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 607 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of R&D</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 608 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 609 | `                        ` | Spacing line to separate blocks and improve readability. |
| 610 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 611 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 612 | `` | Spacing line to separate blocks and improve readability. |
| 613 | `                <!-- Design Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 614 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 615 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 616 | `                        Design` | Executable statement used by the server or client runtime. |
| 617 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 618 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 619 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 620 | `                            <img src="/assets/oc2025/design/janyaa.avif" alt="Janyaa" ` | HTML markup that contributes structure, metadata, or visible content. |
| 621 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 622 | `                            <div class="text-lg member-name text-center">Janyaa Patkar</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 623 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Design</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 624 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 625 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 626 | `                            <img src="/assets/oc2025/design/naisha.avif" alt="Naisha" ` | HTML markup that contributes structure, metadata, or visible content. |
| 627 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 628 | `                            <div class="text-lg member-name text-center">Naisha Doshi</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 629 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Design</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 630 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 631 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 632 | `` | Spacing line to separate blocks and improve readability. |
| 633 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 634 | `` | Spacing line to separate blocks and improve readability. |
| 635 | `` | Spacing line to separate blocks and improve readability. |
| 636 | `                                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 637 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 638 | `                        Social Media` | Executable statement used by the server or client runtime. |
| 639 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 640 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 641 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 642 | `                            <img src="/assets/oc2025/social-media/sharanya.avif" alt="Sharanya" ` | HTML markup that contributes structure, metadata, or visible content. |
| 643 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 644 | `                            <div class="text-lg member-name text-center">Sharanya Madan</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 645 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Social Media</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 646 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 647 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 648 | `                            <img src="/assets/oc2025/social-media/tanisha.avif" alt="Tanisha" ` | HTML markup that contributes structure, metadata, or visible content. |
| 649 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 650 | `                            <div class="text-lg member-name text-center">Tanisha Dutta</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 651 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Social Media</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 652 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 653 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 654 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 655 | `` | Spacing line to separate blocks and improve readability. |
| 656 | `                <!-- Marketing Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 657 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 658 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 659 | `                        Marketing` | Executable statement used by the server or client runtime. |
| 660 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 661 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 662 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 663 | `                            <img src="/assets/oc2025/marketing/aastha.avif" alt="Aastha" ` | HTML markup that contributes structure, metadata, or visible content. |
| 664 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 665 | `                            <div class="text-lg member-name text-center">Aastha Shahane</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 666 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Marketing</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 667 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 668 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 669 | `                            <img src="/assets/oc2025/marketing/yashvi.avif" alt="Yashvi" ` | HTML markup that contributes structure, metadata, or visible content. |
| 670 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 671 | `                            <div class="text-lg member-name text-center">Yashvi Mehta</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 672 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Marketing</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 673 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 674 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 675 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 676 | `` | Spacing line to separate blocks and improve readability. |
| 677 | `                <!-- Marketing Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 678 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 679 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 680 | `                        Public Relations` | Executable statement used by the server or client runtime. |
| 681 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 682 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 683 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 684 | `                            <img src="/assets/oc2025/public-relations/anshrah.avif" alt="Anshrah" ` | HTML markup that contributes structure, metadata, or visible content. |
| 685 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 686 | `                            <div class="text-lg member-name text-center">Anshrah Ahmed</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 687 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Public Relations</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 688 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 689 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 690 | `                            <img src="/assets/oc2025/public-relations/anvi.avif" alt="Anvi" ` | HTML markup that contributes structure, metadata, or visible content. |
| 691 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 692 | `                            <div class="text-lg member-name text-center">Anvi Khattar</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 693 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Public Relations</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 694 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 695 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 696 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 697 | `` | Spacing line to separate blocks and improve readability. |
| 698 | `                <!-- Finance Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 699 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 700 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 701 | `                        Finance` | Executable statement used by the server or client runtime. |
| 702 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 703 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 704 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 705 | `                            <img src="/assets/oc2025/finance/shaurya.avif" alt="Shaurya Raisoni" ` | HTML markup that contributes structure, metadata, or visible content. |
| 706 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 707 | `                            <div class="text-lg member-name text-center">Shaurya Raisoni</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 708 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Finance</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 709 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 710 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 711 | `                            <img src="/assets/oc2025/finance/vivaan.avif" alt="Vivaan Chakrabarti" ` | HTML markup that contributes structure, metadata, or visible content. |
| 712 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 713 | `                            <div class="text-lg member-name text-center">Vivaan Chakrabarti</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 714 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Finance</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 715 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 716 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 717 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 718 | `<!-- Technical Operations Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 719 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 720 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 721 | `                        Technical Operations` | Executable statement used by the server or client runtime. |
| 722 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 723 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 724 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 725 | `                            <img src="/assets/oc2025/technical-operations/Hridhuun.avif" alt="Hridhuun Savant" ` | HTML markup that contributes structure, metadata, or visible content. |
| 726 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 727 | `                            <div class="text-lg member-name text-center">Hridhuun Savant</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 728 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Technical Operations</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 729 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 730 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 731 | `                            <img src="/assets/oc2025/technical-operations/Arhaan.avif" alt="Arhaan Barucha" ` | HTML markup that contributes structure, metadata, or visible content. |
| 732 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 733 | `                            <div class="text-lg member-name text-center">Arhaan Barucha</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 734 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Technical Operations</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 735 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 736 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 737 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 738 | `` | Spacing line to separate blocks and improve readability. |
| 739 | `                <!-- Hospitality Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 740 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 741 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 742 | `                        Hospitality ` | Executable statement used by the server or client runtime. |
| 743 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 744 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 745 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 746 | `                            <img src="/assets/oc2025/hospitality/druvan.avif" alt="Druvan Kapoor" ` | HTML markup that contributes structure, metadata, or visible content. |
| 747 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 748 | `                            <div class="text-lg member-name text-center">Druvan Kapoor</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 749 | `                            <div class="text-xs text-[#BE8E30] text-center"> Head of Hospitality </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 750 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 751 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 752 | `                            <img src="/assets/oc2025/hospitality/nandini.avif" alt="Nandini Gurav" ` | HTML markup that contributes structure, metadata, or visible content. |
| 753 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 754 | `                            <div class="text-lg member-name text-center">Nandini Gurav</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 755 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Hospitality</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 756 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 757 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 758 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 759 | `` | Spacing line to separate blocks and improve readability. |
| 760 | `                <!-- Security Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 761 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 762 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 763 | `                        Security ` | Executable statement used by the server or client runtime. |
| 764 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 765 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 766 | `                        ` | Spacing line to separate blocks and improve readability. |
| 767 | `` | Spacing line to separate blocks and improve readability. |
| 768 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 769 | `                            <img src="/assets/oc2025/security/arjun.avif" alt="Arjun" ` | HTML markup that contributes structure, metadata, or visible content. |
| 770 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 771 | `                            <div class="text-lg member-name text-center">Arjun Bapat</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 772 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Security</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 773 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 774 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 775 | `                            <img src="/assets/oc2025/security/aadita.avif" alt="Aaditya" ` | HTML markup that contributes structure, metadata, or visible content. |
| 776 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 777 | `                            <div class="text-lg member-name text-center">Aaditya Gupta</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 778 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Security</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 779 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 780 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 781 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 782 | `` | Spacing line to separate blocks and improve readability. |
| 783 | `                <!-- Security Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 784 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 785 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 786 | `                        Awards ` | Executable statement used by the server or client runtime. |
| 787 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 788 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 789 | `                        ` | Spacing line to separate blocks and improve readability. |
| 790 | `` | Spacing line to separate blocks and improve readability. |
| 791 | `                            <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 792 | `                                <img src="/assets/oc2025/awards/aditi.avif" alt="Aditi" ` | HTML markup that contributes structure, metadata, or visible content. |
| 793 | `                                    class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 794 | `                                <div class="text-lg member-name text-center">Aditi Manchandani</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 795 | `                                <div class="text-xs text-[#BE8E30] text-center">Head of Awards</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 796 | `                            </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 797 | `                        ` | Spacing line to separate blocks and improve readability. |
| 798 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 799 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 800 | `` | Spacing line to separate blocks and improve readability. |
| 801 | `` | Spacing line to separate blocks and improve readability. |
| 802 | `                <!-- Photography Department -->` | HTML markup that contributes structure, metadata, or visible content. |
| 803 | `                <div class="department-section fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 804 | `                    <div class="text-3xl text-center mb-6 section-title" style="font-family: Mestizo;">` | HTML markup that contributes structure, metadata, or visible content. |
| 805 | `                        Photography` | Executable statement used by the server or client runtime. |
| 806 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 807 | `                    <div class="flex flex-wrap justify-center gap-6">` | HTML markup that contributes structure, metadata, or visible content. |
| 808 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 809 | `                            <img src="/assets/oc2025/photography/suyash.avif" alt="Suyash" ` | HTML markup that contributes structure, metadata, or visible content. |
| 810 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 811 | `                            <div class="text-lg member-name text-center">Suyash Agarwal</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 812 | `                            <div class="text-xs text-[#BE8E30] text-center">Head of Photography</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 813 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 814 | `                        <div class="member-card w-56 p-4 fade-in-up">` | HTML markup that contributes structure, metadata, or visible content. |
| 815 | `                            <img src="/assets/oc2025/photography/naman.avif" alt="Naman" ` | HTML markup that contributes structure, metadata, or visible content. |
| 816 | `                                 class="aspect-[4/3] w-full object-cover object-top rounded-lg mb-4">` | Executable statement used by the server or client runtime. |
| 817 | `                            <div class="text-lg member-name text-center">Naman Kalra</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 818 | `                            <div class="text-xs text-[#BE8E30] text-center">Deputy Head of Photography</div>` | HTML markup that contributes structure, metadata, or visible content. |
| 819 | `                        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 820 | `                        ` | Spacing line to separate blocks and improve readability. |
| 821 | `                    </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 822 | `                </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 823 | `` | Spacing line to separate blocks and improve readability. |
| 824 | `                ` | Spacing line to separate blocks and improve readability. |
| 825 | `                ` | Spacing line to separate blocks and improve readability. |
| 826 | `            </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 827 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 828 | `    </section>` | HTML markup that contributes structure, metadata, or visible content. |
| 829 | `` | Spacing line to separate blocks and improve readability. |
| 830 | `    <!-- Footer -->` | HTML markup that contributes structure, metadata, or visible content. |
| 831 | `    <footer class="bg-gradient-to-r from-[#081032] to-[#0c1542] text-white py-8 border-t border-[#BE8E30]/30">` | HTML markup that contributes structure, metadata, or visible content. |
| 832 | `        <div class="container mx-auto text-center">` | HTML markup that contributes structure, metadata, or visible content. |
| 833 | `            <div class="mb-4">` | HTML markup that contributes structure, metadata, or visible content. |
| 834 | `                <img src="/assets/persevlogo.png" alt="Perseverantia Logo" class="w-12 h-12 mx-auto mb-2" style="filter: drop-shadow(0 0 10px rgba(190, 142, 48, 0.5));">` | HTML markup that contributes structure, metadata, or visible content. |
| 835 | `                <h3 class="text-xl" style="font-family: Mestizo; color: #BE8E30;">Perseverantia 2025</h3>` | HTML markup that contributes structure, metadata, or visible content. |
| 836 | `            </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 837 | `            <p class="text-gray-300 mb-2">&copy; 2025 Bombay Scottish School, Mahim. All rights reserved.</p>` | HTML markup that contributes structure, metadata, or visible content. |
| 838 | `        </div>` | HTML markup that contributes structure, metadata, or visible content. |
| 839 | `    </footer>` | HTML markup that contributes structure, metadata, or visible content. |
| 840 | `` | Spacing line to separate blocks and improve readability. |
| 841 | `    <!-- Place this script before </body> -->` | HTML markup that contributes structure, metadata, or visible content. |
| 842 | `    <script>` | HTML markup that contributes structure, metadata, or visible content. |
| 843 | `        // --- Enhanced Animations and Interactions ---` | Comment that documents intent for the following code block. |
| 844 | `        ` | Spacing line to separate blocks and improve readability. |
| 845 | `        // Intersection Observer for fade-in animations` | Comment that documents intent for the following code block. |
| 846 | `        const observerOptions = {` | Defines a constant binding for config, module import, or computed value. |
| 847 | `            threshold: 0.1,` | Executable statement used by the server or client runtime. |
| 848 | `            rootMargin: '0px 0px -50px 0px'` | Executable statement used by the server or client runtime. |
| 849 | `        };` | Closes the current code block. |
| 850 | `` | Spacing line to separate blocks and improve readability. |
| 851 | `        const observer = new IntersectionObserver((entries) => {` | Defines a constant binding for config, module import, or computed value. |
| 852 | `            entries.forEach(entry => {` | Iterates over a list to process each item. |
| 853 | `                if (entry.isIntersecting) {` | Starts a conditional branch based on current runtime state. |
| 854 | `                    entry.target.style.animationPlayState = 'running';` | Executable statement used by the server or client runtime. |
| 855 | `                }` | Closes the current code block. |
| 856 | `            });` | Closes the current code block. |
| 857 | `        }, observerOptions);` | Closes the current code block. |
| 858 | `` | Spacing line to separate blocks and improve readability. |
| 859 | `        document.querySelectorAll('.fade-in-up').forEach(el => {` | Iterates over a list to process each item. |
| 860 | `            el.style.animationPlayState = 'paused';` | Executable statement used by the server or client runtime. |
| 861 | `            observer.observe(el);` | Executable statement used by the server or client runtime. |
| 862 | `        });` | Closes the current code block. |
| 863 | `` | Spacing line to separate blocks and improve readability. |
| 864 | `        // Add click sound effect and ripple animation to member cards` | Comment that documents intent for the following code block. |
| 865 | `        document.querySelectorAll('.member-card').forEach(card => {` | Iterates over a list to process each item. |
| 866 | `            card.addEventListener('click', function(e) {` | Subscribes to a browser event and runs callback logic when triggered. |
| 867 | `                // Create ripple effect` | Comment that documents intent for the following code block. |
| 868 | `                const ripple = document.createElement('div');` | Defines a constant binding for config, module import, or computed value. |
| 869 | `                const rect = this.getBoundingClientRect();` | Defines a constant binding for config, module import, or computed value. |
| 870 | `                const size = Math.max(rect.width, rect.height);` | Defines a constant binding for config, module import, or computed value. |
| 871 | `                const x = e.clientX - rect.left - size / 2;` | Defines a constant binding for config, module import, or computed value. |
| 872 | `                const y = e.clientY - rect.top - size / 2;` | Defines a constant binding for config, module import, or computed value. |
| 873 | `                ` | Spacing line to separate blocks and improve readability. |
| 874 | `                ripple.style.cssText = \`` | Executable statement used by the server or client runtime. |
| 875 | `                    position: absolute;` | Executable statement used by the server or client runtime. |
| 876 | `                    width: ${size}px;` | Executable statement used by the server or client runtime. |
| 877 | `                    height: ${size}px;` | Executable statement used by the server or client runtime. |
| 878 | `                    left: ${x}px;` | Executable statement used by the server or client runtime. |
| 879 | `                    top: ${y}px;` | Executable statement used by the server or client runtime. |
| 880 | `                    background: rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 881 | `                    border-radius: 50%;` | Executable statement used by the server or client runtime. |
| 882 | `                    transform: scale(0);` | Executable statement used by the server or client runtime. |
| 883 | `                    animation: ripple 0.6s ease-out;` | Executable statement used by the server or client runtime. |
| 884 | `                    pointer-events: none;` | Executable statement used by the server or client runtime. |
| 885 | `                    z-index: 1;` | Executable statement used by the server or client runtime. |
| 886 | `                \`;` | Executable statement used by the server or client runtime. |
| 887 | `                ` | Spacing line to separate blocks and improve readability. |
| 888 | `                this.appendChild(ripple);` | Executable statement used by the server or client runtime. |
| 889 | `                ` | Spacing line to separate blocks and improve readability. |
| 890 | `                // Remove ripple after animation` | Comment that documents intent for the following code block. |
| 891 | `                setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 892 | `                    ripple.remove();` | Executable statement used by the server or client runtime. |
| 893 | `                }, 600);` | Closes the current code block. |
| 894 | `            });` | Closes the current code block. |
| 895 | `        });` | Closes the current code block. |
| 896 | `` | Spacing line to separate blocks and improve readability. |
| 897 | `        // Add ripple animation keyframes` | Comment that documents intent for the following code block. |
| 898 | `        const style = document.createElement('style');` | Defines a constant binding for config, module import, or computed value. |
| 899 | `        style.textContent = \`` | Writes plain text content into a DOM element. |
| 900 | `            @keyframes ripple {` | Executable statement used by the server or client runtime. |
| 901 | `                to {` | Executable statement used by the server or client runtime. |
| 902 | `                    transform: scale(4);` | Executable statement used by the server or client runtime. |
| 903 | `                    opacity: 0;` | Executable statement used by the server or client runtime. |
| 904 | `                }` | Closes the current code block. |
| 905 | `            }` | Closes the current code block. |
| 906 | `        \`;` | Executable statement used by the server or client runtime. |
| 907 | `        document.head.appendChild(style);` | Executable statement used by the server or client runtime. |
| 908 | `` | Spacing line to separate blocks and improve readability. |
| 909 | `        // Parallax effect for background decorations` | Comment that documents intent for the following code block. |
| 910 | `        window.addEventListener('scroll', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 911 | `            const scrolled = window.pageYOffset;` | Defines a constant binding for config, module import, or computed value. |
| 912 | `            const parallax = document.querySelector('.bg-decoration');` | Defines a constant binding for config, module import, or computed value. |
| 913 | `            if (parallax) {` | Starts a conditional branch based on current runtime state. |
| 914 | `                parallax.style.transform = \`translateY(${scrolled * 0.5}px)\`;` | Executable statement used by the server or client runtime. |
| 915 | `            }` | Closes the current code block. |
| 916 | `        });` | Closes the current code block. |
| 917 | `` | Spacing line to separate blocks and improve readability. |
| 918 | `        // --- Navbar Logic with better fallback ---` | Comment that documents intent for the following code block. |
| 919 | `        async function setupNavbar() {` | Declares an async function that can await network or file operations. |
| 920 | `            try {` | Executable statement used by the server or client runtime. |
| 921 | `                const res = await fetch('config.json');` | Defines a constant binding for config, module import, or computed value. |
| 922 | `                if (!res.ok) throw new Error(\`HTTP error! status: ${res.status}\`);` | Starts a conditional branch based on current runtime state. |
| 923 | `                const config = await res.json();` | Defines a constant binding for config, module import, or computed value. |
| 924 | `                const website = config.website &#124;&#124; {};` | Defines a constant binding for config, module import, or computed value. |
| 925 | `                const navbar = website.navbar &#124;&#124; {};` | Defines a constant binding for config, module import, or computed value. |
| 926 | `` | Spacing line to separate blocks and improve readability. |
| 927 | `                // Populate Navbar Links` | Comment that documents intent for the following code block. |
| 928 | `                const desktopNav = document.getElementById("desktop-nav");` | Defines a constant binding for config, module import, or computed value. |
| 929 | `                const mobileMenu = document.getElementById("mobile-menu");` | Defines a constant binding for config, module import, or computed value. |
| 930 | `                ` | Spacing line to separate blocks and improve readability. |
| 931 | `                // Clear existing content` | Comment that documents intent for the following code block. |
| 932 | `                desktopNav.innerHTML = '';` | Injects HTML markup into the selected DOM container. |
| 933 | `                mobileMenu.innerHTML = '';` | Injects HTML markup into the selected DOM container. |
| 934 | `                ` | Spacing line to separate blocks and improve readability. |
| 935 | `                // Add Home link` | Comment that documents intent for the following code block. |
| 936 | `                const homeDesktop = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 937 | `                homeDesktop.href = '/';` | Executable statement used by the server or client runtime. |
| 938 | `                homeDesktop.textContent = 'Home';` | Writes plain text content into a DOM element. |
| 939 | `                homeDesktop.className = 'hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 940 | `                desktopNav.appendChild(homeDesktop);` | Executable statement used by the server or client runtime. |
| 941 | `` | Spacing line to separate blocks and improve readability. |
| 942 | `                const homeMobile = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 943 | `                homeMobile.href = '/';` | Executable statement used by the server or client runtime. |
| 944 | `                homeMobile.textContent = 'Home';` | Writes plain text content into a DOM element. |
| 945 | `                homeMobile.className = 'block py-2 text-lg hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 946 | `                mobileMenu.appendChild(homeMobile);` | Executable statement used by the server or client runtime. |
| 947 | `` | Spacing line to separate blocks and improve readability. |
| 948 | `                // Add config-based links` | Comment that documents intent for the following code block. |
| 949 | `                (navbar.links &#124;&#124; []).forEach(link => {` | Iterates over a list to process each item. |
| 950 | `                    // Desktop Nav` | Comment that documents intent for the following code block. |
| 951 | `                    const desktopLink = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 952 | `                    desktopLink.href = link.linkto;` | Executable statement used by the server or client runtime. |
| 953 | `                    desktopLink.textContent = link.name;` | Writes plain text content into a DOM element. |
| 954 | `                    desktopLink.className = 'hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 955 | `                    desktopNav.appendChild(desktopLink);` | Executable statement used by the server or client runtime. |
| 956 | `` | Spacing line to separate blocks and improve readability. |
| 957 | `                    // Mobile Nav` | Comment that documents intent for the following code block. |
| 958 | `                    const mobileLink = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 959 | `                    mobileLink.href = link.linkto;` | Executable statement used by the server or client runtime. |
| 960 | `                    mobileLink.textContent = link.name;` | Writes plain text content into a DOM element. |
| 961 | `                    mobileLink.className = 'block py-2 text-lg hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 962 | `                    mobileMenu.appendChild(mobileLink);` | Executable statement used by the server or client runtime. |
| 963 | `                });` | Closes the current code block. |
| 964 | `` | Spacing line to separate blocks and improve readability. |
| 965 | `                // Update navbar title` | Comment that documents intent for the following code block. |
| 966 | `                document.getElementById("nav-title").textContent = navbar.title &#124;&#124; "Perseverantia";` | Finds a DOM node so it can be read or updated. |
| 967 | `            } catch (err) {` | Closes the current code block. |
| 968 | `                console.warn("Could not load config.json, using fallback navbar:", err);` | Executable statement used by the server or client runtime. |
| 969 | `                // Fallback: Add static navigation links` | Comment that documents intent for the following code block. |
| 970 | `                const desktopNav = document.getElementById("desktop-nav");` | Defines a constant binding for config, module import, or computed value. |
| 971 | `                const mobileMenu = document.getElementById("mobile-menu");` | Defines a constant binding for config, module import, or computed value. |
| 972 | `                ` | Spacing line to separate blocks and improve readability. |
| 973 | `                // Clear existing content` | Comment that documents intent for the following code block. |
| 974 | `                desktopNav.innerHTML = '';` | Injects HTML markup into the selected DOM container. |
| 975 | `                mobileMenu.innerHTML = '';` | Injects HTML markup into the selected DOM container. |
| 976 | `                ` | Spacing line to separate blocks and improve readability. |
| 977 | `                // Static fallback links` | Comment that documents intent for the following code block. |
| 978 | `                const staticLinks = [` | Defines a constant binding for config, module import, or computed value. |
| 979 | `                    { name: 'Home', href: '/' },` | Opens a new code block scope. |
| 980 | `                    { name: 'Events', href: '/events.html' },` | Opens a new code block scope. |
| 981 | `                    { name: 'Organizing Committee', href: '/organizing-committee.html' }` | Opens a new code block scope. |
| 982 | `                ];` | Executable statement used by the server or client runtime. |
| 983 | `                ` | Spacing line to separate blocks and improve readability. |
| 984 | `                staticLinks.forEach(link => {` | Iterates over a list to process each item. |
| 985 | `                    // Desktop Nav` | Comment that documents intent for the following code block. |
| 986 | `                    const desktopLink = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 987 | `                    desktopLink.href = link.href;` | Executable statement used by the server or client runtime. |
| 988 | `                    desktopLink.textContent = link.name;` | Writes plain text content into a DOM element. |
| 989 | `                    desktopLink.className = 'hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 990 | `                    desktopNav.appendChild(desktopLink);` | Executable statement used by the server or client runtime. |
| 991 | `` | Spacing line to separate blocks and improve readability. |
| 992 | `                    // Mobile Nav` | Comment that documents intent for the following code block. |
| 993 | `                    const mobileLink = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 994 | `                    mobileLink.href = link.href;` | Executable statement used by the server or client runtime. |
| 995 | `                    mobileLink.textContent = link.name;` | Writes plain text content into a DOM element. |
| 996 | `                    mobileLink.className = 'block py-2 text-lg hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 997 | `                    mobileMenu.appendChild(mobileLink);` | Executable statement used by the server or client runtime. |
| 998 | `                });` | Closes the current code block. |
| 999 | `            }` | Closes the current code block. |
| 1000 | `        }` | Closes the current code block. |
| 1001 | `        document.addEventListener("DOMContentLoaded", setupNavbar);` | Subscribes to a browser event and runs callback logic when triggered. |
| 1002 | `` | Spacing line to separate blocks and improve readability. |
| 1003 | `        // --- Mobile Menu Toggle Script ---` | Comment that documents intent for the following code block. |
| 1004 | `        const toggleBtn = document.getElementById("menu-toggle");` | Defines a constant binding for config, module import, or computed value. |
| 1005 | `        const mobileMenu = document.getElementById("mobile-menu");` | Defines a constant binding for config, module import, or computed value. |
| 1006 | `        let menuOpen = false;` | Defines mutable state used later in control flow or UI updates. |
| 1007 | `        toggleBtn.addEventListener("click", () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 1008 | `            menuOpen = !menuOpen;` | Executable statement used by the server or client runtime. |
| 1009 | `            if (menuOpen) {` | Starts a conditional branch based on current runtime state. |
| 1010 | `                mobileMenu.classList.remove("hidden");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 1011 | `                void mobileMenu.offsetWidth;` | Executable statement used by the server or client runtime. |
| 1012 | `                mobileMenu.classList.remove("opacity-0", "scale-y-90", "-translate-y-4");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 1013 | `                mobileMenu.classList.add("opacity-100", "scale-y-100", "translate-y-0");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 1014 | `            } else {` | Closes the current code block. |
| 1015 | `                mobileMenu.classList.remove("opacity-100", "scale-y-100", "translate-y-0");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 1016 | `                mobileMenu.classList.add("opacity-0", "scale-y-90", "-translate-y-4");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 1017 | `                setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 1018 | `                    if (!menuOpen) {` | Starts a conditional branch based on current runtime state. |
| 1019 | `                        mobileMenu.classList.add("hidden");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 1020 | `                    }` | Closes the current code block. |
| 1021 | `                }, 500);` | Closes the current code block. |
| 1022 | `            }` | Closes the current code block. |
| 1023 | `        });` | Closes the current code block. |
| 1024 | `` | Spacing line to separate blocks and improve readability. |
| 1025 | `        // --- Remove loading screen after 2 sec ---` | Comment that documents intent for the following code block. |
| 1026 | `        window.addEventListener('load', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 1027 | `            const loader = document.getElementById("loading-screen");` | Defines a constant binding for config, module import, or computed value. |
| 1028 | `            setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 1029 | `                loader.classList.add("fade-out");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 1030 | `                setTimeout(() => loader.remove(), 600);` | Arrow-function expression used as a concise callback/helper. |
| 1031 | `            }, 2000);` | Closes the current code block. |
| 1032 | `        });` | Closes the current code block. |
| 1033 | `` | Spacing line to separate blocks and improve readability. |
| 1034 | `        // --- Link Interception for Loading Screen (Optional for consistency) ---` | Comment that documents intent for the following code block. |
| 1035 | `        document.body.addEventListener('click', function (e) {` | Subscribes to a browser event and runs callback logic when triggered. |
| 1036 | `            let targetLink = e.target.closest('a[href]');` | Defines mutable state used later in control flow or UI updates. |
| 1037 | `            if (targetLink && targetLink.href) {` | Starts a conditional branch based on current runtime state. |
| 1038 | `                const isInternal = targetLink.origin === window.location.origin;` | Defines a constant binding for config, module import, or computed value. |
| 1039 | `                const isFile = targetLink.href.includes('/assets/');` | Defines a constant binding for config, module import, or computed value. |
| 1040 | `                const isMailto = targetLink.protocol === 'mailto:';` | Defines a constant binding for config, module import, or computed value. |
| 1041 | `                const isAnchor = targetLink.hash && targetLink.pathname === window.location.pathname;` | Defines a constant binding for config, module import, or computed value. |
| 1042 | `                if (isInternal && !isFile && !isMailto && !isAnchor) {` | Starts a conditional branch based on current runtime state. |
| 1043 | `                    e.preventDefault();` | Executable statement used by the server or client runtime. |
| 1044 | `                    let loadingScreen = document.getElementById("loading-screen");` | Defines mutable state used later in control flow or UI updates. |
| 1045 | `                    ` | Spacing line to separate blocks and improve readability. |
| 1046 | `                    // If loading screen doesn't exist, create it` | Comment that documents intent for the following code block. |
| 1047 | `                    if (!loadingScreen) {` | Starts a conditional branch based on current runtime state. |
| 1048 | `                        loadingScreen = document.createElement('div');` | Executable statement used by the server or client runtime. |
| 1049 | `                        loadingScreen.id = 'loading-screen';` | Executable statement used by the server or client runtime. |
| 1050 | `                        loadingScreen.style.cssText = \`` | Executable statement used by the server or client runtime. |
| 1051 | `                            position: fixed;` | Executable statement used by the server or client runtime. |
| 1052 | `                            inset: 0;` | Executable statement used by the server or client runtime. |
| 1053 | `                            background: linear-gradient(135deg, #0a0f2c, #1a2949);` | Executable statement used by the server or client runtime. |
| 1054 | `                            z-index: 9999;` | Executable statement used by the server or client runtime. |
| 1055 | `                            display: flex;` | Executable statement used by the server or client runtime. |
| 1056 | `                            align-items: center;` | Executable statement used by the server or client runtime. |
| 1057 | `                            justify-content: center;` | Executable statement used by the server or client runtime. |
| 1058 | `                            transition: opacity 0.6s ease;` | Executable statement used by the server or client runtime. |
| 1059 | `                            opacity: 1;` | Executable statement used by the server or client runtime. |
| 1060 | `                        \`;` | Executable statement used by the server or client runtime. |
| 1061 | `                        ` | Spacing line to separate blocks and improve readability. |
| 1062 | `                        loadingScreen.innerHTML = \`` | Injects HTML markup into the selected DOM container. |
| 1063 | `                            <video autoplay muted loop playsinline style="width: 150px; height: 150px; object-fit: contain; filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7)); border-radius: 12px;">` | HTML markup that contributes structure, metadata, or visible content. |
| 1064 | `                                <source src="/assets/load.mp4" type="video/mp4" />` | HTML markup that contributes structure, metadata, or visible content. |
| 1065 | `                                Your browser does not support the video tag.` | Executable statement used by the server or client runtime. |
| 1066 | `                            </video>` | HTML markup that contributes structure, metadata, or visible content. |
| 1067 | `                        \`;` | Executable statement used by the server or client runtime. |
| 1068 | `                        ` | Spacing line to separate blocks and improve readability. |
| 1069 | `                        document.body.appendChild(loadingScreen);` | Executable statement used by the server or client runtime. |
| 1070 | `                    } else {` | Closes the current code block. |
| 1071 | `                        // If it exists, show it` | Comment that documents intent for the following code block. |
| 1072 | `                        loadingScreen.classList.remove("fade-out");` | Toggles CSS classes to change visibility, styling, or animation state. |
| 1073 | `                        loadingScreen.style.opacity = '1';` | Executable statement used by the server or client runtime. |
| 1074 | `                        loadingScreen.style.pointerEvents = 'auto';` | Executable statement used by the server or client runtime. |
| 1075 | `                        loadingScreen.style.display = 'flex';` | Executable statement used by the server or client runtime. |
| 1076 | `                    }` | Closes the current code block. |
| 1077 | `                    ` | Spacing line to separate blocks and improve readability. |
| 1078 | `                    setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 1079 | `                        window.location.href = targetLink.href;` | Executable statement used by the server or client runtime. |
| 1080 | `                    }, 1000);` | Closes the current code block. |
| 1081 | `                }` | Closes the current code block. |
| 1082 | `            }` | Closes the current code block. |
| 1083 | `        });` | Closes the current code block. |
| 1084 | `    </script>` | HTML markup that contributes structure, metadata, or visible content. |
| 1085 | `</body>` | HTML markup that contributes structure, metadata, or visible content. |
| 1086 | `` | Spacing line to separate blocks and improve readability. |
| 1087 | `</html>` | HTML markup that contributes structure, metadata, or visible content. |

## persev-compiled/frontend/static/events.js

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `// --- Loading Screen and Initialization ---` | Comment that documents intent for the following code block. |
| 2 | `const loadingScreen = document.getElementById('loading-screen');` | Defines a constant binding for config, module import, or computed value. |
| 3 | `` | Spacing line to separate blocks and improve readability. |
| 4 | `async function initializePage() {` | Declares an async function that can await network or file operations. |
| 5 | `` | Spacing line to separate blocks and improve readability. |
| 6 | `` | Spacing line to separate blocks and improve readability. |
| 7 | `  // Ensure loading screen is visible at the very start` | Comment that documents intent for the following code block. |
| 8 | `  loadingScreen.style.opacity = '1';` | Executable statement used by the server or client runtime. |
| 9 | `  loadingScreen.style.pointerEvents = 'auto';` | Executable statement used by the server or client runtime. |
| 10 | `  loadingScreen.style.display = 'flex';  // Ensure it is displayed` | Executable statement used by the server or client runtime. |
| 11 | `` | Spacing line to separate blocks and improve readability. |
| 12 | `  try {` | Executable statement used by the server or client runtime. |
| 13 | `    const res = await fetch('config.json');` | Defines a constant binding for config, module import, or computed value. |
| 14 | `    if (!res.ok) {` | Starts a conditional branch based on current runtime state. |
| 15 | `      throw new Error(\`HTTP error! status: ${res.status}\`);` | Throws an error to stop normal flow and signal failure. |
| 16 | `    }` | Closes the current code block. |
| 17 | `    const config = await res.json();` | Defines a constant binding for config, module import, or computed value. |
| 18 | `    const website = config.website &#124;&#124; {};` | Defines a constant binding for config, module import, or computed value. |
| 19 | `    const navbar = website.navbar &#124;&#124; {};` | Defines a constant binding for config, module import, or computed value. |
| 20 | `    const events = website.events &#124;&#124; [];` | Defines a constant binding for config, module import, or computed value. |
| 21 | `` | Spacing line to separate blocks and improve readability. |
| 22 | `    // Preload images using Promise-based approach (prevents duplicate requests)` | Comment that documents intent for the following code block. |
| 23 | `    const imagePromises = [];` | Defines a constant binding for config, module import, or computed value. |
| 24 | `    website.events.forEach(event => {` | Iterates over a list to process each item. |
| 25 | `      if (event.eventHeadPhoto) {` | Starts a conditional branch based on current runtime state. |
| 26 | `        imagePromises.push(new Promise((resolve, reject) => {` | Arrow-function expression used as a concise callback/helper. |
| 27 | `          const img = new Image();` | Defines a constant binding for config, module import, or computed value. |
| 28 | `          img.onload = () => resolve(img);` | Arrow-function expression used as a concise callback/helper. |
| 29 | `          img.onerror = () => reject(new Error(\`Failed to load ${event.eventHeadPhoto}\`));` | Arrow-function expression used as a concise callback/helper. |
| 30 | `          img.src = event.eventHeadPhoto;` | Executable statement used by the server or client runtime. |
| 31 | `        }));` | Closes the current code block. |
| 32 | `      }` | Closes the current code block. |
| 33 | `      if (event.logo) {` | Starts a conditional branch based on current runtime state. |
| 34 | `        imagePromises.push(new Promise((resolve, reject) => {` | Arrow-function expression used as a concise callback/helper. |
| 35 | `          const img = new Image();` | Defines a constant binding for config, module import, or computed value. |
| 36 | `          img.onload = () => resolve(img);` | Arrow-function expression used as a concise callback/helper. |
| 37 | `          img.onerror = () => reject(new Error(\`Failed to load ${event.logo}\`));` | Arrow-function expression used as a concise callback/helper. |
| 38 | `          img.src = event.logo;` | Executable statement used by the server or client runtime. |
| 39 | `        }));` | Closes the current code block. |
| 40 | `      }` | Closes the current code block. |
| 41 | `    });` | Closes the current code block. |
| 42 | `` | Spacing line to separate blocks and improve readability. |
| 43 | `    // Wait for all images to preload (optional - don't block UI)` | Comment that documents intent for the following code block. |
| 44 | `    Promise.allSettled(imagePromises).then(results => {` | Arrow-function expression used as a concise callback/helper. |
| 45 | `      console.log(\`Preloaded ${results.filter(r => r.status === 'fulfilled').length}/${results.length} images\`);` | Arrow-function expression used as a concise callback/helper. |
| 46 | `    });` | Closes the current code block. |
| 47 | `` | Spacing line to separate blocks and improve readability. |
| 48 | `    // Populate Navbar Links` | Comment that documents intent for the following code block. |
| 49 | `    const desktopNav = document.getElementById('desktop-nav');` | Defines a constant binding for config, module import, or computed value. |
| 50 | `    const mobileMenu = document.getElementById('mobile-menu');` | Defines a constant binding for config, module import, or computed value. |
| 51 | `    desktopNav.innerHTML = '';  // Clear existing content if any` | Injects HTML markup into the selected DOM container. |
| 52 | `    mobileMenu.innerHTML = '';  // Clear existing content if any` | Injects HTML markup into the selected DOM container. |
| 53 | `    const homeDesktop = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 54 | `    homeDesktop.href = '/';` | Executable statement used by the server or client runtime. |
| 55 | `    homeDesktop.textContent = 'Home';` | Writes plain text content into a DOM element. |
| 56 | `    homeDesktop.className = 'hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 57 | `    desktopNav.appendChild(homeDesktop);` | Executable statement used by the server or client runtime. |
| 58 | `` | Spacing line to separate blocks and improve readability. |
| 59 | `    const homeMobile = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 60 | `    homeMobile.href = '/';` | Executable statement used by the server or client runtime. |
| 61 | `    homeMobile.textContent = 'Home';` | Writes plain text content into a DOM element. |
| 62 | `    homeMobile.className = 'block py-2 text-lg hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 63 | `    mobileMenu.appendChild(homeMobile);` | Executable statement used by the server or client runtime. |
| 64 | `` | Spacing line to separate blocks and improve readability. |
| 65 | `    (navbar.links &#124;&#124; []).forEach(link => {` | Iterates over a list to process each item. |
| 66 | `      // Desktop Nav` | Comment that documents intent for the following code block. |
| 67 | `      const desktopLink = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 68 | `      desktopLink.href = link.linkto;` | Executable statement used by the server or client runtime. |
| 69 | `      desktopLink.textContent = link.name;` | Writes plain text content into a DOM element. |
| 70 | `      desktopLink.className =` | Executable statement used by the server or client runtime. |
| 71 | `          'hover:text-blue-200';  // Existing class from main page` | Executable statement used by the server or client runtime. |
| 72 | `      desktopNav.appendChild(desktopLink);` | Executable statement used by the server or client runtime. |
| 73 | `` | Spacing line to separate blocks and improve readability. |
| 74 | `      // Mobile Nav` | Comment that documents intent for the following code block. |
| 75 | `      const mobileLink = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 76 | `      mobileLink.href = link.linkto;` | Executable statement used by the server or client runtime. |
| 77 | `      mobileLink.textContent = link.name;` | Writes plain text content into a DOM element. |
| 78 | `      mobileLink.className =` | Executable statement used by the server or client runtime. |
| 79 | `          'block py-2 text-lg hover:text-blue-200';  // Existing class from main` | Executable statement used by the server or client runtime. |
| 80 | `                                                     // page` | Comment that documents intent for the following code block. |
| 81 | `      mobileMenu.appendChild(mobileLink);` | Executable statement used by the server or client runtime. |
| 82 | `    });` | Closes the current code block. |
| 83 | `` | Spacing line to separate blocks and improve readability. |
| 84 | `    // Populate Navbar Title` | Comment that documents intent for the following code block. |
| 85 | `    document.getElementById('nav-title').textContent =` | Finds a DOM node so it can be read or updated. |
| 86 | `        navbar.title &#124;&#124; 'Perseverantia';` | Executable statement used by the server or client runtime. |
| 87 | `` | Spacing line to separate blocks and improve readability. |
| 88 | `    // Events Grid Population with enhanced card structure` | Comment that documents intent for the following code block. |
| 89 | `    const grid = document.getElementById('eventsGrid');` | Defines a constant binding for config, module import, or computed value. |
| 90 | `    grid.innerHTML = '';  // Clear existing content before populating` | Injects HTML markup into the selected DOM container. |
| 91 | `    events.forEach((event, index) => {` | Iterates over a list to process each item. |
| 92 | `      const card = document.createElement('div');` | Defines a constant binding for config, module import, or computed value. |
| 93 | `      // Use event-card class to match organizing-committee.html style` | Comment that documents intent for the following code block. |
| 94 | `      card.className = 'event-card w-full p-6 fade-in-up cursor-pointer';` | Executable statement used by the server or client runtime. |
| 95 | `      card.style.animationDelay = \`${(index * 0.1) + 0.1}s\`;` | Executable statement used by the server or client runtime. |
| 96 | `      card.innerHTML = \`` | Injects HTML markup into the selected DOM container. |
| 97 | `            <img src="${event.logo}" alt="${` | HTML markup that contributes structure, metadata, or visible content. |
| 98 | `          event` | Executable statement used by the server or client runtime. |
| 99 | `              .name} Logo" class="w-28 h-36 object-contain mx-auto mb-4 transition-all duration-400" />` | Executable statement used by the server or client runtime. |
| 100 | `            <h2 class="text-xl event-name text-center">${event.name}</h2>` | HTML markup that contributes structure, metadata, or visible content. |
| 101 | `            <p class="text-sm italic text-gray-300 text-center mt-1">${` | HTML markup that contributes structure, metadata, or visible content. |
| 102 | `          event.shortDesc}</p>` | Executable statement used by the server or client runtime. |
| 103 | `          \`;` | Executable statement used by the server or client runtime. |
| 104 | `      card.onclick = () => openModal(event);` | Arrow-function expression used as a concise callback/helper. |
| 105 | `      grid.appendChild(card);` | Executable statement used by the server or client runtime. |
| 106 | `    });` | Closes the current code block. |
| 107 | `` | Spacing line to separate blocks and improve readability. |
| 108 | `    // Once config is loaded and elements are populated, fade out loading screen` | Comment that documents intent for the following code block. |
| 109 | `    // after 2 seconds.` | Comment that documents intent for the following code block. |
| 110 | `    setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 111 | `      loadingScreen.classList.add('fade-out');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 112 | `      setTimeout(` | Executable statement used by the server or client runtime. |
| 113 | `          () => loadingScreen.remove(), 600);  // Remove after CSS transition` | Arrow-function expression used as a concise callback/helper. |
| 114 | `` | Spacing line to separate blocks and improve readability. |
| 115 | `      // Initialize enhanced animations after loading screen is removed` | Comment that documents intent for the following code block. |
| 116 | `      initializeEnhancedAnimations();` | Executable statement used by the server or client runtime. |
| 117 | `    }, 1000);  // Show loading screen for 2 seconds (2000ms)` | Closes the current code block. |
| 118 | `` | Spacing line to separate blocks and improve readability. |
| 119 | `  } catch (err) {` | Closes the current code block. |
| 120 | `    console.error('Failed to load /config.json or populate content:', err);` | Executable statement used by the server or client runtime. |
| 121 | `` | Spacing line to separate blocks and improve readability. |
| 122 | `    // Fallback: Set basic navigation if config fails` | Comment that documents intent for the following code block. |
| 123 | `    const desktopNav = document.getElementById('desktop-nav');` | Defines a constant binding for config, module import, or computed value. |
| 124 | `    const mobileMenu = document.getElementById('mobile-menu');` | Defines a constant binding for config, module import, or computed value. |
| 125 | `` | Spacing line to separate blocks and improve readability. |
| 126 | `    // Clear and set fallback navigation` | Comment that documents intent for the following code block. |
| 127 | `    desktopNav.innerHTML = '';` | Injects HTML markup into the selected DOM container. |
| 128 | `    mobileMenu.innerHTML = '';` | Injects HTML markup into the selected DOM container. |
| 129 | `` | Spacing line to separate blocks and improve readability. |
| 130 | `    // Add Home link` | Comment that documents intent for the following code block. |
| 131 | `    const homeDesktop = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 132 | `    homeDesktop.href = '/';` | Executable statement used by the server or client runtime. |
| 133 | `    homeDesktop.textContent = 'Home';` | Writes plain text content into a DOM element. |
| 134 | `    homeDesktop.className = 'hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 135 | `    desktopNav.appendChild(homeDesktop);` | Executable statement used by the server or client runtime. |
| 136 | `` | Spacing line to separate blocks and improve readability. |
| 137 | `    const homeMobile = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 138 | `    homeMobile.href = '/';` | Executable statement used by the server or client runtime. |
| 139 | `    homeMobile.textContent = 'Home';` | Writes plain text content into a DOM element. |
| 140 | `    homeMobile.className = 'block py-2 text-lg hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 141 | `    mobileMenu.appendChild(homeMobile);` | Executable statement used by the server or client runtime. |
| 142 | `` | Spacing line to separate blocks and improve readability. |
| 143 | `    // Add other essential links` | Comment that documents intent for the following code block. |
| 144 | `    const eventsDesktop = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 145 | `    eventsDesktop.href = '/events.html';` | Executable statement used by the server or client runtime. |
| 146 | `    eventsDesktop.textContent = 'Events';` | Writes plain text content into a DOM element. |
| 147 | `    eventsDesktop.className = 'hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 148 | `    desktopNav.appendChild(eventsDesktop);` | Executable statement used by the server or client runtime. |
| 149 | `` | Spacing line to separate blocks and improve readability. |
| 150 | `    const eventsMobile = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 151 | `    eventsMobile.href = '/events.html';` | Executable statement used by the server or client runtime. |
| 152 | `    eventsMobile.textContent = 'Events';` | Writes plain text content into a DOM element. |
| 153 | `    eventsMobile.className = 'block py-2 text-lg hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 154 | `    mobileMenu.appendChild(eventsMobile);` | Executable statement used by the server or client runtime. |
| 155 | `` | Spacing line to separate blocks and improve readability. |
| 156 | `    const ocDesktop = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 157 | `    ocDesktop.href = '/organizing-committee.html';` | Executable statement used by the server or client runtime. |
| 158 | `    ocDesktop.textContent = 'Organizing Committee';` | Writes plain text content into a DOM element. |
| 159 | `    ocDesktop.className = 'hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 160 | `    desktopNav.appendChild(ocDesktop);` | Executable statement used by the server or client runtime. |
| 161 | `` | Spacing line to separate blocks and improve readability. |
| 162 | `    const ocMobile = document.createElement('a');` | Defines a constant binding for config, module import, or computed value. |
| 163 | `    ocMobile.href = '/organizing-committee.html';` | Executable statement used by the server or client runtime. |
| 164 | `    ocMobile.textContent = 'Organizing Committee';` | Writes plain text content into a DOM element. |
| 165 | `    ocMobile.className = 'block py-2 text-lg hover:text-blue-200';` | Executable statement used by the server or client runtime. |
| 166 | `    mobileMenu.appendChild(ocMobile);` | Executable statement used by the server or client runtime. |
| 167 | `` | Spacing line to separate blocks and improve readability. |
| 168 | `    // If config fails, still hide the loading screen after a shorter delay` | Comment that documents intent for the following code block. |
| 169 | `    setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 170 | `      loadingScreen.classList.add('fade-out');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 171 | `      setTimeout(() => loadingScreen.remove(), 600);` | Arrow-function expression used as a concise callback/helper. |
| 172 | `    }, 1000);  // Shorter delay if there's an error` | Closes the current code block. |
| 173 | `  }` | Closes the current code block. |
| 174 | `}` | Closes the current code block. |
| 175 | `` | Spacing line to separate blocks and improve readability. |
| 176 | `// Run the initialization function when the DOM is ready` | Comment that documents intent for the following code block. |
| 177 | `document.addEventListener('DOMContentLoaded', initializePage);` | Subscribes to a browser event and runs callback logic when triggered. |
| 178 | `` | Spacing line to separate blocks and improve readability. |
| 179 | `// --- Mobile Menu Toggle Script (Fixed to work with original structure) ---` | Comment that documents intent for the following code block. |
| 180 | `document.addEventListener('DOMContentLoaded', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 181 | `  const toggleBtn = document.getElementById('menu-toggle');` | Defines a constant binding for config, module import, or computed value. |
| 182 | `  const mobileMenu = document.getElementById('mobile-menu');` | Defines a constant binding for config, module import, or computed value. |
| 183 | `` | Spacing line to separate blocks and improve readability. |
| 184 | `  if (toggleBtn && mobileMenu) {` | Starts a conditional branch based on current runtime state. |
| 185 | `    let menuOpen = false;` | Defines mutable state used later in control flow or UI updates. |
| 186 | `    toggleBtn.addEventListener('click', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 187 | `      menuOpen = !menuOpen;` | Executable statement used by the server or client runtime. |
| 188 | `      console.log('Menu toggle clicked, menuOpen:', menuOpen);  // Debug log` | Executable statement used by the server or client runtime. |
| 189 | `      if (menuOpen) {` | Starts a conditional branch based on current runtime state. |
| 190 | `        mobileMenu.classList.remove('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 191 | `        void mobileMenu.offsetWidth;` | Executable statement used by the server or client runtime. |
| 192 | `        mobileMenu.classList.remove(` | Toggles CSS classes to change visibility, styling, or animation state. |
| 193 | `            'opacity-0', 'scale-y-90', '-translate-y-4');` | Executable statement used by the server or client runtime. |
| 194 | `        mobileMenu.classList.add('opacity-100', 'scale-y-100', 'translate-y-0');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 195 | `      } else {` | Closes the current code block. |
| 196 | `        mobileMenu.classList.remove(` | Toggles CSS classes to change visibility, styling, or animation state. |
| 197 | `            'opacity-100', 'scale-y-100', 'translate-y-0');` | Executable statement used by the server or client runtime. |
| 198 | `        mobileMenu.classList.add('opacity-0', 'scale-y-90', '-translate-y-4');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 199 | `        setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 200 | `          if (!menuOpen) {` | Starts a conditional branch based on current runtime state. |
| 201 | `            mobileMenu.classList.add('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 202 | `          }` | Closes the current code block. |
| 203 | `        }, 500);` | Closes the current code block. |
| 204 | `      }` | Closes the current code block. |
| 205 | `    });` | Closes the current code block. |
| 206 | `  } else {` | Closes the current code block. |
| 207 | `    console.error('Menu toggle elements not found:', {toggleBtn, mobileMenu});` | Executable statement used by the server or client runtime. |
| 208 | `  }` | Closes the current code block. |
| 209 | `});` | Closes the current code block. |
| 210 | `` | Spacing line to separate blocks and improve readability. |
| 211 | `// Initialize mobile menu after DOM is loaded` | Comment that documents intent for the following code block. |
| 212 | `document.addEventListener(` | Subscribes to a browser event and runs callback logic when triggered. |
| 213 | `    'DOMContentLoaded',` | Executable statement used by the server or client runtime. |
| 214 | `    () => {` | Arrow-function expression used as a concise callback/helper. |
| 215 | `        // Mobile menu is already set up above, no additional initialization` | Comment that documents intent for the following code block. |
| 216 | `        // needed` | Comment that documents intent for the following code block. |
| 217 | `    });` | Closes the current code block. |
| 218 | `// --- Modal Logic (Kept as is, functional) ---` | Comment that documents intent for the following code block. |
| 219 | `const modal = document.getElementById('modal');` | Defines a constant binding for config, module import, or computed value. |
| 220 | `const modalTitle = document.getElementById('modalTitle');` | Defines a constant binding for config, module import, or computed value. |
| 221 | `const modalDesc = document.getElementById('modalDesc');` | Defines a constant binding for config, module import, or computed value. |
| 222 | `const ropLinkBtn = document.getElementById('ropLinkBtn');` | Defines a constant binding for config, module import, or computed value. |
| 223 | `const modalImage = document.getElementById('modalImage');` | Defines a constant binding for config, module import, or computed value. |
| 224 | `const eventHeadName = document.getElementById('eventHeadName');` | Defines a constant binding for config, module import, or computed value. |
| 225 | `const closeModal = document.getElementById('closeModal');` | Defines a constant binding for config, module import, or computed value. |
| 226 | `function isObject(variable) {` | Declares a named function used by runtime behavior. |
| 227 | `  return typeof variable === 'object' && variable !== null &&` | Returns a value or exits this function early. |
| 228 | `      !Array.isArray(variable);` | Executable statement used by the server or client runtime. |
| 229 | `}` | Closes the current code block. |
| 230 | `` | Spacing line to separate blocks and improve readability. |
| 231 | `function openModal(event) {` | Declares a named function used by runtime behavior. |
| 232 | `  if (!isObject(event)) {` | Starts a conditional branch based on current runtime state. |
| 233 | `    console.log(event)` | Executable statement used by the server or client runtime. |
| 234 | `    // event = JSON.parse(event)` | Comment that documents intent for the following code block. |
| 235 | `  }` | Closes the current code block. |
| 236 | `  modalTitle.textContent = event.name;` | Writes plain text content into a DOM element. |
| 237 | `  modalDesc.textContent = event.longDesc &#124;&#124; '';` | Writes plain text content into a DOM element. |
| 238 | `` | Spacing line to separate blocks and improve readability. |
| 239 | `  if (event.eventHeadPhoto) {` | Starts a conditional branch based on current runtime state. |
| 240 | `    modalImage.src = event.eventHeadPhoto;` | Executable statement used by the server or client runtime. |
| 241 | `    modalImage.classList.remove('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 242 | `  } else {` | Closes the current code block. |
| 243 | `    modalImage.classList.add('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 244 | `  }` | Closes the current code block. |
| 245 | `` | Spacing line to separate blocks and improve readability. |
| 246 | `  eventHeadName.textContent = event.eventHeadName &#124;&#124; '';` | Writes plain text content into a DOM element. |
| 247 | `` | Spacing line to separate blocks and improve readability. |
| 248 | `  if (event.ropLink && event.ropLink.trim() !== '') {` | Starts a conditional branch based on current runtime state. |
| 249 | `    ropLinkBtn.href = event.ropLink;` | Executable statement used by the server or client runtime. |
| 250 | `    ropLinkBtn.classList.remove('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 251 | `  } else {` | Closes the current code block. |
| 252 | `    ropLinkBtn.classList.add('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 253 | `  }` | Closes the current code block. |
| 254 | `` | Spacing line to separate blocks and improve readability. |
| 255 | `  modal.classList.remove('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 256 | `  document.body.style.overflow = 'hidden';` | Executable statement used by the server or client runtime. |
| 257 | `}` | Closes the current code block. |
| 258 | `` | Spacing line to separate blocks and improve readability. |
| 259 | `closeModal.onclick = () => {` | Arrow-function expression used as a concise callback/helper. |
| 260 | `  modal.classList.add('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 261 | `  document.body.style.overflow = '';` | Executable statement used by the server or client runtime. |
| 262 | `};` | Closes the current code block. |
| 263 | `` | Spacing line to separate blocks and improve readability. |
| 264 | `modal.addEventListener('click', e => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 265 | `  if (e.target === modal) {` | Starts a conditional branch based on current runtime state. |
| 266 | `    modal.classList.add('hidden');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 267 | `    document.body.style.overflow = '';` | Executable statement used by the server or client runtime. |
| 268 | `  }` | Closes the current code block. |
| 269 | `});` | Closes the current code block. |
| 270 | `` | Spacing line to separate blocks and improve readability. |
| 271 | `// --- Enhanced Animations and Interactions (matching organizing-committee.html)` | Comment that documents intent for the following code block. |
| 272 | `// ---` | Comment that documents intent for the following code block. |
| 273 | `function initializeEnhancedAnimations() {` | Declares a named function used by runtime behavior. |
| 274 | `  // Intersection Observer for fade-in animations` | Comment that documents intent for the following code block. |
| 275 | `  const observerOptions = {threshold: 0.1, rootMargin: '0px 0px -50px 0px'};` | Defines a constant binding for config, module import, or computed value. |
| 276 | `` | Spacing line to separate blocks and improve readability. |
| 277 | `  const observer = new IntersectionObserver((entries) => {` | Defines a constant binding for config, module import, or computed value. |
| 278 | `    entries.forEach(entry => {` | Iterates over a list to process each item. |
| 279 | `      if (entry.isIntersecting) {` | Starts a conditional branch based on current runtime state. |
| 280 | `        entry.target.style.animationPlayState = 'running';` | Executable statement used by the server or client runtime. |
| 281 | `      }` | Closes the current code block. |
| 282 | `    });` | Closes the current code block. |
| 283 | `  }, observerOptions);` | Closes the current code block. |
| 284 | `` | Spacing line to separate blocks and improve readability. |
| 285 | `  document.querySelectorAll('.fade-in-up').forEach(el => {` | Iterates over a list to process each item. |
| 286 | `    el.style.animationPlayState = 'paused';` | Executable statement used by the server or client runtime. |
| 287 | `    observer.observe(el);` | Executable statement used by the server or client runtime. |
| 288 | `  });` | Closes the current code block. |
| 289 | `` | Spacing line to separate blocks and improve readability. |
| 290 | `  // Add click ripple effect to event cards` | Comment that documents intent for the following code block. |
| 291 | `  document.querySelectorAll('.event-card').forEach(card => {` | Iterates over a list to process each item. |
| 292 | `    card.addEventListener('click', function(e) {` | Subscribes to a browser event and runs callback logic when triggered. |
| 293 | `      // Create ripple effect` | Comment that documents intent for the following code block. |
| 294 | `      const ripple = document.createElement('div');` | Defines a constant binding for config, module import, or computed value. |
| 295 | `      const rect = this.getBoundingClientRect();` | Defines a constant binding for config, module import, or computed value. |
| 296 | `      const size = Math.max(rect.width, rect.height);` | Defines a constant binding for config, module import, or computed value. |
| 297 | `      const x = e.clientX - rect.left - size / 2;` | Defines a constant binding for config, module import, or computed value. |
| 298 | `      const y = e.clientY - rect.top - size / 2;` | Defines a constant binding for config, module import, or computed value. |
| 299 | `` | Spacing line to separate blocks and improve readability. |
| 300 | `      ripple.style.cssText = \`` | Executable statement used by the server or client runtime. |
| 301 | `            position: absolute;` | Executable statement used by the server or client runtime. |
| 302 | `            width: ${size}px;` | Executable statement used by the server or client runtime. |
| 303 | `            height: ${size}px;` | Executable statement used by the server or client runtime. |
| 304 | `            left: ${x}px;` | Executable statement used by the server or client runtime. |
| 305 | `            top: ${y}px;` | Executable statement used by the server or client runtime. |
| 306 | `            background: rgba(190, 142, 48, 0.3);` | Executable statement used by the server or client runtime. |
| 307 | `            border-radius: 50%;` | Executable statement used by the server or client runtime. |
| 308 | `            transform: scale(0);` | Executable statement used by the server or client runtime. |
| 309 | `            animation: ripple 0.6s ease-out;` | Executable statement used by the server or client runtime. |
| 310 | `            pointer-events: none;` | Executable statement used by the server or client runtime. |
| 311 | `            z-index: 1;` | Executable statement used by the server or client runtime. |
| 312 | `          \`;` | Executable statement used by the server or client runtime. |
| 313 | `` | Spacing line to separate blocks and improve readability. |
| 314 | `      this.appendChild(ripple);` | Executable statement used by the server or client runtime. |
| 315 | `` | Spacing line to separate blocks and improve readability. |
| 316 | `      // Remove ripple after animation` | Comment that documents intent for the following code block. |
| 317 | `      setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 318 | `        ripple.remove();` | Executable statement used by the server or client runtime. |
| 319 | `      }, 600);` | Closes the current code block. |
| 320 | `    });` | Closes the current code block. |
| 321 | `  });` | Closes the current code block. |
| 322 | `` | Spacing line to separate blocks and improve readability. |
| 323 | `  // Add ripple animation keyframes if not already present` | Comment that documents intent for the following code block. |
| 324 | `  if (!document.getElementById('ripple-styles')) {` | Finds a DOM node so it can be read or updated. |
| 325 | `    const style = document.createElement('style');` | Defines a constant binding for config, module import, or computed value. |
| 326 | `    style.id = 'ripple-styles';` | Executable statement used by the server or client runtime. |
| 327 | `    style.textContent = \`` | Writes plain text content into a DOM element. |
| 328 | `          @keyframes ripple {` | Executable statement used by the server or client runtime. |
| 329 | `            to {` | Executable statement used by the server or client runtime. |
| 330 | `              transform: scale(4);` | Executable statement used by the server or client runtime. |
| 331 | `              opacity: 0;` | Executable statement used by the server or client runtime. |
| 332 | `            }` | Closes the current code block. |
| 333 | `          }` | Closes the current code block. |
| 334 | `        \`;` | Executable statement used by the server or client runtime. |
| 335 | `    document.head.appendChild(style);` | Executable statement used by the server or client runtime. |
| 336 | `  }` | Closes the current code block. |
| 337 | `` | Spacing line to separate blocks and improve readability. |
| 338 | `  // Parallax effect for background decorations` | Comment that documents intent for the following code block. |
| 339 | `  window.addEventListener('scroll', () => {` | Subscribes to a browser event and runs callback logic when triggered. |
| 340 | `    const scrolled = window.pageYOffset;` | Defines a constant binding for config, module import, or computed value. |
| 341 | `    const parallax = document.querySelector('.bg-decoration');` | Defines a constant binding for config, module import, or computed value. |
| 342 | `    if (parallax) {` | Starts a conditional branch based on current runtime state. |
| 343 | `      parallax.style.transform = \`translateY(${scrolled * 0.5}px)\`;` | Executable statement used by the server or client runtime. |
| 344 | `    }` | Closes the current code block. |
| 345 | `  });` | Closes the current code block. |
| 346 | `}` | Closes the current code block. |
| 347 | `` | Spacing line to separate blocks and improve readability. |
| 348 | `// --- Link Interception for Loading Screen (Optional but good for consistency)` | Comment that documents intent for the following code block. |
| 349 | `// ---` | Comment that documents intent for the following code block. |
| 350 | `document.body.addEventListener('click', function(e) {` | Subscribes to a browser event and runs callback logic when triggered. |
| 351 | `  let targetLink = e.target.closest('a[href]');` | Defines mutable state used later in control flow or UI updates. |
| 352 | `` | Spacing line to separate blocks and improve readability. |
| 353 | `  if (targetLink && targetLink.href) {` | Starts a conditional branch based on current runtime state. |
| 354 | `    const isInternal = targetLink.origin === window.location.origin;` | Defines a constant binding for config, module import, or computed value. |
| 355 | `    const isFile = targetLink.href.includes('/assets/');` | Defines a constant binding for config, module import, or computed value. |
| 356 | `    const isMailto = targetLink.protocol === 'mailto:';` | Defines a constant binding for config, module import, or computed value. |
| 357 | `    const isAnchor =` | Defines a constant binding for config, module import, or computed value. |
| 358 | `        targetLink.hash && targetLink.pathname === window.location.pathname;` | Executable statement used by the server or client runtime. |
| 359 | `` | Spacing line to separate blocks and improve readability. |
| 360 | `    if (isInternal && !isFile && !isMailto && !isAnchor) {` | Starts a conditional branch based on current runtime state. |
| 361 | `      e.preventDefault();` | Executable statement used by the server or client runtime. |
| 362 | `` | Spacing line to separate blocks and improve readability. |
| 363 | `      let currentLoadingScreen = document.getElementById('loading-screen');` | Defines mutable state used later in control flow or UI updates. |
| 364 | `` | Spacing line to separate blocks and improve readability. |
| 365 | `      // If loading screen doesn't exist, create it` | Comment that documents intent for the following code block. |
| 366 | `      if (!currentLoadingScreen) {` | Starts a conditional branch based on current runtime state. |
| 367 | `        currentLoadingScreen = document.createElement('div');` | Executable statement used by the server or client runtime. |
| 368 | `        currentLoadingScreen.id = 'loading-screen';` | Executable statement used by the server or client runtime. |
| 369 | `        currentLoadingScreen.style.cssText = \`` | Executable statement used by the server or client runtime. |
| 370 | `              position: fixed;` | Executable statement used by the server or client runtime. |
| 371 | `              inset: 0;` | Executable statement used by the server or client runtime. |
| 372 | `              background: radial-gradient(circle at center, #1a2949 0%, #0a0f2c 100%);` | Executable statement used by the server or client runtime. |
| 373 | `              z-index: 9999;` | Executable statement used by the server or client runtime. |
| 374 | `              display: flex;` | Executable statement used by the server or client runtime. |
| 375 | `              align-items: center;` | Executable statement used by the server or client runtime. |
| 376 | `              justify-content: center;` | Executable statement used by the server or client runtime. |
| 377 | `              opacity: 1;` | Executable statement used by the server or client runtime. |
| 378 | `              pointer-events: auto;` | Executable statement used by the server or client runtime. |
| 379 | `              transition: opacity 0.6s ease;` | Executable statement used by the server or client runtime. |
| 380 | `            \`;` | Executable statement used by the server or client runtime. |
| 381 | `` | Spacing line to separate blocks and improve readability. |
| 382 | `        currentLoadingScreen.innerHTML = \`` | Injects HTML markup into the selected DOM container. |
| 383 | `              <video autoplay muted loop playsinline style="width: 150px; height: 150px; object-fit: contain; filter: drop-shadow(0 0 20px rgba(190, 142, 48, 0.7)); border-radius: 12px; animation: pulse 2s ease-in-out infinite;">` | HTML markup that contributes structure, metadata, or visible content. |
| 384 | `                <source src="/assets/load.mp4" type="video/mp4" />` | HTML markup that contributes structure, metadata, or visible content. |
| 385 | `                Your browser does not support the video tag.` | Executable statement used by the server or client runtime. |
| 386 | `              </video>` | HTML markup that contributes structure, metadata, or visible content. |
| 387 | `            \`;` | Executable statement used by the server or client runtime. |
| 388 | `` | Spacing line to separate blocks and improve readability. |
| 389 | `        document.body.appendChild(currentLoadingScreen);` | Executable statement used by the server or client runtime. |
| 390 | `      } else {` | Closes the current code block. |
| 391 | `        // If it exists, show it` | Comment that documents intent for the following code block. |
| 392 | `        currentLoadingScreen.classList.remove('fade-out');` | Toggles CSS classes to change visibility, styling, or animation state. |
| 393 | `        currentLoadingScreen.style.opacity = '1';` | Executable statement used by the server or client runtime. |
| 394 | `        currentLoadingScreen.style.pointerEvents = 'auto';` | Executable statement used by the server or client runtime. |
| 395 | `        currentLoadingScreen.style.display = 'flex';` | Executable statement used by the server or client runtime. |
| 396 | `      }` | Closes the current code block. |
| 397 | `` | Spacing line to separate blocks and improve readability. |
| 398 | `      setTimeout(() => {` | Arrow-function expression used as a concise callback/helper. |
| 399 | `        window.location.href = targetLink.href;` | Executable statement used by the server or client runtime. |
| 400 | `      }, 1000);` | Closes the current code block. |
| 401 | `    }` | Closes the current code block. |
| 402 | `  }` | Closes the current code block. |
| 403 | `});` | Closes the current code block. |

## persev-compiled/frontend/static/confetti.js

| Line | Code | What This Line Does |
|---:|---|---|
| 1 | `var confetti = {` | Legacy-scoped variable declaration used by older script patterns. |
| 2 | `  maxCount: 150,		//set max confetti count` | Executable statement used by the server or client runtime. |
| 3 | `  speed: 2,			//set the particle animation speed` | Executable statement used by the server or client runtime. |
| 4 | `  frameInterval: 15,	//the confetti animation frame interval in milliseconds` | Executable statement used by the server or client runtime. |
| 5 | `  alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)` | Executable statement used by the server or client runtime. |
| 6 | `  gradient: false,	//whether to use gradients for the confetti particles` | Executable statement used by the server or client runtime. |
| 7 | `  start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)` | Executable statement used by the server or client runtime. |
| 8 | `  stop: null,			//call to stop adding confetti` | Executable statement used by the server or client runtime. |
| 9 | `  toggle: null,		//call to start or stop the confetti animation depending on whether it's already running` | Executable statement used by the server or client runtime. |
| 10 | `  pause: null,		//call to freeze confetti animation` | Executable statement used by the server or client runtime. |
| 11 | `  resume: null,		//call to unfreeze confetti animation` | Executable statement used by the server or client runtime. |
| 12 | `  togglePause: null,	//call to toggle whether the confetti animation is paused` | Executable statement used by the server or client runtime. |
| 13 | `  remove: null,		//call to stop the confetti animation and remove all confetti immediately` | Executable statement used by the server or client runtime. |
| 14 | `  isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused` | Executable statement used by the server or client runtime. |
| 15 | `  isRunning: null		//call and returns true or false depending on whether the animation is running` | Executable statement used by the server or client runtime. |
| 16 | `};` | Closes the current code block. |
| 17 | `` | Spacing line to separate blocks and improve readability. |
| 18 | `(function() {` | Executable statement used by the server or client runtime. |
| 19 | `  confetti.start = startConfetti;` | Executable statement used by the server or client runtime. |
| 20 | `  confetti.stop = stopConfetti;` | Executable statement used by the server or client runtime. |
| 21 | `  confetti.toggle = toggleConfetti;` | Executable statement used by the server or client runtime. |
| 22 | `  confetti.pause = pauseConfetti;` | Executable statement used by the server or client runtime. |
| 23 | `  confetti.resume = resumeConfetti;` | Executable statement used by the server or client runtime. |
| 24 | `  confetti.togglePause = toggleConfettiPause;` | Executable statement used by the server or client runtime. |
| 25 | `  confetti.isPaused = isConfettiPaused;` | Executable statement used by the server or client runtime. |
| 26 | `  confetti.remove = removeConfetti;` | Executable statement used by the server or client runtime. |
| 27 | `  confetti.isRunning = isConfettiRunning;` | Executable statement used by the server or client runtime. |
| 28 | `  var supportsAnimationFrame = window.requestAnimationFrame &#124;&#124; window.webkitRequestAnimationFrame &#124;&#124; window.mozRequestAnimationFrame &#124;&#124; window.oRequestAnimationFrame &#124;&#124; window.msRequestAnimationFrame;` | Legacy-scoped variable declaration used by older script patterns. |
| 29 | `  var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];` | Legacy-scoped variable declaration used by older script patterns. |
| 30 | `  var streamingConfetti = false;` | Legacy-scoped variable declaration used by older script patterns. |
| 31 | `  var animationTimer = null;` | Legacy-scoped variable declaration used by older script patterns. |
| 32 | `  var pause = false;` | Legacy-scoped variable declaration used by older script patterns. |
| 33 | `  var lastFrameTime = Date.now();` | Legacy-scoped variable declaration used by older script patterns. |
| 34 | `  var particles = [];` | Legacy-scoped variable declaration used by older script patterns. |
| 35 | `  var waveAngle = 0;` | Legacy-scoped variable declaration used by older script patterns. |
| 36 | `  var context = null;` | Legacy-scoped variable declaration used by older script patterns. |
| 37 | `` | Spacing line to separate blocks and improve readability. |
| 38 | `  function resetParticle(particle, width, height) {` | Declares a named function used by runtime behavior. |
| 39 | `    particle.color = colors[(Math.random() * colors.length) &#124; 0] + (confetti.alpha + ")");` | Executable statement used by the server or client runtime. |
| 40 | `    particle.color2 = colors[(Math.random() * colors.length) &#124; 0] + (confetti.alpha + ")");` | Executable statement used by the server or client runtime. |
| 41 | `    particle.x = Math.random() * width;` | Executable statement used by the server or client runtime. |
| 42 | `    particle.y = Math.random() * height - height;` | Executable statement used by the server or client runtime. |
| 43 | `    particle.diameter = Math.random() * 10 + 5;` | Executable statement used by the server or client runtime. |
| 44 | `    particle.tilt = Math.random() * 10 - 10;` | Executable statement used by the server or client runtime. |
| 45 | `    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;` | Executable statement used by the server or client runtime. |
| 46 | `    particle.tiltAngle = Math.random() * Math.PI;` | Executable statement used by the server or client runtime. |
| 47 | `    return particle;` | Returns a value or exits this function early. |
| 48 | `  }` | Closes the current code block. |
| 49 | `` | Spacing line to separate blocks and improve readability. |
| 50 | `  function toggleConfettiPause() {` | Declares a named function used by runtime behavior. |
| 51 | `    if (pause)` | Starts a conditional branch based on current runtime state. |
| 52 | `      resumeConfetti();` | Executable statement used by the server or client runtime. |
| 53 | `    else` | Defines fallback behavior when previous condition is false. |
| 54 | `      pauseConfetti();` | Executable statement used by the server or client runtime. |
| 55 | `  }` | Closes the current code block. |
| 56 | `` | Spacing line to separate blocks and improve readability. |
| 57 | `  function isConfettiPaused() {` | Declares a named function used by runtime behavior. |
| 58 | `    return pause;` | Returns a value or exits this function early. |
| 59 | `  }` | Closes the current code block. |
| 60 | `` | Spacing line to separate blocks and improve readability. |
| 61 | `  function pauseConfetti() {` | Declares a named function used by runtime behavior. |
| 62 | `    pause = true;` | Executable statement used by the server or client runtime. |
| 63 | `  }` | Closes the current code block. |
| 64 | `` | Spacing line to separate blocks and improve readability. |
| 65 | `  function resumeConfetti() {` | Declares a named function used by runtime behavior. |
| 66 | `    pause = false;` | Executable statement used by the server or client runtime. |
| 67 | `    runAnimation();` | Executable statement used by the server or client runtime. |
| 68 | `  }` | Closes the current code block. |
| 69 | `` | Spacing line to separate blocks and improve readability. |
| 70 | `  function runAnimation() {` | Declares a named function used by runtime behavior. |
| 71 | `    if (pause)` | Starts a conditional branch based on current runtime state. |
| 72 | `      return;` | Returns a value or exits this function early. |
| 73 | `    else if (particles.length === 0) {` | Defines fallback behavior when previous condition is false. |
| 74 | `      context.clearRect(0, 0, window.innerWidth, window.innerHeight);` | Executable statement used by the server or client runtime. |
| 75 | `      animationTimer = null;` | Executable statement used by the server or client runtime. |
| 76 | `    } else {` | Closes the current code block. |
| 77 | `      var now = Date.now();` | Legacy-scoped variable declaration used by older script patterns. |
| 78 | `      var delta = now - lastFrameTime;` | Legacy-scoped variable declaration used by older script patterns. |
| 79 | `      if (!supportsAnimationFrame &#124;&#124; delta > confetti.frameInterval) {` | Starts a conditional branch based on current runtime state. |
| 80 | `        context.clearRect(0, 0, window.innerWidth, window.innerHeight);` | Executable statement used by the server or client runtime. |
| 81 | `        updateParticles();` | Executable statement used by the server or client runtime. |
| 82 | `        drawParticles(context);` | Executable statement used by the server or client runtime. |
| 83 | `        lastFrameTime = now - (delta % confetti.frameInterval);` | Executable statement used by the server or client runtime. |
| 84 | `      }` | Closes the current code block. |
| 85 | `      animationTimer = requestAnimationFrame(runAnimation);` | Executable statement used by the server or client runtime. |
| 86 | `    }` | Closes the current code block. |
| 87 | `  }` | Closes the current code block. |
| 88 | `` | Spacing line to separate blocks and improve readability. |
| 89 | `  function startConfetti(timeout, min, max) {` | Declares a named function used by runtime behavior. |
| 90 | `    var width = window.innerWidth;` | Legacy-scoped variable declaration used by older script patterns. |
| 91 | `    var height = window.innerHeight;` | Legacy-scoped variable declaration used by older script patterns. |
| 92 | `    window.requestAnimationFrame = (function() {` | Executable statement used by the server or client runtime. |
| 93 | `      return window.requestAnimationFrame &#124;&#124;` | Returns a value or exits this function early. |
| 94 | `        window.webkitRequestAnimationFrame &#124;&#124;` | Executable statement used by the server or client runtime. |
| 95 | `        window.mozRequestAnimationFrame &#124;&#124;` | Executable statement used by the server or client runtime. |
| 96 | `        window.oRequestAnimationFrame &#124;&#124;` | Executable statement used by the server or client runtime. |
| 97 | `        window.msRequestAnimationFrame &#124;&#124;` | Executable statement used by the server or client runtime. |
| 98 | `        function (callback) {` | Declares a named function used by runtime behavior. |
| 99 | `          return window.setTimeout(callback, confetti.frameInterval);` | Returns a value or exits this function early. |
| 100 | `        };` | Closes the current code block. |
| 101 | `    })();` | Closes the current code block. |
| 102 | `    var canvas = document.getElementById("confetti-canvas");` | Legacy-scoped variable declaration used by older script patterns. |
| 103 | `    if (canvas === null) {` | Starts a conditional branch based on current runtime state. |
| 104 | `      canvas = document.createElement("canvas");` | Executable statement used by the server or client runtime. |
| 105 | `      canvas.setAttribute("id", "confetti-canvas");` | Executable statement used by the server or client runtime. |
| 106 | `      canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");` | Executable statement used by the server or client runtime. |
| 107 | `      document.body.prepend(canvas);` | Executable statement used by the server or client runtime. |
| 108 | `      canvas.width = width;` | Executable statement used by the server or client runtime. |
| 109 | `      canvas.height = height;` | Executable statement used by the server or client runtime. |
| 110 | `      window.addEventListener("resize", function() {` | Subscribes to a browser event and runs callback logic when triggered. |
| 111 | `        canvas.width = window.innerWidth;` | Executable statement used by the server or client runtime. |
| 112 | `        canvas.height = window.innerHeight;` | Executable statement used by the server or client runtime. |
| 113 | `      }, true);` | Closes the current code block. |
| 114 | `      context = canvas.getContext("2d");` | Executable statement used by the server or client runtime. |
| 115 | `    } else if (context === null)` | Closes the current code block. |
| 116 | `      context = canvas.getContext("2d");` | Executable statement used by the server or client runtime. |
| 117 | `    var count = confetti.maxCount;` | Legacy-scoped variable declaration used by older script patterns. |
| 118 | `    if (min) {` | Starts a conditional branch based on current runtime state. |
| 119 | `      if (max) {` | Starts a conditional branch based on current runtime state. |
| 120 | `        if (min == max)` | Starts a conditional branch based on current runtime state. |
| 121 | `          count = particles.length + max;` | Executable statement used by the server or client runtime. |
| 122 | `        else {` | Defines fallback behavior when previous condition is false. |
| 123 | `          if (min > max) {` | Starts a conditional branch based on current runtime state. |
| 124 | `            var temp = min;` | Legacy-scoped variable declaration used by older script patterns. |
| 125 | `            min = max;` | Executable statement used by the server or client runtime. |
| 126 | `            max = temp;` | Executable statement used by the server or client runtime. |
| 127 | `          }` | Closes the current code block. |
| 128 | `          count = particles.length + ((Math.random() * (max - min) + min) &#124; 0);` | Executable statement used by the server or client runtime. |
| 129 | `        }` | Closes the current code block. |
| 130 | `      } else` | Closes the current code block. |
| 131 | `        count = particles.length + min;` | Executable statement used by the server or client runtime. |
| 132 | `    } else if (max)` | Closes the current code block. |
| 133 | `      count = particles.length + max;` | Executable statement used by the server or client runtime. |
| 134 | `    while (particles.length < count)` | Executable statement used by the server or client runtime. |
| 135 | `      particles.push(resetParticle({}, width, height));` | Executable statement used by the server or client runtime. |
| 136 | `    streamingConfetti = true;` | Executable statement used by the server or client runtime. |
| 137 | `    pause = false;` | Executable statement used by the server or client runtime. |
| 138 | `    runAnimation();` | Executable statement used by the server or client runtime. |
| 139 | `    if (timeout) {` | Starts a conditional branch based on current runtime state. |
| 140 | `      window.setTimeout(stopConfetti, timeout);` | Executable statement used by the server or client runtime. |
| 141 | `    }` | Closes the current code block. |
| 142 | `  }` | Closes the current code block. |
| 143 | `` | Spacing line to separate blocks and improve readability. |
| 144 | `  function stopConfetti() {` | Declares a named function used by runtime behavior. |
| 145 | `    streamingConfetti = false;` | Executable statement used by the server or client runtime. |
| 146 | `  }` | Closes the current code block. |
| 147 | `` | Spacing line to separate blocks and improve readability. |
| 148 | `  function removeConfetti() {` | Declares a named function used by runtime behavior. |
| 149 | `    stop();` | Executable statement used by the server or client runtime. |
| 150 | `    pause = false;` | Executable statement used by the server or client runtime. |
| 151 | `    particles = [];` | Executable statement used by the server or client runtime. |
| 152 | `  }` | Closes the current code block. |
| 153 | `` | Spacing line to separate blocks and improve readability. |
| 154 | `  function toggleConfetti() {` | Declares a named function used by runtime behavior. |
| 155 | `    if (streamingConfetti)` | Starts a conditional branch based on current runtime state. |
| 156 | `      stopConfetti();` | Executable statement used by the server or client runtime. |
| 157 | `    else` | Defines fallback behavior when previous condition is false. |
| 158 | `      startConfetti();` | Executable statement used by the server or client runtime. |
| 159 | `  }` | Closes the current code block. |
| 160 | `` | Spacing line to separate blocks and improve readability. |
| 161 | `  function isConfettiRunning() {` | Declares a named function used by runtime behavior. |
| 162 | `    return streamingConfetti;` | Returns a value or exits this function early. |
| 163 | `  }` | Closes the current code block. |
| 164 | `` | Spacing line to separate blocks and improve readability. |
| 165 | `  function drawParticles(context) {` | Declares a named function used by runtime behavior. |
| 166 | `    var particle;` | Legacy-scoped variable declaration used by older script patterns. |
| 167 | `    var x, y, x2, y2;` | Legacy-scoped variable declaration used by older script patterns. |
| 168 | `    for (var i = 0; i < particles.length; i++) {` | Iterates over a list to process each item. |
| 169 | `      particle = particles[i];` | Executable statement used by the server or client runtime. |
| 170 | `      context.beginPath();` | Executable statement used by the server or client runtime. |
| 171 | `      context.lineWidth = particle.diameter;` | Executable statement used by the server or client runtime. |
| 172 | `      x2 = particle.x + particle.tilt;` | Executable statement used by the server or client runtime. |
| 173 | `      x = x2 + particle.diameter / 2;` | Executable statement used by the server or client runtime. |
| 174 | `      y2 = particle.y + particle.tilt + particle.diameter / 2;` | Executable statement used by the server or client runtime. |
| 175 | `      if (confetti.gradient) {` | Starts a conditional branch based on current runtime state. |
| 176 | `        var gradient = context.createLinearGradient(x, particle.y, x2, y2);` | Legacy-scoped variable declaration used by older script patterns. |
| 177 | `        gradient.addColorStop("0", particle.color);` | Executable statement used by the server or client runtime. |
| 178 | `        gradient.addColorStop("1.0", particle.color2);` | Executable statement used by the server or client runtime. |
| 179 | `        context.strokeStyle = gradient;` | Executable statement used by the server or client runtime. |
| 180 | `      } else` | Closes the current code block. |
| 181 | `        context.strokeStyle = particle.color;` | Executable statement used by the server or client runtime. |
| 182 | `      context.moveTo(x, particle.y);` | Executable statement used by the server or client runtime. |
| 183 | `      context.lineTo(x2, y2);` | Executable statement used by the server or client runtime. |
| 184 | `      context.stroke();` | Executable statement used by the server or client runtime. |
| 185 | `    }` | Closes the current code block. |
| 186 | `  }` | Closes the current code block. |
| 187 | `` | Spacing line to separate blocks and improve readability. |
| 188 | `  function updateParticles() {` | Declares a named function used by runtime behavior. |
| 189 | `    var width = window.innerWidth;` | Legacy-scoped variable declaration used by older script patterns. |
| 190 | `    var height = window.innerHeight;` | Legacy-scoped variable declaration used by older script patterns. |
| 191 | `    var particle;` | Legacy-scoped variable declaration used by older script patterns. |
| 192 | `    waveAngle += 0.01;` | Executable statement used by the server or client runtime. |
| 193 | `    for (var i = 0; i < particles.length; i++) {` | Iterates over a list to process each item. |
| 194 | `      particle = particles[i];` | Executable statement used by the server or client runtime. |
| 195 | `      if (!streamingConfetti && particle.y < -15)` | Starts a conditional branch based on current runtime state. |
| 196 | `        particle.y = height + 100;` | Executable statement used by the server or client runtime. |
| 197 | `      else {` | Defines fallback behavior when previous condition is false. |
| 198 | `        particle.tiltAngle += particle.tiltAngleIncrement;` | Executable statement used by the server or client runtime. |
| 199 | `        particle.x += Math.sin(waveAngle) - 0.5;` | Executable statement used by the server or client runtime. |
| 200 | `        particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;` | Executable statement used by the server or client runtime. |
| 201 | `        particle.tilt = Math.sin(particle.tiltAngle) * 15;` | Executable statement used by the server or client runtime. |
| 202 | `      }` | Closes the current code block. |
| 203 | `      if (particle.x > width + 20 &#124;&#124; particle.x < -20 &#124;&#124; particle.y > height) {` | Starts a conditional branch based on current runtime state. |
| 204 | `        if (streamingConfetti && particles.length <= confetti.maxCount)` | Starts a conditional branch based on current runtime state. |
| 205 | `          resetParticle(particle, width, height);` | Executable statement used by the server or client runtime. |
| 206 | `        else {` | Defines fallback behavior when previous condition is false. |
| 207 | `          particles.splice(i, 1);` | Executable statement used by the server or client runtime. |
| 208 | `          i--;` | Executable statement used by the server or client runtime. |
| 209 | `        }` | Closes the current code block. |
| 210 | `      }` | Closes the current code block. |
| 211 | `    }` | Closes the current code block. |
| 212 | `  }` | Closes the current code block. |
| 213 | `})();` | Closes the current code block. |

