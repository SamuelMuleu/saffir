import { Link, useParams } from 'react-router-dom';
import { getCategory } from '../data/collections';

export function ItemPage() {
  const { slug, itemIndex } = useParams();
  const category = getCategory(slug);
  const index = parseInt(itemIndex || '', 10);
  const photo = category && Number.isFinite(index) ? category.photos[index] : undefined;

  if (!category || !photo) {
    return (
      <section className="item-page wrap">
        <p className="cat-empty">Peça não encontrada.</p>
        <Link className="btn btn-ghost" to="/">Voltar para o início</Link>
      </section>
    );
  }

  const itemLabel = `${category.title} — peça ${index + 1}`;
  const waMessage = encodeURIComponent(`Olá! Tenho interesse nesta peça: ${itemLabel}. Vi no site da Saffir.`);
  const waLink = `https://wa.me/5522998371359?text=${waMessage}`;

  const hasPrev = index > 0;
  const hasNext = index < category.photos.length - 1;

  return (
    <section className="item-page">
      <div className="wrap">
        <Link className="cat-back" to={`/colecoes/${category.slug}`}>← Voltar para {category.title}</Link>

        <div className="item-detail">
          <div className="item-photo-frame">
            <img src={photo} alt={itemLabel} />
          </div>
          <div className="item-info">
            <span className="section-label">{category.title}</span>
            <h1>Peça {index + 1}</h1>
            <p className="item-tagline">{category.tagline}</p>
            <p className="item-note">Peça disponível no atelier — confirme detalhes, tamanho e valor com a gente antes de visitar.</p>
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noopener noreferrer">
              Perguntar sobre esta peça no WhatsApp
            </a>

            <div className="item-nav">
              {hasPrev ? (
                <Link className="item-nav-link" to={`/colecoes/${category.slug}/${index - 1}`}>❮ Peça anterior</Link>
              ) : <span />}
              {hasNext ? (
                <Link className="item-nav-link" to={`/colecoes/${category.slug}/${index + 1}`}>Próxima peça ❯</Link>
              ) : <span />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
