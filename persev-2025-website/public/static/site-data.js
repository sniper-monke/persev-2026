const PLACEHOLDER_IMAGE = "assets/placeholder.svg"; // Placeholder image per user request.

const SITE_DATA = {
  title: "Perseverantia 2026",
  theme: "OFFTHENTIC",
  description:
    "A clean and hardcoded rebuild of the Perseverantia website with simplified architecture.",
  contact: {
    phones: "+91 84258 98552 / +91 77380 99474 / +91 70211 38415",
    email: "perseverantia@bombayscottish.in",
    address: "Bombay Scottish School, Mahim, Mumbai, India"
  },
  events: [
    {
      id: "admeta",
      name: "Admeta",
      category: "Literary",
      description: "Debate event focused on authenticity and perspective.",
      image: PLACEHOLDER_IMAGE
    },
    {
      id: "codeferno",
      name: "Codeferno",
      category: "Technology",
      description: "Competitive coding with timed algorithmic rounds.",
      image: PLACEHOLDER_IMAGE
    },
    {
      id: "gratia",
      name: "Gratia",
      category: "Performing Arts",
      description: "Dance performance celebrating culture and identity.",
      image: PLACEHOLDER_IMAGE
    },
    {
      id: "football",
      name: "Football",
      category: "Sports",
      description: "Fast-paced football tournament for school teams.",
      image: PLACEHOLDER_IMAGE
    }
  ],
  committee: [
    { role: "President", name: "Student Lead 1", photo: PLACEHOLDER_IMAGE },
    { role: "Vice President", name: "Student Lead 2", photo: PLACEHOLDER_IMAGE },
    { role: "Technical Head", name: "Student Lead 3", photo: PLACEHOLDER_IMAGE },
    { role: "Cultural Head", name: "Student Lead 4", photo: PLACEHOLDER_IMAGE }
  ],
  leaderboard: [
    { rank: 1, school: "Bombay Scottish", points: 240 },
    { rank: 2, school: "Delhi Public School", points: 210 },
    { rank: 3, school: "St. Xavier's High School", points: 195 }
  ],
  quickLinks: [
    { label: "Home", href: "index.html" },
    { label: "Events", href: "events.html" },
    { label: "Organizing Committee", href: "organizing-committee.html" },
    { label: "Leaderboard", href: "leaderboard.html" },
    { label: "Locations", href: "locations.html" }
  ]
};
