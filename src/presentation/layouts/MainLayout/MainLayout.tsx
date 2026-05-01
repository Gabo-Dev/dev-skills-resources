import { useState } from 'react';
import type { ReactNode } from 'react';
import { TopBar } from '@presentation/components/TopBar';
import { Sidebar } from '@presentation/components/Sidebar';
import { Footer } from '@presentation/components/Footer';
import styles from './MainLayout.module.css';

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.app}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <TopBar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
