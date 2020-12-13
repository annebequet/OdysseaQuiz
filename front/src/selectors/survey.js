/* eslint-disable max-len */
// Function that changes the css styles of the quiz to display the results
export const changeCSStyles = (survey, options) => {
  const span = document.createElement('span');
  const isCorrect = options.question.isAnswerCorrect();
  span.innerHTML = isCorrect
    ? '<p>Correct</p>'
    : '<p>Incorrect</p>';
  span.style.color = isCorrect
    ? 'rgba(1, 1, 36)'
    : 'red';
  const header = options.htmlElement.querySelector('h5');
  if (!isCorrect) {
    const correctInput = options.htmlElement.querySelector(`input[value="${options.question.correctAnswer}"]`);
    correctInput.parentElement.style.background = 'hsl(191, 68%, 31%, 0.5)';
  }
  header.appendChild(span);
};

export const handleSingularOrPlural = (numberOfCorrectAnswers, totalNumberOfQuestions) => {
  const singularTitle = `${numberOfCorrectAnswers} bonne réponse sur ${totalNumberOfQuestions}`;
  const pluralTitle = `${numberOfCorrectAnswers} bonnes réponses sur ${totalNumberOfQuestions}`;
  const title = numberOfCorrectAnswers < 2
    ? singularTitle
    : pluralTitle;
  return title;
};

const getIntroductionQuizText = (quiz) => {
  let text;
  if (quiz.length === 0) {
    text = "Nous n'avons pas encore de questions pour cette catégorie, revenez bientôt !";
  }
  else {
    text = 'Vous avez 1mn par question.';
  }
  return text;
};

export const transformQuestionsInSurveyObject = (allQuestions, category) => {
  const quiz = allQuestions;

  const newQuestions = quiz.map((question) => {
    question.choices = Object.values(question.choices);
    // The surveyJS library looses the id associated to the question in the database. That's why we save it under the "name", and have to save it as a string because that's the expected output.
    question.name = question.id.toString();
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
    maxTimeToFinishPage: 60,
    // maxTimeToFinish: 25,
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

// This function will turn the answers of the user into booleans : {questionId : true}. In order to do that, we need to compare the answer given to the correctAnswer stored in surveyData, and then determine the value of the booleann
export const turnAnswersIntoBooleans = (answers, surveyData) => {
  // Get the answers of the user
  const userAnswers = answers;
  // Get an array with all the questions and answers. We slice the first one because it is not a question, it is actually the title of the quiz.
  const surveyQuestions = surveyData.pages.slice(1);

  const booleansAnswers = Object.keys(surveyQuestions).map((questionItem) => {
    const question = surveyQuestions[questionItem].questions[0].id;
    const { correctAnswer } = surveyQuestions[questionItem].questions[0];
    const userAnswer = userAnswers[question];
    if (userAnswer && userAnswer === correctAnswer) {
      return { question, answer: true };
    }
    return { question, answer: false };
  });
  return booleansAnswers;
};
