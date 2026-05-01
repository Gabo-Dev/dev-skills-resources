import { describe, it, expect } from 'vitest';
import { LocalProjectRepository } from './LocalProjectRepository';

describe('LocalProjectRepository', () => {
  const repo = new LocalProjectRepository();

  it('returns all projects', () => {
    const all = repo.getAll();
    expect(all.length).toBeGreaterThan(0);
  });

  it('finds project by id', () => {
    const all = repo.getAll();
    const first = all[0];
    const found = repo.getById(first.id);
    expect(found).toEqual(first);
  });

  it('returns undefined for unknown id', () => {
    expect(repo.getById('nonexistent')).toBeUndefined();
  });
});
