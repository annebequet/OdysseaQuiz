export const SEND_RESULTS = 'SEND_RESULTS';
export const UPDATE_RESULTS = 'UPDATE_RESULTS';
export const GET_SURVEYS = 'GET_SURVEYS';
export const SAVE_SURVEYS = 'SAVE_SURVEYS';
export const SURVEY_COMPLETED = 'SURVEY_COMPLETED';

export const getSurveys = () => ({
  type: GET_SURVEYS,
});

export const updateResults = (numberOfCorrectAnswers) => ({
  type: SEND_RESULTS,
  numberOfCorrectAnswers,
});

export const sendResults = () => ({
  type: SEND_RESULTS,
});

export const surveyCompleted = (answers) => ({
  type: SURVEY_COMPLETED,
  answers,
});

export const saveSurveys = (surveys) => ({
  type: SAVE_SURVEYS,
  surveys,
});
