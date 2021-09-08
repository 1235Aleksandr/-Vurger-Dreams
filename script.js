document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const btnOpenModal = document.querySelector("#btnOpenModal");
  const modalBlock = document.querySelector("#modalBlock");
  const closeModal = document.querySelector("#closeModal");
  const questionTitle = document.querySelector("#question");
  const formAnswers = document.querySelector("#formAnswers");
  const burgerName = "Стандарт";
  const burgerImageUrl = "../image/burger.png";
  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
    playTest();
  });
  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
  });
  const playTest = () => {
    const renderQuestions = () => {
      questionTitle.textContent = "Какого цвета бургер Вы хотите?";
      formAnswers.innerHTML = ` <div class="answers-item d-flex flex-column"> <input type="radio" id="answerItem1" name="answer" class="d-none"> <label for="answerItem1" class="d-flex flex-column justify-content-between"> <img class="answerImg" src="${burgerImageUrl}" alt="burger"> <span>${burgerName}</span> </label> </div> `;
    };
    return renderQuestions();
  };
})