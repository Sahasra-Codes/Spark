const introQuestions = [
  "What brought you to Spark? What's felt a little stale or repetitive lately?",
  "What did you used to love doing just because you enjoyed it?",
  "What does a good day look like for you? When did you last feel most like yourself?",
  "What's something you've wanted to try or get back to, but keep putting off?",
  "What usually gets in the way: time, energy, nerves, or something else?",
  "How much time could you realistically give a small challenge over the next day or two?",
  "What budget should I stick to? Free is completely fine.",
  "Are there any physical or accessibility limits I should plan around?",
  "What's off-limits for you, such as talking to strangers, traveling, certain places, or anything else?",
  "What would feel like a small, doable step outside your routine for your first challenge?",
];

export default function IntroAgent() {
  return (
    <main>
      <h1>Let's find your spark</h1>
      <p>
        Spark is a guide for self-exploration. Through small, personalized
        real-world challenges and reflection, you can explore what interests
        you, try something different, and notice what makes you feel like yourself.
        There are no right answers and no pressure to reinvent yourself.
      </p>
      <p>
        Spark isn't therapy and doesn't replace professional mental health
        support. Think of it as a curious companion helping you learn about
        yourself through everyday experiences, at your own pace and within
        your boundaries.
      </p>
      <h2>Getting to know you</h2>
      <ol>
        {introQuestions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ol>
      <p>
        Before choosing your first challenge, your guide will summarize what
        you've shared so you can correct or add anything, including your
        interests, available time, budget, and boundaries.
      </p>
    </main>
  );
}
