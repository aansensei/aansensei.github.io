---
layout: splash
title: "Semiconductor HR"
permalink: /projects/semiconductor-hr/
og_image: "/assets/images/semiconductor-cover.jpg"
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* --- ÉP THEME XÓA NỀN TRẮNG --- */
  .page__inner-wrap { max-width: 1400px !important; background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 20px !important; }
  
  /* --- BỐ CỤC 3 CỘT --- */
  .project-grid { display: grid; grid-template-columns: 250px 1fr 280px; gap: 25px; margin-top: 30px; margin-bottom: 50px; align-items: start; }
  .glass-box { background: rgba(10, 25, 47, 0.65); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

  /* --- CỘT TRÁI (MỤC LỤC LƯỚT ĐƯỢC) --- */
  .col-left { position: sticky; top: 100px; max-height: 85vh; overflow-y: auto; }
  .col-left::-webkit-scrollbar { width: 4px; }
  .col-left::-webkit-scrollbar-thumb { background: rgba(0,229,255,0.3); border-radius: 10px; }
  
  .back-btn { display: flex; align-items: center; gap: 10px; color: #00e5ff; text-decoration: none; font-weight: bold; margin-bottom: 25px; transition: 0.3s; cursor: pointer; }
  .back-btn:hover { color: #fff; transform: translateX(-5px); text-decoration: none;}
  .author-box { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 20px; }
  .author-box img { width: 90px; height: 90px; border-radius: 50%; border: 2px solid #00e5ff; object-fit: cover; box-shadow: 0 0 15px rgba(0,229,255,0.4); }
  .author-box h3 { margin: 10px 0 0; color: #fff; font-family: 'Playfair Display', serif; font-size: 1.2rem; }
  .toc-title { color: #f72585; font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; }
  .toc-list { list-style: none; padding: 0; margin: 0; }
  .toc-list li { margin-bottom: 12px; }
  .toc-list a { color: #e6f1ff; text-decoration: none; font-size: 0.95rem; transition: 0.2s; display: block;}
  .toc-list a:hover { color: #00e5ff; padding-left: 5px; }

  /* --- CỘT GIỮA --- */
  .col-main { min-height: 800px; color: #e6f1ff; line-height: 1.8; }
  .col-main h1 { font-family: 'Playfair Display', serif; color: #fff; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; margin-top: 0; }
  .col-main h2, .col-main h3 { color: #00e5ff; font-family: 'Playfair Display', serif; margin-top: 30px; margin-bottom: 10px;}
  .col-main img { border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); margin: 20px 0; max-width: 100%; display: block; }
  .col-main p, .col-main ul, .col-main ol { margin-bottom: 15px; }
  .col-main ul { padding-left: 20px; }
  .col-main li { margin-bottom: 8px; }

  /* --- CỘT PHẢI --- */
  .col-right { position: sticky; top: 100px; text-align: center; }
  .cover-img { width: 100%; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
  .proj-title { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: #fff; margin-bottom: 25px; text-shadow: 0 0 10px rgba(0,229,255,0.4); }
  .btn-action { display: block; width: 100%; padding: 12px; border-radius: 30px; margin-bottom: 15px; text-decoration: none !important; font-weight: bold; transition: all 0.3s; color: #fff !important; }
  .btn-neon-link { background: linear-gradient(45deg, #f72585, #7209b7); box-shadow: 0 4px 15px rgba(114, 9, 183, 0.4); }
  .btn-neon-link:hover { background: linear-gradient(45deg, #ff4081, #9c27b0); transform: translateY(-3px); box-shadow: 0 0 20px rgba(247, 37, 133, 0.6);}

  /* ======================================================= */
  /* HIỆU ỨNG ĐÓNG SÁCH 3D (ĐỔI SANG MÀU BÌA SEMICONDUCTOR)  */
  /* ======================================================= */
  #book-transition-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(10, 25, 47, 0.98); backdrop-filter: blur(15px); z-index: 999999; display: flex; justify-content: center; align-items: center; opacity: 0; pointer-events: none; transition: opacity 0.3s; perspective: 1500px; }
  .book-3d-wrapper { width: 230px; height: 350px; position: relative; transform-style: preserve-3d; transform: rotateX(10deg) scale(3.5) translateY(20px); transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1); }
  .book-3d-wrapper.zoom-out { transform: rotateX(10deg) scale(0.6) translateY(0); }
  .book-3d-cover-front, .book-3d-cover-back, .book-3d-page { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px 15px 15px 5px; transform-origin: left center; transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1); transform-style: preserve-3d; }
  .book-3d-cover-back { background: #111; z-index: 1; transform: translateZ(-5px); }
  
  /* Đổi màu bìa thành gradient giống bìa 2 trên kệ */
  .book-3d-cover-front { 
    z-index: 10; background: linear-gradient(45deg, #f72585, #7209b7, #4cc9f0); border: 2px solid #00e5ff;
    box-shadow: 0 0 30px rgba(114, 9, 183, 0.6); 
    transform: rotateY(-170deg); display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px;
  }
  .book-3d-cover-front h3 { color: #fff; font-family: 'Playfair Display', serif; font-size: 1.5rem; text-shadow: 0 0 10px rgba(255,255,255,0.8); transform: rotateY(180deg); backface-visibility: hidden; }

  .book-3d-page { background: #f9f9f9; border: 1px solid #ccc; }
  .book-3d-page.left { z-index: 6; transform: rotateY(-160deg); background: linear-gradient(to right, #e0e0e0, #fff); }
  .book-3d-page.right { z-index: 5; transform: rotateY(-20deg); background: linear-gradient(to left, #e0e0e0, #fff); }

  .book-3d-wrapper.close .book-3d-cover-front { transform: rotateY(0deg); }
  .book-3d-wrapper.close .book-3d-page.left { transform: rotateY(0deg); }
  .book-3d-wrapper.close .book-3d-page.right { transform: rotateY(0deg); }

  @media (max-width: 1024px) { .project-grid { grid-template-columns: 1fr; } .col-left, .col-right { position: relative; top: 0; max-height: none; overflow: visible;} }
</style>

<div class="project-grid">

  <div class="glass-box col-left">
    <a href="/projects/" class="back-btn" onclick="triggerBookClose('/projects/', event)"><i class="fas fa-arrow-left"></i> Back to Collection</a>
    <div class="author-box">
      <img src="/assets/images/avatar.jpg" alt="Avatar">
      <h3>Cao Thien An Nguyen</h3>
    </div>
    <h4 class="toc-title"><i class="fas fa-list-ul"></i> Table of Contents</h4>
    <ul class="toc-list">
      <li><a href="#my-role">My Role</a></li>
      <li><a href="#why-i-chose-this-topic">Why I Chose This Topic</a></li>
      <li><a href="#key-highlights-and-findings">Key Highlights & Findings</a></li>
      <li><a href="#results-and-policy-implications">Results & Policy Implications</a></li>
    </ul>
  </div>

  <div class="glass-box col-main">
    
    <h1>Reflection: Human Resources in Vietnam's Semiconductor Industry</h1>

    <h3 id="my-role">My Role</h3>
    <p>During my time as a Research Assistant at the University of Labour and Social Affairs in Vietnam, I had the opportunity to co-author a research paper addressing a highly critical economic and technological issue: the human resource crisis in the semiconductor sector.</p>
    <p>In this role, I spearheaded the data collection and literature review processes. I aggregated and analyzed workforce statistics, training program capacities, and industry reports from various domestic sources, including data from the Ministry of Education and Training. To establish a strong comparative framework, I conducted in-depth research on Taiwan's semiconductor growth, specifically analyzing the TSMC case study to extract actionable insights on ecosystem building and talent development. By synthesizing this quantitative and qualitative data, I mapped out the structural bottlenecks in Vietnam's current educational pipeline and helped formulate the evidence-based policy implications presented in our final manuscript.</p>

    <h3 id="why-i-chose-this-topic">Why I Chose This Topic</h3>
    <p>The semiconductor industry is the backbone of modern technology, serving as the prerequisite for advancements in artificial intelligence, the Internet of Things, and cloud storage. However, as the global market value pushes toward 800 billion USD, a massive bottleneck has emerged: a severe shortage of skilled labor. I wanted to dive deep into how this global crisis impacts Vietnam, a country rapidly trying to position itself in the global tech value chain, and see what actionable lessons we could draw from established tech giants like Taiwan.</p>

    <h3 id="key-highlights-and-findings">Key Highlights and Findings</h3>
    <p>Through our research, several striking realities came to light regarding both the global landscape and Vietnam's specific challenges:</p>
    <ul>
        <li><strong>A Global Talent Drought:</strong> The talent shortage is a worldwide phenomenon, with the United States projecting a deficit of 70,000 to 90,000 jobs in the coming years.</li>
        <li><strong>Vietnam's Supply and Demand Gap:</strong> Vietnam currently has over 40 companies specializing in circuit design, employing about 5,500 engineers. The industry actually requires between 5,000 and 10,000 new engineers annually, but domestic training can only meet about 20% of this demand.</li>
        <li><strong>The Taiwan Blueprint:</strong> Looking at Taiwan, particularly the TSMC model, we found that their success was heavily rooted in promoting indigenous research activities and creating a geographically dense ecosystem. The establishment of the Hsinchu Science Park near top technical universities was a strategic move that significantly lowered industry operating costs.</li>
        <li><strong>Educational Bottlenecks:</strong> In Vietnam, universities struggle with high investment costs for semiconductor laboratories and a distinct lack of leading industry experts to teach these highly specialized subjects.</li>
    </ul>

    <h3 id="results-and-policy-implications">Results and Policy Implications</h3>
    <p>Our research concluded that solving this crisis requires a comprehensive, multi-layered approach. We proposed several strategic policy implications to bridge the gap:</p>
    <ul>
        <li><strong>University and Industry Synergy:</strong> We emphasized the need for mixed laboratories located right on university campuses, created in direct collaboration with the industrial sector.</li>
        <li><strong>Targeted Output Standards:</strong> Educational institutions must establish output standards that align with international requirements to ensure graduates can effectively meet both domestic and global market needs.</li>
        <li><strong>Ecosystem Development:</strong> Vietnam needs to cultivate a tech ecosystem that seamlessly connects educational institutions, technology companies, and the state to optimize resources and foster sustainable development.</li>
    </ul>

    <p><em>Working on this paper was a profound experience that bridged the gap between academic research and real-world economic strategy, highlighting exactly what it takes to build a workforce for the future.</em></p>

  </div>

  <div class="glass-box col-right">
    <img src="/assets/images/figure-semi.png" alt="Semiconductor Industry Data" class="cover-img">
    <h2 class="proj-title">IRJEMS Publication</h2>
    <a href="https://irjems.org/irjems-v3i8p112.html" target="_blank" class="btn-action btn-neon-link"><i class="fas fa-book-open"></i> View Full Paper</a>
  </div>

</div>

<div id="book-transition-overlay">
  <div class="book-3d-wrapper" id="book-3d">
    <div class="book-3d-cover-back"></div>
    <div class="book-3d-page right"></div>
    <div class="book-3d-page left"></div>
    <div class="book-3d-cover-front">
        <h3>Semiconductor HR</h3>
    </div>
  </div>
</div>

<script>
  // SỬA LỖI NÚT BACK CỦA TRÌNH DUYỆT & MỞ KHÓA SCROLL
  window.addEventListener('pageshow', function(event) {
    // 1. Phục hồi lại thanh cuộn nếu người dùng bấm Back
    document.body.style.overflow = ''; 

    const overlay = document.getElementById('book-transition-overlay');
    const book = document.getElementById('book-3d');
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      book.classList.remove('close');
      book.classList.remove('zoom-out');
    }
  });

  function triggerBookClose(url, event) {
    event.preventDefault();

    // 2. KHÓA CHẶT THANH CUỘN LẠI KHI BẮT ĐẦU ĐÓNG SÁCH
    document.body.style.overflow = 'hidden';

    const overlay = document.getElementById('book-transition-overlay');
    const book = document.getElementById('book-3d');

    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';

    setTimeout(() => {
      book.classList.add('close');
      book.classList.add('zoom-out');
    }, 50);

    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  }
</script>
