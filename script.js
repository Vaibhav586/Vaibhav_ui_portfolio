
/* =====================================
   PROJECT INFORMATION
===================================== */

const projectDetails = {

  'mme-ai': {
    category: 'PRODUCT UI/UX · WEBSITE · DASHBOARD',
    title: 'MMe-AI — AI Business OS',
    summary: 'MMe-AI is an industry-specific AI Business Operating System built to connect leads, customers, workflows, content, automation and analytics in one experience. I designed and developed the website and dashboard.',
    objective: 'Present a complex multi-function AI SaaS product clearly — covering lead management, AI agents, workflow automation and analytics — without overwhelming the user. The website needed to communicate the value proposition fast; the dashboard needed to make business data immediately actionable.',
    approach: 'Website: dark ambient grid layout (bg #070913), indigo brand (#6366f1) for product identity, amber (#f5a524) for primary CTAs. Inter Tight for display headings, Inter for body. Dashboard: flat card system with role-based access, activity charts, audit log and a clean sidebar navigation. Design tokens kept consistent across both surfaces.',
    links: [{ label: 'Live website ↗', href: 'https://mme-ai.com' }, { label: 'Live dashboard ↗', href: 'https://mme-ai-dashboard-snowy.vercel.app' }, { label: 'Instagram ↗', href: 'https://www.instagram.com/mme_ai/' }],
    real: true
  },


  'aaruush': {
    category: 'WEB DESIGN · FRONTEND · VISUAL IDENTITY',
    title: "Aaruush '26 — Tech Fest Website",
    summary: "Aaruush is one of India's premier student-driven techno-management fests, founded in 2007 at SRMIST. The website for Aaruush '26 delivers an immersive dark experience with 3D cockpit visuals, scroll-driven animations and a structured event and timeline layout.",
    objective: 'Create a high-energy, immersive web experience that communicates the scale and ambition of the fest while remaining navigable and performant across devices.',
    approach: 'Dark base (#02040c) with orange accent (#ef6522) throughout. Scroll-driven 3D perspective grid, sticky timeline sections, glassmorphic nav pill, and a structured events grid. Montserrat and Raleway for typography. Built with Next.js and deployed at aaruush.org.',
    links: [{ label: 'Live site ↗', href: 'https://aaruush.org' }],
    real: true
  },


  w1: {
    category: 'SOCIAL MEDIA CREATIVE · INSTAGRAM',
    title: 'Thread Post',
    summary: 'An Instagram carousel/thread post designed for social media. Clean editorial layout with strong typographic hierarchy built for engagement and shareability on Instagram.',
    objective: 'Design a multi-slide Instagram post that communicates the message clearly across each frame, maintains visual consistency throughout the series and encourages users to swipe through to the end.',
    approach: 'Portrait 1080×1350 format. Consistent layout system across slides with a clear reading hierarchy — headline, supporting copy and visual element. Colour and type kept uniform across the series for a cohesive feed presence.',
    links: [{ label: 'View on Instagram ↗', href: 'https://www.instagram.com/p/DeJfhk-k7co/?img_index=1' }],
    real: true
  },


  s1: {
    category: 'SOCIAL MEDIA CREATIVE · INSTAGRAM',
    title: '04 / Social Creative',
    summary: 'An Instagram social media creative designed for engagement and visual impact on the feed.',
    objective: 'Create a visually compelling post that communicates the message clearly and stops the scroll on a busy Instagram feed.',
    approach: 'Bold composition with strong typographic hierarchy and a consistent colour palette. Designed for portrait format at 1544×1392 for maximum feed presence.',
    links: [{ label: 'View on SRMIST ↗', href: 'https://www.srmist.edu.in/wp-content/uploads/2026/02/viola-Large.png' }],
    real: true
  },


  viola: {
    category: 'SOCIAL MEDIA CREATIVE · SRMIST',
    title: 'Viola',
    summary: 'A social media creative designed for SRMIST Milan — the annual cultural fest of SRM Institute of Science and Technology. Viola is a bold, typographically-led poster built for Instagram feed and story placements.',
    objective: 'Design a visually striking social media post that captures the energy and identity of the Milan cultural fest, communicates the event name instantly and stops the scroll on a busy Instagram feed.',
    approach: 'Portrait 1080×1350 format optimised for Instagram. Strong central typography as the hero element, minimal supporting copy, high-contrast colour palette. Composition designed to read clearly at thumbnail size and hold detail at full view.',
    links: [{ label: 'View poster ↗', href: 'https://www.srmist.edu.in/wp-content/uploads/2026/02/viola-Large.png' }], {
    category: 'SOCIAL MEDIA CREATIVE · SRMIST',
    title: 'Office Gana',
    summary: 'A social media creative designed for SRMIST Milan — part of a series of event promotion posts for the cultural fest. Office Gana uses a structured editorial layout to present the event with clarity and visual consistency.',
    objective: 'Create a post that fits within the broader Milan content series while giving the Office Gana event its own distinct visual moment — clear hierarchy, immediate readability and brand alignment with SRMIST.',
    approach: 'Portrait 1080×1350 format. Structured grid-based layout with a clear content hierarchy: event name, category label and supporting detail. Palette and typographic choices kept consistent with the Milan series visual language for a cohesive feed appearance.',
    links: [{ label: 'View poster ↗', href: 'https://www.instagram.com/p/DAIpvkiNEsc/?img_index=1' }],
    real: true
  }

};



/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {

    const isOpen = navLinks.classList.toggle('is-open');

    menuToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );

  });


  navLinks.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

      navLinks.classList.remove('is-open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.setAttribute(
        'aria-label',
        'Open navigation'
      );

    });

  });

}



/* =====================================
   PROJECT FILTERS
===================================== */

const filterButtons =
  document.querySelectorAll('.filter-button');

const projectCards =
  document.querySelectorAll('.project-card');


filterButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const selectedFilter = button.dataset.filter;


    // Update active filter button
    filterButtons.forEach((item) => {

      const active = item === button;

      item.classList.toggle('is-active', active);

      item.setAttribute(
        'aria-pressed',
        String(active)
      );

    });


    // Filter project cards
    projectCards.forEach((card) => {

      const matches =
        selectedFilter === 'all' ||
        card.dataset.category === selectedFilter;

      card.hidden = !matches;

    });

  });

});



/* =====================================
   PROJECT DETAIL POPUP
===================================== */

const dialog =
  document.querySelector('#project-dialog');

const dialogTitle =
  document.querySelector('#dialog-title');

const dialogCategory =
  document.querySelector('#dialog-category');

const dialogSummary =
  document.querySelector('#dialog-summary');

const dialogObjective =
  document.querySelector('#dialog-objective');

const dialogApproach =
  document.querySelector('#dialog-approach');

const dialogClose =
  document.querySelector('.dialog-close');


let lastFocusedProject = null;


projectCards.forEach((card) => {

  card.addEventListener('click', (event) => {

    // If arrow with external link was clicked, open it and skip dialog
    const arrow = event.target.closest('.project-arrow[data-href]');
    if (arrow) {
      window.open(arrow.dataset.href, '_blank', 'noreferrer');
      return;
    }

    const project =
      projectDetails[card.dataset.project];

    if (!project) return;


    lastFocusedProject = card;


    // Insert project information
    dialogCategory.textContent = project.category;
    dialogTitle.textContent = project.title;
    dialogSummary.textContent = project.summary;
    dialogObjective.textContent = project.objective;
    dialogApproach.textContent = project.approach;

    // Live links
    const linksEl = document.querySelector('#dialog-links');
    linksEl.innerHTML = '';
    if (project.links) {
      project.links.forEach(({ label, href }) => {
        const a = document.createElement('a');
        a.href = href;
        a.target = '_blank';
        a.rel = 'noreferrer';
        a.textContent = label;
        linksEl.appendChild(a);
      });
    }

    // Hide disclaimer for real projects
    const disclaimer = document.querySelector('.dialog-disclaimer');
    if (disclaimer) disclaimer.style.display = project.real ? 'none' : '';

    // Open popup
    if (typeof dialog.showModal === 'function') {

      dialog.showModal();

      dialogClose.focus();

    } else {

      window.alert(
        `${project.title}\n\n` +
        `${project.summary}\n\n` +
        `Objective: ${project.objective}\n\n` +
        `Approach: ${project.approach}`
      );

    }

  });

});



/* =====================================
   CLOSE PROJECT POPUP
===================================== */

function closeProjectDialog() {

  if (dialog.open) {
    dialog.close();
  }

}


if (dialog && dialogClose) {

  dialogClose.addEventListener(
    'click',
    closeProjectDialog
  );


  // Close when clicking outside the popup
  dialog.addEventListener('click', (event) => {

    if (event.target === dialog) {
      closeProjectDialog();
    }

  });


  // Restore keyboard focus
  dialog.addEventListener('close', () => {

    if (lastFocusedProject) {
      lastFocusedProject.focus();
    }

  });

}



/* =====================================
   CURRENT YEAR IN FOOTER
===================================== */

const currentYear =
  document.querySelector('#current-year');

if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}
