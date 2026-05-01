import { useMemo } from 'react';
import { GetAllProjects } from '@application/project/GetAllProjects';
import { GetProjectById } from '@application/project/GetProjectById';
import { LocalProjectRepository } from '@infrastructure/project/LocalProjectRepository';

const repository = new LocalProjectRepository();
const getAll = new GetAllProjects(repository);
const getById = new GetProjectById(repository);

export function useProjects() {
  const projects = useMemo(() => getAll.execute(), []);

  function findById(id: string) {
    return getById.execute(id);
  }

  return { projects, findById };
}
