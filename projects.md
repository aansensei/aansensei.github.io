---
layout: single
title: "✨ My Fairy Tale Collection"
permalink: /projects/
author_profile: true
---

{% raw %}
<style>
  /* --- CẤU TRÚC KỆ SÁCH (GIỮ NGUYÊN) --- */
  .bookshelf {
    /* Đã được định nghĩa background gỗ trong custom.html, ở đây chỉ cần layout */
    display: flex; flex-wrap: wrap; gap: 40px; justify-content: center;
    padding: 50px 20px;
    perspective: 2000px; /* Tạo chiều sâu 3D */
  }

  .book-container {
    width: 200px; height: 300px;
    cursor: pointer; position: relative;
    z-index: 1; margin-bottom: 20px;
  }

  .book {
    position: relative; width: 100%; height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }

  /* --- BÌA SÁCH --- */
  .front-cover {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    transform-origin: left center;
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: 10;
    border-radius: 5px 15px 15px 5px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
    display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
    padding: 15px;
    backface-visibility: hidden; /* Ẩn mặt sau */
  }

  /* Gáy sách giả */
  .front-cover::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 15px;
    background: rgba(0,0,0,0.2);
    border-radius: 5px 0 0 5px;
  }

  /* --- MÀU BÌA TỪNG QUYỂN --- */
  /* Quyển 1: Tech Layoffs (Xanh đen) */
  .book-1 .front-cover { background: linear-gradient(135deg, #0f2027 0%, #203a43 100%); color: #fff; }
  
  /* Quyển 2: Project SEKAI (Hồng phấn) */
  .book-2 .front-cover { background: linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%); color: #333; }
  
  /* Quyển 3: Future Prophecy (Đen huyền bí) */
  .book-3 .front-cover { background: linear-gradient(135deg, #232526 0%, #414345 100%); color: #fff; }

  /* 🔥 QUYỂN 4: RESEARCH PAPER (MÀU NEON) */
  .book-4 .front-cover { 
    /* Gradient Neon Tím - Hồng - Xanh */
    background: linear-gradient(45deg, #f72585, #7209b7, #4cc9f0); 
    border: 2px solid #00e5ff; /* Viền sáng Neon */
    box-shadow: 0 0 15px rgba(114, 9, 183, 0.6); /* Phát sáng */
  }
  .book-4 h3 { color: #fff !important; text-shadow: 0 0 5px rgba(0,0,0,0.5); }
  .book-4 p { color: #fff !important; font-weight: 500; }

  /* --- NỘI DUNG BÊN TRONG --- */
  .inside-pages {
    position: absolute; top: 2%; left: 0; width: 98%; height: 96%;
    background: #fff; /* Giấy trắng/xám (đã chỉnh global thành xám) */
    z-index: 1; border-radius: 0 5px 5px 0;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 10px; text-align: center;
    border: 1px solid #ccc;
  }
  
  /* Hiệu ứng mở sách */
  .book-container:hover .front-cover { transform: rotateY(-180deg); }

  /* Font chữ tiêu đề bìa */
  .cover-content h3 { 
    font-family: "Playfair Display", serif; 
    font-size: 1.1rem; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 5px;
  }
  .cover-content p { font-size: 0.8rem; line-height: 1.3; }

  .inside-pages h4 { font-size: 0.9rem; margin: 10px 0; color: #333 !important; }
  .btn-link {
    display: inline-block; padding: 6px 12px;
    background-color: #333; color: #fff !important;
    text-decoration: none; border-radius: 20px; font-size: 0.7rem; font-weight: bold;
    margin-top: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
</style>

<div class="bookshelf">

  <div class="book-container book-1">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Tech Layoffs Analysis</h3>
          <p>Investigating how Macro-economic indicators influence Tech Layoff trends.</p>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-chart-line" style="color: #0f2027; font-size: 20px;"></i>
        <h4>Data Story</h4>
        <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" class="btn-link" style="background: #e74c3c !important;">App</a>
        <a href="https://github.com/aansensei/tech_layoff_project" target="_blank" class="btn-link">Code</a>
      </div>
    </div>
  </div>

  <div class="book-container book-2">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3 style="color: #333 !important; border-color: rgba(0,0,0,0.1);">Project Sekai Melody</h3>
          <p style="color: #444 !important;">Unlocking probability secrets behind Gacha songs.</p>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-music" style="color: #FF9A9E; font-size: 20px;"></i>
        <h4>Gacha Sim</h4>
        <small>Writing in progress...</small>
      </div>
    </div>
  </div>
  
  <div class="book-container book-4">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Foreign Language Edu</h3>
          <p>Factors Influencing the Decision to Choose a Language Center in HCMC.</p>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-book-reader" style="color: #7209b7; font-size: 20px;"></i>
        <h4>Published on IRJEMS</h4>
        <small>Research Paper</small>
        <a href="https://irjems.org/irjems-v3i8p112.html" target="_blank" class="btn-link" style="background: #7209b7 !important;">Read PDF</a>
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
        <i class="fas fa-user-astronaut" style="color: #333; font-size: 20px;"></i>
        <h4>Coming Soon...</h4>
      </div>
    </div>
  </div>

</div>
{% endraw %}
