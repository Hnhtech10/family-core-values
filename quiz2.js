document.getElementById("quiz2-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const scores = [];

    // Replace these values with the actual scores from the user's answers
    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            scores.push(parseInt(selectedOption.value));
        } else {
            // Handle unanswered questions (assuming Neutral)
            scores.push(3); // Neutral (3 points) if no answer is selected
        }
    }

    // Calculate the total score
    const totalScore = scores.reduce((a, b) => a + b, 0);

    // Determine the category based on the total score
    let category;
    if (totalScore >= 10 && totalScore <= 17) {
        category = "You're not willing to take chances with your money, even though it means you can't make big gains.";
    } else if (totalScore >= 18 && totalScore <= 25) {
        category = "You're semi-conservative, willing to take a small chance with enough information.";
    } else if (totalScore >= 26 && totalScore <= 32) {
        category = "You're semi-aggressive, willing to take chances if you think the odds of earning more are in your favor.";
    } else {
        category = "You're aggressive, looking for every opportunity to make your money grow, even though in some cases the odds may be quite long. You view money as a tool to make more money.";
    }

    // Display the result and category
    const totalScoreElement = document.getElementById("total-score");
    totalScoreElement.textContent = totalScore;

    const categoryElement = document.getElementById("category");
    categoryElement.textContent = category;
});