---
layout: single
title: "My Fairy Tale Collection"
permalink: /projects/
author_profile: true
---

<link href="https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap" rel="stylesheet">

<style>
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');
.page__title{font-family:'Cinzel Decorative',serif!important;color:#f0c84a!important;}

.bookshelf{display:flex;flex-wrap:wrap;align-items:flex-end;gap:60px;justify-content:center;padding:80px 16px 54px;perspective:2500px;position:relative;z-index:1;background-color:#0e0b26!important;background-image:repeating-linear-gradient(45deg,rgba(201,162,39,.045) 0px,rgba(201,162,39,.045) 1px,transparent 1px,transparent 27px),repeating-linear-gradient(-45deg,rgba(201,162,39,.045) 0px,rgba(201,162,39,.045) 1px,transparent 1px,transparent 27px),repeating-linear-gradient(90deg,rgba(255,255,255,.022) 0px,rgba(255,255,255,.022) 1px,transparent 1px,transparent 38px),repeating-linear-gradient(90deg,rgba(0,0,0,.32) 0px,rgba(0,0,0,.32) 3px,transparent 3px,transparent 152px),radial-gradient(ellipse 90% 70% at 50% 8%,rgba(60,44,110,.46) 0%,transparent 70%),linear-gradient(160deg,#1c1440 0%,#0a0718 55%,#170f36 100%)!important;border:12px solid rgba(201,162,39,.22)!important;border-bottom:none!important;border-radius:8px 8px 0 0;box-shadow:inset 0 0 150px rgba(0,0,0,.85),inset 0 50px 80px -20px rgba(0,0,0,.62),inset 0 -30px 50px -15px rgba(0,0,0,.55),0 18px 48px rgba(0,0,0,.6),0 0 0 1px rgba(201,162,39,.07)!important;}
.bookshelf::before{content:'';position:absolute;inset:0;z-index:2;pointer-events:none;background:radial-gradient(ellipse 50% 32% at 50% 0%,rgba(255,240,195,.24) 0%,transparent 60%),radial-gradient(ellipse 130% 65% at 50% 122%,rgba(0,0,0,.62) 0%,transparent 58%),linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.18) 14%,transparent 26%,transparent 74%,rgba(0,0,0,.18) 86%,rgba(0,0,0,.78) 100%);}
.bookshelf::after{content:'';position:absolute;left:-12px;right:-12px;bottom:-26px;height:26px;z-index:3;background:linear-gradient(180deg,#caa24a 0%,#8a6216 8%,#4a3308 22%,#2a1c05 55%,#170f02 100%);border-radius:0 0 6px 6px;box-shadow:inset 0 2px 0 rgba(255,240,190,.55),inset 0 -3px 8px rgba(0,0,0,.6),0 14px 22px rgba(0,0,0,.55);}

.book-container{width:210px;height:360px;position:relative;z-index:1;cursor:pointer;transition:transform .6s cubic-bezier(.25,1,.5,1),filter .4s ease;}
.book-container:hover{z-index:50;transform:translateY(-12px) scale(1.03);filter:drop-shadow(0 20px 30px rgba(0,0,0,.7));}
.book{position:relative;width:100%;height:100%;transform-style:preserve-3d;}

.front-cover{position:absolute;top:0;left:0;width:100%;height:100%;transform-origin:left center;transition:transform .85s cubic-bezier(.25,1,.5,1);z-index:20;border-radius:6px 16px 16px 6px;transform-style:preserve-3d;backface-visibility:visible;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:20px 16px;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:inset 6px 0 16px rgba(0,0,0,.45),4px 6px 18px rgba(0,0,0,.5);}
.front-cover::before{content:'';position:absolute;left:0;top:0;bottom:0;width:16px;background:linear-gradient(180deg,#3a2203 0%,#b8860b 10%,#f0c84a 20%,#d4a820 28%,#7a4e08 38%,#8a5e10 46%,#c9a227 54%,#f0c84a 62%,#c9a227 70%,#7a4e08 78%,#b8860b 88%,#3a2203 100%);border-radius:6px 0 0 6px;box-shadow:inset -3px 0 6px rgba(0,0,0,.50);z-index:21;}
.book-container:hover .front-cover{transform:rotateY(-178deg);pointer-events:none;}

.book-1 .front-cover{background:radial-gradient(ellipse 55% 45% at 56% 44%,rgba(42,157,143,.15) 0%,transparent 65%),radial-gradient(ellipse 95% 90% at 50% 50%,transparent 40%,rgba(0,0,0,.74) 100%),repeating-linear-gradient(172deg,rgba(255,255,255,.013) 0px,rgba(255,255,255,.013) 1px,transparent 1px,transparent 7px),linear-gradient(168deg,#040d17 0%,#081b2c 38%,#0c2238 68%,#030e1c 100%);box-shadow:4px 6px 18px rgba(0,0,0,.55),inset 6px 0 16px rgba(0,0,0,.50);}
.book-2 .front-cover{background:radial-gradient(ellipse 55% 45% at 56% 44%,rgba(114,9,183,.22) 0%,transparent 65%),radial-gradient(ellipse 95% 90% at 50% 50%,transparent 40%,rgba(0,0,0,.74) 100%),repeating-linear-gradient(172deg,rgba(255,255,255,.013) 0px,rgba(255,255,255,.013) 1px,transparent 1px,transparent 7px),linear-gradient(168deg,#13001e 0%,#270040 38%,#18004e 68%,#070018 100%);border:1.5px solid rgba(0,229,255,.18);box-shadow:4px 6px 18px rgba(0,0,0,.55),inset 6px 0 16px rgba(0,0,0,.50);}
.book-3 .front-cover{background:radial-gradient(ellipse 55% 45% at 56% 44%,rgba(180,40,80,.16) 0%,transparent 65%),radial-gradient(ellipse 95% 90% at 50% 50%,transparent 40%,rgba(0,0,0,.74) 100%),repeating-linear-gradient(172deg,rgba(255,255,255,.013) 0px,rgba(255,255,255,.013) 1px,transparent 1px,transparent 7px),linear-gradient(168deg,#16000f 0%,#36071e 38%,#500c2c 68%,#23000e 100%);box-shadow:4px 6px 18px rgba(0,0,0,.55),inset 6px 0 16px rgba(0,0,0,.50);}

/* ── BOOK-2: cover-back with paper preview + skills on hover ── */
.book-2 .front-cover { position: relative; }
.book-2 .cover-back {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  background: #0a0014;
  border-radius: 6px 14px 14px 6px;
  overflow: hidden; transform: scaleX(-1);
  opacity: 0; transition: none; pointer-events: none;
}
.book-2.book-container:hover .cover-back {
  opacity: 1; transition: opacity 0.25s ease 0.35s;
}
.book-2.book-container:hover .cover-content {
  opacity: 0; transition: none;
}

/* ── BOOK-3: back of front cover shows dashboard + skills on hover ── */
.book-3 .front-cover { position: relative; }

.book-3 .cover-back {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #1a0010;
  border-radius: 6px 14px 14px 6px;
  overflow: hidden;
  transform: scaleX(-1);
  opacity: 0;
  transition: none;
  pointer-events: none;
}
.book-3.book-container:hover .cover-back {
  opacity: 1;
  transition: opacity 0.25s ease 0.35s;
}
.book-3.book-container:hover .cover-content {
  opacity: 0;
  transition: none;
}

.btn-story-rose{background:linear-gradient(135deg,#c9477a,#7b1040);box-shadow:0 0 12px rgba(201,71,122,.55);}
.book-4 .front-cover{background:radial-gradient(ellipse 55% 45% at 56% 44%,rgba(201,162,39,.10) 0%,transparent 65%),radial-gradient(ellipse 95% 90% at 50% 50%,transparent 40%,rgba(0,0,0,.74) 100%),repeating-linear-gradient(172deg,rgba(255,255,255,.013) 0px,rgba(255,255,255,.013) 1px,transparent 1px,transparent 7px),linear-gradient(168deg,#0d0b07 0%,#19150a 38%,#12100a 68%,#070604 100%);box-shadow:4px 6px 18px rgba(0,0,0,.55),inset 6px 0 16px rgba(0,0,0,.50);}

/* ── BOOK-4: cover-back with skills on hover ── */
.book-4 .front-cover { position: relative; }

.book-4 .cover-back {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #111111;
  border-radius: 6px 14px 14px 6px;
  overflow: hidden;
  transform: scaleX(-1);
  opacity: 0;
  transition: none;
  pointer-events: none;
}
.book-4.book-container:hover .cover-back {
  opacity: 1;
  transition: opacity 0.25s ease 0.35s;
}
.book-4.book-container:hover .cover-content {
  opacity: 0;
  transition: none;
}

.cover-content{backface-visibility:hidden;position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:46px 8px 22px 24px;}
.cvf-a{position:absolute;top:11px;left:22px;right:6px;bottom:8px;border:1.5px solid rgba(201,162,39,.58);pointer-events:none;z-index:25;}
.cvf-b{position:absolute;top:14px;left:25px;right:9px;bottom:11px;border:5px solid transparent;border-image:repeating-linear-gradient(45deg,rgba(201,162,39,.28) 0,rgba(201,162,39,.28) 1px,transparent 1px,transparent 5px) 5 stretch;pointer-events:none;z-index:25;}
.cvf-c{position:absolute;top:20px;left:31px;right:15px;bottom:17px;border:1px solid rgba(201,162,39,.38);pointer-events:none;z-index:25;}
.cvf-tp,.cvf-bp{position:absolute;left:44px;right:28px;height:5px;background:linear-gradient(to right,transparent,rgba(201,162,39,.20) 25%,rgba(201,162,39,.20) 75%,transparent);border-top:1px solid rgba(201,162,39,.18);border-bottom:1px solid rgba(201,162,39,.18);pointer-events:none;z-index:25;}
.cvf-tp{top:31px;}.cvf-bp{bottom:28px;}
.cv-c{position:absolute;pointer-events:none;z-index:26;overflow:visible;}
.cv-c-tl{top:8px;left:19px;}.cv-c-tr{top:8px;right:3px;}.cv-c-bl{bottom:5px;left:19px;}.cv-c-br{bottom:5px;right:3px;}
@keyframes cvCornerPulse{0%,100%{filter:drop-shadow(0 0 3px rgba(240,200,74,.48));}50%{filter:drop-shadow(0 0 9px rgba(255,250,150,.80));}}
.book-container:hover .cv-c{animation:cvCornerPulse 1.6s ease-in-out infinite;}
.book-container:hover .cvf-a{border-color:rgba(240,200,74,.80);transition:border-color .35s;}
.book-container:hover .cvf-c{border-color:rgba(240,200,74,.55);transition:border-color .35s;}
.cv-spine{position:absolute;left:8px;top:50%;transform:translateX(-50%) translateY(-50%) rotate(-90deg);font-family:'Cormorant Garamond',serif;font-size:.38rem;font-weight:600;letter-spacing:.20em;color:rgba(6,3,14,.70);white-space:nowrap;pointer-events:none;z-index:22;}
.cv-vol{font-family:'IM Fell English SC',serif!important;font-size:.55rem!important;font-weight:400!important;letter-spacing:.32em!important;color:rgba(201,162,39,.55)!important;text-transform:uppercase!important;margin:0 0 6px 0!important;padding:0!important;border:none!important;transition:color .35s;}
.book-container:hover .cv-vol{color:rgba(240,200,74,.82);}
.cv-rule{display:flex;align-items:center;gap:5px;width:82%;margin:7px auto;}
.cv-rule::before,.cv-rule::after{content:'';flex:1;height:6px;border-top:1px solid rgba(201,162,39,.32);border-bottom:1px solid rgba(201,162,39,.18);}
.cv-rule span{font-size:.52rem;color:rgba(201,162,39,.62);flex-shrink:0;}
.cv-med{position:relative;width:80px;height:80px;flex-shrink:0;margin:0 auto;}
.cv-med svg.cv-rings{position:absolute;inset:0;width:100%;height:100%;}
.cv-symbol{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transition:transform .45s cubic-bezier(.25,1,.5,1);}
.book-container:hover .cv-symbol{transform:scale(1.12);}
.cv-title{font-family:'IM Fell English SC','Cinzel Decorative',serif!important;font-size:.90rem!important;font-weight:400!important;line-height:1.30!important;letter-spacing:.06em!important;text-align:center!important;color:#f5ece0!important;text-shadow:0 1px 0 rgba(255,255,255,.06),0 -1px 0 rgba(0,0,0,.45),0 0 18px rgba(255,255,255,.28)!important;margin:0 0 6px 0!important;padding:0!important;border:none!important;transition:text-shadow .35s;}
.book-container:hover .cv-title{text-shadow:0 1px 0 rgba(255,255,255,.10),0 -1px 0 rgba(0,0,0,.45),0 0 26px rgba(255,255,255,.52)!important;}
.cv-title-sm{font-size:.78rem!important;}
.cv-sub-rule{width:52%;height:1px;border-top:1px dashed rgba(201,162,39,.30);margin:4px auto 7px!important;}
.cv-sub{font-family:'Cormorant Garamond',serif!important;font-style:italic!important;font-size:.70rem!important;color:rgba(240,228,205,.40)!important;letter-spacing:.05em!important;line-height:1.38!important;padding:0 4px!important;margin:0!important;transition:color .35s;}
.book-container:hover .cv-sub{color:rgba(240,228,205,.62)!important;}

.inside-pages{position:absolute;top:0;left:0;width:98%;height:98%;background:linear-gradient(to right,#ddd5c0,#f7f2ea)!important;z-index:10;border-radius:4px 14px 14px 4px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px;text-align:center;border:1px solid #c8bfa8;box-shadow:inset 10px 0 22px rgba(0,0,0,.12);}
.inside-pages i{font-size:2rem!important;margin-bottom:10px;}
.inside-pages h4{font-family:'Cormorant Garamond',serif!important;font-size:1.1rem!important;color:#1a1008!important;font-weight:700!important;text-shadow:none!important;pointer-events:none!important;margin:5px 0!important;}
.inside-pages p,.inside-pages small{color:#4a3a28!important;font-family:'Cormorant Garamond',serif!important;font-size:.88rem!important;font-style:italic!important;margin:0!important;text-shadow:none!important;}
.pub-badge{font-family:'Cinzel Decorative',serif!important;font-size:.95rem!important;color:#1a0080!important;font-weight:900!important;font-style:normal!important;pointer-events:none!important;}

.btn-view-story{display:inline-flex;align-items:center;gap:7px;padding:8px 20px;margin-top:12px;color:#fff!important;text-decoration:none!important;font-family:'Cormorant Garamond',serif;font-weight:700;font-size:.9rem;letter-spacing:.05em;border-radius:22px;cursor:pointer!important;position:relative;z-index:9999!important;pointer-events:auto!important;border:none;outline:none;transition:filter .3s,transform .3s;}
.btn-view-story:hover{filter:brightness(1.2);transform:scale(1.05);}
.btn-story-blue{background:linear-gradient(135deg,#2a9d8f,#0e4f8f);box-shadow:0 0 12px rgba(42,157,143,.55);}
.btn-story-neon{background:linear-gradient(135deg,#c94f7c,#6a00c0);box-shadow:0 0 12px rgba(201,79,124,.55);}
.btn-story-dark{background:linear-gradient(135deg,#2a2a2a,#111);box-shadow:0 0 10px rgba(201,162,39,.3);border:1px solid rgba(201,162,39,.25);}
.coming-badge{display:inline-block;padding:5px 13px;margin-top:11px;background:rgba(201,162,39,.15);border:1px dashed rgba(201,162,39,.4);border-radius:18px;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.82rem;color:#c9a227!important;pointer-events:none;}

@keyframes bottomBreath{0%,100%{opacity:.35;transform:scaleX(.78);}50%{opacity:.62;transform:scaleX(1);}}
.book-container::after{content:'';position:absolute;bottom:-5px;left:14%;right:14%;height:16px;border-radius:50%;filter:blur(14px);animation:bottomBreath 3.5s ease-in-out infinite;pointer-events:none;z-index:0;}
.book-1.book-container::after{background:rgba(42,157,143,1);animation-duration:3.2s;animation-delay:0s;}
.book-2.book-container::after{background:rgba(90,20,180,1);animation-duration:3.8s;animation-delay:-1.4s;}
.book-3.book-container::after{background:rgba(180,40,80,1);animation-duration:4.1s;animation-delay:-0.7s;}
.book-4.book-container::after{background:rgba(180,145,20,1);animation-duration:3.5s;animation-delay:-2.1s;}
.book-container:hover::after{opacity:.30;filter:blur(20px);transform:scaleX(.70);}

/* container query: fires whenever the CONTENT COLUMN (not the viewport) is
   narrow — e.g. a wide desktop monitor with the sidebar author-profile box
   still only leaves ~600-900px for the bookshelf. Viewport-width media
   queries can't see this; container queries measure the actual column. */
@container (max-width: 900px) {
  .bookshelf{gap:24px;padding:40px 10px 46px;}
  .book-container{width:178px;height:305px;}
  .inside-pages{padding:14px 10px;overflow:hidden;}
  .inside-pages i{font-size:1.6rem!important;margin-bottom:6px;}
  .inside-pages h4{font-size:.94rem!important;margin:4px 0!important;}
  .inside-pages p,.inside-pages small{font-size:.78rem!important;}
  .btn-view-story{font-size:.82rem;padding:7px 16px;margin-top:9px;}
  .pub-badge{font-size:.84rem!important;}
  .cover-content{padding:38px 7px 16px 22px!important;}
  .cvf-a{top:9px;left:20px;right:5px;bottom:7px;}
  .cvf-b{top:11px;left:22px;right:8px;bottom:9px;border-width:4px;}
  .cvf-c{top:16px;left:27px;right:12px;bottom:14px;}
  .cvf-tp{top:25px;left:38px;right:23px;height:4px;}
  .cvf-bp{bottom:23px;left:38px;right:23px;height:4px;}
  .cv-c{width:28px!important;height:28px!important;}
  .cv-c-tl{top:6px;left:16px;}.cv-c-tr{top:6px;right:2px;}
  .cv-c-bl{bottom:4px;left:16px;}.cv-c-br{bottom:4px;right:2px;}
  .cv-title{font-size:.78rem;}
  .cv-title-sm{font-size:.68rem!important;}
  .cv-vol{font-size:.44rem;letter-spacing:.26em!important;margin-bottom:4px!important;}
  .cv-med{width:64px;height:64px;}
  .cv-rule{margin:5px auto;width:80%;}
  .cv-sub{font-size:.64rem!important;}
  .cv-sub-rule{margin:3px auto 5px!important;}
}
@media(max-width:640px){
  .bookshelf{gap:20px;padding:28px 8px 36px;border-width:6px!important;}
  .book-container{width:155px;height:260px;}
  .book-container:hover{transform:translateX(72px) translateY(-12px) scale(1.03)!important;}
  .inside-pages{padding:10px 8px;overflow:hidden;}
  .inside-pages i{font-size:1.3rem!important;margin-bottom:4px;}
  .inside-pages h4{font-size:.82rem!important;margin:3px 0!important;}
  .inside-pages p,.inside-pages small{font-size:.72rem!important;}
  .btn-view-story{font-size:.75rem;padding:5px 12px;margin-top:7px;}
  .pub-badge{font-size:.78rem!important;}
  .cover-content{padding:34px 6px 14px 20px!important;}
  .cvf-a{top:7px;left:18px;right:5px;bottom:6px;}
  .cvf-b{top:9px;left:20px;right:7px;bottom:8px;border-width:3px;}
  .cvf-c{top:13px;left:24px;right:11px;bottom:12px;}
  .cvf-tp{top:22px;left:34px;right:20px;height:3px;}
  .cvf-bp{bottom:20px;left:34px;right:20px;height:3px;}
  .cv-c{width:24px!important;height:24px!important;}
  .cv-c-tl{top:5px;left:15px;}.cv-c-tr{top:5px;right:2px;}
  .cv-c-bl{bottom:3px;left:15px;}.cv-c-br{bottom:3px;right:2px;}
  .cv-title{font-size:.68rem;}
  .cv-title-sm{font-size:.58rem!important;}
  .cv-vol{font-size:.38rem;letter-spacing:.22em!important;margin-bottom:3px!important;}
  .cv-med{width:55px;height:55px;}
  .cv-rule{margin:4px auto;width:78%;}
  .cv-sub{font-size:.58rem!important;}
  .cv-sub-rule{margin:2px auto 4px!important;}
}
@media(max-width:400px){
  .bookshelf{gap:12px;border-width:4px!important;}
  .book-container{width:140px;height:228px;}
  .cover-content{padding:29px 5px 12px 18px!important;}
  .cv-title{font-size:.60rem;}
  .cv-title-sm{font-size:.52rem!important;}
  .cv-med{width:46px;height:46px;}
  .cv-vol{font-size:.34rem;}
}

/* ── BOOK-1: back of front cover shows graph + skills on hover ── */
.book-1 .front-cover { position: relative; }

.book-1 .cover-back {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: #0e1a25;
  border-radius: 6px 14px 14px 6px;
  overflow: hidden;
  transform: scaleX(-1);
  opacity: 0;
  transition: none; /* instant when closing */
  pointer-events: none;
}
.book-1.book-container:hover .cover-back {
  opacity: 1;
  transition: opacity 0.25s ease 0.35s; /* fade in after flip starts */
}
.book-1.book-container:hover .cover-content {
  opacity: 0;
  transition: none;
}
.cover-back-graph {
  margin: 8px 8px 5px;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,.18);
  overflow: hidden;
  background: #0a1520;
  height: 50%;
  flex-shrink: 0;
}
.cover-back-graph img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.cover-back-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  padding: 5px 8px 8px;
}
.cover-back-tag {
  font-family: 'Cormorant Garamond', serif;
  font-size: .58rem;
  padding: 1px 5px;
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.18);
  border-radius: 8px;
  color: #c9a227 !important;
}

/* ── Per-book ornament charm — docked to each book's corner, gold-line SVG, Live2D-style idle motion ── */
.shelf-ornament{position:absolute;bottom:-40px;right:10px;width:44px;z-index:6;pointer-events:none;}
@keyframes ornFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}
.ornament-float{animation:ornFloat 3.6s ease-in-out infinite;}
.book-2 .ornament-float{animation-duration:4.1s;animation-delay:-1.3s;}
.book-4 .ornament-float{animation-duration:3.8s;animation-delay:-2.4s;}
.ornament-icon{width:100%;height:auto;filter:drop-shadow(0 2px 6px rgba(0,0,0,.55));}
.ornament-label{display:none;}
@keyframes ornGlint{0%,100%{opacity:.55;transform:scale(1);}50%{opacity:1;transform:scale(1.35);}}
.orn-glint{transform-origin:center;transform-box:fill-box;animation:ornGlint 2.6s ease-in-out infinite;}
@keyframes ornGlobeSpin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
.orn-globe-spin{transform-origin:45px 55px;animation:ornGlobeSpin 24s linear infinite;}
@keyframes ornQuillSway{0%,100%{transform:rotate(-2.2deg);}50%{transform:rotate(2.2deg);}}
.orn-quill-sway{animation:ornQuillSway 4.2s ease-in-out infinite;}
@keyframes ornInkShimmer{0%,100%{opacity:.70;}50%{opacity:.95;}}
.orn-ink-shimmer{animation:ornInkShimmer 3.4s ease-in-out infinite;}
@media (prefers-reduced-motion: reduce) {
  .orn-glint,.orn-globe-spin,.orn-quill-sway,.orn-ink-shimmer,.ornament-float{animation:none;}
}
@container (max-width: 900px) {
  .shelf-ornament{width:38px;right:8px;bottom:-38px;}
}
@media(max-width:640px){
  .shelf-ornament{width:30px;right:6px;bottom:-28px;}
}
@media(max-width:400px){
  .shelf-ornament{width:26px;right:5px;bottom:-24px;}
}
</style>

<div class="bookshelf">

<svg width="0" height="0" style="position:absolute">
  <defs>
    <radialGradient id="orn-brass" cx="38%" cy="32%" r="75%">
      <stop offset="0%" stop-color="#fff2b8"/>
      <stop offset="35%" stop-color="#f0c84a"/>
      <stop offset="70%" stop-color="#b8860b"/>
      <stop offset="100%" stop-color="#5c3d05"/>
    </radialGradient>
    <radialGradient id="orn-glass" cx="35%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#dff3ff" stop-opacity=".9"/>
      <stop offset="45%" stop-color="#7fd4e8" stop-opacity=".55"/>
      <stop offset="100%" stop-color="#0a3a44" stop-opacity=".6"/>
    </radialGradient>
    <radialGradient id="orn-globe" cx="36%" cy="30%" r="78%">
      <stop offset="0%" stop-color="#9fd8c9"/>
      <stop offset="40%" stop-color="#2a9d8f"/>
      <stop offset="75%" stop-color="#0e4f4a"/>
      <stop offset="100%" stop-color="#04201d"/>
    </radialGradient>
    <linearGradient id="orn-ink" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3a1050"/>
      <stop offset="100%" stop-color="#0a0014"/>
    </linearGradient>
  </defs>
</svg>

  <div class="book-container book-1 reveal-item" data-url="/projects/tech-layoffs/" data-bg="linear-gradient(160deg,#0a1520,#1a3a55)" data-title="Tech Layoffs Analysis">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <div class="cvf-a"></div><div class="cvf-b"></div><div class="cvf-c"></div>
          <div class="cvf-tp"></div><div class="cvf-bp"></div>
          <svg class="cv-c cv-c-tl" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M3 32 V3 H32" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M7 28 V7 H28" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="3" cy="3" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="3" cy="3" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="7" cy="7" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="3" y1="12" x2="7" y2="12" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="3" y1="20" x2="7" y2="20" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="12" y1="3" x2="12" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="20" y1="3" x2="20" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-tr" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M31 32 V3 H2" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M27 28 V7 H6" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="31" cy="3" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="31" cy="3" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="27" cy="7" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="31" y1="12" x2="27" y2="12" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="31" y1="20" x2="27" y2="20" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="22" y1="3" x2="22" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="14" y1="3" x2="14" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-bl" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M3 2 V31 H32" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M7 6 V27 H28" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="3" cy="31" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="3" cy="31" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="7" cy="27" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="3" y1="22" x2="7" y2="22" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="3" y1="14" x2="7" y2="14" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="12" y1="31" x2="12" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="20" y1="31" x2="20" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-br" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M31 2 V31 H2" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M27 6 V27 H6" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="31" cy="31" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="31" cy="31" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="27" cy="27" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="31" y1="22" x2="27" y2="22" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="31" y1="14" x2="27" y2="14" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="22" y1="31" x2="22" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="14" y1="31" x2="14" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <span class="cv-spine">VOL · I</span>
          <div class="cv-vol">Volumen · I</div>
          <div class="cv-rule"><span>✦</span></div>
          <div class="cv-med">
            <svg class="cv-rings" viewBox="0 0 90 90" fill="none"><circle cx="45" cy="45" r="43" stroke="rgba(201,162,39,.36)" stroke-width="1.5"/><line x1="45" y1="2" x2="45" y2="13" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="45" y1="77" x2="45" y2="88" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="2" y1="45" x2="13" y2="45" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="77" y1="45" x2="88" y2="45" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><circle cx="45" cy="3" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="87" cy="45" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="45" cy="87" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="3" cy="45" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="45" cy="45" r="34" stroke="rgba(201,162,39,.20)" stroke-width="0.8" stroke-dasharray="2 3"/><polygon points="45,14 49,34 62,23 53,40 75,45 53,50 62,67 49,56 45,76 41,56 28,67 37,50 15,45 37,40 28,23 41,34" stroke="rgba(201,162,39,.13)" stroke-width="0.8"/><circle cx="45" cy="45" r="22" fill="rgba(0,0,0,.38)"/><circle cx="45" cy="45" r="22" stroke="rgba(201,162,39,.45)" stroke-width="1.5"/><circle cx="45" cy="45" r="16" stroke="rgba(201,162,39,.20)" stroke-width="0.8" stroke-dasharray="2 2"/><polyline points="35,52 39,46 43,49 48,40 53,35" fill="none" stroke="#52c9b9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="53" cy="35" r="2.2" fill="#52c9b9"/><circle cx="35" cy="52" r="1.4" fill="rgba(82,201,185,.55)"/></svg>
            <div class="cv-symbol"></div>
          </div>
          <div class="cv-rule"><span>✦</span></div>
          <h3 class="cv-title">Tech Layoffs<br>Analysis</h3>
          <div class="cv-sub-rule"></div>
          <p class="cv-sub">Chronicles of Economic Storms</p>
        </div>
        <div class="cover-back">
          <div class="cover-back-graph">
            <img src="/assets/images/dashboard_preview.png" alt="Dashboard">
          </div>
          <div class="cover-back-tags">
            <span class="cover-back-tag">Python</span>
            <span class="cover-back-tag">Pandas</span>
            <span class="cover-back-tag">Scikit-Learn</span>
            <span class="cover-back-tag">SQLite</span>
            <span class="cover-back-tag">FRED API</span>
            <span class="cover-back-tag">yfinance</span>
            <span class="cover-back-tag">Streamlit</span>
            <span class="cover-back-tag">Tableau</span>
            <span class="cover-back-tag">Matplotlib</span>
            <span class="cover-back-tag">Seaborn</span>
          </div>
        </div>
      </div>
      <div class="inside-pages">
        <h4>Data Story &amp; Dashboard</h4>
        <p>End-to-end analysis predicting tech layoff trends using Random Forest &amp; macro indicators (GDP, CPI, rates)</p>
        <button class="btn-view-story btn-story-blue" onclick="openBookCard(this)">✦ Read the Tale</button>
      </div>
    </div>
    <div class="shelf-ornament">
      <div class="ornament-float">
        <svg class="ornament-icon" viewBox="0 0 90 130" fill="none">
          <g stroke="rgba(201,162,39,.30)" stroke-width="1">
            <path d="M22 118 L45 78 M68 118 L45 78 M45 78 L45 122"/>
          </g>
          <circle cx="45" cy="78" r="3.2" fill="url(#orn-brass)" stroke="rgba(201,162,39,.6)" stroke-width="1"/>
          <g transform="rotate(-32 45 78)">
            <rect x="18" y="72" width="56" height="12" rx="4" fill="url(#orn-brass)" stroke="rgba(201,162,39,.7)" stroke-width="1.3"/>
            <rect x="60" y="70" width="16" height="16" rx="3" fill="url(#orn-brass)" stroke="rgba(201,162,39,.75)" stroke-width="1.3"/>
            <circle cx="72" cy="78" r="6.5" fill="url(#orn-glass)" stroke="rgba(240,200,74,.85)" stroke-width="1.3"/>
            <circle class="orn-glint" cx="70" cy="76" r="1.6" fill="#fff" opacity=".8"/>
            <rect x="14" y="74.5" width="7" height="7" rx="1.5" fill="url(#orn-brass)" stroke="rgba(201,162,39,.7)" stroke-width="1"/>
          </g>
          <ellipse cx="45" cy="123" rx="26" ry="3.5" fill="rgba(0,0,0,.35)"/>
        </svg>
      </div>
      <span class="ornament-label">Spyglass</span>
    </div>
  </div>

  <div class="book-container book-2 reveal-item" data-url="/projects/semiconductor-hr/" data-bg="linear-gradient(145deg,#2d0035,#6a0080,#00b4cc)" data-title="Semiconductor HR">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <div class="cvf-a"></div><div class="cvf-b"></div><div class="cvf-c"></div>
          <div class="cvf-tp"></div><div class="cvf-bp"></div>
          <svg class="cv-c cv-c-tl" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M3 32 V3 H32" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M7 28 V7 H28" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="3" cy="3" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="3" cy="3" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="7" cy="7" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="3" y1="12" x2="7" y2="12" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="3" y1="20" x2="7" y2="20" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="12" y1="3" x2="12" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="20" y1="3" x2="20" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-tr" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M31 32 V3 H2" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M27 28 V7 H6" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="31" cy="3" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="31" cy="3" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="27" cy="7" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="31" y1="12" x2="27" y2="12" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="31" y1="20" x2="27" y2="20" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="22" y1="3" x2="22" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="14" y1="3" x2="14" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-bl" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M3 2 V31 H32" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M7 6 V27 H28" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="3" cy="31" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="3" cy="31" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="7" cy="27" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="3" y1="22" x2="7" y2="22" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="3" y1="14" x2="7" y2="14" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="12" y1="31" x2="12" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="20" y1="31" x2="20" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-br" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M31 2 V31 H2" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M27 6 V27 H6" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="31" cy="31" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="31" cy="31" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="27" cy="27" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="31" y1="22" x2="27" y2="22" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="31" y1="14" x2="27" y2="14" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="22" y1="31" x2="22" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="14" y1="31" x2="14" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <span class="cv-spine">VOL · II</span>
          <div class="cv-vol">Volumen · II</div>
          <div class="cv-rule"><span>✦</span></div>
          <div class="cv-med">
            <svg class="cv-rings" viewBox="0 0 90 90" fill="none"><circle cx="45" cy="45" r="43" stroke="rgba(201,162,39,.36)" stroke-width="1.5"/><line x1="45" y1="2" x2="45" y2="13" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="45" y1="77" x2="45" y2="88" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="2" y1="45" x2="13" y2="45" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="77" y1="45" x2="88" y2="45" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><circle cx="45" cy="3" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="87" cy="45" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="45" cy="87" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="3" cy="45" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="45" cy="45" r="34" stroke="rgba(201,162,39,.20)" stroke-width="0.8" stroke-dasharray="2 3"/><polygon points="45,14 49,34 62,23 53,40 75,45 53,50 62,67 49,56 45,76 41,56 28,67 37,50 15,45 37,40 28,23 41,34" stroke="rgba(201,162,39,.13)" stroke-width="0.8"/><circle cx="45" cy="45" r="22" fill="rgba(0,0,0,.38)"/><circle cx="45" cy="45" r="22" stroke="rgba(201,162,39,.45)" stroke-width="1.5"/><circle cx="45" cy="45" r="16" stroke="rgba(201,162,39,.20)" stroke-width="0.8" stroke-dasharray="2 2"/><polygon points="45,31 55,37 55,53 45,59 35,53 35,37" fill="none" stroke="#00e5ff" stroke-width="1.6"/><circle cx="45" cy="45" r="5" fill="none" stroke="#00e5ff" stroke-width="1.2"/><line x1="40" y1="45" x2="35" y2="45" stroke="#00e5ff" stroke-width="1" opacity=".6"/><line x1="50" y1="45" x2="55" y2="45" stroke="#00e5ff" stroke-width="1" opacity=".6"/><line x1="45" y1="40" x2="45" y2="31" stroke="#00e5ff" stroke-width="1" opacity=".6"/><line x1="45" y1="50" x2="45" y2="59" stroke="#00e5ff" stroke-width="1" opacity=".6"/></svg>
            <div class="cv-symbol"></div>
          </div>
          <div class="cv-rule"><span>✦</span></div>
          <h3 class="cv-title cv-title-sm">Semiconductor<br>HR Research</h3>
          <div class="cv-sub-rule"></div>
          <p class="cv-sub">Codex of Silicon Dreams</p>
        </div>
        <div class="cover-back">
          <div class="cover-back-graph" style="display:flex;align-items:center;justify-content:center;background:#0a0014;">
            <img src="/assets/images/irjems-preview.png" alt="IRJEMS Paper" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=&quot;font-size:2.8rem;&quot;>📄</span>';">
          </div>
          <div class="cover-back-tags">
            <span class="cover-back-tag">Literature Review</span>
            <span class="cover-back-tag">Quantitative Research</span>
            <span class="cover-back-tag">Data-Driven Policy Analysis</span>
            <span class="cover-back-tag">Cross-Country Benchmarking</span>
            <span class="cover-back-tag">Academic Publishing</span>
          </div>
        </div>
      </div>
      <div class="inside-pages">
        <span class="pub-badge">IRJEMS</span>
        <i class="fas fa-microchip" style="color:#7209b7;margin-bottom:8px;"></i>
        <h4>Vol 3, Issue 8 (2024)</h4>
        <p>Peer-reviewed publication</p>
        <button class="btn-view-story btn-story-neon" onclick="openBookCard(this)">✦ Read the Tale</button>
      </div>
    </div>
    <div class="shelf-ornament">
      <div class="ornament-float">
        <svg class="ornament-icon" viewBox="0 0 90 130" fill="none">
          <path d="M28 118 L45 100 L62 118 Z" fill="url(#orn-brass)" stroke="rgba(201,162,39,.6)" stroke-width="1.2"/>
          <rect x="41" y="80" width="8" height="22" fill="url(#orn-brass)" stroke="rgba(201,162,39,.6)" stroke-width="1"/>
          <path d="M20 92 Q45 80 70 92" stroke="rgba(201,162,39,.55)" stroke-width="1.3" fill="none"/>
          <g transform="rotate(-8 45 55)">
            <circle cx="45" cy="55" r="30" fill="url(#orn-globe)" stroke="rgba(201,162,39,.75)" stroke-width="1.4"/>
            <g class="orn-globe-spin">
              <ellipse cx="45" cy="55" rx="30" ry="9" fill="none" stroke="rgba(201,162,39,.35)" stroke-width=".8"/>
              <ellipse cx="45" cy="55" rx="30" ry="20" fill="none" stroke="rgba(201,162,39,.30)" stroke-width=".8"/>
              <ellipse cx="45" cy="55" rx="10" ry="30" fill="none" stroke="rgba(201,162,39,.30)" stroke-width=".8"/>
              <ellipse cx="45" cy="55" rx="20" ry="30" fill="none" stroke="rgba(201,162,39,.30)" stroke-width=".8"/>
              <line x1="45" y1="25" x2="45" y2="85" stroke="rgba(201,162,39,.5)" stroke-width="1"/>
              <circle cx="45" cy="25" r="1.8" fill="rgba(240,200,74,.8)"/>
              <circle cx="45" cy="85" r="1.8" fill="rgba(240,200,74,.8)"/>
            </g>
            <circle class="orn-glint" cx="36" cy="46" r="2.4" fill="rgba(255,255,255,.55)"/>
          </g>
        </svg>
      </div>
      <span class="ornament-label">Sphaera</span>
    </div>
  </div>

  <div class="book-container book-3 reveal-item" data-url="/projects/shadow-rent/" data-bg="linear-gradient(160deg,#1a0010,#7b1040,#c9477a)" data-title="Shadow Rent Index">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <div class="cvf-a"></div><div class="cvf-b"></div><div class="cvf-c"></div>
          <div class="cvf-tp"></div><div class="cvf-bp"></div>
          <svg class="cv-c cv-c-tl" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M3 32 V3 H32" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M7 28 V7 H28" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="3" cy="3" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="3" cy="3" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="7" cy="7" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="3" y1="12" x2="7" y2="12" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="3" y1="20" x2="7" y2="20" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="12" y1="3" x2="12" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="20" y1="3" x2="20" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-tr" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M31 32 V3 H2" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M27 28 V7 H6" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="31" cy="3" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="31" cy="3" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="27" cy="7" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="31" y1="12" x2="27" y2="12" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="31" y1="20" x2="27" y2="20" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="22" y1="3" x2="22" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="14" y1="3" x2="14" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-bl" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M3 2 V31 H32" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M7 6 V27 H28" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="3" cy="31" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="3" cy="31" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="7" cy="27" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="3" y1="22" x2="7" y2="22" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="3" y1="14" x2="7" y2="14" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="12" y1="31" x2="12" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="20" y1="31" x2="20" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-br" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M31 2 V31 H2" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M27 6 V27 H6" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="31" cy="31" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="31" cy="31" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="27" cy="27" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="31" y1="22" x2="27" y2="22" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="31" y1="14" x2="27" y2="14" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="22" y1="31" x2="22" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="14" y1="31" x2="14" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <span class="cv-spine">VOL · III</span>
          <div class="cv-vol">Volumen · III</div>
          <div class="cv-rule"><span>✦</span></div>
          <div class="cv-med">
            <svg class="cv-rings" viewBox="0 0 90 90" fill="none"><circle cx="45" cy="45" r="43" stroke="rgba(201,162,39,.36)" stroke-width="1.5"/><line x1="45" y1="2" x2="45" y2="13" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="45" y1="77" x2="45" y2="88" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="2" y1="45" x2="13" y2="45" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="77" y1="45" x2="88" y2="45" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><circle cx="45" cy="3" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="87" cy="45" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="45" cy="87" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="3" cy="45" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="45" cy="45" r="34" stroke="rgba(201,162,39,.20)" stroke-width="0.8" stroke-dasharray="2 3"/><polygon points="45,14 49,34 62,23 53,40 75,45 53,50 62,67 49,56 45,76 41,56 28,67 37,50 15,45 37,40 28,23 41,34" stroke="rgba(201,162,39,.13)" stroke-width="0.8"/><circle cx="45" cy="45" r="22" fill="rgba(0,0,0,.38)"/><circle cx="45" cy="45" r="22" stroke="rgba(201,162,39,.45)" stroke-width="1.5"/><circle cx="45" cy="45" r="16" stroke="rgba(201,162,39,.20)" stroke-width="0.8" stroke-dasharray="2 2"/><path d="M29,45 Q37,33 45,33 Q53,33 61,45 Q53,57 45,57 Q37,57 29,45 Z" fill="none" stroke="#e87a9c" stroke-width="1.6"/><circle cx="45" cy="45" r="6.5" fill="none" stroke="#e87a9c" stroke-width="1.2"/><circle cx="45" cy="45" r="3" fill="#e87a9c"/><circle cx="47" cy="43" r="1" fill="rgba(255,255,255,.55)"/></svg>
            <div class="cv-symbol"></div>
          </div>
          <div class="cv-rule"><span>✦</span></div>
          <h3 class="cv-title">Shadow Rent<br>Index</h3>
          <div class="cv-sub-rule"></div>
          <p class="cv-sub">The Oracle of Hidden Rents</p>
        </div>
        <div class="cover-back">
          <div class="cover-back-graph">
            <img src="/assets/images/shadow-dashboard.png" alt="Dashboard">
          </div>
          <div class="cover-back-tags">
            <span class="cover-back-tag">Python</span>
            <span class="cover-back-tag">SQL</span>
            <span class="cover-back-tag">Selenium</span>
            <span class="cover-back-tag">PostgreSQL</span>
            <span class="cover-back-tag">Pandas</span>
            <span class="cover-back-tag">Regex</span>
            <span class="cover-back-tag">Streamlit</span>
            <span class="cover-back-tag">Plotly</span>
            <span class="cover-back-tag">Mapbox</span>
          </div>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-home" style="color:#c9477a;"></i>
        <h4>Data Story &amp; Dashboard</h4>
        <p>Automated ETL pipeline scraping live Madison rental listings to track housing inflation 6–9 months ahead of CPI</p>
        <button class="btn-view-story btn-story-rose" onclick="openBookCard(this)">✦ Read the Tale</button>
      </div>
    </div>
    <div class="shelf-ornament">
      <div class="ornament-float">
        <svg class="ornament-icon" viewBox="0 0 90 130" fill="none">
          <ellipse cx="38" cy="120" rx="24" ry="4" fill="rgba(0,0,0,.35)"/>
          <path d="M20 110 Q18 92 26 84 Q38 76 50 84 Q58 92 56 110 Q56 116 38 116 Q20 116 20 110 Z"
                fill="url(#orn-ink)" stroke="rgba(201,162,39,.65)" stroke-width="1.3"/>
          <ellipse cx="38" cy="86" rx="12" ry="4" fill="#1a0028" stroke="rgba(201,162,39,.55)" stroke-width="1"/>
          <ellipse class="orn-ink-shimmer" cx="38" cy="85.5" rx="9" ry="2.6" fill="#3a0060" opacity=".85"/>
          <g transform="rotate(18 44 40)">
            <g class="orn-quill-sway" style="transform-origin:44px 80px;">
              <path d="M44 20 C 30 34, 26 58, 40 82 C 42 70, 40 55, 48 42 C 44 55, 46 66, 42 76 C 52 60, 56 34, 44 20 Z"
                    fill="url(#orn-brass)" stroke="rgba(201,162,39,.7)" stroke-width="1.1"/>
              <path d="M44 24 C 36 40, 34 58, 41 78" stroke="rgba(90,55,5,.55)" stroke-width=".8" fill="none"/>
              <rect x="41.5" y="76" width="3.5" height="14" rx="1.5" fill="#e8d9a0" stroke="rgba(201,162,39,.6)" stroke-width=".8"/>
            </g>
          </g>
          <circle cx="30" cy="80" r="1.4" fill="rgba(240,200,74,.7)"/>
          <circle cx="52" cy="76" r="1" fill="rgba(240,200,74,.5)"/>
        </svg>
      </div>
      <span class="ornament-label">Scriptorium</span>
    </div>
  </div>

  <div class="book-container book-4 reveal-item">
    <div class="book">
      <div class="front-cover">
        <div class="cover-content">
          <div class="cvf-a"></div><div class="cvf-b"></div><div class="cvf-c"></div>
          <div class="cvf-tp"></div><div class="cvf-bp"></div>
          <svg class="cv-c cv-c-tl" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M3 32 V3 H32" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M7 28 V7 H28" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="3" cy="3" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="3" cy="3" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="7" cy="7" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="3" y1="12" x2="7" y2="12" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="3" y1="20" x2="7" y2="20" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="12" y1="3" x2="12" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="20" y1="3" x2="20" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-tr" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M31 32 V3 H2" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M27 28 V7 H6" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="31" cy="3" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="31" cy="3" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="27" cy="7" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="31" y1="12" x2="27" y2="12" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="31" y1="20" x2="27" y2="20" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="22" y1="3" x2="22" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="14" y1="3" x2="14" y2="7" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-bl" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M3 2 V31 H32" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M7 6 V27 H28" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="3" cy="31" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="3" cy="31" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="7" cy="27" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="3" y1="22" x2="7" y2="22" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="3" y1="14" x2="7" y2="14" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="12" y1="31" x2="12" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="20" y1="31" x2="20" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <svg class="cv-c cv-c-br" viewBox="0 0 34 34" width="34" height="34" fill="none"><path d="M31 2 V31 H2" stroke="rgba(201,162,39,.65)" stroke-width="1.5" stroke-linecap="round"/><path d="M27 6 V27 H6" stroke="rgba(201,162,39,.28)" stroke-width="0.85"/><circle cx="31" cy="31" r="3.8" stroke="rgba(201,162,39,.62)" stroke-width="1.2"/><circle cx="31" cy="31" r="1.5" fill="rgba(201,162,39,.70)"/><circle cx="27" cy="27" r="0.9" fill="rgba(201,162,39,.35)"/><line x1="31" y1="22" x2="27" y2="22" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="31" y1="14" x2="27" y2="14" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="22" y1="31" x2="22" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/><line x1="14" y1="31" x2="14" y2="27" stroke="rgba(201,162,39,.44)" stroke-width="0.9"/></svg>
          <span class="cv-spine">VOL · IV</span>
          <div class="cv-vol">Volumen · IV</div>
          <div class="cv-rule"><span>✦</span></div>
          <div class="cv-med">
            <svg class="cv-rings" viewBox="0 0 90 90" fill="none"><circle cx="45" cy="45" r="43" stroke="rgba(201,162,39,.36)" stroke-width="1.5"/><line x1="45" y1="2" x2="45" y2="13" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="45" y1="77" x2="45" y2="88" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="2" y1="45" x2="13" y2="45" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><line x1="77" y1="45" x2="88" y2="45" stroke="rgba(201,162,39,.30)" stroke-width="0.9"/><circle cx="45" cy="3" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="87" cy="45" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="45" cy="87" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="3" cy="45" r="2.3" fill="rgba(201,162,39,.68)"/><circle cx="45" cy="45" r="34" stroke="rgba(201,162,39,.20)" stroke-width="0.8" stroke-dasharray="2 3"/><polygon points="45,14 49,34 62,23 53,40 75,45 53,50 62,67 49,56 45,76 41,56 28,67 37,50 15,45 37,40 28,23 41,34" stroke="rgba(201,162,39,.13)" stroke-width="0.8"/><circle cx="45" cy="45" r="22" fill="rgba(0,0,0,.38)"/><circle cx="45" cy="45" r="22" stroke="rgba(201,162,39,.45)" stroke-width="1.5"/><circle cx="45" cy="45" r="16" stroke="rgba(201,162,39,.20)" stroke-width="0.8" stroke-dasharray="2 2"/><circle cx="41" cy="41" r="9" fill="none" stroke="#c9a227" stroke-width="1.8"/><circle cx="41" cy="41" r="5" fill="none" stroke="#c9a227" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.6"/><line x1="47.4" y1="47.4" x2="55" y2="55" stroke="#c9a227" stroke-width="2.5" stroke-linecap="round"/></svg>
            <div class="cv-symbol"></div>
          </div>
          <div class="cv-rule"><span>✦</span></div>
          <h3 class="cv-title cv-title-sm">Shrinkflation<br>Detective</h3>
          <div class="cv-sub-rule"></div>
          <p class="cv-sub">The Hidden Ledger of Prices</p>
        </div>
        <div class="cover-back">
          <div class="cover-back-graph" style="display:flex;align-items:center;justify-content:center;background:#111111;">
            <span style="font-size:2.8rem;">🔍</span>
          </div>
          <div class="cover-back-tags">
            <span class="cover-back-tag">Python</span>
            <span class="cover-back-tag">SQL</span>
            <span class="cover-back-tag">Kroger API</span>
            <span class="cover-back-tag">FRED API</span>
            <span class="cover-back-tag">Pandas</span>
            <span class="cover-back-tag">PostgreSQL</span>
            <span class="cover-back-tag">SQLAlchemy</span>
            <span class="cover-back-tag">Statsmodels</span>
            <span class="cover-back-tag">Streamlit</span>
            <span class="cover-back-tag">Plotly</span>
            <span class="cover-back-tag">GitHub Actions</span>
          </div>
        </div>
      </div>
      <div class="inside-pages">
        <i class="fas fa-search" style="color:#888;"></i>
        <h4>Shrinkflation Detective</h4>
        <p>Tracking per unit price shifts across 500 grocery SKUs to expose the inflation channel CPI misses</p>
        <button class="btn-view-story btn-story-dark" onclick="window.location.href='/under-construction.html'">✦ Read the Tale</button>
      </div>
    </div>
    <div class="shelf-ornament">
      <div class="ornament-float">
        <svg class="ornament-icon" viewBox="0 0 90 130" fill="none">
          <ellipse cx="42" cy="120" rx="24" ry="3.5" fill="rgba(0,0,0,.35)"/>
          <circle cx="40" cy="42" r="20" fill="url(#orn-glass)" stroke="url(#orn-brass)" stroke-width="3.5"/>
          <circle cx="40" cy="42" r="14" fill="none" stroke="rgba(201,162,39,.30)" stroke-width="1" stroke-dasharray="2 2"/>
          <circle class="orn-glint" cx="33" cy="35" r="2.6" fill="#fff" opacity=".75"/>
          <rect x="53" y="53" width="9" height="50" rx="4" fill="url(#orn-brass)" stroke="rgba(201,162,39,.7)" stroke-width="1.2" transform="rotate(42 57.5 58)"/>
        </svg>
      </div>
      <span class="ornament-label">Loupe</span>
    </div>
  </div>

</div>

<!-- Shared book overlay -->
<script>
function openBookCard(btn) {
  var c = btn.closest('.book-container');
  if (!c || !c.dataset.url) return;
  // simulate event at book center
  var r = c.getBoundingClientRect();
  var fakeEvent = {clientX: r.left+r.width/2, clientY: r.top+r.height/2, preventDefault:function(){}};
  anBookOpen(c.dataset.url, c.dataset.bg, c.dataset.title, fakeEvent);
}
window.addEventListener('pageshow',function(){
  document.body.style.overflow='';
  var ov=document.getElementById('an-overlay');
  var bk=document.getElementById('an-book');
  if(ov){ov.style.opacity='0';ov.style.pointerEvents='none';}
  if(bk)anBookReset(bk);
});
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
