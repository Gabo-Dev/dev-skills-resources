import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TopBar } from './TopBar';

describe('TopBar', () => {
  it('renders menu button', () => {
    const onMenu = vi.fn();
    render(<TopBar onMenuClick={onMenu} />);
    const btn = screen.getByLabelText('Open navigation menu');
    fireEvent.click(btn);
    expect(onMenu).toHaveBeenCalled();
  });
});
