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
    title: 'เว็ปไซต์ฝึกสัมภาษณ์งานด้วย AI (AI Interview Simulator)',
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
    year: '2025',
    category: 'Competition',
    teamName: 'Tactical Sword',
    rank: 'ระดับประชาชน (Senior Category)',
    scoreUrl: 'https://cloud.ctf.in.th/score/?status=finished',
    thumbnail: '/certificates/tctt2025.png',
    tags: ['Cybersecurity', 'CTF', 'Web Hacking', 'Reverse Engineering'],
    description: 'การแข่งขัน Capture The Flag (CTF) ระดับประเทศที่ใหญ่ที่สุด จัดโดย สกมช. (NCSA) ร่วมกับ Huawei ทดสอบทักษะการแก้โจทย์ไซเบอร์ เช่น Web Security, Cryptography, Reverse Engineering, Forensics และ Network Security ภายใต้ชื่อทีม Tactical Sword ในระดับ Senior'
  },
  {
    id: 'cert-2',
    title: 'Thailand Cyber Top Talent 2024 (TCTT 2024)',
    issuer: 'NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ',
    issueDate: '2024',
    year: '2024',
    category: 'Competition',
    teamName: 'Tactical Sword',
    rank: 'ระดับประชาชน (Senior Category)',
    scoreUrl: 'https://cloud.ctf.in.th/score/?status=finished',
    thumbnail: '/certificates/tctt2024.png',
    tags: ['Cybersecurity', 'TCTT 2024', 'Competition'],
    description: 'การแข่งขันคัดเลือกตัวแทนสุดยอดอัจฉริยะไซเบอร์ระดับประเทศ (Senior Level) ฝึกแก้ไขโจทย์ท้าทายความปลอดภัยระบบดิจิทัลและการป้องกันการโจมตีทางไซเบอร์ในสถานการณ์จำลองแบบ Jeopardy CTF ภายใต้ทีม Tactical Sword'
  },
  {
    id: 'cert-3',
    title: 'Thailand Cyber Top Talent 2023 (TCTT 2023)',
    issuer: 'NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ',
    issueDate: '2023',
    year: '2023',
    category: 'Competition',
    teamName: 'Tactical Sword',
    rank: 'ระดับประชาชน (Senior Category)',
    scoreUrl: 'https://cloud.ctf.in.th/score/?status=finished',
    thumbnail: '/certificates/tctt 2023.png',
    tags: ['Cybersecurity', 'TCTT 2023'],
    description: 'การแข่งขัน Capture The Flag เพื่อพัฒนาศักยภาพบุคลากรความมั่นคงปลอดภัยไซเบอร์ของประเทศไทย ครอบคลุมการวิเคราะห์ Malware, Digital Forensics, Exploitation และ Cryptography ภายใต้ทีม Tactical Sword'
  },
  {
    id: 'cert-4',
    title: 'Hackfinity Battle',
    issuer: 'HackTheBox',
    issueDate: '2024',
    year: '2024',
    category: 'Competition',
    teamName: 'Tactical Sword',
    rank: 'Cyber Security Challenger',
    scoreUrl: 'https://cloud.ctf.in.th/score/?status=finished',
    thumbnail: '/certificates/hackfinity.png',
    tags: ['Hackfinity', 'Ethical Hacking', 'Security'],
    description: 'การแข่งขันจำลองการเจาะระบบและทดสอบความแข็งแกร่งทางไซเบอร์ (Ethical Hacking & Penetration Testing) โดยผู้แข่งต้องหาช่องโหว่ของเซิร์ฟเวอร์ระบบปฏิบัติการ Linux และ Windows เพื่อยึดสิทธิ์ Root/Administrator'
  },
  {
    id: 'cert-5',
    title: 'Meet The Youth Cyber Guardians Thailand 2025',
    issuer: 'Royal Thai Armed Forces Cyber Command',
    issueDate: '2025',
    year: '2025',
    category: 'Workshop',
    rank: 'Youth Cyber Guardian',
    thumbnail: '/certificates/MTYCGT2025.png',
    tags: ['Cyber Training', 'Youth Tech', 'MTYCGT'],
    description: 'โครงการอบรมเชิงปฏิบัติการยกระดับเยาวชนผู้เชี่ยวชาญด้านความมั่นคงปลอดภัยไซเบอร์ (MTYCGT 2025) เน้นความรู้ด้าน Incident Response, Threat Intelligence, SOC Analysis และกฎหมายความมั่นคงไซเบอร์'
  },
  {
    id: 'cert-6',
    title: 'NCSA e-Learning Penetration Test (28 Hours)',
    issuer: 'NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ',
    issueDate: '2024',
    year: '2024',
    category: 'Course',
    rank: 'Pass (28 Hours Intensive Training)',
    thumbnail: '/certificates/NCSA 28 hr.png',
    tags: ['NCSA 28Hr', 'Cyber Training', 'Certificate'],
    description: 'หลักสูตรอบรมเข้มข้น 28 ชั่วโมง ด้านการทดสอบเจาะระบบ (Penetration Testing) และการประเมินช่องโหว่ (Vulnerability Assessment) ครอบคลุม OWASP Top 10, Web Exploit, Privilege Escalation และการเขียนรายงานความเสี่ยง'
  },
  {
    id: 'cert-7',
    title: 'NCSA e-Learning Cybersecurity Foundation Course (21 Hours)',
    issuer: 'NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ',
    issueDate: '2024',
    year: '2024',
    category: 'Course',
    rank: 'Pass (21 Hours Certificate)',
    thumbnail: '/certificates/NCSA 21 hr.jpg',
    tags: ['NCSA 21Hr', 'Security Certificate'],
    description: 'หลักสูตรปูพื้นฐานความมั่นคงปลอดภัยไซเบอร์ระดับชาติ 21 ชั่วโมง เรียนรู้โครงสร้างสถาปัตยกรรมความปลอดภัยเครือข่าย Cryptography, Access Control และมาตรฐาน ISO/IEC 27001'
  },
  {
    id: 'cert-8',
    title: 'NCSA e-Learning Professional Course (20 Hours)',
    issuer: 'NCSA / สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ',
    issueDate: '2024',
    year: '2024',
    category: 'Course',
    rank: 'Pass (20 Hours Certificate)',
    thumbnail: '/certificates/NCSA 20 hr.png',
    tags: ['NCSA 20Hr', 'Cyber Defense'],
    description: 'หลักสูตรการตั้งค่าระบบและรับมือภัยคุกคามไซเบอร์เชิงปฏิบัติการ 20 ชั่วโมง มุ่งเน้นการกำหนดนโยบายความปลอดภัย Hardening OS/Server การใช้วิธีป้องกัน Ransomware และการกำกับดูแลกฎหมาย PDPA/NCSA Act'
  },
  {
    id: 'cert-9',
    title: 'AI MINI HACKATON 2026',
    issuer: 'Bangkok University',
    issueDate: '2026',
    year: '2026',
    category: 'Competition',
    teamName: 'Bangkok University Team',
    rank: 'AI Innovation Hackathon Finalist',
    thumbnail: '/certificates/7.jpg',
    tags: ['Senior Top Talent', 'Cyber Security'],
    description: 'การแข่งขันแฮกกาธอนประยุกต์ใช้ปัญญาประดิษฐ์และนวัตกรรมดิจิทัล (AI Mini Hackathon 2026) เพื่อแก้โจทย์ธุรกิจและปัญหาสังคมจริงด้วยโมเดล AI และเทคโนโลยี Web Full-Stack'
  },
  {
    id: 'cert-10',
    title: 'BU-ITI CTF COMPETITION 2025',
    issuer: 'Bangkok University',
    issueDate: '2025',
    year: '2025',
    category: 'Competition',
    teamName: 'Tactical Sword',
    rank: 'CTF Winner / Top Competitor',
    thumbnail: '/certificates/22.png',
    tags: ['Achievement', 'Tech Talent'],
    description: 'การแข่งขันประลองทักษะด้านไซเบอร์และการเจาะระบบภายในมหาวิทยาลัยกรุงเทพ (BU-ITI CTF 2025) ทดสอบความเชี่ยวชาญการถอดรหัส แกะรอยดิจิทัลฟอเรนสิกส์ และการค้นหาช่องโหว่ Flag'
  }
];

export const CONTACT_DATA = {
  email: 'chakkaphat.luna@gmail.com',
  phone: '0656288987',
  address: '5/4 Mukdahan Patchasumpat Rd.',
  github: 'https://github.com/Chakkaphat0',
  linkedin: 'https://linkedin.com/in/chakkaphat-lunabut'
};
