---
layout: single
title: "📚 My Research Library"
permalink: /projects/
author_profile: true
---

{% raw %}
<style>
  .bookshelf { display: flex; flex-wrap: wrap; gap: 40px; justify-content: center; padding: 40px 20px; background-color: #f4f4f4; border-radius: 10px; }
  .book-container { perspective: 1000px; width: 200px; height: 300px; cursor: pointer; }
  .book { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.6s ease; box-shadow: 5px 5px 15px rgba(0,0,0,0.3); }
  .book-container:hover .book { transform: rotateY(-30deg) translateZ(20px) scale(1.05); }
  .cover { position: absolute; width: 100%; height: 100%; border-radius: 5px 15px 15px 5px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white; padding: 20px; backface-visibility: hidden; z-index: 2; }
  .book::before { content: ''; position: absolute; top: 0; left: 0; width: 40px; height: 100%; transform: rotateY(90deg) translateZ(-20px); background: rgba(255,255,255,0.2); }
  .book::after { content: ''; position: absolute; top: 5px; right: 5px; width: 180px; height: 290px; background: #fff; transform: translateZ(-2px); border-radius: 3px 10px 10px 3px; }
  .cover h3 { font-size: 1.2rem; margin-bottom: 10px; border-bottom: 2px solid gold; padding-bottom: 5px; color: #fff !important; }
  .cover p { font-size: 0.85rem; opacity: 0; transform: translateY(20px); transition: all 0.4s ease; }
  .book-container:hover .cover p { opacity: 1; transform: translateY(0); }
  
  /* Màu sách */
  .book-1 .cover { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); }
  .book-2 .cover { background: linear-gradient(135deg, #d35400 0%, #e67e22 100%); }
  
  .shelf-plank { width: 100%; height: 20px; background: #8e44ad; margin-top: -15px; border-radius: 5px; z-index: 0; }
</style>

<div class="bookshelf">
  <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" style="text-decoration: none;">
    <div class="book-container">
      <div class="book book-1">
        <div class="cover">
          <h3>📉 Tech Layoffs</h3>
          <p>Analyzing "Social Contagion" in 2025.</p>
          <small style="margin-top:10px; color:gold;">👉 Click to Read</small>
        </div>
      </div>
    </div>
  </a>

  <div class="book-container">
    <div class="book book-2">
      <div class="cover">
        <h3>🎵 Project SEKAI</h3>
        <p>Gacha Probability Sim.</p>
        <small style="margin-top:10px; color:yellow;">(Coming Soon)</small>
      </div>
    </div>
  </div>
</div>
<div class="shelf-plank"></div>
{% endraw %}
