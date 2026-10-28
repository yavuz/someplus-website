/**
 * Shared one-click import helper for the public Open with AI gallery pages.
 */

(function () {
  const DEFAULT_EXTENSION_ID = "okkfdklfihcckicfedjkecdndaiodlda";
  const IS_FIREFOX = navigator.userAgent.includes("Firefox");

  function getExtensionId() {
    const fromUrl = new URLSearchParams(location.search).get("ext");
    return fromUrl || DEFAULT_EXTENSION_ID;
  }

  const EXT_ID = getExtensionId();
  let toastTimer = null;

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function toast(msg, kind = "ok") {
    const toastEl = document.getElementById("toast");
    if (!toastEl) return;

    toastEl.textContent = msg;
    toastEl.className = "toast show " + kind;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2400);
  }

  function sendViaUrlRelay(action, btn, originalText) {
    const params = new URLSearchParams({
      owai_import: "1",
      name: action.name,
      emoji: action.emoji || "",
      prompt: action.prompt
    });
    window.open(`${location.origin}${location.pathname}?${params}`, "_blank");

    btn.classList.add("added");
    btn.innerHTML = "✓ Confirm in the new tab";
    toast(`"${action.name}" sent. Confirm in the tab that just opened.`, "ok");
    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove("added");
      btn.innerHTML = originalText;
    }, 4000);
  }

  function addAction(action, btn, statusEl) {
    if (!action || !btn) return;

    btn.disabled = true;
    const originalText = btn.innerHTML;

    if (IS_FIREFOX) {
      sendViaUrlRelay(action, btn, originalText);
      return;
    }

    if (typeof chrome === "undefined" || !chrome.runtime?.sendMessage) {
      btn.disabled = false;
      toast("Extension not detected. Install Open with AI first.", "error");
      return;
    }

    try {
      chrome.runtime.sendMessage(
        EXT_ID,
        { type: "IMPORT_ACTION", action: { name: action.name, emoji: action.emoji, prompt: action.prompt } },
        (response) => {
          if (chrome.runtime.lastError) {
            btn.disabled = false;
            btn.innerHTML = originalText;
            toast("Extension not installed or not enabled.", "error");
            markStatus(statusEl, false);
            return;
          }

          if (response?.ok) {
            btn.classList.add("added");
            btn.innerHTML = "✓ Sent. Confirm in the new tab";
            toast(`"${action.name}" sent to the extension.`, "ok");
            markStatus(statusEl, true);
            setTimeout(() => {
              btn.disabled = false;
              btn.classList.remove("added");
              btn.innerHTML = originalText;
            }, 4000);
          } else {
            btn.disabled = false;
            btn.innerHTML = originalText;
            toast(response?.error || "Could not import action.", "error");
          }
        }
      );
    } catch (e) {
      btn.disabled = false;
      btn.innerHTML = originalText;
      toast("Extension not available in this browser.", "error");
    }
  }

  function detectExtension(statusEl, installHref = "#install") {
    if (!statusEl) return;

    if (IS_FIREFOX) {
      markStatus(statusEl, true, installHref);
      return;
    }

    if (typeof chrome === "undefined" || !chrome.runtime?.sendMessage) {
      markStatus(statusEl, false, installHref);
      return;
    }

    try {
      chrome.runtime.sendMessage(EXT_ID, { type: "PING" }, () => {
        const err = chrome.runtime.lastError;
        if (err && /Could not establish connection|Receiving end does not exist/i.test(err.message)) {
          markStatus(statusEl, false, installHref);
        } else {
          markStatus(statusEl, true, installHref);
        }
      });
    } catch {
      markStatus(statusEl, false, installHref);
    }
  }

  function markStatus(statusEl, installed, installHref = "#install") {
    if (!statusEl) return;

    if (installed) {
      statusEl.className = "ext-status ok";
      statusEl.innerHTML = "✓ Open with AI is installed. Clicking a card opens the import confirmation.";
    } else {
      statusEl.className = "ext-status missing";
      statusEl.innerHTML = `Don't have the extension yet? <a href="${installHref}">Install it first</a> to use one-click add.`;
    }
  }

  window.OpenWithAIImport = {
    addAction,
    detectExtension,
    escapeHtml,
    toast
  };
})();
