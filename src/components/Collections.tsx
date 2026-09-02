const categories = [
  {
    title: 'Alianças',
    tagline: 'Casamento e compromisso',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="12" cy="16" r="7" stroke="#d8bd93" strokeWidth="1.3" />
        <circle cx="19" cy="16" r="7" stroke="#d8bd93" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: 'Anéis',
    tagline: 'Peças do dia a dia',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="18" r="8" stroke="#d8bd93" strokeWidth="1.3" />
        <path d="M15 10 L19 15 L15 13 L11 15 Z" stroke="#d8bd93" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(216,189,147,0.14)" />
      </svg>
    ),
  },
  {
    title: 'Solitários',
    tagline: 'Noivado',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="19" r="7" stroke="#d8bd93" strokeWidth="1.3" />
        <path d="M15 8 L20 13 L17 14.5 L15 12.5 L13 14.5 L10 13 Z" stroke="#d8bd93" strokeWidth="1.3" strokeLinejoin="round" fill="rgba(216,189,147,0.14)" />
      </svg>
    ),
  },
  {
    title: 'Relógios',
    tagline: 'Linha completa',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="16" r="8" stroke="#d8bd93" strokeWidth="1.3" />
        <path d="M15 11 L15 16 L19.5 18.5" stroke="#d8bd93" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M12 6 L18 6 M12 26 L18 26" stroke="#d8bd93" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: 'Masculino',
    tagline: 'Joias e acessórios',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="8" y="12" width="14" height="10" rx="1" stroke="#d8bd93" strokeWidth="1.3" />
        <path d="M11 12 V9 a4 4 0 0 1 8 0 v3" stroke="#d8bd93" strokeWidth="1.3" />
      </svg>
    ),
  },
];

export function Collections() {
  return (
    <section className="collections" id="colecoes">
      <div className="wrap">
        <span className="section-label reveal">Coleções</span>
        <h2 className="reveal">O que você encontra na Saffir</h2>
        <p className="sub reveal">Categorias organizadas para facilitar a visita — confira o que está disponível antes de ir até a loja.</p>
        <div className="coll-grid">
          {categories.map((cat, idx) => (
            <div className="coll-card reveal" style={{ transitionDelay: `${idx * 0.08}s` }} key={cat.title}>
              <span className="ph-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
              <span>{cat.tagline}</span>
            </div>
          ))}
        </div>
        <p className="coll-note">Fotos das peças serão adicionadas em breve. As categorias já refletem o catálogo real da loja.</p>
      </div>
    </section>
  );
}
