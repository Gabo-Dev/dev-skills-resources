import type { Project } from './Project';

export interface ProjectRepository {
  getAll(): Project[];
  getById(id: string): Project | undefined;
}
