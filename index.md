---
layout: single
author_profile: true
title: "Hello, I'm An Nguyen! 👋"
---

<div class="reveal-item" markdown="1">
Welcome to my portfolio! I am a **Freshman at UW-Madison** double majoring in **Data Science & Economics**.

I love using data to tell stories about the economy and human behavior.
</div>

<div class="reveal-item" markdown="1">
### 🚀 Featured Projects

**[Global Tech Layoffs & Macro-Economics Analysis](https://github.com/aansensei/Tech_Layoff_Project/blob/main/README.md){:target="_blank"}**
> An end-to-end analysis using Random Forest to predict layoff trends vs. reality.
> * [View Dashboard](https://tech-layoff-analytics-ncta.streamlit.app/){:target="_blank"}
> * [View Code on GitHub](https://github.com/aansensei/tech_layoff_project){:target="_blank"}

<a href="/projects/tech-layoffs/" 
   class="btn-cta-project btn-blue"
   onclick="triggerBookOpen('/projects/tech-layoffs/', 'linear-gradient(135deg, #09141d 0%, #1c3a4a 100%)', 'Tech Layoffs Analysis', event)">✨ View in Project</a>
</div>

<br><br> 

<div class="reveal-item" markdown="1">
**[Reflection: Human Resources in Vietnam's Semiconductor Industry](https://irjems.org/irjems-v3i8p112.html){:target="_blank"}**
> Current Situation of Human Resources in the Semiconductor Industry in Vietnam and Experiences From TSMC Taiwan.
> * [View Full Paper (IRJEMS)](https://irjems.org/irjems-v3i8p112.html){:target="_blank"}

<a href="/projects/semiconductor-hr/" 
   class="btn-cta-project btn-neon"
   onclick="triggerBookOpen('/projects/semiconductor-hr/', 'linear-gradient(45deg, #f72585, #7209b7, #4cc9f0)', 'Semiconductor HR', event)">✨ View in Project</a>
</div>

<style>
  /* CSS cấu trúc chung cho nút CTA */
  .btn-cta-project {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 24px; margin-top: 10px; margin-bottom: 5px;
    color: #ffffff !important; text-decoration: none !important;
    font-weight: bold; font-size: 1rem; border-radius: 30px;
    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); /* Chỉnh lại thành 0.5s để mượt với hiệu ứng nam châm */
    cursor: pointer; position: relative; z-index: 10;
  }
  
  /* Màu Xanh cho Tech Layoffs */
  .btn-blue {
    background: linear-gradient(135deg, #00e5ff 0%, #007bff 100%);
    box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
  }
  .btn-blue:hover { box-shadow: 0 0 25px rgba(0, 229, 255, 0.8); }

  /* Màu Neon Hồng cho Semiconductor */
  .btn-neon {
    background: linear-gradient(45deg, #f72585, #7209b7);
    box-shadow: 0 0 15px rgba(247, 37, 133, 0.4);
  }
  .btn-neon:hover { box-shadow: 0 0 25px rgba(247, 37, 133, 0.8); }

  /* ======================================================= */
  /* CSS CHO SÁCH 3D ẨN (Dùng để bay ra khi click)           */
  /* ======================================================= */
  #book-transition-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(10, 25, 47, 0.98); backdrop-filter: blur(15px); z-index: 999999; display: block; opacity: 0; pointer-events: none; transition: opacity 0.3s; perspective: 1500px;
  }
  .book-3d-wrapper { width: 230px; height: 350px; position: absolute; top: 50%; left: 50%; transform-style: preserve-3d; }
  .book-3d-cover-front, .book-3d-cover-back, .book-3d-page { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px 15px 15px 5px; transform-origin: left center; transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1); transform-style: preserve-3d; }
  .book-3d-cover-back { background: #111; transform: translateZ(-4px); }
  .book-3d-page.right { background: linear-gradient(to left, #e0e0e0, #fff); border: 1px solid #ccc; transform: translateZ(-2px); }
  .book-3d-page.left { background: linear-gradient(to right, #e0e0e0, #fff); border: 1px solid #ccc; transform: translateZ(0px); }
  .book-3d-cover-front { border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 0 30px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px; transform: translateZ(2px); }
  .book-3d-cover-front h3 { color: #fff; font-family: 'Playfair Display', serif; font-size: 1.5rem; text-shadow: 0 0 10px rgba(255,255,255,0.5); margin: 0; transform: translateZ(1px); }
  .book-3d-wrapper.open .book-3d-cover-front { transform: translateZ(2px) rotateY(-170deg); }
  .book-3d-wrapper.open .book-3d-page.left { transform: translateZ(0px) rotateY(-160deg); transition-delay: 0.1s; }
  .book-3d-wrapper.open .book-3d-page.right { transform: translateZ(-2px) rotateY(-20deg); transition-delay: 0.2s; }
</style>

<div id="book-transition-overlay">
  <div class="book-3d-wrapper" id="book-3d">
    <div class="book-3d-cover-back"></div>
    <div class="book-3d-page right"></div>
    <div class="book-3d-page left"></div>
    <div class="book-3d-cover-front" id="book-3d-cover"><h3 id="book-3d-title"></h3></div>
  </div>
</div>

<script>
  window.addEventListener('pageshow', function(event) {
    const overlay = document.getElementById('book-transition-overlay');
    const book = document.getElementById('book-3d');
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      book.classList.remove('open');
      book.style.transition = 'none';
    }
  });

  function triggerBookOpen(url, bgGradient, title, event) {
    event.preventDefault(); // Chặn việc chuyển trang ngay lập tức
    const overlay = document.getElementById('book-transition-overlay');
    const book = document.getElementById('book-3d');
    const cover = document.getElementById('book-3d-cover');
    const titleEl = document.getElementById('book-3d-title');

    // Lấy tọa độ chuột
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = mouseX - centerX;
    const moveY = mouseY - centerY;

    // Tắt transition, đặt sách thu nhỏ ngay tại chuột
    book.style.transition = 'none';
    book.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(0.01) rotateX(0deg)`;
    book.classList.remove('open');

    // Đổi màu và tiêu đề cho đúng project được click
    cover.style.background = bgGradient;
    titleEl.innerText = title;

    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';

    void book.offsetWidth; // Ép trình duyệt cập nhật vị trí trước khi bay

    // Bay ra giữa màn hình và mở sách
    setTimeout(() => {
      book.style.transition = 'transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
      book.style.transform = 'translate(-50%, -50%) scale(3.5) translateY(20px) rotateX(10deg)';
      book.classList.add('open'); 
    }, 50);

    // Chuyển trang sau khi hoạt ảnh xong
    setTimeout(() => { window.location.href = url; }, 1500);
  }
</script>

---

<div class="reveal-item" markdown="1">
### 🛠️ Tech Stack
* **Languages:** Python, SQL, R
* **Libraries:** Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, Plotly
* **Tools:** Tableau, Streamlit, Git
</div>
