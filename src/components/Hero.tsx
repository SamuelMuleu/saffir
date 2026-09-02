

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="reveal">
          <h1>Investir em detalhes<br />é investir em <em>você</em>.</h1>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://wa.me/5522998371359" target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a>
            <a className="btn btn-ghost" href="#colecoes">Ver coleções</a>
          </div>
        </div>
        <div className="hero-art reveal reveal-delay-2">
          <svg className="hero-diamond" width="280" height="320" viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="140,20 190,80 165,90 140,70 115,90 90,80" stroke="#d8bd93" strokeWidth="1.4" fill="none" />
            <polygon points="90,80 115,90 140,270 90,80" stroke="#d8bd93" strokeWidth="1.4" fill="none" />
            <polygon points="190,80 165,90 140,270 190,80" stroke="#d8bd93" strokeWidth="1.4" fill="none" />
            <polygon points="115,90 165,90 140,270" stroke="#d8bd93" strokeWidth="1.4" fill="none" />
            <polygon points="90,80 140,70 115,90" stroke="#d8bd93" strokeWidth="1" fill="rgba(216,189,147,0.12)" />
            <polygon points="190,80 140,70 165,90" stroke="#d8bd93" strokeWidth="1" fill="rgba(216,189,147,0.08)" />
            <polygon points="140,20 165,90 140,70 115,90" stroke="#d8bd93" strokeWidth="1" fill="rgba(216,189,147,0.16)" />
            <circle className="hero-spark" cx="140" cy="300" r="2" fill="#d8bd93" />
          </svg>
        </div>
      </div>
    </section>
  );
}
