//using selectors inside the element
// traversing the dom

let btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text") 
  });
});

