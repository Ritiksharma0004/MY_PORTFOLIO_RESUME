// document.addEventListener('DOMContentLoaded', function() {
//   function toggleNav() {
//     const navList = document.querySelector('.nav-list');
//     const closeIcon = document.querySelector('.icons');
//     navList.classList.toggle('show');
//     closeIcon.style.display = navList.classList.contains('show') ? 'block' : 'none';
//   }

//   document.querySelector('.toggle').addEventListener('click', toggleNav);
  
//   document.querySelector('.icons .fa-close').addEventListener('click', function() {
//     const navList = document.querySelector('.nav-list');
//     navList.classList.remove('show');
//     document.querySelector('.icons').style.display = 'none';
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  // Function to toggle the navigation menu
  function toggleNav() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show'); // Toggle the navigation list visibility
    document.querySelector('.icons').style.display = navList.classList.contains('show') ? 'block' : 'none'; // Toggle the close icon visibility
  }

  // Event listener for the toggle button
  document.querySelector('.toggle').addEventListener('click', toggleNav);

  // Event listener for the close icon
  document.querySelector('.icons .fa-times').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.remove('show'); // Remove the show class to hide the navigation list
    document.querySelector('.icons').style.display = 'none'; // Hide the close icon
  });
});


toggleNav();

// JavaScript for automatic scrolling
function autoScroll() {
  const container = document.querySelector('.scrolling-container');
  let scrollAmount = 0;
  const scrollStep = 100; // Adjust this value to control scrolling speed
  const scrollInterval = 30; // Adjust this value to control scrolling interval

  function scroll() {
      scrollAmount += scrollStep;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 5; // Reset scroll amount to loop
      }

      requestAnimationFrame(scroll);
  }

  requestAnimationFrame(scroll);
}

// Initialize auto scroll
autoScroll();
