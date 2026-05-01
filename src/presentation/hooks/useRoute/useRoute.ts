import { useState, useEffect } from 'react';

export type Route =
  | { name: 'home'; params: {} }
  | { name: 'projects'; params: {} }
  | { name: 'project'; params: { id: string } };

function parseHash(hash: string): Route {
  const clean = hash.replace('#', '');
  if (clean.startsWith('project/')) {
    const id = clean.replace('project/', '');
    return { name: 'project', params: { id } };
  }
  if (clean === 'projects') return { name: 'projects', params: {} };
  return { name: 'home', params: {} };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handler = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return route;
}

export function navigateTo(route: Route['name'], id?: string): void {
  if (route === 'project' && id) {
    window.location.hash = `project/${id}`;
  } else {
    window.location.hash = route;
  }
}
