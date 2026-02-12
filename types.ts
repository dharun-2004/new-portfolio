
export interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
  description?: string;
}

export interface Qualification {
  id: string;
  title: string;
  institution: string;
  university?: string;
  period: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface CategoryCard {
  title: string;
  items: string[];
}
