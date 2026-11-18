(() => {
  const ua = navigator.userAgent || "";
  if (/Android/i.test(ua)) {
    window.location.replace("https://play.google.com/store/apps/details?id=app.solaya");
  } else if (/iPad|iPhone|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
    window.location.replace("https://apps.apple.com/tr/app/solaya-time-to-go-outside/id6834972254");
  }
})();
