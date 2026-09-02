import { useState } from 'react';
import { Counter } from './Counter';

const reviewsData = [
  { id: 1, name: "Maria Silva", text: '"Atendimento impecável! Comprei as alianças de casamento e ficaram perfeitas. Muito capricho em cada detalhe, super recomendo o atelier."', rating: 5 },
  { id: 2, name: "João Victor", text: '"Ótima qualidade e preço justo. Fizeram um anel sob medida do jeito que eu queria. Recomendo muito o trabalho da equipe."', rating: 5 },
  { id: 3, name: "Fernanda L.", text: '"As joias são lindas e o atendimento da equipe é excelente. Super atenciosos desde o primeiro contato no WhatsApp até a entrega final."', rating: 5 },
  { id: 4, name: "Carlos E.", text: '"Excelente opção em Campos. Comprei um presente para minha esposa de aniversário e ela adorou. Voltarei com certeza."', rating: 5 },
];

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

  return (
    <section className="reviews" id="avaliacoes">
      <span className="section-label reveal">Reputação</span>
      <h2 className="reveal">O que dizem no Google</h2>
      <div className="review-score reveal">
        <span className="num"><Counter to={4.8} decimals={1} /></span>
        <div style={{ textAlign: 'left' }}>
          <div className="stars">★★★★★</div>
          <div className="count">baseado em 14 avaliações</div>
        </div>
      </div>

      <div className="reviews-carousel wrap reveal">
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

      <div style={{ marginTop: '40px' }}>
        <a className="btn btn-outline" href="https://www.google.com/search?q=saffir+joias+campos+dos+goytacazes" target="_blank" rel="noopener noreferrer">Ler todas as avaliações no Google</a>
      </div>
    </section>
  );
}
