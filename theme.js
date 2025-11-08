(function () {
  const KEY = "theme";
  const html = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

  const stored = localStorage.getItem(KEY);
  const mode = stored || (prefersLight.matches ? "light" : "dark");

  setTheme(mode);

  prefersLight.addEventListener("change", (e) => {
    if (!stored) setTheme(e.matches ? "light" : "dark");
  });

  window.addEventListener("storage", (e) => {
    if (e.key === KEY && e.newValue) setTheme(e.newValue);
  });
  
  function setTheme(mode) {
    html.classList.toggle("light", mode === "light");
    if (meta) meta.setAttribute("content", mode === "light" ? "#ffffff" : "#0b0d10");
  }

  window.toggleTheme = function () {
    const newMode = html.classList.contains("light") ? "dark" : "light";
    localStorage.setItem(KEY, newMode);
    setTheme(newMode);
  };
})();
