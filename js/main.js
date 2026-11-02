/**
 * Main Portfolio UI Controller for Rahul Patil
 * AWS Solutions Architect & DevSecOps Engineer
 */
document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.PORTFOLIO_CONFIG;
  if (!cfg) {
    console.error("PORTFOLIO_CONFIG not loaded.");
    return;
  }

  // Initialize Matrix and Terminal
  window.MatrixEffect.init();
  window.AWSCloudShell.init();

  // Populate Page Sections
  renderHero(cfg);
  renderCertifications(cfg);
  renderAbout(cfg);
  renderSkills(cfg);
  renderProjects(cfg);
  renderContact(cfg);

  // Setup Global Navigation & Interactions
  setupNavbar();
  setupThemeToggle();
  setupModalHandlers();
  setupContactForm(cfg);
  setupHintTriggers();
});

/* ==========================================================================
   RENDER HERO SECTION
   ========================================================================== */
function renderHero(cfg) {
  const p = cfg.personal;
  document.querySelectorAll(".builder-name").forEach((el) => (el.textContent = p.name));
  
  const heroTagline = document.getElementById("hero-tagline");
  if (heroTagline) heroTagline.textContent = p.tagline;

  const heroBio = document.getElementById("hero-bio");
  if (heroBio) heroBio.textContent = p.shortBio;

  const heroStatus = document.getElementById("hero-status");
  if (heroStatus) heroStatus.textContent = p.status;

  // Render Stats
  const statsContainer = document.getElementById("hero-stats-container");
  if (statsContainer && cfg.stats) {
    statsContainer.innerHTML = cfg.stats
      .map(
        (s) => `
      <div class="stat-item">
        <span class="stat-value">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>`
      )
      .join("");
  }

  // Social Links
  const githubLink = document.getElementById("nav-github-link");
  if (githubLink) githubLink.href = p.github;

  const linkedinLink = document.getElementById("hero-linkedin-link");
  if (linkedinLink) linkedinLink.href = p.linkedin;
}

/* ==========================================================================
   RENDER AWS CERTIFICATIONS SECTION
   ========================================================================== */
function renderCertifications(cfg) {
  const certsContainer = document.getElementById("certs-container");
  if (!certsContainer || !cfg.certifications) return;

  certsContainer.innerHTML = cfg.certifications
    .map(
      (c) => `
    <div class="cert-card">
      <img src="${c.badge}" alt="${c.title}" class="cert-badge-img" loading="lazy" />
      <div class="cert-info">
        <span class="cert-level-tag">AWS ${c.level} Certification</span>
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-dates">Valid: <strong>${c.issueDate}</strong> – <strong>${c.expiryDate}</strong></p>
        <div class="cert-id-row">
          <span>Verification ID:</span>
          <span class="cert-id-code">${c.credentialId}</span>
        </div>
        <a href="${c.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
          Verify on AWS Portal ↗
        </a>
      </div>
    </div>`
    )
    .join("");
}

/* ==========================================================================
   RENDER ABOUT SECTION & JOURNEY TIMELINE
   ========================================================================== */
function renderAbout(cfg) {
  const about = cfg.about;
  const bioContainer = document.getElementById("about-bio-container");
  if (bioContainer && about.paragraphs) {
    bioContainer.innerHTML = about.paragraphs.map((p) => `<p>${p}</p>`).join("");
  }

  // Core Principles
  const principlesContainer = document.getElementById("principles-container");
  if (principlesContainer && about.principles) {
    principlesContainer.innerHTML = about.principles
      .map(
        (pr) => `
      <div class="principle-card">
        <div class="principle-icon">${pr.icon}</div>
        <div class="principle-content">
          <h3 class="principle-title">${pr.title}</h3>
          <p class="principle-desc">${pr.desc}</p>
        </div>
      </div>`
      )
      .join("");
  }

  // Timeline
  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer && about.milestones) {
    timelineContainer.innerHTML = about.milestones
      .map(
        (m) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-year">${m.year}</div>
          <h4 class="timeline-heading">${m.title}</h4>
          <p class="timeline-text">${m.desc}</p>
        </div>
      </div>`
      )
      .join("");
  }
}

/* ==========================================================================
   RENDER SKILLS & TECH SUPERPOWERS
   ========================================================================== */
function renderSkills(cfg) {
  const filterContainer = document.getElementById("skills-filter-container");
  const skillsGrid = document.getElementById("skills-grid");
  if (!filterContainer || !skillsGrid) return;

  const categories = cfg.skills.categories;
  const items = cfg.skills.items;

  // Filter Buttons
  filterContainer.innerHTML = categories
    .map(
      (cat, idx) => `
    <button class="skill-filter-btn ${idx === 0 ? "active" : ""}" data-category="${cat}">
      ${cat}
    </button>`
    )
    .join("");

  function displaySkills(category = "All") {
    const filtered = category === "All" ? items : items.filter((s) => s.category === category);
    skillsGrid.innerHTML = filtered
      .map(
        (s) => `
      <div class="skill-card ${s.highlight ? "highlight" : ""}">
        <div class="skill-header">
          <span class="skill-name">${s.name}</span>
          <span class="skill-level-num">${s.level}%</span>
        </div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" style="width: ${s.level}%"></div>
        </div>
      </div>`
      )
      .join("");
  }

  displaySkills("All");

  filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("skill-filter-btn")) {
      filterContainer.querySelectorAll(".skill-filter-btn").forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      displaySkills(e.target.getAttribute("data-category"));
    }
  });
}

/* ==========================================================================
   RENDER PROJECTS SECTION
   ========================================================================== */
function renderProjects(cfg) {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = cfg.projects
    .map(
      (p) => `
    <div class="project-card" id="${p.id}">
      <div class="project-image-box">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <span class="project-badge-pill">${p.category}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          <button class="btn btn-primary open-project-modal" data-id="${p.id}">
            Architecture Details
          </button>
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            GitHub Repo ↗
          </a>
        </div>
      </div>
    </div>`
    )
    .join("");
}

/* ==========================================================================
   MODAL WINDOW HANDLER
   ========================================================================== */
function setupModalHandlers() {
  const modalOverlay = document.getElementById("project-modal-overlay");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalArchList = document.getElementById("modal-arch-list");
  const modalTags = document.getElementById("modal-tags");

  if (!modalOverlay) return;

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-project-modal");
    if (btn) {
      const projId = btn.getAttribute("data-id");
      const project = window.PORTFOLIO_CONFIG.projects.find((p) => p.id === projId);
      if (project) {
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.fullDesc;
        modalArchList.innerHTML = project.architecture.map((item) => `<li>${item}</li>`).join("");
        modalTags.innerHTML = project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("");
        modalOverlay.classList.add("active");
      }
    }
  });

  modalCloseBtn?.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
}

/* ==========================================================================
   RENDER CONTACT SECTION & INTERACTIVE FORM
   ========================================================================== */
function renderContact(cfg) {
  const p = cfg.personal;
  const contactEmailVal = document.getElementById("contact-email-val");
  if (contactEmailVal) contactEmailVal.textContent = p.email;

  const linkedinCard = document.getElementById("contact-linkedin-card");
  if (linkedinCard) linkedinCard.href = p.linkedin;

  const githubCard = document.getElementById("contact-github-card");
  if (githubCard) githubCard.href = p.github;

  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(p.email).then(() => {
        showToast("Email address copied to clipboard!");
      });
    });
  }
}

function setupContactForm(cfg) {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Transmitting to AWS Lambda...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();
      showToast("Message dispatched successfully! Thanks for reaching out to Rahul.");
    }, 1200);
  });
}

/* ==========================================================================
   NAVIGATION, THEME & VISIBLE HINT TRIGGERS
   ========================================================================== */
function setupNavbar() {
  const hamburger = document.getElementById("nav-hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  // Active Navbar indicator on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((sec) => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href*="${secId}"]`);
      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        navLink?.classList.add("active");
      } else {
        navLink?.classList.remove("active");
      }
    });
  });
}

function setupThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  themeBtn?.addEventListener("click", () => {
    const isLight = document.body.getAttribute("data-theme") === "light";
    if (isLight) {
      document.body.removeAttribute("data-theme");
      themeBtn.textContent = "🌙";
      showToast("Theme switched to AWS Cyber Dark mode.");
    } else {
      document.body.setAttribute("data-theme", "light");
      themeBtn.textContent = "☀️";
      showToast("Theme switched to Light mode.");
    }
  });
}

function setupHintTriggers() {
  const navHintBtn = document.getElementById("nav-hint-btn");
  navHintBtn?.addEventListener("click", () => {
    window.AWSCloudShell.open();
  });

  const floatingHint = document.getElementById("floating-cloudshell-hint");
  floatingHint?.addEventListener("click", () => {
    window.AWSCloudShell.open();
  });

  const heroLaunchBtn = document.getElementById("hero-terminal-btn");
  heroLaunchBtn?.addEventListener("click", () => {
    window.AWSCloudShell.open();
  });
}

function showToast(message) {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
