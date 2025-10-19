import { Gamepad2, Code, Shield, Trophy, Brain, Zap, Users, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';


export const eventDetailsData ={
  '1': {
    id: '1',
    name: 'FizzBuzz',
    description: 'Classic programming challenge with a modern twist.',
    longDescription: 'A competitive programming event where participants solve five programming problems on HackerRank platform. This individual contest tests coding skills, algorithmic thinking, and problem-solving abilities using various programming languages. Perfect for showcasing your programming expertise in a competitive environment.',
    time: '14th November',
    location: 'HackerRank Platform',
    participants: 'Individual',
    prize: 'TBD',
    rules: [
      'Individual participation only - no teams allowed',
      'Platform: HackerRank online contest',
      'Five programming problems to solve',
      'Languages: C/C++, Java, Python, JavaScript, Rust',
      'Original code required - no plagiarism or code-sharing',
      'Contest duration and scoring announced before event',
      'Coordinators\' decision is final for any disputes'
    ],
    organizers: ['Programming Team'],
    requirements: [
      'All registered students eligible',
      'Individual registration mandatory',
      'Valid HackerRank account required',
      'Basic programming knowledge in any supported language',
      'Stable internet connection',
      'No team participation allowed'
    ],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'neon-cyan',
    coordinators: [
      { name: 'Manthan', phone: '+91 6352931262' },
      { name: 'Abhishek', phone: '+91 8238259415' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1-yKEQIXDiAtD2KyiUrbpW6MdpXl1AM2lCaWSKzBSfDA/edit?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '2': {
    id: '2',
    name: 'i.Ohunt',
    description: 'Digital treasure hunt with technology challenges.',
    longDescription: 'Details coming soon.',
    time: '15th November',
    location: 'Main Campus',
    participants: 'Individual/Team',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'innovation',
    icon: <Zap className="w-8 h-8" />,
    color: 'neon-magenta',
    coordinators: [
      { name: 'Varshil', phone: '+91 9601991253' },
      { name: 'Vidur', phone: '+91 8320106416' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1OaDVA5i10-I6BbI5uKlDlB5GPmjfJ-Tr/view?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '3': {
    id: '3',
    name: 'RepoReboot',
    description: 'Code repository challenge and optimization contest.',
    longDescription: 'Details coming soon.',
    time: '16th November',
    location: 'Computer Lab 2',
    participants: 'Individual',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Dhruvish', phone: '+91 7046525524' },
      { name: 'Tirth', phone: '+91 7984574445' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1-mfQgc34wk0tjnpSS3UwFwSwhP4RNPyE/edit?usp=sharing&ouid=105561346511769055672&rtpof=true&sd=true',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
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
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Vismay', phone: '+91 6353395772' },
      { name: 'Niranjan', phone: '+91 8988390934' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1avoTLmdZEzxnLS_6V162T9N-jTwDPNHHDcRbGJVZTsY/edit?tab=t.0',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '5': {
    id: '5',
    name: 'i.Relay',
    description: 'Team-based relay coding competition.',
    longDescription: 'Details coming soon.',
    time: '15th November',
    location: 'Conference Hall',
    participants: 'Team',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Madhav', phone: '+91 7041937131' },
      { name: 'Krish', phone: '+91 9327702659' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1avoTLmdZEzxnLS_6V162T9N-jTwDPNHHDcRbGJVZTsY/edit?tab=t.0',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '6': {
    id: '6',
    name: 'i.Cube',
    description: '3D problem solving and spatial reasoning challenge.',
    longDescription: 'Details coming soon.',
    time: '16th November',
    location: 'Innovation Lab',
    participants: 'Individual',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
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
  '7': {
    id: '7',
    name: 'i.Papyrus',
    description: 'Creative writing and documentation challenge.',
    longDescription: 'Details coming soon.',
    time: '14th November',
    location: 'Library',
    participants: 'Individual',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Avantika', phone: '+91 7668720907' },
      { name: 'Dinesh', phone: '+91 7012438105' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1NTHEGB4Avr-sUZpKJ9tM0s6hZt1ApaabcQBiF7Hv0M8/edit?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '8': {
    id: '8',
    name: 'i.Capture',
    description: 'Digital photography and image processing contest.',
    longDescription: 'A two-round photography competition featuring MACRO-PHOTOGRAPHY in Round 1 (before i.Fest) and LONG EXPOSURE in Round 2 (during i.Fest). Round 1 entries will be displayed at DAU campus with 15 entries qualifying for Round 2. Top three entries will receive prize money.',
    time: '15th November',
    location: 'DAU Campus',
    participants: 'Individual',
    prize: 'Cash Prizes for Top 3',
    rules: [
      'Round 1: MACRO-PHOTOGRAPHY theme (week before i.Fest)',
      'Round 2: LONG EXPOSURE theme (during i.Fest)',
      'Submit entries via Google Forms',
      'Human subjects require consent',
      'Edited photos must include raw photograph',
      'No cheating or plagiarism allowed',
      'Updates via WhatsApp group'
    ],
    organizers: ['Photography Team'],
    requirements: [
      'Mandatory registration before deadline',
      'Digital camera or smartphone with good camera',
      'Basic photography skills',
      'Join WhatsApp group for updates',
      'Submit both edited and raw photos if edited',
      'Obtain consent for human subjects'
    ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'innovation',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Hari', phone: '+91 9106854849' },
      { name: 'Bhavi', phone: '+91 8780152628' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1qFi6NqXFYVnzDMa77gbwfS1oeyGxT4YS/view?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '9': {
    id: '9',
    name: 'Catch The Flag',
    description: 'Cybersecurity capture the flag competition.',
    longDescription: 'Details coming soon.',
    time: '16th November',
    location: 'Cybersecurity Lab',
    participants: 'Individual/Team',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Kasak', phone: '+91 7574897644' },
      { name: 'Ayush', phone: '+91 9624695698' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1oGC7q2NJ9oRKPFKUZ3Wc9TaxyzrHz9-4/edit?usp=sharing&ouid=105561346511769055672&rtpof=true&sd=true',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '10': {
    id: '10',
    name: 'SellOut',
    description: 'Business pitch and entrepreneurship challenge.',
    longDescription: 'Details coming soon.',
    time: '14th November',
    location: 'Business Center',
    participants: 'Individual/Team',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Daksh', phone: '+91 6351871877' },
      { name: 'Yuvansh', phone: '+91 9909236023' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1da7fmvzjS54t6PLG7Lrg9xH15Osgma8D/view?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '11': {
    id: '11',
    name: 'Chess64',
    description: 'Chess tournament with digital twist.',
    longDescription: 'The tournament will be conducted in two parts: knockout rounds and Swiss rounds. Each player must turn up on time with a 15-minute walk-over system. The knockout rounds will be on Lichess or Chess.com website. Players must set up their accounts and download the Chess Clock app before the tournament begins.',
    time: '16th November',
    location: 'Gaming Zone',
    participants: 'Individual',
    prize: 'TBD',
    rules: [
      'Tournament conducted in knockout rounds and Swiss rounds',
      '15-minute walk-over system for late arrivals',
      '5-6 knockout rounds and 3 Swiss rounds (subject to change)',
      'Time Control: First 3 Knockouts - 3min + 2sec, Next 3 Knockouts - 5min + 3sec, Swiss - 10min + 5sec',
      'Draw in knockout rounds: Tiebreaker 3min + 2sec, then Armageddon 4min vs 3min',
      'All standard FIDE rules apply',
      'Organizers\' decision is final in case of disputes'
    ],
    organizers: ['Gaming Zone Team'],
    requirements: [
      'Individual participation only',
      'Must set up Lichess or Chess.com account before tournament',
      'Download Chess Clock app on phone',
      'Physical presence required at venue',
      'Inform coordinators about unavailability'
    ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'gaming',
    icon: <Brain className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Tirth', phone: '+91 9687532568' },
      { name: 'Abhyudit', phone: '+91 9054110450' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1LaCVv6uQOlyYPE8_leKac1DBV8uFQ0Fv/view?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '12': {
    id: '12',
    name: 'CryptoTrade',
    description: 'Cryptocurrency trading simulation challenge.',
    longDescription: 'A 72-hour virtual crypto trading event using the Roostoo Mock Crypto Trading App. Participants will use virtual currency to trade real cryptocurrency in a simulated environment, aiming to maximize returns with strategic trades. This educational event helps participants learn about cryptocurrency trading in a risk-free environment.',
    time: '14th November',
    location: 'Online Platform (Roostoo App)',
    participants: 'Individual',
    prize: '₹3,000 Total Prize Pool',
    rules: [
      '72-hour continuous trading event',
      'Platform: Roostoo Mock Crypto Trading App',
      'Event Code: IFEST (to join competition)',
      'Virtual money provided for trading real-time market data',
      'Winners determined by highest virtual profit',
      'Tie-breaker: highest number of successful trades',
      'No multiple accounts or cheating allowed'
    ],
    organizers: ['Finance Team'],
    requirements: [
      'College students registered in i.Fest \'24',
      'Download Roostoo app and enter code "IFEST"',
      'Create account and join CryptoTrade competition',
      'Complete full 72 hours of trading',
      'Follow all trading guidelines',
      'Valid contact information for prize eligibility'
    ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'innovation',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Daksh', phone: '+91 6351871877' },
      { name: 'Satvik', phone: '+91 6261695658' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1CiWQ41STBYNQbIJspeQadTXfYq63lvq1/view?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '13': {
    id: '13',
    name: 'Treasure Hunt',
    description: 'Digital treasure hunt adventure.',
    longDescription: 'Details coming soon.',
    time: '15th November',
    location: 'Campus Grounds',
    participants: 'Team',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Sumit', phone: '+91 9664515557' },
      { name: 'Madhav', phone: '+91 9227013499' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/130-QkspKqkSETqfPmG-xLXNetmGUUJwW/edit?usp=sharing&ouid=105561346511769055672&rtpof=true&sd=true',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '14': {
    id: '14',
    name: 'i.Ganith',
    description: 'Mathematical problem solving competition.',
    longDescription: 'Details coming soon.',
    time: '16th November',
    location: 'Math Lab',
    participants: 'Individual',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Om', phone: '+91 9104006647' },
      { name: 'Shubh', phone: '+91 8200026151' }
    ],
    rulebookUrl: '',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '15': {
    id: '15',
    name: 'i.Ride',
    description: 'Transportation and logistics innovation challenge.',
    longDescription: 'Details coming soon.',
    time: '14th November',
    location: 'Transportation Hub',
    participants: 'Individual/Team',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Soumya', phone: '+91 8758746506' },
      { name: 'Priyansh', phone: '+91 9664988761' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1HdQo7pYSlcVWoubXMwXITUTTcdqgAVybIunCTNn32Rg/edit?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '16': {
    id: '16',
    name: 'CineCraft',
    description: 'Video editing and filmmaking contest.',
    longDescription: 'Welcome to CineCraft, the official "Pixel Paradox" Reel Competition of iFest \'25! Create a dynamic Instagram Reel that captures the spirit and energy of our festival, inspired by the theme of "Pixel Paradox." Showcase your creativity through innovative video storytelling that represents the innovation and atmosphere of iFest \'25.',
    time: '16th November',
    location: 'Online Submission',
    participants: 'Individual/Team (up to 3 members)',
    prize: 'Cash Prizes + Certificates',
    rules: [
      'Deadline: 23rd November 2025, 11:59 PM IST',
      'Duration: 15 to 60 seconds (vertical 9:16 aspect ratio)',
      'Submit via official Google Form only',
      'Original work required - no plagiarism allowed',
      'Use Instagram library audio or original creations',
      'No obscene, defamatory, or inappropriate content',
      'One entry per individual/team maximum'
    ],
    organizers: ['Media Team'],
    requirements: [
      'Open to all iFest \'25 participants',
      'Individual or team participation (max 3 members)',
      'Original Instagram Reel creation',
      'Google Form submission required',
      'Theme: "Pixel Paradox" interpretation',
      'Proper audio rights and permissions'
    ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'innovation',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Aditya', phone: '+91 8849739593' },
      { name: 'Khanjan', phone: '+91 9409133900' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1j8aV5eQ9QxWrMwmo2CkB8sAc8A8Q_Si8Ni5pN6yPeE4/edit?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '17': {
    id: '17',
    name: 'i.Quiz',
    description: 'Technology and general knowledge quiz.',
    longDescription: 'Details coming soon.',
    time: '14th November',
    location: 'Quiz Hall',
    participants: 'Individual/Team',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Prithviraj', phone: '+91 6358849146' },
      { name: 'Nikhil', phone: '+91 9149083243' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1GjPFYKtk8W_umGBTnmD2FxgDEXNkgBquQp34oA8I6nk/edit?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '18': {
    id: '18',
    name: 'BlindC',
    description: 'C programming challenge with special constraints.',
    longDescription: 'This is an individual event open to all registered students. The coding contest will be hosted on Hackerrank where participants can code in any language. The contest contains 3-4 coding questions with progressive difficulty levels and lasts for 1 hour. Participants will explore cybersecurity, problem-solving, and digital forensics through challenges that simulate real-world cases.',
    time: '15th November',
    location: 'Programming Lab (AC Lab, DAU Campus)',
    participants: 'Individual',
    prize: 'TBD',
    rules: [
      'Display of computer is turned off during the event',
      'There will be penalties for incorrect solutions',
      'Use of AI/Online resources are prohibited - direct disqualification',
      'Call the coordinator to submit your code (do not submit yourself)',
      'Top 3 students on final leaderboard will be eligible for prizes',
      'Must be physically present at venue to receive prizes',
      'Coordinators\' decision will be final in case of discrepancies'
    ],
    organizers: ['Programming Lab Team'],
    requirements: [
      'Individual participation only',
      'Must be registered via official i.Fest website',
      'Physical presence required at DAU Campus AC Lab',
      'Basic programming knowledge in any language',
      'No on-spot entries allowed'
    ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Aditya', phone: '+91 7984257713' },
      { name: 'Raj', phone: '+91 9426625583' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/13xGILzHjpTsfrISOqApNIZuit6FwSbfHLosYfWC0QGk/edit?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '19': {
    id: '19',
    name: 'Reverse Coding',
    description: 'Reverse engineering and code analysis challenge.',
    longDescription: 'Details coming soon.',
    time: '16th November',
    location: 'Security Lab',
    participants: 'Individual',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Mahek', phone: '+91 9601594723' },
      { name: 'Zeel', phone: '+91 9913531830' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1bEF-cYPYuIk6258gO-bWuFZqAMrcFMKq/edit?usp=sharing&ouid=105561346511769055672&rtpof=true&sd=true',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '20': {
    id: '20',
    name: 'AI Triathlon',
    description: 'Three-stage AI development marathon.',
    longDescription: 'The AI Triathlon is not just a quiz; it\'s a multi-stage challenge that mirrors the journey of an AI professional. You\'ll start with a test of your foundational knowledge, move on to deeper conceptual problems, and finally, put your skills to the test in a real-world coding challenge. This event is open to all students who have an interest in Artificial Intelligence, Machine Learning, and Data Science. Whether you\'re a beginner who has just started exploring the field or an experienced coder, the triathlon has a challenge for you!',
    time: '14th November',
    location: 'AI Research Center',
    participants: 'Individual',
    prize: 'TBD',
    rules: [
      'Participation is on an individual basis. Teamwork or collaboration is not permitted.',
      'You must have a stable internet connection for the online rounds.',
      'Any form of plagiarism or malpractice will lead to immediate disqualification.',
      'All decisions made by the organizing committee regarding scoring, qualification, and rule enforcement are final and binding.',
      'Round 1: The Knowledge Dash (Online Speed Quiz) - 30 mins duration',
      'Round 2: The Deep Dive (Conceptual Challenge) - 45 mins duration',
      'Round 3: The AI Hot Seat (The Grand Finale) - 1.5 to 2 hours duration'
    ],
    organizers: ['AI Research Center Team'],
    requirements: [
      'Basic knowledge of Artificial Intelligence and Machine Learning concepts',
      'Stable internet connection for online rounds',
      'Individual participation (no teams allowed)',
      'Interest in AI, ML, and Data Science fields'
    ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'ai',
    icon: <Brain className="w-8 h-8" />,
    color: 'neon-cyan',
    coordinators: [
      { name: 'Vedant', phone: '+91 9023095963' },
      { name: 'Aaditya', phone: '+91 8529451266' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1dkMaRZfas1TB5re1t87jmCQ36UgCyPNH/edit?usp=sharing&ouid=105561346511769055672&rtpof=true&sd=true',
    schedule: [
      { time: 'Round 1: 10:00 AM', activity: 'The Knowledge Dash (Online Speed Quiz) - Top 50% advance' },
      { time: 'Round 2: 11:30 AM', activity: 'The Deep Dive (Conceptual Challenge) - Select finalists chosen' },
      { time: 'Round 3: 2:00 PM', activity: 'The AI Hot Seat (Live Finale) - Top 3 winners crowned' }
    ]
  },
  '21': {
    id: '21',
    name: 'i.Prompt',
    description: 'AI prompt engineering and optimization contest.',
    longDescription: 'Details coming soon.',
    time: '15th November',
    location: 'AI Lab',
    participants: 'Individual',
    prize: 'TBD',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'ai',
    icon: <Zap className="w-8 h-8" />,
    color: 'neon-magenta',
    coordinators: [
      { name: 'Shlok', phone: '+91 9173539599' },
      { name: 'Anmol', phone: '+91 8329284778' }
    ],
    rulebookUrl: '',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  }
};
