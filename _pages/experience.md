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

.exp-section-title{font-family:'Cinzel Decorative',serif;color:#f0c84a!important;font-size:1.15rem;text-align:center;letter-spacing:.18em;text-transform:uppercase;text-shadow:0 0 12px rgba(201,162,39,.35);margin:0 0 30px;}
.exp-section-title::before{content:'✦';display:block;color:#c9a227;opacity:.65;font-size:.85rem;margin-bottom:8px;letter-spacing:0;}
.exp-section-hint{display:block;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.78rem;text-transform:none;letter-spacing:normal;color:rgba(240,230,208,.4);margin-top:6px;}

.exp-section + .exp-section{margin-top:50px;padding-top:44px;border-top:1px solid rgba(201,162,39,.15);}

.exp-timeline{position:relative;padding-left:52px;}
.exp-timeline::before{content:'';position:absolute;z-index:1;left:18px;top:19px;bottom:19px;width:1px;background:linear-gradient(180deg,rgba(240,200,74,.75),rgba(201,162,39,.1));box-shadow:0 0 8px rgba(240,200,74,.35);}

.exp-item{position:relative;margin-bottom:28px;}
.exp-item:last-child{margin-bottom:0;}
.exp-item:not(:last-child)::after{content:'✦';position:absolute;z-index:1;left:14px;bottom:-18px;color:#f0c84a;font-size:.5rem;opacity:.6;text-shadow:0 0 6px rgba(240,200,74,.75);}
details.exp-item[open]{margin-bottom:40px;}
details.exp-item[open]:not(:last-child)::after{bottom:-30px;}

.exp-node{position:absolute;z-index:2;left:-52px;top:0;width:38px;height:38px;border-radius:50%;background:rgba(248,244,236,.96);border:1px solid rgba(201,162,39,.55);overflow:hidden;box-shadow:0 0 10px rgba(240,200,74,.5),0 0 22px rgba(240,200,74,.2);display:flex;align-items:center;justify-content:center;}
.exp-node img{width:100%;height:100%;object-fit:cover;}
.exp-node i{color:#8a6a10;font-size:1rem;}

.exp-date{font-family:'Cormorant Garamond',serif;font-size:.82rem;letter-spacing:.08em;color:rgba(201,162,39,.75)!important;text-transform:uppercase;margin:4px 0 6px;}
.exp-role{font-family:'Cinzel Decorative',serif;color:#f0c84a!important;font-size:1.1rem;text-shadow:0 0 12px rgba(201,162,39,.35);margin:0 0 4px;}
.exp-meta{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.95rem;color:rgba(240,230,208,.6);margin:0;}

details.exp-item summary{cursor:pointer;list-style:none;}
details.exp-item summary::-webkit-details-marker{display:none;}
details.exp-item summary::marker{content:'';}
.exp-chevron{position:absolute;right:2px;top:10px;color:rgba(201,162,39,.55);font-size:.8rem;transition:transform .3s ease;}
details.exp-item[open] .exp-chevron{transform:rotate(90deg);}

.exp-highlights{list-style:none;padding:0;margin:14px 0 0;}
.exp-highlights li{font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(240,230,208,.85);line-height:1.75;margin-bottom:7px;padding-left:20px;position:relative;}
.exp-highlights li::before{content:'✦';position:absolute;left:0;top:5px;color:#c9a227;font-size:.68rem;}

@media(max-width:600px){
  .exp-content{padding:22px;}
  .exp-timeline{padding-left:44px;}
  .exp-timeline::before{left:14px;}
  .exp-item::after{left:10px;}
  .exp-node{left:-44px;width:32px;height:32px;}
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
    <p class="exp-section-title">Experience<span class="exp-section-hint">tap any role to see details</span></p>
    <div class="exp-timeline">

      <details class="exp-item">
        <summary>
          <div class="exp-node"><img src="/assets/images/visa-logo.jpg" alt="Vietnamese International Student Association"></div>
          <p class="exp-date">February 2026 &ndash; Present</p>
          <h3 class="exp-role">Rotational Program Intern</h3>
          <p class="exp-meta">Vietnamese International Student Association, UW-Madison &middot; Madison, WI</p>
          <span class="exp-chevron">&rsaquo;</span>
        </summary>
        <ul class="exp-highlights">
          <li><strong>Event Support &amp; Coordination:</strong> Assisted senior members in planning and executing Tet in All Directions (2026), a large-scale cultural celebration with 500+ attendees, managing logistics, volunteer coordination, and on-site operations.</li>
          <li><strong>Presentation &amp; Workshop Leadership:</strong> Led the planning and development of a comprehensive presentation for Cultural Workshop 2026, an educational event with 30+ participants, covering Vietnamese cultural traditions and student community resources.</li>
        </ul>
      </details>

      <details class="exp-item">
        <summary>
          <div class="exp-node"><img src="/assets/images/sadec-logo.png" alt="SADEC Technology JSC"></div>
          <p class="exp-date">June 2026 &ndash; August 2026</p>
          <h3 class="exp-role">AI Engineer Intern</h3>
          <p class="exp-meta">SADEC Technology JSC &middot; Ho Chi Minh City, Vietnam</p>
          <span class="exp-chevron">&rsaquo;</span>
        </summary>
        <ul class="exp-highlights">
          <li>Built Ciel, an enterprise RAG chatbot that answers employee questions from company documents with inline citations, supporting Vietnamese, English, Japanese, and Chinese.</li>
          <li>Designed a hybrid retrieval pipeline (BM25, vector search, and cross-encoder reranking) so answers stay grounded in the actual source text instead of the model's memory.</li>
        </ul>
      </details>

      <details class="exp-item">
        <summary>
          <div class="exp-node"><img src="/assets/images/mushroom-of-love-logo.jpg" alt="Mush-Room of Love"></div>
          <p class="exp-date">2023 &ndash; 2025</p>
          <h3 class="exp-role">Founder &amp; Project Lead</h3>
          <p class="exp-meta">Mush-Room of Love &middot; Ho Chi Minh City, Vietnam</p>
          <span class="exp-chevron">&rsaquo;</span>
        </summary>
        <ul class="exp-highlights">
          <li><strong>Leadership &amp; Operations:</strong> Recruited and led a dedicated team of 7 students to manage the full product lifecycle, from sourcing organic mushrooms at farms and designing eco-friendly packaging to executing Facebook sales campaigns.</li>
          <li><strong>Sales Performance:</strong> Successfully distributed 154 kg of inventory to over 240 customers, generating 40.1 million VND in net profit with a 35% margin in the first year.</li>
          <li><strong>Community Impact:</strong> Directed 100% of proceeds to Huynh De Nhu Nghia Shelter, and organized a charity music event with the team, delivering gifts and spiritual encouragement to visually impaired students.</li>
        </ul>
      </details>

      <details class="exp-item">
        <summary>
          <div class="exp-node"><i class="fas fa-comments"></i></div>
          <p class="exp-date">2023 &ndash; 2025</p>
          <h3 class="exp-role">Co-Founder</h3>
          <p class="exp-meta">HCM Future Business Leader &middot; Ho Chi Minh City, Vietnam</p>
          <span class="exp-chevron">&rsaquo;</span>
        </summary>
        <ul class="exp-highlights">
          <li><strong>Community Building:</strong> Established a robust activity framework of case studies, debates, and networking events to foster a community of aspiring business leaders and promote Vietnam's cultural commodities.</li>
          <li><strong>Digital Marketing:</strong> Executed social media strategies to enhance brand visibility, growing the organization's Facebook page to over 1,000 followers.</li>
          <li><strong>Event Management:</strong> Spearheaded the "Perk Up Your Brand" workshop featuring 2 industry experts and 120+ participants, delivering strategic insights into Vietnam's coffee industry.</li>
        </ul>
      </details>

      <details class="exp-item">
        <summary>
          <div class="exp-node"><img src="/assets/images/ulsa-logo.jpg" alt="University of Labour and Social Affairs"></div>
          <p class="exp-date">March 2024 &ndash; July 2024</p>
          <h3 class="exp-role">Research Assistant</h3>
          <p class="exp-meta">University of Labour and Social Affairs &middot; Ho Chi Minh City, Vietnam</p>
          <span class="exp-chevron">&rsaquo;</span>
        </summary>
        <ul class="exp-highlights">
          <li><strong>Market Research &amp; Analysis:</strong> Conducted an in-depth analysis of the semiconductor human resource shortage in Vietnam versus Taiwan, synthesizing data from 20+ industry reports to identify a critical 80% supply-demand gap.</li>
          <li><strong>Case Study Development:</strong> Executed a comparative case study on TSMC's talent strategy, extracting lessons on specialization and FDI attraction to propose 3 policy recommendations for Vietnam's workforce development.</li>
          <li><strong>Publication:</strong> Co-authored and published the peer-reviewed article "Current Situation of Human Resources in the Semiconductor Industry in Vietnam and Experiences From Taiwan" in the International Research Journal of Economics and Management Studies (Vol. 3, No. 8).</li>
        </ul>
      </details>

      <details class="exp-item">
        <summary>
          <div class="exp-node"><img src="/assets/images/hodeco-logo.png" alt="Ba Ria - Vung Tau House Development JSC"></div>
          <p class="exp-date">July 2024</p>
          <h3 class="exp-role">Business Intern</h3>
          <p class="exp-meta">Ba Ria &ndash; Vung Tau House Development JSC &middot; Ho Chi Minh City, Vietnam</p>
          <span class="exp-chevron">&rsaquo;</span>
        </summary>
        <ul class="exp-highlights">
          <li><strong>Data Analysis:</strong> Analyzed a real estate dataset of 500+ properties using Advanced Excel (Pivot Tables, VLOOKUP), identifying 3 underperforming assets and proposing pricing adjustments.</li>
          <li><strong>Sales Reporting &amp; Presentation:</strong> Spearheaded the weekly sales reporting process, cleansing corrupt raw datasets to ensure 98% data accuracy, and presented strategic insights to 20 stakeholders, cutting preparation time by 30%.</li>
          <li><strong>Market Research:</strong> Conducted competitor analysis that contributed to a 10% refinement in the company's marketing strategy for Q3.</li>
        </ul>
      </details>

      <details class="exp-item">
        <summary>
          <div class="exp-node"><img src="/assets/images/bamboo-capital-logo.png" alt="Bamboo Capital Group"></div>
          <p class="exp-date">July 2023</p>
          <h3 class="exp-role">Business Intern</h3>
          <p class="exp-meta">Bamboo Capital Group &middot; Ho Chi Minh City, Vietnam</p>
          <span class="exp-chevron">&rsaquo;</span>
        </summary>
        <ul class="exp-highlights">
          <li><strong>Data Integrity &amp; Operations:</strong> Managed the accurate entry of weekly sales data into the company's ERP, ensuring 100% data accuracy to support warehouse inventory operations and logistics planning.</li>
          <li><strong>Strategic Market Research:</strong> Conducted a comprehensive analysis of 5+ key distribution channels, identifying coverage gaps and proposing improvements adopted by the marketing team.</li>
          <li><strong>Process Optimization:</strong> Streamlined administrative workflows by digitizing a backlog of physical documents, reducing file retrieval time by 20% and enhancing information security.</li>
        </ul>
      </details>

    </div>
  </div>
</div>
