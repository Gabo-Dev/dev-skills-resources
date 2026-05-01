import type { Project } from '@domain/project/Project';

export const designMdLandingEval: Project = {
  id: 'design-md-landing-eval',
  title: 'design-md-landing-eval',
  capability: 'performance',
  framework: 'react',
  artifact: 'benchmark',
  description: 'Landing page evaluated with Scry for web auditing across SEO, performance, security, and accessibility metrics.',
  deployment: 'GitHub Pages',
  tooling: [
    { name: 'Scry', description: 'Web auditing CLI', link: 'https://github.com/meysam81/scry', install: 'go install github.com/meysam81/scry@latest' },
    { name: 'React', description: 'UI Framework', link: 'https://react.dev/', install: 'npm create vite@latest' },
    { name: 'TypeScript', description: 'Type safety', link: 'https://www.typescriptlang.org/', install: 'npm install -D typescript' },
  ],
  evaluation: {
    type: 'metrics',
    data: [
      { label: 'Performance', value: '96', unit: '/100', status: 'good', context: 'Lighthouse' },
      { label: 'Accessibility', value: '100', unit: '/100', status: 'good', context: 'Lighthouse' },
      { label: 'SEO', value: '92', unit: '/100', status: 'good', context: 'Lighthouse' },
      { label: 'Best Practices', value: '100', unit: '/100', status: 'good', context: 'Lighthouse' },
      { label: 'FCP', value: '0.8', unit: 's', status: 'good', context: 'First Contentful Paint' },
      { label: 'LCP', value: '1.2', unit: 's', status: 'good', context: 'Largest Contentful Paint' },
      { label: 'CLS', value: '0.02', unit: '', status: 'good', context: 'Cumulative Layout Shift' },
      { label: 'TBT', value: '45', unit: 'ms', status: 'good', context: 'Total Blocking Time' },
    ],
  },
  links: [
    { label: 'GitHub Repo', url: 'https://github.com/Gabo-Dev/dev-skills-resources' },
    { label: 'Live Demo', url: 'https://gabo-dev.github.io/dev-skills-capabilities-/performance/design-md-landing-eval/' },
    { label: 'Scry Report', url: '#' },
  ],
};
