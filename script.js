const slide = document.getElementsByClassName("slide");
const show = document.getElementsByClassName("show");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let slideNo = 0;
next.addEventListener("click", function () {
  if (slideNo < 2) {
    slide[slideNo].classList.remove("show");
    slideNo = slideNo + 1;
    slide[slideNo].classList.add("show");
  } 
  else if (slideNo === 2) {
    slide[slideNo].classList.remove("show");
    slideNo = slideNo - 2;
    slide[slideNo].classList.add("show");
  }
});
prev.addEventListener("click", function () {
    if (slideNo < 3 && slideNo > 0) {
    slide[slideNo].classList.remove("show");
    slideNo = slideNo - 1;
    slide[slideNo].classList.add("show");
    } else if (slideNo === 0) {
    slide[slideNo].classList.remove("show");
    slideNo = slideNo + 2;
    slide[slideNo].classList.add("show");
    }
});
