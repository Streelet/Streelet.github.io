var requestId;
var startTime;
let showTimeoutId;
let hideTimeoutId;
let isHKeyPressed = false;
let active=false;
let hProgressBar = document.getElementById('h-indicator');
let progressIntervalId;
let progress = 0;


document.addEventListener('keydown', function(event) {
  if (event.key === 'h' && !isHKeyPressed && active==false) {
    isHKeyPressed = true;
    showTimeoutId = setTimeout(showBox, 1000);
    
    
  }
  else if (event.key === 'h' && !isHKeyPressed && active==true){
    hideTimeoutId=setTimeout(hideBox,1000)
    
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'h' && isHKeyPressed) {
    clearTimeout(showTimeoutId);
    isHKeyPressed = false;
    showTimeoutId = setTimeout(hideBox, 10000);
    
  }
});

function showBox() {
  const hiddenBox = document.getElementById('hiddenBox');
 hiddenBox.style.bottom = '0';
  active=true;
  resetProgress();
}

function hideBox() {
  const hiddenBox = document.getElementById('hiddenBox');
  hiddenBox.style.bottom = '-100%';
  active=false;
  clearInterval(hideTimeoutId);
}

//PROGRESS

document.addEventListener('keydown', function(event) {
  if (event.key === 'h' && !progressIntervalId) {
    progressIntervalId = setInterval(updateProgress, 100);
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'h' && progressIntervalId) {
    clearInterval(progressIntervalId);
    progressIntervalId = null;
    resetProgress();
  }
});

function updateProgress() {
  progress += 10;
  if (progress > 100) {
    progress = 100;
    showBox();
  }
  hProgressBar.style.borderColor = `rgba(0, 128, 0, ${progress / 100})`;
}

function resetProgress() {
  progress = 0;
  hProgressBar.style.borderColor = '#ccc';
}

//Appareance

var requestId;
    var startTime;

    function fillBorder(timestamp) {
      var filling = document.getElementById('filling');
      var duration = 3000; // Duración total del relleno en milisegundos
      var maxWidth = 100; // Ancho máximo del relleno en porcentaje

      if (!startTime) {
        startTime = timestamp;
      }

      var elapsedTime = timestamp - startTime;
      var progress = elapsedTime / duration;
      var currentWidth = Math.min(progress * maxWidth, maxWidth);

      filling.style.width = currentWidth + '%';

      if (progress < 1) {
        requestId = requestAnimationFrame(fillBorder);
      }
    }

    function resetBorder() {
      cancelAnimationFrame(requestId);
      var filling = document.getElementById('filling');
      filling.style.width = '0';
      startTime = null;
    }

    document.addEventListener('keydown', function(event) {
      if (event.key === 'h') {
        requestId = requestAnimationFrame(fillBorder);
      }
    });

    document.addEventListener('keyup', function(event) {
      if (event.key === 'h') {
        resetBorder();
      }
    });




