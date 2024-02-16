  // Función para cerrar el mensaje después de cierto tiempo
  function closeMessageBox() {
    var messageBox = document.getElementById("messageBox");
    messageBox.style.display = "none";
  }
  
  // Establecer la duración del mensaje (en milisegundos)
  var duration = 3000; // 5 segundos
  
  setTimeout(function() {
    closeMessageBox();
  }, duration);
  document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
  
    document.getElementById('prevSlide').addEventListener('click', function() {
      stopMusic(currentSlide);
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
      playMusic(currentSlide);
    });
  
    document.getElementById('nextSlide').addEventListener('click', function() {
      stopMusic(currentSlide);
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
      playMusic(currentSlide);
    });
  
    function updateCarousel() {
      const offset = -currentSlide * 100;
      document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
    }
  
    function playMusic(slideIndex) {
      const audioElement = slides[slideIndex].querySelector('audio');
      if (audioElement) {
        audioElement.play();
        audioElement.addEventListener('ended', function() {
          stopMusic(currentSlide);
          currentSlide = (currentSlide + 1) % totalSlides;
          updateCarousel();
          playMusic(currentSlide);
        }, { once: true });
      }
    }
  
    function stopMusic(slideIndex) {
      const audioElement = slides[slideIndex].querySelector('audio');
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    }
  });
  