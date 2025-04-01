// Данные для графика (можно заменить на свои)
const viewsData = {
  labels: ['0ч', '2ч', '4ч', '6ч', '8ч', '10ч', '12ч'],
  datasets: [{
    label: 'Просмотры',
    data: [50, 200, 350, 600, 800, 1000, 1200],
    borderColor: '#0095f6',
    backgroundColor: 'rgba(0, 149, 246, 0.1)',
    fill: true,
    tension: 0.4
  }]
};

// Создаем график
const ctx = document.getElementById('viewsChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: viewsData,
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Переключение между историями
document.querySelectorAll('.story-selector img').forEach(img => {
  img.addEventListener('click', function() {
    document.querySelector('.story-selector img.active').classList.remove('active');
    this.classList.add('active');
    // Здесь можно загружать новые данные для выбранной истории
  });
});
