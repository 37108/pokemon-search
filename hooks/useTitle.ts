import { useEffect } from 'react';

/**
 * similar: react-metatags-hook
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
