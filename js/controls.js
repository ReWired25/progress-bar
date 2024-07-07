// Controls
form.onsubmit = (e) => e.preventDefault();

// Switcher values
const switcherPosition = {
  on: '40',
  off: '19'
}

// Handle progress
progressInput.oninput = (e) => {
  currentValue = e.target.value;
  
  if (currentValue >= 0 && currentValue <= 100) {
    progressMessage.classList.contains('value__message--active') && progressMessage.classList.remove('value__message--active');
    setProgress(currentValue);
  } else {
    e.target.value = '';
    setProgress(0);
    progressMessage.classList.add('value__message--active');
  }
}

// Handle animation
animation.onclick = (e) => {
  e.target.checked
    ? (animationIndicator.setAttribute('cx', switcherPosition.on), handleProgressAnimation(true))
    : (animationIndicator.setAttribute('cx', switcherPosition.off), handleProgressAnimation(false));
}

// Handle hide
hide.onclick = (e) => {
  e.target.checked
    ? (hideIndicator.setAttribute('cx', switcherPosition.on), hideProgress(true))
    : (hideIndicator.setAttribute('cx', switcherPosition.off), hideProgress(false));
}
