import aliancaPhoto from '../assets/joias/alianca-3.jpg';

export function About() {
  return (
    <section className="about" id="sobre">
      <div className="wrap">
        <div className="reveal">
          <span className="section-label">Sobre o atelier</span>
          <h2>Joias pensadas peça a peça</h2>
          <img className="about-photo" src={aliancaPhoto} alt="Par de alianças Saffir Joias" loading="lazy" />
        </div>
        <div className="about-copy reveal reveal-delay-1">
          <p>A Saffir Joias é um atelier de joias em Campos dos Goytacazes, dentro do Shopping Pelinca Square Center. O trabalho é conduzido com foco em qualidade de material, acabamento e atendimento próximo — do primeiro contato até a entrega da peça.</p>
          <p>O catálogo reúne desde alianças e solitários até relógios e peças masculinas, com opções para quem busca uma joia do dia a dia e para ocasiões especiais.</p>
        </div>
      </div>
    </section>
  );
}
