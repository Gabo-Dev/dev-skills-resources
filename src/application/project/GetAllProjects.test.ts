import { describe, it, expect, vi } from 'vitest';
import { GetAllProjects } from './GetAllProjects';
import type { ProjectRepository } from '@domain/project/ProjectRepository';
import type { Project } from '@domain/project/Project';

describe('GetAllProjects', () => {
  it('returns all projects from repository', () => {
    const mockProjects: Project[] = [
      {
        id: '1',
        title: 'P1',
        capability: 'perf',
        framework: 'react',
        artifact: 'bench',
        description: 'd',
        deployment: 'gh',
        tooling: [],
        evaluation: { type: 'metrics', data: [] },
        links: [],
      },
    ];

    const repo: ProjectRepository = {
      getAll: vi.fn(() => mockProjects),
      getById: vi.fn(),
    };

    const useCase = new GetAllProjects(repo);
    expect(useCase.execute()).toEqual(mockProjects);
    expect(repo.getAll).toHaveBeenCalledTimes(1);
  });
});
