export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  details?: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
}
