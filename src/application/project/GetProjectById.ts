import type { ProjectRepository } from '@domain/project/ProjectRepository';
import type { Project } from '@domain/project/Project';

export class GetProjectById {
  constructor(private readonly repository: ProjectRepository) {}

  execute(id: string): Project | undefined {
    return this.repository.getById(id);
  }
}
