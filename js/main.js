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

  // Contact form — forwards to info@greensparx.io via the visitor's email client
  // (static site, no backend). Swap for Formspree/Netlify Forms for inbox delivery.
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = function (id) { var el = form.querySelector("#" + id); return el ? el.value.trim() : ""; };
      var fname = val("fname"), lname = val("lname"), org = val("org"),
          role = val("role"), email = val("email"), message = val("message");
      var name = (fname + " " + lname).trim();
      var subject = "Website enquiry" + (name ? " — " + name : "");
      var body =
        "Name: " + name + "\n" +
        "Organisation: " + org + "\n" +
        "I am a: " + role + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message + "\n";
      window.location.href =
        "mailto:info@greensparx.io?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      var note = form.querySelector("[data-form-note]");
      if (note) {
        var isIt = (document.documentElement.lang || "").toLowerCase().indexOf("it") === 0;
        note.hidden = false;
        note.textContent = isIt
          ? "Apertura dell'app email per scrivere a info@greensparx.io…"
          : "Opening your email app to send to info@greensparx.io…";
      }
    });
  }

  // Footer year
  var yr = document.querySelectorAll("[data-year]");
  yr.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
