import { create } from 'zustand';

type Lang = 'en' | 'es';

interface LangState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangState>((set) => ({
  lang: 'en',
  setLang: (lang) => set({ lang }),
}));
