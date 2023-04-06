export interface InfoType {
  full_name: string;
  job_title: string;
  languages: string[];
  address: string;
  telephone: string;
  links: string[];
}

export interface ExperienceType {
  company: string;
  website: string;
  location: string;
  title: string;
  description: string;
  started_at: string;
  ended_at: string;
  tasks: string[];
}
export interface ProjectType {
  title: string;
  date: string;
  tasks: string[];
}
export interface SkillsType {
  category: string;
  skills: string[];
}
export interface CertificationType {
  title: string;
  date: string;
  skills: string[];
}

export interface CVType {
  info: InfoType;
  experiences: ExperienceType[];
  projects: ProjectType[];
  skills: SkillsType[];
  certifications: CertificationType[];
}
