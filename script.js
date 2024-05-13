// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to create a single progress bar
    function createProgressBar(value, max) {
      const progressBar = document.createElement('div');
      progressBar.className = 'progressBar';
      const progress = document.createElement('div');
      progress.style.width = `${(value / max) * 100}%`;
      progressBar.appendChild(progress);
      return progressBar;
    }
  
    // Prompt the user for the number of progress bars
    const numBars = parseInt(prompt("How many progress bars would you like to create?"));
  
    // Create and append the progress bars
    const container = document.getElementById('progressContainer');
    for (let i = 0; i < numBars; i++) {
      const max = 100; // Maximum value for each progress bar
      const value = Math.floor(Math.random() * max); // Random value for demonstration
      container.appendChild(createProgressBar(value, max));
    }
  });