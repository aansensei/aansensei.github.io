---
layout: splash
title: "ChatRAG · Ciel"
permalink: /projects/chatrag/
---

<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet">

<style>
.page__inner-wrap{max-width:1400px!important;background:transparent!important;border:none!important;box-shadow:none!important;padding:0 20px!important;}
.project-grid{display:grid;grid-template-columns:240px 1fr 270px;gap:24px;margin-top:28px;margin-bottom:50px;align-items:start;}
.glass-box{background:rgba(6,4,22,.6);backdrop-filter:blur(20px);border:1px solid rgba(201,162,39,.2);border-radius:16px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.4),inset 0 1px 0 rgba(201,162,39,.08);position:relative;}
.glass-box::before{content:'';position:absolute;top:0;left:10%;right:10%;height:1px;background:linear-gradient(to right,transparent,rgba(201,162,39,.35),transparent);}

.col-left{position:sticky;top:100px;max-height:85vh;overflow-y:auto;}
.col-left::-webkit-scrollbar{width:4px;}
.col-left::-webkit-scrollbar-thumb{background:rgba(201,162,39,.3);border-radius:10px;}

.back-btn{display:flex;align-items:center;gap:10px;color:#c9a227!important;text-decoration:none!important;font-weight:700;font-family:'Cormorant Garamond',serif;font-size:1rem;letter-spacing:.05em;margin-bottom:24px;transition:.3s;cursor:pointer;}
.back-btn:hover{color:#f0c84a!important;transform:translateX(-5px);text-shadow:0 0 10px rgba(201,162,39,.5);}

.author-box{text-align:center;border-bottom:1px solid rgba(201,162,39,.15);padding-bottom:18px;margin-bottom:18px;}
.author-box img{width:80px;height:80px;border-radius:50%;border:2px solid #c9a227;object-fit:cover;box-shadow:0 0 14px rgba(201,162,39,.35);}
.author-box h3{margin:10px 0 0;font-family:'Cinzel Decorative',serif!important;font-size:.85rem!important;color:#f0c84a!important;text-shadow:0 0 12px rgba(201,162,39,.4)!important;}

.toc-title{color:#c9a227!important;font-family:'Cormorant Garamond',serif!important;font-size:.95rem!important;font-weight:700!important;margin-bottom:14px;text-transform:uppercase;letter-spacing:.15em;opacity:.75;}
.toc-list{list-style:none;padding:0;margin:0;}
.toc-list li{margin-bottom:10px;}
.toc-list a{color:rgba(255,248,235,.7)!important;text-decoration:none!important;font-family:'Cormorant Garamond',serif;font-size:.93rem;transition:.2s;display:block;}
.toc-list a:hover{color:#f0c84a!important;padding-left:5px;}

.col-main{min-height:800px;color:rgba(240,230,208,.9);line-height:1.85;}
.col-main h1{font-family:'Cinzel Decorative',serif!important;font-size:1.25rem!important;color:#f0c84a!important;text-shadow:0 0 18px rgba(201,162,39,.4)!important;border-bottom:1px solid rgba(201,162,39,.2);padding-bottom:14px;margin-top:0;}
.col-main h2,.col-main h3{color:#4d9fff!important;font-family:'Cormorant Garamond',serif!important;font-size:1.15rem!important;font-weight:700!important;margin-top:28px;margin-bottom:10px;}
.col-main img{border-radius:12px;box-shadow:0 5px 20px rgba(0,0,0,.5),0 0 0 1px rgba(201,162,39,.1);margin:18px 0;max-width:100%;display:block;}
.col-main blockquote{border-left:3px solid #c9a227;padding:10px 15px;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.1rem;color:#f0c84a!important;background:rgba(201,162,39,.06);border-radius:0 8px 8px 0;margin:18px 0;text-shadow:none!important;}
.col-main p,.col-main ul,.col-main ol{margin-bottom:14px;}
.col-main ul{padding-left:20px;}.col-main li{margin-bottom:8px;}
.col-main strong{color:#faeab1!important;}.col-main em{color:#4d9fff!important;font-style:italic;}
.intern-meta{font-family:'Cormorant Garamond',serif!important;font-style:italic;font-size:1rem!important;color:rgba(240,230,208,.55)!important;margin:-6px 0 18px 0!important;}
.col-main code{background:rgba(77,159,255,.12)!important;color:#8ec2ff!important;padding:2px 7px!important;border-radius:5px!important;border:1px solid rgba(77,159,255,.25)!important;font-family:'Courier New',monospace!important;font-size:.88em!important;}

.col-right{position:sticky;top:100px;text-align:center;}
.cover-img{width:100%;border-radius:12px;margin-bottom:8px;box-shadow:0 0 22px rgba(0,0,0,.6),0 0 0 1px rgba(201,162,39,.12);}
.proj-title{font-family:'Cinzel Decorative',serif!important;font-size:1.05rem!important;color:#f0c84a!important;text-shadow:0 0 14px rgba(201,162,39,.4)!important;margin-bottom:18px;line-height:1.4;}
.btn-action{display:block;width:100%;padding:11px;border-radius:28px;margin-bottom:11px;text-decoration:none!important;font-weight:700;font-family:'Cormorant Garamond',serif;font-size:.97rem;letter-spacing:.05em;transition:all .3s;color:#fff!important;}
.btn-git{background:rgba(201,162,39,.1);border:1px solid rgba(201,162,39,.3);}
.btn-git:hover{background:rgba(201,162,39,.2);border-color:#c9a227;transform:translateY(-3px);box-shadow:0 4px 14px rgba(201,162,39,.3);}

@media(max-width:1024px){.project-grid{grid-template-columns:1fr;}.col-left,.col-right{position:relative;top:0;max-height:none;overflow:visible;}}
</style>

<div class="project-grid">

  <div class="glass-box col-left">
    <a href="/projects/" class="back-btn" >❮ Back to Collection</a>
    <div class="author-box">
      <img src="/assets/images/avatar.jpg" alt="Avatar">
      <h3>Cao Thien An Nguyen</h3>
    </div>
    <p class="toc-title">🌙 Contents</p>
    <ul class="toc-list">
      <li><a href="#context-goal">Context &amp; Goal</a></li>
      <li><a href="#ideation">The Ideation Phase</a></li>
      <li><a href="#build-journey">Building It &amp; What Went Wrong</a></li>
      <li><a href="#mentor">The Person Who Guided Me</a></li>
      <li><a href="#results">Results</a></li>
      <li><a href="#reflection">Looking Back &amp; Ahead</a></li>
    </ul>
  </div>

  <div class="glass-box col-main">
    <h1>ChatRAG · Ciel: An Enterprise RAG Assistant</h1>
    <p class="intern-meta">Internship at SADEC Technology JSC, June 2026 to August 2026</p>

    <h3 id="context-goal">Context &amp; Goal</h3>
    <p>SADEC Technology JSC's problem was simple to state and expensive to live with: employees were spending real work hours digging through shared drives and asking coworkers the same recurring questions. Where's the policy, what does this report say, which version of this file is current. The company's goal was an internal assistant, later nicknamed <strong>"Ciel,"</strong> that could sit on top of its documents and answer in plain language, in <strong>Vietnamese, English, Japanese, or Chinese</strong>, without ever making an answer up.</p>
    <p>The non-negotiable part of the brief: it had to work for <strong>non-technical staff</strong>, respect <strong>department-scoped permissions</strong>, and be trustworthy enough that people would actually rely on it instead of double-checking the source file every time.</p>

    <img src="/assets/images/PLACEHOLDER-chatrag-chat-ui.png" alt="Ciel chat interface with a cited answer">
    <p><em>Figure 1: Ciel answering a question with clickable <code>[N]</code> citations pointing back to the exact source document.</em></p>

    <h3 id="ideation">The Ideation Phase</h3>
    <p>Before any backend code, we weighed three ways to get an LLM to "know" the company's documents: fine-tune a model on internal data (expensive, and stale the moment a policy changes), give an LLM raw file access with no structure (fast to prototype, no way to guarantee it isn't making things up), or <strong>retrieval-augmented generation</strong>. RAG means indexing the documents, retrieving the relevant pieces at query time, and forcing the model to answer only from what it retrieved. RAG won because company documents change monthly, not yearly; an approach that needed retraining every time HR updated a policy was a non-starter.</p>
    <p>Early on it was also clear that a single vector search wouldn't be enough. Early tests kept missing exact filename and table lookups that plain embedding similarity just isn't built for. That's what pushed the design toward a <strong>hybrid retriever</strong> (BM25 + vector + keyword fallback) from the start, instead of bolting it on later.</p>

    <h3 id="build-journey">Building It &amp; What Went Wrong</h3>
    <p>A few things broke before they worked:</p>
    <ul>
      <li><strong>Multi-turn conversations kept breaking retrieval.</strong> A vague follow-up question, taken on its own, doesn't carry enough meaning to search well. Fixing this meant adding a <strong>query-rewriting step</strong> that folds the conversation history into the question before it ever gets embedded.</li>
      <li><strong>Tables didn't survive being flattened into plain text.</strong> Spreadsheets and tables needed their own chunking and prompting strategy. Treating them like prose lost the exact thing that made them useful.</li>
      <li><strong>Scanned paperwork was its own category of pain.</strong> A meaningful share of "documents" in a real company are photos and scans, not clean PDFs, which is why OCR (PaddleOCR) ended up load-bearing rather than a nice-to-have.</li>
      <li><strong>A confident wrong answer is worse than no answer.</strong> In an internal-tools setting, that meant every response had to be context-strict with inline citations, so the model can only speak from what it actually retrieved. Reranking (BGE cross-encoder) made sure the passages that make it into the prompt are the actually relevant ones, not just the nearest by cosine distance.</li>
    </ul>

    <img src="/assets/images/PLACEHOLDER-chatrag-architecture.png" alt="ChatRAG system architecture diagram">
    <p><em>Figure 2: High-level architecture, covering the ingestion pipeline, hybrid retrieval, and the streaming answer path.</em></p>

    <h3 id="mentor">The Person Who Guided Me</h3>
    <p><strong>Anh Phi</strong> was the person I turned to whenever an idea looked good on paper but fell apart against real documents. He reviewed the retrieval design, pushed back on shortcuts that would've looked fine in a demo and broken in production, and was a big part of why this ended up as a system I'd trust with real company data rather than just a working prototype.</p>

    <h3 id="results">Results</h3>
    <ul>
      <li><strong>Grounded answers:</strong> every response carries clickable <code>[N]</code> citations back to the source document. A hallucinated claim has nowhere to point to, which makes wrong answers easy to catch.</li>
      <li><strong>Multi-turn that actually works:</strong> the query-rewriting step means a user can ask a vague follow-up and still get the right documents pulled in.</li>
      <li><strong>Works on real company documents:</strong> mixed PDFs, Word, Excel, CSV, and scanned images, in four languages, without a separate pipeline per format.</li>
    </ul>
<!-- AanSensei: nếu có số liệu thật, vd số tài liệu index được, thời gian phản hồi trung bình, % câu hỏi trả lời đúng qua đánh giá nội bộ, chèn vào đây sẽ mạnh hơn nhiều so với mô tả định tính. -->

    <h3 id="reflection">Looking Back &amp; Ahead</h3>
    <p>This internship pushed me past the "cool demo" version of RAG that most tutorials stop at. The interesting engineering wasn't the LLM call. It was everything around it: making retrieval actually find the right passage, making multi-turn conversation not fall apart, and making the system honest about the limits of what it knows. Building <strong>Ciel</strong> taught me that in an enterprise setting, <strong>trustworthiness is a feature you have to engineer for</strong>, not a side effect of a good model.</p>
    <p>Directions I'd want to push this further:</p>
    <ul>
      <li><strong>Feedback-driven reranking:</strong> use thumbs-up/down on answers to fine-tune the reranker on the company's own documents instead of relying purely on a general-purpose model.</li>
      <li><strong>Usage analytics:</strong> a lightweight admin dashboard showing which documents get queried most and where retrieval confidence is consistently low, mapping out where the knowledge base has gaps.</li>
    </ul>
  </div>

  <div class="glass-box col-right">
    <img src="/assets/images/PLACEHOLDER-chatrag-preview.png" alt="ChatRAG Preview" class="cover-img">
    <h2 class="proj-title">ChatRAG · Ciel</h2>
    <div class="proj-skills">
      <span class="proj-skill">FastAPI</span>
      <span class="proj-skill">React</span>
      <span class="proj-skill">TypeScript</span>
      <span class="proj-skill">Supabase</span>
      <span class="proj-skill">pgvector</span>
      <span class="proj-skill">Redis</span>
      <span class="proj-skill">Ollama</span>
      <span class="proj-skill">PaddleOCR</span>
      <span class="proj-skill">sentence-transformers</span>
    </div>
    <hr class="proj-divider">
    <a href="https://github.com/aansensei/chatRAG" target="_blank" class="btn-action btn-git"><i class="fab fa-github"></i> Source Code</a>
  </div>

</div>

<style>
/* Local overlay styles (fallback) */
#an-book-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(2,1,10,.97);backdrop-filter:blur(18px);z-index:999999;display:block;opacity:0;pointer-events:none;transition:opacity .3s;perspective:1200px;}
.an-book{width:220px;height:340px;position:absolute;top:50%;left:50%;transform-style:preserve-3d;}
.an-book-back,.an-book-p1,.an-book-p2,.an-book-p3,.an-book-front{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:5px 14px 14px 5px;transform-origin:left center;transform-style:preserve-3d;transition:transform 1s cubic-bezier(.25,1,.5,1);}
.an-book-back{background:#06031a;transform:translateZ(-6px);}
.an-book-p1{background:linear-gradient(to left,#d0c8b0,#ede8d8);border:1px solid #ccc;transform:translateZ(-4px);}
.an-book-p2{background:linear-gradient(to right,#d8d0bc,#f0ece0);border:1px solid #ccc;transform:translateZ(-2px);}
.an-book-p3{background:linear-gradient(to left,#d4ccbc,#ece8e0);border:1px solid #ccc;transform:translateZ(0);}
.an-book-front{border:1px solid rgba(201,162,39,.35);box-shadow:0 0 30px rgba(0,0,0,.6),0 0 20px rgba(201,162,39,.4);display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;transform:translateZ(2px);}
.an-book-front h3{color:#fff!important;font-family:'Cinzel Decorative',serif!important;font-size:1.3rem!important;text-shadow:0 0 14px rgba(255,255,255,.7)!important;margin:0!important;pointer-events:none!important;}
</style>

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
.proj-skills{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:14px;justify-content:center;}
.proj-skill{font-family:'Cormorant Garamond',serif;font-size:.8rem;padding:3px 10px;background:rgba(201,162,39,.1);border:1px solid rgba(201,162,39,.3);border-radius:14px;color:#c9a227!important;}
.proj-divider{border:none;border-top:1px solid rgba(201,162,39,.2);margin:0 0 14px;}
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
