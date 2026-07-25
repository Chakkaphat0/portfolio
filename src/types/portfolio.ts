export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Intermediate' | 'Learning';
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Client' | 'Personal' | 'Academic' | 'Hackathon';
  role: string;
  responsibility: string[];
  techStack: string[];
  description: string;
  coverImage: string;
  images: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  featured?: boolean;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  organization: string;
  description: string;
  bullets?: string[];
  tags?: string[];
}

export interface Activity {
  id: string;
  title: string;
  category: 'Competition' | 'Club' | 'Conference';
  date: string;
  role: string;
  organization: string;
  description: string;
  image: string;
  achievement?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  year: '2026' | '2025' | '2024' | '2023';
  credentialUrl?: string;
  thumbnail: string;
  tags: string[];
  description?: string;
  teamName?: string;
  username?: string;
  category?: 'Competition' | 'Course' | 'Workshop' | 'Achievement';
  rank?: string;
  scoreUrl?: string;
}
