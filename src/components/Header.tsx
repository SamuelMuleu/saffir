import { useEffect, useState } from 'react';
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
        <a href="#" className="logo">
          <img src={saffirLogo} alt="Saffir Joias" />
        </a>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a></li>
          <li><a href="#colecoes" onClick={() => setIsOpen(false)}>Coleções</a></li>
          <li><a href="#avaliacoes" onClick={() => setIsOpen(false)}>Avaliações</a></li>
          <li><a href="#local" onClick={() => setIsOpen(false)}>Localização</a></li>
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
