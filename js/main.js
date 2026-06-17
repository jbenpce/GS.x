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

  // Count-up animation for hero stats (the "living grid" touch)
  var counts = document.querySelectorAll(".count[data-to]");
  if (counts.length) {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      counts.forEach(function (el) { el.textContent = el.getAttribute("data-to"); });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target; cio.unobserve(el);
          var to = parseInt(el.getAttribute("data-to"), 10) || 0, dur = 1500, t0 = null;
          function tick(ts) {
            if (!t0) t0 = ts;
            var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(e * to).toString();
            if (p < 1) requestAnimationFrame(tick); else el.textContent = to.toString();
          }
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.4 });
      counts.forEach(function (el) { cio.observe(el); });
    }
  }

  // Contact form — submits in the background to FormSubmit.co (static-site form
  // relay → emails info@greensparx.io). No mailto, no page reload.
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
      var M = {
        en: { s: "Sending…", ok: "Thanks — your message has been sent. We'll be in touch shortly.", err: "Something went wrong — please try again, or email info@greensparx.io.", net: "Network error — please email info@greensparx.io." },
        it: { s: "Invio in corso…", ok: "Grazie — messaggio inviato. Ti ricontatteremo a breve.", err: "Si è verificato un problema. Riprova o scrivici a info@greensparx.io.", net: "Errore di rete. Scrivici a info@greensparx.io." },
        es: { s: "Enviando…", ok: "Gracias — tu mensaje se ha enviado. Te responderemos en breve.", err: "Algo ha ido mal — inténtalo de nuevo o escríbenos a info@greensparx.io.", net: "Error de red — escríbenos a info@greensparx.io." }
      };
      var t = M[lang] || M.en;
      var note = form.querySelector("[data-form-note]");
      var btn = form.querySelector('button[type="submit"]');
      function say(msg) { if (note) { note.hidden = false; note.textContent = msg; } }
      say(t.s);
      if (btn) btn.disabled = true;
      fetch("https://formsubmit.co/ajax/info@greensparx.io", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          var ok = j && (j.success === true || j.success === "true");
          if (ok) { say(t.ok); form.reset(); } else { say(t.err); }
        })
        .catch(function () { say(t.net); })
        .finally(function () { if (btn) btn.disabled = false; });
    });
  }

  // Footer year
  var yr = document.querySelectorAll("[data-year]");
  yr.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
