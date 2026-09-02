

export function Location() {
  return (
    <section className="location" id="local">
      <div className="wrap">
        <div className="reveal">
          <span className="section-label">Onde estamos</span>
          <h2>Visite a loja</h2>
          <div className="info-list">
            <div className="info-item">
              <div className="label">Endereço</div>
              <div className="value">Shopping Pelinca Square Center — Av. Pelinca, 102, Parque Tamandaré, Campos dos Goytacazes - RJ, 28035-053</div>
            </div>
            <div className="info-item">
              <div className="label">Telefone / WhatsApp</div>
              <div className="value"><a href="https://wa.me/5522998371359" target="_blank" rel="noopener noreferrer">(22) 99837-1359</a></div>
            </div>
            <div className="info-item">
              <div className="label">Horário de funcionamento</div>
              <div className="value">Consulte o horário atualizado no <a href="https://www.google.com/search?q=saffir+joias+campos+dos+goytacazes" target="_blank" rel="noopener noreferrer">perfil do Google</a></div>
            </div>
            <div className="info-item">
              <div className="label">Instagram</div>
              <div className="value"><a href="https://www.instagram.com/saffirjoias/" target="_blank" rel="noopener noreferrer">saffirjoias</a></div>
            </div>
          </div>
        </div>
        <iframe
          className="map-frame reveal reveal-delay-1"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Saffir+Joias+Av.+Pelinca+102+Parque+Tamandare+Campos+dos+Goytacazes+RJ&output=embed"
          title="Mapa com a localização da Saffir Joias"
        >
        </iframe>
      </div>
    </section>
  );
}
