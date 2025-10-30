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
    longDescription: 'iOHunt is an exciting digital treasure hunt event that tests your problem-solving and logical reasoning skills through interesting and challenging puzzles. The event consists of 2 rounds with increasing difficulty levels, where participants compete individually to solve logical puzzles and advance to the final round. Only the top 60% of participants from Round 1 will qualify for Round 2, making it a competitive and thrilling experience.',
    time: '15th November',
    location: 'Main Campus',
    participants: 'Individual',
    prize: 'TBD',
    rules: [
      'Solo participation only from i.Fest\'25 website',
      'The event will consist of 2 rounds',
      'All questions will be in the form of interesting and logical puzzles',
      'Round 1: 25 questions with maximum 2 minutes per question (50 minutes total)',
      'Round 2: 15 questions with 1 hour time limit',
      'Only the top 60% of participants from Round 1 will qualify for Round 2',
      'The total duration of the event will be 3 hours',
      'The difficulty level will increase from Round 1 to Round 2',
      'In case of any queries or issues during the event, contact the event coordinators',
      'Prizes are subject to change',
      'All decisions by organizers are final'
    ],
    organizers: ['Treasure Hunt Team'],
    requirements: [
      'Individual registration through i.Fest website mandatory',
      'Basic problem-solving and logical reasoning skills',
      'Stable internet connection for online participation',
      'Arrive on time for the event start',
      'No external assistance or collaboration allowed',
      'Follow all instructions given by coordinators'
    ],
    registrationStarted: true,
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
    googleFormUrl: '', // Add Google Form URL here
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
  '5': {
    id: '5',
    name: 'i.Relay',
    description: 'Team-based relay coding competition with rotating coders.',
    longDescription: 'This is a team event with 2 members per team. Each member will code for a specific amount of time before the next teammate continues the work, similar to a relay race. The event is open to all registered teams. The coding period will last for 135 minutes (45 * 3) with 20 min per person + 5 min discussion time.',
    time: '15th November',
    location: 'Conference Hall',
    participants: 'Team (2 members)',
    prize: 'Top 3 teams eligible for prizes',
    rules: [
      'Team event with exactly 2 members per team',
      'Coding period lasts 135 minutes total (45 min × 3 questions)',
      'Each team member codes for only 20 minutes per question',
      '5 minutes discussion time after each person replacement',
      'One coding round with exactly 3 questions with random difficulty',
      'Teams solve questions in order A-B-C',
      'After 45 mins, only the next question unlocks',
      'Previous question cannot be submitted after next unlocks',
      'Team must decide order of who goes first for each question',
      'Solutions tested based on test cases provided by coordinators',
      'Top 3 teams on final leaderboard eligible for prizes',
      'All team members must register individually for i.Fest',
      'Coordinators\' decision is final for any discrepancy'
    ],
    organizers: ['Relay Coding Team'],
    requirements: [
      'Team of exactly 2 members required',
      'All team members must register individually for i.Fest',
      'Basic programming knowledge in any language',
      'Team coordination and communication skills',
      'Stable internet connection',
      'Arrive on time for event start'
    ],
    registrationStarted: true,
    poster: '/events/I.RELAY.png',
    category: 'coding',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Madhav', phone: '+91 7041937131' },
      { name: 'Krish', phone: '+91 9327702659' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1avoTLmdZEzxnLS_6V162T9N-jTwDPNHHDcRbGJVZTsY/edit?tab=t.0',
    schedule: [
      { time: 'TBA', activity: 'Event details coming soon' }
    ]
  },
  '6': {
    id: '6',
    name: 'i.Cube',
    description: '3D problem solving and spatial reasoning challenge.',
    longDescription: 'i.Cube 2025 is an exciting and competitive cube-solving event that challenges participants to demonstrate their speed and skill in solving the Rubik\'s Cube. Each competitor will have three official attempts, with their average solve time determining their final ranking. Precision, focus, and fair play are essential as participants race against the clock under strict official guidelines. Whether you\'re a seasoned cuber or a passionate newcomer, i.Cube 2025 offers a thrilling platform to showcase your talent and connect with the cubing community.',
    time: '16th November',
    location: 'Innovation Lab',
    participants: 'Individual',
    prize: 'TBD',
    rules: [
      'Each participant will be allowed 3 official solves during the event',
      'The average time of these 3 solves will determine the participant\'s final ranking',
      'In case of tie in average times, the participant with the best single solve time will be declared the winner',
      'Participants must begin each solve only after receiving the judge\'s signal',
      'The timer must be stopped correctly by placing both hands on the timer',
      'Any mis-start or improper timer handling may lead to a penalty or disqualification for that particular solve',
      'A maximum of 15 seconds inspection time is allowed before each solve',
      'The cube must be in a solvable state prior to starting the solve',
      'No external assistance or communication is permitted during the solve',
      'Participants must refrain from tampering with other competitors\' cubes or timer setups',
      'Fairness, sportsmanship, and respect towards all participants and officials are mandatory',
      'Any cheating, rule violations, or misconduct will result in immediate disqualification from the event',
      'The organizers reserve the right to impose penalties or disqualifications at their discretion',
      'The decisions of the event organizers are final and binding'
    ],
    organizers: ['Cube Solving Team'],
    requirements: [
      'Individual participation only',
      'Must bring your own Rubik\'s Cube (standard 3x3x3)',
      'Basic knowledge of cube solving techniques',
      'Registration through i.Fest website mandatory',
      'Arrive on time for your scheduled slot',
      'Follow all official WCA (World Cube Association) guidelines'
    ],
    registrationStarted: false,
    poster: '/events/placeholder.png',
    category: 'gaming',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Yashvi', phone: '+91 8128074477' },
      { name: 'Muktik', phone: '+91 9638783511' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1lW5LFssVVH8oCKWL8qmt0D4h6n09FK2f/view?usp=sharing',
    googleFormUrl: '', // Add Google Form URL here
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  },
  '7': {
    id: '7',
    name: 'i.Papyrus',
    description: 'Creative writing and documentation challenge.',
    longDescription: 'This is the Flagship Poster making event at i.Fest!! Unleash your creative and technical flair, with a poster that catches eyes and sells stories!! The event is a research poster making competition on topics that interest you. Your creativity and technical curiosity is put to the test. Select a technical subject or showcase an impactful research project you\'ve worked on, one that highlights originality and relevance in your field. Create a visually compelling and informative poster that captures the essence of your research. Engage with a panel of esteemed judges, presenting your research, discussing your methods, and explaining the potential impact of your findings.',
    time: '14th November',
    location: 'Library',
    participants: 'Individual/Team (1-3 members)',
    prize: 'TBD',
    rules: [
      'It is compulsory to register for i.Fest, if not registered the entry will be canceled',
      'The allowed team size is 1-3 members',
      'Poster must be of single A3 size page',
      'Submitted posters must be in PDF format with a maximum size of 500MB',
      'Shortlisted teams will be invited to present their posters to judges',
      'Only the team residing far from the venue will be allowed to present their poster in online mode',
      'Others will have to be present in person (Venue will be shared later)',
      'Participants will be given 15 minutes to present their posters and 10 minutes for question & answers',
      'Medium of presentation can be english, hindi or both',
      'The Q&A session may also be utilised by the audience once the judges are done with their questions for an additional 5 mins',
      'Each team can submit only a single poster',
      'Submission details will be shared to all registered participants',
      'In case of any ambiguity, the decision taken by the judge will be final'
    ],
    organizers: ['Research Poster Team'],
    requirements: [
      'Mandatory registration for i.Fest before event',
      'Team size: 1-3 members',
      'Choose a technical subject or research project',
      'Create A3 size poster in PDF format (max 500MB)',
      'Poster should highlight originality and relevance in your field',
      'Emphasize clarity, creativity, and insight in poster design',
      'Prepare for 15-minute presentation and 10-minute Q&A',
      'Be ready to discuss methods and potential impact of findings',
      'Follow submission guidelines provided by organizers'
    ],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'innovation',
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
    registrationStarted: true,
    poster: '/events/I.CAPTURE.png',
    category: 'innovation',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Hari', phone: '+91 9106854849' },
      { name: 'Bhavi', phone: '+91 8780152628' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1qFi6NqXFYVnzDMa77gbwfS1oeyGxT4YS/view?usp=sharing',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeOduwsafEMDE80Vg7m4U_MnGv5XgWPM4bdYtjxwFZk2kJ6pw/viewform', // Add Google Form URL here
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
    registrationStarted: true,
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
    description: 'Startup pitch competition with industry professionals.',
    longDescription: 'Sell-Out is a startup pitch competition where teams of 3-5 participants will present innovative business ideas. The competition is conducted in two stages: the initial shortlisting round and the final pitch in front of industry professionals. Teams must follow a structured pitch format covering problem identification, solution, target market, business model, and financial projections.',
    time: '14th November',
    location: 'Business Center',
    participants: 'Team (3-5 members)',
    prize: 'TBD',
    rules: [
      'Team size: 3-5 participants per team',
      'Two-stage competition: preliminary shortlisting and final pitch',
      'Preliminary Round: Fill Google Form with problem statement and solution',
      'Final Round: 15-20 minutes per team pitch (excluding Q&A)',
      'Structured pitch format required:',
      '  - Introduction (1 min)',
      '  - Problem Identification (2-3 min)',
      '  - Proposed Solution (3 min)',
      '  - Target Market (2-3 min)',
      '  - Business Model (2-3 min)',
      '  - Go-to-Market Strategy (2-3 min)',
      '  - Financial Projections (2 min)',
      '  - Competitive Landscape (1-2 min)',
      '  - Team Introduction (1-2 min)',
      '  - Closing (1 min)',
      'All team members must register individually for i.Fest',
      'Teams must register by filling provided Google form before deadline',
      'Strict adherence to pitch format and time limits required',
      'Any deviation may result in penalties or disqualification',
      'Coordinators\' decision is final'
    ],
    organizers: ['Business Club, DAU'],
    requirements: [
      'Team of 3-5 members required',
      'All team members must register individually for i.Fest',
      'Fill preliminary Google Form before deadline',
      'Prepare structured pitch presentation',
      'Innovative business idea required',
      'All team members must contribute to pitch',
      'Follow all guidelines in rulebook',
      'Arrive on time for final pitch round'
    ],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'innovation',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Daksh Rathod', phone: '+91 6351871877' },
      { name: 'Yuvansh Vaghasiya', phone: '+91 202401234' }
    ],
    rulebookUrl: 'https://drive.google.com/file/d/1da7fmvzjS54t6PLG7Lrg9xH15Osgma8D/view?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Preliminary Round - Google Form submission' },
      { time: 'TBA', activity: 'Final Pitch Round - Live presentation to judges' }
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
    registrationStarted: true,
    poster: '/events/Cryptotrade.png',
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
    description: 'Campus-wide treasure hunt with clues and tasks.',
    longDescription: 'Each team will get a clue in the beginning by a Treasure Hunt team volunteer and this is where your journey will start. The teams will have to solve the given clue/riddle which will lead them to the next location in the campus. If you have solved the clue/riddle correctly, then on reaching the respective clue destinations you will find a volunteer to whom each team has to report.',
    time: '15th November',
    location: 'Campus Grounds',
    participants: 'Team (10-15 members)',
    prize: 'TBD',
    rules: [
      'Each team gets initial clue from Treasure Hunt volunteer',
      'Teams solve clues/riddles to find next campus location',
      'Must report to volunteer at each destination with correct clue',
      'Remember clues and path followed - verified by volunteers',
      'Entire team must be present to receive next clue',
      'Perform simple fun tasks asked by volunteers',
      'Complete tasks to receive next clue/riddle',
      'Verify volunteer has assigned band before giving clue',
      'Team size: 10-15 members (tentative, subject to change)',
      'Maintain campus decorum and follow rules',
      'Contact organizers if any task feels inappropriate',
      'All team members must register individually for i.Fest',
      'Coordinators\' decision is final for any disputes'
    ],
    organizers: ['Treasure Hunt Team'],
    requirements: [
      'Team of 10-15 members (tentative size)',
      'All team members must register individually for i.Fest',
      'Problem-solving and logical reasoning skills',
      'Team coordination and communication',
      'Physical presence at campus locations',
      'Follow all campus rules and regulations',
      'Arrive on time for event start'
    ],
    registrationStarted: true,
    poster: '/events/placeholder.png',
    category: 'gaming',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Sumit', phone: '+91 9664515557' },
      { name: 'Madhav', phone: '+91 9227013499' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/130-QkspKqkSETqfPmG-xLXNetmGUUJwW/edit?usp=sharing&ouid=105561346511769055672&rtpof=true&sd=true',
    schedule: [
      { time: 'TBA', activity: 'Event details coming soon' }
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
    registrationStarted: true,
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
    description: 'Slow cycling challenge testing balance and control.',
    longDescription: 'Do you enjoy cycling and have excellent balance? Then get ready for the i.Ride Slow Cycling Challenge — a fun test of skill and patience! The aim is simple yet tricky: ride your cycle as slowly as you can without letting your feet touch the ground. Think you\'ve got the control? Come prove it!',
    time: '14th November',
    location: 'Campus Grounds',
    participants: 'Individual',
    prize: 'TBD',
    rules: [
      'Objective: Complete the track as slowly as you can, keeping your feet off the ground',
      'Open to everyone - individual participation only',
      'Bicycles will be provided for all participants',
      'If your feet touch the ground, you\'re out of the competition',
      'If you leave the designated track, you\'re out of the competition',
      'Individual participation only - no teams allowed',
      'Coordinators\' decision is final for any disputes'
    ],
    organizers: ['Cycling Team'],
    requirements: [
      'Individual participation only',
      'Basic cycling skills and balance',
      'Must register for i.Fest',
      'Arrive on time for your scheduled slot',
      'Follow all safety guidelines',
      'No personal bicycles required - provided by organizers'
    ],
    registrationStarted: true,
    poster: '/events/I.RIDE.png',
    category: 'gaming',
    icon: <Code className="w-8 h-8" />,
    color: 'pacman-yellow',
    coordinators: [
      { name: 'Soumya', phone: '+91 8758746506' },
      { name: 'Priyansh', phone: '+91 9664988761' }
    ],
    rulebookUrl: 'https://docs.google.com/document/d/1HdQo7pYSlcVWoubXMwXITUTTcdqgAVybIunCTNn32Rg/edit?usp=sharing',
    schedule: [
      { time: 'TBA', activity: 'Event details coming soon' }
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
    googleFormUrl: '', // Add Google Form URL here
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
    registrationStarted: true,
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
    description: 'Deduce logic from input-output pairs and write solutions.',
    longDescription: 'This is an individual event lasting 1.5 hours (90 minutes). The contest will be conducted on HackerRank. Instead of a problem statement, you will be given sample input-output pairs. Your task is to deduce the logic and write a program that solves the hidden problem. The event will consist of 4-5 questions with partial points awarded based on test cases passed.',
    time: '16th November',
    location: 'HackerRank Platform',
    participants: 'Individual',
    prize: 'Top 3 participants eligible for prizes',
    rules: [
      'Individual event lasting 1.5 hours (90 minutes)',
      'Contest conducted on HackerRank platform',
      'Event consists of 4-5 questions',
      'Given sample input-output pairs instead of problem statements',
      'Task: deduce logic and write program solving hidden problem',
      'Partial points awarded based on hidden test cases passed',
      'Top 3 participants from final standings eligible for prizes',
      'Must work alone using single, personal account',
      'No communication with other participants or sharing solutions',
      'All submissions must be original work',
      'No code from other persons, online sources, or AI tools',
      'Plagiarism detection software will check all submissions',
      'Violation of rules leads to immediate disqualification'
    ],
    organizers: ['Reverse Coding Team'],
    requirements: [
      'Individual participation only',
      'Must register for i.Fest',
      'Valid HackerRank account required',
      'Stable internet connection',
      'Basic programming knowledge in any language',
      'Logical reasoning and pattern recognition skills',
      'Arrive on time for event start'
    ],
    registrationStarted: true,
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
      { time: 'TBA', activity: 'Event details coming soon' }
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
    registrationStarted: true,
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
    registrationStarted: true,
    poster: '/events/i.prompt.png',
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
  },
  '22': {
    id: '22',
    name: 'Pickel ball',
    description: 'Smash, sprint and score in the ultimate pickleball face-off!',
    longDescription: 'Details coming soon.',
    time: '15th November',
    location: 'Basketball Court (DAU)',
    participants: 'Team (2 members)',
    prize: '5000 INR',
    rules: ['Details coming soon'],
    organizers: ['Details coming soon'],
    requirements: ['Details coming soon'],
    registrationStarted: true,
    poster: '/events/pickleball.png',
    category: 'gaming',
    icon: <Trophy className="w-8 h-8" />,
    color: 'neon-magenta',
    coordinators: [
      { name: 'Pranshu', phone: '+91 7490816116' },
      { name: 'Vivek', phone: '+91 9601049280' }
    ],
    rulebookUrl: '',
    googleFormUrl: 'https://forms.gle/UJS3xdoUgs6vogSu8',
    schedule: [
      { time: 'TBA', activity: 'Details coming soon' }
    ]
  }
};
