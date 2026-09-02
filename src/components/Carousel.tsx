import { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'Anéis & Solitários',
    tagline: 'Peças para o dia a dia e para pedir em casamento',
    icon: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <circle cx="44" cy="52" r="24" stroke="#d8bd93" strokeWidth="1.6" />
        <path d="M44 28 L54 40 L44 34 L34 40 Z" stroke="#d8bd93" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(216,189,147,0.14)" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Alianças',
    tagline: 'Casamento e compromisso, com gravação sob medida',
    icon: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <circle cx="36" cy="48" r="20" stroke="#d8bd93" strokeWidth="1.6" />
        <circle cx="56" cy="48" r="20" stroke="#d8bd93" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Colares',
    tagline: 'Correntes e pingentes em ouro e prata',
    icon: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <path d="M20 24 Q44 62 68 24" stroke="#d8bd93" strokeWidth="1.6" fill="none" />
        <path d="M40 58 L44 68 L48 58 Z" stroke="#d8bd93" strokeWidth="1.6" strokeLinejoin="round" fill="rgba(216,189,147,0.14)" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Brincos',
    tagline: 'Do clássico ponto de luz ao mais contemporâneo',
    icon: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <circle cx="34" cy="30" r="6" stroke="#d8bd93" strokeWidth="1.6" />
        <path d="M34 36 L34 58" stroke="#d8bd93" strokeWidth="1.6" />
        <path d="M28 58 Q34 70 40 58 Z" stroke="#d8bd93" strokeWidth="1.6" fill="rgba(216,189,147,0.14)" />
        <circle cx="58" cy="30" r="6" stroke="#d8bd93" strokeWidth="1.6" />
        <path d="M58 36 L58 58" stroke="#d8bd93" strokeWidth="1.6" />
        <path d="M52 58 Q58 70 64 58 Z" stroke="#d8bd93" strokeWidth="1.6" fill="rgba(216,189,147,0.14)" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Relógios',
    tagline: 'Linha completa, masculina e feminina',
    icon: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <circle cx="44" cy="46" r="22" stroke="#d8bd93" strokeWidth="1.6" />
        <path d="M44 34 L44 46 L54 50" stroke="#d8bd93" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M38 24 L50 24 M38 68 L50 68" stroke="#d8bd93" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="gallery-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div className="gallery-slide" key={slide.id}>
            <div className="gallery-icon">{slide.icon}</div>
            <h3>{slide.title}</h3>
            <p>{slide.tagline}</p>
          </div>
        ))}
      </div>

      <button className="gallery-arrow gallery-arrow-prev" onClick={prev} aria-label="Slide anterior">❮</button>
      <button className="gallery-arrow gallery-arrow-next" onClick={next} aria-label="Próximo slide">❯</button>

      <div className="gallery-dots">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para ${slide.title}`}
          />
        ))}
      </div>
    </section>
  );
}
