import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useRoute, navigateTo } from './useRoute';

describe('useRoute', () => {
  beforeEach(() => {
    window.location.hash = '';
  });

  it('defaults to home', () => {
    const { result } = renderHook(() => useRoute());
    expect(result.current.name).toBe('home');
  });

  it('parses project route', () => {
    window.location.hash = '#project/abc';
    const { result } = renderHook(() => useRoute());
    expect(result.current.name).toBe('project');
    expect(result.current.params).toEqual({ id: 'abc' });
  });
});

describe('navigateTo', () => {
  it('sets hash for projects', () => {
    navigateTo('projects');
    expect(window.location.hash).toBe('#projects');
  });

  it('sets hash for project with id', () => {
    navigateTo('project', 'test-id');
    expect(window.location.hash).toBe('#project/test-id');
  });
});
