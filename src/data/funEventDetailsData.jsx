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
  ,
  '24': {
    id: '24',
    name: 'Family Feud',
    description: 'Family Feud – The Ultimate Battle of Wits!',
    longDescription: `Family Feud – The Ultimate Battle of Wits!\nGet ready to think fast, laugh loud, and guess smart!`,
    time: '15th November',
    location: 'DAU',
    participants: 'Team',
    prize: 'TBD',
    rules: [ 'Details coming soon' ],
    organizers: ['Cultural Team'],
    requirements: [ 'Team registration via website' ],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'gaming',
    icon: <Trophy className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [ { name: 'TBD', phone: '' } ],
    rulebookUrl: '',
    googleFormUrl: '',
    schedule: [ { time: 'TBA', activity: 'Event rounds and timings' } ]
  }
};


