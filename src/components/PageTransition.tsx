import { Outlet, useLocation } from 'react-router-dom';

/**
 * Faz um fade/subida suave sempre que a rota muda (Home ↔ Coleção ↔ Peça).
 * A `key={pathname}` força o React a remontar o container a cada navegação,
 * o que reinicia a animação CSS e também garante que o useScrollReveal()
 * de cada página observe os elementos `.reveal` do zero.
 */
export function PageTransition() {
  const { pathname } = useLocation();

  return (
    <div className="page-transition" key={pathname}>
      <Outlet />
    </div>
  );
}
