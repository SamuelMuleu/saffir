import { useEffect, useState } from 'react';
import { useSwipe } from '../hooks/useSwipe';

const campanhaImages = import.meta.glob('../assets/joias/campanha-*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const slides = Object.keys(campanhaImages)
  .sort()
  .map((path) => campanhaImages[path]);

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

  const swipe = useSwipe(next, prev);

  return (
    <section
      className="gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => { setIsPaused(true); swipe.onTouchStart(e); }}
      onTouchMove={swipe.onTouchMove}
      onTouchEnd={() => { swipe.onTouchEnd(); setIsPaused(false); }}
    >
      <div className="gallery-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((image, idx) => (
          <div className="gallery-slide" key={image}>
            <div className="gallery-photo-frame">
              <img className="gallery-photo-bg" src={image} alt="" aria-hidden="true" loading="lazy" />
              <img className="gallery-photo" src={image} alt={`Saffir Joias ${idx + 1}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      <button className="gallery-arrow gallery-arrow-prev" onClick={prev} aria-label="Slide anterior">❮</button>
      <button className="gallery-arrow gallery-arrow-next" onClick={next} aria-label="Próximo slide">❯</button>

      <div className="gallery-dots">
        {slides.map((image, idx) => (
          <button
            key={image}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
