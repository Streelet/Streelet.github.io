document.addEventListener("DOMContentLoaded", function() {
  var playButton = document.getElementById("play-button");
  var isPlaying = false;
  var songs = document.querySelectorAll(".songs li");
  var currentSongIndex = 0;
  var progressBar = document.getElementById("progress");
  var currentTimeLabel = document.getElementById("current-time");
  var audio = new Audio();

  function playSong() {
    audio.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
  }

  function pauseSong() {
    audio.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
  }

  function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    playSong();
  }

  function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    playSong();
  }

  function loadSong() {
    var song = songs[currentSongIndex];
    var songTitle = song.querySelector("h6").textContent;
    var songInfo = song.querySelector("p").textContent;
    var actualSongTitle = document.querySelector("#actual-song h6");
    var actualSongInfo = document.querySelector("#actual-song p");

    actualSongTitle.textContent = songTitle;
    actualSongInfo.textContent = songInfo;

    song.querySelector("a").addEventListener("click", function(event) {
      event.preventDefault();
    });

    audio.src = song.querySelector("a").href;
  }

  function handleSongEnd() {
    playNextSong();
  }

  function updateProgressBar() {
    var progress = (audio.currentTime / audio.duration) * 100;
    if (progressBar) {
      progressBar.style.width = progress + "%";
    }
    var currentTime = formatTime(audio.currentTime);
    if (currentTimeLabel) {
      currentTimeLabel.textContent = currentTime;
    }
  }
  

  function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

  playButton.addEventListener("click", function() {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  document.getElementById("next-button").addEventListener("click", function() {
    playNextSong();
  });

  document.getElementById("previous-button").addEventListener("click", function() {
    playPreviousSong();
  });

  audio.addEventListener("ended", handleSongEnd);
  audio.addEventListener("timeupdate", updateProgressBar);

  loadSong();
});

