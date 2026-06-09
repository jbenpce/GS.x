/* GS.x — Greenspar.x · progressive enhancement (no dependencies) */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");

  // Header background on scroll
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu after tapping a link
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Contact form — submits in the background to FormSubmit.co (static-site form
  // relay → emails info@greensparx.io). No mailto, no page reload.
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var isIt = (document.documentElement.lang || "").toLowerCase().indexOf("it") === 0;
      var note = form.querySelector("[data-form-note]");
      var btn = form.querySelector('button[type="submit"]');
      function say(msg) { if (note) { note.hidden = false; note.textContent = msg; } }
      say(isIt ? "Invio in corso…" : "Sending…");
      if (btn) btn.disabled = true;
      fetch("https://formsubmit.co/ajax/info@greensparx.io", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          var ok = j && (j.success === true || j.success === "true");
          if (ok) {
            say(isIt
              ? "Grazie — messaggio inviato. Ti ricontatteremo a breve."
              : "Thanks — your message has been sent. We'll be in touch shortly.");
            form.reset();
          } else {
            say(isIt
              ? "Si è verificato un problema. Riprova o scrivici a info@greensparx.io."
              : "Something went wrong — please try again, or email info@greensparx.io.");
          }
        })
        .catch(function () {
          say(isIt
            ? "Errore di rete. Scrivici a info@greensparx.io."
            : "Network error — please email info@greensparx.io.");
        })
        .finally(function () { if (btn) btn.disabled = false; });
    });
  }

  // Footer year
  var yr = document.querySelectorAll("[data-year]");
  yr.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
