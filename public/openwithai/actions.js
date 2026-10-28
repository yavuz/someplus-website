/**
 * Filtered action gallery page.
 */

const CATEGORIES = [
  "Writing",
  "Research",
  "Productivity",
  "Email",
  "Social",
  "Code",
  "Learning",
  "Business",
  "Translation",
  "Creative"
];

const USE_CASES = [
  "Quick fix",
  "Deep work",
  "Compare AIs",
  "Page summary",
  "Developer"
];

const gallery = window.OpenWithAIImport;
const state = {
  query: "",
  category: "All",
  useCase: "All",
  sort: "featured"
};

const actionsGrid = document.getElementById("actions-grid");
const searchInput = document.getElementById("action-search");
const sortSelect = document.getElementById("action-sort");
const categoryFilters = document.getElementById("category-filters");
const useCaseFilters = document.getElementById("usecase-filters");
const resultsCount = document.getElementById("results-count");
const clearFiltersBtn = document.getElementById("clear-filters");
const emptyState = document.getElementById("empty-state");
const emptyClearBtn = document.getElementById("empty-clear");
const extensionStatus = document.getElementById("extension-status");

function buildRequestHref() {
  const subject = encodeURIComponent("Open with AI action request");
  const body = encodeURIComponent([
    "Requested action name:",
    "",
    "Use case:",
    "",
    "Example prompt or expected output:",
    "",
    "Where you would use it:"
  ].join("\n"));
  return `mailto:info@someplus.work?subject=${subject}&body=${body}`;
}

function renderChips(container, values, activeValue, onSelect) {
  const chips = ["All", ...values];
  container.innerHTML = chips.map(value => `
    <button class="filter-chip${value === activeValue ? " active" : ""}" type="button" data-value="${gallery.escapeHtml(value)}">
      ${gallery.escapeHtml(value)}
    </button>
  `).join("");

  container.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => onSelect(chip.dataset.value));
  });
}

function actionSearchText(action) {
  return [
    action.name,
    action.description,
    action.category,
    action.useCase,
    action.audience,
    action.prompt,
    ...(action.tags || [])
  ].join(" ").toLowerCase();
}

function getFilteredActions() {
  const query = state.query.trim().toLowerCase();
  const filtered = (window.GALLERY_ACTIONS || []).filter(action => {
    const matchesQuery = !query || actionSearchText(action).includes(query);
    const matchesCategory = state.category === "All" || action.category === state.category;
    const matchesUseCase = state.useCase === "All" || action.useCase === state.useCase;
    return matchesQuery && matchesCategory && matchesUseCase;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "az") return a.name.localeCompare(b.name);
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

function renderActions() {
  const actions = getFilteredActions();
  resultsCount.textContent = `${actions.length} ${actions.length === 1 ? "action" : "actions"}`;
  actionsGrid.classList.toggle("hidden", actions.length === 0);
  emptyState.classList.toggle("hidden", actions.length !== 0);

  actionsGrid.innerHTML = actions.map(action => {
    const index = window.GALLERY_ACTIONS.indexOf(action);
    const tags = (action.tags || []).slice(0, 3).map(tag => `<span>${gallery.escapeHtml(tag)}</span>`).join("");
    return `
      <article class="gallery-action-card" data-index="${index}">
        <div class="gallery-action-top">
          <span class="action-emoji">${action.emoji}</span>
          <div>
            <div class="action-name">${gallery.escapeHtml(action.name)}</div>
            <div class="action-meta">${gallery.escapeHtml(action.category)} · ${gallery.escapeHtml(action.useCase)}</div>
          </div>
        </div>
        <p class="action-description">${gallery.escapeHtml(action.description)}</p>
        <div class="tag-row">${tags}</div>
        <div class="action-prompt gallery-prompt">${gallery.escapeHtml(action.prompt)}</div>
        <div class="card-actions">
          <button class="action-add" data-index="${index}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add to extension
          </button>
          <button class="prompt-toggle" type="button" data-index="${index}">Preview prompt</button>
        </div>
      </article>
    `;
  }).join("");

  actionsGrid.querySelectorAll(".action-add").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = window.GALLERY_ACTIONS[parseInt(btn.dataset.index, 10)];
      gallery.addAction(action, btn, extensionStatus);
    });
  });

  actionsGrid.querySelectorAll(".prompt-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".gallery-action-card");
      const prompt = card.querySelector(".gallery-prompt");
      const expanded = prompt.classList.toggle("expanded");
      btn.textContent = expanded ? "Hide prompt" : "Preview prompt";
    });
  });
}

function renderFilters() {
  renderChips(categoryFilters, CATEGORIES, state.category, value => {
    state.category = value;
    renderFilters();
    renderActions();
  });

  renderChips(useCaseFilters, USE_CASES, state.useCase, value => {
    state.useCase = value;
    renderFilters();
    renderActions();
  });
}

function clearFilters() {
  state.query = "";
  state.category = "All";
  state.useCase = "All";
  state.sort = "featured";
  searchInput.value = "";
  sortSelect.value = "featured";
  renderFilters();
  renderActions();
}

function init() {
  if (!gallery) return;

  document.getElementById("request-action").href = buildRequestHref();
  document.getElementById("request-action-empty").href = buildRequestHref();

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    renderActions();
  });

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    renderActions();
  });

  clearFiltersBtn.addEventListener("click", clearFilters);
  emptyClearBtn.addEventListener("click", clearFilters);

  renderFilters();
  renderActions();
  gallery.detectExtension(extensionStatus, "index.html#install");
}

init();
