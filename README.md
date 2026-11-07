# An Nguyen's Portfolio

> *"Where data whispers untold stories"*

Welcome to the source code of my personal portfolio! I am **An Nguyen**, a Data Science & Economics student at the **University of Wisconsin–Madison**.

**Live Website:** [aansensei.github.io](https://aansensei.github.io/)

### About This Repo
This repository contains the source code for my portfolio website. It features a unique "Fairy Tale Collection" theme with custom 3D book UI interactions and glassmorphism design.

Since all my detailed projects, background, and contact information are available on the website, please visit the live link above to explore my work!

### Built With
* HTML5 & Custom CSS3 (3D Transforms, Keyframe Animations)
* Vanilla JavaScript
* Jekyll (Static Site Generator)

### Recovery and Offline Experience

HiddenCare's wrapper and the contact form provide local retry controls without reloading the rest of the page. An iframe load event does not establish that the external app is healthy; the wrapper only marks it ready after an explicit, origin-checked readiness message.

Recovery screens use the portfolio's white/teal daylight and midnight/gold night palette, its `an_theme` session preference, and the original Kanade plush from the 404 page. The cards grow with their content instead of introducing a nested scrollbar.

The shared recovery include registers `/sw.js` on HTTPS (or localhost). After successful installation and activation, a small cached fallback handles failed top-level navigations and server errors. It preserves real 404 responses and does not cache the portfolio, contact submissions, APIs, or external apps. The fallback cannot cover a first-ever visit during an outage, a different origin, or cleared/evicted browser storage. A full hosting/DNS outage still needs independent hosting and external failover if automatic recovery is desired; neither is configured here.

When changing the offline page, its CSS, or its mascot, increment `RECOVERY_CACHE` in `sw.js`. A worker update waits for existing tabs using the old worker to close. To retire this feature, first deploy a replacement worker that unregisters itself and removes only caches prefixed `an-recovery-`; simply deleting `sw.js` can leave existing clients controlled by an old worker.

### Connect
* **Email:** [cnguyen49@wisc.edu](mailto:cnguyen49@wisc.edu)
* **LinkedIn:** [Cao Thien An Nguyen](https://www.linkedin.com/in/cao-thien-an-nguyen-0a92a4396)
