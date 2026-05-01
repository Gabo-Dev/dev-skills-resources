import { describe, it, expect } from 'vitest';
import type { Project, Metric } from './Project';

describe('Project types', () => {
  it('can create a valid project', () => {
    const project: Project = {
      id: 'test',
      title: 'Test',
      capability: 'performance',
      framework: 'react',
      artifact: 'benchmark',
      description: 'Desc',
      deployment: 'Vercel',
      tooling: [],
      evaluation: { type: 'metrics', data: [] },
      links: [],
    };
    expect(project.id).toBe('test');
  });

  it('can create a metric', () => {
    const metric: Metric = {
      label: 'Perf',
      value: '96',
      unit: '/100',
      status: 'good',
      context: 'Lighthouse',
    };
    expect(metric.status).toBe('good');
  });
});
