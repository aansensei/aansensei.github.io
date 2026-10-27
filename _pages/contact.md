---
layout: single
title: "Let's Connect"
permalink: /contact/
author_profile: true
description: "Get in touch with Cao Thien An Nguyen via email, LinkedIn, or GitHub for collaboration, internships, or a chat about data."
---

<style>
.page__title{display:none!important;}
#contact-wrap{padding:10px 0 60px;text-align:center;}
.contact-chapter{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.8rem;color:#c9a227;letter-spacing:.3em;opacity:.65;margin-bottom:.6rem;}
.contact-chapter::before{content:'— ';}.contact-chapter::after{content:' —';}
.contact-card{background:rgba(6,4,22,.6);backdrop-filter:blur(22px);border:1px solid rgba(201,162,39,.22);border-radius:20px;padding:50px;max-width:620px;margin:0 auto;box-shadow:0 12px 48px rgba(0,0,0,.5),inset 0 1px 0 rgba(201,162,39,.1);position:relative;overflow:hidden;}
.contact-card::before{content:'';position:absolute;top:0;left:10%;right:10%;height:2px;background:linear-gradient(to right,transparent,#c9a227,transparent);}
.contact-card::after{content:'';position:absolute;bottom:0;left:10%;right:10%;height:1px;background:linear-gradient(to right,transparent,rgba(201,162,39,.35),transparent);}
.contact-logo{width:300px;max-width:100%;height:auto;margin:0 auto 24px;display:block;filter:drop-shadow(0 0 16px rgba(0,191,255,.45));transition:transform .5s,filter .4s;}
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
.contact-poem{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.9rem;color:rgba(240,230,208,.75);letter-spacing:.05em;margin-top:26px;overflow-wrap:anywhere;text-wrap:balance;}
.contact-poem span{color:rgba(201,162,39,.85);}
.contact-status{max-width:380px;margin:18px auto 20px;padding:14px 16px 12px;border-radius:16px;border:1px solid rgba(201,162,39,.2);background:rgba(201,162,39,.05);}
.contact-open{display:inline-flex;align-items:center;gap:8px;margin:0 0 8px;padding:4px 14px;border-radius:999px;border:1px solid rgba(201,162,39,.4);background:rgba(201,162,39,.1);font-family:'Cormorant Garamond',serif;font-weight:700;font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;line-height:1.3;white-space:nowrap;color:#f0c84a;}
.contact-open-dot{width:8px;height:8px;border-radius:50%;background:#52c9b9;box-shadow:0 0 0 0 rgba(82,201,185,.6);animation:contactPulse 2.4s ease-out infinite;}
@keyframes contactPulse{0%{box-shadow:0 0 0 0 rgba(82,201,185,.55);}70%,100%{box-shadow:0 0 0 8px rgba(82,201,185,0);}}
@media(prefers-reduced-motion:reduce){.contact-open-dot{animation:none;}}
.contact-welcome{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.02rem;line-height:1.5;color:rgba(240,230,208,.88);letter-spacing:.03em;margin:0;text-wrap:balance;}
.contact-form-card{margin-top:28px;}
.contact-form{margin:0 auto;max-width:470px;text-align:left;position:relative;}
.contact-form .contact-div{margin:10px auto 20px;}
.contact-card form.contact-form{background:transparent!important;padding:0!important;border:0!important;box-shadow:none!important;}
.cf-title{font-family:'Cinzel Decorative',serif!important;font-size:1.3rem;color:#f0c84a!important;text-align:center;margin:0 0 4px;pointer-events:none!important;cursor:default!important;}
.cf-row{margin-bottom:13px;}
.cf-row label{display:block;margin:0 0 5px;font-family:'Cormorant Garamond',serif;font-size:.8rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,200,74,.9);}
.contact-card .cf-row input,.contact-card .cf-row textarea{display:block;width:100%;box-sizing:border-box;margin:0!important;padding:11px 14px!important;border-radius:12px!important;border:1px solid rgba(201,162,39,.3)!important;background:rgba(255,255,255,.06)!important;box-shadow:none!important;color:#f8f4ec!important;font-family:'Cormorant Garamond',serif!important;font-size:1.05rem!important;line-height:1.45;height:auto;transition:border-color .2s,box-shadow .2s,background .2s;}
.contact-card .cf-row textarea{min-height:130px;resize:vertical;}
.contact-card .cf-row input::placeholder,.contact-card .cf-row textarea::placeholder{color:rgba(240,230,208,.38);}
.contact-card .cf-row input:focus,.contact-card .cf-row textarea:focus{outline:none;border-color:#f0c84a!important;background:rgba(255,255,255,.1)!important;box-shadow:0 0 0 3px rgba(240,200,74,.18)!important;}
.cf-honey{position:absolute!important;left:-9999px!important;top:auto;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;}
.contact-card .cf-send{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;box-sizing:border-box;margin:6px 0 0;padding:12px 18px;border-radius:999px;border:1px solid rgba(255,240,190,.55);background:linear-gradient(135deg,#f6d365,#c9a227);color:#2a1c05!important;font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:700;letter-spacing:.06em;cursor:pointer;box-shadow:0 6px 18px rgba(201,162,39,.35),inset 0 1px 0 rgba(255,255,255,.55);transition:transform .25s,box-shadow .25s,opacity .25s;}
.contact-card .cf-send:hover{transform:translateY(-2px);box-shadow:0 9px 24px rgba(201,162,39,.55),inset 0 1px 0 rgba(255,255,255,.6);}
.contact-card .cf-send:disabled{opacity:.6;cursor:wait;transform:none;}
.cf-status{min-height:1.5em;margin:12px 0 0;text-align:center;font-family:'Cormorant Garamond',serif;font-size:1rem;line-height:1.5;}
.cf-status.ok{color:#52c9b9;}
.cf-status.err{color:#ff9aa8;}
.cf-status a{color:inherit;text-decoration:underline;}
@media(max-width:480px){.contact-card{padding:34px 20px;}.contact-poem{letter-spacing:.02em;}.contact-status{padding:12px 12px 10px;}.contact-open{font-size:.72rem;letter-spacing:.09em;padding:4px 11px;}.cf-title{font-size:1.1rem;}}
body.an-day-mode .contact-chapter{color:#006666;opacity:.8;}
body.an-day-mode .contact-card{background:rgba(255,255,255,.72);border-color:rgba(0,102,102,.26);box-shadow:0 12px 40px rgba(19,60,90,.2),inset 0 1px 0 rgba(255,255,255,.7);}
body.an-day-mode .contact-card::before{background:linear-gradient(to right,transparent,#0f8a8a,transparent);}
body.an-day-mode .contact-card::after{background:linear-gradient(to right,transparent,rgba(0,102,102,.3),transparent);}
body.an-day-mode .contact-logo{filter:brightness(.8) saturate(1.15) drop-shadow(0 0 12px rgba(0,128,160,.35));}
body.an-day-mode .contact-logo:hover{filter:brightness(.85) saturate(1.2) drop-shadow(0 0 20px rgba(0,128,160,.55));}
body.an-day-mode .contact-title,body.an-day-mode .contact-name{color:#006666!important;-webkit-text-fill-color:#006666!important;text-shadow:none!important;}
body.an-day-mode .contact-div::before,body.an-day-mode .contact-div::after{background:rgba(0,102,102,.35);}
body.an-day-mode .contact-div span{color:#0f8a8a;}
body.an-day-mode .contact-uni{color:rgba(31,42,51,.82);}
body.an-day-mode .contact-email{color:#1f2a33!important;border-bottom-color:rgba(0,102,102,.4);}
body.an-day-mode .contact-email i{color:#006666;}
body.an-day-mode .contact-email:hover{color:#006666!important;border-bottom-color:#006666;}
body.an-day-mode .contact-icon-btn{color:#006666!important;background:rgba(0,128,128,.08);border-color:rgba(0,102,102,.3);}
body.an-day-mode .contact-icon-btn:hover{background:rgba(0,128,128,.16);border-color:#006666;color:#004d4d!important;box-shadow:0 8px 24px rgba(0,102,102,.25);}
body.an-day-mode .contact-poem{color:rgba(31,42,51,.78);}
body.an-day-mode .contact-poem span{color:#135c9e;}
body.an-day-mode .contact-status{border-color:rgba(0,102,102,.2);background:rgba(0,128,128,.05);}
body.an-day-mode .contact-open{color:#006666;border-color:rgba(0,102,102,.35);background:rgba(0,128,128,.08);}
body.an-day-mode .contact-open-dot{background:#0f8a8a;}
body.an-day-mode .contact-welcome{color:rgba(31,42,51,.82);}
body.an-day-mode .cf-title{color:#006666!important;-webkit-text-fill-color:#006666!important;text-shadow:none!important;}
body.an-day-mode body.an-day-mode .cf-row label{color:#006666;}
body.an-day-mode .contact-card .cf-row input,body.an-day-mode .contact-card .cf-row textarea{background:rgba(255,255,255,.85)!important;border-color:rgba(0,102,102,.3)!important;color:#1f2a33!important;}
body.an-day-mode .contact-card .cf-row input::placeholder,body.an-day-mode .contact-card .cf-row textarea::placeholder{color:rgba(31,42,51,.42);}
body.an-day-mode .contact-card .cf-row input:focus,body.an-day-mode .contact-card .cf-row textarea:focus{border-color:#0f8a8a!important;background:#fff!important;box-shadow:0 0 0 3px rgba(15,138,138,.18)!important;}
body.an-day-mode .contact-card .cf-send{background:linear-gradient(135deg,#8fe3d8,#0f8a8a);border-color:rgba(255,255,255,.6);color:#06302f!important;box-shadow:0 6px 18px rgba(15,138,138,.3),inset 0 1px 0 rgba(255,255,255,.55);}
body.an-day-mode .contact-card .cf-send:hover{box-shadow:0 9px 24px rgba(15,138,138,.5),inset 0 1px 0 rgba(255,255,255,.6);}
body.an-day-mode .cf-status.ok{color:#0b6b45;}
body.an-day-mode .cf-status.err{color:#b3261e;}
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
      <div class="contact-status">
        <p class="contact-open"><span class="contact-open-dot" aria-hidden="true"></span>Open to internships</p>
        <p class="contact-welcome">I would really love to connect with you.</p>
      </div>
      <a href="mailto:cnguyen49@wisc.edu" class="contact-email"><i class="fas fa-envelope"></i> cnguyen49@wisc.edu</a>
    </div>
    <div class="contact-icons">
      <a href="https://github.com/aansensei" target="_blank" class="contact-icon-btn" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/cao-thien-an-nguyen" target="_blank" class="contact-icon-btn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="mailto:cnguyen49@wisc.edu" class="contact-icon-btn" title="Email"><i class="fas fa-paper-plane"></i></a>
    </div>
    <p class="contact-poem">If you've reached this page,<br>perhaps <span>the data has a story for you too.</span><br>Let's write the next chapter together.</p>
  </div>

  <div class="contact-card contact-form-card reveal-item">
    <form class="contact-form" id="contactForm" action="https://formsubmit.co/cnguyen49@wisc.edu" method="POST">
      <h3 class="cf-title">Send Me a Message</h3>
      <div class="contact-div"><span>✦</span></div>
      <div class="cf-row"><label for="cf-name">Name</label><input id="cf-name" name="name" type="text" required maxlength="80" autocomplete="name" placeholder="Your name"></div>
      <div class="cf-row"><label for="cf-email">Email</label><input id="cf-email" name="email" type="email" required maxlength="120" autocomplete="email" placeholder="you@example.com"></div>
      <div class="cf-row"><label for="cf-subject">Subject</label><input id="cf-subject" name="subject" type="text" required maxlength="120" placeholder="What is this about?"></div>
      <div class="cf-row"><label for="cf-message">Message</label><textarea id="cf-message" name="message" required maxlength="3000" rows="5" placeholder="Write your message here"></textarea></div>
      <input type="text" name="_honey" class="cf-honey" tabindex="-1" autocomplete="off" aria-hidden="true">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_template" value="table">
      <button type="submit" class="cf-send" id="cfSend"><i class="fas fa-paper-plane"></i><span>Send message</span></button>
      <p class="cf-status" id="cfStatus" role="status" aria-live="polite"></p>
    </form>
  </div>
</div>

<script>
(function(){
  var form=document.getElementById('contactForm');
  if(!form)return;
  var btn=document.getElementById('cfSend'),status=document.getElementById('cfStatus'),label=btn.querySelector('span');
  var ENDPOINT='https://formsubmit.co/ajax/cnguyen49@wisc.edu',MAIL='cnguyen49@wisc.edu';
  function say(text,kind){status.className='cf-status'+(kind?' '+kind:'');status.textContent=text;}
  function fail(){
    status.className='cf-status err';
    status.innerHTML='Something went wrong. Please try again, or email me directly at <a href="mailto:'+MAIL+'">'+MAIL+'</a>.';
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(form.elements['_honey'].value){return;}
    if(!form.checkValidity()){form.reportValidity();return;}
    btn.disabled=true;label.textContent='Sending';say('');
    var payload={
      name:form.elements['name'].value.trim(),
      email:form.elements['email'].value.trim(),
      subject:form.elements['subject'].value.trim(),
      message:form.elements['message'].value.trim(),
      _subject:'Portfolio message: '+form.elements['subject'].value.trim(),
      _replyto:form.elements['email'].value.trim(),
      _template:'table',
      _captcha:'false'
    };
    fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)})
      .then(function(r){return r.json();})
      .then(function(j){
        if(j&&(j.success===true||j.success==='true')){
          form.reset();
          say('Thank you. Your message is on its way, and I will reply soon.','ok');
        }else{fail();}
      })
      .catch(fail)
      .then(function(){btn.disabled=false;label.textContent='Send message';});
  });
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
