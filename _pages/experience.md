---
layout: single
title: "Experience"
permalink: /experience/
author_profile: true
description: "Education and work experience of Cao Thien An Nguyen, from an AI engineering internship at SADEC Technology to market research and student leadership."
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&display=swap');

/* The modal layer lives on body so a transformed or blurred ancestor cannot trap it, and it reads the same tokens. */
.exp-content,
.exp-modal-layer{
  --exp-bg:rgba(6,4,22,.6);
  --exp-border:rgba(201,162,39,.2);
  --exp-border-strong:rgba(201,162,39,.3);
  --exp-divider:#c9a227;
  --exp-gold:#f0c84a;
  --exp-gold-glow:rgba(240,200,74,.5);
  --exp-text:#f8f4ec;
  --exp-text-dim:rgba(240,230,208,.6);
  --exp-text-dimmer:rgba(240,230,208,.55);
  --exp-text-faint:rgba(240,230,208,.4);
  --exp-text-body:rgba(240,230,208,.88);
  --exp-star-bg:rgba(248,244,236,.96);
  --exp-star-icon:#8a6a10;
  --exp-tag-bg:rgba(9,7,26,.75);
  --exp-modal-overlay:rgba(5,4,16,.72);
  --exp-modal-bg:rgba(16,13,38,.92);
  --exp-star-core:#fff8e0;
  --exp-gold-glow-soft:rgba(240,200,74,.25);
  --exp-ring-color:rgba(90,170,255,.85);
  --exp-nebula-a:rgba(120,80,220,.16);
  --exp-nebula-b:rgba(70,140,220,.14);
}
.exp-content{
  background:var(--exp-bg);backdrop-filter:blur(20px);border:1px solid var(--exp-border);border-radius:16px;padding:35px;box-shadow:0 10px 30px rgba(0,0,0,.4),inset 0 1px 0 rgba(201,162,39,.08);color:var(--exp-text);position:relative;
}
body.an-day-mode .exp-content,
body.an-day-mode .exp-modal-layer{
  --exp-bg:rgba(255,250,238,.85);
  --exp-border:rgba(154,110,30,.3);
  --exp-border-strong:rgba(154,110,30,.4);
  --exp-divider:#a97a1a;
  --exp-gold:#8a5c0c;
  --exp-gold-glow:rgba(154,106,16,.4);
  --exp-text:#3a2a10;
  --exp-text-dim:rgba(74,54,20,.72);
  --exp-text-dimmer:rgba(74,54,20,.62);
  --exp-text-faint:rgba(74,54,20,.48);
  --exp-text-body:rgba(58,42,16,.88);
  --exp-star-bg:rgba(255,252,244,.98);
  --exp-star-icon:#8a5c0c;
  --exp-tag-bg:rgba(255,250,238,.88);
  --exp-modal-overlay:rgba(58,42,16,.4);
  --exp-modal-bg:rgba(255,250,238,.97);
  --exp-star-core:#fffdf2;
  --exp-gold-glow-soft:rgba(154,106,16,.18);
  --exp-ring-color:rgba(30,95,180,.6);
  --exp-nebula-a:rgba(120,80,220,.05);
  --exp-nebula-b:rgba(70,140,220,.05);
}
body.an-day-mode .exp-content{
  box-shadow:0 10px 30px rgba(120,90,30,.18),inset 0 1px 0 rgba(255,255,255,.5);
}
.exp-content::before{content:'';position:absolute;top:0;left:8%;right:8%;height:1px;background:linear-gradient(to right,transparent,var(--exp-divider),transparent);}

.exp-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:8px;}
.exp-tab-btn{font-family:'Cinzel',serif!important;font-weight:600!important;font-size:.85rem;letter-spacing:.14em;text-transform:uppercase;color:var(--exp-text-dimmer);background:transparent;border:1px solid var(--exp-border);border-radius:999px;padding:8px 22px;cursor:pointer;transition:all .25s ease;}
.exp-tab-btn:hover{color:var(--exp-text-dim);border-color:var(--exp-border-strong);}
.exp-tab-btn.active{color:var(--exp-gold);background:rgba(201,162,39,.12);border-color:var(--exp-border-strong);box-shadow:0 0 14px var(--exp-gold-glow);}
body.an-day-mode .exp-tab-btn.active{background:rgba(154,110,30,.12);}

.exp-hint{text-align:center;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.82rem;color:var(--exp-text-faint);margin:14px 0 0;}

.exp-network{position:relative;width:100%;max-width:820px;aspect-ratio:3/2;margin:26px auto 0;}
.exp-network::before{
  content:'';position:absolute;inset:0;pointer-events:none;
  background-image:
    radial-gradient(1.5px 1.5px at 9% 16%, rgba(255,255,255,.55) 0, transparent 60%),
    radial-gradient(1px 1px at 23% 68%, rgba(255,255,255,.4) 0, transparent 60%),
    radial-gradient(1.5px 1.5px at 39% 12%, rgba(255,255,255,.5) 0, transparent 60%),
    radial-gradient(1px 1px at 56% 82%, rgba(255,255,255,.3) 0, transparent 60%),
    radial-gradient(1.5px 1.5px at 69% 24%, rgba(255,255,255,.5) 0, transparent 60%),
    radial-gradient(1px 1px at 83% 58%, rgba(255,255,255,.38) 0, transparent 60%),
    radial-gradient(1px 1px at 93% 86%, rgba(255,255,255,.28) 0, transparent 60%),
    radial-gradient(1.5px 1.5px at 5% 90%, rgba(255,255,255,.4) 0, transparent 60%),
    radial-gradient(ellipse 55% 42% at 22% 28%, var(--exp-nebula-a) 0%, transparent 72%),
    radial-gradient(ellipse 50% 38% at 78% 74%, var(--exp-nebula-b) 0%, transparent 72%);
  background-size:100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 100%;
  background-position:0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0;
  background-repeat:no-repeat;
}
.exp-orbit{position:absolute;inset:0;}
.exp-network-svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;}
.exp-lines-group{opacity:0;animation:expLinesReveal .8s ease forwards;animation-delay:.5s;}
@keyframes expLinesReveal{to{opacity:1;}}
.exp-net-glow{stroke:var(--exp-gold);stroke-width:1.6;stroke-linecap:round;fill:none;opacity:.18;transition:opacity .25s ease,stroke-width .25s ease;}
.exp-net-core{stroke:url(#expLineGrad);stroke-width:.4;stroke-linecap:round;fill:none;filter:drop-shadow(0 0 2px var(--exp-gold-glow));transition:stroke-width .25s ease,opacity .25s ease;opacity:.85;}
.exp-net-line.dim .exp-net-glow{opacity:.08;}
.exp-net-line.dim .exp-net-core{opacity:.35;}
.exp-net-line.lit .exp-net-glow{opacity:.4;stroke-width:2.2;}
.exp-net-line.lit .exp-net-core{stroke:var(--exp-gold);opacity:1;stroke-width:.6;filter:drop-shadow(0 0 5px var(--exp-gold-glow));}
.exp-net-beam{stroke:#fffbe8;stroke-width:1.1;stroke-linecap:round;fill:none;filter:drop-shadow(0 0 4px var(--exp-gold));animation:expBeamFlow linear infinite;}
@keyframes expBeamFlow{to{stroke-dashoffset:var(--beam-end);}}
@media(prefers-reduced-motion:reduce){
  .exp-lines-group{opacity:1;animation:none;}
  .exp-net-beam{display:none;}
}

.exp-node{position:absolute;transform:translate(-50%,-50%);opacity:0;animation:expNodeReveal .55s ease forwards;animation-delay:calc(var(--i,0) * 90ms + .1s);}
@keyframes expNodeReveal{from{opacity:0;transform:translate(-50%,-50%) scale(.4);}to{opacity:1;transform:translate(-50%,-50%) scale(1);}}
@media(prefers-reduced-motion:reduce){.exp-node{opacity:1;animation:none;}}
.exp-node-btn{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;background:transparent;border:none;cursor:grab;padding:6px;font:inherit;color:inherit;touch-action:none;user-select:none;-webkit-user-select:none;}
.exp-node-btn:active,.exp-node.dragging .exp-node-btn{cursor:grabbing;}
.exp-node-btn:focus-visible{outline:2px solid var(--exp-gold);outline-offset:4px;border-radius:50%;}

.exp-star{position:relative;width:50px;height:50px;border-radius:50%;background:radial-gradient(circle at 32% 30%,var(--exp-star-core) 0%,var(--exp-star-bg) 55%,transparent 100%);display:flex;align-items:center;justify-content:center;box-shadow:0 0 10px 2px var(--exp-gold-glow),0 0 22px 4px var(--exp-gold-glow-soft);transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease;}
.exp-star-frame{position:relative;width:38px;height:38px;border-radius:50%;overflow:hidden;background:var(--exp-star-bg);box-shadow:inset 0 0 0 1px var(--exp-border-strong);}
.exp-star-frame img{width:100%;height:100%;object-fit:cover;}
.exp-star-frame i{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:var(--exp-star-icon);font-size:1rem;}
.exp-star::before{content:'';position:absolute;inset:-10px;border-radius:50%;background:radial-gradient(circle,var(--exp-ring-color) 0%,transparent 68%);opacity:0;transition:opacity .35s ease;}
.exp-star::after{content:'';position:absolute;inset:-9px;border-radius:50%;border:1px solid var(--exp-ring-color);opacity:0;}
.exp-node.active .exp-star{transform:scale(1.18);box-shadow:0 0 20px 4px var(--exp-gold-glow),0 0 46px 10px var(--exp-gold-glow-soft);}
.exp-node.active .exp-star::before{opacity:1;}
@media(prefers-reduced-motion:no-preference){
  .exp-star{animation:expTwinkle 3.2s ease-in-out infinite;}
  .exp-node:nth-child(2n) .exp-star{animation-delay:.6s;}
  .exp-node:nth-child(3n) .exp-star{animation-delay:1.3s;}
  .exp-node.active .exp-star::after{opacity:1;animation:expForceField 1.8s ease-out infinite;}
}
@keyframes expTwinkle{0%,100%{filter:brightness(1);}50%{filter:brightness(1.3);}}
@keyframes expForceField{0%{transform:scale(1);opacity:.9;border-width:1.5px;}100%{transform:scale(2.3);opacity:0;border-width:.5px;}}

.exp-node-tag{font-family:'Cinzel',serif!important;font-weight:600!important;font-size:.76rem;letter-spacing:.02em;color:var(--exp-text-dim);white-space:nowrap;background:var(--exp-tag-bg);padding:3px 11px;border-radius:999px;border:1px solid var(--exp-border);transition:color .2s ease,border-color .2s ease;}
.exp-node.active .exp-node-tag{color:var(--exp-gold);border-color:var(--exp-border-strong);}

.exp-modal-layer{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:1.25rem;background:var(--exp-modal-overlay);backdrop-filter:blur(3px);opacity:0;visibility:hidden;transition:opacity .25s ease;z-index:100000;overscroll-behavior:contain;}
.exp-modal-layer.open{opacity:1;visibility:visible;}
.exp-modal-card{position:relative;width:100%;max-width:540px;max-height:88%;background:var(--exp-modal-bg);backdrop-filter:blur(16px);border:1px solid var(--exp-border-strong);border-radius:16px;padding:34px 38px;box-shadow:0 20px 50px rgba(0,0,0,.35),inset 0 1px 0 rgba(201,162,39,.1);transform:scale(.94);transition:transform .25s ease;color:var(--exp-text);display:flex;flex-direction:column;}
.exp-modal-layer.open .exp-modal-card{transform:scale(1);}
.exp-modal-card::before{content:'';position:absolute;top:0;left:9%;right:9%;height:1px;background:linear-gradient(to right,transparent,var(--exp-divider),transparent);}
.exp-modal-body{overflow-y:auto;min-height:0;scrollbar-width:thin;scrollbar-color:var(--exp-border-strong) transparent;}
.exp-modal-card.wide{max-width:min(1240px,94vw);max-height:92%;}
.exp-modal-close{position:absolute;top:14px;right:14px;width:30px;height:30px;border-radius:50%;background:rgba(201,162,39,.12);border:1px solid var(--exp-border-strong);color:var(--exp-text-dim);cursor:pointer;font-size:1rem;line-height:1;display:flex;align-items:center;justify-content:center;transition:color .2s ease,border-color .2s ease,background .2s ease;z-index:1;}
.exp-modal-close:hover{color:var(--exp-gold);border-color:var(--exp-border-strong);background:rgba(201,162,39,.2);}
.exp-modal-close:focus-visible{outline:2px solid var(--exp-gold);outline-offset:2px;}

.exp-panel-eyebrow{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.82rem;letter-spacing:.06em;color:var(--exp-gold);text-transform:uppercase;margin:0 26px 10px 0;}
.exp-panel-role{font-family:'Cinzel',serif!important;font-weight:700!important;color:var(--exp-gold)!important;font-size:1.22rem;text-shadow:0 0 12px var(--exp-gold-glow);margin:0 26px 4px 0;}
.exp-panel-org{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1rem;color:var(--exp-text-dim);margin:0 0 20px;}
.exp-panel-highlights{list-style:none;margin:0;padding:0;}
.exp-panel-highlights li{font-family:'Cormorant Garamond',serif;font-size:1rem;color:var(--exp-text-body);line-height:1.72;margin-bottom:9px;padding-left:20px;position:relative;}
.exp-panel-highlights li::before{content:'✦';position:absolute;left:0;top:5px;color:var(--exp-divider);font-size:.68rem;}
.exp-panel-highlights li strong{color:var(--exp-text);font-weight:600;}

.exp-node-text{display:contents;}
.exp-node-hint{position:absolute;top:100%;left:50%;transform:translateX(-50%);margin-top:5px;white-space:nowrap;pointer-events:none;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.82rem;color:var(--exp-gold);}
.exp-node.active .exp-node-hint{opacity:0;animation:none;}
@media(prefers-reduced-motion:no-preference){.exp-node-hint{animation:expHintPulse 2.8s ease-in-out infinite;}}
@keyframes expHintPulse{0%,100%{opacity:.72;}50%{opacity:1;}}
body.an-day-mode .exp-modal-close{background:rgba(154,110,30,.14);color:#3a2a10;}
body.an-day-mode .exp-course{background:rgba(154,110,30,.07);}
body.an-day-mode .exp-course.open{background:rgba(154,110,30,.13);}
body.an-day-mode .exp-term-status{background:rgba(154,110,30,.08);}
body.an-day-mode .exp-term-status.live{color:#1b5aa8;border-color:rgba(27,90,168,.55);background:rgba(27,90,168,.07);}

.exp-courses{margin-top:24px;}
.exp-courses-title{display:flex;align-items:center;gap:10px;margin:0 0 4px;font-family:'Cinzel',serif;font-weight:700;font-size:.82rem;letter-spacing:.16em;text-transform:uppercase;color:var(--exp-gold);}
.exp-courses-title::after{content:'';flex:1;height:1px;background:linear-gradient(to right,var(--exp-border-strong),transparent);}
.exp-courses-note{margin:0 0 4px;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.9rem;color:var(--exp-text-dimmer);}
.exp-terms{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:0 30px;align-items:start;}
.exp-term{margin-top:16px;}
.exp-term-extra .exp-term-name{color:var(--exp-gold);}
.exp-term-head{display:flex;align-items:baseline;flex-wrap:wrap;gap:4px 12px;margin-bottom:8px;}
.exp-term-name{font-family:'Cinzel',serif;font-weight:700;font-size:.98rem;color:var(--exp-text);}
.exp-term-meta{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.95rem;color:var(--exp-text-dim);}
.exp-term-status{margin-left:auto;align-self:center;padding:3px 10px;border-radius:999px;border:1px solid var(--exp-border-strong);font-family:'Cinzel',serif;font-weight:600;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--exp-gold);}
.exp-term-status.live{border-color:var(--exp-ring-color);color:var(--exp-ring-color);}

.exp-course-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:7px;}
.exp-course{background:rgba(201,162,39,.06);border:1px solid var(--exp-border);border-radius:10px;transition:border-color .2s ease,background .2s ease;}
.exp-course:hover,.exp-course.open{border-color:var(--exp-border-strong);}
.exp-course.open{background:rgba(201,162,39,.11);}
.exp-course-btn{display:flex;align-items:center;gap:12px;width:100%;padding:10px 14px;background:none;border:0;border-radius:10px;font:inherit;color:inherit;text-align:left;cursor:pointer;}
.exp-course-btn:focus-visible{outline:2px solid var(--exp-gold);outline-offset:-2px;}
.exp-course-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;}
.exp-course-code{font-family:'Cinzel',serif;font-weight:700;font-size:.8rem;letter-spacing:.06em;color:var(--exp-text);}
.exp-course-title{font-family:'Cormorant Garamond',serif;font-size:.96rem;line-height:1.3;color:var(--exp-text-body);}
.exp-course-cr{flex:none;font-family:'Cinzel',serif;font-weight:600;font-size:.74rem;white-space:nowrap;color:var(--exp-gold);}
.exp-course-chev{flex:none;width:7px;height:7px;margin:0 3px 3px 0;border-right:1.5px solid var(--exp-text-dimmer);border-bottom:1.5px solid var(--exp-text-dimmer);transform:rotate(45deg);transition:transform .25s ease;}
.exp-course.open .exp-course-chev{transform:rotate(-135deg);margin:3px 3px 0 0;}
.exp-course-desc{display:grid;grid-template-rows:0fr;visibility:hidden;transition:grid-template-rows .28s ease,visibility 0s .28s;}
.exp-course.open .exp-course-desc{grid-template-rows:1fr;}
.exp-modal-layer.open .exp-course.open .exp-course-desc{visibility:visible;transition:grid-template-rows .28s ease,visibility 0s;}
.exp-course-desc>div{overflow:hidden;min-height:0;}
.exp-course-desc p{margin:0;padding:2px 14px 12px;font-family:'Cormorant Garamond',serif;font-size:1rem;line-height:1.6;color:var(--exp-text-dim);}
@media(prefers-reduced-motion:reduce){.exp-course-desc,.exp-course-chev{transition:none;}}

@media(max-width:600px){
  .exp-content{padding:22px;}
}

@media(max-width:680px){
  .exp-tabs{gap:6px;}
  .exp-tab-btn{padding:7px 14px;font-size:.7rem;letter-spacing:.06em;}
  .exp-modal-card,.exp-modal-card.wide{max-width:none;width:100%;padding:26px 22px;}
  .exp-modal-card.wide{max-height:88%;}
  .exp-modal-close{top:10px;right:10px;}
  .exp-network{aspect-ratio:auto;max-width:none;margin-top:22px;}
  .exp-network::before{opacity:.35;}
  .exp-network-svg{display:none;}
  .exp-orbit{position:static;}
  #expNodes{position:relative;display:flex;flex-direction:column;gap:6px;padding-left:28px;}
  #expNodes::before{content:'';position:absolute;left:19px;top:8px;bottom:8px;width:1px;background:linear-gradient(180deg,var(--exp-gold),transparent);opacity:.5;}
  .exp-node{position:static;transform:none;animation:none;opacity:1;}
  .exp-node-btn{flex-direction:row;align-items:center;gap:12px;width:100%;padding:10px 4px;cursor:pointer;touch-action:auto;}
  .exp-star{width:40px;height:40px;flex:0 0 auto;}
  .exp-star-frame{width:30px;height:30px;}
  .exp-node-tag{white-space:normal;text-align:left;font-size:.72rem;}
  .exp-node-text{display:flex;flex-direction:column;align-items:flex-start;gap:3px;}
  .exp-node-hint{position:static;transform:none;margin-top:0;white-space:normal;text-align:left;}
  .exp-course-btn{padding:9px 12px;gap:10px;}
}
</style>

<div class="exp-content">
  <div class="exp-tabs">
    <button type="button" class="exp-tab-btn active" data-tab="education">Education</button>
    <button type="button" class="exp-tab-btn" data-tab="experience">Experience</button>
  </div>
  <p class="exp-hint">tap a star to open its memory</p>

  <div class="exp-network" id="expNetwork">
    <div class="exp-orbit">
      <svg class="exp-network-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="expLineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f0c84a" stop-opacity=".7"/>
            <stop offset="100%" stop-color="#c9a227" stop-opacity=".25"/>
          </linearGradient>
        </defs>
        <g id="expLines" class="exp-lines-group"></g>
      </svg>
      <div id="expNodes"></div>
    </div>

    <div class="exp-modal-layer" id="expModalLayer">
      <div class="exp-modal-card" id="expModalCard" role="dialog" aria-modal="true" aria-labelledby="expModalRole">
        <button type="button" class="exp-modal-close" id="expModalClose" aria-label="Close">&#10005;</button>
        <div class="exp-modal-body" id="expModalBody">
          <p class="exp-panel-eyebrow" id="expModalDate"></p>
          <h3 class="exp-panel-role" id="expModalRole"></h3>
          <p class="exp-panel-org" id="expModalOrg"></p>
          <ul class="exp-panel-highlights" id="expModalHighlights"></ul>
          <div id="expModalCourses"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
var EXP_DATA = {
  education: {
    nodes: [
      {x:28,y:30,logo:"/assets/images/uwmadison-logo.jpg",role:"B.S. in Economics & Data Science",org:"University of Wisconsin–Madison · Madison, WI",date:"2025 – 2029",highlights:[],hint:"click to see courses taken",courses:{
        terms:[
          {name:"Fall 2025",status:"Completed",items:[["ECON 101",4],["MATH 221",5],["ESL 117",3],["COMP SCI 220",4]]},
          {name:"Spring 2026",status:"Completed",items:[["MUSIC 113",1],["ECON 102",4],["COMP SCI 320",4],["MATH 340",3],["ESL 118",3],["ENGL 153",3]]},
          {name:"Fall 2026",status:"In Progress",items:[["ECON 302",4],["MUSIC 113",1],["COMP SCI 532",3],["BIOCHEM 104",3],["COMP SCI 544",3],["ENGL 169",3]]}
        ],
        extra:[["MATH 222",4]]
      }},
      {x:68,y:62,logo:"/assets/images/ais-logo.jpg",role:"High School Diploma",org:"The Asian International School · Ho Chi Minh City, Vietnam",date:"August 2013 – June 2025",highlights:[]}
    ],
    links: [[0,1]]
  },
  experience: {
    nodes: [
      {x:22,y:36,logo:"/assets/images/visa-logo.jpg",role:"Rotational Program Intern",org:"Vietnamese International Student Association, UW-Madison · Madison, WI",date:"February 2026 – Present",highlights:[
        "<strong>Event Support &amp; Coordination:</strong> Assisted senior members in planning and executing Tet in All Directions (2026), a large-scale cultural celebration with 500+ attendees, managing logistics, volunteer coordination, and on-site operations.",
        "<strong>Presentation &amp; Workshop Leadership:</strong> Led the planning and development of a comprehensive presentation for Cultural Workshop 2026, an educational event with 30+ participants, covering Vietnamese cultural traditions and student community resources."
      ]},
      {x:52,y:11,logo:"/assets/images/sadec-logo-square.png",logoDay:"/assets/images/sadec-logo-square-dark.png",role:"AI Engineer Intern",org:"SADEC Technology JSC · Ho Chi Minh City, Vietnam",date:"June 2026 – August 2026",highlights:[
        "Built Ciel, an enterprise RAG chatbot that answers employee questions from company documents with inline citations, supporting Vietnamese, English, Japanese, and Chinese.",
        "Designed a hybrid retrieval pipeline (BM25, vector search, and cross-encoder reranking) so answers stay grounded in the actual source text instead of the model's memory."
      ]},
      {x:80,y:36,logo:"/assets/images/mushroom-of-love-logo.jpg",role:"Founder & Project Lead",org:"Mush-Room of Love · Ho Chi Minh City, Vietnam",date:"2023 – 2025",highlights:[
        "<strong>Leadership &amp; Operations:</strong> Recruited and led a dedicated team of 7 students to manage the full product lifecycle, from sourcing organic mushrooms at farms and designing eco-friendly packaging to executing Facebook sales campaigns.",
        "<strong>Sales Performance:</strong> Successfully distributed 154 kg of inventory to over 240 customers, generating 40.1 million VND in net profit with a 35% margin in the first year.",
        "<strong>Community Impact:</strong> Directed 100% of proceeds to Huynh De Nhu Nghia Shelter, and organized a charity music event with the team, delivering gifts and spiritual encouragement to visually impaired students."
      ]},
      {x:80,y:60,logo:"/assets/images/ulsa-logo.jpg",role:"Research Assistant",org:"University of Labour and Social Affairs · Ho Chi Minh City, Vietnam",date:"March 2024 – July 2024",highlights:[
        "<strong>Market Research &amp; Analysis:</strong> Conducted an in-depth analysis of the semiconductor human resource shortage in Vietnam versus Taiwan, synthesizing data from 20+ industry reports to identify a critical 80% supply-demand gap.",
        "<strong>Case Study Development:</strong> Executed a comparative case study on TSMC's talent strategy, extracting lessons on specialization and FDI attraction to propose 3 policy recommendations for Vietnam's workforce development.",
        "<strong>Publication:</strong> Co-authored and published the peer-reviewed article \"Current Situation of Human Resources in the Semiconductor Industry in Vietnam and Experiences From Taiwan\" in the International Research Journal of Economics and Management Studies (Vol. 3, No. 8)."
      ]},
      {x:64,y:86,logo:"/assets/images/hodeco-logo.png",role:"Business Intern",org:"Ba Ria – Vung Tau House Development JSC · Ho Chi Minh City, Vietnam",date:"July 2024",highlights:[
        "<strong>Data Analysis:</strong> Analyzed a real estate dataset of 500+ properties using Advanced Excel (Pivot Tables, VLOOKUP), identifying 3 underperforming assets and proposing pricing adjustments.",
        "<strong>Sales Reporting &amp; Presentation:</strong> Spearheaded the weekly sales reporting process, cleansing corrupt raw datasets to ensure 98% data accuracy, and presented strategic insights to 20 stakeholders, cutting preparation time by 30%.",
        "<strong>Market Research:</strong> Conducted competitor analysis that contributed to a 10% refinement in the company's marketing strategy for Q3."
      ]},
      {x:94,y:86,logo:"/assets/images/bamboo-capital-logo.png",role:"Business Intern",org:"Bamboo Capital Group · Ho Chi Minh City, Vietnam",date:"July 2023",highlights:[
        "<strong>Data Integrity &amp; Operations:</strong> Managed the accurate entry of weekly sales data into the company's ERP, ensuring 100% data accuracy to support warehouse inventory operations and logistics planning.",
        "<strong>Strategic Market Research:</strong> Conducted a comprehensive analysis of 5+ key distribution channels, identifying coverage gaps and proposing improvements adopted by the marketing team.",
        "<strong>Process Optimization:</strong> Streamlined administrative workflows by digitizing a backlog of physical documents, reducing file retrieval time by 20% and enhancing information security."
      ]}
    ],
    links: [[1,0],[1,2],[2,3],[3,4],[3,5]]
  }
};

var COURSE_INFO = {
  "ECON 101": {title:"Principles of Microeconomics", desc:"How households, firms, and markets make choices: supply and demand, costs and competition, market failures, and the role of government."},
  "ECON 102": {title:"Principles of Macroeconomics", desc:"The economy as a whole: GDP, unemployment, inflation, and growth, and how monetary and fiscal policy respond to the business cycle."},
  "ECON 302": {title:"Intermediate Macroeconomic Theory", desc:"A model-based look at output, employment, inflation, and growth, and how policy shifts them in the short and long run."},
  "MATH 221": {title:"Calculus and Analytic Geometry 1", desc:"Limits, derivatives, and an introduction to integrals for functions of one variable, with applications to rates of change and optimization."},
  "MATH 222": {title:"Calculus and Analytic Geometry 2", desc:"Techniques of integration, improper integrals, infinite sequences and series, and Taylor series."},
  "MATH 340": {title:"Elementary Matrix and Linear Algebra", desc:"Systems of linear equations, matrices, determinants, vector spaces, and eigenvalues: the linear algebra behind most of data science."},
  "ESL 117": {title:"Academic Writing I", desc:"Academic writing for multilingual students: building clear paragraphs and essays, organizing an argument, and using sources responsibly."},
  "ESL 118": {title:"Academic Writing II", desc:"A second course in academic writing with longer research-based essays, stronger argumentation, and revision for a university audience."},
  "COMP SCI 220": {title:"Data Science Programming I", desc:"Programming fundamentals in Python for data work: data structures, functions, files, and the first steps of analyzing real datasets."},
  "COMP SCI 320": {title:"Data Science Programming II", desc:"Continues Data Science Programming I with larger Python programs, more advanced data structures, and working with data from several sources."},
  "COMP SCI 532": {title:"Matrix Methods in Machine Learning", desc:"Linear algebra applied to machine learning: least squares, SVD, PCA, and the optimization methods behind modern models."},
  "COMP SCI 544": {title:"Introduction to Big Data Systems", desc:"How large datasets are stored and processed across many machines: distributed file systems, MapReduce and Spark style processing, and data pipelines."},
  "BIOCHEM 104": {title:"Molecules to Life & Science", desc:"An introduction to the molecules of life and how biochemistry shapes health, food, and modern science, written for a broad audience."},
  "MUSIC 113": {title:"Music in Performance", desc:"A one-credit music course about experiencing music in performance: listening closely and engaging with live concerts and performers."},
  "ENGL 153": {title:"Literature and the Environment", desc:"Reading and writing about literature through the lens of nature: how authors imagine the environment, ecology, and our place in it."},
  "ENGL 169": {title:"Modern American Literature", desc:"A survey of American literature from the modern era, reading fiction, poetry, and drama in their cultural context."}
};

(function(){
  var current = "education";
  var nodesEl = document.getElementById("expNodes");
  var linesEl = document.getElementById("expLines");
  var modalLayer = document.getElementById("expModalLayer");
  var expNetworkEl = document.getElementById("expNetwork");
  var lastFocused = null;
  document.body.appendChild(modalLayer);

  var nodeEls = [];
  var lineEls = {};
  var dragIndex = null;
  var dragMoved = false;
  var dragStartClientX = 0;
  var dragStartClientY = 0;
  var justDragged = false;

  function renderNetwork(){
    var set = EXP_DATA[current];
    nodesEl.innerHTML = "";
    linesEl.innerHTML = "";
    nodeEls = [];
    lineEls = {};

    set.nodes.forEach(function(item){
      if(item._bx === undefined){ item._bx = item.x; item._by = item.y; }
    });

    var depth = computeDepth(set);

    set.links.forEach(function(pair){
      var key = pair[0] + "-" + pair[1];
      var g = document.createElementNS("http://www.w3.org/2000/svg","g");
      g.setAttribute("class", "exp-net-line");
      g.setAttribute("data-pair", key);
      var glow = document.createElementNS("http://www.w3.org/2000/svg","line");
      glow.setAttribute("class", "exp-net-glow");
      var core = document.createElementNS("http://www.w3.org/2000/svg","line");
      core.setAttribute("class", "exp-net-core");
      var beam = document.createElementNS("http://www.w3.org/2000/svg","line");
      beam.setAttribute("class", "exp-net-beam");
      beam.style.animationDelay = (depth[pair[0]] * 0.35) + "s";
      g.appendChild(glow);
      g.appendChild(core);
      g.appendChild(beam);
      linesEl.appendChild(g);
      lineEls[key] = { glow: glow, core: core, beam: beam };
    });

    set.nodes.forEach(function(item, i){
      var div = document.createElement("div");
      div.className = "exp-node";
      div.style.left = item._bx + "%";
      div.style.top = item._by + "%";
      div.style.setProperty("--i", i);
      var isDayMode = document.body.classList.contains("an-day-mode");
      var logoSrc = (isDayMode && item.logoDay) ? item.logoDay : item.logo;
      var starInner = logoSrc
        ? '<img src="' + logoSrc + '" alt="">'
        : '<i class="fas ' + item.icon + '"></i>';
      var hintHtml = item.hint ? '<span class="exp-node-hint">' + item.hint + '</span>' : '';
      div.innerHTML =
        '<button type="button" class="exp-node-btn" data-index="' + i + '" aria-haspopup="dialog">' +
          '<span class="exp-star" aria-hidden="true"><span class="exp-star-frame">' + starInner + '</span></span>' +
          '<span class="exp-node-text"><span class="exp-node-tag">' + item.role + '</span>' + hintHtml + '</span>' +
        '</button>';
      nodesEl.appendChild(div);
      nodeEls.push(div);
    });

    updateLines();
  }

  function computeDepth(set){
    var hasParent = {};
    set.links.forEach(function(pair){ hasParent[pair[1]] = true; });
    var root = 0;
    for(var i = 0; i < set.nodes.length; i++){ if(!hasParent[i]){ root = i; break; } }
    var depth = {};
    depth[root] = 0;
    var queue = [root];
    while(queue.length){
      var cur = queue.shift();
      set.links.forEach(function(pair){
        if(pair[0] === cur && depth[pair[1]] === undefined){
          depth[pair[1]] = depth[cur] + 1;
          queue.push(pair[1]);
        }
      });
    }
    return depth;
  }

  function updateLines(){
    var set = EXP_DATA[current];
    set.links.forEach(function(pair){
      var entry = lineEls[pair[0] + "-" + pair[1]];
      if(!entry) return;
      var a = set.nodes[pair[0]], b = set.nodes[pair[1]];
      var len = Math.hypot(b._bx - a._bx, b._by - a._by);
      [entry.glow, entry.core, entry.beam].forEach(function(el){
        el.setAttribute("x1", a._bx); el.setAttribute("y1", a._by);
        el.setAttribute("x2", b._bx); el.setAttribute("y2", b._by);
      });
      entry.beam.setAttribute("stroke-dasharray", (len * 0.22) + " " + (len * 0.78));
      entry.beam.style.setProperty("--beam-end", -len);
      entry.beam.style.animationDuration = Math.max(0.9, len * 0.045) + "s";
    });
  }

  function highlightLinks(index){
    linesEl.querySelectorAll(".exp-net-line").forEach(function(line){
      var pair = line.getAttribute("data-pair").split("-").map(Number);
      var touches = index !== null && (pair[0] === index || pair[1] === index);
      line.classList.toggle("lit", touches);
      line.classList.toggle("dim", index !== null && !touches);
    });
  }

  var courseSeq = 0;

  function esc(s){
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  }

  function sumCredits(items){
    return items.reduce(function(total, it){ return total + it[1]; }, 0);
  }

  function courseRow(code, credits){
    var info = COURSE_INFO[code];
    var id = "expCourseDesc" + (++courseSeq);
    return '<li class="exp-course">' +
      '<button type="button" class="exp-course-btn" aria-expanded="false" aria-controls="' + id + '">' +
        '<span class="exp-course-main"><span class="exp-course-code">' + esc(code) + '</span>' +
        '<span class="exp-course-title">' + esc(info.title) + '</span></span>' +
        '<span class="exp-course-cr">' + credits + ' Cr</span>' +
        '<span class="exp-course-chev" aria-hidden="true"></span>' +
      '</button>' +
      '<div class="exp-course-desc" id="' + id + '"><div><p>' + esc(info.desc) + '</p></div></div>' +
    '</li>';
  }

  function courseList(items){
    return '<ul class="exp-course-list">' + items.map(function(it){ return courseRow(it[0], it[1]); }).join("") + '</ul>';
  }

  function termBlock(term){
    return '<div class="exp-term"><div class="exp-term-head">' +
      '<span class="exp-term-name">' + esc(term.name) + '</span>' +
      '<span class="exp-term-meta">' + sumCredits(term.items) + ' credits</span>' +
      '<span class="exp-term-status' + (term.status === "In Progress" ? ' live' : '') + '">' + esc(term.status) + '</span>' +
      '</div>' + courseList(term.items) + '</div>';
  }

  function extraBlock(items){
    return '<div class="exp-term exp-term-extra"><div class="exp-term-head">' +
      '<span class="exp-term-name">Additional Credits</span>' +
      '<span class="exp-term-meta">' + sumCredits(items) + ' credits</span>' +
      '</div>' + courseList(items) + '</div>';
  }

  /* Each term is a column that wraps to fewer columns as the modal narrows. Additional Credits
     joins the column with the fewest courses so the columns end at about the same height. */
  function renderCourses(data){
    var cols = data.terms.map(function(term){
      return { size: term.items.length, html: termBlock(term) };
    });
    if(data.extra && data.extra.length){
      var shortest = 0;
      cols.forEach(function(col, i){ if(col.size < cols[shortest].size) shortest = i; });
      cols[shortest].html += extraBlock(data.extra);
      cols[shortest].size += data.extra.length;
    }
    return '<div class="exp-courses">' +
      '<div class="exp-courses-title" role="heading" aria-level="4">Courses taken</div>' +
      '<p class="exp-courses-note">tap a course to read what it covers</p>' +
      '<div class="exp-terms">' + cols.map(function(col){ return '<div class="exp-term-col">' + col.html + '</div>'; }).join("") + '</div>' +
      '</div>';
  }

  document.getElementById("expModalCourses").addEventListener("click", function(e){
    var btn = e.target.closest(".exp-course-btn");
    if(!btn) return;
    var open = btn.parentNode.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  function openModal(index){
    var item = EXP_DATA[current].nodes[index];
    nodesEl.querySelectorAll(".exp-node").forEach(function(n, i){ n.classList.toggle("active", i === index); });
    highlightLinks(index);

    document.getElementById("expModalDate").textContent = item.date;
    document.getElementById("expModalRole").textContent = item.role;
    document.getElementById("expModalOrg").textContent = item.org;
    var list = document.getElementById("expModalHighlights");
    if(item.highlights.length){
      list.innerHTML = item.highlights.map(function(h){ return "<li>" + h + "</li>"; }).join("");
    } else {
      list.innerHTML = "";
    }
    document.getElementById("expModalCourses").innerHTML = item.courses ? renderCourses(item.courses) : "";
    document.getElementById("expModalCard").classList.toggle("wide", !!item.courses);
    document.getElementById("expModalBody").scrollTop = 0;

    lastFocused = document.activeElement;
    modalLayer.classList.add("open");
    document.getElementById("expModalClose").focus();
  }

  function closeModal(){
    modalLayer.classList.remove("open");
    nodesEl.querySelectorAll(".exp-node").forEach(function(n){ n.classList.remove("active"); });
    highlightLinks(null);
    if(lastFocused) lastFocused.focus();
  }

  nodesEl.addEventListener("click", function(e){
    var btn = e.target.closest(".exp-node-btn");
    if(!btn) return;
    if(justDragged){ justDragged = false; return; }
    openModal(parseInt(btn.getAttribute("data-index"), 10));
  });

  nodesEl.addEventListener("pointerdown", function(e){
    var btn = e.target.closest(".exp-node-btn");
    if(!btn) return;
    dragIndex = parseInt(btn.getAttribute("data-index"), 10);
    dragMoved = false;
    dragStartClientX = e.clientX;
    dragStartClientY = e.clientY;
    btn.setPointerCapture(e.pointerId);
    nodeEls[dragIndex].classList.add("dragging");
  });

  nodesEl.addEventListener("pointermove", function(e){
    if(dragIndex === null) return;
    var dx = e.clientX - dragStartClientX;
    var dy = e.clientY - dragStartClientY;
    if(!dragMoved && Math.hypot(dx, dy) > 4) dragMoved = true;
    if(!dragMoved) return;
    var rect = expNetworkEl.getBoundingClientRect();
    var px = ((e.clientX - rect.left) / rect.width) * 100;
    var py = ((e.clientY - rect.top) / rect.height) * 100;
    px = Math.min(94, Math.max(6, px));
    py = Math.min(94, Math.max(6, py));
    var item = EXP_DATA[current].nodes[dragIndex];
    item._bx = px; item._by = py;
    nodeEls[dragIndex].style.left = px + "%";
    nodeEls[dragIndex].style.top = py + "%";
    updateLines();
  });

  function endDrag(){
    if(dragIndex === null) return;
    if(dragMoved) justDragged = true;
    if(nodeEls[dragIndex]) nodeEls[dragIndex].classList.remove("dragging");
    dragIndex = null;
    dragMoved = false;
  }
  nodesEl.addEventListener("pointerup", endDrag);
  nodesEl.addEventListener("pointercancel", endDrag);

  document.getElementById("expModalClose").addEventListener("click", closeModal);
  modalLayer.addEventListener("click", function(e){
    if(e.target === modalLayer) closeModal();
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && modalLayer.classList.contains("open")) closeModal();
  });

  document.querySelectorAll(".exp-tab-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      document.querySelectorAll(".exp-tab-btn").forEach(function(b){ b.classList.remove("active"); });
      btn.classList.add("active");
      current = btn.getAttribute("data-tab");
      closeModal();
      renderNetwork();
    });
  });

  renderNetwork();

  new MutationObserver(function(){ renderNetwork(); })
    .observe(document.body, { attributes: true, attributeFilter: ["class"] });
})();
</script>
