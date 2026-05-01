import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ToolingItem } from './ToolingItem';
import type { ToolingItem as ToolingItemType } from '@domain/project/Project';

const mockItem: ToolingItemType = {
  name: 'React',
  description: 'UI Framework',
  link: 'https://react.dev',
  install: 'npm install react',
};

describe('ToolingItem', () => {
  it('renders tooling info', () => {
    render(<ToolingItem item={mockItem} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('UI Framework')).toBeInTheDocument();
  });
});
