import alianca1 from '../assets/joias/alianca-1.jpg';
import alianca2 from '../assets/joias/alianca-2.jpg';
import alianca3 from '../assets/joias/alianca-3.jpg';
import alianca4 from '../assets/joias/alianca-4.jpg';
import anelFashion1 from '../assets/joias/anel-fashion-1.jpg';
import anelFashion2 from '../assets/joias/anel-fashion-2.jpg';
import solitario from '../assets/joias/solitario.jpg';
import relogio1 from '../assets/joias/relogio-1.jpg';
import relogio2 from '../assets/joias/relogio-2.jpg';
import relogio3 from '../assets/joias/relogio-3.jpg';
import relogio4 from '../assets/joias/relogio-4.jpg';

export interface Category {
  slug: string;
  title: string;
  tagline: string;
  cover: string;
  photos: string[];
}

export const categories: Category[] = [
  {
    slug: 'aliancas',
    title: 'Alianças',
    tagline: 'Casamento e compromisso',
    cover: alianca2,
    photos: [alianca1, alianca2, alianca3, alianca4],
  },
  {
    slug: 'aneis',
    title: 'Anéis',
    tagline: 'Peças do dia a dia',
    cover: anelFashion1,
    photos: [anelFashion1, anelFashion2],
  },
  {
    slug: 'solitarios',
    title: 'Solitários',
    tagline: 'Noivado',
    cover: solitario,
    photos: [solitario],
  },
  {
    slug: 'relogios',
    title: 'Relógios',
    tagline: 'Linha completa',
    cover: relogio1,
    photos: [relogio1, relogio2, relogio3, relogio4],
  },
  {
    slug: 'masculino',
    title: 'Masculino',
    tagline: 'Joias e acessórios',
    cover: relogio2,
    photos: [relogio2, relogio1, relogio3, relogio4],
  },
];

export function getCategory(slug: string | undefined): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
