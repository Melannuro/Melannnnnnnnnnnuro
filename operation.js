  // Función para cerrar el mensaje después de cierto tiempo
  function closeMessageBox() {
    var messageBox = document.getElementById("messageBox");
    messageBox.style.display = "none";
  }
  
  // Establecer la duración del mensaje (en milisegundos)
  var duration = 5000; // 5 segundos
  
  setTimeout(function() {
    closeMessageBox();
  }, duration);

  document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
  
    document.getElementById('prevSlide').addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  
    document.getElementById('nextSlide').addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    });
  
    function updateCarousel() {
      const offset = -currentSlide * 100;
      document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
    }
  });
  