import saffirLogo from '../assets/saffir-logo.png';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div>
          <a href="#" className="logo">
            <img src={saffirLogo} alt="Saffir Joias" />
          </a>
          <p style={{ marginTop: '10px', fontSize: '0.85rem', color: 'rgba(237,231,217,0.5)', maxWidth: '32ch' }}>
            Shopping Pelinca Square Center, Campos dos Goytacazes - RJ
          </p>
        </div>
        <ul className="foot-links">
          <li><a href="https://wa.me/5522998371359" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          <li><a href="https://www.instagram.com/saffirjoias/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="#local">Localização</a></li>
        </ul>
      </div>
      <div className="wrap foot-bottom">© {year} Saffir Joias.</div>
    </footer>
  );
}
