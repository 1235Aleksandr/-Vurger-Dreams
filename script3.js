document.addEventListener('DOMContentLoaded', function(){
	const btnOpenModal = document.querySelector('#btnOpenModal');
	const modalBlock = document.querySelector('#modalBlock');
	const closeModal = document.querySelector('#closeModal');
	const questionTitle = document.querySelector('#question');
	const formAnswers = document.querySelector('#formAnswers');
	const prevButton = document.querySelector('#prev');
	const nextButton = document.querySelector('#next');
	const sendButton = document.querySelector('#send');

	const questions = [
    {
        question: "Какого цвета бургер?",
        answers: [
            {
                title: 'Стандарт',
                url: './image/burger.png'
            },
            {
                title: 'Черный',
                url: './image/burgerBlack.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Из какого мяса котлета?",
        answers: [
            {
                title: 'Курица',
                url: './image/chickenMeat.png'
            },
            {
                title: 'Говядина',
                url: './image/beefMeat.png'
            },
            {
                title: 'Свинина',
                url: './image/porkMeat.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Дополнительные ингредиенты?",
        answers: [
            {
                title: 'Помидор',
                url: './image/tomato.png'
            },
            {
                title: 'Огурец',
                url: './image/cucumber.png'
            },
            {
                title: 'Салат',
                url: './image/salad.png'
            },
            {
                title: 'Лук',
                url: './image/onion.png'
            }
        ],
        type: 'checkbox'
    },
    {
        question: "Добавить соус?",
        answers: [
            {
                title: 'Чесночный',
                url: './image/sauce1.png'
            },
            {
                title: 'Томатный',
                url: './image/sauce2.png'
            },
            {
                title: 'Горчичный',
                url: './image/sauce3.png'
            }
        ],
        type: 'radio'
    }
];

	btnOpenModal.addEventListener('click', () => {
		modalBlock.classList.add('d-block');
		playTest();
	})

	closeModal.addEventListener('click', () => {
		modalBlock.classList.remove('d-block');
	})

	const playTest = () => {

		const finalAnswers = [];

		let numbersQuestion = 0;

		const renderAnswers = (index) => {
			questions[index].answers.forEach((answer) => {
				const answerItem = document.createElement('div');

				answerItem.classList.add('answers-item', 'd-flex', 'justify-content-center');

				answerItem.innerHTML = `
				<input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none" value="${answer.title}">
				<label for="${answer.title}" class="d-flex flex-column justify-content-between">
					<img class="answerImg" src="${answer.url}" alt="burger">
					<span>${answer.title}</span>
				</label>
				`;
				formAnswers.appendChild(answerItem);
			})
		}


		const renderQuestions = (indexQuestion) => {
			formAnswers.innerHTML = '';

			switch (true) {

				case(numbersQuestion === 0):
					prevButton.classList.add('d-none');
					nextButton.classList.remove('d-none');
					questionTitle.textContent = `${questions[indexQuestion].question}`;
					renderAnswers(indexQuestion);
					questionTitle.classList.remove('d-none');
				break;

				case(numbersQuestion >= 0 && numbersQuestion <= questions.length - 1):
					questionTitle.textContent = `${questions[indexQuestion].question}`;
					renderAnswers(indexQuestion);
					nextButton.classList.remove('d-none');
					prevButton.classList.remove('d-none');
					questionTitle.classList.remove('d-none');
					break;

				case(numbersQuestion === questions.length):
					nextButton.classList.add('d-none');
					prevButton.classList.add('d-none');
					sendButton.classList.remove('d-none');
					questionTitle.classList.add('d-none');

					formAnswers.innerHTML = `
					<div class="form-group">
						<label for="numberPhone">Введите номер телефона</label>
						<input type="phone" class="form-control" id="numberPhone">
					</div>`;
					break;

				case(numbersQuestion === questions.length + 1):
					formAnswers.textContent = "Спасибо за пройденный тест!";
					sendButton.classList.add('d-none');
					setTimeout(() => {
						modalBlock.classList.remove('d-block');
					}, 2000);
					break;

				default:
					console.log('Что-то пошло не так');
			}

		renderQuestions(numbersQuestion);

		const checkAnswer = () => {
			const obj = {};
			const inputs = [...formAnswers.elements].filter((input) => input.checked || input.id === 'numberPhone')

			inputs.forEach((input, index) => {
				if (numbersQuestion >= 0 && numbersQuestion <= questions.length - 1) {
					obj[`${index}_${questions[numbersQuestion].question}`] = input.value;
				}
				if (numbersQuestion === questions.length) {
					obj['Номер телефона'] = input.value;
				}
			})

			finalAnswers.push(obj);
		}

		nextButton.onclick = () => {
			checkAnswer();
			numbersQuestion++;
			renderQuestions(numbersQuestion);
		}

		prevButton.onclick = () => {
			numbersQuestion--;
			renderQuestions(numbersQuestion);
		}

		sendButton.onclick = () => {
			checkAnswer();
			console.log(finalAnswers);
			numbersQuestion++;
			renderQuestions(numbersQuestion);
		}

	}
})