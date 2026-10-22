# Spark


Spark

Spark is a website where an AI guide gets to know you through a short voice conversation, then gives you personalized real-world challenges, one at a time, as sealed envelopes. After each challenge you reflect on how it went, and the guide uses what you say to shape what comes next.

Spark is not therapy and does not replace professional support. It is a "partner in crime" that nudges you to try new things and notice how you respond.

The idea

Many people feel like they've lost themselves in routine, pressure, or over-optimization, and can't think their way back to what excites them. Spark bets that people can act their way there: try something small and different, reflect on it, repeat.

Inspired by the idea of a box of sealed, personalized challenges left by someone who knew you well. Spark's job is to get as close to that feeling as an AI can: each challenge should feel chosen for you, not generated for anyone.

Launch audience: first-year college students in a transition who know their path but feel life has become artificial or over-scheduled.

Success looks like: a handful of people finish the experience and say it changed something for them. Download counts are not the goal.

How it works
Voice intake (3-5 minutes). Talk to your guide. It asks about what you used to love, what you've been avoiding, what a good day looks like, and what feels stale. It also asks about your boundaries: what you won't do, budget limits, and physical limits.
"Here's what I heard." The guide shows a short summary of your answers. You can correct it before anything is generated.
Sealed envelopes. Challenges arrive one at a time. Each includes a short note explaining why it was chosen for you, tied to something you said.
Reflection. After each challenge, answer three prompts by voice or text: What did you do? What surprised you? What would you change? The guide replies briefly.
Adaptation. Your reflection shapes the next envelope.
"What I noticed about you." After the final challenge, the guide writes a summary of patterns it noticed. This is the payoff of the experience.

Example challenge

You said you used to love wandering without a destination. Take a different route to a place you enjoy today, and notice one thing you'd never have seen on your usual way.

MVP scope (proposed)
In
Voice intake with a short, fixed set of questions plus boundaries
"Here's what I heard" confirmation screen
5 challenges (one mini-season), unlocked one at a time
Reflection after each challenge (voice or text)
One swap per user for a challenge that doesn't work for them
Final "what I noticed about you" summary
Basic safety and privacy handling (see below)
Out (for now)
The full 20-challenge structure and adjustable challenge counts
Talking avatar and extensive voice customization (one or two voices at most)
Accounts, payments, social features
Native mobile app
Challenge generation rules

Every generated challenge must:

Reference a specific detail from the user's intake or past reflections
Be doable within one to two days
Name one concrete action and one thing to notice
Respect the user's stated boundaries (hard constraints, not suggestions)
Avoid generic prompts like "try a new hobby" or "go for a walk" with no personal tie

If a challenge reads like a checklist item that could be given to anyone, it fails.

Gating and progression
The next envelope unlocks once the user has actually reflected. The check is light: the reflection exists and isn't blank. The AI does not judge whether a reflection was "good enough."
Each user gets one swap for a challenge that isn't feasible (weather, money, safety, schedule).
Difficulty should rise across the season: small, then medium, then a stretch near the end.
Safety and privacy
Not therapy. The product states this clearly at onboarding and in-session.
Crisis handling. If a user expresses distress or crisis during a session or reflection, the guide stops the challenge flow and points to appropriate resources instead of continuing.
Hard boundaries. Boundaries collected at intake are enforced in generation, so challenges cannot cross them.
Physical-world risk. Challenges involving travel, strangers, or new places include basic safety guidance.
Data. Store transcripts only (no raw audio) unless there's a clear reason. Tell users what is stored and for how long. Provide a way to delete their data.
Success metrics
% of users who start challenge 1 within ~48 hours
% of users who complete at least 3 of 5 challenges
Rating of "this felt written for me" (1-5)
Open-ended question at the end: Did anything change for you?
Tech stack (proposed, open to change)
Frontend: React web app
Voice: hosted voice API for intake and optional reflection input
LLM: a hosted LLM API for challenge generation, reflection responses, and summaries
Backend / storage: lightweight backend plus a small database for users, profile summaries, challenges, and reflections

Keep the first version simple: a thin web app wrapped around a short chain of LLM calls.

Frontend setup

The React starter app lives in `frontend/`. From that directory, install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Run `npm run build` to type-check and create a production build in `frontend/dist/`.

Design notes
Cream background, white envelopes, a few accent colors, a fun font
Envelopes should feel like a small event to open
Calm, warm, playful tone. Not clinical and not "productivity app."
Build plan
Manual test (no code). Interview 3-5 friends, hand-write their challenges, run the reflection loop over text, and note what breaks.
Thin web version. Voice intake, confirmation screen, five envelopes, reflection, final summary.
Test with friends and a few strangers. Collect the success metrics above.
Iterate on challenge quality and personalization before adding any features from the "out" list.
Open questions
Should the final summary be private, or shareable? (Shareable could help growth but may change how honest reflections are.)
How should the guide respond to a reflection: adjust the next challenge, point out a pattern, ask a follow-up, or all three?
What is the arc across the season, and what happens at the end? (A summary, something shareable, a way to start another round?)
Which voice and LLM providers to use, and how voice data is stored.
Status

Early concept and design stage. Not yet built.
