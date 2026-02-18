---
layout: single
title: "✨ My Fairy Tale Collection"
permalink: /projects/
author_profile: true
---

{% raw %}
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* --- CẤU TRÚC KỆ SÁCH --- */
  .bookshelf {
    display: flex; flex-wrap: wrap; gap: 50px; justify-content: center;
    padding: 60px 30px;
    perspective: 2000px;
    /* Đã có nền gỗ từ file custom.html nên không cần set lại ở đây */
  }

  .book-container {
    width: 220px; height: 330px; /* Tăng kích thước sách lên cho rõ */
    cursor: pointer; position: relative;
    z-index: 1; margin-bottom: 30px;
  }

  .book {
    position: relative; width: 100%; height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); /* Lật mượt mà chậm rãi */
  }

  /* --- BÌA SÁCH (FRONT COVER) --- */
  .front-cover {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    transform-origin: left center;
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: 10;
    border-radius: 8px 18px 18px 8px; /* Bo góc mềm mại hơn */
    /* Bóng đổ tạo khối 3D sâu hơn */
    box-shadow: 5px 5px 20px rgba(0,0,0,0.6), inset 0 0 10px rgba(255,255,255,0.1);
    display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
    padding: 20px;
    backface-visibility: hidden;
    border: 1px solid rgba(255,255,255,0.1); /* Viền nhẹ tạo nét */
  }

  /* Gáy sách giả */
  .front-cover::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 18px;
    background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.1));
    border-radius: 8px 0 0 8px;
    border-right: 1px solid rgba(255,255,255,0.2);
  }

  /* --- STYLE CHO TỪNG QUYỂN (MÀU + GLOW) --- */
  
  /* Quyển 1: Tech Layoffs (Xanh đen sâu thẳm) */
  .book-1 .front-cover { 
    background: linear-gradient(135deg, #09141d 0%, #1c3a4a 100%); 
    color: #e3f2fd;
  }
  
  /* Quyển 2: Project SEKAI (Hồng phấn dễ thương) */
  .book-2 .front-cover { 
    background: linear-gradient(135deg, #ffacc7 0%, #ffd3f0 100%); 
    color: #5d1049 !important; /* Chữ màu mận chín cho dễ đọc */
  }
  .book-2 .front-cover h3, .book-2 .front-cover p { color: #5d1049 !important; text-shadow: none !important; border-color: rgba(93, 16, 73, 0.2) !important;}

  /* Quyển 3: Future Prophecy (Đen bí ẩn) */
  .book-3 .front-cover { 
    background: linear-gradient(135deg, #1a1a1a 0%, #383838 100%); 
    color: #e0e0e0;
  }

  /* 🔥 QUYỂN 4 MỚI: NEON CYBERPUNK (ĐÂY RỒI HIỆU ỨNG GLOW!) */
  .book-4 .front-cover { 
    /* Gradient Neon rực rỡ */
    background: linear-gradient(45deg, #f72585, #7209b7, #4cc9f0); 
    border: 2px solid #00e5ff; /* Viền sáng xanh */
    /* Hiệu ứng phát sáng kép mạnh mẽ */
    box-shadow: 0 0 25px rgba(114, 9, 183, 0.8), 0 0 10px rgba(0, 229, 255, 0.6);
  }
  /* Chữ trên bìa Neon phải trắng và có bóng */
  .book-4 h3, .book-4 p { color: #fff !important; text-shadow: 0 0 8px rgba(0,0,0,0.8) !important; }


  /* --- FONT CHỮ TRÊN BÌA (TO VÀ ĐẸP HƠN) --- */
  .cover-content h3 { 
    font-family: "Playfair Display", serif; 
    font-size: 1.5rem !important; /* Tiêu đề to hơn */
    font-weight: 700;
    margin-bottom: 15px; 
    border-bottom: 2px solid rgba(255,255,255,0.3); 
    padding-bottom: 10px;
    line-height: 1.2;
  }
  .cover-content p { 
    font-family: 'Roboto', sans-serif;
    font-size: 0.95rem !important; /* Mô tả dễ đọc hơn */
    line-height: 1.5;
    font-weight: 400;
    opacity: 0.9;
  }


  /* --- NỘI DUNG BÊN TRONG (TRANG GIẤY XÁM BẠC SANG TRỌNG) --- */
  .inside-pages {
    position: absolute; top: 2%; left: 2%; width: 96%; height: 96%;
    /* Màu giấy xám bạc gradient nhẹ */
    background: linear-gradient(to right, #e0e0e0, #f0f0f0) !important;
    z-index: 1; border-radius: 4px 12px 12px 4px;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 20px; text-align: center;
    border: 1px solid #d0d0d0;
    /* Hiệu ứng giấy lõm vào */
    box-shadow: inset 3px 0 10px rgba(0,0,0,0.15);
  }
  
  /* Hiệu ứng lật khi di chuột */
  .book-container:hover .front-cover { transform: rotateY(-180deg); }

  /* Style nội dung bên trong */
  .inside-pages i { font-size: 32px !important; margin-bottom: 15px; } /* Icon to hơn */
  .inside-pages h4 { 
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem !important; margin: 10px 0; color: #222 !important; font-weight: bold; text-shadow: none !important;
  }
  .inside-pages small, .inside-pages p { color: #555 !important; text-shadow: none !important; font-size: 0.9rem;}

  /* Nút bấm (Màu Navy đậm, đồng bộ với web) */
  .btn-link {
    display: inline-block; padding: 8px 16px;
    background-color: #0a192f !important; color: #fff !important;
    text-decoration: none; border-radius: 30px; font-size: 0.8rem; font-weight: 500;
    margin-top: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    transition: all 0.3s;
  }
  .btn-link:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.3); background-color: #1565c0 !important;}
  
  /* Style riêng cho nút Live App (Đỏ) và View Publication (Gradient) */
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
          <p>Macro-economic indicators & trends investigation.</p>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-chart-line" style="color: #1c3a4a;"></i>
        <h4>Data Story & Dashboard</h4>
        <p>End-to-end analysis project.</p>
        <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" class="btn-link btn-red">Live App</a>
        <a href="https://github.com/aansensei/tech_layoff_project" target="_blank" class="btn-link">GitHub Code</a>
      </div>
    </div>
  </div>

  <div class="book-container book-2">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Project Sekai Melody</h3>
          <p>Unlocking Gacha probability secrets.</p>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-music" style="color: #d81b60;"></i>
        <h4>Gacha Probability Model</h4>
        <small>Writing in progress...</small>
      </div>
    </div>
  </div>
  
  <div class="book-container book-4">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Semiconductor HR</h3>
          <p>Vietnam's situation & lessons from Taiwan.</p>
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

  <div class="book-container book-3">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <h3>Future Prophecy</h3>
          <p>Algorithmic Trading Bot.</p>
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
