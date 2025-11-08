<script>
(() => {
  const KEY = "theme";               
  const docEl = document.documentElement;

  function apply(mode){
    if (mode === "light") docEl.setAttribute("data-theme","light");
    else docEl.removeAttribute("data-theme");
    localStorage.setItem(KEY, mode);
    // update meta theme-color if present
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta){
      const style = getComputedStyle(document.documentElement);
      meta.setAttribute('content', style.getPropertyValue('--theme-color') || (mode==="light" ? "#ffffff" : "#0b0d10"));
    }
    // notify listeners
    window.dispatchEvent(new CustomEvent("themechange", { detail:{ mode } }));
  }

  window.__getTheme = () => localStorage.getItem(KEY) || (matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark");
  window.__setTheme = (m) => apply(m);
  window.__toggleTheme = () => apply(window.__getTheme()==="light" ? "dark":"light");

  // initial
  apply(localStorage.getItem(KEY) || (matchMedia('(prefers-color-scheme: light)').matches ? "light":"dark"));

  // cross-tab sync
  window.addEventListener("storage", (e)=>{
    if (e.key === KEY && e.newValue) apply(e.newValue);
  });
})();
</script>
