---
layout: single
title: "Let's Connect"
permalink: /contact/
author_profile: true
---

<style>
.page__title{display:none!important;}
#contact-wrap{padding:10px 0 60px;text-align:center;}
.contact-chapter{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.8rem;color:#c9a227;letter-spacing:.3em;opacity:.65;margin-bottom:.6rem;}
.contact-chapter::before{content:'— ';}.contact-chapter::after{content:' —';}
.contact-card{background:rgba(6,4,22,.6);backdrop-filter:blur(22px);border:1px solid rgba(201,162,39,.22);border-radius:20px;padding:50px;max-width:620px;margin:0 auto;box-shadow:0 12px 48px rgba(0,0,0,.5),inset 0 1px 0 rgba(201,162,39,.1);position:relative;overflow:hidden;}
.contact-card::before{content:'';position:absolute;top:0;left:10%;right:10%;height:2px;background:linear-gradient(to right,transparent,#c9a227,transparent);}
.contact-card::after{content:'';position:absolute;bottom:0;left:10%;right:10%;height:1px;background:linear-gradient(to right,transparent,rgba(201,162,39,.35),transparent);}
.contact-logo{width:300px;height:auto;margin:0 auto 24px;display:block;filter:drop-shadow(0 0 16px rgba(0,191,255,.45));transition:transform .5s,filter .4s;}
.contact-logo:hover{transform:scale(1.06) rotate(2deg);filter:drop-shadow(0 0 28px rgba(0,191,255,.75));}
.contact-title{font-family:'Cinzel Decorative',serif!important;font-size:1.55rem;color:#f0c84a!important;text-shadow:0 0 24px rgba(201,162,39,.5);margin-bottom:4px;pointer-events:none!important;cursor:default!important;}
.contact-div{display:flex;align-items:center;gap:.8rem;margin:14px auto 22px;max-width:300px;}
.contact-div::before,.contact-div::after{content:'';flex:1;height:1px;background:rgba(201,162,39,.35);}
.contact-div span{color:#c9a227;font-size:.75rem;}
.contact-info{margin-bottom:28px;}
.contact-name{font-family:'Cinzel Decorative',serif!important;font-size:.95rem;color:#f0c84a!important;margin-bottom:4px;pointer-events:none!important;cursor:default!important;}
.contact-uni{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.98rem;color:rgba(240,230,208,.88);letter-spacing:.07em;margin-bottom:12px;}
.contact-email{display:inline-flex;align-items:center;gap:8px;font-family:'Cormorant Garamond',serif;font-size:1.05rem;color:rgba(240,230,208,.8)!important;text-decoration:none!important;border-bottom:1px dashed rgba(240,230,208,.3);transition:color .25s,border-color .25s;padding-bottom:2px;}
.contact-email i{color:#c9a227;}
.contact-email:hover{color:#f0c84a!important;border-bottom-color:rgba(201,162,39,.5);}
.contact-icons{display:flex;justify-content:center;gap:20px;}
.contact-icon-btn{width:52px;height:52px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:1.35rem;color:rgba(240,230,208,.8)!important;text-decoration:none!important;background:rgba(201,162,39,.08);border:1px solid rgba(201,162,39,.25);transition:all .3s cubic-bezier(.25,1,.5,1);}
.contact-icon-btn:hover{background:rgba(201,162,39,.2);border-color:#c9a227;color:#f0c84a!important;transform:translateY(-5px);box-shadow:0 8px 24px rgba(201,162,39,.3);}
.contact-poem{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.9rem;color:rgba(240,230,208,.75);letter-spacing:.05em;margin-top:26px;}
.contact-poem span{color:rgba(201,162,39,.85);}
</style>

<div id="contact-wrap">
  <p class="contact-chapter">The Final Chapter</p>
  <div class="contact-card reveal-item">
    <img src="/assets/images/ncta-logo.svg" alt="NCTA Logo" class="contact-logo">
    <h2 class="contact-title">Let's Connect</h2>
    <div class="contact-div"><span>✦</span></div>
    <div class="contact-info">
      <p class="contact-name">Cao Thien An Nguyen</p>
      <p class="contact-uni">University of Wisconsin–Madison</p>
      <a href="mailto:cnguyen49@wisc.edu" class="contact-email"><i class="fas fa-envelope"></i> cnguyen49@wisc.edu</a>
    </div>
    <div class="contact-icons">
      <a href="https://github.com/aansensei" target="_blank" class="contact-icon-btn" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/cao-thien-an-nguyen" target="_blank" class="contact-icon-btn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="mailto:cnguyen49@wisc.edu" class="contact-icon-btn" title="Email"><i class="fas fa-paper-plane"></i></a>
    </div>
    <p class="contact-poem">If you've reached this page,<br>perhaps <span>the data has a story for you too.</span><br>Let's write the next chapter together.</p>
  </div>
</div>

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
