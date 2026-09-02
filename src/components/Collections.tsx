import { Link } from 'react-router-dom';
import { categories } from '../data/collections';

export function Collections() {
  return (
    <section className="collections" id="colecoes">
      <div className="wrap">
        <span className="section-label reveal">Coleções</span>
        <h2 className="reveal">O que você encontra na Saffir</h2>
        <p className="sub reveal">Categorias organizadas para facilitar a visita — confira o que está disponível antes de ir até a loja.</p>
        <div className="coll-grid">
          {categories.map((cat, idx) => (
            <Link
              className="coll-card reveal"
              style={{ transitionDelay: `${idx * 0.08}s` }}
              key={cat.slug}
              to={`/colecoes/${cat.slug}`}
              aria-label={`Ver fotos de ${cat.title}`}
            >
              <div className="coll-photo-frame">
                <img className="coll-photo" src={cat.cover} alt={cat.title} loading="lazy" />
              </div>
              <div className="coll-card-text">
                <h3>{cat.title}</h3>
                <span>{cat.tagline}</span>
                {cat.photos.length > 1 && <span className="coll-card-hint">Ver {cat.photos.length} fotos →</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
