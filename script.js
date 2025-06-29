// Total Sales Chart
const ctx1 = document.getElementById('salesChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: Array.from({length: 30}, (_, i) => `Day ${i+1}`),
    datasets: [{
      label: 'Sales',
      data: Array.from({length: 30}, () => Math.random() * 100000 + 50000),
      borderColor: '#4B9EFF',
      borderWidth: 2,
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

// Number of Sales Bar Chart
const ctx2 = document.getElementById('barChart').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Sales',
      data: [5, 12, 8, 6, 10],
      backgroundColor: '#2ECC71'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
