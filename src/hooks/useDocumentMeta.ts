import { useEffect } from 'react';

/**
 * Define <title> e a meta description da página enquanto o componente está montado,
 * restaurando os valores anteriores (definidos em index.html) ao desmontar.
 *
 * O site é uma SPA sem SSR/prerender, então isso não substitui uma solução de
 * server-side rendering para SEO "de verdade" — mas dá a cada rota um título e
 * descrição únicos para quando o Googlebot renderiza o JS, e para compartilhamentos
 * feitos a partir da própria página (histórico do navegador, etc.).
 */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = description
      ? document.querySelector<HTMLMetaElement>('meta[name="description"]')
      : null;
    const previousDescription = descriptionTag?.getAttribute('content') ?? null;

    if (descriptionTag && description) {
      descriptionTag.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription !== null) {
        descriptionTag.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
