let showTimeoutId;
let isHKeyPressed = false;

document.addEventListener('keydown', function(event) {
  if (event.key === 'h' && !isHKeyPressed) {
    isHKeyPressed = true;
    timeoutId = setTimeout(showBox, 1000);
    
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'h' && isHKeyPressed) {
    clearTimeout(showTimeoutId);
    isHKeyPressed = false;
    showTimeoutId = setTimeout(hideBox, 5000);
    
  }
});

function showBox() {
  const hiddenBox = document.getElementById('hiddenBox');
  hiddenBox.style.bottom = '0';
}

function hideBox() {
  const hiddenBox = document.getElementById('hiddenBox');
  hiddenBox.style.bottom = '-100%';
}
