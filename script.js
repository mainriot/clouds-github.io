// DROPDOWN https://www.w3schools.com/howto/howto_js_dropdown.asp

function myFunction(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
  } else {
      dropdownContent.style.display = "block";
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtnb')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentb");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
  }


// VID SCROLL PAUSE

// Get the video element
var video = document.getElementById("myVideo");

// Define the scroll threshold in pixels
var scrollThreshold = 2000; // Adjust this value as needed

// Function to check scroll position and pause video if threshold is reached
function checkScrollPosition() {
    // Get the current scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Check if the scroll position is beyond the threshold
    if (scrollPosition >= scrollThreshold) {
        // Pause the video
        video.pause();
    } else {
        // Play the video if it's not paused
        if (video.paused) {
            video.play();
        }
    }
}

// Add an event listener for the scroll event
window.addEventListener("scroll", checkScrollPosition);

// ////// //

// Function to handle scroll event
function handleScroll() {
    var images = document.querySelectorAll('.backgroundphoto');
    images.forEach(function(image) {
        var imageTop = image.getBoundingClientRect().top;
        var imageBottom = image.getBoundingClientRect().bottom;

        // Check if the image is partially in the viewport
        if (imageTop < window.innerHeight && imageBottom > 0) {
            image.classList.add('fade-in');
            image.classList.remove('fade-out');
        } 
        // Check if the image is fully out of the viewport
        else {
            image.classList.remove('fade-in');
            image.classList.add('fade-out');
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Trigger scroll event on page load to check if any images are already in the viewport
window.dispatchEvent(new Event('scroll'));
