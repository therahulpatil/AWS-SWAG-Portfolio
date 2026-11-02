/**
 * AWS CloudShell Terminal Emulator for Rahul Patil
 * AWS Certified Solutions Architect & DevSecOps Engineer
 */
window.AWSCloudShell = (function () {
  let isInitialized = false;
  let isOpen = false;
  let soundEnabled = true;
  let commandHistory = [];
  let historyIndex = -1;
  let audioCtx = null;

  // DOM Elements
  let overlay, windowEl, outputEl, inputEl, titleHostEl, soundBtn;

  // Sound Synthesizer via native Web Audio API
  function playBeep(freq = 600, duration = 0.04, type = "sine") {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function playSuccessChime() {
    if (!soundEnabled) return;
    playBeep(523.25, 0.08, "triangle"); // C5
    setTimeout(() => playBeep(659.25, 0.08, "triangle"), 90); // E5
    setTimeout(() => playBeep(783.99, 0.15, "triangle"), 180); // G5
  }

  const AVAILABLE_COMMANDS = [
    "help",
    "whoami",
    "certs",
    "superpowers",
    "projects",
    "goto",
    "story",
    "sudo deploy",
    "matrix",
    "theme",
    "sound",
    "clear",
    "uptime",
    "date",
    "echo",
    "exit"
  ];

  function init() {
    if (isInitialized) return;

    overlay = document.getElementById("terminal-modal-overlay");
    windowEl = document.getElementById("terminal-window");
    outputEl = document.getElementById("terminal-output");
    inputEl = document.getElementById("terminal-input");
    soundBtn = document.getElementById("term-sound-toggle");

    if (!overlay || !inputEl) return;

    // Window controls
    document.getElementById("term-btn-close")?.addEventListener("click", close);
    document.getElementById("term-btn-min")?.addEventListener("click", close);
    document.getElementById("term-btn-max")?.addEventListener("click", toggleFullscreen);
    soundBtn?.addEventListener("click", toggleSound);

    // Global keyboard shortcut: `~` or `Ctrl+K`
    window.addEventListener("keydown", (e) => {
      if (e.key === "`" || e.key === "~") {
        if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" || e.target === inputEl) {
          e.preventDefault();
          toggle();
        }
      } else if (e.key === "Escape" && isOpen) {
        close();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
    });

    // Terminal Input events
    inputEl.addEventListener("keydown", handleKeyDown);

    // Suggestion chips click
    document.querySelectorAll(".cmd-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const cmd = chip.getAttribute("data-cmd");
        if (cmd) {
          executeCommand(cmd);
          inputEl.focus();
        }
      });
    });

    // Focus input on body click
    outputEl.parentElement.addEventListener("click", () => {
      inputEl.focus();
    });

    isInitialized = true;
  }

  function toggle() {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }

  function open() {
    if (!overlay) return;
    overlay.classList.add("active");
    isOpen = true;
    playBeep(880, 0.05);
    setTimeout(() => {
      inputEl.focus();
    }, 100);
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove("active");
    isOpen = false;
  }

  function toggleFullscreen() {
    if (!windowEl) return;
    windowEl.classList.toggle("fullscreen");
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    if (soundBtn) {
      soundBtn.textContent = soundEnabled ? "🔊" : "🔇";
      soundBtn.title = soundEnabled ? "Sound: ON" : "Sound: Muted";
    }
    appendOutput(`Sound effects ${soundEnabled ? "enabled" : "muted"}.`, "term-info");
    if (soundEnabled) playSuccessChime();
  }

  function handleKeyDown(e) {
    playBeep(450, 0.02);

    if (e.key === "Enter") {
      const command = inputEl.value.trim();
      if (command) {
        commandHistory.push(command);
        historyIndex = commandHistory.length;
        executeCommand(command);
      } else {
        appendOutput(`rahul@aws-cloudshell:~$ `, "term-muted");
      }
      inputEl.value = "";
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        inputEl.value = commandHistory[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        inputEl.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        inputEl.value = "";
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleAutocomplete();
    }
  }

  function handleAutocomplete() {
    const current = inputEl.value.trim().toLowerCase();
    if (!current) return;

    const matches = AVAILABLE_COMMANDS.filter((cmd) => cmd.startsWith(current));
    if (matches.length === 1) {
      inputEl.value = matches[0];
      playBeep(700, 0.03);
    } else if (matches.length > 1) {
      appendOutput(`Suggestions: ${matches.join("  |  ")}`, "term-muted");
    }
  }

  function appendOutput(htmlContent, className = "term-line") {
    const line = document.createElement("div");
    line.className = className;
    line.innerHTML = htmlContent;
    outputEl.appendChild(line);
    outputEl.parentElement.scrollTop = outputEl.parentElement.scrollHeight;
  }

  function executeCommand(rawInput) {
    const cleanCmd = rawInput.trim();
    appendOutput(`<span class="terminal-prompt">rahul@aws-cloudshell:~$</span> <span class="term-cmd-echo">${escapeHtml(cleanCmd)}</span>`);

    const parts = cleanCmd.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cleanCmd.toLowerCase().startsWith("sudo deploy")) {
      runSudoDeploy();
      return;
    }

    switch (command) {
      case "help":
        showHelp();
        break;

      case "whoami":
        showWhoAmI();
        break;

      case "certs":
      case "certifications":
        showCerts();
        break;

      case "superpowers":
      case "skills":
        showSuperpowers();
        break;

      case "projects":
        showProjects();
        break;

      case "goto":
        handleGoto(args[0]);
        break;

      case "story":
      case "journey":
      case "milestones":
        showStory();
        break;

      case "matrix":
        appendOutput("⚡ Initiating Matrix stream... Press ESC or click screen to exit.", "term-success");
        close();
        window.MatrixEffect.start();
        break;

      case "theme":
        handleTheme(args[0]);
        break;

      case "sound":
        handleSoundCmd(args[0]);
        break;

      case "clear":
      case "cls":
        outputEl.innerHTML = "";
        break;

      case "uptime":
        appendOutput("up 42 days, 13:37, 1 user, load average: 0.00, 0.01, 0.00 (AWS Amplify Serverless)", "term-info");
        break;

      case "date":
        appendOutput(new Date().toUTCString(), "term-info");
        break;

      case "echo":
        appendOutput(escapeHtml(args.join(" ")), "term-info");
        break;

      case "exit":
      case "quit":
        appendOutput("Session closed.", "term-muted");
        setTimeout(close, 250);
        break;

      default:
        appendOutput(`command not found: "${escapeHtml(cleanCmd)}". Type <span class="term-highlight">help</span> to view available commands.`, "term-error");
        playBeep(250, 0.1, "sawtooth");
        break;
    }
  }

  function showHelp() {
    playBeep(600, 0.04);
    const helpHtml = `
<div class="term-line term-highlight">Available AWS CloudShell Commands:</div>
<div class="term-table">
  <div class="term-key">whoami</div><div class="term-val">Display identity, ethos, and cloud architect bio</div>
  <div class="term-key">certs</div><div class="term-val">Display official AWS Certifications & Verification IDs</div>
  <div class="term-key">superpowers</div><div class="term-val">Display categorized technical skill metrics</div>
  <div class="term-key">projects</div><div class="term-val">Inventory of featured cloud projects with IDs</div>
  <div class="term-key">goto &lt;id&gt;</div><div class="term-val">Quick jump directly to any project card on page</div>
  <div class="term-key">story</div><div class="term-val">Read Rahul's engineering milestones & journey</div>
  <div class="term-key">sudo deploy</div><div class="term-val">Simulate an automated DevSecOps AWS Amplify deployment!</div>
  <div class="term-key">matrix</div><div class="term-val">Trigger full-screen cyber digital rain</div>
  <div class="term-key">theme [dark|light]</div><div class="term-val">Toggle UI aesthetic</div>
  <div class="term-key">sound [on|off]</div><div class="term-val">Mute or enable synthesized audio effects</div>
  <div class="term-key">clear</div><div class="term-val">Clear terminal console buffer</div>
  <div class="term-key">exit</div><div class="term-val">Minimize and close terminal window</div>
</div>
<div class="term-muted">Tip: Use Tab for autocomplete and Up/Down arrows for command history.</div>
`;
    appendOutput(helpHtml);
  }

  function showWhoAmI() {
    const p = window.PORTFOLIO_CONFIG.personal;
    const easter = window.PORTFOLIO_CONFIG.terminal.easterEggs;
    const html = `
<div class="term-line"><span class="term-highlight">Identity:</span> ${p.name} - ${p.tagline}</div>
<div class="term-line"><span class="term-highlight">Current Role:</span> DevOps Engineer Associate @ HeapTrace Technologies</div>
<div class="term-line"><span class="term-highlight">Education:</span> CDAC PGCP ITISS (Aug 2026)</div>
<div class="term-line"><span class="term-highlight">Credentials:</span> 2x AWS Certified (Solutions Architect Associate & Cloud Practitioner)</div>
<div class="term-line"><span class="term-highlight">LinkedIn:</span> <a href="${p.linkedin}" target="_blank" style="color: #00f0ff;">${p.linkedin}</a></div>
<div class="term-line"><span class="term-highlight">GitHub:</span> <a href="${p.github}" target="_blank" style="color: #00f0ff;">${p.github}</a></div>
<div class="term-line"><span class="term-highlight">Motto:</span> "${easter.motto}"</div>
<div class="term-line"><span class="term-highlight">Favorite Tech:</span> ${easter.favoriteTech}</div>
<div class="term-line"><span class="term-highlight">Secret Superpower:</span> ${easter.superpower}</div>
`;
    appendOutput(html);
  }

  function showCerts() {
    const certs = window.PORTFOLIO_CONFIG.certifications;
    let html = `<div class="term-highlight">Official AWS Certifications & Verification IDs:</div>`;
    certs.forEach((c) => {
      html += `
<div class="term-table">
  <div class="term-key">${c.level}</div>
  <div class="term-val">
    <strong>${c.title}</strong><br>
    <span class="term-muted">Valid: ${c.issueDate} – ${c.expiryDate}</span><br>
    <span class="term-info">Verification ID:</span> <span class="term-success">${c.credentialId}</span><br>
    <span class="term-muted">Portal: <a href="${c.verifyUrl}" target="_blank" style="color:#ff9900;">${c.verifyUrl}</a></span>
  </div>
</div>`;
    });
    appendOutput(html);
  }

  function showSuperpowers() {
    const skills = window.PORTFOLIO_CONFIG.skills.items;
    let html = `<div class="term-highlight">AWS Cloud, DevSecOps & Security Arsenal:</div>`;
    skills.forEach((s) => {
      const barsCount = Math.floor(s.level / 5);
      const barStr = "█".repeat(barsCount) + "░".repeat(20 - barsCount);
      const star = s.highlight ? " ★" : "";
      html += `<div class="term-line"><span class="term-info">${s.name.padEnd(28, " ")}</span> <span class="term-success">[${barStr}]</span> <span class="term-highlight">${s.level}%</span><span class="term-warn">${star}</span></div>`;
    });
    appendOutput(html);
  }

  function showProjects() {
    const projects = window.PORTFOLIO_CONFIG.projects;
    let html = `<div class="term-highlight">Featured Engineering Projects (Use <span class="term-success">goto &lt;id&gt;</span> to inspect):</div>`;
    projects.forEach((proj) => {
      html += `
<div class="term-table">
  <div class="term-key">${proj.id}</div>
  <div class="term-val"><strong>${proj.title}</strong><br><span class="term-muted">${proj.shortDesc}</span><br><span class="term-info">Tech: ${proj.tags.join(", ")}</span></div>
</div>`;
    });
    appendOutput(html);
  }

  function handleGoto(targetId) {
    if (!targetId) {
      appendOutput(`Usage: goto &lt;project-id&gt; (e.g. goto securedevops, goto aws-vpc)`, "term-warn");
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      appendOutput(`Navigating to #${targetId}...`, "term-success");
      close();
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      targetElement.classList.add("highlight-pulse");
      setTimeout(() => targetElement.classList.remove("highlight-pulse"), 2500);
    } else {
      appendOutput(`Project "${targetId}" not found. Type "projects" to view IDs.`, "term-error");
    }
  }

  function showStory() {
    const milestones = window.PORTFOLIO_CONFIG.about.milestones;
    let storyHtml = `<div class="term-highlight">Rahul Patil - Engineering Journey & Milestones:</div>`;
    milestones.forEach((m) => {
      storyHtml += `
<div class="term-table">
  <div class="term-key">${m.year}</div>
  <div class="term-val"><strong style="color: #00f0ff;">${m.title}</strong><br><span class="term-muted">${m.desc}</span></div>
</div>`;
    });
    appendOutput(storyHtml);
  }

  function runSudoDeploy() {
    playSuccessChime();
    const container = document.createElement("div");
    container.className = "deploy-pipeline";
    container.innerHTML = `
<div class="term-highlight">🚀 Triggering Automated DevSecOps & AWS Amplify Pipeline...</div>
<div class="deploy-step" id="step-1"><span class="deploy-status-icon">⏳</span> <span>Validating Terraform IaC & AWS VPC network parameters...</span></div>
<div class="deploy-step" id="step-2"><span class="deploy-status-icon">⏳</span> <span>Running SonarQube SAST & OWASP ZAP security compliance gates...</span></div>
<div class="deploy-step" id="step-3"><span class="deploy-status-icon">⏳</span> <span>Auditing container layers with Trivy & building static bundle...</span></div>
<div class="deploy-step" id="step-4"><span class="deploy-status-icon">⏳</span> <span>Deploying to AWS Amplify with global CloudFront edge distribution...</span></div>
<div class="deploy-progress-track"><div class="deploy-progress-bar" id="deploy-bar"></div></div>
`;
    outputEl.appendChild(container);
    outputEl.parentElement.scrollTop = outputEl.parentElement.scrollHeight;

    const bar = container.querySelector("#deploy-bar");
    const s1 = container.querySelector("#step-1");
    const s2 = container.querySelector("#step-2");
    const s3 = container.querySelector("#step-3");
    const s4 = container.querySelector("#step-4");

    setTimeout(() => {
      bar.style.width = "25%";
      s1.innerHTML = `<span class="term-success">✔</span> <span>Terraform validated: AWS VPC & subnet topology compliant</span>`;
      playBeep(500, 0.05);
    }, 600);

    setTimeout(() => {
      bar.style.width = "55%";
      s2.innerHTML = `<span class="term-success">✔</span> <span>Security Gates PASSED (SonarQube 0 bugs, OWASP ZAP clean)</span>`;
      playBeep(650, 0.05);
    }, 1300);

    setTimeout(() => {
      bar.style.width = "85%";
      s3.innerHTML = `<span class="term-success">✔</span> <span>Trivy audit: 0 high/critical CVEs. Static bundle optimized</span>`;
      playBeep(800, 0.05);
    }, 2000);

    setTimeout(() => {
      bar.style.width = "100%";
      s4.innerHTML = `<span class="term-success">✔</span> <span>AWS Amplify Live: 450+ CloudFront edge PoPs [100% HEALTHY]</span>`;
      playSuccessChime();
      triggerConfetti();
      appendOutput(`🎉 Portfolio deployed globally! Double AWS Certified architecture operational.`, "term-success");
    }, 2800);
  }

  function handleTheme(val) {
    if (val === "light") {
      document.body.setAttribute("data-theme", "light");
      appendOutput("Theme set to Light mode.", "term-info");
    } else if (val === "dark") {
      document.body.removeAttribute("data-theme");
      appendOutput("Theme set to AWS Cyber Dark mode.", "term-info");
    } else {
      const current = document.body.getAttribute("data-theme");
      if (current === "light") {
        document.body.removeAttribute("data-theme");
        appendOutput("Switched to AWS Cyber Dark mode.", "term-info");
      } else {
        document.body.setAttribute("data-theme", "light");
        appendOutput("Switched to Light mode.", "term-info");
      }
    }
  }

  function handleSoundCmd(val) {
    if (val === "on") {
      soundEnabled = true;
      appendOutput("Sound effects enabled.", "term-success");
    } else if (val === "off") {
      soundEnabled = false;
      appendOutput("Sound effects muted.", "term-muted");
    } else {
      toggleSound();
    }
  }

  function triggerConfetti() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "99999";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#FF9900", "#00F0FF", "#10B981", "#FFFFFF", "#F59E0B"];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 100
      });
    }

    let frame = 0;
    function anim() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      frame++;
      if (frame < 100) {
        requestAnimationFrame(anim);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(anim);
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  return {
    init,
    open,
    close,
    toggle,
    executeCommand
  };
})();
