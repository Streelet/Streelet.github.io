document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("mi-audio");
    var playButton = document.getElementById("play-button");
    var isPlaying = false;
  
    playButton.addEventListener("click", function() {
      if (isPlaying) {
        // Pausar la música
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
      } else {
        // Reproducir la música
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
      }
      isPlaying = !isPlaying; // Alternar el estado entre reproducir y pausar
    });
  });
  