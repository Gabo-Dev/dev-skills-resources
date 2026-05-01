import { useMemo } from 'react';
import { MainLayout } from '@presentation/layouts/MainLayout';
import { HomePage } from '@presentation/pages/HomePage';
import { ProjectsPage } from '@presentation/pages/ProjectsPage';
import { ProjectDetailPage } from '@presentation/pages/ProjectDetailPage';
import { useRoute } from '@presentation/hooks/useRoute';

function App() {
  const route = useRoute();

  const content = useMemo(() => {
    if (route.name === 'home') return <HomePage />;
    if (route.name === 'projects') return <ProjectsPage />;
    if (route.name === 'project') return <ProjectDetailPage id={route.params.id} />;
    return <HomePage />;
  }, [route]);

  return <MainLayout>{content}</MainLayout>;
}

export default App;
