import { describe, it, expect, vi } from 'vitest';
import { GetProjectById } from './GetProjectById';
import type { ProjectRepository } from '@domain/project/ProjectRepository';
import type { Project } from '@domain/project/Project';

describe('GetProjectById', () => {
  it('returns project by id', () => {
    const project: Project = {
      id: 'abc',
      title: 'P1',
      capability: 'perf',
      framework: 'react',
      artifact: 'bench',
      description: 'd',
      deployment: 'gh',
      tooling: [],
      evaluation: { type: 'metrics', data: [] },
      links: [],
    };

    const repo: ProjectRepository = {
      getAll: vi.fn(),
      getById: vi.fn((id) => (id === 'abc' ? project : undefined)),
    };

    const useCase = new GetProjectById(repo);
    expect(useCase.execute('abc')).toEqual(project);
    expect(repo.getById).toHaveBeenCalledWith('abc');
  });

  it('returns undefined when not found', () => {
    const repo: ProjectRepository = {
      getAll: vi.fn(),
      getById: vi.fn(() => undefined),
    };

    const useCase = new GetProjectById(repo);
    expect(useCase.execute('missing')).toBeUndefined();
  });
});
