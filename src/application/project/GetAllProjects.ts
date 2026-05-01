import type { ProjectRepository } from '@domain/project/ProjectRepository';
import type { Project } from '@domain/project/Project';

export class GetAllProjects {
  constructor(private readonly repository: ProjectRepository) {}

  execute(): Project[] {
    return this.repository.getAll();
  }
}
