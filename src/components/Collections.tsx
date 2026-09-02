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
              <img className="coll-photo" src={cat.cover} alt={cat.title} loading="lazy" />
              <div className="coll-card-text">
                <h3>{cat.title}</h3>
                <span>{cat.tagline}</span>
                {cat.photos.length > 1 && <span className="coll-card-hint">Ver {cat.photos.length} fotos →</span>}
              </div>
            </Link>
          ))}
        </div>
        <p className="coll-note">Catálogo completo disponível na loja — <a href="https://wa.me/5522998371359" target="_blank" rel="noopener noreferrer">fale com a gente no WhatsApp</a> para ver fotos das peças antes de visitar.</p>
      </div>
    </section>
  );
}
