const currentYear = document.getElementById("current-year");
const revealItems = document.querySelectorAll(".reveal");
const skillScores = document.querySelectorAll(".skill-score");

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const mixHex = (startHex, endHex, amount) => {
  const safeAmount = clamp(amount, 0, 1);
  const start = startHex.replace("#", "");
  const end = endHex.replace("#", "");
  const startChannels = start.match(/.{1,2}/g).map((channel) => parseInt(channel, 16));
  const endChannels = end.match(/.{1,2}/g).map((channel) => parseInt(channel, 16));

  const mixed = startChannels.map((channel, index) => {
    const next = endChannels[index];
    return Math.round(channel + (next - channel) * safeAmount)
      .toString(16)
      .padStart(2, "0");
  });

  return `#${mixed.join("")}`;
};

skillScores.forEach((scoreItem) => {
  const rawScore = Number(scoreItem.dataset.score);
  const score = Number.isFinite(rawScore) ? clamp(rawScore, 0, 100) : 0;
  const label = scoreItem.querySelector(".skill-score-name")?.textContent?.trim() || "Skill";
  const valueNode = scoreItem.querySelector(".skill-score-value");
  const color =
    score < 50
      ? mixHex("#c96158", "#7a858f", score / 50)
      : mixHex("#7a858f", "#2ba84a", (score - 50) / 50);
  const displayValue = Number.isInteger(score) ? `${score}` : score.toFixed(1).replace(/\.0$/, "");

  scoreItem.style.setProperty("--score", score);
  scoreItem.style.setProperty("--skill-score-color", color);
  scoreItem.setAttribute("aria-label", `${label}: ${displayValue} out of 100`);

  if (valueNode) {
    valueNode.textContent = displayValue;
  }
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
