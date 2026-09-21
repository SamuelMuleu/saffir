import { useState } from 'react';
import googleReviews from '../data/google-reviews.json';
import { useSwipe } from '../hooks/useSwipe';

const reviewsData = googleReviews.reviews;

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const setReview = (index: number) => {
    setCurrentIndex(index);
  };

  const swipe = useSwipe(nextReview, prevReview);

  return (
    <section className="reviews" id="avaliacoes">
      <h2 className="reveal">O que dizem no Google</h2>

      {reviewsData.length > 0 && (
        <div
          className="reviews-carousel wrap reveal"
          onTouchStart={swipe.onTouchStart}
          onTouchMove={swipe.onTouchMove}
          onTouchEnd={swipe.onTouchEnd}
        >
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviewsData.map((review) => (
              <div className="carousel-slide" key={review.id}>
                <div className="stars" style={{ color: 'var(--brass)', marginBottom: '12px', fontSize: '1.2rem' }}>
                  {"★".repeat(review.rating)}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-author-row">
                  <span className="review-avatar">{review.name.charAt(0)}</span>
                  <div className="review-author">{review.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevReview} aria-label="Avaliação anterior">
              ❮
            </button>
            <div className="carousel-dots">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setReview(idx)}
                  aria-label={`Ir para avaliação ${idx + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={nextReview} aria-label="Próxima avaliação">
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
