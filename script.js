document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('wellbeing-form');
    const resultsCard = document.getElementById('results-card');
    const scoreValue = document.getElementById('score-value');
    const categoryBadge = document.getElementById('category-badge');
    const resultMessage = document.getElementById('result-message');
    const resetBtn = document.getElementById('reset-btn');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Retrieve input feature values
        const physicalHealth = parseFloat(document.getElementById('physicalHealth').value);
        const mentalHealth = parseFloat(document.getElementById('mentalHealth').value);
        const sleepHours = parseFloat(document.getElementById('sleepHours').value);
        const stressLevel = parseFloat(document.getElementById('stressLevel').value);
        const physicalActivity = parseFloat(document.getElementById('physicalActivity').value);
        const socialSupport = parseFloat(document.getElementById('socialSupport').value);

        // Normalize & Weighted Calculation (Simulating trained ML model logic)
        const sleepScore = Math.min(10, (sleepHours / 8) * 10);
        const activityScore = Math.min(10, (physicalActivity / 5) * 10);
        const invertedStress = 10 - stressLevel; // Lower stress = higher score

        // Weighted Average Score out of 100
        const totalScore = (
            (physicalHealth * 0.25) +
            (mentalHealth * 0.25) +
            (invertedStress * 0.20) +
            (sleepScore * 0.10) +
            (socialSupport * 0.10) +
            (activityScore * 0.10)
        ) * 10;

        const finalScore = Math.min(100, Math.max(0, totalScore)).toFixed(1);

        // Display results based on target thresholds
        displayResults(finalScore);
    });

    function displayResults(score) {
        scoreValue.textContent = score;

        categoryBadge.classList.remove('low', 'moderate', 'high');

        if (score >= 75) {
            categoryBadge.textContent = 'High Well-Being';
            categoryBadge.classList.add('high');
            resultMessage.textContent = 'Great job! Your habits strongly support high mental and physical well-being.';
        } else if (score >= 50) {
            categoryBadge.textContent = 'Moderate Well-Being';
            categoryBadge.classList.add('moderate');
            resultMessage.textContent = 'Your overall well-being is balanced, but improving sleep or stress management could help.';
        } else {
            categoryBadge.textContent = 'Low Well-Being';
            categoryBadge.classList.add('low');
            resultMessage.textContent = 'Your current score indicates high stress or lower health indicators. Consider prioritizing restful sleep and support.';
        }

        form.classList.add('hidden');
        resultsCard.classList.remove('hidden');
    }

    resetBtn.addEventListener('click', () => {
        form.reset();
        resultsCard.classList.add('hidden');
        form.classList.remove('hidden');
    });
});