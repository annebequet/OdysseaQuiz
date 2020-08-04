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

export const transformQuestionsInSurveyObject = (quiz, category) => {
  const newQuestions = quiz.map((question) => ({
    questions: [
      question,
    ],
  }));

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
            html: "Vous êtes sur le point de commencer notre super quiz. <br/>Vous avez 10 secondes par page et 25 secondes en total pour ce quiz de 10 questions.<br/>Cliquez sur le bouton <b>'Commencer'</b> quand vous êtes prêts. Enjoy !",
          },
        ],
      }, ...newQuestions,
    ],
    completedHtml: '<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>',
  };
};
