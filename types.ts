
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  tech: string[];
}

export interface Skill {
  name: string;
  level: string;
  category: 'frontend' | 'backend' | 'devops';
}
