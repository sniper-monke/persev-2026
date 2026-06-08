const PLACEHOLDER_MEDIA = "/public/placeholder.svg"; // Placeholder media from user request.

const site = {
  title: "Perseverantia 2026",
  subtitle: "Simplified hardcoded backend",
  description: "A minimal backend rebuild with readable and maintainable structure.",
  heroImage: PLACEHOLDER_MEDIA,
  heroVideo: PLACEHOLDER_MEDIA
};

const events = [
  {
    id: "admeta",
    name: "Admeta",
    category: "Literary",
    description: "Debate event focused on originality and perspective.",
    logo: PLACEHOLDER_MEDIA,
    eventHeadPhoto: PLACEHOLDER_MEDIA
  },
  {
    id: "codeferno",
    name: "Codeferno",
    category: "Tech",
    description: "Timed coding challenge with algorithmic problems.",
    logo: PLACEHOLDER_MEDIA,
    eventHeadPhoto: PLACEHOLDER_MEDIA
  },
  {
    id: "gratia",
    name: "Gratia",
    category: "Performing Arts",
    description: "Dance competition blending tradition and creativity.",
    logo: PLACEHOLDER_MEDIA,
    eventHeadPhoto: PLACEHOLDER_MEDIA
  },
  {
    id: "football",
    name: "Football",
    category: "Sports",
    description: "High-intensity interschool football face-off.",
    logo: PLACEHOLDER_MEDIA,
    eventHeadPhoto: PLACEHOLDER_MEDIA
  }
];

const leaderboard = {
  eventEnded: true,
  schools: [
    { name: "Bombay Scottish", points: 240 },
    { name: "Delhi Public School", points: 210 },
    { name: "St. Xavier's High School", points: 195 }
  ]
};

module.exports = {
  site,
  events,
  leaderboard
};
