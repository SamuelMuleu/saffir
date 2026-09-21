import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getCategory } from '../data/collections';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PAGE_SIZE = 8;

export function CategoryPage() {
  const { slug } = useParams();
  const category = getCategory(slug);
  const [searchParams, setSearchParams] = useSearchParams();

  useScrollReveal();

  useDocumentMeta(
    category
      ? `${category.title} | Saffir Joias — Joalheria em Campos dos Goytacazes`
      : 'Categoria não encontrada | Saffir Joias',
    category
      ? `${category.title} da Saffir Joias: ${category.tagline}. Joalheria em Campos dos Goytacazes, no Shopping Pelinca Square Center.`
      : undefined
  );

  if (!category) {
    return (
      <section className="cat-page wrap">
        <p className="cat-empty">Categoria não encontrada.</p>
        <Link className="btn btn-ghost" to="/">Voltar para o início</Link>
      </section>
    );
  }

  const totalPages = Math.max(1, Math.ceil(category.photos.length / PAGE_SIZE));
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const page = Number.isFinite(pageParam) ? Math.min(Math.max(1, pageParam), totalPages) : 1;
  const start = (page - 1) * PAGE_SIZE;
  const pagePhotos = category.photos.slice(start, start + PAGE_SIZE);

  const goToPage = (p: number) => {
    setSearchParams(p === 1 ? {} : { page: String(p) });
  };

  return (
    <section className="cat-page">
      <div className="wrap">
        <Link className="cat-back reveal" to="/#colecoes">← Voltar para coleções</Link>
        <span className="section-label reveal">Coleção</span>
        <h1 className="reveal">{category.title}</h1>
        <p className="cat-tagline reveal">{category.tagline} — {category.photos.length} {category.photos.length === 1 ? 'peça' : 'peças'}</p>

        <div className="cat-grid">
          {pagePhotos.map((photo, i) => {
            const globalIndex = start + i;
            return (
              <Link
                className="cat-item reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
                to={`/colecoes/${category.slug}/${globalIndex}`}
                key={globalIndex}
              >
                <img src={photo} alt={`${category.title} — peça ${globalIndex + 1}`} loading="lazy" />
                <span className="cat-item-overlay">Ver peça</span>
              </Link>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="Página anterior"
            >
              ❮
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`pagination-btn ${p === page ? 'active' : ''}`}
                onClick={() => goToPage(p)}
                aria-label={`Ir para página ${p}`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            ))}
            <button
              className="pagination-btn"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="Próxima página"
            >
              ❯
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
