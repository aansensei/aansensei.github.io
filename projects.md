---
layout: single
title: "✨ My Fairy Tale Collection"
permalink: /projects/
author_profile: true
---

{% raw %}
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* --- 1. SƠN LẠI KỆ SÁCH GỖ --- */
  .bookshelf {
    display: flex; flex-wrap: wrap; gap: 55px; justify-content: center;
    padding: 60px 30px;
    perspective: 2500px;
    background-color: #5d4037 !important; 
    background-image: repeating-linear-gradient(90deg, #5d4037, #5d4037 10px, #4e342e 10px, #4e342e 20px) !important;
    border: 15px solid #3e2723 !important; border-bottom: 25px solid #281a16 !important; border-radius: 8px;
    box-shadow: inset 0 0 80px rgba(0,0,0,0.8), 0 20px 50px rgba(0,0,0,0.5) !important;
  }

  /* --- 2. CẤU TRÚC SÁCH --- */
  .book-container { width: 230px; height: 380px; position: relative; z-index: 1; margin-bottom: 30px; }
  .book { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; }

  /* --- 3. BÌA SÁCH (FRONT COVER) --- */
  .front-cover {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    transform-origin: left center; transition: transform 3s cubic-bezier(0.25, 1, 0.5, 1);
    z-index: 20; border-radius: 8px 18px 18px 8px; transform-style: preserve-3d; backface-visibility: visible; 
    display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
    padding: 25px 20px; border: 1px solid rgba(255,255,255,0.15); background-color: #333; 
  }
  .book-container:hover .front-cover { transform: rotateY(-180deg); pointer-events: none !important; }
  .cover-content { backface-visibility: hidden; width: 100%; }
  .front-cover::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 20px;
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1));
    border-radius: 8px 0 0 8px; z-index: 20;
  }

  /* --- 4. MÀU SẮC TỪNG QUYỂN --- */
  .book-1 .front-cover { background: linear-gradient(135deg, #09141d 0%, #1c3a4a 100%); box-shadow: 0 0 25px rgba(28, 58, 74, 0.7); }
  .book-1 h3 { color: #ffffff !important; text-shadow: 0 0 10px rgba(255, 255, 255, 0.8) !important; }
  .book-1 p { color: #b3e5fc !important; text-shadow: 0 0 5px rgba(179, 229, 252, 0.5); }

  .book-4 .front-cover { background: linear-gradient(45deg, #f72585, #7209b7, #4cc9f0); border: 2px solid #00e5ff; box-shadow: 0 0 35px rgba(114, 9, 183, 0.8), 0 0 15px rgba(0, 229, 255, 0.8); }
  .book-4 h3, .book-4 p { color: #fff !important; text-shadow: 0 0 12px rgba(255, 255, 255, 1) !important; }

  .book-2 .front-cover { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); box-shadow: 0 0 25px rgba(255, 154, 158, 0.6); }
  .book-2 h3 { color: #880e4f !important; text-shadow: 0 0 10px rgba(255, 255, 255, 0.6) !important; }
  .book-2 p { color: #ad1457 !important; text-shadow: 0 0 2px rgba(255, 255, 255, 0.5); }

  .book-3 .front-cover { background: linear-gradient(135deg, #1a1a1a 0%, #383838 100%); box-shadow: 0 0 20px rgba(255, 255, 255, 0.25); }
  .book-3 h3 { color: #fff !important; text-shadow: 0 0 8px rgba(255, 255, 255, 0.6) !important; }
  .book-3 p { color: #ccc !important; text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }

  .cover-content h3 { font-family: "Playfair Display", serif; font-size: 1.45rem !important; font-weight: 700; margin-bottom: 15px; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px; line-height: 1.2; }
  .cover-content p { font-family: 'Roboto', sans-serif; font-size: 0.95rem !important; line-height: 1.4; margin-bottom: 0; }

  /* --- 5. NỘI DUNG BÊN TRONG --- */
  .inside-pages {
    position: absolute; top: 0; left: 0; width: 98%; height: 98%; background: linear-gradient(to right, #e0e0e0, #f5f5f5) !important; z-index: 10; border-radius: 4px 14px 14px 4px; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 15px; text-align: center; border: 1px solid #ccc; box-shadow: inset 10px 0 20px rgba(0,0,0,0.1); transform: translateZ(0); 
  }
  .inside-pages i { font-size: 30px !important; margin-bottom: 15px; }
  .inside-pages h4 { font-family: 'Playfair Display', serif; font-size: 1.2rem !important; margin: 8px 0; color: #222 !important; font-weight: bold; text-shadow: none !important; }
  .inside-pages small, .inside-pages p { color: #555 !important; text-shadow: none !important; font-size: 0.9rem;}

  /* --- 6. NÚT ĐỘNG MÀU CHO SÁCH --- */
  .btn-view-story {
    --btn-bg: linear-gradient(45deg, #00e5ff, #007bff); --btn-shadow: rgba(0, 229, 255, 0.4);
    display: inline-block; padding: 10px 25px; background: var(--btn-bg) !important; color: #fff !important; text-decoration: none; border-radius: 30px; font-size: 0.9rem; font-weight: bold; margin-top: 15px; transition: all 0.3s; box-shadow: 0 0 15px var(--btn-shadow); position: relative; cursor: pointer !important; border: none; z-index: 99999 !important; transform: translateZ(100px); 
  }
  .btn-view-story:hover { transform: translateZ(105px) scale(1.05); box-shadow: 0 0 25px var(--btn-shadow); filter: brightness(1.2); }

  /* --- 7. HIỆU ỨNG SÁCH 3D CỰC MƯỢT --- */
  #book-transition-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(10, 25, 47, 0.98); backdrop-filter: blur(15px); z-index: 999999; display: block; opacity: 0; pointer-events: none; transition: opacity 0.3s; perspective: 1500px;
  }

  .book-3d-wrapper {
    width: 230px; height: 350px; position: absolute; transform-style: preserve-3d;
    top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.01); transition: all 1.5s cubic-bezier(0.25, 1, 0.5, 1); 
  }

  .book-3d-cover-front, .book-3d-cover-back, .book-3d-page {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px 15px 15px 5px; transform-origin: left center; transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1); transform-style: preserve-3d;
  }
  .book-3d-cover-back { background: #111; transform: translateZ(-4px); }
  .book-3d-page.right { background: linear-gradient(to left, #e0e0e0, #fff); border: 1px solid #ccc; transform: translateZ(-2px); }
  .book-3d-page.left { background: linear-gradient(to right, #e0e0e0, #fff); border: 1px solid #ccc; transform: translateZ(0px); }
  
  .book-3d-cover-front { 
    border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 0 30px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px;
    transform: translateZ(2px);
  }
  .book-3d-cover-front h3 { color: #fff; font-family: 'Playfair Display', serif; font-size: 1.5rem; text-shadow: 0 0 10px rgba(255,255,255,0.5); margin: 0; transform: translateZ(1px); }

  /* Hiệu ứng Mở chữ V */
  .book-3d-wrapper.open .book-3d-cover-front { transform: translateZ(2px) rotateY(-170deg); }
  .book-3d-wrapper.open .book-3d-page.left { transform: translateZ(0px) rotateY(-160deg); transition-delay: 0.1s; }
  .book-3d-wrapper.open .book-3d-page.right { transform: translateZ(-2px) rotateY(-20deg); transition-delay: 0.2s; }
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
        <a href="/projects/tech-layoffs/" 
           class="btn-view-story" 
           style="--btn-bg: linear-gradient(135deg, #09141d 0%, #1c3a4a 100%); --btn-shadow: rgba(28, 58, 74, 0.8);"
           onclick="triggerBookOpen('/projects/tech-layoffs/', 'linear-gradient(135deg, #09141d 0%, #1c3a4a 100%)', 'Tech Layoffs Analysis', event)">
           Read Story
        </a>
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
        <a href="/projects/semiconductor-hr/" 
           class="btn-view-story" 
           style="--btn-bg: linear-gradient(45deg, #f72585, #7209b7, #4cc9f0); --btn-shadow: rgba(247, 37, 133, 0.8);"
           onclick="triggerBookOpen('/projects/semiconductor-hr/', 'linear-gradient(45deg, #f72585, #7209b7, #4cc9f0)', 'Semiconductor HR', event)">
           Read Story
        </a>
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

<div id="book-transition-overlay">
  <div class="book-3d-wrapper" id="book-3d">
    <div class="book-3d-cover-back"></div>
    <div class="book-3d-page right"></div>
    <div class="book-3d-page left"></div>
    <div class="book-3d-cover-front" id="book-3d-cover">
        <h3 id="book-3d-title"></h3>
    </div>
  </div>
</div>

<script>
  // Chống kẹt nút Back của trình duyệt
  window.addEventListener('pageshow', function(event) {
    const overlay = document.getElementById('book-transition-overlay');
    const book = document.getElementById('book-3d');
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      book.style.transition = 'none';
      book.classList.remove('open');
      book.style.transform = 'translate(-50%, -50%) scale(0.01) rotateX(10deg)';
    }
  });

  function triggerBookOpen(url, bgGradient, title, event) {
    event.preventDefault();
    const overlay = document.getElementById('book-transition-overlay');
    const book = document.getElementById('book-3d');
    const cover = document.getElementById('book-3d-cover');
    const titleEl = document.getElementById('book-3d-title');

    // 1. Lấy TỌA ĐỘ ĐẦU MŨI CHUỘT
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // 2. XÓA TRANSITION VÀ ĐẶT SÁCH VÀO MŨI CHUỘT NGAY LẬP TỨC
    book.style.transition = 'none';
    
    // Vì sách có transform: translate(-50%, -50%), nên gán left/top bằng chuột sẽ đưa TÂM quyển sách vào ĐÚNG mũi chuột
    book.style.left = mouseX + 'px';
    book.style.top = mouseY + 'px';
    
    // Thu nhỏ cực đại (gần như tàng hình) để chống lỗi chớp nháy
    book.style.transform = 'translate(-50%, -50%) scale(0.01) rotateX(10deg)';
    book.classList.remove('open');

    // Gắn màu và tiêu đề
    cover.style.background = bgGradient;
    titleEl.innerText = title;

    // 3. ÉP TRÌNH DUYỆT CẬP NHẬT GIAO DIỆN (Triệt tiêu 100% lỗi chớp màn hình)
    void book.offsetWidth;

    // 4. Mở rèm đen
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';

    // 5. Bật lại hiệu ứng và cho quyển sách bung ra giữa màn hình
    setTimeout(() => {
      book.style.transition = 'all 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
      book.style.left = '50%';
      book.style.top = '50%';
      book.style.transform = 'translate(-50%, -50%) scale(3.5) translateY(20px) rotateX(10deg)';
      book.classList.add('open'); 
    }, 50);

    setTimeout(() => { window.location.href = url; }, 1500);
  }
</script>
{% endraw %}
