import { Gamepad2, Code, Shield, Trophy, Brain, Zap } from 'lucide-react';

// Fun Events detailed data (subset from eventDetailsData)
export const funEventDetailsData = {
  '4': {
    id: '4',
    name: 'i.Clash',
    description: 'Competitive programming tournament.',
    longDescription: 'Details coming soon.',
    time: '14th November',
    location: 'Main Auditorium',
    participants: 'Individual',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Vismay', phone: '+91 6353395772' },
      { name: 'Niranjan', phone: '+91 8988390934' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1_uT1DHjM8mG3c2ltpqsERMfzSOfrJPVBPx2vC7SXASk/edit?tab=t.0',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '6': {
    id: '6',
    name: 'i.Cube',
    description: '3D problem solving and spatial reasoning challenge.',
    longDescription: 'i.Cube 2025 is an exciting and competitive cube-solving event that challenges participants to demonstrate their speed and skill in solving the Rubik\'s Cube. Each competitor will have three official attempts, with their average solve time determining their final ranking. Precision, focus, and fair play are essential as participants race against the clock under strict official guidelines.',
    time: '16th November',
    location: 'Innovation Lab',
    participants: 'Individual',
    prize: 'TBD',
    rules: [
      'Each participant will be allowed 3 official solves during the event',
      'Average of 3 solves determines final ranking',
      '15 seconds inspection time allowed before each solve'
    ],
    organizers: ['Cube Solving Team'],
    requirements: [
      'Bring your own standard 3x3x3 Rubik\'s Cube',
      'Registration through i.Fest website mandatory'
    ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'gaming',
    icon: <Brain className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Yashvi', phone: '+91 8128074477' },
      { name: 'Muktik', phone: '+91 9638783511' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1lW5LFssVVH8oCKWL8qmt0D4h6n09FK2f/view?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '8': {
    id: '8',
    name: 'i.Capture',
    description: 'Digital photography and image processing contest.',
    longDescription: 'A two-round photography competition featuring MACRO-PHOTOGRAPHY in Round 1 and LONG EXPOSURE in Round 2. Top entries showcased and rewarded.',
    time: '15th November',
    location: 'DAU Campus',
    participants: 'Individual',
    prize: 'Cash Prizes for Top 3',
    rules: [ 'Submit entries via Google Forms', 'Human subjects require consent' ],
    organizers: ['Photography Team'],
    requirements: [ 'Digital camera or capable smartphone' ],
    registrationStarted: true,
    poster: '/events/I.CAPTURE.png',
    category: 'innovation',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Hari', phone: '+91 9106854849' },
      { name: 'Bhavi', phone: '+91 8780152628' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1qFi6NqXFYVnzDMa77gbwfS1oeyGxT4YS/view?usp=sharing',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeOduwsafEMDE80Vg7m4U_MnGv5XgWPM4bdYtjxwFZk2kJ6pw/viewform',
    schedule: [ { time: 'TBA', activity: 'Details coming soon' } ]
  },
  '11': {
    id: '11',
    name: 'Chess64',
    description: 'Chess tournament with digital twist.',
    longDescription: 'Tournament includes knockout and Swiss rounds. Follow FIDE rules and be on time.',
    time: '16th November',
    location: 'Gaming Zone',
    participants: 'Individual',
    prize: 'TBD',
    rules: [ 'Walk-over after 15 minutes late', 'Standard FIDE rules apply' ],
    organizers: ['Gaming Zone Team'],
    requirements: [ 'Set up Lichess/Chess.com account', 'Chess Clock app on phone' ],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'gaming',
    icon: <Brain className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Tirth', phone: '+91 9687532568' },
      { name: 'Abhyudit', phone: '+91 9054110450' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1LaCVv6uQOlyYPE8_leKac1DBV8uFQ0Fv/view?usp=sharing',
    schedule: [ { time: 'TBA', activity: 'Details coming soon' } ]
  },
  '12': {
    id: '12',
    name: 'CryptoTrade',
    description: 'Cryptocurrency trading simulation challenge.',
    longDescription: 'A 72-hour virtual crypto trading event using Roostoo Mock Trading App with real-time market data and virtual money.',
    time: '14th November',
    location: 'Online Platform (Roostoo App)',
    participants: 'Individual',
    prize: '₹3,000 Total Prize Pool',
    rules: [ '72-hour continuous trading', 'No multiple accounts or cheating' ],
    organizers: ['Finance Team'],
    requirements: [ 'Download Roostoo app and join with code IFEST' ],
    registrationStarted: true,
    poster: '/events/Cryptotrade.png',
    category: 'innovation',
    icon: <Zap className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Daksh', phone: '+91 6351871877' },
      { name: 'Satvik', phone: '+91 6261695658' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1CiWQ41STBYNQbIJspeQadTXfYq63lvq1/view?usp=sharing',
    schedule: [ { time: 'TBA', activity: 'Details coming soon' } ]
  },
  '13': {
    id: '13',
    name: 'Treasure Hunt',
    description: 'Campus-wide treasure hunt with clues and tasks.',
    longDescription: 'Teams solve riddles and complete fun tasks to find next campus locations with volunteer verification at each step.',
    time: '15th November',
    location: 'Campus Grounds',
    participants: 'Team (10-15 members)',
    prize: 'TBD',
    rules: [ 'Report to volunteers at each destination', 'Maintain campus decorum' ],
    organizers: ['Treasure Hunt Team'],
    requirements: [ 'Team coordination and logical reasoning' ],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'gaming',
    icon: <Trophy className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Sumit', phone: '+91 9664515557' },
      { name: 'Madhav', phone: '+91 9227013499' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/130-QkspKqkSETqfPmG-xLXNetmGUUJwW/edit?usp=sharing&ouid=105561346511769055672&rtpof=true&sd=true',
    schedule: [ { time: 'TBA', activity: 'Event details coming soon' } ]
  },
  '15': {
    id: '15',
    name: 'i.Ride',
    description: 'Slow cycling challenge testing balance and control.',
    longDescription: 'Ride your cycle as slowly as possible without letting your feet touch the ground. Balance and control win the day!',
    time: '14th November',
    location: 'Campus Grounds',
    participants: 'Individual',
    prize: 'TBD',
    rules: [ 'Feet touch = out', 'Leaving the track = out' ],
    organizers: ['Cycling Team'],
    requirements: [ 'Basic cycling skills; cycles provided' ],
    registrationStarted: true,
    poster: '/events/I.RIDE.png',
    category: 'gaming',
    icon: <Zap className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Soumya', phone: '+91 8758746506' },
      { name: 'Priyansh', phone: '+91 9664988761' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1HdQo7pYSlcVWoubXMwXITUTTcdqgAVybIunCTNn32Rg/edit?usp=sharing',
    schedule: [ { time: 'TBA', activity: 'Event details coming soon' } ]
  },
  '16': {
    id: '16',
    name: 'CineCraft',
    description: 'Video editing and filmmaking contest.',
    longDescription: 'Official "Pixel Paradox" Reel Competition. Create an Instagram Reel that captures the spirit and energy of iFest \u201925.',
    time: '16th November',
    location: 'Online Submission',
    participants: 'Individual/Team (up to 3 members)',
    prize: 'Cash Prizes + Certificates',
    rules: [ '15-60s vertical reel', 'Original work only' ],
    organizers: ['Media Team'],
    requirements: [ 'Theme: Pixel Paradox', 'Proper audio rights' ],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'innovation',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Aditya', phone: '+91 8849739593' },
      { name: 'Khanjan', phone: '+91 9409133900' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1j8aV5eQ9QxWrMwmo2CkB8sAc8A8Q_Si8Ni5pN6yPeE4/edit?usp=sharing',
    schedule: [ { time: 'TBA', activity: 'Details coming soon' } ]
  },
  '17': {
    id: '17',
    name: 'i.Quiz',
    description: 'Technology and general knowledge quiz.',
    longDescription: 'Quiz competition covering tech and general knowledge. Format and rounds will be announced soon.',
    time: '14th November',
    location: 'Quiz Hall',
    participants: 'Individual/Team',
    prize: 'TBD',
    rules: [ 'Details coming soon' ],
    organizers: ['Quiz Team'],
    requirements: [ 'Details coming soon' ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'quiz',
    icon: <Trophy className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Prithviraj', phone: '+91 6358849146' },
      { name: 'Nikhil', phone: '+91 9149083243' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1GjPFYKtk8W_umGBTnmD2FxgDEXNkgBquQp34oA8I6nk/edit?usp=sharing',
    schedule: [ { time: 'TBA', activity: 'Details coming soon' } ]
  },
  '22': {
    id: '22',
    name: 'Pickle ball',
    description: 'Smash, sprint and score in the ultimate pickleball face-off!',
    longDescription: 'Fast-paced pickleball matches. Teams compete to outscore opponents with agility and coordination.',
    time: '15th November',
    location: 'Basketball Court (DAU)',
    participants: 'Team (2 members)',
    prize: '5000 INR',
    rules: [ 'Details coming soon' ],
    organizers: ['Sports Team'],
    requirements: [ 'Details coming soon' ],
    registrationStarted: true,
    poster: '/events/pickleball.png',
    category: 'gaming',
    icon: <Trophy className="w-8 h-8" />,
    color: 'neon-magenta',
    coordinators: [
      { name: 'Pranshu', phone: '+91 7490816116' },
      { name: 'Vivek', phone: '+91 9601049280' }
    ],
    googleFormUrl: 'https://forms.gle/UJS3xdoUgs6vogSu8',
    schedule: [ { time: 'TBA', activity: 'Details coming soon' } ]
  },
  '23': {
    id: '23',
    name: 'WAR OF DJ',
    description: 'High-energy DJ showdown with electrifying performances.',
    longDescription: `WAR OF DJ\n\nThink you’ve got the beats to move the crowd?\nHere’s your stage to prove it!\n\nJoin WAR OF DJ at i.Fest ’25 and drop your sickest mixes to claim the spotlight!\nThe winner also gets a chance to compete in Mumbai!\n\n Date: November 16\n Venue: DA-IICT, Gandhinagar\n\n Register now — https://docs.google.com/forms/d/e/1FAIpQLSfmXcHlS-x4KiJBtXsh4uTh0C-t-Q8IGWxikjjgYVc6QS6EOw/viewform?usp=dialog`,
    time: 'November 16',
    location: 'DA-IICT, Gandhinagar',
    participants: 'Team',
    prize: 'TBD',
    rules: [ 'Details coming soon' ],
    organizers: ['Media & Cultural Team'],
    requirements: [ 'Details coming soon' ],
    registrationStarted: true,
    poster: '/events/DJ Battle.png',
    category: 'gaming',
    icon: <Trophy className="w-8 h-8" />,
    color: 'neon-magenta',
    coordinators: [
      { name: 'Dhruva', phone: '+91 9875210560' },
      { name: 'Harsh', phone: '+91 6376108451' }
    ],
    rulebookUrl: '',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfmXcHlS-x4KiJBtXsh4uTh0C-t-Q8IGWxikjjgYVc6QS6EOw/viewform?usp=dialog',
    schedule: [ { time: 'TBA', activity: 'Performance slots and judging' } ]
  }
};


