import aliancaPhoto from '../assets/joias/alianca-3.jpg';
import { Counter } from './Counter';

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
          <div className="stat-row">
            <div className="stat"><b><Counter to={4.8} decimals={1} /></b><span>nota no Google</span></div>
            <div className="stat"><b><Counter to={14} /></b><span>avaliações</span></div>
            <div className="stat"><b><Counter to={10} suffix="min" /></b><span>do centro de Campos</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
