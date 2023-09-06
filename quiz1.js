document.getElementById("quiz1-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const scores = [];

    for (let i = 1; i <= 20; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            scores.push(parseInt(selectedOption.value));
        } else {
            // Assuming Neutral (3 points) if no answer is selected
            scores.push(3);
        }
    }

    const totalScore = scores.reduce((a, b) => a + b, 0);

    let category;
    let description;
    if (totalScore >= 81 && totalScore <= 100) {
        category = "Excellent Love";
        description = "This range suggests that the family has a strong and healthy culture of love, with members feeling deeply connected and supported. Love is consistently expressed, and conflicts are effectively resolved with love at the forefront.";
    } else if (totalScore >= 61 && totalScore <= 80) {
        category = "Strong Love";
        description = "Within this range, the family demonstrates a significant presence of love. Members generally feel loved and valued, and love is a key aspect of family life. There may be occasional challenges, but overall, love prevails.";
    } else if (totalScore >= 41 && totalScore <= 60) {
        category = "Moderate Love";
        description = "In this range, love is present, but there may be room for improvement. The family members likely care for each other, but there could be instances where expressions of love are inconsistent or conflicts may occasionally overshadow it.";
    } else if (totalScore >= 21 && totalScore <= 40) {
        category = "Limited Love";
        description = "Families falling in this range may experience challenges related to expressing and experiencing love. There might be areas where love is lacking or where conflicts are more prominent. It may be beneficial to work on strengthening the culture of love.";
    } else {
        category = "Needs Improvement";
        description = "Families in this range may struggle with issues related to love and connection. There might be significant challenges in expressing and experiencing love within the family. It's essential to address these issues to improve the family dynamic.";
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your total score is: ${totalScore}`;
    
    const categoryElement = document.getElementById("category");
    categoryElement.textContent = `Score Card: ${category}`;
    
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = description;
});

