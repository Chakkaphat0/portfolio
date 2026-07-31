import { NavItem, Project, TimelineItem, Activity, Certificate } from '../types/portfolio';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Activities', href: '#activities' },
  { label: 'CTF Records', href: '#ctf-scores' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const PERSONAL_DATA = {
  fullName: "Chakkaphat Lunabut",
  university: "Bangkok University",
  phone: "0656288987",
  email: "chakkaphat.luna@gmail.com",
  dateOfBirth: "01 May 2005",
  profileImage: "./profile.jpg",
};

export const EDUCATION_DATA: TimelineItem[] = [
  {
    id: 'edu-1',
    period: '2023 - Present',
    title: '  Bangkok University',
    subtitle: 'Data Science and Cybersecurity',
    organization: 'Bachelor of Science (Computer Science)',
    description: '',
    bullets: [],
    tags: ['Bangkok University', 'IT']
  },
  {
    id: 'edu-2',
    period: '2017 - 2023',
    title: 'Mukdahan School',
    subtitle: 'Science-Math Program',
    organization: 'High School',
    description: '',  
    bullets: [],
    tags: ['MUKDAHAN SCHOOL']
  }
  // ,
  // {
  //   id: 'edu-3',
  //   period: '2011 - 2017',
  //   title: 'Elementary Saint Joseph Mukdahan School',
  //   subtitle: 'Elementary',
  //   organization: 'Primary Education: Elementary School',
  //   description: '',  
  //   bullets: [],
  //   tags: ['SaintJosephMukdahan']
  // }
];

export const EXPERIENCE_DATA: TimelineItem[] = [
  {
    id: 'exp-1',
    period: '2024',
    title: 'Full-Stack & Web Developer',
    subtitle: 'Academic & Projects',
    organization: 'Bangkok University',
    description: 'Developing web applications for academic courses and digital innovation projects.',
    bullets: [
      'Built modern web applications with React & Node.js',
      'Designed clean, responsive, and minimalist UI/UX'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'AI Interview Simulator Web Application',
    category: 'Academic',
    role: 'Full-Stack Developer',
    responsibility: [
      'Designed Frontend & Backend Architecture',
      'Integrated AI / Voice API for real-time interview evaluation'
    ],
    techStack: ['React', 'TypeScript', 'Node.js'],
    description: 'An AI powered job interview simulation web application designed to help job seekers and students practice interview questions in real-time. The system processes speech and text responses via Botnoi Voice & NLP APIs to simulate realistic interview scenarios with instant feedback.',
    coverImage: './AI interview pic.png',
    images: [
      './AI interview pic1.png',
      './AI interview pic2.png',
      './AI interview pic3.png'
    ],
    liveDemoUrl: 'https://cs-497-fronted.vercel.app/',
    githubUrl: 'https://github.com/Chakkaphat0/CS497-Fronted',
    featured: true
  },
  {
    id: 'proj-2',
    title: "Banker's Algorithm Simulator",
    category: 'Academic',
    role: 'Developer',
    responsibility: [
      'Implemented safety state evaluation & deadlock avoidance algorithm',
      'Managed dynamic resource matrices: Available, Maximum, Allocation, and Need',
      'Simulated process execution sequence and safe resource release'
    ],
    techStack: ['React', 'Tailwind CSS'],
    description: "An interactive web simulator for the Banker's Algorithm a deadlock avoidance algorithm that tests system safety by simulating resource allocation across processes using Available, Maximum, Allocation, and Need matrices.",
    coverImage: './banker-sim/b1.png',
    images: [
      './banker-sim/b2.png',
      './banker-sim/b3.png'
    ],
    liveDemoUrl: 'https://chakkaphat0.github.io/CS-327C-/',
    githubUrl: 'https://github.com/Chakkaphat0/CS-327C-',
    featured: true
  }
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: 'act-1',
    title: 'BU-ITI CTF COMPETITION 2025',
    category: 'Competition',
    date: '09 May 2025',
    role: 'CTF Competitor',
    organization: 'School of Information Technology and Innovation, Bangkok University',
    description: 'Competed in Bangkok University\'s inaugural Capture The Flag (CTF) cybersecurity competition organized by BU-ITI in collaboration with NCSA and CyberGenics (G-Able). Solved Jeopardy-style security challenges across Web Exploitation, Cryptography, Reverse Engineering, and Digital Forensics.',
    image: './Event/BU-ITI CTF COMPETITION 2025 9 พฤษภาคม 2025.png',
    achievement: '🏆 Competitor & Top Cybersecurity Talent'
  },
  {
    id: 'act-2',
    title: 'Meet The Youth Cyber Guardians Thailand 2025',
    category: 'Club',
    date: '07 September 2025',
    role: 'Participant',
    organization: 'Royal Thai Armed Forces Cyber Command & NCSA',
    description: 'Joined the national youth cybersecurity initiative hosted by the Royal Thai Armed Forces Cyber Command in collaboration with NCSA. Engaged in hands-on Red Team vs Blue Team cyber simulations, Threat Intelligence (ISR), OSINT investigations, and national security defense workshops.',
    image: './Event/Meet The Youth Cyber Guardians Thailand 2025 7 กันยายน พศ 2568.jpg',
    achievement: '🛡️ Certified Youth Cyber Security Guardian'
  },
  {
    id: 'act-3',
    title: 'IT Empowering Day: in the Era of AI',
    category: 'Conference',
    date: '21 May 2024',
    role: 'AI Mini Hackathon Participant & Seminar Participant',
    organization: 'School of Information Technology and Innovation, Bangkok University',
    description: 'Attended specialized AI technology seminars, career path talks from global industry experts, and hands-on workshops covering AI in Action, Senior Project Showcase evaluations, and tech industry innovation networking.',
    image: './Event/IT Empowering Day in the Era of AI 21 พฤษภาคม พศ 2569.jpg',
    achievement: '💡 AI Technology & Innovation Seminar Attendee'
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Thailand Cyber Top Talent 2025 (TCTT 2025)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2025',
    year: '2025',
    category: 'Competition',
    scoreUrl: 'https://cloud.ctf.in.th/score/view.html?t=BQU14LUPQ1',
    thumbnail: './certificates/tctt2025.png',
    tags: ['Cybersecurity', 'CTF', 'Web Hacking', 'Reverse Engineering'],
    description: "Thailand's largest national Capture The Flag (CTF) cybersecurity competition organized by NCSA and Huawei. Tested advanced security skills including Web Exploitation, Cryptography, Reverse Engineering, Digital Forensics, and Network Security."
  },
  {
    id: 'cert-2',
    title: 'Thailand Cyber Top Talent 2024 (TCTT 2024)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2024',
    year: '2024',
    category: 'Competition',
    scoreUrl: 'https://cloud.ctf.in.th/score/view.html?t=QR66WITOOJ',
    thumbnail: './certificates/tctt2024.png',
    tags: ['Cybersecurity', 'TCTT 2024', 'Competition'],
    description: "Thailand's largest national Capture The Flag (CTF) cybersecurity competition organized by NCSA and Huawei. Tested advanced security skills including Web Exploitation, Cryptography, Reverse Engineering, Digital Forensics, and Network Security."
  },
  {
    id: 'cert-3',
    title: 'Thailand Cyber Top Talent 2023 (TCTT 2023)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2023',
    year: '2023',
    category: 'Competition',
    scoreUrl: 'https://cloud.ctf.in.th/score/view.html?t=2HFLHQZCMI',
    thumbnail: './certificates/tctt 2023.png',
    tags: ['Cybersecurity', 'TCTT 2023'],
    description: "Thailand's largest national Capture The Flag (CTF) cybersecurity competition organized by NCSA and Huawei. Tested advanced security skills including Web Exploitation, Cryptography, Reverse Engineering, Digital Forensics, and Network Security."
  },
  {
    id: 'cert-4',
    title: 'Hackfinity Battle',
    issuer: 'TryHackMe',
    issueDate: '2024',
    year: '2024',
    category: 'Competition',
    scoreUrl: 'https://tryhackme.com/hackfinity',
    thumbnail: './certificates/hackfinity.png',
    tags: ['Hackfinity', 'Ethical Hacking', 'Security'],
    description: 'A jeopardy-style Capture The Flag (CTF) competition hosted by TryHackMe, challenging participants across web exploitation, digital forensics, cryptography, reverse engineering, and blockchain security with hands-on real-world vulnerability scenarios.'
  },
  {
    id: 'cert-5',
    title: 'Meet The Youth Cyber Guardians Thailand 2025',
    issuer: 'Royal Thai Armed Forces Cyber Command',
    issueDate: '2025',
    year: '2025',
    category: 'Workshop',
    scoreUrl: 'https://ctf.in.th/news/3953/',
    thumbnail: './certificates/MTYCGT2025.png',
    tags: ['Cyber Training', 'Youth Tech', 'MTYCGT'],
    description: 'A national cybersecurity training program organized by the Royal Thai Armed Forces Cyber Command in collaboration with NCSA, bringing together young cyber talents for intensive hands-on workshops covering Incident Response, Threat Intelligence, SOC Analysis, and Cyber Law.'
  },
  {
    id: 'cert-6',
    title: 'NCSA e-Learning Penetration Test (28 Hours)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2024',
    year: '2024',
    category: 'Course',
    scoreUrl: 'https://www.thnca.or.th/our-services/ncsa-e-learning/penetration-test-online/',
    thumbnail: './certificates/NCSA 28 hr.png',
    tags: ['NCSA 28Hr', 'Cyber Training', 'Certificate'],
    description: 'An intensive 28-hour specialized course from the Thailand National Cyber Academy (THNCA) covering Penetration Testing methodologies, OWASP Top 10 vulnerability assessment, web exploitation techniques, privilege escalation, and professional security reporting.'
  },
  {
    id: 'cert-7',
    title: 'NCSA e-Learning Cybersecurity Foundation Course (21 Hours)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2024',
    year: '2024',
    category: 'Course',
    scoreUrl: 'https://www.thnca.or.th/our-services/ncsa-e-learning/',
    thumbnail: './certificates/NCSA 21 hr.jpg',
    tags: ['NCSA 21Hr', 'Security Certificate'],
    description: 'A 21-hour foundational cybersecurity course from the Thailand National Cyber Academy (THNCA) covering information security principles (CIA Triad), network security architecture, cryptography fundamentals, access control, and ISO/IEC 27001 security standards.'
  },
  {
    id: 'cert-8',
    title: 'NCSA e-Learning Professional Course (20 Hours)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2024',
    year: '2024',
    category: 'Course',
    scoreUrl: 'https://www.thnca.or.th/our-services/ncsa-e-learning/advanced-online-2/',
    thumbnail: './certificates/NCSA 20 hr.png',
    tags: ['NCSA 20Hr', 'Cyber Defense'],
    description: 'A 20-hour professional-level course from the Thailand National Cyber Academy (THNCA) aligned with CompTIA Security+ standards, covering server hardening, ransomware defense strategies, cybersecurity governance, security policy enforcement, and PDPA compliance.'
  },
  {
    id: 'cert-9',
    title: 'AI MINI HACKATHON 2026',
    issuer: 'Bangkok University',
    issueDate: '2026',
    year: '2026',
    category: 'Competition',
    scoreUrl: 'https://www.bu.ac.th/en/featured-stories/2468',
    thumbnail: './certificates/7.jpg',
    tags: ['AI Hackathon', 'Innovation'],
    description: 'An AI Mini Hackathon organized by the School of Information Technology and Innovation at Bangkok University, in which students competed in small groups to develop real-world solutions using AI technology, with evaluation and awards presented by a judging panel.'
  },
  {
    id: 'cert-10',
    title: 'BU-ITI CTF COMPETITION 2025',
    issuer: 'Bangkok University',
    issueDate: '2025',
    year: '2025',
    category: 'Competition',
    scoreUrl: 'https://www.bu.ac.th/en/featured-stories/1848',
    thumbnail: './certificates/22.png',
    tags: ['BU CTF', 'Cybersecurity'],
    description: 'An inaugural Capture The Flag cybersecurity competition hosted by the School of Information Technology and Innovation (BU-ITI) at Bangkok University in collaboration with G-Able (CyberGenics) and NCSA, featuring 20 student teams competing in penetration testing, cryptography, and digital forensics challenges.'
  }
];

export const CONTACT_DATA = {
  email: 'chakkaphat.luna@gmail.com',
  phone: '0656288987',
  github: 'https://github.com/Chakkaphat0',
  linkedin: 'https://www.linkedin.com/in/chakkaphat-lunabut-950aa5324/'
};

export const TECHNICAL_SKILLS_DATA = {
  developer: {
    title: 'Developer',
    subtitle: 'Software Development & Web Technologies',
    languages: [
      { name: 'Python', level: 'Good', score: '85%' },
      { name: 'Node.js', level: 'Good', score: '85%' },
      { name: 'JavaScript', level: 'Intermediate', score: '65%' },
      { name: 'PHP', level: 'Basic', score: '30%' },
      { name: 'Go', level: 'Basic', score: '25%' },
    ],
    frameworksAndDatabases: [
      'Next.js', 'Prisma', 'Firebase', 'MySQL', 'PostgreSQL', 'SQLite'
    ],
    toolsAndSoftware: [
      'VS Code', 'Postman', 'Playwright', 'Jira', 'SourceTree'
    ]
  },
  redHat: {
    title: 'Red Team',
    subtitle: 'Offensive Security & Ethical Hacking',
    languages: [
      { name: 'Python', level: 'Good', score: '85%' },
      { name: 'C++', level: 'Basic', score: '30%' },
      { name: 'C#', level: 'Basic', score: '30%' },
      { name: 'Assembly', level: 'Basic', score: '25%' },
    ],
    toolsAndSoftware: [
      'Nmap', 'Burp Suite', 'Metasploit', 'Kali Linux', 'Wireshark',
      'Ghidra', 'IDA Pro', 'GDB', 'BloodHound', 'LinPEAS',
      'pspy', 'Nikto', 'VMware'
    ]
  }
};

export const CTF_SCORES_DATA = [
  {
    id: 'tctt-2025',
    year: '2025',
    title: 'Thailand Cyber Top Talent 2025 - SENIOR [Qualifier]',
    badge: '2025 SENIOR',
    url: 'https://cloud.ctf.in.th/score/view.html?t=BQU14LUPQ1',
    individual: {
      rank: '2',
      player: 'pizzaloiopo',
      team: 'RobloxGamerTH007',
      score: '3,000'
    },
    team: {
      rank: '33',
      teamName: 'RobloxGamerTH007',
      institution: 'มหาวิทยาลัยกรุงเทพ + มหาวิทยาลัยธรรมศาสตร์',
      score: '3,001'
    }
  },
  {
    id: 'tctt-2024',
    year: '2024',
    title: 'Thailand Cyber Top Talent 2024 - SENIOR [Qualifier]',
    badge: '2024 SENIOR',
    url: 'https://cloud.ctf.in.th/score/view.html?t=QR66WITOOJ',
    individual: {
      rank: '141',
      player: 'pizzaloiopo',
      team: 'Tactical Sword',
      score: '800'
    },
    team: {
      rank: '60',
      teamName: 'Tactical Sword',
      institution: 'มหาลัยกรุงเทพ + มหาลัยธรรมศาสตร์',
      score: '1,700'
    }
  },
  {
    id: 'tctt-2023',
    year: '2023',
    title: 'Thailand Cyber Top Talent 2023 - SENIOR [Qualifier]',
    badge: '2023 SENIOR',
    url: 'https://cloud.ctf.in.th/score/view.html?t=2HFLHQZCMI',
    individual: {
      rank: '79',
      player: 'pizzaloiopo',
      team: 'Tactical Sword',
      score: '620'
    },
    team: {
      rank: '23',
      teamName: 'Tactical Sword',
      institution: 'มหาวิทยาลัยกรุงเทพ',
      score: '1,620'
    }
  }
];
