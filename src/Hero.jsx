
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import HeroContent from './components/HeroPage/herocontent';
import './App.css';

const FRAME_SEQUENCE = [
  1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26,
];

const getFrameSrc = (frame) =>
  new URL(
    `./assets/smoothieanim/ezgif-frame-${String(frame).padStart(3, '0')}.jpg`,
    import.meta.url
  ).href;

const loadAndDecode = (src) => {
  const img = new Image();
  img.src = src;

  if (img.decode) {
    return img.decode().catch(() => {});
  }

  return new Promise((resolve) => {
    img.onload = resolve;
    img.onerror = resolve;
  });
};

function Hero() {
  const [frame, setFrame] = useState(FRAME_SEQUENCE[0]);

  useEffect(() => {
    let cancelled = false;
    let timer;

    const preloadFrames = async () => {
      const frames = FRAME_SEQUENCE.map(getFrameSrc);

      await Promise.all(frames.map(loadAndDecode));

      if (cancelled) return;

      let frameIndex = 0;

      timer = setInterval(() => {
        frameIndex += 1;

        if (frameIndex >= FRAME_SEQUENCE.length) {
          clearInterval(timer);
          return;
        }

        setFrame(FRAME_SEQUENCE[frameIndex]);
      }, 180);
    };

    preloadFrames();

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  const frameSrc = getFrameSrc(frame);

  return (
    <section className="hero">

      {/* BACKGROUND DA ANIMAÇÃO */}
      <div
        className="hero__background"
        style={{
          backgroundImage: `url("${frameSrc}")`,
        }}
        aria-hidden="true"
      />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTEÚDO */}
      <HeroContent />

    </section>
  );
}

export default Hero;