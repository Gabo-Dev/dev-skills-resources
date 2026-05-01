import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders text', () => {
    render(<Tag>react</Tag>);
    expect(screen.getByText('react')).toBeInTheDocument();
  });
});
