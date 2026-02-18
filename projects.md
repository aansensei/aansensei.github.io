---
layout: single
title: "✨ My Fairy Tale Collection"
permalink: /projects/
author_profile: true
---

{% raw %}
<style>
  /* 1. TỦ SÁCH GỖ MUN (NỀN TỐI) */
  .bookshelf {
    display: flex; flex-wrap: wrap; gap: 60px; justify-content: center;
    padding: 80px 40px; 
    background-color: #1a1a1d; /* Màu đen khói */
    background-image: linear-gradient(#2c2c2e 2px, transparent 2px),
    linear-gradient(90deg, #2c2c2e 2px, transparent 2px);
    background-size: 40px 40px; /* Họa tiết lưới mờ */
    border-radius: 15px;
    box-shadow: inset 0 0 50px rgba(0,0,0,0.8);
    border: 5px solid #4e4e50;
  }
  
  .book-container {
    perspective: 2000px; /* 3D sâu hơn */
    width: 220px; height: 320px;
    cursor: pointer; position: relative;
    z-index: 1;
  }

  /* 2. CẤU TRÚC SÁCH THẬT */
  .book {
    position: relative; width: 100%; height: 100%;
    transform-style: preserve-3d;
  }

  /* BÌA TRƯỚC (CÓ ĐỘ DÀY) */
  .front-cover {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    transform-origin: left center;
    transition: transform 1s cubic-bezier(0.25, 1, 0.5, 1); /* CHẬM LẠI 20% */
    z-index: 10;
    border-radius: 3px 10px 10px 3px;
    
    /* Hiệu ứng bìa da bóng */
    box-shadow: 
      inset 4px 0 10px rgba(0,0,0,0.5), /* Bóng gáy */
      5px 5px 15px rgba(0,0,0,0.5); /* Bóng đổ xuống nền */
  }

  /* GÁY SÁCH (Khi sách đóng) */
  .front-cover::before {
    content: ''; position: absolute;
    top: 0; left: 0; width: 20px; height: 100%;
    transform: rotateY(90deg) translateZ(-10px); /* Đặt vào vị trí gáy */
    background: inherit; /* Cùng màu bìa */
    filter: brightness(0.7); /* Tối hơn bìa chút */
  }

  /* TRANG GIẤY DÀY (Nhìn từ cạnh phải khi đóng) */
  .book::after {
    content: ''; position: absolute;
    top: 5px; right: 5px; width: 20px; height: 310px; /* Độ dày cục giấy */
    background: #fff;
    transform: rotateY(90deg);
    border: 1px solid #ddd;
  }

  /* MỞ SÁCH */
  .book-container:hover .front-cover {
    transform: rotateY(-180deg);
  }

  /* 3. TRANG TRÍ BÌA (Huyền ảo hơn) */
  .cover-content {
    height: 100%; display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
    padding: 20px; color: white;
    background: inherit; border-radius: inherit;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  
  .cover-content h3 { 
    font-family: "Georgia", serif; /* Font chữ kiểu cổ tích */
    font-size: 1.3rem; margin-bottom: 15px; 
    border-bottom: 1px solid rgba(255,255,255,0.4); 
    padding-bottom: 10px; 
    color: #fff !important; 
    letter-spacing: 1px;
  }
  
  .cover-content p { 
    font-size: 0.45rem; /* NHỎ LẠI THEO YÊU CẦU */
    line-height: 1.4; opacity: 0.9; font-style: italic;
  }

  /* 4. MÀU BÌA PHA TRỘN (Gradient) */
  /* Quyển 1: Tech Layoffs (Xanh đen vũ trụ + Tím) */
  .book-1 .front-cover { 
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%); 
  }
  
  /* Quyển 2: Project SEKAI (Hồng + Cam + Tím mộng mơ) */
  .book-2 .front-cover { 
    background: linear-gradient(135deg, #FF9A9E 0%, #FECFEF 50%, #FF99AC 100%); 
  }
  
  /* Quyển 3: Coming Soon (Xám bạc bí ẩn) */
  .book-3 .front-cover { 
    background: linear-gradient(135deg, #232526 0%, #414345 100%); 
  }

  /* 5. NỘI DUNG BÊN TRONG (Trang giấy thật) */
  .inside-pages {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: #fffdf0; /* Giấy màu ngà cổ điển */
    z-index: 1; 
    display: flex; border-radius: 0 5px 5px 0;
    box-shadow: inset 10px 0 20px rgba(0,0,0,0.1);
    border: 1px solid #ccc;
    overflow: hidden;
  }
  
  .page {
    flex: 1; padding: 15px 5px;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center;
  }
  .page-left { border-right: 1px solid #e0e0e0; }
  
  .btn-link {
    display: inline-block; padding: 6px 12px;
    background-color: #333; color: #fff !important;
    text-decoration: none; border-radius: 4px;
    font-size: 0.7rem; font-weight: bold; margin-top: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  .btn-stream { background: linear-gradient(45deg, #ff6b6b, #ff4757); border: none; }

</style>

<div class="bookshelf">

  <div class="book-container book-1">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Tech Layoffs Analysis</h3>
          <p>An end-to-end analysis investigating how <strong>Macro-economic indicators</strong> (Interest rates, GDP, Inflation) influence <strong>Tech Layoff trends</strong> in 2025 using Random Forest models.</p>
        </div>
      </div>
      <div class="inside-pages">
        <div class="page page-left">
          <i class="fab fa-github" style="font-size: 20px;"></i>
          <h4 style="font-size: 0.8rem;">GitHub</h4>
          <a href="https://github.com/aansensei/tech_layoff_project" target="_blank" class="btn-link">Code</a>
        </div>
        <div class="page page-right">
          <i class="fas fa-magic" style="font-size: 20px; color: #d63031;"></i>
          <h4 style="font-size: 0.8rem;">Live Dashboard</h4>
          <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" class="btn-link btn-stream">App</a>
        </div>
      </div>
    </div>
  </div>

  <div class="book-container book-2">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3 style="color: #4a4a4a !important; border-color: rgba(0,0,0,0.2);">Project Sekai Melody</h3>
          <p style="color: #444;">Unlocking the probability secrets behind the magical Gacha songs.</p>
        </div>
      </div>
      <div class="inside-pages">
        <div class="page" style="flex: 2;">
          <h4 style="color: #999;">Writing in progress...</h4>
        </div>
      </div>
    </div>
  </div>

  <div class="book-container book-3">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Future Prophecy</h3>
          <p>Coming Soon...</p>
        </div>
      </div>
      <div class="inside-pages">
        <div class="page" style="flex: 2;">
          <h4 style="color: #999;">To be continued</h4>
        </div>
      </div>
    </div>
  </div>

</div>
{% endraw %}
