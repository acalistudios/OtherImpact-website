import { useEffect } from 'react';

const DEFAULT_TITLE = 'OtherImpact — News moves markets. We map what moves next.';

/** Sets the browser tab title for the page; restores the default on unmount. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · OtherImpact` : DEFAULT_TITLE;
    return () => { document.title = DEFAULT_TITLE; };
  }, [title]);
}
