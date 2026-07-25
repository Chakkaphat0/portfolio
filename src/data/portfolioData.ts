import { NavItem, Project, TimelineItem, Activity, Certificate } from '../types/portfolio';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const PERSONAL_DATA = {
  fullName: "Chakkaphat Lunabut",
  university: "Bangkok University",
  phone: "0656288987",
  email: "chakkaphat.luna@gmail.com",
  address: "5/4 Mukdahan Patchasumpat Rd.",
  dateOfBirth: "01 May 2005",
  profileImage: "",
};

export const EDUCATION_DATA: TimelineItem[] = [
  {
    id: 'edu-1',
    period: '2023 - Present',
    title: 'Bachelor of Science (Computer Science - Data Science and Cybersecurity)',
    subtitle: 'Bangkok University',
    organization: 'Bangkok University',
    description: '',
    bullets: [],
    tags: ['Bangkok University', 'IT']
  },
  {
    id: 'edu-2',
    period: '2017 - 2023',
    title: 'MUKDAHAN SCHOOL',
    subtitle: 'High School',
    organization: 'Junior & Senior High School (Science-Math Program)',
    description: '',  
    bullets: [],
    tags: ['MUKDAHAN SCHOOL']
  },
  {
    id: 'edu-3',
    period: '2011 - 2017',
    title: 'Elementary Saint Joseph Mukdahan School',
    subtitle: 'Elementary',
    organization: 'Elementary School',
    description: '',  
    bullets: [],
    tags: ['SaintJosephMukdahan']
  }
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
    description: 'An AI-powered job interview simulation web application designed to help job seekers and students practice interview questions in real-time. The system processes speech and text responses via Botnoi Voice & NLP APIs to simulate realistic interview scenarios with instant feedback.',
    coverImage: '/AI interview pic.png',
    images: [
      '/AI interview pic1.png',
      '/AI interview pic2.png',
      '/AI interview pic3.png'
    ],
    liveDemoUrl: 'https://cs-497-fronted.vercel.app/',
    githubUrl: 'https://github.com/Chakkaphat0/CS497-Fronted',
    featured: true
  }
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: 'act-1',
    title: 'Bangkok University Hackathon & Tech Event',
    category: 'Competition',
    date: '2024',
    role: 'Web Developer',
    organization: 'Bangkok University',
    description: 'Participated in software development hackathon and presented digital innovation solutions.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    achievement: '🏆 Participant & Innovation Finalist'
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
    thumbnail: '/certificates/tctt2025.png',
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
    thumbnail: '/certificates/tctt2024.png',
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
    thumbnail: '/certificates/tctt 2023.png',
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
    thumbnail: '/certificates/hackfinity.png',
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
    thumbnail: '/certificates/MTYCGT2025.png',
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
    thumbnail: '/certificates/NCSA 28 hr.png',
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
    thumbnail: '/certificates/NCSA 21 hr.jpg',
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
    thumbnail: '/certificates/NCSA 20 hr.png',
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
    thumbnail: '/certificates/7.jpg',
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
    thumbnail: '/certificates/22.png',
    tags: ['BU CTF', 'Cybersecurity'],
    description: 'An inaugural Capture The Flag cybersecurity competition hosted by the School of Information Technology and Innovation (BU-ITI) at Bangkok University in collaboration with G-Able (CyberGenics) and NCSA, featuring 20 student teams competing in penetration testing, cryptography, and digital forensics challenges.'
  }
];

export const CONTACT_DATA = {
  email: 'chakkaphat.luna@gmail.com',
  phone: '0656288987',
  address: '5/4 Mukdahan Patchasumpat Rd.',
  github: 'https://github.com/Chakkaphat0',
  linkedin: 'https://linkedin.com/in/chakkaphat-lunabut'
};
