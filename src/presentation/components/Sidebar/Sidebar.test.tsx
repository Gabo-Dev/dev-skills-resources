import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders when open', () => {
    render(<Sidebar isOpen={true} onClose={vi.fn()} />);
    expect(screen.getByText('dev')).toBeInTheDocument();
  });

  it('calls onClose when overlay clicked', () => {
    const onClose = vi.fn();
    const { container } = render(<Sidebar isOpen={true} onClose={onClose} />);
    const overlay = container.querySelector('[class*="overlay"]');
    if (overlay) fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalled();
  });
});
