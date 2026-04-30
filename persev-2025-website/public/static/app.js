/*
  Populates the shared navigation region using quick link data.
  If the target mount point is missing on a page, it safely exits.
*/
function injectNav() {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;

  nav.innerHTML = SITE_DATA.quickLinks
    .map((link) => `<a href="${link.href}">${link.label}</a>`)
    .join("");
}

/*
  Renders event cards from SITE_DATA into the events container.
  Uses template strings so each event object maps to one card.
*/
function renderEvents() {
  const mount = document.querySelector("[data-events]");
  if (!mount) return;

  mount.innerHTML = SITE_DATA.events
    .map(
      (event) => `
      <article class="card">
        <!-- Placeholder image required by user request. -->
        <img src="${event.image}" alt="${event.name} placeholder media">
        <h3>${event.name}</h3>
        <p class="meta">${event.category}</p>
        <p>${event.description}</p>
      </article>
    `
    )
    .join("");
}

/*
  Renders organizing committee members as profile cards.
  Each member entry is transformed into consistent card markup.
*/
function renderCommittee() {
  const mount = document.querySelector("[data-committee]");
  if (!mount) return;

  mount.innerHTML = SITE_DATA.committee
    .map(
      (member) => `
      <article class="card">
        <!-- Placeholder image required by user request. -->
        <img src="${member.photo}" alt="${member.name} placeholder photo">
        <h3>${member.name}</h3>
        <p class="meta">${member.role}</p>
      </article>
    `
    )
    .join("");
}

/*
  Builds leaderboard table rows from ranking data.
  This keeps the table body synced with SITE_DATA.leaderboard.
*/
function renderLeaderboard() {
  const tbody = document.querySelector("[data-leaderboard]");
  if (!tbody) return;

  tbody.innerHTML = SITE_DATA.leaderboard
    .map(
      (row) => `
      <tr>
        <td>${row.rank}</td>
        <td>${row.school}</td>
        <td>${row.points}</td>
      </tr>
    `
    )
    .join("");
}

/*
  Injects shared textual content (title, theme, description, contact)
  into any page sections that opt in via data-* attributes.
*/
function injectGlobalContent() {
  const title = document.querySelector("[data-site-title]");
  if (title) title.textContent = SITE_DATA.title;

  const theme = document.querySelector("[data-theme]");
  if (theme) theme.textContent = SITE_DATA.theme;

  const description = document.querySelector("[data-description]");
  if (description) description.textContent = SITE_DATA.description;

  const contact = document.querySelector("[data-contact]");
  if (contact) {
    contact.innerHTML = `
      <p><strong>Phone:</strong> ${SITE_DATA.contact.phones}</p>
      <p><strong>Email:</strong> <a href="mailto:${SITE_DATA.contact.email}">${SITE_DATA.contact.email}</a></p>
      <p><strong>Address:</strong> ${SITE_DATA.contact.address}</p>
    `;
  }
}

// Initialize all page sections that are present on the current document.
injectNav();
injectGlobalContent();
renderEvents();
renderCommittee();
renderLeaderboard();
