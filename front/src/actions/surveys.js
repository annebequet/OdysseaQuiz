export const SEND_RESULTS = 'SEND_RESULTS';
export const GET_SURVEYS = 'GET_SURVEYS';
export const SAVE_SURVEYS = 'SAVE_SURVEYS';
export const END_QUIZ = 'END_QUIZ';

export const getSurveys = (category) => ({
  type: GET_SURVEYS,
  category,
});

export const sendResults = (answers, numberOfCorrectAnswers, isExempleQuiz, isChildQuiz) => ({
  type: SEND_RESULTS,
  answers,
  numberOfCorrectAnswers,
  isExempleQuiz,
  isChildQuiz
});

export const saveSurveys = (surveys) => ({
  type: SAVE_SURVEYS,
  surveys,
});

export const endQuiz = () => ({
  type: END_QUIZ,
});
