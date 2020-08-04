export const SEND_RESULTS = 'SEND_RESULTS';
export const GET_SURVEYS = 'GET_SURVEYS';
export const SAVE_SURVEYS = 'SAVE_SURVEYS';
export const END_QUIZ = 'END_QUIZ';

export const getSurveys = () => ({
  type: GET_SURVEYS,
});

export const sendResults = (answers, numberOfCorrectAnswers) => ({
  type: SEND_RESULTS,
  answers,
  numberOfCorrectAnswers,
});

export const saveSurveys = (surveys) => ({
  type: SAVE_SURVEYS,
  surveys,
});

export const endQuiz = () => ({
  type: END_QUIZ,
});
