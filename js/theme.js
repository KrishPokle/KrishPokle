/* ==========================================================
   theme.js
   Picks the theme (Paper, Terminal or Pop) before the page is
   drawn, so you never see a flash of the wrong colors.

   It's loaded in <head> without "defer" on purpose: it has to
   run before the browser paints anything.
   ========================================================== */

(() => {
  const THEMES = ["paper", "terminal", "pop"];

  // Use the theme the visitor picked last time, if there is one.
  // (localStorage can throw in private windows, hence try/catch.)
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (error) {}

  // Otherwise follow their system setting: dark mode gets Terminal.
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = THEMES.includes(saved) ? saved : prefersDark ? "terminal" : "paper";

  // The CSS reads this attribute: <html data-theme="paper">
  document.documentElement.dataset.theme = theme;

  // main.js calls this when someone clicks a theme button.
  window.THEMES = THEMES;
  window.setTheme = (name) => {
    document.documentElement.dataset.theme = name;
    try {
      localStorage.setItem("theme", name);
    } catch (error) {}
  };
})();
