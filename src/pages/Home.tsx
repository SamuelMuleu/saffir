import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Carousel } from '../components/Carousel';
import { Collections } from '../components/Collections';
import { Reviews } from '../components/Reviews';
import { Location } from '../components/Location';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <About />
      <Carousel />
      <Collections />
      <Reviews />
      <Location />
    </>
  );
}
