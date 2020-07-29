export const GET_SURVEYS = 'GET_SURVEYS';
export const SAVE_SURVEYS = 'SAVE_SURVEYS';

export const getSurveys = () => ({
  type: GET_SURVEYS,
});

export const saveSurveys = (surveys) => ({
  type: SAVE_SURVEYS,
  surveys,
});
