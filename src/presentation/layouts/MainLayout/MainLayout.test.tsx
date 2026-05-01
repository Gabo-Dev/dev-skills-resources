import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainLayout } from './MainLayout';

describe('MainLayout', () => {
  it('renders children', () => {
    render(
      <MainLayout>
        <div data-testid="child">Hello</div>
      </MainLayout>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('has skip link', () => {
    render(<MainLayout><div /></MainLayout>);
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });
});
