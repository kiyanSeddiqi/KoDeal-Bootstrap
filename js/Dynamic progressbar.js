let progressCircular = document.querySelectorAll(".progress__circular");
let valueEl = document.querySelectorAll(".progress__value");

progressCircular.forEach((element, i) => {
  let valueNum = Number(valueEl[i].innerHTML);

  let progressValue = 0;
  let progressEndValue = valueNum;
  let speed = 200;

  let progressFunc = setInterval(() => {
    progressValue++;
    valueEl[i].textContent = `${progressValue}%`;
    element.style.background = `conic-gradient(var(--bs-secondary) ${progressValue * 3.6}deg, var(--bs-border-color) ${
      progressValue * 3.6
    }deg)`;
    if (progressValue == progressEndValue) clearInterval(progressFunc);
  }, speed);
});
