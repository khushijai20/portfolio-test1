export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  tagline: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  status: 'Completed' | 'Upcoming' | 'Pursuing';
  details: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
  education: Array<{
    degree: string;
    institution: string;
    duration: string;
    score?: string;
    details: string[];
  }>;
  skillsList: Array<{
    category: string;
    items: string[];
  }>;
  projects: Array<{
    name: string;
    role: string;
    duration: string;
    tech: string;
    highlights: string[];
  }>;
  certifications: string[];
}
