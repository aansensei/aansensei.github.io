# An Nguyen's Academic & Engineering Portfolio

> *"Where data whispers untold stories"*

Welcome to the personal research portfolio and engineering repository of **Cao Thien An Nguyen (AanSensei)**, undergraduate researcher in Data Science and Economics at the **University of Wisconsin, Madison**.

* **Live Portfolio Website:** [aansensei.dev](https://aansensei.dev/)
* **Flagship Research Platform:** [aansensei.dev/hiddencare/](https://aansensei.dev/hiddencare/)
* **Hugging Face Space:** [huggingface.co/spaces/aansensei/HiddenCare](https://huggingface.co/spaces/aansensei/HiddenCare)
* **GitHub Profile:** [github.com/aansensei](https://github.com/aansensei)

---

## Featured Flagship Project: HiddenCare

**HiddenCare: Algorithmic Triage and Health Equity Laboratory**  
*When Training Labels Change Who Gets Screened: Temporal Evaluation of Diagnosis Based Versus Biomarker Augmented Labels for Diabetes Screening in NHANES*

* **Research Focus:** Investigating proxy outcome bias in algorithmic triage and population health screening under finite resource constraints (5% to 50% capacity).
* **Dataset:** CDC National Health and Nutrition Examination Survey (NHANES 2017 to 2023, N = 12,459; pre-pandemic training N = 7,761; post-pandemic locked holdout N = 4,698 undiagnosed adults with 116 laboratory confirmed cases).
* **Statistical Rigor:** Design-based complex survey inference using Taylor Series Linearization with mobile examination center weights (WTPH2YR, df = 15).
* **Primary Result:** At 20% screening capacity, the biomarker-augmented model achieves +2.38 percentage points sensitivity gain (paired 95% CI: [-1.77, +6.53 pp], paired SE = 1.95 pp) over diagnosis-only models.
* **Precision Margin:** A 61-person boundary swap yields a 3.0x precision dividend (4.92% vs 1.64% true yield).
* **Health Economics:** Decision Curve Analysis (DCA) demonstrates a Net Monetary Benefit advantage of +$25,500 per 10,000 screened individuals.
* **Interactive Architecture:** Zero-downtime resilient portal embedded with an academic poster viewer (SciencePlots two-panel Forest Plot) and complete peer-review documentation.

---

## Repository Architecture

This repository hosts the static frontend for [aansensei.dev](https://aansensei.dev/), featuring:
* Custom CSS3 3D book transformations and glassmorphism UI.
* Resilient iframe wrappers with cryptographically verified readiness handshakes.
* Multi-engine search indexing architecture (XML sitemaps, robots.txt, schema.org JSON-LD microdata, and semantic crawler dossiers for search engines).
* Bing Webmaster Tools and Google Search Console verification protocols.

---

## Recovery and Offline Experience

HiddenCare's wrapper and the contact form provide local retry controls without reloading the rest of the page. An iframe load event does not establish that the external app is healthy; the wrapper only marks it ready after an explicit, origin-checked readiness message.

Recovery screens use the portfolio's white and teal daylight and midnight and gold night palette, its `an_theme` session preference, and the original Kanade plush from the 404 page. The cards grow with their content instead of introducing a nested scrollbar.

The shared recovery include registers `/sw.js` on HTTPS (or localhost). After successful installation and activation, a small cached fallback handles failed top-level navigations and server errors. It preserves real 404 responses and does not cache the portfolio, contact submissions, APIs, or external apps. The fallback cannot cover a first-ever visit during an outage, a different origin, or cleared/evicted browser storage. A full hosting/DNS outage still needs independent hosting and external failover if automatic recovery is desired; neither is configured here.

When changing the offline page, its CSS, or its mascot, increment `RECOVERY_CACHE` in `sw.js`. A worker update waits for existing tabs using the old worker to close. To retire this feature, first deploy a replacement worker that unregisters itself and removes only caches prefixed `an-recovery-`; simply deleting `sw.js` can leave existing clients controlled by an old worker.

---

## Contact & Scholarly Profiles

* **Email:** [cnguyen49@wisc.edu](mailto:cnguyen49@wisc.edu)
* **LinkedIn:** [Cao Thien An Nguyen](https://www.linkedin.com/in/cao-thien-an-nguyen-0a92a4396)
* **GitHub:** [@aansensei](https://github.com/aansensei)
