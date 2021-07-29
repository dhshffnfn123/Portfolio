const header = document.querySelector('#header');

function scrollFunc() {
  if (pageYOffset >= 10) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
}

window.addEventListener('scroll', scrollFunc);

