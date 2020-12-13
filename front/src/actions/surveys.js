export const SEND_RESULTS = 'SEND_RESULTS';
export const GET_SURVEYS = 'GET_SURVEYS';
export const SAVE_SURVEYS = 'SAVE_SURVEYS';
export const END_QUIZ = 'END_QUIZ';
export const SET_ERROR = 'SET_ERROR';

export const getSurveys = (category) => ({
  type: GET_SURVEYS,
  category,
});

// eslint-disable-next-line max-len
export const sendResults = (requestAnswers, displayAnswers, numberOfCorrectAnswers, isExempleQuiz, isChildExempleQuiz) => ({
  type: SEND_RESULTS,
  requestAnswers,
  displayAnswers,
  numberOfCorrectAnswers,
  isExempleQuiz,
  isChildExempleQuiz,
});

export const saveSurveys = (surveys) => ({
  type: SAVE_SURVEYS,
  surveys,
});

export const endQuiz = () => ({
  type: END_QUIZ,
});

export const setError = () => ({
  type: SET_ERROR,
});
