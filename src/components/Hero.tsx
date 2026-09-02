import heroPhoto from '../assets/joias/solitario.jpg';

export function Hero() {
  return (
    <section className="hero">
      <img className="hero-photo" src={heroPhoto} alt="Solitário Saffir Joias" />
      <div className="hero-scrim" />
      <div className="wrap hero-content reveal">
        <h1>Investir em detalhes<br />é investir em <em>você</em>.</h1>
        <div className="hero-actions">
          <a className="btn btn-primary" href="https://wa.me/5522998371359" target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a>
          <a className="btn btn-ghost" href="#colecoes">Ver coleções</a>
        </div>
      </div>
    </section>
  );
}
