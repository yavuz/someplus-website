/**
 * Open with AI landing page client.
 */

const galleryGrid = document.getElementById("gallery-grid");
const extensionStatus = document.getElementById("extension-status");
const galleryImport = window.OpenWithAIImport;

function renderLandingGallery() {
  if (!galleryGrid || !galleryImport) return;

  const allActions = window.GALLERY_ACTIONS || [];
  const actions = allActions
    .map((action, index) => ({ action, index }))
    .filter(item => item.action.featured)
    .slice(0, 8);

  galleryGrid.innerHTML = actions.map(({ action, index }) => `
    <article class="action-card" data-index="${index}">
      <div class="action-head">
        <span class="action-emoji">${action.emoji}</span>
        <div>
          <div class="action-name">${galleryImport.escapeHtml(action.name)}</div>
          <div class="action-tag">${galleryImport.escapeHtml(action.category || action.tag || "Action")}</div>
        </div>
      </div>
      <p class="action-description">${galleryImport.escapeHtml(action.description || "")}</p>
      <div class="action-prompt">${galleryImport.escapeHtml(action.prompt)}</div>
      <button class="action-add" data-index="${index}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Add to extension
      </button>
    </article>
  `).join("");

  galleryGrid.querySelectorAll(".action-add").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = allActions[parseInt(btn.dataset.index, 10)];
      galleryImport.addAction(action, btn, extensionStatus);
    });
  });
}

renderLandingGallery();
galleryImport?.detectExtension(extensionStatus);
