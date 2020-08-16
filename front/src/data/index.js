export default [
  {
    type: 'radiogroup',
    name: 'ocean',
    title: 'Quel est l\'océan le plus vaste ?',
    choices: [
      'L\'océan Atlantique', 'L\'océan Indien', 'L\'océan Pacifique',
    ],
    correctAnswer: 'L\'océan Pacifique',
  },
  {
    type: 'radiogroup',
    name: 'waterpercent',
    title: 'Quel pourcentage approximatif de la surface du globe représente l\'ensemble des océans ?',
    choicesOrder: 'random',
    choices: [
      '25%', '70%', '50%', '85%',
    ],
    correctAnswer: '70%',
  },
  {
    type: 'radiogroup',
    name: 'oceandepth',
    title: 'Dans lequel de ces océans se trouve le point le plus profond (11 020 mètres) du globe ?',
    choicesOrder: 'random',
    choices: [
      'L\'océan Arctique', 'L\'ocean Indien', 'L\'océan Pacifique', 'L\'océan Atlantique',
    ],
    correctAnswer: 'L\'océan Pacifique',
  },
];
