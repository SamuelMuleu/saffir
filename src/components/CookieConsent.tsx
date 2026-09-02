import { useEffect, useState } from 'react';

const STORAGE_KEY = 'saffir-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(() => !localStorage.getItem(STORAGE_KEY));

  useEffect(() => {
    document.body.classList.toggle('cookie-banner-open', visible);
  }, [visible]);

  const decide = (value: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner-inner">
        <p>
          Usamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com o uso de cookies.
        </p>
        <div className="cookie-actions">
          <button className="btn btn-ghost btn-sm" onClick={() => decide('declined')}>Recusar</button>
          <button className="btn btn-primary btn-sm" onClick={() => decide('accepted')}>Aceitar</button>
        </div>
      </div>
    </div>
  );
}
