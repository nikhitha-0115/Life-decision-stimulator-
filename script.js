
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("decisionForm");
  const result = document.getElementById("result");

  if (!form || !result) {
    console.error("Required HTML elements are missing.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const a = {
      name: document.getElementById("choiceA").value.trim(),
      cost: Number(document.getElementById("costA").value),
      benefit: Number(document.getElementById("benefitA").value),
      time: Number(document.getElementById("timeA").value)
    };

    const b = {
      name: document.getElementById("choiceB").value.trim(),
      cost: Number(document.getElementById("costB").value),
      benefit: Number(document.getElementById("benefitB").value),
      time: Number(document.getElementById("timeB").value)
    };

    if (
      !a.name || !b.name ||
      [a.cost, a.benefit, a.time, b.cost, b.benefit, b.time]
        .some(n => !Number.isFinite(n) || n < 0) ||
      a.benefit > 10 || b.benefit > 10
    ) {
      result.textContent = "Please enter valid values. Benefits must be 0–10.";
      return;
    }

    function score(choice) {
      return 40 / (1 + choice.cost / 1000)
        + 30 / (1 + choice.time / 10)
        + choice.benefit * 3;
    }

    const scoreA = score(a);
    const scoreB = score(b);

    result.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Life Decision Analysis";

    const recommendation = document.createElement("p");
    recommendation.textContent =
      Math.abs(scoreA - scoreB) < 1
        ? "Both choices have similar scores."
        : (scoreA > scoreB ? a.name : b.name)
          + " appears to be the better fit.";

    const comparison = document.createElement("p");
    comparison.textContent =
      `${a.name}: ${scoreA.toFixed(1)} points | ` +
      `${b.name}: ${scoreB.toFixed(1)} points`;

    const note = document.createElement("p");
    note.textContent =
      "Use this result as a guide. Your values and circumstances matter too.";

    result.append(heading, recommendation, comparison, note);
  });
});
