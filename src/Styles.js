let interval = 1;

const animateOnLoad = () => {
  let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
  let newPos = 3 * scrollTop + "px";
  // let newPos = 100 * interval;
  document.documentElement.style.setProperty('--scrollPos', newPos);
  interval += 1;
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(animateOnLoad, 1);
});
