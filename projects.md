---
layout: single
title: "✨ My Fairy Tale Collection"
permalink: /projects/
author_profile: true
---

{% raw %}
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* --- GIỮ NGUYÊN UI/CSS NHƯ CŨ --- */
  .bookshelf {
    display: flex; flex-wrap: wrap; gap: 55px; justify-content: center;
    padding: 60px 30px;
    perspective: 2500px;
  }

  .book-container {
    width: 230px; height: 380px;
    cursor: pointer; position: relative;
    z-index: 1; margin-bottom: 30px;
  }

  .book {
    position: relative; width: 100%; height: 100%;
    transform-style: preserve-3d;
  }

  /* BÌA SÁCH */
  .front-cover {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    transform-origin: left center;
    transition: transform 3s cubic-bezier(0.25, 1, 0.5, 1); /* Tốc độ lật 3s */
    z-index: 10;
    border-radius: 8px 18px 18px 8px;
    transform-style: preserve-3d;
    backface-visibility: visible; 
    display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
    padding: 25px 20px;
    border: 1px solid rgba(255,255,255,0.15);
  }

  .cover-content { backface-visibility: hidden; width: 100%; }

  .front-cover::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 20px;
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1));
    border-radius: 8px 0 0 8px; z-index: 20;
  }

  /* MÀU SẮC */
  /* Quyển 1 */
  .book-1 .front-cover { 
    background: linear-gradient(135deg, #09141d 0%, #1c3a4a 100%); 
    box-shadow: 0 0 25px rgba(28, 58, 74, 0.7); 
  }
  .book-1 h3 { color: #ffffff !important; text-shadow: 0 0 10px rgba(255, 255, 255, 0.8) !important; }
  .book-1 p { color: #b3e5fc !important; text-shadow: 0 0 5px rgba(179, 229, 252, 0.5); }

  /* Quyển 2 (Cũ là 4 - Semiconductor) */
  .book-4 .front-cover { 
    background: linear-gradient(45deg, #f72585, #7209b7, #4cc9f0); 
    border: 2px solid #00e5ff;
    box-shadow: 0 0 35px rgba(114, 9, 183, 0.8), 0 0 15px rgba(0, 229, 255, 0.8);
  }
  .book-4 h3, .book-4 p { color: #fff !important; text-shadow: 0 0 12px rgba(255, 255, 255, 1) !important; }

  /* Quyển 3 (Cũ là 2 - Sekai) */
  .book-2 .front-cover { 
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); 
    box-shadow: 0 0 25px rgba(255, 154, 158, 0.6);
  }
  .book-2 h3 { color: #880e4f !important; text-shadow: 0 0 10px rgba(255, 255, 255, 0.6) !important; }
  .book-2 p { color: #ad1457 !important; text-shadow: 0 0 2px rgba(255, 255, 255, 0.5); }

  /* Quyển 4 (Future) */
  .book-3 .front-cover { 
    background: linear-gradient(135deg, #1a1a1a 0%, #383838 100%); 
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
  }
  .book-3 h3 { color: #fff !important; text-shadow: 0 0 8px rgba(255, 255, 255, 0.6) !important; }
  .book-3 p { color: #ccc !important; text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }

  /* FONT */
  .cover-content h3 { 
    font-family: "Playfair Display", serif; font-size: 1.45rem !important;
    font-weight: 700; margin-bottom: 15px; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; line-height: 1.2;
  }
  .cover-content p { font-family: 'Roboto', sans-serif; font-size: 0.95rem !important; line-height: 1.4; margin-bottom: 0; }

  /* NỘI DUNG BÊN TRONG */
  .inside-pages {
    position: absolute; top: 0; left: 0; width: 98%; height: 98%;
    background: linear-gradient(to right, #e0e0e0, #f5f5f5) !important;
    z-index: 1; border-radius: 4px 14px 14px 4px;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 15px; text-align: center;
    border: 1px solid #ccc;
    box-shadow: inset 10px 0 20px rgba(0,0,0,0.1);
    transform: translateZ(-2px); 
  }
  
  .book-container:hover .front-cover { transform: rotateY(-180deg); }

  .inside-pages i { font-size: 30px !important; margin-bottom: 15px; }
  .inside-pages h4 { 
    font-family: 'Playfair Display', serif; font-size: 1.2rem !important; margin: 8px 0; 
    color: #222 !important; font-weight: bold; text-shadow: none !important;
  }
  .inside-pages small, .inside-pages p { color: #555 !important; text-shadow: none !important; font-size: 0.9rem;}

  /* BUTTONS - SỬA LỖI CLICK: Thêm transform translateZ để nổi lên */
  .btn-link {
    display: inline-block; padding: 8px 16px;
    background-color: #0a192f !important; color: #fff !important;
    text-decoration: none; border-radius: 30px; font-size: 0.75rem; font-weight: 600;
    margin-top: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: all 0.3s;
    
    /* QUAN TRỌNG: Đẩy nút nổi lên trong không gian 3D để bắt click */
    transform: translateZ(20px); 
    position: relative;
    z-index: 100;
  }
  .btn-link:hover { transform: translateZ(20px) translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.3); background-color: #1565c0 !important;}
  .btn-red { background-color: #d32f2f !important; }
  .btn-red:hover { background-color: #f44336 !important; }
  .btn-neon { background: linear-gradient(45deg, #f72585, #7209b7) !important; border: none; }
  .btn-neon:hover { background: linear-gradient(45deg, #ff4081, #9c27b0) !important; box-shadow: 0 0 15px rgba(247, 37, 133, 0.5); }

</style>

<div class="bookshelf">

  <div class="book-container book-1">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Tech Layoffs Analysis</h3>
          <p>An end-to-end analysis investigating how Macro-economic indicators influence Tech Layoff trends.</p>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-chart-line" style="color: #1c3a4a;"></i>
        <h4>Data Story & Dashboard</h4>
        <p>End-to-end analysis project.</p>
        <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" class="btn-link btn-red">Live App</a>
        <a href="https://github.com/aansensei/Tech_Layoff_Project" target="_blank" class="btn-link">GitHub Code</a>
      </div>
    </div>
  </div>

  <div class="book-container book-4">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Semiconductor HR</h3>
          <p>Current Situation of Human Resources in the Semiconductor Industry in Vietnam and Experiences From TSMC Taiwan.</p>
        </div>
      </div>
      <div class="inside-pages">
        <h4 style="font-family: 'Playfair Display', serif; color: #0d47a1 !important; font-size: 1.4rem; margin-top: 0; margin-bottom: 5px;">IRJEMS</h4>
        <i class="fas fa-microchip" style="color: #7209b7; margin-bottom: 10px;"></i>
        <p style="font-weight: 500; color: #333 !important;">Vol 3, Issue 8 (2024)</p>
        <a href="https://irjems.org/irjems-v3i8p112.html" target="_blank" class="btn-link btn-neon">View Publication</a>
      </div>
    </div>
  </div>

  <div class="book-container book-2">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Project Sekai Melody</h3>
          <p>Unlocking the probability secrets behind the magical Gacha songs.</p>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-music" style="color: #d81b60;"></i>
        <h4>Gacha Probability Model</h4>
        <small>Writing in progress...</small>
      </div>
    </div>
  </div>

  <div class="book-container book-3">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Future Prophecy</h3>
          <p>Algorithmic Trading Bot (Planned)</p>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-user-astronaut" style="color: #333;"></i>
        <h4>Trading Bot Project</h4>
        <small>(Planned)</small>
        <p>Coming Soon...</p>
      </div>
    </div>
  </div>

</div>
{% endraw %}
