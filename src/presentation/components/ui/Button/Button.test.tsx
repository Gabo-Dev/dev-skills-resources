import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick', () => {
    const handle = vi.fn();
    render(<Button onClick={handle}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handle).toHaveBeenCalledTimes(1);
  });
});
