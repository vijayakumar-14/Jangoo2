# Dreams, Decoded

> **A simple guide to what your sleeping brain is doing.**

**Dreams, Decoded** is a welcoming, responsive, educational website dedicated to exploring the science behind dreams and sleep neurobiology in clear, accessible language for a general audience.

---

## 🌟 Key Features

- **Evidence-Based Neuroscience:** Explains sleep architecture, sensory gating, muscle atonia, and what the brain is doing during rest—without pseudoscientific dream interpretation or medical claims.
- **Sleep Stages & Cycles:** Visual breakdown of the 90-minute sleep cycle and an in-depth comparison of **REM vs. Non-REM (NREM)** sleep, demonstrating that dreaming occurs in both states.
- **Why We Dream:** Explores leading scientific hypotheses—memory consolidation, emotional processing ("overnight therapy"), activation-synthesis, and evolutionary threat simulation—while making clear that science has no single proven answer.
- **Myths & Facts:** Unpacks and corrects common misconceptions (precognition, universal dream dictionaries, sleep as a brain shutdown, etc.).
- **Interactive "Myth or Fact?" Quiz:** A 5-question vanilla JavaScript quiz with immediate scientific explanations, keyboard accessibility, and screen reader announcements.
- **Interactive Sleep Stage Explorer:** Compare brainwaves, dream characteristics, and bodily states across REM, N1, N2, and N3 sleep.
- **Zero External Dependencies:** Built with pure semantic HTML5, modern vanilla CSS, and vanilla JavaScript. No external fonts, icons, CSS frameworks, or runtime libraries.
- **Accessible & Responsive:** High-contrast dark celestial palette (WCAG AAA compliant), semantic landmarks, skip links, full keyboard navigability, and `prefers-reduced-motion` support.
- **Graceful Fallback:** All educational content remains accessible and readable even if JavaScript is disabled (`<noscript>` self-guided quiz included).

---

## 📁 Repository Structure

```text
├── index.html     # Semantic markup and educational content
├── styles.css     # CSS custom properties, responsive layout, animations & themes
├── script.js      # Vanilla JS quiz, stage explorer, and accessible navigation
└── README.md      # Project overview and documentation
```

---

## 🚀 Running Locally

Because **Dreams, Decoded** has zero build steps or package dependencies, you can run it directly:

1. Clone or download this repository.
2. Start any local web server from the project root:
   ```bash
   # Using Python 3:
   python -m http.server 8080

   # Or using Node:
   npx serve .
   ```
3. Open `http://localhost:8080` in your web browser.

---

## ☁️ Vercel Deployment Guide

To deploy this site on [Vercel](https://vercel.com):

1. **Import the repository:** Connect your GitHub account and select `vijayakumar-14/Jangoo2`.
2. **Root Directory:** Leave as `./` (the repository root).
3. **Framework Preset:** Select **Other**.
4. **Build Command:** Leave **blank** (no build step is required).
5. **Output Directory:** Leave **blank** (or `./`).
6. Click **Deploy**. Your static site will be live globally in seconds!

---

## 📚 Reputable Scientific Sources

Every claim on this site is verified against peer-reviewed neuroscience and leading health institutions:

1. **National Institute of Neurological Disorders and Stroke (NIH/NINDS)**: [Brain Basics: Understanding Sleep](https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-understanding-sleep)
2. **American Psychological Association (APA)**: [Why We Dream: What Sleep Science Tells Us](https://www.apa.org/topics/sleep/why-we-dream)
3. **Nature Reviews Neuroscience / PubMed Central**: [REM sleep and dreaming: towards a theory of protoconsciousness (Hobson, 2009)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2821153/)
4. **Cleveland Clinic Health Essentials**: [Dreams and Dreaming: What Happens in Your Sleeping Brain](https://health.clevelandclinic.org/dreams-and-dreaming)
5. **Harvard Medical School**: [Division of Sleep Medicine: Sleep, Learning, and Memory](https://sleep.hms.harvard.edu/)

---

## 📄 License

This educational project is open source and available for educational use.

