import { useEffect, useState } from 'react';
import solitario from '../assets/joias/solitario.jpg';
import alianca1 from '../assets/joias/alianca-1.jpg';
import alianca4 from '../assets/joias/alianca-4.jpg';
import anelFashion2 from '../assets/joias/anel-fashion-2.jpg';
import relogio4 from '../assets/joias/relogio-4.jpg';

const slides = [
  {
    id: 1,
    title: 'Anéis & Solitários',
    tagline: 'Peças para o dia a dia e para pedir em casamento',
    image: solitario,
  },
  {
    id: 2,
    title: 'Alianças',
    tagline: 'Casamento e compromisso, com gravação sob medida',
    image: alianca1,
  },
  {
    id: 3,
    title: 'Colares',
    tagline: 'Correntes e pingentes em ouro e prata',
    image: alianca4,
  },
  {
    id: 4,
    title: 'Brincos',
    tagline: 'Do clássico ponto de luz ao mais contemporâneo',
    image: anelFashion2,
  },
  {
    id: 5,
    title: 'Relógios',
    tagline: 'Linha completa, masculina e feminina',
    image: relogio4,
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
            <div className="gallery-text">
              <h3>{slide.title}</h3>
              <p>{slide.tagline}</p>
            </div>
            <div className="gallery-photo-frame">
              <img className="gallery-photo" src={slide.image} alt={slide.title} loading="lazy" />
            </div>
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
