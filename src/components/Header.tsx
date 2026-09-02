import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import saffirLogo from '../assets/saffir-logo.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="nav wrap">
        <Link to="/" className="logo">
          <img src={saffirLogo} alt="Saffir Joias" />
        </Link>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li><Link to="/#sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li>
          <li><Link to="/#colecoes" onClick={() => setIsOpen(false)}>Coleções</Link></li>
          <li><Link to="/#avaliacoes" onClick={() => setIsOpen(false)}>Avaliações</Link></li>
          <li><Link to="/#local" onClick={() => setIsOpen(false)}>Localização</Link></li>
          <li className="nav-cta-mobile">
            <a href="https://wa.me/5522998371359" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Falar no WhatsApp</a>
          </li>
        </ul>
        <a className="nav-cta" href="https://wa.me/5522998371359" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
