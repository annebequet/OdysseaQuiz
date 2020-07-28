const fakeSurvey = {
  name: "Satisfaction survey",
  id: 1,
  random: true,
  timeBeforePopUp: 2, // in seconds
  postUrl: "http://localhost:3000/surveys/1/participations",
  questions: [
    {
      text: "Are you finding the documentation site complete?",
      choices: [
        {
          text: "Yes",
          id: 1,
        },
        {
          text: "No",
          id: 2,
        },
      ],
      multiple: false,
      id: 1,
      required: true,
    },
    {
      text:
        "Do you think we should make a vanilla JS version of this component?",
      choices: [
        {
          text: "Yes",
          id: 3,
        },
        {
          text: "No",
          id: 4,
        },
      ],
      multiple: false,
      id: 2,
      required: true,
    },
    {
      text: "What functionnalities would you like to see next?",
      choices: [
        {
          text: "Overidable styles",
          id: 5,
        },
        {
          text: "Deactivate localStorage (for dev)",
          id: 6,
        },
        {
          text: "Animations",
          id: 7,
        },
      ],
      multiple: true,
      id: 3,
      required: false,
    },
  ],
  ending: {
    text:
      "Thank your for your answers! You can leave you email if you would like to maybe be contacted to answer some questions and help us. You can also write any comment you might have in the box below.",
    email: true,
    freeSpeech: true,
  },
  messages: {
    errorMessage: "You have to select an option",
    welcomeMessage:
      "Hello! Thanks for checking us out! If you could answer these 3 easy questions it would really mean the world to us :)",
    nextMessage: "Next",
    endMessage: "End",
    endingMessage: "Thank you! Your answers have been recorded.",
    closeMessage: "Close",
  },
};

export { fakeSurvey };
