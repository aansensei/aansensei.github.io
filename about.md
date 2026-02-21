---
layout: single
title: "About Me"
permalink: /about/
author_profile: true
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
  /* --- LÀM ĐẸP PHẦN NỘI DUNG CHÍNH --- */
  .about-content {
    background: rgba(10, 25, 47, 0.65);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 35px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    color: #e6f1ff;
    line-height: 1.8;
    font-size: 1.05rem;
  }

  .about-cover-img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
  }

  .about-content h2 {
    color: #00e5ff;
    font-family: 'Playfair Display', serif;
    margin-top: 30px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 10px;
  }

  .highlight-quote {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: #f72585;
    text-align: center;
    margin: 30px 0;
    font-style: italic;
  }

  /* --- DANH SÁCH NGHỆ SĨ SPOTIFY (GRID CARD) --- */
  .spotify-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 25px;
  }

  .artist-card {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .artist-card:hover {
    transform: translateY(-5px);
    background: rgba(29, 185, 84, 0.1); /* Màu xanh Spotify mờ */
    border-color: #1DB954;
    box-shadow: 0 10px 20px rgba(29, 185, 84, 0.2);
  }

  .artist-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    border: 3px solid #282828;
    transition: border-color 0.3s;
  }

  .artist-card:hover .artist-img {
    border-color: #1DB954;
  }

  .artist-name {
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  .btn-spotify {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #1DB954;
    color: #fff !important;
    text-decoration: none !important;
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.2s;
  }

  .btn-spotify:hover {
    background-color: #1ed760;
    transform: scale(1.05);
  }
</style>

<div class="about-content">

  <img src="/assets/images/about-cover.jpg" alt="An Nguyen Journey" class="about-cover-img">

  <p>Xin chào mọi người! I am An(uh-n). My journey started in the vibrant streets of Ho Chi Minh City, Vietnam, and has led me all the way to Madison.</p>

  <div class="highlight-quote">
    "Where data whispers untold stories"
  </div>

  <p>To me, this phrase is the absolute core of how I see the world. I truly believe that behind every massive spreadsheet or raw dataset, there are real human experiences and hidden economic trends waiting to be discovered. Data does not just hand you the answers. It whispers them. You have to be patient, clean the noise, and listen closely with the right tools to uncover the truth.</p>

  <p>The moment I realized my true passion was when I started blending my Economics coursework with Data Science. Watching theoretical concepts like market structures or supply and demand come to life through Python visualizations was a game changer for me. I saw firsthand that numbers are not just cold statistics. They are powerful tools for telling compelling stories about human behavior and the economy.</p>

  <p>If I had to describe myself in three words, they would be: <strong>Curious, Analytical, and Driven</strong>. I am endlessly curious about how the world works, I love breaking down complex problems into solvable pieces, and I am driven to keep pushing forward even when my code throws a dozen errors.</p>

  <p>My biggest dream is to master the intersection of Data and Economics to solve real-world problems. I want to build models and dashboards that make complex economic shifts easy to understand for everyone, creating insights that can drive positive, impactful changes globally and back home in Vietnam.</p>

  <h2>Life Beyond the Screen 🍀</h2>
  <p>When I need to step away from my laptop and find some balance in Madison, I have a few favorite ways to recharge. I absolutely love playing rhythm games like <strong>Project SEKAI</strong>, which never fails to give me a burst of energy and keep my reflexes sharp. I also spend time learning Japanese by breaking down the lyrics of my favorite songs.</p>

  <p>Sometimes, the smallest things make me smile the most. It could be catching a fresh aquatic fragrance that reminds me of a gentle sea breeze, the peaceful feeling of walking around campus, or simply the immense satisfaction of finally getting my code to run flawlessly.</p>

  <h2>Vibes & Playlists 🎧</h2>
  <p>When it comes to music, I love discovering and sharing artists that bring great vibes. Some of my absolute favorite creators/bands that I think everyone should listen to include:</p>

  <div class="spotify-grid">
    
    <div class="artist-card">
      <img src="/assets/images/artist-leoneed.jpg" alt="Leo/need" class="artist-img">
      <div class="artist-name">Leo/need</div>
      <a href="https://open.spotify.com/artist/7CXyP7IN0L3ySUeIQ6Ymu1?si=339b688f842e4e8d" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> View in Spotify</a>
    </div>

    <div class="artist-card">
      <img src="/assets/images/artist-yoasobi.jpg" alt="YOASOBI" class="artist-img">
      <div class="artist-name">YOASOBI</div>
      <a href="https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj?si=-T2h4DnsRjCwgjkWzf4Pxw" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> View in Spotify</a>
    </div>

    <div class="artist-card">
      <img src="/assets/images/artist-myuk.jpg" alt="Myuk" class="artist-img">
      <div class="artist-name">Myuk</div>
      <a href="https://open.spotify.com/artist/7oVNI7cJUA5f1Qvu8vQlq9?si=sODV_eVIQXWTAqx8ZgFkuw" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> View in Spotify</a>
    </div>

    <div class="artist-card">
      <img src="/assets/images/artist-nightcord.jpg" alt="Nightcord at 25:00" class="artist-img">
      <div class="artist-name">Nightcord at 25:00</div>
      <a href="https://open.spotify.com/artist/1VMXuPyhNldYomz8ojLKP7?si=AdeZG3qUSWCNou38hXj0lQ" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> View in Spotify</a>
    </div>

    <div class="artist-card">
      <img src="/assets/images/artist-yorushika.jpg" alt="Yorushika" class="artist-img">
      <div class="artist-name">Yorushika</div>
      <a href="https://open.spotify.com/artist/4UK2Lzi6fBfUi9rpDt6cik?si=97e645c64c774bfd" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> View in Spotify</a>
    </div>

    <div class="artist-card">
      <img src="/assets/images/artist-zutomayo.jpg" alt="Zutomayo" class="artist-img">
      <div class="artist-name">Zutomayo</div>
      <a href="https://open.spotify.com/artist/38WbKH6oKAZskBhqDFA8Uj?si=27a990fb48ed43a6" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> View in Spotify</a>
    </div>

    <div class="artist-card">
      <img src="/assets/images/artist-mrsgreenapple.jpg" alt="Mrs. GREEN APPLE" class="artist-img">
      <div class="artist-name">Mrs. GREEN APPLE</div>
      <a href="https://open.spotify.com/artist/4QvgGvpgzgyUOo8Yp8LDm9?si=3ba12b499f2444a8" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> View in Spotify</a>
    </div>

    <div class="artist-card">
      <img src="/assets/images/artist-kenshi.jpg" alt="Kenshi Yonezu" class="artist-img">
      <div class="artist-name">Kenshi Yonezu</div>
      <a href="https://open.spotify.com/artist/1snhtMLeb2DYoMOcVbb8iB?si=ysSuEtYOQrCF39vBn7KP_g" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> View in Spotify</a>
    </div>

  </div> </div>
