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
  profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
};

export const EDUCATION_DATA: TimelineItem[] = [
  {
    id: 'edu-1',
    period: '2023 - ปัจจุบัน',
    title: 'ระดับอุดมศึกษา: ปริญญาตรี (เทคโนโลยีสารสนเทศ)',
    subtitle: 'Bangkok University',
    organization: 'มหาวิทยาลัยกรุงเทพ (Bangkok University)',
    description: '',
    bullets: [],
    tags: ['Bangkok University', 'IT']
  },
  {
    id: 'edu-2',
    period: '2017 - 2023',
    title: 'MUKDAHAN SCHOOL',
    subtitle: '',
    organization: 'ระดับมัธยมศึกษา: มัธยมศึกษาตอนต้น - ปลาย',
    description: '',  
    bullets: [],
    tags: ['MUKDAHAN SCHOOL']
  },
  {
    id: 'edu-3',
    period: '2011 - 2017',
    title: 'Elementary SaintJosephMukdahan School',
    subtitle: '',
    organization: 'ระดับประถมศึกษา: ประถมศึกษา',
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
    description: 'พัฒนาเว็บแอปพลิเคชันสำหรับรายวิชาและโครงการนวัตกรรม',
    bullets: [
      'พัฒนาเว็บแอปพลิเคชันด้วย React & Node.js',
      'ออกแบบ UI/UX ที่เรียบง่าย มินิมอล สบายตา'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'เว็ปไซต์สัมภาษณ์ด้วย AI (AI Interview)',
    category: 'Academic',
    role: 'Full-Stack Developer',
    responsibility: [
      'ออกแบบระบบ Frontend & Backend',
      'พัฒนาการเชื่อมต่อ AI / Voice API และประมวลผลการตอบคำถามสัมภาษณ์แบบเรียลไทม์'
    ],
    techStack: ['React', 'TypeScript', 'Node.js'],
    description: 'เว็บแอปพลิเคชันจำลองการสัมภาษณ์งานด้วยระบบปัญญาประดิษฐ์ พัฒนาขึ้นเพื่อช่วยผู้หางานและนักศึกษาฝึกซ้อมตอบคำถามสัมภาษณ์แบบเรียลไทม์ พร้อมรับข้อเสนอแนะเพื่อนำไปปรับปรุง ตัวระบบประมวลผลคำถามและคำตอบผ่าน Botnoi Voice / NLP API เพื่อจำลองบรรยากาศการสัมภาษณ์ที่สมจริง',
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
    description: 'เข้าร่วมการแข่งขันพัฒนาซอฟต์แวร์และนำเสนอไอเดียนวัตกรรมดิจิทัล',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    achievement: '🏆 Participant & Innovation Finalist'
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Thailand Cyber Top Talent 2025 (TCTT 2025)',
    issuer: 'NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ',
    issueDate: '2025',
    thumbnail: '/certificates/tctt2025.png',
    tags: ['Cybersecurity', 'CTF', 'TCTT 2025']
  },
  {
    id: 'cert-2',
    title: 'Thailand Cyber Top Talent 2024 (TCTT 2024)',
    issuer: 'NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ',
    issueDate: '2024',
    thumbnail: '/certificates/tctt2024.png',
    tags: ['Cybersecurity', 'TCTT 2024', 'Competition']
  },
  {
    id: 'cert-3',
    title: 'Thailand Cyber Top Talent 2023 (TCTT 2023)',
    issuer: 'NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ',
    issueDate: '2023',
    thumbnail: '/certificates/tctt 2023.png',
    tags: ['Cybersecurity', 'TCTT 2023']
  },
  {
    id: 'cert-4',
    title: 'Hackfinity Cyber Security Competition',
    issuer: 'Hackfinity / Tech Security Network',
    issueDate: '2024',
    thumbnail: '/certificates/hackfinity.png',
    tags: ['Hackfinity', 'Ethical Hacking', 'Security']
  },
  {
    id: 'cert-5',
    title: 'MTYCGT 2025 Youth Cybersecurity Training',
    issuer: 'Ministry of Digital Economy and Society',
    issueDate: '2025',
    thumbnail: '/certificates/MTYCGT2025.png',
    tags: ['Cyber Training', 'Youth Tech', 'MTYCGT']
  },
  {
    id: 'cert-6',
    title: 'NCSA Cybersecurity Intensive Course (28 Hours)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2024',
    thumbnail: '/certificates/NCSA 28 hr.png',
    tags: ['NCSA 28Hr', 'Cyber Training', 'Certificate']
  },
  {
    id: 'cert-7',
    title: 'NCSA Cyber Skill Certificate (21 Hours)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2024',
    thumbnail: '/certificates/NCSA 21 hr.jpg',
    tags: ['NCSA 21Hr', 'Security Certificate']
  },
  {
    id: 'cert-8',
    title: 'NCSA Practical Cyber Defense (20 Hours)',
    issuer: 'National Cyber Security Agency (NCSA)',
    issueDate: '2024',
    thumbnail: '/certificates/NCSA 20 hr.png',
    tags: ['NCSA 20Hr', 'Cyber Defense']
  },
  {
    id: 'cert-9',
    title: 'Senior Cyber Top Talent Recognition',
    issuer: 'NCSA Tech Talent Program',
    issueDate: '2024',
    thumbnail: '/certificates/7.jpg',
    tags: ['Senior Top Talent', 'Cyber Security']
  },
  {
    id: 'cert-10',
    title: 'Cyber Security Achievement Certificate',
    issuer: 'Tech Competition Committee',
    issueDate: '2024',
    thumbnail: '/certificates/22.png',
    tags: ['Achievement', 'Tech Talent']
  }
];

export const CONTACT_DATA = {
  email: 'chakkaphat.luna@gmail.com',
  phone: '0656288987',
  address: '5/4 Mukdahan Patchasumpat Rd.',
  github: 'https://github.com/Chakkaphat0',
  linkedin: 'https://linkedin.com/in/chakkaphat-lunabut'
};
