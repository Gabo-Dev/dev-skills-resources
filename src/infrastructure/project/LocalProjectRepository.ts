import type { ProjectRepository } from '@domain/project/ProjectRepository';
import type { Project } from '@domain/project/Project';
import { projects } from '../../projects';

export class LocalProjectRepository implements ProjectRepository {
  getAll(): Project[] {
    return projects;
  }

  getById(id: string): Project | undefined {
    return projects.find((p: Project) => p.id === id);
  }
}
