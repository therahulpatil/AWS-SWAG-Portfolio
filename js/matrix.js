/**
 * High-Performance Digital Rain (Matrix Effect)
 * Activated via CloudShell command: `matrix`
 */
window.MatrixEffect = (function () {
  let canvas = null;
  let ctx = null;
  let interval = null;
  let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトAWSAMPLIFYLAMBDA";
  let fontSize = 14;
  let columns = 0;
  let drops = [];
  let isRunning = false;

  function init() {
    canvas = document.getElementById("matrix-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");

    window.addEventListener("resize", () => {
      if (isRunning) setupCanvas();
    });

    // Exit on Escape or click
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isRunning) {
        stop();
      }
    });

    canvas.addEventListener("click", () => {
      if (isRunning) stop();
    });

    const exitHint = document.getElementById("matrix-exit-hint");
    if (exitHint) {
      exitHint.addEventListener("click", () => stop());
    }
  }

  function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }
  }

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF66";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const char = characters.charAt(Math.floor(Math.random() * characters.length));
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Random AWS Orange highlights
      if (Math.random() > 0.94) {
        ctx.fillStyle = "#FF9900";
      } else {
        ctx.fillStyle = "#00FF66";
      }

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  function start() {
    if (!canvas) init();
    setupCanvas();
    canvas.classList.add("active");
    const exitHint = document.getElementById("matrix-exit-hint");
    if (exitHint) exitHint.classList.add("active");

    isRunning = true;
    if (interval) clearInterval(interval);
    interval = setInterval(draw, 33);
  }

  function stop() {
    if (!isRunning) return;
    isRunning = false;
    if (interval) clearInterval(interval);
    if (canvas) canvas.classList.remove("active");
    const exitHint = document.getElementById("matrix-exit-hint");
    if (exitHint) exitHint.classList.remove("active");
  }

  return {
    init,
    start,
    stop,
    isActive: () => isRunning
  };
})();
