// JavaScript to handle menu toggle
document.getElementById('menuToggle').addEventListener('click', function() {
  var leftMenu = document.getElementById('leftMenu');
  
  // Toggle the left menu visibility
  if (leftMenu.style.transform === 'translateX(-100%)') {
      leftMenu.style.transform = 'translateX(0)';
  } else {
      leftMenu.style.transform = 'translateX(-100%)'; // Hide menu
  }
});

// JavaScript function to shrink the page based on screen width
function adjustPageSize() {
  var width = window.innerWidth;

  // Get the main container to apply the scale
  var container = document.body;

  if (width >= 992 && width <= 1600) {
      container.style.transform = 'scale(0.9)';  // Shrink by 90%
  } else if (width >= 700 && width <= 767) {
      container.style.transform = 'scale(0.8)';  // Shrink by 80%
  } else if (width >= 600 && width <= 699) {
      container.style.transform = 'scale(0.75)'; // Shrink by 75%
  } else if (width <= 600) {
      container.style.transform = 'scale(0.5)';  // Shrink by 50%
  } else {
      container.style.transform = 'scale(1)';    // No scaling, default size
  }
}

// Listen for window resize events to adjust page size dynamically
window.addEventListener('resize', adjustPageSize);

// Call adjustPageSize initially to apply the correct scaling when the page is loaded
adjustPageSize();
