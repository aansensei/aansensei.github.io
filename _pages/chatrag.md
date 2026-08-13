---
layout: splash
title: "ChatRAG — Ciel"
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
      <li><a href="#executive-summary">Executive Summary</a></li>
      <li><a href="#1-the-problem">1. The Problem</a></li>
      <li><a href="#2-architecture">2. Architecture &amp; Tech Choices</a></li>
      <li><a href="#3-engineering-deep-dive">3. Engineering Deep-Dive</a></li>
      <li><a href="#4-key-results">4. Key Results</a></li>
      <li><a href="#5-conclusion">5. Conclusion</a></li>
      <li><a href="#6-future-directions">6. Future Directions</a></li>
    </ul>
  </div>

  <div class="glass-box col-main">
    <h1>ChatRAG — Ciel: An Enterprise RAG Assistant</h1>

    <h3 id="executive-summary">Executive Summary: The Discovery Journey</h3>
    <blockquote>"A chatbot that reads your documents is easy to demo. A chatbot that never lies about what it read — that's the actual job."</blockquote>
    <p>Building Ciel during my internship at <strong>SADEC Technology JSC</strong> went through 3 stages I didn't expect:</p>
    <ol>
      <li><strong>The Assumption:</strong> I believed embedding search alone would find the right passages.<br>
      <em>*Discovery:</em> Pure vector search missed exact filename and table lookups — I had to blend it with <strong>BM25 keyword search</strong> as a hybrid retriever.</li>
      <li><strong>The Confusion:</strong> Follow-up questions in a conversation kept breaking retrieval — the second question alone didn't carry enough meaning to search well.<br>
      <em>*The Pivot:</em> I added a <strong>query-rewriting step</strong> that folds the conversation history into the question before it ever gets embedded.</li>
      <li><strong>The Realization:</strong> In an internal-tools setting, a confident wrong answer is worse than no answer.<br>
      <em>*Result:</em> I made every answer <strong>context-strict with inline citations</strong>, so the model can only speak from what it actually retrieved.</li>
    </ol>

    <h3 id="1-the-problem">1. The Problem</h3>
    <p>Employees at the company were losing time digging through shared drives and asking coworkers the same recurring questions about internal documents — policies, reports, spreadsheets, scanned paperwork. I was asked to build a chatbot, internally nicknamed <strong>"Ciel,"</strong> that could sit on top of those documents and answer in plain language, in <strong>Vietnamese, English, Japanese, or Chinese</strong>, without ever making an answer up.</p>
    <p>The constraint that shaped everything else: this had to work for <strong>non-technical staff</strong>, respect <strong>department-scoped permissions</strong>, and be trustworthy enough that people would actually rely on it instead of double-checking the source file every time.</p>

    <img src="/assets/images/PLACEHOLDER-chatrag-chat-ui.png" alt="Ciel chat interface with a cited answer">
    <p><em>Figure 1: Ciel answering a question with clickable <code>[N]</code> citations pointing back to the exact source document.</em></p>

    <h3 id="2-architecture">2. Architecture &amp; Tech Choices</h3>
    <p>The stack is a <strong>FastAPI</strong> backend streaming answers over <strong>SSE</strong> to a <strong>React + Vite + TypeScript</strong> frontend. A few decisions mattered more than the others:</p>
    <ul>
      <li><strong>Supabase (Postgres + pgvector):</strong> I wanted structured metadata (departments, permissions, audit logs) and vector embeddings living in the <em>same</em> database instead of stitching together a separate vector store, to keep permission checks and retrieval consistent.</li>
      <li><strong>Redis pub/sub:</strong> Document ingestion — parsing, OCR, chunking, embedding — takes real time. Redis lets the frontend show live progress instead of a spinner that lies.</li>
      <li><strong>Local or cloud LLMs:</strong> Some documents are sensitive, so I made the model backend swappable — <strong>Ollama</strong> (default <code>gemma3:4b</code>) running fully on-prem, or a cloud provider (Groq, OpenAI, Gemini, Anthropic, Cerebras) when quality matters more than data locality.</li>
      <li><strong>multilingual-e5-base embeddings:</strong> chosen specifically so retrieval quality doesn't fall apart across Vietnamese, English, Japanese, and Chinese queries against mixed-language documents.</li>
    </ul>

    <img src="/assets/images/PLACEHOLDER-chatrag-architecture.png" alt="ChatRAG system architecture diagram">
    <p><em>Figure 2: High-level architecture — ingestion pipeline, hybrid retrieval, and the streaming answer path.</em></p>

    <h3 id="3-engineering-deep-dive">3. Engineering Deep-Dive</h3>
    <ul>
      <li><strong>Hybrid, filename-aware search:</strong> BM25 + vector similarity + a keyword fallback, so asking for "the Q3 budget file" works even when the phrase never appears verbatim inside the document.</li>
      <li><strong>Table-aware retrieval:</strong> spreadsheets and tables get chunked and prompted differently from prose, since flattening a table into plain text destroys the thing that makes it useful.</li>
      <li><strong>BGE cross-encoder reranking:</strong> the first-pass retrieval casts a wide net; a reranker then re-scores the candidates so the passages that actually go into the prompt are the most relevant ones, not just the nearest by cosine distance.</li>
      <li><strong>OCR via PaddleOCR:</strong> a meaningful share of "documents" in a real company are scans and photos of paperwork, not clean PDFs.</li>
      <li><strong>JWT auth with department-scoped permissions:</strong> retrieval never surfaces a document a user isn't cleared to see, and every query and admin action is audit-logged.</li>
    </ul>

    <h3 id="4-key-results">4. Key Results</h3>
    <ul>
      <li><strong>Grounded answers:</strong> every response carries clickable <code>[N]</code> citations back to the source document — a hallucinated claim has nowhere to point to, which makes wrong answers easy to catch.</li>
      <li><strong>Multi-turn that actually works:</strong> the query-rewriting step means a user can ask a vague follow-up ("what about last month?") and still get the right documents pulled in.</li>
      <li><strong>Works on real company documents:</strong> mixed PDFs, Word, Excel, CSV, and scanned images, in four languages, without a separate pipeline per format.</li>
    </ul>
    <p><em>[AanSensei: nếu có số liệu thật — vd số tài liệu index được, thời gian phản hồi trung bình, % câu hỏi trả lời đúng qua đánh giá nội bộ — chèn vào đây sẽ mạnh hơn nhiều so với mô tả định tính.]</em></p>

    <h3 id="5-conclusion">5. Conclusion</h3>
    <p>This internship pushed me past the "cool demo" version of RAG that most tutorials stop at. The interesting engineering wasn't the LLM call — it was everything around it: making retrieval actually find the right passage, making multi-turn conversation not fall apart, and making the system honest about the limits of what it knows. Building <strong>Ciel</strong> taught me that in an enterprise setting, <strong>trustworthiness is a feature you have to engineer for</strong>, not a side effect of a good model.</p>

    <h3 id="6-future-directions">6. Future Directions</h3>
    <p>Directions I'd want to push this further:</p>
    <ul>
      <li><strong>Feedback-driven reranking:</strong> use thumbs-up/down on answers to fine-tune the reranker on the company's own documents instead of relying purely on a general-purpose model.</li>
      <li><strong>Usage analytics:</strong> a lightweight admin dashboard showing which documents get queried most and where retrieval confidence is consistently low — a map of where the knowledge base has gaps.</li>
    </ul>
  </div>

  <div class="glass-box col-right">
    <img src="/assets/images/PLACEHOLDER-chatrag-preview.png" alt="ChatRAG Preview" class="cover-img">
    <h2 class="proj-title">ChatRAG — Ciel</h2>
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
