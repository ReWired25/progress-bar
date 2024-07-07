// Progress API
const setProgress = (value) => {
  porgress.style.setProperty('--progress', value);
}

// Progress animation API
const closeAnimation = () => {
  const { transform } = window.getComputedStyle(porgress);

  porgress.style.transform = transform;
  porgress.classList.remove('progress__diagram--animation')
  porgress.classList.add('progress__diagram--animation-closing')

  porgress.onanimationend = () => {
    porgress.classList.remove('progress__diagram--animation-closing');
    porgress.style.transform = null;
  }
}

const handleProgressAnimation = (isAnimate) => {
  isAnimate ? porgress.classList.add('progress__diagram--animation') : closeAnimation();
}

// Progress hide API
const hideProgress = (isHide) => {
  isHide
    ? (porgress.classList.add('progress__diagram--hidden'), porgressHidden.classList.add('progress__hidden--active'))
    : (porgress.classList.remove('progress__diagram--hidden'), porgressHidden.classList.remove('progress__hidden--active'));
}
