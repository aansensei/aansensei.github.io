---
layout: single
title: "Experience"
permalink: /experience/
author_profile: true
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&display=swap');

.exp-content{background:rgba(6,4,22,.6);backdrop-filter:blur(20px);border:1px solid rgba(201,162,39,.2);border-radius:16px;padding:35px;box-shadow:0 10px 30px rgba(0,0,0,.4),inset 0 1px 0 rgba(201,162,39,.08);color:#f8f4ec;position:relative;}
.exp-content::before{content:'';position:absolute;top:0;left:8%;right:8%;height:1px;background:linear-gradient(to right,transparent,#c9a227,transparent);}

.exp-tabs{display:flex;justify-content:center;gap:10px;margin-bottom:8px;}
.exp-tab-btn{font-family:'Cinzel',serif!important;font-weight:600!important;font-size:.85rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,230,208,.55);background:transparent;border:1px solid rgba(201,162,39,.25);border-radius:999px;padding:8px 22px;cursor:pointer;transition:all .25s ease;}
.exp-tab-btn:hover{color:rgba(240,230,208,.85);border-color:rgba(201,162,39,.5);}
.exp-tab-btn.active{color:#f0c84a;background:rgba(201,162,39,.12);border-color:rgba(201,162,39,.7);box-shadow:0 0 14px rgba(240,200,74,.2);}

.exp-hint{text-align:center;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.82rem;color:rgba(240,230,208,.4);margin:14px 0 0;}

.exp-network{position:relative;width:100%;max-width:640px;aspect-ratio:8/5;margin:26px auto 0;}
.exp-network::before{content:'';position:absolute;inset:0;background-image:url('/assets/images/dong-son-drum.svg');background-size:min(78%,440px) auto;background-position:center;background-repeat:no-repeat;opacity:.5;pointer-events:none;transform-origin:50% 50%;}
@media(prefers-reduced-motion:no-preference){
  .exp-network::before{animation:expMedallionSpin 220s linear infinite;}
  .exp-orbit{animation:expOrbitSway 26s ease-in-out infinite;}
  .exp-node-btn{animation:expNodeCounterSway 26s ease-in-out infinite;}
}
@keyframes expMedallionSpin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
@keyframes expOrbitSway{0%,100%{transform:rotate(-5deg);}50%{transform:rotate(5deg);}}
@keyframes expNodeCounterSway{0%,100%{transform:rotate(5deg);}50%{transform:rotate(-5deg);}}
.exp-orbit{position:absolute;inset:0;transform-origin:50% 50%;}
.exp-network-svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;}
.exp-net-line{stroke:url(#expLineGrad);stroke-width:.35;fill:none;filter:drop-shadow(0 0 2px rgba(240,200,74,.5));transition:stroke-width .25s ease,opacity .25s ease;}
.exp-net-line.dim{opacity:.25;}
.exp-net-line.lit{stroke:#fbe19a;stroke-width:.55;filter:drop-shadow(0 0 4px rgba(251,225,154,.85));}

.exp-node{position:absolute;transform:translate(-50%,-50%);}
.exp-node-btn{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;background:transparent;border:none;cursor:pointer;padding:6px;font:inherit;color:inherit;}
.exp-node-btn:focus-visible{outline:2px solid #f0c84a;outline-offset:4px;border-radius:50%;}

.exp-star{position:relative;width:38px;height:38px;border-radius:50%;background:rgba(248,244,236,.96);border:1px solid rgba(201,162,39,.55);overflow:hidden;display:flex;align-items:center;justify-content:center;box-shadow:0 0 8px rgba(240,200,74,.5);transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease;}
.exp-star img{width:100%;height:100%;object-fit:cover;}
.exp-star i{color:#8a6a10;font-size:1rem;}
.exp-star::after{content:'';position:absolute;inset:-7px;border-radius:50%;border:1px solid rgba(240,200,74,.55);opacity:0;transition:opacity .3s ease;}
.exp-node.active .exp-star{transform:scale(1.14);box-shadow:0 0 16px rgba(240,200,74,.85),0 0 30px rgba(240,200,74,.35);}
.exp-node.active .exp-star::after{opacity:1;}
@media(prefers-reduced-motion:no-preference){
  .exp-star{animation:expTwinkle 3.2s ease-in-out infinite;}
  .exp-node:nth-child(2n) .exp-star{animation-delay:.6s;}
  .exp-node:nth-child(3n) .exp-star{animation-delay:1.3s;}
}
@keyframes expTwinkle{0%,100%{filter:brightness(1);}50%{filter:brightness(1.3);}}

.exp-node-tag{font-family:'Cinzel',serif!important;font-weight:600!important;font-size:.64rem;letter-spacing:.02em;color:rgba(240,230,208,.6);white-space:nowrap;background:rgba(9,7,26,.75);padding:2px 9px;border-radius:999px;border:1px solid rgba(201,162,39,.2);transition:color .2s ease,border-color .2s ease;}
.exp-node.active .exp-node-tag{color:#f0c84a;border-color:rgba(201,162,39,.6);}

.exp-modal-layer{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:1.25rem;background:rgba(5,4,16,.72);backdrop-filter:blur(3px);opacity:0;visibility:hidden;transition:opacity .25s ease;z-index:5;}
.exp-modal-layer.open{opacity:1;visibility:visible;}
.exp-modal-card{position:relative;width:100%;max-width:420px;background:rgba(16,13,38,.92);backdrop-filter:blur(16px);border:1px solid rgba(201,162,39,.3);border-radius:16px;padding:28px 30px;box-shadow:0 20px 50px rgba(0,0,0,.55),inset 0 1px 0 rgba(201,162,39,.1);transform:scale(.94);transition:transform .25s ease;max-height:85%;overflow-y:auto;}
.exp-modal-layer.open .exp-modal-card{transform:scale(1);}
.exp-modal-card::before{content:'';position:absolute;top:0;left:9%;right:9%;height:1px;background:linear-gradient(to right,transparent,#c9a227,transparent);}
.exp-modal-close{position:absolute;top:14px;right:14px;width:30px;height:30px;border-radius:50%;background:rgba(201,162,39,.12);border:1px solid rgba(201,162,39,.3);color:rgba(240,230,208,.6);cursor:pointer;font-size:1rem;line-height:1;display:flex;align-items:center;justify-content:center;transition:color .2s ease,border-color .2s ease,background .2s ease;}
.exp-modal-close:hover{color:#f0c84a;border-color:rgba(201,162,39,.7);background:rgba(201,162,39,.2);}
.exp-modal-close:focus-visible{outline:2px solid #f0c84a;outline-offset:2px;}

.exp-panel-eyebrow{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.82rem;letter-spacing:.06em;color:rgba(201,162,39,.8);text-transform:uppercase;margin:0 26px 10px 0;}
.exp-panel-role{font-family:'Cinzel',serif!important;font-weight:700!important;color:#f0c84a!important;font-size:1.22rem;text-shadow:0 0 12px rgba(201,162,39,.35);margin:0 26px 4px 0;}
.exp-panel-org{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1rem;color:rgba(240,230,208,.65);margin:0 0 20px;}
.exp-panel-highlights{list-style:none;margin:0;padding:0;}
.exp-panel-highlights li{font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(240,230,208,.88);line-height:1.72;margin-bottom:9px;padding-left:20px;position:relative;}
.exp-panel-highlights li::before{content:'✦';position:absolute;left:0;top:5px;color:#c9a227;font-size:.68rem;}
.exp-panel-highlights li strong{color:#f8f4ec;font-weight:600;}

@media(max-width:600px){
  .exp-content{padding:22px;}
  .exp-star{width:32px;height:32px;}
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
        <g id="expLines"></g>
      </svg>
      <div id="expNodes"></div>
    </div>

    <div class="exp-modal-layer" id="expModalLayer">
      <div class="exp-modal-card" id="expModalCard" role="dialog" aria-modal="true" aria-labelledby="expModalRole">
        <button type="button" class="exp-modal-close" id="expModalClose" aria-label="Close">&#10005;</button>
        <p class="exp-panel-eyebrow" id="expModalDate"></p>
        <h3 class="exp-panel-role" id="expModalRole"></h3>
        <p class="exp-panel-org" id="expModalOrg"></p>
        <ul class="exp-panel-highlights" id="expModalHighlights"></ul>
      </div>
    </div>
  </div>
</div>

<script>
var EXP_DATA = {
  education: {
    nodes: [
      {x:28,y:30,logo:"/assets/images/uwmadison-logo.jpg",role:"B.S. in Economics & Data Science",org:"University of Wisconsin–Madison · Madison, WI",date:"2025 – 2029",highlights:[]},
      {x:68,y:62,logo:"/assets/images/ais-logo.jpg",role:"High School Diploma",org:"The Asian International School · Ho Chi Minh City, Vietnam",date:"August 2013 – June 2025",highlights:[]}
    ],
    links: [[0,1]]
  },
  experience: {
    nodes: [
      {x:16,y:16,logo:"/assets/images/visa-logo.jpg",role:"Rotational Program Intern",org:"Vietnamese International Student Association, UW-Madison · Madison, WI",date:"February 2026 – Present",highlights:[
        "<strong>Event Support &amp; Coordination:</strong> Assisted senior members in planning and executing Tet in All Directions (2026), a large-scale cultural celebration with 500+ attendees, managing logistics, volunteer coordination, and on-site operations.",
        "<strong>Presentation &amp; Workshop Leadership:</strong> Led the planning and development of a comprehensive presentation for Cultural Workshop 2026, an educational event with 30+ participants, covering Vietnamese cultural traditions and student community resources."
      ]},
      {x:44,y:10,logo:"/assets/images/sadec-logo-square.png",role:"AI Engineer Intern",org:"SADEC Technology JSC · Ho Chi Minh City, Vietnam",date:"June 2026 – August 2026",highlights:[
        "Built Ciel, an enterprise RAG chatbot that answers employee questions from company documents with inline citations, supporting Vietnamese, English, Japanese, and Chinese.",
        "Designed a hybrid retrieval pipeline (BM25, vector search, and cross-encoder reranking) so answers stay grounded in the actual source text instead of the model's memory."
      ]},
      {x:76,y:20,logo:"/assets/images/mushroom-of-love-logo.jpg",role:"Founder & Project Lead",org:"Mush-Room of Love · Ho Chi Minh City, Vietnam",date:"2023 – 2025",highlights:[
        "<strong>Leadership &amp; Operations:</strong> Recruited and led a dedicated team of 7 students to manage the full product lifecycle, from sourcing organic mushrooms at farms and designing eco-friendly packaging to executing Facebook sales campaigns.",
        "<strong>Sales Performance:</strong> Successfully distributed 154 kg of inventory to over 240 customers, generating 40.1 million VND in net profit with a 35% margin in the first year.",
        "<strong>Community Impact:</strong> Directed 100% of proceeds to Huynh De Nhu Nghia Shelter, and organized a charity music event with the team, delivering gifts and spiritual encouragement to visually impaired students."
      ]},
      {x:58,y:44,logo:"/assets/images/ulsa-logo.jpg",role:"Research Assistant",org:"University of Labour and Social Affairs · Ho Chi Minh City, Vietnam",date:"March 2024 – July 2024",highlights:[
        "<strong>Market Research &amp; Analysis:</strong> Conducted an in-depth analysis of the semiconductor human resource shortage in Vietnam versus Taiwan, synthesizing data from 20+ industry reports to identify a critical 80% supply-demand gap.",
        "<strong>Case Study Development:</strong> Executed a comparative case study on TSMC's talent strategy, extracting lessons on specialization and FDI attraction to propose 3 policy recommendations for Vietnam's workforce development.",
        "<strong>Publication:</strong> Co-authored and published the peer-reviewed article \"Current Situation of Human Resources in the Semiconductor Industry in Vietnam and Experiences From Taiwan\" in the International Research Journal of Economics and Management Studies (Vol. 3, No. 8)."
      ]},
      {x:28,y:52,logo:"/assets/images/hodeco-logo.png",role:"Business Intern",org:"Ba Ria – Vung Tau House Development JSC · Ho Chi Minh City, Vietnam",date:"July 2024",highlights:[
        "<strong>Data Analysis:</strong> Analyzed a real estate dataset of 500+ properties using Advanced Excel (Pivot Tables, VLOOKUP), identifying 3 underperforming assets and proposing pricing adjustments.",
        "<strong>Sales Reporting &amp; Presentation:</strong> Spearheaded the weekly sales reporting process, cleansing corrupt raw datasets to ensure 98% data accuracy, and presented strategic insights to 20 stakeholders, cutting preparation time by 30%.",
        "<strong>Market Research:</strong> Conducted competitor analysis that contributed to a 10% refinement in the company's marketing strategy for Q3."
      ]},
      {x:50,y:80,logo:"/assets/images/bamboo-capital-logo.png",role:"Business Intern",org:"Bamboo Capital Group · Ho Chi Minh City, Vietnam",date:"July 2023",highlights:[
        "<strong>Data Integrity &amp; Operations:</strong> Managed the accurate entry of weekly sales data into the company's ERP, ensuring 100% data accuracy to support warehouse inventory operations and logistics planning.",
        "<strong>Strategic Market Research:</strong> Conducted a comprehensive analysis of 5+ key distribution channels, identifying coverage gaps and proposing improvements adopted by the marketing team.",
        "<strong>Process Optimization:</strong> Streamlined administrative workflows by digitizing a backlog of physical documents, reducing file retrieval time by 20% and enhancing information security."
      ]}
    ],
    links: [[0,1],[1,2],[1,3],[2,3],[3,4],[4,5]]
  }
};

(function(){
  var current = "education";
  var nodesEl = document.getElementById("expNodes");
  var linesEl = document.getElementById("expLines");
  var modalLayer = document.getElementById("expModalLayer");
  var lastFocused = null;

  function renderNetwork(){
    var set = EXP_DATA[current];
    nodesEl.innerHTML = "";
    linesEl.innerHTML = "";

    set.links.forEach(function(pair){
      var a = set.nodes[pair[0]], b = set.nodes[pair[1]];
      var line = document.createElementNS("http://www.w3.org/2000/svg","line");
      line.setAttribute("x1", a.x); line.setAttribute("y1", a.y);
      line.setAttribute("x2", b.x); line.setAttribute("y2", b.y);
      line.setAttribute("class", "exp-net-line");
      line.setAttribute("data-pair", pair[0] + "-" + pair[1]);
      linesEl.appendChild(line);
    });

    set.nodes.forEach(function(item, i){
      var div = document.createElement("div");
      div.className = "exp-node";
      div.style.left = item.x + "%";
      div.style.top = item.y + "%";
      var starInner = item.logo
        ? '<img src="' + item.logo + '" alt="">'
        : '<i class="fas ' + item.icon + '"></i>';
      div.innerHTML =
        '<button type="button" class="exp-node-btn" data-index="' + i + '" aria-haspopup="dialog">' +
          '<span class="exp-star" aria-hidden="true">' + starInner + '</span>' +
          '<span class="exp-node-tag">' + item.role + '</span>' +
        '</button>';
      nodesEl.appendChild(div);
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
    openModal(parseInt(btn.getAttribute("data-index"), 10));
  });

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
})();
</script>
