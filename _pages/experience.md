---
layout: single
title: "Experience"
permalink: /experience/
author_profile: true
---

<style>
.exp-content{background:rgba(6,4,22,.6);backdrop-filter:blur(20px);border:1px solid rgba(201,162,39,.2);border-radius:16px;padding:35px;box-shadow:0 10px 30px rgba(0,0,0,.4),inset 0 1px 0 rgba(201,162,39,.08);color:#f8f4ec;position:relative;}
.exp-content::before{content:'';position:absolute;top:0;left:8%;right:8%;height:1px;background:linear-gradient(to right,transparent,#c9a227,transparent);}

.exp-intro{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.05rem;color:rgba(240,230,208,.7);margin-bottom:34px;text-align:center;}

.exp-section-title{font-family:'Cinzel Decorative',serif;color:#f0c84a!important;font-size:1.15rem;text-align:center;letter-spacing:.18em;text-transform:uppercase;text-shadow:0 0 12px rgba(201,162,39,.35);margin:0 0 26px;}
.exp-section-title::before{content:'✦';display:block;color:#c9a227;opacity:.65;font-size:.85rem;margin-bottom:8px;letter-spacing:0;}

.exp-section + .exp-section{margin-top:50px;padding-top:44px;border-top:1px solid rgba(201,162,39,.15);}

.exp-timeline{position:relative;padding-left:56px;}
.exp-timeline::before{content:'';position:absolute;left:20px;top:22px;bottom:22px;width:2px;background:linear-gradient(180deg,#c9a227,rgba(201,162,39,.12));}

.exp-item{position:relative;margin-bottom:40px;}
.exp-item:last-child{margin-bottom:0;}

.exp-node{position:absolute;left:-56px;top:0;width:42px;height:42px;border-radius:50%;background:#f8f4ec;border:1.5px solid rgba(201,162,39,.55);overflow:hidden;box-shadow:0 0 14px rgba(240,200,74,.45),0 0 3px rgba(240,200,74,.8);}
.exp-node img{width:100%;height:100%;object-fit:cover;}

.exp-date{font-family:'Cormorant Garamond',serif;font-size:.82rem;letter-spacing:.08em;color:rgba(201,162,39,.75)!important;text-transform:uppercase;margin:6px 0 6px;}
.exp-role{font-family:'Cinzel Decorative',serif;color:#f0c84a!important;font-size:1.1rem;text-shadow:0 0 12px rgba(201,162,39,.35);margin:0 0 4px;}
.exp-meta{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.95rem;color:rgba(240,230,208,.6);margin-bottom:12px;}
.exp-item:has(.exp-highlights:empty) .exp-meta{margin-bottom:0;}

.exp-highlights{list-style:none;padding:0;margin:0;}
.exp-highlights li{font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(240,230,208,.85);line-height:1.75;margin-bottom:7px;padding-left:20px;position:relative;}
.exp-highlights li::before{content:'✦';position:absolute;left:0;top:5px;color:#c9a227;font-size:.68rem;}

@media(max-width:600px){
  .exp-content{padding:22px;}
  .exp-timeline{padding-left:46px;}
  .exp-timeline::before{left:15px;}
  .exp-node{left:-46px;width:34px;height:34px;}
}
</style>

<div class="exp-content">
  <p class="exp-intro">A timeline of school, internships, and research work, mostly data, sometimes code, always a little bit of chaos.</p>

  <div class="exp-section">
    <p class="exp-section-title">Education</p>
    <div class="exp-timeline">

      <div class="exp-item">
        <div class="exp-node"><img src="/assets/images/uwmadison-logo.jpg" alt="UW-Madison"></div>
        <p class="exp-date">2025 &ndash; 2029</p>
        <h3 class="exp-role">B.S. in Economics &amp; Data Science</h3>
        <p class="exp-meta">University of Wisconsin&ndash;Madison &middot; Madison, WI</p>
      </div>

      <div class="exp-item">
        <div class="exp-node"><img src="/assets/images/ais-logo.jpg" alt="The Asian International School"></div>
        <p class="exp-date">August 2013 &ndash; June 2025</p>
        <h3 class="exp-role">High School Diploma</h3>
        <p class="exp-meta">The Asian International School &middot; Ho Chi Minh City, Vietnam</p>
      </div>

    </div>
  </div>

  <div class="exp-section">
    <p class="exp-section-title">Experience</p>
    <div class="exp-timeline">

      <div class="exp-item">
        <div class="exp-node"><img src="/assets/images/visa-logo.jpg" alt="Vietnamese International Student Association"></div>
        <p class="exp-date">February 2026 &ndash; Present</p>
        <h3 class="exp-role">Rotational Program Intern</h3>
        <p class="exp-meta">Vietnamese International Student Association, UW-Madison &middot; Madison, WI</p>
        <ul class="exp-highlights">
          <li>Support event planning and community engagement for UW-Madison's Vietnamese student community, including coordinating a 500+ attendee Tet celebration.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-node"><img src="/assets/images/sadec-logo.png" alt="SADEC Technology JSC"></div>
        <p class="exp-date">June 2026 &ndash; August 2026</p>
        <h3 class="exp-role">AI Engineer Intern</h3>
        <p class="exp-meta">SADEC Technology JSC &middot; Ho Chi Minh City, Vietnam</p>
        <ul class="exp-highlights">
          <li>Built Ciel, an enterprise RAG chatbot that answers employee questions from company documents with inline citations, supporting Vietnamese, English, Japanese, and Chinese.</li>
          <li>Designed a hybrid retrieval pipeline (BM25, vector search, and cross-encoder reranking) so answers stay grounded in the actual source text instead of the model's memory.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-node"><img src="/assets/images/mushroom-of-love-logo.jpg" alt="Mush-Room of Love"></div>
        <p class="exp-date">January 2023 &ndash; June 2025</p>
        <h3 class="exp-role">Founder</h3>
        <p class="exp-meta">Mush-Room of Love &middot; Ho Chi Minh City, Vietnam</p>
        <ul class="exp-highlights">
          <li>Founded and led a 7-person team selling organic mushrooms, reaching 240+ customers and 40 million VND in profit, all directed toward a shelter for visually impaired students.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-node"><img src="/assets/images/ulsa-logo.jpg" alt="University of Labour and Social Affairs"></div>
        <p class="exp-date">March 2024 &ndash; July 2024</p>
        <h3 class="exp-role">Research Assistant</h3>
        <p class="exp-meta">University of Labour and Social Affairs &middot; Ho Chi Minh City, Vietnam</p>
        <ul class="exp-highlights">
          <li>Analyzed the semiconductor labor shortage in Vietnam versus Taiwan, synthesizing 20+ industry reports to identify an 80% supply-demand gap in engineering talent.</li>
          <li>Co-authored a peer-reviewed publication in the International Research Journal of Economics and Management Studies.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-node"><img src="/assets/images/hodeco-logo.png" alt="Ba Ria - Vung Tau House Development JSC"></div>
        <p class="exp-date">July 2024</p>
        <h3 class="exp-role">Business Intern</h3>
        <p class="exp-meta">Ba Ria &ndash; Vung Tau House Development JSC &middot; Ho Chi Minh City, Vietnam</p>
        <ul class="exp-highlights">
          <li>Analyzed 500+ real estate properties with Advanced Excel, identifying 3 underperforming assets and proposing pricing adjustments.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-node"><img src="/assets/images/bamboo-capital-logo.png" alt="Bamboo Capital Group"></div>
        <p class="exp-date">July 2023</p>
        <h3 class="exp-role">Business Intern</h3>
        <p class="exp-meta">Bamboo Capital Group &middot; Ho Chi Minh City, Vietnam</p>
        <ul class="exp-highlights">
          <li>Maintained 100% data accuracy entering weekly sales data into the company's ERP system, supporting warehouse inventory and logistics planning.</li>
        </ul>
      </div>

    </div>
  </div>
</div>
