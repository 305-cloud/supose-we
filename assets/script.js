(function () {
  "use strict";

  var COUNTRIES = [
    { code: "US", flag: "🇺🇸", name: "United States", domain: "amazon.com" },
    { code: "GB", flag: "🇬🇧", name: "United Kingdom", domain: "amazon.co.uk" },
    { code: "CA", flag: "🇨🇦", name: "Canada",         domain: "amazon.ca" },
    { code: "AU", flag: "🇦🇺", name: "Australia",       domain: "amazon.com.au" },
    { code: "DE", flag: "🇩🇪", name: "Germany",         domain: "amazon.de" },
    { code: "FR", flag: "🇫🇷", name: "France",          domain: "amazon.fr" },
    { code: "IN", flag: "🇮🇳", name: "India",           domain: "amazon.in" },
    { code: "JP", flag: "🇯🇵", name: "Japan",           domain: "amazon.co.jp" }
  ];

  var STORAGE_KEY = "haunted-law-firm-country";
  var AUTHOR = "Robert Arrington";

  function buildUrl(domain, title) {
    var query = title + " " + AUTHOR + " book";
    return "https://www." + domain + "/s?k=" + encodeURIComponent(query);
  }

  function findCountry(code) {
    for (var i = 0; i < COUNTRIES.length; i++) {
      if (COUNTRIES[i].code === code) return COUNTRIES[i];
    }
    return COUNTRIES[0];
  }

  function populateSelect(select, selectedCode) {
    select.innerHTML = "";
    COUNTRIES.forEach(function (c) {
      var opt = document.createElement("option");
      opt.value = c.code;
      opt.textContent = c.flag + " " + c.name;
      if (c.code === selectedCode) opt.selected = true;
      select.appendChild(opt);
    });
  }

  function applyCountry(code) {
    var country = findCountry(code);

    document.querySelectorAll(".buy-btn, #cta-buy-all").forEach(function (link) {
      var title = link.getAttribute("data-title");
      if (!title) return;
      link.setAttribute("href", buildUrl(country.domain, title));
      link.setAttribute(
        "aria-label",
        "Buy " + title + " on " + country.name + " Amazon"
      );
    });

    var storefrontBadge = document.getElementById("storefront-badge");
    if (storefrontBadge) storefrontBadge.textContent = "🌍 Shipping to " + country.name;

    document.querySelectorAll("#country-select, #country-select-2").forEach(function (sel) {
      if (sel.value !== code) sel.value = code;
    });

    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      /* storage may be unavailable; country selection just won't persist */
    }
  }

  function detectDefaultCountry() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && findCountry(stored)) return stored;
    } catch (e) {}

    var lang = (navigator.language || "en-US").toUpperCase();
    var guess = COUNTRIES.find(function (c) {
      return lang.indexOf(c.code) !== -1;
    });
    return guess ? guess.code : "US";
  }

  function initCountryPicker() {
    var initial = detectDefaultCountry();
    var selects = document.querySelectorAll("#country-select, #country-select-2");

    selects.forEach(function (sel) {
      populateSelect(sel, initial);
      sel.addEventListener("change", function () {
        applyCountry(sel.value);
      });
    });

    applyCountry(initial);
  }

  function initRevealOnScroll() {
    var cards = document.querySelectorAll(".book-card");
    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (c) { c.classList.add("in-view"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(function (c) { observer.observe(c); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initCountryPicker();
    initRevealOnScroll();
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();
