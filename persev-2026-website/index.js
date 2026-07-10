const express = require("express");
const path = require("path");
const siteData = require("./data/siteData");

const app = express();
const PORT = process.env.PORT || 3000;
const frontendDir = path.join(__dirname, "public");

const noStorePaths = new Set(["/sw.js"]);

const setNoStoreHeaders = (res) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
};

app.use((req, res, next) => {
  const requestPath = req.path || "";
  if (requestPath === "/" || requestPath.endsWith(".html") || noStorePaths.has(requestPath)) {
    setNoStoreHeaders(res);
  }

  next();
});

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/landing.html", (_req, res) => {
  res.redirect(302, "/index.html");
});

app.use(express.static(frontendDir, {
  extensions: ["html"],
  setHeaders(res, filePath) {
    if (filePath.endsWith(path.sep + "sw.js") || filePath.endsWith("sw.js") || filePath.endsWith(".html")) {
      setNoStoreHeaders(res);
    }
  }
}));

// In-memory registrations for demo simplicity.
const registrations = [];

/*
  Lightweight health endpoint used by uptime checks or local diagnostics.
  Returns a minimal payload confirming the server is running.
*/
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "persev-backend" });
});

/*
  Serves top-level site metadata used by the frontend.
  This keeps copy/config data in one source of truth.
*/
app.get("/api/site", (_req, res) => {
  res.json(siteData.site);
});

/*
  Returns the event catalog shown on event-related pages.
  The frontend can fetch this to render cards and details.
*/
app.get("/api/events", (_req, res) => {
  res.json(siteData.events);
});

/*
  Returns current leaderboard data for scoreboard views.
  Data is currently static and comes from local site data.
*/
app.get("/api/leaderboard", (_req, res) => {
  res.json(siteData.leaderboard);
});

/*
  Accepts a registration payload, validates required fields,
  then stores a normalized record in memory for demo use.
*/
app.post("/api/register", (req, res) => {
  const { school, eventId, participants } = req.body || {};

  // Reject incomplete or malformed submissions early.
  if (!school || !eventId || !Array.isArray(participants) || participants.length === 0) {
    return res.status(400).json({
      error: "school, eventId, and at least one participant are required"
    });
  }

  // Ensure registrations can only target known event IDs.
  const event = siteData.events.find((item) => item.id === eventId);
  if (!event) {
    return res.status(404).json({ error: "event not found" });
  }

  // Build a stored record with a simple generated ID and timestamp.
  const saved = {
    id: `reg-${registrations.length + 1}`,
    school,
    eventId,
    participants,
    createdAt: new Date().toISOString()
  };

  registrations.push(saved);
  return res.status(201).json(saved);
});

/*
  Returns blob data for visual/3D elements.
*/
app.get("/api/blob-data", (_req, res) => {
  res.json({
    blobs: [],
    metadata: { version: "1.0", timestamp: new Date().toISOString() }
  });
});

/*
app.get("/api/registrations", (_req, res) => {
  res.json(registrations);
});
*/

/*
  Starts the HTTP server and gracefully handles a busy port by retrying
  on the next port number, which is helpful during local development.
*/
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Persev backend running on http://localhost:${port}`);
  });

  // Retry on port conflict; exit for all other startup errors.
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      const nextPort = Number(port) + 1;
      console.log(`Port ${port} is busy, retrying on ${nextPort}...`);
      startServer(nextPort);
      return;
    }

    console.error("Failed to start server:", err);
    process.exit(1);
  });
};

// Boot the server using configured/default port.
startServer(PORT);




