export const quizAdultExemple = [
  {
    type: 'radiogroup',
    name: 'adult-races',
    id: 0,
    title: 'Comment s\'appelle la course à la voile, autour du monde, en solitaire qui part de France tous les 4 ans ? ',
    choices: [
      'Le tour de France', 'Le Vendée Globe', 'La fête de la sardine', 'Le tour du monde en solitaire',
    ],
    correctAnswer: 'Le Vendée Globe',
  },
  {
    type: 'radiogroup',
    name: 'adult-nice-creature',
    id: 1,
    title: 'Quelle créature du folklore anglais a pour habitude d\'attraper les enfants grâce à ses longs bras et de les emmener au fond des lacs et mares où il réside.',
    choicesOrder: 'random',
    choices: [
      'Le grindylow', 'La selkie', 'Le monstre du Loch Ness', 'Le knocker',
    ],
    correctAnswer: 'Le grindylow',
  },
  {
    type: 'radiogroup',
    name: 'adult-trash',
    id: 2,
    title: 'On estime que combien de kilos de déchets sont déversés dans les océans chaque seconde ?',
    choicesOrder: 'random',
    choices: [
      '464 000 kilos', '512 000 kilos', '592 000 kilos', '634 000 kilos',
    ],
    correctAnswer: '634 000 kilos',
  },
  {
    type: 'radiogroup',
    name: 'adult-turtle',
    id: 3,
    title: 'Quelle est la plus grande des tortues marines',
    choices: [
      'La tortue verte', 'La tortue de Kemp', 'La tortue Luth', 'La tortue à dos plat',
    ],
    correctAnswer: 'La tortue Luth',
  },
  {
    type: 'radiogroup',
    name: 'adult-oyster',
    id: 4,
    title: 'Dans la perliculture -la culture des huîtres perlières-, combien de greffons donnent une perle utilisable ?',
    choicesOrder: 'random',
    choices: [
      '20%', '30%', '40%', '50%',
    ],
    correctAnswer: '30%',
  },
  {
    type: 'radiogroup',
    name: 'adult-haddock',
    id: 5,
    title: 'Quel poisson est séché et salé pour en faire de la morue ?',
    choicesOrder: 'random',
    choices: [
      'Le merlu', 'Le lieu noir', 'La dorade', 'Le cabillaud',
    ],
    correctAnswer: 'Le cabillaud',
  },
  {
    type: 'radiogroup',
    name: 'adult-overfishing',
    id: 6,
    title: 'Quelle n\'est pas une cause de chute de la biodiversité marine ?',
    choices: [
      'La prise de pouvoir des tortues marines qui génocident tous les poissons sans carapace', 'Les impacts du changement climatique -réchauffement, acidification etc.-', 'La surpêche', 'La pollution marine',
    ],
    correctAnswer: 'La prise de pouvoir des tortues marines qui génocident tous les poissons sans carapace',
  },
  {
    type: 'radiogroup',
    name: 'adult-electric',
    id: 7,
    title: 'Lequel de ces poissons a la capacité de produire de l\'électricité ?',
    choicesOrder: 'random',
    choices: [
      'Le poisson-clown', 'La torpille', 'La lamproie', 'Le flétan',
    ],
    correctAnswer: 'La torpille',
  },
  {
    type: 'radiogroup',
    name: 'adult-insect',
    id: 8,
    title: 'L\'un d\'eau est un insecte, lequel ?',
    choicesOrder: 'random',
    choices: [
      'Le poisson lune', 'Le poisson zèbre', 'Le poisson d\'argent', 'Le poisson pierre',
    ],
    correctAnswer: 'Le poisson d\'argent',
  },
  {
    type: 'radiogroup',
    name: 'adult-plancton',
    id: 9,
    title: 'Lequel n\'existe pas ?',
    choicesOrder: 'random',
    choices: [
      'Le bactérioplancton', 'Le picoplancton', 'L\'holoplancton', 'Le lépidoplancton',
    ],
    correctAnswer: 'Le lépidoplancton',
  },
];

export const quizChildrenExemple = [
  {
    type: 'imagepicker',
    id: 1,
    name: 'choosepicture',
    title: 'What animal would you like to see first ?',
    choices: [
      {
        value: 'lion',
        imageLink: 'https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg',
      }, {
        value: 'giraffe',
        imageLink: 'https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg',
      }, {
        value: 'panda',
        imageLink: 'https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg',
      }, {
        value: 'camel',
        imageLink: 'https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg',
      },
    ],
    correctAnswer: 'lion',
  },
];

{ /* Exemple of how to insert images in the quiz, thanks to markdown:
  {
    type: 'radiogroup',
    name: 'adult-races',
    id: 0,
    title: 'Comment s\'appelle la course à la voile, autour du monde, en solitaire qui part de France tous les 4 ans ? ',
    choices: [
      'Vroum: ![A parrot](https://image.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-1029398878.jpg =140x140)', 'Parrot: ![A parrot](https://image.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-1029398878.jpg =140x140)', 'Bla: ![A parrot](https://image.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-1029398878.jpg =140x140)', 'Le Vendée Globe: ![A parrot](https://image.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-1029398878.jpg =140x140)',
    ],
    correctAnswer: 'Vroum: ![A parrot](https://image.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-1029398878.jpg =140x140)',
  },
 */ }
