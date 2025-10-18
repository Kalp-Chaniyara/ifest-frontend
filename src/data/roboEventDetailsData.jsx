import { Bot, Zap } from 'lucide-react';

export const roboEventDetailsData = [
  {
    id: 'roboclash',
    name: 'RoboClash',
    description: 'Combat robotics tournament with multiple weight classes: 3lb, 8kg, 15kg.',
    detailedDescription: 'Design and build a combat robot to battle other robots in a high-energy tournament. Test your machine\'s strength, strategy, and resilience. Ensure your creation adheres to all specified rules and safety guidelines for a fair and thrilling competition.',
    poster: '/events/roboclash.png',
    time: '15th November',
    prize: 'Category-wise',
    participants: 'Team (2-4 members)',
    location: 'Open Air Theatre(OAT), DAU',
    category: 'robotics',
    registrationForm: '',
    coordinators: [
      { name: 'Param', phone: '+91 6355161862' },
      { name: 'Aayush', phone: '+91 6351019814' }
    ],
    rules: [
      'All bots must pass safety inspection and have kill switch or U-link',
      'Wireless control only; binding and override capability required',
      'No explosives, entanglement, hazardous materials, or visual impairing weapons',
      'Robots activated only in designated areas with coordinator approval',
    ],
    requirements: [
      'On-board sealed batteries; voltage limits per category apply',
      'No IC engines; electrical systems only',
      'Battery terminals protected; secure mounting and padding',
      'Adherence to arena and safety rules',
    ],
    schedule: [
      '15th November',
      'Complete timeline will be shared later'
    ],
    judgingCriteria: [
      'Damage (0-5): minimal to massive impact on systems',
      'Aggression (0-3): frequency, severity, boldness',
      'Control (0-3): attack planning, avoidance, compensation for damage',
    ],
    categories: [
      {
        name: '3lb',
        fee: '₹1000',
        rulesSummary: 'Max 1.5 kg with 1% tolerance; 8 ft enclosed arena; 36V max.',
        registrationLink: 'https://forms.gle/HUwVMa3XGfLweiFP6',
        rulebookUrl: 'https://docs.google.com/document/d/1TtIFpJpeIwTQN460INFDOo-_R_yvfxqy6w7f0Nw65x8/edit?usp=sharing',
        rulebookShort: [
          'Weight: 1.5 kg max with 1% tolerance',
          'Arena: 8 ft enclosed space',
          'Voltage: 36V maximum',
          'Control: Wireless only with binding'
        ],
        rulebookLong: [
          'Detailed weight class specifications',
          'Arena dimensions and safety requirements',
          'Electrical system guidelines',
          'Control system requirements',
          'Safety inspection checklist'
        ]
      }
    ],
    icon: <Bot className="w-8 h-8" />,
    color: 'neon-magenta'
  },
  {
    id: 'robosoccer',
    name: 'ROBO SOCCER',
    description: 'Robot soccer competition where autonomous robots compete to score goals in a football-style match.',
    detailedDescription: 'Build autonomous robots that can play soccer! Your robots will compete to score goals in a football-style match. This event tests your robotics, AI, and engineering skills as you create robots that can navigate, track the ball, and score goals autonomously.',
    poster: '/events/robosoccer.png',
    time: '15th November',
    prize: 'TBA',
    participants: 'Team (up to 4 members)',
    location: 'Robotics Arena',
    category: 'robotics',
    registrationForm: 'https://forms.gle/2LdFH9MvmQGp3vNw7',
    coordinators: [
      { name: 'Preet', phone: '+91 9313153988' },
      { name: 'Jeet', phone: '+91 9978617561' }
    ],
    rules: [
      'Robot dimensions must not exceed 30cm x 30cm x 30cm at any point (5% tolerance)',
      'Maximum weight 5kg with 5% tolerance',
      'Maximum voltage 25.2V for batteries and any two points of circuit',
      'Both wired and wireless robots are allowed',
      '4-wheel drive or 2-wheel drive mechanism required; all tyres must contribute to motion',
      'Robot body must not be from readymade toys; robot making kits can be used',
      'Dribbler mechanisms are allowed',
      'Standard football scoring rules apply',
      'Bot must not hold ball for more than 10 seconds in stationary position',
      'Immobilization of bot for 40 seconds leads to disqualification',
    ],
    requirements: [
      'Wired control: minimum 6 meters wire length, routed through pole 45cm high',
      'Wireless control: must support dual-frequency operation to avoid interference',
      'RF modules from toy cars may be used',
      'No IC engines and LEGO kits allowed',
      'Robot should be as per given specifications',
      'Each team can have maximum 4 members',
      'Students from different institutes can form a team',
    ],
    schedule: [
      '15th November',
      'Match duration: approximately 6 minutes (varies based on number of teams)',
      'Complete timeline will be shared later'
    ],
    judgingCriteria: [
      'Standard football scoring rules apply',
      'Team scoring most goals by end of full time wins',
      'Ball must cross the goal line to be considered a goal',
      'Direct goals are valid',
      'Technical timeout: 1 minute free, extra timeout considered as goal for opponent',
    ],
    icon: <Bot className="w-8 h-8" />,
    color: 'neon-cyan'
  },
  {
    id: 'ibot',
    name: 'i.Bot',
    description: 'Design a manually controlled wired or wireless robot that covers maximum distance in shortest time on a challenging track.',
    detailedDescription: 'Design a manually controlled wired or wireless robot that has the capacity to cover the maximum distance in the shortest time. But here\'s the twist, the track isn\'t going to be straightforward. Participate in i.Bot to be a part of this venturous race! Speed. Skill. Survival — Only the Bold Conquer the Track!',
    poster: '/events/ibot.png',
    time: '15th November',
    prize: 'TBD',
    participants: 'Team (up to 4 members)',
    location: 'Robotics Arena',
    category: 'robotics',
    registrationForm: '',
    coordinators: [
      { name: 'Shyam', phone: '+91 9265876690' },
      { name: 'Ruchir', phone: '+91 6352524988' }
    ],
    rules: [
      'Maximum dimensions: 30cm x 20cm x 15cm (5% tolerance allowed)',
      'Maximum weight: 3kg',
      'Robot can be wired or wireless',
      '4-wheel or 2-wheel drive allowed; all tyres must contribute to motion',
      'No Lego parts or ready-made kits allowed',
      'Safety inspection required before competition',
      'Only AC supply will be provided by organization',
      'analyses Robot must not damage arena or leave parts behind during run'
    ],
    requirements: [
      'Team of maximum 4 participants from same/different institute',
      'Manual control system required',
      'Wired robots need slack wire long enough for full track coverage',
      'Robot must be built from scratch, not from ready-made components',
      'All safety guidelines must be followed'
    ],
    schedule: [
      '15th November',
      'Complete timeline will be shared later'
    ],
    judgingCriteria: [
      'Robot that covers the track in least time will win',
      'Track tests speed, control, and stability, not just raw acceleration',
      'Limited hand touches allowed if bot gets stuck, with penalties',
      'Bonus points opportunities will be declared at event time'
    ],
    icon: <Bot className="w-8 h-8" />,
    color: 'pacman-yellow',
    rulebookUrl: 'https://drive.google.com/file/d/1esioD9onRef90NYvB35guQ4ihou_P7ny/view'
  }
];
