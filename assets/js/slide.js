function showSlideshow(event) {
    event.preventDefault();
    document.getElementById("slideshowOverlay").style.display = "block";
    document.querySelector(".link-custom").classList.add("active");
    document.getElementById("slideshowImage").src = document.getElementById("slideshow").querySelector("img").src;
  }
  
  // Rest of the JavaScript code remains the same
  
  
  function closeSlideshow() {
    document.getElementById("slideshowOverlay").style.display = "none";
    document.querySelector(".link-custom").classList.remove("active");
  }
  
  function prevImage() {
    var currentImage = document.getElementById("slideshowImage").src;
    var images = Array.from(document.getElementById("slideshow").querySelectorAll("img"));
    var currentIndex = images.findIndex(img => img.src === currentImage);
  
    if (currentIndex > 0) {
      document.getElementById("slideshowImage").src = images[currentIndex - 1].src;
    }
  }
  
  function nextImage() {
    var currentImage = document.getElementById("slideshowImage").src;
    var images = Array.from(document.getElementById("slideshow").querySelectorAll("img"));
    var currentIndex = images.findIndex(img => img.src === currentImage);
  
    if (currentIndex < images.length - 1) {
      document.getElementById("slideshowImage").src = images[currentIndex + 1].src;
    }
  }
  
  