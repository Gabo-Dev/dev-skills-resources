import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useProjects } from './useProjects';

describe('useProjects', () => {
  it('returns all projects', () => {
    const { result } = renderHook(() => useProjects());
    expect(result.current.projects.length).toBeGreaterThan(0);
  });

  it('finds project by id', () => {
    const { result } = renderHook(() => useProjects());
    const first = result.current.projects[0];
    const found = result.current.findById(first.id);
    expect(found).toEqual(first);
  });

  it('returns undefined for unknown id', () => {
    const { result } = renderHook(() => useProjects());
    expect(result.current.findById('nope')).toBeUndefined();
  });
});
