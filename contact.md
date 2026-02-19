---
layout: single
title: "Let's Connect"
permalink: /contact/
author_profile: true
---

{% raw %}
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* Ẩn tiêu đề mặc định của theme để dùng tiêu đề đẹp của mình */
  .page__title { display: none; }

  #contact-section {
    padding-top: 20px;
    padding-bottom: 80px;
    text-align: center;
  }

  /* Khung kính mờ */
  .contact-card {
    background: rgba(10, 25, 47, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    padding: 50px;
    max-width: 700px;
    margin: 0 auto;
    box-shadow: 0 0 40px rgba(0, 229, 255, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  /* Hiệu ứng viền sáng chạy chạy */
  .contact-card::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 5px;
    background: linear-gradient(90deg, transparent, #00e5ff, transparent);
    animation: border-flow 3s infinite;
  }
  @keyframes border-flow { 0% {transform: translateX(-100%);} 100% {transform: translateX(100%);} }

  /* LOGO TO ĐÙNG */
  .ncta-big-logo {
    width: 400px; /* Chỉnh độ to ở đây */
    height: auto;
    margin-bottom: 30px;
    filter: drop-shadow(0 0 20px rgba(255,255,255,0.3)); /* Bóng sáng cho logo */
    transition: transform 0.5s;
  }
  .ncta-big-logo:hover { transform: scale(1.05) rotate(2deg); }

  .contact-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    color: #ffffff;
    margin-bottom: 20px;
    text-shadow: 0 0 10px rgba(0,229,255,0.5);
  }

  .contact-info p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: #e6f1ff;
    margin: 10px 0;
  }
  
  .university-text { color: #f72585; font-weight: bold; font-size: 1.3rem; }

  /* ICONS */
  .contact-icons {
    margin-top: 35px;
    display: flex; justify-content: center; gap: 30px;
  }
  .contact-icon-btn {
    font-size: 1.8rem; color: #fff; transition: all 0.3s;
    background: rgba(255,255,255,0.1); width: 50px; height: 50px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 50%; border: 1px solid rgba(255,255,255,0.2);
  }
  .contact-icon-btn:hover { 
    background: #00e5ff; color: #000; 
    transform: translateY(-5px); box-shadow: 0 0 20px rgba(0,229,255,0.6);
  }
</style>

<div id="contact-section">
  <div class="contact-card">
    <img src="/assets/images/ncta-logo.png" alt="NCTA Logo" class="ncta-big-logo">
    
    <h2 class="contact-title">Let's Connect!</h2>
    
    <div class="contact-info">
      <p class="university-text">University of Wisconsin-Madison</p>
      <p class="university-text">Cao Thien An Nguyen</p>
      <p><i class="fas fa-envelope-open-text" style="color: #00e5ff; margin-right: 10px;"></i> cnguyen49@wisc.edu</p>
    </div>

    <div class="contact-icons">
      <a href="https://github.com/aansensei" target="_blank" class="contact-icon-btn" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/cao-thien-an-nguyen/" target="_blank" class="contact-icon-btn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="mailto:cnguyen49@wisc.edu" class="contact-icon-btn" title="Send Email"><i class="fas fa-paper-plane"></i></a>
    </div>
  </div>
</div>
{% endraw %}
