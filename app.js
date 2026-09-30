/* Take The Class Today — cinematic prototype JS
   IntersectionObserver chapter reveals + sticky nav + mobile menu */

(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* —— Reveal on scroll —— */
  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    reveals.forEach((el) => el.classList.add("is-in"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  /* —— Active chapter in nav —— */
  const chapters = document.querySelectorAll("main [data-chapter]");
  const navLinks = document.querySelectorAll(".nav a[data-chapter]");
  const setActive = (id) => {
    navLinks.forEach((a) => {
      a.classList.toggle("is-active", a.dataset.chapter === id);
    });
  };

  if ("IntersectionObserver" in window && chapters.length) {
    const chapterIo = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.dataset.chapter);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] }
    );
    chapters.forEach((el) => chapterIo.observe(el));
  }

  /* —— Mobile nav —— */
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    const close = () => {
      mobileNav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    };
    const open = () => {
      mobileNav.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    };
    toggle.addEventListener("click", () => {
      if (mobileNav.hidden) open();
      else close();
    });
    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", close);
    });
  }

  /* —— Mobile sticky CTA bar (after hero) —— */
  const stickyBar = document.getElementById("sticky-bar");
  const hero = document.getElementById("offer");
  if (stickyBar && hero && "IntersectionObserver" in window) {
    const mq = window.matchMedia("(max-width: 960px)");
    const syncBar = (heroVisible) => {
      const show = mq.matches && !heroVisible;
      stickyBar.hidden = !show;
      document.body.classList.toggle("has-sticky-bar", show);
    };
    let heroVisible = true;
    const heroIo = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        syncBar(heroVisible);
      },
      { threshold: 0.15 }
    );
    heroIo.observe(hero);
    const onMq = () => syncBar(heroVisible);
    if (mq.addEventListener) mq.addEventListener("change", onMq);
    else mq.addListener(onMq);
    syncBar(true);
  }

  /* —— Soft header elevation on scroll —— */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.style.boxShadow =
        window.scrollY > 8 ? "0 8px 28px rgba(0,0,0,0.25)" : "none";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
