import { Bot, Zap } from 'lucide-react';

export const roboEventsData = [
  {
    id: 'roboclash',
    name: 'RoboClash',
    description: 'Combat robotics tournament with multiple weight classes. Build, battle, and dominate the arena.',
    poster: '/events/roboclash2.png',
    time: '15th November',
    prize: 'TBA',
    participants: 'Team (up to 5 members)',
    location: 'Robotics Arena',
    category: 'robotics',
    registrationForm: '',
    rules: [
      'Multiple weight classes with separate rulebooks',
      'All bots must pass safety inspection',
      'Wireless control with emergency kill switch required',
      'No hazardous, explosive, or entanglement weapons',
    ],
    requirements: [
      'On-board batteries only',
      'Adhere to voltage limits per category',
      'Comply with arena and activation safety protocols'
    ],
    icon: <Bot className="w-8 h-8" />,
    color: 'neon-magenta'
  },
  {
    id: 'robosoccer',
    name: 'ROBO SOCCER',
    description: 'Robot soccer competition where autonomous robots compete to score goals in a football-style match.',
    poster: '/events/robosoccer2.png', // Using same poster for now
    time: '15th November',
    prize: 'TBA',
    participants: 'Team (up to 4 members)',
    location: 'Robotics Arena',
    category: 'robotics',
    registrationForm: 'https://forms.gle/2LdFH9MvmQGp3vNw7',
    rules: [
      'Robot dimensions must not exceed 30cm x 30cm x 30cm',
      'Maximum weight 5kg with 5% tolerance',
      'Maximum voltage 25.2V for batteries',
      'Standard football scoring rules apply',
    ],
    requirements: [
      'Both wired and wireless robots allowed',
      '4-wheel or 2-wheel drive mechanism required',
      'Dribbler mechanisms are allowed',
      'Robot body must not be from readymade toys',
    ],
    icon: <Bot className="w-8 h-8" />,
    color: 'neon-cyan'
  },
  // {
  //   id: 'ibot',
  //   name: 'i.Bot',
  //   description: 'Design a manually controlled wired or wireless robot that has the capacity to cover the maximum distance in the shortest time.',
  //   poster: '/events/I.BOT2.png',
  //   time: '15th November',
  //   prize: 'TBA',
  //   participants: 'Team (up to 4 members)',
  //   location: 'Robotics Arena',
  //   category: 'robotics',
  //   registrationForm: '',
  //   rules: [
  //     'Maximum dimension: 30cm x 20cm x 15cm (5% tolerance)',
  //     'Maximum weight: 3kg',
  //     'Robot may be wired or wireless',
  //     '4-wheel drive or 2-wheel drive allowed',
  //     'No Lego parts or ready-made kits',
  //   ],
  //   requirements: [
  //     'Team may consist of maximum 4 participants',
  //     'All from same/different institute allowed',
  //     'AC supply will be provided by organization',
  //     'Wire length should cover whole track for wired bots',
  //   ],
  //   rulebookUrl: 'https://drive.google.com/file/d/1esioD9onRef90NYvB35guQ4ihou_P7ny/view',
  //   icon: <Bot className="w-8 h-8" />,
  //   color: 'pacman-yellow'
  // },
];
// [
//   {
//     id: 'roboclash',
//     name: 'RoboClash',
//     description: 'Combat robotics tournament with multiple weight classes. Build, battle, and dominate the arena.',
//     poster: '/events/roboclash2.png',
//     time: '15th November',
//     prize: 'TBA',
//     participants: 'Team (up to 5 members)',
//     location: 'Robotics Arena',
//     category: 'robotics',
//     registrationForm: '',
//     rules: [
//       'Multiple weight classes with separate rulebooks',
//       'All bots must pass safety inspection',
//       'Wireless control with emergency kill switch required',
//       'No hazardous, explosive, or entanglement weapons',
//     ],
//     requirements: [
//       'On-board batteries only',
//       'Adhere to voltage limits per category',
//       'Comply with arena and activation safety protocols'
//     ],
//     icon: <Bot className="w-8 h-8" />,
//     color: 'neon-magenta'
//   },
//   {
//     id: 'robosoccer',
//     name: 'ROBO SOCCER',
//     description: 'Robot soccer competition where autonomous robots compete to score goals in a football-style match.',
//     poster: '/events/robosoccer2.png', // Using same poster for now
//     time: '15th November',
//     prize: 'TBA',
//     participants: 'Team (up to 4 members)',
//     location: 'Robotics Arena',
//     category: 'robotics',
//     registrationForm: 'https://forms.gle/2LdFH9MvmQGp3vNw7',
//     rules: [
//       'Robot dimensions must not exceed 30cm x 30cm x 30cm',
//       'Maximum weight 5kg with 5% tolerance',
//       'Maximum voltage 25.2V for batteries',
//       'Standard football scoring rules apply',
//     ],
//     requirements: [
//       'Both wired and wireless robots allowed',
//       '4-wheel or 2-wheel drive mechanism required',
//       'Dribbler mechanisms are allowed',
//       'Robot body must not be from readymade toys',
//     ],
//     icon: <Bot className="w-8 h-8" />,
//     color: 'neon-cyan'
//   },
//   {
//     id: 'ibot',
//     name: 'i.Bot',
//     description: 'Design a manually controlled wired or wireless robot that has the capacity to cover the maximum distance in the shortest time.',
//     poster: '/events/placeholder.png',
//     time: '15th November',
//     prize: 'TBA',
//     participants: 'Team (up to 4 members)',
//     location: 'Robotics Arena',
//     category: 'robotics',
//     registrationForm: '',
//     rules: [
//       'Maximum dimension: 30cm x 20cm x 15cm (5% tolerance)',
//       'Maximum weight: 3kg',
//       'Robot may be wired or wireless',
//       '4-wheel drive or 2-wheel drive allowed',
//       'No Lego parts or ready-made kits',
//     ],
//     requirements: [
//       'Team may consist of maximum 4 participants',
//       'All from same/different institute allowed',
//       'AC supply will be provided by organization',
//       'Wire length should cover whole track for wired bots',
//     ],
//     rulebookUrl: 'https://drive.google.com/file/d/1esioD9onRef90NYvB35guQ4ihou_P7ny/view',
//     icon: <Bot className="w-8 h-8" />,
//     color: 'pacman-yellow'
//   },
// ];