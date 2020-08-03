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
