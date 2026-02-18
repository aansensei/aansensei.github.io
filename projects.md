---
layout: single
title: "📚 My Research Library"
permalink: /projects/
author_profile: true
---

{% raw %}
<style>
  /* KỆ SÁCH & KHUNG BAO */
  .bookshelf {
    display: flex; flex-wrap: wrap; gap: 50px; justify-content: center;
    padding: 50px 30px; background-color: #f0f2f5; border-radius: 12px;
    box-shadow: inset 0 0 30px rgba(0,0,0,0.05);
  }
  .book-container {
    perspective: 1500px; /* Tạo chiều sâu 3D mạnh hơn */
    width: 240px; height: 340px;
    cursor: pointer; position: relative;
    z-index: 1;
  }

  /* CẤU TRÚC CUỐN SÁCH */
  .book {
    position: relative; width: 100%; height: 100%;
    transform-style: preserve-3d; /* Quan trọng để các thành phần con 3D hoạt động */
  }

  /* BÌA TRƯỚC (Sẽ lật mở) */
  .front-cover {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    transform-origin: left center; /* Trục quay là gáy sách bên trái */
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); /* Hiệu ứng mở mượt mà */
    z-index: 5; /* Luôn nằm trên cùng khi đóng */
    border-radius: 5px 15px 15px 5px;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.3);
    /* Mặt sau của bìa trước (khi mở ra sẽ thấy) */
    backface-visibility: hidden; 
  }
  
  /* HIỆU ỨNG KHI HOVER: MỞ SÁCH */
  .book-container:hover .front-cover {
    transform: rotateY(-180deg); /* Quay 180 độ sang trái */
    box-shadow: -5px 5px 20px rgba(0,0,0,0.2); /* Đổi hướng bóng */
  }

  /* TRANG TRÍ BÌA */
  .cover-content {
    height: 100%; display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
    padding: 25px; color: white;
    background: inherit; border-radius: inherit;
  }
  .cover-content h3 { color: #fff !important; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; margin-bottom: 15px; }
  .cover-content p { font-size: 0.9rem; line-height: 1.4; opacity: 0.9; }
  .click-hint { margin-top: auto; font-size: 0.8rem; opacity: 0.7; }

  /* MÀU BÌA RIÊNG */
  .book-1 .front-cover { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); } /* Navy */
  .book-2 .front-cover { background: linear-gradient(135deg, #d35400 0%, #e67e22 100%); } /* Orange */
  .book-3 .front-cover { background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); } /* Green */

  /* NỘI DUNG BÊN TRONG (2 Trang giấy) */
  .inside-pages {
    position: absolute; top: 2%; left: 0; width: 98%; height: 96%; /* Nhỏ hơn bìa chút */
    background: #ffff; /* Màu giấy trắng */
    z-index: 1; /* Nằm dưới bìa trước */
    display: flex; /* Chia làm 2 cột */
    border-radius: 0 5px 5px 0;
    box-shadow: inset -3px 0 10px rgba(0,0,0,0.1); /* Bóng gáy giữa */
    border: 1px solid #eee;
    overflow: hidden;
  }
  .page {
    flex: 1; /* Mỗi trang chiếm 50% */
    padding: 20px 10px;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
  }
  .page-left { border-right: 1px solid #f0f0f0; } /* Đường kẻ giữa 2 trang */
  
  /* Trang trí nội dung trang giấy */
  .page i { font-size: 2rem; margin-bottom: 10px; }
  .page h4 { font-size: 1rem; margin: 10px 0; color: #333; }
  .btn-link {
    display: inline-block; padding: 8px 15px;
    background-color: #2c3e50; color: #fff !important;
    text-decoration: none; border-radius: 20px;
    font-size: 0.8rem; font-weight: bold;
    transition: all 0.3s ease;
  }
  .btn-link:hover { background-color: #3498db; box-shadow: 0 3px 10px rgba(52, 152, 219, 0.4); }
  .btn-stream { background-color: #FF4B4B; } /* Màu riêng cho nút Streamlit */
  .btn-stream:hover { background-color: #ff6b6b; box-shadow: 0 3px 10px rgba(255, 75, 75, 0.4); }

  .shelf-plank { width: 100%; height: 25px; background: #8e44ad; margin-top: -20px; border-radius: 5px; box-shadow: 0 15px 30px rgba(0,0,0,0.3); position: relative; z-index: 0; }
</style>

<div class="bookshelf">

  <div class="book-container book-1">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>📉 Tech Layoffs & Macro-Econ</h3>
          <p>An end-to-end analysis investigating how <strong>Macro-economic indicators</strong> (Interest rates, GDP, Inflation) influence <strong>Tech Layoff trends</strong> in 2025 using Random Forest models.</p>
          <small class="click-hint">👉 Hover to Open Book</small>
        </div>
      </div>
      <div class="inside-pages">
        <div class="page page-left">
          <i class="fab fa-github" style="color: #333;"></i>
          <h4>Source Code</h4>
          <a href="https://github.com/aansensei/tech_layoff_project" target="_blank" class="btn-link">
            View on GitHub
          </a>
        </div>
        <div class="page page-right">
          <i class="fas fa-chart-line" style="color: #FF4B4B;"></i>
          <h4>Live Dashboard</h4>
          <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" class="btn-link btn-stream">
            View App
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="book-container book-2">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>🎵 Project SEKAI Analysis</h3>
          <p>Simulating Gacha probability rates and analyzing popular Lyrics trends.</p>
          <small class="click-hint" style="color:yellow;">👉 Hover to Peek</small>
        </div>
      </div>
      <div class="inside-pages">
        <div class="page" style="flex: 2;">
          <i class="fas fa-hourglass-half" style="color: #e67e22; opacity: 0.5;"></i>
          <h4 style="color: #999;">Coming Soon...</h4>
          <small>Project is currently in progress.</small>
        </div>
      </div>
    </div>
  </div>

  <div class="book-container book-3">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>💹 Algorithmic Trading Bot</h3>
          <p>Future Econ project exploring Mean Reversion strategies in financial markets.</p>
          <small class="click-hint" style="color:lightgreen;">(Planned)</small>
        </div>
      </div>
       <div class="inside-pages">
        <div class="page" style="flex: 2;">
          <i class="fas fa-rocket" style="color: #2ecc71; opacity: 0.5;"></i>
          <h4 style="color: #999;">Future Idea</h4>
          <small>Stay tuned for updates!</small>
        </div>
      </div>
    </div>
  </div>

</div>
<div class="shelf-plank"></div>
{% endraw %}
