document.addEventListener("DOMContentLoaded", function () {
  const btnOpenModal = document.querySelector("#btnOpenModal");
  const modalBlock = document.querySelector("#modalBlock");
  const closeModal = document.querySelector("#closeModal");
  const questionTitle = document.querySelector("#question");
  const formAnswers = document.querySelector("#formAnswers");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  const questions = [
    {
      question: "Какого цвета вургер?",
      answers: [
        {
          title: "Стандарт",
          url: "./image/burger.png",
        },
        {
          title: "Черный",
          url: "./image/burgerBlack.png",
        },
      ],
      type: "radio",
    },
    {
      question: "Из какого мяса?",
      answers: [
        {
          title: "Курица",
          url: "./image/chickenMeat.png",
        },
        {
          title: "Говядина",
          url: "./image/beefMeat.png",
        },
        {
          title: "Свинина",
          url: "./image/porkMeat.png",
        },
      ],
      type: "radio",
    },
    {
      question: "Допы?",
      answers: [
        {
          title: "Помидор",
          url: "./image/tomato.png",
        },
        {
          title: "Огурец",
          url: "./image/cucumber.png",
        },
        {
          title: "Салат",
          url: "./image/salad.png",
        },
        {
          title: "Лук",
          url: "./image/onion.png",
        },
      ],
      type: "checkbox",
    },
    {
      question: "Соус ННнааадо?",
      answers: [
        {
          title: "Чесночный",
          url: "./image/sauce1.png",
        },
        {
          title: "Томатный",
          url: "./image/sauce2.png",
        },
        {
          title: "Горчичный",
          url: "./image/sauce3.png",
        },
      ],
      type: "radio",
    },
  ];
  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
    playTest();
  });

  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
  });

  const playTest = () => {
    let numbersQuestion = 0;

    const renderAnswers = (index) => {
      questions[index].answers.forEach((ans) => {
        const answerItem = document.createElement("div");

        answerItem.classList.add("answers-item", "d-flex", "flex-column");

        answerItem.innerHTML = `
				<input type="${questions[index].type}" id="${ans.title}" name="answer" class="d-none">
				<label for="${ans.title}" class="d-flex flex-column justify-content-between">
					<img class="answerImg" src="${ans.url}" alt="burger">
					<span>${ans.title}</span>
				</label>
				`;
        formAnswers.appendChild(answerItem);
      });
    };

    const renderQuestions = (indexQuestion) => {
      formAnswers.innerHTML = "";

      if (numbersQuestion == 0) {
        prevButton.classList.add("d-none");
      } else {
        prevButton.classList.remove("d-none");
      }

      if (numbersQuestion == questions.length - 1) {
        nextButton.classList.add("d-none");
      } else {
        nextButton.classList.remove("d-none");
      }

      questionTitle.textContent = `${questions[indexQuestion].question}`;

      renderAnswers(indexQuestion);
    };
    renderQuestions(numbersQuestion);

    nextButton.onclick = () => {
      numbersQuestion++;
      renderQuestions(numbersQuestion);
    };

    prevButton.onclick = () => {
      numbersQuestion--;
      renderQuestions(numbersQuestion);
    };
  };
});