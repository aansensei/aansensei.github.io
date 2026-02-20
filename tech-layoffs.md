---
layout: splash
title: "Tech Layoffs Analysis"
permalink: /projects/tech-layoffs/
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* --- ÉP THEME XÓA NỀN TRẮNG ĐỂ THẤY VAN GOGH --- */
  .page__inner-wrap {
    max-width: 1400px !important; 
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 20px !important;
  }
  
  /* --- GRID 3 CỘT --- */
  .project-grid {
    display: grid;
    grid-template-columns: 250px 1fr 280px; 
    gap: 25px;
    margin-top: 30px;
    margin-bottom: 50px;
    align-items: start;
  }

  /* --- HIỆU ỨNG KÍNH MỜ --- */
  .glass-box {
    background: rgba(10, 25, 47, 0.65);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  /* --- CỘT TRÁI --- */
  .col-left { position: sticky; top: 100px; }
  
  .back-btn { 
    display: flex; align-items: center; gap: 10px; color: #00e5ff; 
    text-decoration: none; font-weight: bold; margin-bottom: 25px; transition: 0.3s; 
    cursor: pointer;
  }
  .back-btn:hover { color: #fff; transform: translateX(-5px); text-decoration: none;}
  
  .author-box { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 20px; }
  .author-box img { width: 90px; height: 90px; border-radius: 50%; border: 2px solid #00e5ff; object-fit: cover; box-shadow: 0 0 15px rgba(0,229,255,0.4); }
  .author-box h3 { margin: 10px 0 0; color: #fff; font-family: 'Playfair Display', serif; font-size: 1.2rem; }
  
  .toc-title { color: #f72585; font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; }
  .toc-list { list-style: none; padding: 0; margin: 0; }
  .toc-list li { margin-bottom: 12px; }
  .toc-list a { color: #e6f1ff; text-decoration: none; font-size: 0.95rem; transition: 0.2s; }
  .toc-list a:hover { color: #00e5ff; padding-left: 5px; }

  /* --- CỘT GIỮA --- */
  .col-main { min-height: 800px; color: #e6f1ff; line-height: 1.8; }
  .col-main h1 { font-family: 'Playfair Display', serif; color: #fff; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; margin-top: 0; }
  .col-main h2, .col-main h3 { color: #00e5ff; font-family: 'Playfair Display', serif; margin-top: 30px; }
  .col-main img { border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); margin: 20px 0; max-width: 100%; }

  /* --- CỘT PHẢI --- */
  .col-right { position: sticky; top: 100px; text-align: center; }
  .cover-img { width: 100%; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
  .proj-title { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #fff; margin-bottom: 25px; text-shadow: 0 0 10px rgba(0,229,255,0.4); }
  
  .btn-action { 
    display: block; width: 100%; padding: 12px; border-radius: 30px; margin-bottom: 15px; 
    text-decoration: none !important; font-weight: bold; transition: all 0.3s; color: #fff !important; 
  }
  .btn-live { background: linear-gradient(45deg, #d32f2f, #f44336); box-shadow: 0 4px 15px rgba(211,47,47,0.4); }
  .btn-live:hover { background: linear-gradient(45deg, #f44336, #ff7961); transform: translateY(-3px); }
  
  .btn-git { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(5px); }
  .btn-git:hover { background: #00e5ff; color: #000 !important; transform: translateY(-3px); box-shadow: 0 4px 15px rgba(0,229,255,0.4); border-color: transparent;}

  /* --- MÀN HÌNH CHUYỂN CẢNH (DÀNH CHO NÚT BACK) --- */
  #page-transition-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(10, 25, 47, 0.95); backdrop-filter: blur(25px);
    z-index: 999999; display: flex; justify-content: center; align-items: center;
    opacity: 0; pointer-events: none; transition: opacity 0.5s ease-in-out;
  }
  #book-flip-gif {
    width: 250px; border-radius: 15px; box-shadow: 0 0 40px rgba(0, 229, 255, 0.5);
    transform: scale(0.5); transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);
  }

  /* Mobile Responsive */
  @media (max-width: 1024px) {
    .project-grid { grid-template-columns: 1fr; }
    .col-left, .col-right { position: relative; top: 0; }
  }
</style>

<div class="project-grid">

  <div class="glass-box col-left">
    <a href="/projects/" class="back-btn" onclick="triggerBookTransition('/projects/', event)"><i class="fas fa-arrow-left"></i> Back to Collection</a>
    
    <div class="author-box">
      <img src="/assets/images/avatar.jpg" alt="Avatar">
      <h3>Cao Thien An Nguyen</h3>
    </div>
    
    <h4 class="toc-title"><i class="fas fa-list-ul"></i> Table of Contents</h4>
    <ul class="toc-list">
      <li><a href="#introduction">1. Introduction</a></li>
      <li><a href="#data-collection">2. Data Collection</a></li>
      <li><a href="#eda">3. Exploratory Data Analysis</a></li>
      <li><a href="#model">4. Machine Learning Model</a></li>
      <li><a href="#conclusion">5. Conclusion</a></li>
    </ul>
  </div>

  <div class="glass-box col-main">
    <h1>Global Tech Layoffs & Macro-Economics Analysis</h1>
    
    <p>Chỗ này sau này bạn sẽ viết nội dung phân tích vào đây. Mọi thứ bạn gõ bằng Markdown hoặc HTML sẽ hiện ra ở đây.</p>
    
    <h2 id="introduction">1. Introduction</h2>
    <p>In this project, we explore how macroeconomic indicators affect layoff trends...</p>

  </div>

  <div class="glass-box col-right">
    <img src="/assets/images/tableau-dashboard.png" alt="Tableau Dashboard" class="cover-img">
    
    <h2 class="proj-title">Tech Layoffs Dashboard</h2>
    
    <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" class="btn-action btn-live"><i class="fas fa-chart-line"></i> View Live App</a>
    <a href="https://github.com/aansensei/Tech_Layoff_Project" target="_blank" class="btn-action btn-git"><i class="fab fa-github"></i> Source Code</a>
  </div>

</div>

<div id="page-transition-overlay">
  <img src="https://i.pinimg.com/originals/3d/82/66/3d82664d59bcce5b77464a93c72b5358.gif" id="book-flip-gif" alt="Flipping Book">
</div>

<script>
  function triggerBookTransition(url, event) {
    event.preventDefault(); 
    
    const overlay = document.getElementById('page-transition-overlay');
    const gif = document.getElementById('book-flip-gif');
    
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    
    setTimeout(() => {
      gif.style.transform = 'scale(2.5)'; 
    }, 100);

    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  }
</script>
