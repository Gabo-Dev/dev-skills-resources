export interface Project {
  id: string;
  title: string;
  capability: string;
  framework: string;
  artifact: string;
  description: string;
  deployment: string;
  tooling: ToolingItem[];
  evaluation: Evaluation;
  links: Link[];
}

export interface ToolingItem {
  name: string;
  description: string;
  link: string;
  install: string;
}

export interface Evaluation {
  type: 'metrics' | 'table';
  data: Metric[];
  headers?: string[];
  rows?: string[][];
}

export interface Metric {
  label: string;
  value: string;
  unit: string;
  status: 'good' | 'warning' | 'bad';
  context: string;
}

export interface Link {
  label: string;
  url: string;
}
