---
layout: single
title: "📚 My Research Library"
permalink: /projects/
author_profile: true
---

<style>
  /* 1. Cấu trúc Tủ sách */
  .bookshelf {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    padding: 40px 20px;
    background-color: #f4f4f4; /* Màu nền tường */
    border-radius: 10px;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
  }

  /* 2. Cái sách 3D */
  .book-container {
    perspective: 1000px; /* Tạo chiều sâu 3D */
    width: 200px;
    height: 300px;
    cursor: pointer;
  }

  .book {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); /* Hiệu ứng mượt */
    box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  }

  /* Hiệu ứng khi Hover (Sách mở/xoay ra) */
  .book-container:hover .book {
    transform: rotateY(-30deg) translateZ(20px) scale(1.05);
    box-shadow: 15px 15px 30px rgba(0,0,0,0.4);
  }

  /* Các mặt của cuốn sách */
  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2c3e50; /* Màu bìa mặc định */
    border-radius: 5px 15px 15px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 20px;
    backface-visibility: hidden; /* Ẩn mặt sau */
    z-index: 2;
  }

  /* Gáy sách (tạo độ dày) */
  .book::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
    background-color: inherit;
    transform: rotateY(90deg) translateZ(-20px);
    background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(0,0,0,0.2));
  }

  /* Ruột sách (Giả giấy trắng bên trong) */
  .book::after {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    width: 180px;
    height: 290px;
    background: #fff;
    transform: translateZ(-2px);
    border-radius: 3px 10px 10px 3px;
    box-shadow: inset 4px 0 10px rgba(0,0,0,0.1);
  }

  /* 3. Trang trí Nội dung trên bìa */
  .cover h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    border-bottom: 2px solid gold;
    padding-bottom: 5px;
    color: #fff !important;
  }

  .cover p {
    font-size: 0.85rem;
    opacity: 0; /* Ẩn mô tả bình thường */
    transform: translateY(20px);
    transition: all 0.4s ease;
  }

  /* Hiện mô tả khi hover */
  .book-container:hover .cover p {
    opacity: 1;
    transform: translateY(0);
  }

  /* Màu sắc riêng cho từng sách */
  .book-1 .cover { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); } /* Xanh dương */
  .book-2 .cover { background: linear-gradient(135deg, #d35400 0%, #e67e22 100%); } /* Cam */
  .book-3 .cover { background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); } /* Xanh lá */

  /* Kệ gỗ */
  .shelf-plank {
    width: 100%;
    height: 20px;
    background: #8e44ad;
    margin-top: -15px;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    z-index: 0;
  }
</style>

<div class="bookshelf">

  <a href="https://tech-layoff-analytics-ncta.streamlit.app/" target="_blank" style="text-decoration: none;">
    <div class="book-container">
      <div class="book book-1">
        <div class="cover">
          <h3>📉 Tech Layoffs & Macro-Econ</h3>
          <p>Analyzing the "Social Contagion" effect behind 2025 layoffs using Random Forest.</p>
          <small style="margin-top:10px; color:gold;">👉 Click to Read</small>
        </div>
      </div>
    </div>
  </a>

  <a href="#" style="text-decoration: none;">
    <div class="book-container">
      <div class="book book-2">
        <div class="cover">
          <h3>🎵 Project SEKAI Analysis</h3>
          <p>Simulating Gacha probability and Lyrics analysis.</p>
          <small style="margin-top:10px; color:yellow;">(Coming Soon)</small>
        </div>
      </div>
    </div>
  </a>

  <a href="#" style="text-decoration: none;">
    <div class="book-container">
      <div class="book book-3">
        <div class="cover">
          <h3>💹 Algorithmic Trading</h3>
          <p>Next Econ project: Mean Reversion Bot.</p>
          <small style="margin-top:10px; color:lightgreen;">(Planned)</small>
        </div>
      </div>
    </div>
  </a>

</div>
<div class="shelf-plank"></div>
