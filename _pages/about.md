---
layout: single
title: "About Me"
permalink: /about/
author_profile: true
---

<style>
.about-content{background:rgba(6,4,22,.6);backdrop-filter:blur(20px);border:1px solid rgba(201,162,39,.2);border-radius:16px;padding:35px;box-shadow:0 10px 30px rgba(0,0,0,.4),inset 0 1px 0 rgba(201,162,39,.08);color:#f8f4ec;line-height:1.8;font-size:1.05rem;position:relative;}
.about-content::before{content:'';position:absolute;top:0;left:8%;right:8%;height:1px;background:linear-gradient(to right,transparent,#c9a227,transparent);}
.about-cover-img{width:100%;height:300px;object-fit:cover;border-radius:12px;margin-bottom:28px;box-shadow:0 10px 25px rgba(0,0,0,.5);border:1px solid rgba(201,162,39,.15);}
.about-content h2{color:#f0c84a!important;font-family:'Cinzel Decorative',serif!important;margin-top:30px;border-bottom:1px solid rgba(201,162,39,.2);padding-bottom:10px;text-shadow:0 0 16px rgba(201,162,39,.35)!important;}
.highlight-quote{font-family:'Cormorant Garamond',serif;font-size:1.3rem;color:#c94f7c;text-align:center;margin:28px 0;font-style:italic;}
.spotify-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:18px;margin-top:22px;}
.artist-card{background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.05);border-radius:14px;padding:18px;text-align:center;transition:all .3s ease;}
.artist-card:hover{transform:translateY(-5px);background:rgba(29,185,84,.1);border-color:#1DB954;box-shadow:0 10px 20px rgba(29,185,84,.2);}
.artist-img{width:100px;height:100px;border-radius:50%;object-fit:cover;margin-bottom:12px;border:3px solid #282828;transition:border-color .3s;}
.artist-card:hover .artist-img{border-color:#1DB954;}
.artist-name{color:#fff!important;font-weight:bold;font-size:1.05rem;margin-bottom:12px;}
.btn-spotify{display:inline-flex;align-items:center;justify-content:center;gap:7px;background-color:#1DB954;color:#fff!important;text-decoration:none!important;padding:7px 18px;border-radius:28px;font-size:.82rem;font-weight:bold;transition:background-color .3s,transform .2s;}
.btn-spotify:hover{background-color:#1ed760;transform:scale(1.05);}
:root{--song-glow:rgba(138,43,226,.5);--song-glow2:rgba(0,212,255,.5);}
.fav-song-wrapper{position:relative;margin:28px 0;}
.pixel-tag{font-family:'Press Start 2P',monospace;font-size:.45rem;background:#06041a;color:#00d4ff;padding:7px 11px;position:absolute;top:-18px;left:18px;z-index:20;display:inline-flex;align-items:center;gap:7px;box-shadow:0 -2px 0 #00d4ff,0 2px 0 #00d4ff,-2px 0 0 #00d4ff,2px 0 0 #00d4ff;text-transform:uppercase;text-shadow:0 0 5px rgba(0,212,255,.5);white-space:nowrap;}
.pixel-tag::after{content:'';position:absolute;bottom:-4px;left:14px;width:4px;height:4px;background:#06041a;box-shadow:-2px 0 0 #00d4ff,2px 0 0 #00d4ff,0 2px 0 #00d4ff;}
.song-card{background:rgba(15,23,42,.75);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:20px;box-shadow:0 10px 30px -10px rgba(0,0,0,.6),0 0 20px var(--song-glow),inset 0 0 10px rgba(255,255,255,.04);transition:box-shadow .4s,transform .4s;cursor:pointer;position:relative;overflow:visible;}
.song-card:hover{box-shadow:0 15px 35px -5px rgba(0,0,0,.7),0 0 30px var(--song-glow2),inset 0 0 15px rgba(255,255,255,.07);transform:translateY(-2px);}
.vinyl-container{position:relative;width:76px;height:76px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background-image:repeating-radial-gradient(#111,#111 4px,#222 5px,#222 6px);box-shadow:0 0 10px rgba(0,0,0,.8),inset 0 0 5px #333;}
.vinyl-container::before{content:'';position:absolute;inset:0;border-radius:50%;background:linear-gradient(135deg,rgba(255,255,255,.35) 0%,transparent 40%,transparent 60%,rgba(255,255,255,.08) 100%);pointer-events:none;z-index:10;}
.vinyl-cover{width:32px;height:32px;border-radius:50%;background-color:#1e293b;background-image:url('/assets/images/favorite-song.png');background-size:cover;background-position:center;border:2px solid #000;position:relative;}
.vinyl-cover::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:8px;background:#111;border-radius:50%;}
.vinyl-glow{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle,rgba(0,212,255,.2),rgba(138,43,226,.1));filter:blur(8px);z-index:-1;animation:song-pulse 2s ease-in-out infinite;}
@keyframes song-pulse{0%,100%{opacity:.6}50%{opacity:1}}
@keyframes vinyl-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.song-card.playing .vinyl-container{animation:vinyl-spin 4s linear infinite;}
.song-progress-bar{height:4px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden;}
.song-progress-fill{height:100%;width:38%;background:linear-gradient(90deg,#00d4ff,#8a2be2);border-radius:4px;box-shadow:0 0 8px #00d4ff;}
.song-expand-icon{transition:transform .4s ease;color:rgba(255,255,255,.5);}
.song-card.expanded .song-expand-icon{transform:rotate(180deg);}
.song-expandable{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s ease-in-out;}
.song-card.expanded .song-expandable{grid-template-rows:1fr;}
.song-expandable-inner{overflow:hidden;opacity:0;transition:opacity .4s ease-in-out;}
.song-card.expanded .song-expandable-inner{opacity:1;transition-delay:.2s;}
.song-divider{height:1px;background:linear-gradient(to right,transparent,rgba(0,212,255,.4),transparent);margin:16px 0;}
.song-why-box{background:rgba(0,0,0,.25);border-radius:14px;padding:16px;border:1px solid rgba(255,255,255,.06);position:relative;}
.song-btn-row{display:flex;gap:10px;flex-wrap:wrap;}
.song-btn{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 16px;border-radius:12px;font-weight:700;font-size:.85rem;text-decoration:none!important;transition:all .3s;position:relative;overflow:hidden;flex:1;min-width:130px;}
.song-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(45deg,transparent,rgba(255,255,255,.18),transparent);transform:translateX(-100%);transition:.5s;}
.song-btn:hover::before{transform:translateX(100%);}
.song-btn-spotify{background:rgba(29,185,84,.15);border:1px solid rgba(29,185,84,.45);color:#fff!important;box-shadow:0 0 14px rgba(29,185,84,.25);}
.song-btn-spotify:hover{background:rgba(29,185,84,.35)!important;}
.song-btn-youtube{background:rgba(255,0,0,.15);border:1px solid rgba(255,0,0,.45);color:#fff!important;box-shadow:0 0 14px rgba(255,0,0,.25);}
.song-btn-youtube:hover{background:rgba(255,0,0,.35)!important;}
.music-note{position:absolute;pointer-events:none;animation:noteFloat 2s ease-out forwards;z-index:100;font-style:normal;}
@keyframes noteFloat{0%{transform:translateY(0) scale(.5) rotate(0deg);opacity:0}20%{opacity:1;transform:translateY(-20px) scale(1.2) rotate(15deg)}100%{transform:translateY(-90px) scale(1) rotate(-15deg);opacity:0}}
@media(max-width:520px){.song-btn{min-width:0;font-size:.78rem;padding:9px 12px;}.vinyl-container{width:62px;height:62px;}.vinyl-cover{width:26px;height:26px;}}
</style>

<div class="about-content">

  <img src="/assets/images/about-cover.jpg" alt="An Nguyen" class="about-cover-img reveal-item">

  <p>Xin chào mọi người! I am Ân (uh-n). My journey started in the vibrant streets of Ho Chi Minh City, Vietnam, and has led me all the way to Madison.</p>

  <div class="highlight-quote">"Where data whispers untold stories"</div>

  <p>To me, this phrase is the absolute core of how I see the world. I truly believe that behind every massive spreadsheet or raw dataset, there are real human experiences and hidden economic trends waiting to be discovered. Data does not just hand you the answers. It whispers them. You have to be patient, clean the noise, and listen closely with the right tools to uncover the truth.</p>

  <p>The moment I realized my true passion was when I started blending my Economics coursework with Data Science. Watching theoretical concepts like market structures or supply and demand come to life through Python visualizations was a game changer for me. I saw firsthand that numbers are not just cold statistics. They are powerful tools for telling compelling stories about human behavior and the economy.</p>

  <p>If I had to describe myself in three words, they would be: <strong>Curious, Analytical, and Driven</strong>. I am endlessly curious about how the world works, I love breaking down complex problems into solvable pieces, and I am driven to keep pushing forward even when my code throws a dozen errors.</p>

  <p>My biggest dream is to master the intersection of Data and Economics to solve real-world problems. I want to build models and dashboards that make complex economic shifts easy to understand for everyone, creating insights that can drive positive, impactful changes globally and back home in Vietnam.</p>

  <h2>Life Beyond the Screen</h2>

  <!-- Favorite Song Card -->
  <div class="fav-song-wrapper">
    <div class="pixel-tag">My Favorite Song <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="#ff77ff" style="shape-rendering:crispEdges;flex-shrink:0;"><rect x="2" y="2" width="2" height="1"/><rect x="7" y="2" width="2" height="1"/><rect x="1" y="3" width="4" height="1"/><rect x="6" y="3" width="4" height="1"/><rect x="1" y="4" width="9" height="1"/><rect x="1" y="5" width="9" height="1"/><rect x="2" y="6" width="7" height="1"/><rect x="3" y="7" width="5" height="1"/><rect x="4" y="8" width="3" height="1"/><rect x="5" y="9" width="1" height="1"/></svg></div>
    <div id="song-card" class="song-card playing">
      <!-- Header row -->
      <div style="display:flex;align-items:center;gap:16px;position:relative;z-index:1;">
        <!-- Vinyl -->
        <div style="position:relative;flex-shrink:0;width:76px;height:76px;">
          <div class="vinyl-container" style="width:76px;height:76px;"><div style="width:10px;height:10px;border-radius:50%;background:#111;border:1px solid #333;position:relative;z-index:1;"></div></div>
          <img src="/assets/images/favorite-song.png" alt="SToRY" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:36px;height:36px;object-fit:cover;z-index:15;pointer-events:none;">
          <svg style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:20;pointer-events:none;opacity:.9;filter:drop-shadow(0 0 3px #00d4ff);width:40px;height:40px;shape-rendering:crispEdges;" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="38" height="38" stroke="#00d4ff" stroke-width="1" stroke-dasharray="2 2"/><rect x="0" y="0" width="3" height="3" fill="#ff77ff"/><rect x="35" y="0" width="3" height="3" fill="#ff77ff"/><rect x="0" y="35" width="3" height="3" fill="#ff77ff"/><rect x="35" y="35" width="3" height="3" fill="#ff77ff"/></svg>
          <div class="vinyl-glow"></div>
        </div>
        <!-- Info + progress -->
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
            <span style="color:#fff;font-weight:800;font-size:1.05rem;letter-spacing:.02em;">SToRY</span>
            <i class="fa-solid fa-star" style="color:#fde047;font-size:.7rem;animation:bounce 2s infinite;"></i>
          </div>
          <p style="color:#67e8f9;font-size:.8rem;font-weight:700;opacity:.85;margin:0 0 10px;">Leo/need</p>
          <div style="display:flex;align-items:center;gap:10px;">
            <button id="song-play-btn" style="width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;transition:background .2s;flex-shrink:0;" onmouseover="this.style.background='rgba(255,255,255,.2)'" onmouseout="this.style.background='rgba(255,255,255,.1)'">
              <i id="song-play-icon" class="fa-solid fa-pause" style="font-size:.75rem;"></i>
            </button>
            <div class="song-progress-bar" style="flex:1;"><div class="song-progress-fill"></div></div>
            <span style="color:#9ca3af;font-size:.72rem;font-family:monospace;white-space:nowrap;">1:18 / 3:36</span>
          </div>
        </div>
        <!-- Expand arrow -->
        <i class="fa-solid fa-chevron-down song-expand-icon" style="font-size:1rem;flex-shrink:0;"></i>
      </div>
      <!-- Expandable body -->
      <div class="song-expandable">
        <div class="song-expandable-inner">
          <div class="song-divider"></div>
          <div class="song-why-box">
            <i class="fa-solid fa-quote-left" style="position:absolute;top:10px;left:10px;color:rgba(0,212,255,.15);font-size:1.8rem;"></i>
            <h4 style="color:#67e8f9;font-weight:700;margin:0 0 10px;display:flex;align-items:center;gap:6px;font-size:.92rem;"><i class="fa-solid fa-heart" style="color:#f472b6;"></i> Why I love this song?</h4>
            <p style="font-size:.85rem;color:#cbd5e1;line-height:1.75;margin:0;padding-left:20px;position:relative;z-index:1;">
              My favorite song is SToRY by DECO*27 and kemu from the Project SEKAI movie. It is a commissioned song for Leo/need, a band of childhood friends who found their way back to each other through music. I really love this song because it feels like a warm hug whenever I feel stressed about school.<br><br>
              There is a beautiful part in the lyrics that goes:<br>
              <span style="color:#a5f3fc;font-weight:700;font-style:italic;">"思い通りにいかない なんでは そのままで大丈夫だよ"</span><br>
              which means it is completely fine if things do not go the way we want.<br><br>
              That line always reminds me that I do not have to be perfect and it is okay to struggle sometimes. Listening to this song gives me so much comfort and courage to just keep growing at my own pace. ✨🎶
            </p>
          </div>
          <div class="song-btn-row">
            <a href="https://open.spotify.com/track/1KqITEnkHQw9MsQ0ObRESq?si=78d8273351594c01" target="_blank" class="song-btn song-btn-spotify"><i class="fa-brands fa-spotify" style="font-size:1.1rem;"></i> Listen on Spotify</a>
            <a href="https://youtu.be/9fnQklaziX4?si=pzvwqiunD33vpNzv" target="_blank" class="song-btn song-btn-youtube"><i class="fa-brands fa-youtube" style="font-size:1.1rem;"></i> Watch on YouTube</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <p>When I need to step away from my laptop and find some balance in Madison, I have a few favorite ways to recharge. I absolutely love playing rhythm games like <strong>Project SEKAI</strong>, which never fails to give me a burst of energy and keep my reflexes sharp. I also spend time learning Japanese by breaking down the lyrics of my favorite songs.</p>
  <p>Sometimes, the smallest things make me smile the most. It could be catching a fresh aquatic fragrance that reminds me of a gentle sea breeze, the peaceful feeling of walking around campus, or simply the immense satisfaction of finally getting my code to run flawlessly.</p>

  <h2>Vibes &amp; Playlists 🎧</h2>
  <p>Some of my absolute favorite artists that I think everyone should listen to:</p>

  <div class="spotify-grid">
    <div class="artist-card reveal-item">
      <img src="/assets/images/artist-leoneed.jpg" alt="Leo/need" class="artist-img">
      <div class="artist-name">Leo/need</div>
      <a href="https://open.spotify.com/artist/7CXyP7IN0L3ySUeIQ6Ymu1" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> Spotify</a>
    </div>
    <div class="artist-card reveal-item">
      <img src="/assets/images/artist-yoasobi.jpg" alt="YOASOBI" class="artist-img">
      <div class="artist-name">YOASOBI</div>
      <a href="https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> Spotify</a>
    </div>
    <div class="artist-card reveal-item">
      <img src="/assets/images/artist-myuk.jpg" alt="Myuk" class="artist-img">
      <div class="artist-name">Myuk</div>
      <a href="https://open.spotify.com/artist/7oVNI7cJUA5f1Qvu8vQlq9" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> Spotify</a>
    </div>
    <div class="artist-card reveal-item">
      <img src="/assets/images/artist-nightcord.jpg" alt="Nightcord at 25:00" class="artist-img">
      <div class="artist-name">Nightcord at 25:00</div>
      <a href="https://open.spotify.com/artist/1VMXuPyhNldYomz8ojLKP7" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> Spotify</a>
    </div>
    <div class="artist-card reveal-item">
      <img src="/assets/images/artist-yorushika.jpg" alt="Yorushika" class="artist-img">
      <div class="artist-name">Yorushika</div>
      <a href="https://open.spotify.com/artist/4UK2Lzi6fBfUi9rpDt6cik" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> Spotify</a>
    </div>
    <div class="artist-card reveal-item">
      <img src="/assets/images/artist-zutomayo.jpg" alt="Zutomayo" class="artist-img">
      <div class="artist-name">Zutomayo</div>
      <a href="https://open.spotify.com/artist/38WbKH6oKAZskBhqDFA8Uj" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> Spotify</a>
    </div>
    <div class="artist-card reveal-item">
      <img src="/assets/images/artist-mrsgreenapple.jpg" alt="Mrs. GREEN APPLE" class="artist-img">
      <div class="artist-name">Mrs. GREEN APPLE</div>
      <a href="https://open.spotify.com/artist/4QvgGvpgzgyUOo8Yp8LDm9" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> Spotify</a>
    </div>
    <div class="artist-card reveal-item">
      <img src="/assets/images/artist-kenshi.jpg" alt="Kenshi Yonezu" class="artist-img">
      <div class="artist-name">Kenshi Yonezu</div>
      <a href="https://open.spotify.com/artist/1snhtMLeb2DYoMOcVbb8iB" target="_blank" class="btn-spotify"><i class="fab fa-spotify"></i> Spotify</a>
    </div>
  </div>
</div>

<script>
(function(){
  var card=document.getElementById('song-card');
  var playBtn=document.getElementById('song-play-btn');
  var playIcon=document.getElementById('song-play-icon');
  if(!card)return;
  card.addEventListener('click',function(e){
    if(e.target.closest('#song-play-btn')||e.target.closest('a'))return;
    var expanded=card.classList.toggle('expanded');
    if(expanded)spawnNotes(card);
  });
  playBtn.addEventListener('click',function(e){
    e.stopPropagation();
    var playing=card.classList.toggle('playing');
    playIcon.className='fa-solid '+(playing?'fa-pause':'fa-play');
  });
  function spawnNotes(container){
    var chars=['♪','♫','♩','♬','✧','✦'];
    var colors=['#00d4ff','#8a2be2','#ff77ff','#ffffff'];
    var n=Math.floor(Math.random()*3)+5;
    for(var i=0;i<n;i++){
      (function(delay){
        setTimeout(function(){
          var el=document.createElement('span');
          el.className='music-note';
          el.innerText=chars[Math.floor(Math.random()*chars.length)];
          el.style.cssText='left:'+(Math.random()*80+10)+'%;top:40px;color:'+colors[Math.floor(Math.random()*colors.length)]+';font-size:'+(Math.random()*10+15)+'px;text-shadow:0 0 10px #00d4ff,0 0 20px #8a2be2;';
          container.appendChild(el);
          setTimeout(function(){el.remove();},2000);
        },delay);
      })(i*150);
    }
  }
})();
</script>

<style>
#an-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(2,1,10,.97);backdrop-filter:blur(20px);z-index:999999;display:block;opacity:0;pointer-events:none;transition:opacity .25s;perspective:1400px;}
#an-book{width:220px;height:340px;position:absolute;top:50%;left:50%;transform-style:preserve-3d;transform:translate(-50%,-50%) scale(0);}
.ab-layer{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:5px 14px 14px 5px;transform-origin:left center;transform-style:preserve-3d;transition:transform .7s cubic-bezier(.4,0,.2,1);}
#ab-back{background:#06031a;transform:translateZ(-6px);z-index:1;}
#ab-p1{background:linear-gradient(to left,#cec6ae,#eae4d4);border:1px solid #c5bcaa;transform:translateZ(-4px);z-index:2;}
#ab-p2{background:linear-gradient(to right,#d5cdb8,#ede8dc);border:1px solid #c5bcaa;transform:translateZ(-2px);z-index:3;}
#ab-p3{background:linear-gradient(to left,#d2cabc,#e8e4d8);border:1px solid #c5bcaa;transform:translateZ(0);z-index:4;}
#ab-front{border:1px solid rgba(201,162,39,.4);box-shadow:0 0 32px rgba(0,0,0,.7),0 0 22px rgba(201,162,39,.4);display:flex;align-items:center;justify-content:center;text-align:center;padding:22px;transform:translateZ(2px);z-index:5;}
#ab-front h3{color:#fff!important;font-family:'Cinzel Decorative',serif!important;font-size:1.25rem!important;text-shadow:0 0 16px rgba(255,255,255,.8)!important;margin:0!important;pointer-events:none!important;line-height:1.4!important;}
</style>
<div id="an-overlay">
  <div id="an-book">
    <div id="ab-back" class="ab-layer"></div>
    <div id="ab-p1"   class="ab-layer"></div>
    <div id="ab-p2"   class="ab-layer"></div>
    <div id="ab-p3"   class="ab-layer"></div>
    <div id="ab-front" class="ab-layer"><h3 id="ab-title"></h3></div>
  </div>
</div>
<script>
window.addEventListener('pageshow',function(){
  document.body.style.overflow='';
  var ov=document.getElementById('an-overlay'),bk=document.getElementById('an-book');
  if(ov){ov.style.opacity='0';ov.style.pointerEvents='none';}
  if(bk&&typeof anBookReset==='function')anBookReset(bk);
});
</script>
