//Function that changes the css styles of the qui to display the results
export const changeCSSStyles = (survey, options) => {
  const span = document.createElement('span');
  const isCorrect = options.question.isAnswerCorrect();
  span.innerHTML = isCorrect
    ? 'Correct'
    : 'Incorrect';
  span.style.color = isCorrect
    ? 'green'
    : 'red';
  const header = options.htmlElement.querySelector('h5');
  if (!isCorrect) {
    header.style.backgroundColor = 'salmon';
    const radio = options.htmlElement.querySelector(`input[value="${options.question.correctAnswer}"]`);
    radio.parentElement.style.color = 'green';
  }
  header.appendChild(span);
};

export const handleSingularOrPlural = (numberOfCorrectAnswers) => {
  const singularTitle = `Vous avez ${numberOfCorrectAnswers} bonne réponse sur 10`;
  const pluralTitle = `Vous avez ${numberOfCorrectAnswers} bonnes réponses sur 10`;
  const title = numberOfCorrectAnswers < 2
    ? singularTitle
    : pluralTitle;
  return title;
};

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const get10RandomQuestions = (quiz) => {
  shuffle(quiz);
  // eslint-disable-next-line no-unreachable
  return quiz.slice(0, 10);
};

const getIntroductionQuizText = (quiz) => {
  let text;
  if (quiz.length === 0) {
    text = "Nous n'avons pas encore de questions pour cette catégorie, revenez bientôt !";
  }
  else {
    text = "Vous êtes sur le point de commencer notre super quiz. <br/>Vous avez 10 secondes par page et 25 secondes en total pour ce quiz de 10 questions.<br/>Cliquez sur le bouton <b>'Commencer'</b> quand vous êtes prêts. Enjoy !";
  }
  return text;
};

export const transformQuestionsInSurveyObject = (allQuestions, category) => {
  const quiz = get10RandomQuestions(allQuestions);

  const newQuestions = quiz.map((question) => {
    question["choices"] = Object.values(question["choices"]);
    return {
      questions: [
        question,
      ],
    };
  });

  return {
    title: category,
    showProgressBar: 'bottom',
    showTimerPanel: 'top',
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: 'Commencer',
    locale: 'fr',
    pages: [
      {
        questions: [
          {
            type: 'html',
            html: getIntroductionQuizText(quiz),
          },
        ],
      }, ...newQuestions,
    ],
    completedHtml: '<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>',
  };
};
