/**
 * Dreams, Decoded — Vanilla JavaScript
 * Pure vanilla JS: Quiz interactivity, Sleep Stage Explorer, Accessible Nav & Controls.
 * Fully keyboard accessible, screen-reader friendly, and progressively enhanced.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. MOBILE NAVIGATION TOGGLE
     ========================================================================== */
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('is-open');
    });

    // Close menu when a link is clicked
    const navLinks = primaryNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('is-open')) {
          primaryNav.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when Escape key is pressed
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  /* ==========================================================================
     2. BACK TO TOP BUTTON VISIBILITY
     ========================================================================== */
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0.7';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  /* ==========================================================================
     3. INTERACTIVE SLEEP STAGE EXPLORER
     ========================================================================== */
  const stageData = {
    rem: {
      name: 'Rapid Eye Movement (REM)',
      waveTag: 'Brain Wave: Fast, Desynchronized (Beta / Sawtooth)',
      summary: 'Brain metabolism matches or exceeds waking levels. Emotional and visual centers burn bright while voluntary muscles are held motionless.',
      dreamType: 'Cinematic, narrative, emotionally intense, vivid imagery',
      muscleState: 'Atonia (temporary motor paralysis for safety)',
      wavePath: 'M0 40 Q 8 20, 16 40 T 32 40 T 48 40 T 64 40 T 80 40 T 96 40 T 112 40 T 128 40 T 144 40 T 160 40 T 176 40 T 192 40 T 208 40 T 224 40 T 240 40 T 256 40 T 272 40 T 288 40 T 300 40',
      waveColor: '#38bdf8',
      waveDesc: 'Rapid, low-voltage, desynchronized rhythms mirroring alert waking thought.'
    },
    n1: {
      name: 'Stage N1: Light Sleep Transition',
      waveTag: 'Brain Wave: Slowing Alpha to Theta (4–7 Hz)',
      summary: 'The gentle boundary between wakefulness and light sleep. Sensory awareness dims and the body begins settling down for the night.',
      dreamType: 'Hypnagogic imagery, fleeting visual flashes, drifting thoughts',
      muscleState: 'Muscles relax; occasional sudden muscle twitches (hypnic jerks)',
      wavePath: 'M0 40 Q 25 15, 50 40 T 100 40 T 150 40 T 200 40 T 250 40 T 300 40',
      waveColor: '#a78bfa',
      waveDesc: 'Undulating theta rhythms replacing waking alpha waves.'
    },
    n2: {
      name: 'Stage N2: Spindle Sleep',
      waveTag: 'Brain Wave: Theta with Sleep Spindles & K-Complexes',
      summary: 'Makes up nearly 50% of adult sleep time. Body temperature drops, heart rate stabilizes, and the brain blocks out external noises.',
      dreamType: 'Fragmented thoughts, repetitive everyday reflections, short concepts',
      muscleState: 'Progressive muscle relaxation, steady regular breathing',
      wavePath: 'M0 40 Q 20 40 40 40 Q 48 10 54 60 Q 60 15 66 55 Q 72 20 78 50 Q 84 35 90 40 Q 140 40 160 40 Q 170 5 180 75 Q 190 40 210 40 Q 255 40 300 40',
      waveColor: '#38bdf8',
      waveDesc: 'Calm theta baseline interrupted by memory-protecting sleep spindles and K-complexes.'
    },
    n3: {
      name: 'Stage N3: Slow-Wave Deep Sleep',
      waveTag: 'Brain Wave: High-Amplitude Delta (< 2 Hz)',
      summary: 'The deepest, most restorative sleep. Growth hormone surges, tissues repair, and the glymphatic system clears metabolic waste from brain tissue.',
      dreamType: 'Less frequent, static thoughts, emotional tones, sleep terrors (rare)',
      muscleState: 'Deep muscular relaxation, minimal movement, lowest blood pressure',
      wavePath: 'M0 40 Q 40 0, 75 40 T 150 40 T 225 40 T 300 40',
      waveColor: '#60a5fa',
      waveDesc: 'High-voltage, slow, synchronized delta waves driving cellular repair.'
    }
  };

  const stageTabs = document.querySelectorAll('.stage-tab');
  const stageName = document.getElementById('stageName');
  const stageWaveTag = document.getElementById('stageWaveTag');
  const stageSummary = document.getElementById('stageSummary');
  const stageDreamType = document.getElementById('stageDreamType');
  const stageMuscleState = document.getElementById('stageMuscleState');
  const stageWavePath = document.getElementById('stageWavePath');
  const stageWaveDesc = document.getElementById('stageWaveDesc');

  if (stageTabs.length > 0 && stageName) {
    stageTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const stageKey = tab.getAttribute('data-stage');
        const data = stageData[stageKey];
        if (!data) return;

        // Update tabs state
        stageTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Update content smoothly
        stageName.textContent = data.name;
        stageWaveTag.textContent = data.waveTag;
        stageSummary.textContent = data.summary;
        stageDreamType.textContent = data.dreamType;
        stageMuscleState.textContent = data.muscleState;
        stageWaveDesc.textContent = data.waveDesc;

        if (stageWavePath) {
          stageWavePath.setAttribute('d', data.wavePath);
          stageWavePath.setAttribute('stroke', data.waveColor);
        }
      });
    });
  }

  /* ==========================================================================
     4. INTERACTIVE QUIZ: "MYTH OR FACT?"
     ========================================================================== */
  const quizQuestions = [
    {
      id: 1,
      statement: "You can only experience dreams during REM (Rapid Eye Movement) sleep.",
      correct: "myth",
      explanation: "Dreams occur in both REM and non-REM stages. While REM dreams are famously cinematic and vivid, research shows that 30% to 50% of non-REM awakenings produce thought-like, conceptual dream reports."
    },
    {
      id: 2,
      statement: "During REM sleep, the brainstem induces temporary voluntary muscle paralysis.",
      correct: "fact",
      explanation: "This is known as muscle atonia. Specialized neural circuits in the pons and medulla block motor neuron signals, safely preventing you from physically acting out intense dream scenes."
    },
    {
      id: 3,
      statement: "Every dream symbol (such as falling or losing teeth) has a fixed, universal meaning.",
      correct: "myth",
      explanation: "Dream imagery is deeply personal and idiosyncratic. Neuroscience shows dreams reflect individual memories, daytime emotions, and cultural expressions—not an objective universal codebook."
    },
    {
      id: 4,
      statement: "Sleep actively helps the brain organize memories and regulate emotional distress.",
      correct: "fact",
      explanation: "Sleep is a vital cognitive workshop. The hippocampus and cortex replay daytime experiences to strengthen long-term memory, while low stress-hormone levels during REM help dissolve emotional distress."
    },
    {
      id: 5,
      statement: "Neuroscientists have proven one single, definitive reason why humans dream.",
      correct: "myth",
      explanation: "There is no single proven answer. Scientists view dreaming as a multifaceted biological phenomenon—likely supporting memory consolidation, emotional therapy, threat simulation, and neural housekeeping simultaneously."
    }
  ];

  let currentQuestionIndex = 0;
  let userScore = 0;
  let hasAnsweredCurrent = false;

  // DOM Elements
  const quizProgressText = document.getElementById('quizProgressText');
  const quizScore = document.getElementById('quizScore');
  const quizProgressFill = document.getElementById('quizProgressFill');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const quizQuestion = document.getElementById('quizQuestion');
  const btnMyth = document.getElementById('btnMyth');
  const btnFact = document.getElementById('btnFact');
  const quizFeedback = document.getElementById('quizFeedback');
  const feedbackBadge = document.getElementById('feedbackBadge');
  const feedbackText = document.getElementById('feedbackText');
  const btnNextQuestion = document.getElementById('btnNextQuestion');
  const quizCard = document.getElementById('quizCard');
  const quizCompletion = document.getElementById('quizCompletion');
  const completionScoreSummary = document.getElementById('completionScoreSummary');
  const completionMessage = document.getElementById('completionMessage');
  const btnRestartQuiz = document.getElementById('btnRestartQuiz');

  function renderQuestion(index) {
    if (index >= quizQuestions.length) {
      showCompletion();
      return;
    }

    hasAnsweredCurrent = false;
    const q = quizQuestions[index];

    // Update Status
    if (quizProgressText) {
      quizProgressText.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
    }
    const percent = Math.round(((index + 1) / quizQuestions.length) * 100);
    if (quizProgressFill) {
      quizProgressFill.style.width = `${percent}%`;
    }
    if (quizProgressBar) {
      quizProgressBar.setAttribute('aria-valuenow', percent);
    }

    // Set Question text
    if (quizQuestion) {
      quizQuestion.textContent = `“${q.statement}”`;
    }

    // Reset Buttons
    [btnMyth, btnFact].forEach(btn => {
      if (btn) {
        btn.disabled = false;
        btn.classList.remove('selected', 'btn-disabled');
      }
    });

    // Hide Feedback
    if (quizFeedback) {
      quizFeedback.classList.add('hidden');
      quizFeedback.classList.remove('is-correct', 'is-incorrect');
    }

    // Ensure Card is visible, Completion is hidden
    if (quizCard) quizCard.classList.remove('hidden');
    if (quizCompletion) quizCompletion.classList.add('hidden');
  }

  function handleAnswer(userChoice) {
    if (hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;

    const q = quizQuestions[currentQuestionIndex];
    const isCorrect = userChoice === q.correct;

    // Disable choices
    [btnMyth, btnFact].forEach(btn => {
      if (btn) btn.disabled = true;
    });

    if (isCorrect) {
      userScore += 1;
      if (quizScore) quizScore.textContent = userScore;
    }

    // Show Feedback
    if (quizFeedback && feedbackBadge && feedbackText) {
      quizFeedback.classList.remove('hidden');
      if (isCorrect) {
        quizFeedback.classList.add('is-correct');
        quizFeedback.classList.remove('is-incorrect');
        feedbackBadge.className = 'feedback-badge badge-fact';
        feedbackBadge.textContent = '✓ Correct!';
      } else {
        quizFeedback.classList.add('is-incorrect');
        quizFeedback.classList.remove('is-correct');
        feedbackBadge.className = 'feedback-badge badge-myth';
        feedbackBadge.textContent = `✕ Not quite — It's a ${q.correct.toUpperCase()}!`;
      }

      feedbackText.textContent = q.explanation;

      // Update next button label
      if (btnNextQuestion) {
        if (currentQuestionIndex === quizQuestions.length - 1) {
          btnNextQuestion.textContent = 'View Final Results →';
        } else {
          btnNextQuestion.textContent = 'Next Question →';
        }
        btnNextQuestion.focus();
      }
    }
  }

  function showCompletion() {
    if (quizCard) quizCard.classList.add('hidden');
    if (quizCompletion) {
      quizCompletion.classList.remove('hidden');

      if (completionScoreSummary) {
        completionScoreSummary.textContent = `You scored ${userScore} out of ${quizQuestions.length}!`;
      }

      if (completionMessage) {
        if (userScore === 5) {
          completionMessage.textContent = 'Outstanding! You have a fantastic grasp of sleep neurobiology and can easily spot midnight folklore.';
        } else if (userScore >= 3) {
          completionMessage.textContent = 'Well done! You have a solid grasp of how the sleeping brain functions and the difference between REM and non-REM states.';
        } else {
          completionMessage.textContent = 'Good exploration! Sleep science has evolved rapidly in recent years. Review the sections above to see how memory, stages, and brainwaves connect.';
        }
      }

      if (btnRestartQuiz) btnRestartQuiz.focus();
    }
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    if (quizScore) quizScore.textContent = '0';
    renderQuestion(0);
    if (btnMyth) btnMyth.focus();
  }

  // Attach Quiz Listeners
  if (btnMyth) {
    btnMyth.addEventListener('click', () => handleAnswer('myth'));
  }
  if (btnFact) {
    btnFact.addEventListener('click', () => handleAnswer('fact'));
  }
  if (btnNextQuestion) {
    btnNextQuestion.addEventListener('click', () => {
      currentQuestionIndex += 1;
      renderQuestion(currentQuestionIndex);
    });
  }
  if (btnRestartQuiz) {
    btnRestartQuiz.addEventListener('click', restartQuiz);
  }

  // Initialize Quiz on load
  renderQuestion(0);
});

