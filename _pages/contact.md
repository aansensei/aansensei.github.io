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
.contact-card .cf-send{position:relative;overflow:hidden;}
.contact-card .cf-send.is-sending:disabled{opacity:1;}
.cf-send.is-sending::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.5) 50%,transparent 70%);transform:translateX(-100%);animation:cfSweep 1.2s ease-in-out infinite;pointer-events:none;}
.cf-send .cf-plane{display:inline-block;}
.cf-send.is-sending .cf-plane{animation:cfFly 1.1s ease-in-out infinite;}
.cf-send.is-sent .cf-plane{animation:cfPop .5s cubic-bezier(.34,1.56,.64,1);}
.cf-send.is-fail{animation:cfShake .45s ease;}
.cf-burst{position:absolute;left:50%;top:50%;width:0;height:0;pointer-events:none;z-index:3;}
.cf-conf{position:absolute;left:0;top:0;width:7px;height:7px;border-radius:2px;opacity:0;animation:cfConf .95s ease-out forwards;}
@keyframes cfSweep{to{transform:translateX(100%);}}
@keyframes cfFly{0%{transform:translate(-30px,7px) rotate(-14deg);opacity:0;}25%{opacity:1;}70%{transform:translate(20px,-9px) rotate(8deg);opacity:1;}100%{transform:translate(50px,-16px) rotate(16deg);opacity:0;}}
@keyframes cfPop{0%{transform:scale(.2) rotate(-40deg);}100%{transform:scale(1) rotate(0);}}
@keyframes cfShake{0%,100%{transform:translateX(0);}20%{transform:translateX(-7px);}40%{transform:translateX(6px);}60%{transform:translateX(-4px);}80%{transform:translateX(3px);}}
@keyframes cfConf{0%{opacity:1;transform:translate(0,0) rotate(0) scale(1);}100%{opacity:0;transform:translate(var(--dx),var(--dy)) rotate(var(--rot)) scale(.6);}}

/* Recovery cards share the portfolio theme in assets/css/error-ux.css. */
@media(prefers-reduced-motion:reduce){
  .cf-send.is-sending::after,.cf-send.is-sending .cf-plane,.cf-send.is-sent .cf-plane,.cf-send.is-fail,.cf-conf,.cf-state-mascot,.cf-state-sparkle{animation:none !important;}
}
.cf-status{min-height:0;margin:8px 0 0;text-align:center;font-family:'Cormorant Garamond',serif;font-size:1rem;line-height:1.5;}
.cf-status.ok{color:#52c9b9;}
.cf-status.err{color:#ff9aa8;}
@media(max-width:480px){
  .contact-card{padding:34px 20px;}
  .contact-poem{letter-spacing:.02em;}
  .contact-status{padding:12px 12px 10px;}
  .contact-open{font-size:.72rem;letter-spacing:.09em;padding:4px 11px;}
  .cf-title{font-size:1.1rem;}
  .cf-state-actions{flex-direction:column;align-items:stretch;}
  .cf-state-btn{width:100%;}
}
@media(max-width:340px){
  .contact-open{font-size:.70rem;padding:3px 8px;letter-spacing:.06em;}
}
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
body.an-day-mode .cf-row label{color:#006666;}
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
    <img src="/assets/images/ncta-logo.svg" alt="NCTA Logo" class="contact-logo" width="1046" height="526">
    <h2 class="contact-title">Let's Connect</h2>
    <div class="contact-div"><span>✦</span></div>
    <div class="contact-info">
      <p class="contact-name">Cao Thien An Nguyen</p>
      <p class="contact-uni"><a class="wisc-link" href="https://www.wisc.edu/" target="_blank" rel="noopener">University of Wisconsin–Madison</a></p>
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
      <button type="submit" class="cf-send" id="cfSend"><i class="fas fa-paper-plane cf-plane" id="cfIcon"></i><span id="cfLabel">Send message</span></button>
      <p class="cf-status" id="cfStatus" role="status" aria-live="polite"></p>

      <!-- An orbit seal for each stage of this message's journey. -->
      <div class="cf-state-card" id="cfStateCard" aria-label="Message delivery" role="region" aria-live="polite" hidden>
        <i class="cf-state-sparkle sp1" aria-hidden="true">&#10022;</i>
        <i class="cf-state-sparkle sp2" aria-hidden="true">&#10023;</i>
        <div class="cf-state-head">
          <div class="cf-state-mascot">
            <img src="/assets/images/kanade-404.png" alt="Kanade plush" width="68" height="68" onerror="this.style.display='none'">
          </div>
          <div>
            <span class="cf-state-badge" id="cfStateBadge">A Scroll Takes Flight</span>
            <h4 class="cf-state-title" id="cfStateTitle">Sending your scroll...</h4>
          </div>
        </div>
        <p class="cf-state-body" id="cfStateBody">Your words are setting out across the stars.</p>
        <div class="cf-state-actions" id="cfStateActions" hidden>
          <button type="button" class="cf-state-btn cf-state-btn-primary" id="cfRetryBtn">Send the Scroll Again</button>
          <a class="cf-state-btn cf-state-btn-secondary" href="mailto:cnguyen49@wisc.edu" id="cfMailtoBtn">Open in my email app</a>
          <button type="button" class="cf-state-btn cf-state-btn-secondary" id="cfCopyBtn">Copy message</button>
          <a class="cf-state-btn cf-state-btn-ghost" href="/" id="cfHomeBtn">Return to Cockpit</a>
        </div>
      </div>
    </form>
  </div>
</div>

<script>
(function(){
  var form=document.getElementById('contactForm');
  if(!form)return;
  var btn=document.getElementById('cfSend'),status=document.getElementById('cfStatus'),label=document.getElementById('cfLabel'),icon=document.getElementById('cfIcon');
  var stateCard=document.getElementById('cfStateCard'),stateBadge=document.getElementById('cfStateBadge'),stateTitle=document.getElementById('cfStateTitle'),stateBody=document.getElementById('cfStateBody'),stateActions=document.getElementById('cfStateActions');
  var retryBtn=document.getElementById('cfRetryBtn'),mailtoBtn=document.getElementById('cfMailtoBtn'),copyBtn=document.getElementById('cfCopyBtn');
  var MAIL='cnguyen49@wisc.edu';
  /* Web3Forms access key. It is public by design: it can only deliver mail to the address it was made for. */
  var W3F_KEY='2b240aef-074c-4c4e-a046-a2b0b47efed1';
  var SLOW_MS=4500,TRY_MS=10000,SUCCESS_MS=2400,FADE_MS=350,IDLE='Send message';
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dotTimer=null,slowTimer=null,resetTimer=null,dismissTimer=null,fadeTimer=null,sending=false,hadFailure=false,retryCooldown=false,lastData=null;

  function say(text,kind){status.className='cf-status'+(kind?' '+kind:'');status.textContent=text;}

  function renderStateCard(state,data){
    if(!stateCard)return;
    // A new send/retry must never be hidden by the previous success timer.
    clearTimeout(dismissTimer);clearTimeout(fadeTimer);
    stateCard.classList.remove('is-dismissing');
    stateCard.hidden=false;
    stateCard.setAttribute('data-state',state);
    var words={
      loading:['A Scroll Takes Flight','Sending your scroll...',"Your words are crossing the stars. Keep this page open while we wait for delivery confirmation."],
      retrying:['Another Journey','Sending your scroll once more...',"Another flight through the starlight. Your words stay here until delivery is confirmed."],
      slow:['A Little More Starlight','Your messenger is taking the scenic route',"The mail service is taking longer than expected. Your words are still here while we wait."],
      error:['A Pause in the Journey','Your scroll has not found its way',"Delivery is unconfirmed. Your words are still here: try again, use your email app, or copy the scroll."],
      recovered:['Back Among the Stars','Your scroll has been sent',"The mail service has accepted your message. Thank you for adding a little light to this world."],
      ok:['Scroll Sent','Your scroll has been sent',"The mail service has accepted your message. Thank you for adding a little light to this world."]
    };
    var text=words[state]||words.loading;
    stateBadge.textContent=text[0];
    stateTitle.textContent=text[1];
    stateBody.textContent=text[2];
    stateActions.hidden=state!=='error';
    if(state==='error'){
      if(data)mailtoBtn.href=mailtoHref(data);
      retryBtn.disabled=retryCooldown;
    }
    if(state==='ok'||state==='recovered'){
      dismissTimer=setTimeout(function(){
        if(sending||!['ok','recovered'].includes(stateCard.dataset.state))return;
        function finish(){
          if(stateCard.contains(document.activeElement))btn.focus({preventScroll:true});
          stateCard.hidden=true;
          stateCard.classList.remove('is-dismissing');
        }
        if(reduce){finish();return;}
        stateCard.classList.add('is-dismissing');
        fadeTimer=setTimeout(finish,FADE_MS);
      },SUCCESS_MS);
    }
  }

  /* each service takes the same fields and answers JSON; a missing or slow answer moves on to the next one.
     Web3Forms goes first when it has a key, because it answers fast, and FormSubmit is the second chance. */
  var SERVICES=[
    {name:'Web3Forms',on:!!W3F_KEY,url:'https://api.web3forms.com/submit',
      body:function(d){return {access_key:W3F_KEY,name:d.name,email:d.email,subject:'Portfolio message: '+d.subject,message:d.message,replyto:d.email,botcheck:''};}},
    {name:'FormSubmit',on:true,url:'https://formsubmit.co/ajax/'+MAIL,
      body:function(d){return {name:d.name,email:d.email,subject:d.subject,message:d.message,_subject:'Portfolio message: '+d.subject,_replyto:d.email,_template:'table',_captcha:'false'};}}
  ].filter(function(x){return x.on;});
  function readOk(j){return !!j&&(j.success===true||j.success==='true');}
  function post(service,data){
    var ctrl=window.AbortController?new AbortController():null,timer=null;
    var limit=new Promise(function(_,reject){timer=setTimeout(function(){if(ctrl)ctrl.abort();reject(new Error('timeout'));},TRY_MS);});
    var request=fetch(service.url,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(service.body(data)),signal:ctrl?ctrl.signal:undefined})
      .then(function(r){return r.json().then(function(j){return {ok:r.ok,json:j};},function(){return {ok:false,json:null};});})
      .then(function(res){
        if(res.ok&&readOk(res.json))return true;
        if(window.console)console.warn(service.name+':',res.json&&res.json.message);
        throw new Error('rejected');
      });
    return Promise.race([request,limit]).then(function(v){clearTimeout(timer);return v;},function(e){clearTimeout(timer);throw e;});
  }
  function deliver(data){
    var i=0;
    function next(){
      if(i>=SERVICES.length)return Promise.reject(new Error('all failed'));
      return post(SERVICES[i++],data).catch(function(){return next();});
    }
    return next();
  }
  function mailtoHref(d){
    var body='Name: '+d.name+'\nEmail: '+d.email+'\n\n'+d.message;
    if(body.length>1700)body=body.slice(0,1700)+'...';
    return 'mailto:'+MAIL+'?subject='+encodeURIComponent('Portfolio message: '+d.subject)+'&body='+encodeURIComponent(body);
  }
  function copyText(text,done){
    function legacy(){var ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;left:-9999px;top:0;';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy');}catch(e){}document.body.removeChild(ta);done(ok);}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){done(true);},legacy);}else{legacy();}
  }
  /* nothing is lost: the form keeps the text, and action buttons allow retrying or sending another way */
  function fail(data){
    hadFailure=true;
    lastData=data;
    say('');
    renderStateCard('error',data);
    btn.classList.remove('is-fail');void btn.offsetWidth;btn.classList.add('is-fail');
  }
  function confetti(){
    if(reduce)return;
    var burst=document.createElement('span');burst.className='cf-burst';
    var colors=['#f0c84a','#52c9b9','#ff9aa8','#79c7ff','#c9a227','#ffffff'];
    for(var i=0;i<16;i++){
      var c=document.createElement('i');c.className='cf-conf';
      var ang=(Math.PI*2*i/16)+Math.random()*.4,dist=40+Math.random()*50;
      c.style.setProperty('--dx',Math.round(Math.cos(ang)*dist)+'px');
      c.style.setProperty('--dy',Math.round(Math.sin(ang)*dist-14)+'px');
      c.style.setProperty('--rot',Math.round(Math.random()*540-270)+'deg');
      c.style.background=colors[i%colors.length];
      burst.appendChild(c);
    }
    btn.appendChild(burst);
    setTimeout(function(){if(burst.parentNode)burst.parentNode.removeChild(burst);},1100);
  }
  function startSending(isRetry){
    sending=true;btn.disabled=true;
    btn.classList.remove('is-sent','is-fail');btn.classList.add('is-sending');
    icon.className='fas fa-paper-plane cf-plane';
    var n=0;label.textContent=isRetry?'Retrying':'Sending';
    renderStateCard(isRetry?'retrying':'loading');
    dotTimer=setInterval(function(){n=(n+1)%4;label.textContent=(isRetry?'Retrying':'Sending')+'...'.slice(0,n);},350);
    slowTimer=setTimeout(function(){renderStateCard('slow');},SLOW_MS);
  }
  function stopSending(ok){
    sending=false;
    clearInterval(dotTimer);clearTimeout(slowTimer);
    btn.disabled=false;btn.classList.remove('is-sending');
    if(ok){
      btn.classList.add('is-sent');icon.className='fas fa-check cf-plane';label.textContent='Sent';
      confetti();
      renderStateCard(hadFailure?'recovered':'ok');
      hadFailure=false;
      clearTimeout(resetTimer);
      resetTimer=setTimeout(function(){btn.classList.remove('is-sent');icon.className='fas fa-paper-plane cf-plane';label.textContent=IDLE;},SUCCESS_MS+(reduce?0:FADE_MS));
    }else{
      label.textContent=IDLE;
    }
  }
  function collectFormData(){
    return {
      name:form.elements['name'].value.trim(),
      email:form.elements['email'].value.trim(),
      subject:form.elements['subject'].value.trim(),
      message:form.elements['message'].value.trim()
    };
  }
  function submitData(isRetry){
    if(sending||btn.disabled)return;
    if(form.elements['_honey'].value)return;
    if(!form.checkValidity()){form.reportValidity();return;}
    say('');clearTimeout(resetTimer);
    var data=collectFormData();
    lastData=data;
    startSending(isRetry);
    deliver(data).then(function(){
      var current=collectFormData();
      if(Object.keys(data).every(function(key){return data[key]===current[key];}))form.reset();
      stopSending(true);
    },function(){
      stopSending(false);fail(data);
    });
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();
    submitData(false);
  });
  if(retryBtn){
    retryBtn.addEventListener('click',function(){
      if(retryCooldown||sending)return;
      retryCooldown=true;
      retryBtn.disabled=true;
      setTimeout(function(){retryCooldown=false;if(retryBtn)retryBtn.disabled=false;},2000);
      submitData(true);
    });
  }
  form.addEventListener('input',function(){
    if(stateCard&&!stateCard.hidden&&stateCard.dataset.state==='error')mailtoBtn.href=mailtoHref(collectFormData());
  });
  if(copyBtn){
    copyBtn.addEventListener('click',function(){
      var d=collectFormData();
      copyText('To: '+MAIL+'\nSubject: Portfolio message: '+d.subject+'\n\n'+d.message,function(ok){
        copyBtn.textContent=ok?'Copied!':'Copy failed';
        setTimeout(function(){copyBtn.textContent='Copy message';},2200);
      });
    });
  }
  window.addEventListener('online',function(){
    if(hadFailure&&stateCard&&!stateCard.hidden){
      stateBadge.textContent='A Light on the Horizon';
      stateBody.textContent='Your device reports a connection again. Your words are still here; send the scroll again whenever you are ready.';
    }
  });
})();
</script>

<style>
#an-overlay{position:fixed;inset: 0;width:100%;height:100%;background:rgba(2,1,10,.97);backdrop-filter:blur(20px);z-index:999999;display:block;opacity:0;pointer-events:none;transition:opacity .25s;perspective:1400px;overflow: hidden;}
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
