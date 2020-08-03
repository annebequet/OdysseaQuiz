export default {
  title: 'American History coucou',
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
          html: "Vous êtes sur le point de commencer notre super quiz. <br/>Vous avez 10 secondes par page et 25 secondes en total pour ce quiz de 3 questions.<br/>Cliquez sur le bouton <b>'Commencer'</b> quand vous êtes prêts. Enjoy !",
        },
      ],
    }, {
      questions: [
        {
          type: 'radiogroup',
          name: 'civilwar',
          title: 'When was the Civil War?',
          choices: [
            '1750-1800', '1800-1850', '1850-1900', '1900-1950', 'after 1950',
          ],
          correctAnswer: '1850-1900',
        },
      ],
    }, {
      questions: [
        {
          type: 'radiogroup',
          name: 'libertyordeath',
          title: "Who said 'Give me liberty or give me death?",
          choicesOrder: 'random',
          choices: [
            'John Hancock', 'James Madison', 'Patrick Henry', 'Samuel Adams',
          ],
          correctAnswer: 'Patrick Henry',
        },
      ],
    }, {
      maxTimeToFinish: 15,
      questions: [
        {
          type: 'radiogroup',
          name: 'magnacarta',
          title: 'What is the Magna Carta?',
          choicesOrder: 'random',
          choices: [
            'The foundation of the British parliamentary system', 'The Great Seal of the monarchs of England', 'The French Declaration of the Rights of Man', 'The charter signed by the Pilgrims on the Mayflower',
          ],
          correctAnswer: 'The foundation of the British parliamentary system',
        },
      ],
    },
  ],
  completedHtml: '<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>',
};
