// Every link and disclosure also works without JavaScript.
(() => {
  const sections = Array.from(document.querySelectorAll("main > section[id]"));
  const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  let scheduled = false;
  const update = () => {
    scheduled = false;
    const header = document.querySelector(".site-header");
    const offset = header ? header.getBoundingClientRect().height + 36 : 100;
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) active = section;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = sections[sections.length - 1];
    }
    for (const link of links) {
      if (active && link.hash === `#${active.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };
  const scheduleUpdate = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);
  update();
})();
