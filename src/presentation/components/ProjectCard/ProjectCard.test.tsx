import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@domain/project/Project';

const mockProject: Project = {
  id: 'test',
  title: 'Test Project',
  capability: 'perf',
  framework: 'react',
  artifact: 'bench',
  description: 'A test project',
  deployment: 'Vercel',
  tooling: [],
  evaluation: { type: 'metrics', data: [] },
  links: [],
};

describe('ProjectCard', () => {
  it('renders project info', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project')).toBeInTheDocument();
  });
});
