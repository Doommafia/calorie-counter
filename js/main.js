
document.addEventListener('DOMContentLoaded', function () {
    fetch('data/calories_2024_09.json')
        .then(response => response.json())
        .then(data => {
            const labels = Object.keys(data);
            const calories = labels.map(day => data[day].total_calories);

            const ctx = document.getElementById('calorieChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Daily Calorie Intake',
                        data: calories,
                        borderColor: '#007bff',
                        backgroundColor: 'rgba(0,123,255,0.1)',
                        fill: true,
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
});
