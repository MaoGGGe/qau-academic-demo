(() => {
  "use strict";

  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || saved === "light"
      ? saved
      : (media.matches ? "dark" : "light");
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    const icon = document.getElementById("theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☾" : "☀";
  }

  function toggleTheme() {
    const next = root.hasAttribute("data-theme") ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  function setupNavigation() {
    const nav = document.getElementById("site-nav");
    if (!nav) return;

    const button = nav.querySelector("button");
    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    const tail = visible.querySelector(".persist.tail");

    function fitNavigation() {
      while (hidden.firstElementChild) {
        visible.insertBefore(hidden.firstElementChild, tail);
      }

      button.classList.add("hidden");
      hidden.classList.add("hidden");
      button.classList.remove("close");

      while (visible.getBoundingClientRect().width > nav.clientWidth - 42) {
        const candidates = visible.querySelectorAll("li:not(.persist)");
        const item = candidates[candidates.length - 1];
        if (!item) break;
        hidden.prepend(item);
        button.classList.remove("hidden");
      }

      button.setAttribute("count", String(hidden.children.length));
    }

    button.addEventListener("click", () => {
      hidden.classList.toggle("hidden");
      button.classList.toggle("close");
    });

    if ("ResizeObserver" in window) {
      new ResizeObserver(fitNavigation).observe(nav);
    } else {
      window.addEventListener("resize", fitNavigation, { passive: true });
    }
    fitNavigation();
  }

  function setupProfileMenu() {
    const button = document.querySelector(".author__urls-wrapper button");
    const links = document.querySelector(".author__urls");
    if (!button || !links) return;
    button.addEventListener("click", () => {
      links.hidden = !links.hidden;
      button.classList.toggle("open", !links.hidden);
    });
  }

  applyTheme(currentTheme());

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#theme-toggle a");
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
      toggle.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleTheme();
        }
      });
    }

    media.addEventListener("change", () => {
      if (!localStorage.getItem("theme")) applyTheme(currentTheme());
    });

    setupNavigation();
    setupProfileMenu();
  });
})();
