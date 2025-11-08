<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Kaan Altıntaş — Portfolio</title>
  <meta name="description" content="Graphics portfolio: OpenGL PBR engine, volume renderer, VR mixed-reality, ISPC fractal, CUDA/WGSL experiments." />
  <meta name="color-scheme" content="light dark" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg: #0b0d10;
      --surface: #12161b;
      --text: #e6edf3;
      --muted: #a0aab6;
      --brand: #7aa2f7; /* blue */
      --brand-2: #a6da95; /* green */
      --card: #101419;
      --ring: rgba(122,162,247,.35);
      --shadow: 0 10px 30px rgba(0,0,0,.35);
      --radius-lg: 18px;
      --radius-sm: 12px;
    }
    :root.light{
      --bg: #f6f7fb;
      --surface: #ffffff;
      --text: #0b1020;
      --muted: #5b6573;
      --brand: #1c7ed6;
      --brand-2: #0ca678;
      --card: #ffffff;
      --ring: rgba(28,126,214,.25);
      --shadow: 0 10px 30px rgba(16,24,40,.08);
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background: radial-gradient(1200px 600px at 20% -10%, rgba(122,162,247,.12), transparent 60%),
                  radial-gradient(800px 400px at 100% 0%, rgba(166,218,149,.12), transparent 60%),
                  var(--bg);
      color: var(--text);
      line-height:1.6;
      -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
    }
    a{color:inherit}
    .container{width:100%; max-width:1100px; margin:0 auto; padding:32px 20px}
    header{
      position: sticky; top:0; z-index: 50; backdrop-filter: blur(10px);
      background: color-mix(in oklab, var(--bg) 80%, transparent);
      border-bottom: 1px solid color-mix(in oklab, var(--text) 12%, transparent);
    }
    .nav{display:flex; align-items:center; justify-content:space-between; gap:16px; padding:14px 0}
    .brand{display:flex; align-items:center; gap:12px; text-decoration:none}
    .logo{width:36px; height:36px; border-radius:10px; background: linear-gradient(135deg, var(--brand), var(--brand-2)); box-shadow: var(--shadow)}
    .title{font-weight:800; letter-spacing:.2px}
    .pill{display:inline-flex; align-items:center; gap:8px; border-radius:999px; padding:8px 12px; background: color-mix(in oklab, var(--surface) 75%, transparent); border:1px solid color-mix(in oklab, var(--text) 10%, transparent)}
    .pill small{color: var(--muted)}
    .actions{display:flex; align-items:center; gap:10px}
    .btn{display:inline-flex; align-items:center; gap:10px; padding:10px 14px; border-radius:12px; border:1px solid color-mix(in oklab, var(--text) 14%, transparent); background: color-mix(in oklab, var(--surface) 70%, transparent); text-decoration:none; font-weight:600}
    .btn:hover{outline:2px solid var(--ring)}
    .btn-primary{background: linear-gradient(180deg, color-mix(in oklab, var(--brand) 20%, transparent), color-mix(in oklab, var(--brand) 35%, transparent)); border-color: color-mix(in oklab, var(--brand) 40%, transparent)}

    .hero{display:grid; grid-template-columns: 1.2fr .8fr; gap:28px; align-items:center; padding:38px 0 18px}
    .hero h1{font-size: clamp(28px, 3.2vw, 42px); line-height:1.15; margin:0 0 10px; font-weight:800}
    .hero p{margin:0; color: var(--muted)}
    .hero .stack{display:flex; flex-wrap:wrap; gap:8px; margin-top:16px}
    .chip{padding:6px 10px; border-radius:999px; background: color-mix(in oklab, var(--surface) 70%, transparent); border:1px solid color-mix(in oklab, var(--text) 10%, transparent); font-size:13px}
    .statbar{display:flex; gap:18px; margin-top:18px}
    .stat{padding:14px 16px; border-radius:12px; background: color-mix(in oklab, var(--surface) 70%, transparent); border:1px solid color-mix(in oklab, var(--text) 10%, transparent)}

    .preview{
      aspect-ratio: 16/10; border-radius: 18px; overflow:hidden; position:relative; background: linear-gradient(180deg, color-mix(in oklab, var(--brand) 25%, transparent), color-mix(in oklab, var(--brand-2) 25%, transparent));
      box-shadow: var(--shadow);
    }
    .preview::after{content:""; position:absolute; inset:0; background: radial-gradient(800px 200px at -10% -20%, rgba(255,255,255,.12), transparent 60%)}
    .preview-inner{position:absolute; inset:0; display:grid; place-items:center; color:#fff; font-weight:800; letter-spacing:.5px; text-shadow: 0 8px 30px rgba(0,0,0,.45)}

    section{padding: 24px 0}

    .section-title{display:flex; align-items:center; justify-content:space-between; margin-bottom:14px}
    .section-title h2{margin:0; font-size: clamp(20px, 2.2vw, 28px)}

    .grid{display:grid; grid-template-columns: repeat(12, 1fr); gap:18px}

    .card{grid-column: span 6; background: var(--card); border:1px solid color-mix(in oklab, var(--text) 10%, transparent); border-radius: var(--radius-lg); overflow:hidden; box-shadow: var(--shadow)}
    .card .thumb{height: 160px; background: linear-gradient(135deg, color-mix(in oklab, var(--brand) 25%, transparent), color-mix(in oklab, var(--brand-2) 25%, transparent))}
    .card .body{padding:16px}
    .card h3{margin:0 0 6px; font-size:18px}
    .card p{margin:0 0 12px; color: var(--muted)}
    .card .tags{display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px}
    .card .actions{justify-content:flex-start}

    @media (max-width: 860px){
      .hero{grid-template-columns: 1fr}
      .grid .card{grid-column: span 12}
    }

    footer{padding:32px 0 60px; color: var(--muted)}
    .footer-row{display:flex; flex-wrap:wrap; gap:10px; align-items:center; justify-content:space-between}
    .social{display:flex; gap:10px}

    .kbd{font-size:12px; padding:2px 6px; border-radius:6px; border:1px solid color-mix(in oklab, var(--text) 12%, transparent); background: color-mix(in oklab, var(--surface) 70%, transparent)}
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <a class="brand" href="#top" aria-label="Home">
        <div class="logo" aria-hidden="true"></div>
        <div>
          <div class="title">Kaan Altıntaş</div>
          <small style="color:var(--muted)">Graphics</small>
        </div>
      </a>
      <div class="actions">
        <button id="themeBtn" class="btn" aria-label="Toggle theme">🌗 Theme</button>
        <a class="btn btn-primary" href="https://github.com/KaanAres10" target="_blank" rel="noreferrer">⭐ GitHub</a>
      </div>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <div>
        <div class="pill">🚀 <strong>Realtime Rendering</strong> <small>Path tracing • IBL • ReSTIR • CUDA/WGSL</small></div>
        <h1>Portfolio of interactive rendering, engines, and research experiments.</h1>
        <p>Projects span WebGL/WebGPU demos, a custom OpenGL PBR engine, VR/MR installations, and high‑performance math with ISPC.</p>
        <div class="stack">
          <span class="chip">OpenGL / GLSL</span>
          <span class="chip">WebGPU / WGSL</span>
          <span class="chip">CUDA</span>
          <span class="chip">ISPC</span>
          <span class="chip">Unity (URP)</span>
          <span class="chip">Falcor / NRD</span>
        </div>
        <div class="statbar">
          <div class="stat"><strong>6+</strong><br><small>Featured projects</small></div>
          <div class="stat"><strong>Realtime</strong><br><small>GPU‑accelerated</small></div>
          <div class="stat"><strong>Open Source</strong><br><small>GitHub Pages demos</small></div>
        </div>
      </div>
      <div class="preview">
        <div class="preview-inner">GPU Visual Computing</div>
      </div>
    </section>

    <section id="projects">
      <div class="section-title">
        <h2>Projects</h2>
        <a class="btn" href="https://github.com/KaanAres10" target="_blank" rel="noreferrer">View all →</a>
      </div>

      <div class="grid">
        <!-- Direct Volume Renderer -->
        <article class="card">
          <div class="thumb" role="img" aria-label="Direct Volume Renderer preview"></div>
          <div class="body">
            <h3>Direct Volume Renderer</h3>
            <p>Web-based DVR with transfer function editor and gradient shading.</p>
            <div class="tags">
              <span class="chip">WebGL</span><span class="chip">GLSL</span><span class="chip">Visualization</span>
            </div>
            <div class="actions">
              <a class="btn btn-primary" href="https://kaanares10.github.io/Volume-Rendering/" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>

        <!-- OpenGL Engine -->
        <article class="card">
          <div class="thumb" role="img" aria-label="OpenGL Engine preview"></div>
          <div class="body">
            <h3>Custom PBR Engine (OpenGL)</h3>
            <p>Deferred renderer with HDR, Bloom, SSAO, IBL, and GPU instancing.</p>
            <div class="tags">
              <span class="chip">OpenGL</span><span class="chip">PBR</span><span class="chip">IBL</span>
            </div>
            <div class="actions">
              <a class="btn btn-primary" href="https://kaanares10.github.io/OpenGL-Engine/" target="_blank" rel="noreferrer">Website</a>
            </div>
          </div>
        </article>

        <!-- Project Pursuit -->
        <article class="card">
          <div class="thumb" role="img" aria-label="Project Pursuit preview"></div>
          <div class="body">
            <h3>Project PURSUIT (VR + Projection)</h3>
            <p>Mixed‑reality driving experience with projector‑tracked HUD.</p>
            <div class="tags">
              <span class="chip">Unity</span><span class="chip">VR/MR</span><span class="chip">Interaction</span>
            </div>
            <div class="actions">
              <a class="btn btn-primary" href="https://kaanares10.github.io/Project-PURSUIT/" target="_blank" rel="noreferrer">Website</a>
            </div>
          </div>
        </article>

        <!-- CG Final Ray Tracer -->
        <article class="card">
          <div class="thumb" role="img" aria-label="Ray tracer preview"></div>
          <div class="body">
            <h3>CG Final Project — Ray Tracer</h3>
            <p>CPU ray tracer: materials, reflections, depth‑of‑field, and BVH.</p>
            <div class="tags">
              <span class="chip">C++</span><span class="chip">Ray Tracing</span>
            </div>
            <div class="actions">
              <a class="btn btn-primary" href="https://kaanares10.github.io/Computer-Graphics-Final-Project/" target="_blank" rel="noreferrer">Website</a>
            </div>
          </div>
        </article>

        <!-- License Plate Recognition -->
        <article class="card">
          <div class="thumb" role="img" aria-label="LPR preview"></div>
          <div class="body">
            <h3>License Plate Recognition</h3>
            <p>Classical CV + ML pipeline for detection and OCR on plate images.</p>
            <div class="tags">
              <span class="chip">OpenCV</span><span class="chip">ML</span>
            </div>
            <div class="actions">
              <a class="btn btn-primary" href="https://kaanares10.github.io/License-Plate-Recognition/" target="_blank" rel="noreferrer">Website</a>
            </div>
          </div>
        </article>

        <!-- Newton Fractal (ISPC) -->
        <article class="card">
          <div class="thumb" role="img" aria-label="Newton fractal preview"></div>
          <div class="body">
            <h3>Newton Fractal (ISPC)</h3>
            <p>CPU SIMD acceleration with ISPC/AVX2 for complex root finding.</p>
            <div class="tags">
              <span class="chip">ISPC</span><span class="chip">AVX2</span><span class="chip">Numerics</span>
            </div>
            <div class="actions">
              <a class="btn btn-primary" href="https://kaanares10.github.io/NewtonFractal-ISPC/" target="_blank" rel="noreferrer">Website</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="about">
      <div class="section-title"><h2>About</h2></div>
      <p>
        I'm a CS student and Currently at KTH/TU Delft.
      </p>
    </section>

    <section id="contact">
      <div class="section-title"><h2>Contact</h2></div>
    </section>
  </main>

  <footer>
    <div class="container footer-row">
      <div>© <span id="year"></span> Kaan Altıntaş • Built with static HTML/CSS</div>
      <div class="social">
        <span class="kbd">G</span> <a href="https://github.com/KaanAres10" target="_blank" rel="noreferrer">GitHub</a>
        <span class="kbd">L</span> <a href="#" onclick="alert('Add your LinkedIn URL in the HTML!')">LinkedIn</a>
        <span class="kbd">CV</span> <a href="#" onclick="alert('Drop your PDF in the repo and link here!')">Resume</a>
      </div>
    </div>
  </footer>

  <script>
    // Theme handling
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const stored = localStorage.getItem('theme');
    const html = document.documentElement;
    function setTheme(mode){
      if(mode==='light'){ html.classList.add('light'); }
      else{ html.classList.remove('light'); }
      localStorage.setItem('theme', mode);
    }
    setTheme(stored || (prefersLight ? 'light' : 'dark'));
    document.getElementById('themeBtn').addEventListener('click', ()=>{
      const mode = html.classList.contains('light') ? 'dark' : 'light';
      setTheme(mode);
    });
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
