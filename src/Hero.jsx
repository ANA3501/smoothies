import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import './App.css';

const FRAME_SEQUENCE = [
  1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
];

const getFrameSrc = (frame) =>
  new URL(
    `./assets/smoothieanim/ezgif-frame-${String(frame).padStart(3, '0')}.jpg`,
    import.meta.url
  ).href;

// Loads and decodes the image, ensuring it's ready to paint
// instantly when used as a background-image.
const loadAndDecode = (src) => {
  const img = new Image();
  img.src = src;

  if (img.decode) {
    return img.decode().catch(() => {}); // ignora falhas de decode isoladas
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
      <div
        className="hero__background"
        style={{
          backgroundImage: `url(${frameSrc})`,
          backgroundColor: '#f4f0e6',
        }}
        aria-hidden="true"
      />

      <Navbar />
      <div className="hero__inner">
        {/* LEFT SIDE */}
        <div className="hero__content">
          <div className="hero__badge">
            <span></span>
            SMOOTHIES MADE WITH PURPOSE
          </div>

          <h1>
            Wellness
            <br />
            starts
            <br />
            <span>from within.</span>
          </h1>

          <p className="hero__description">
            We blend real fruit, honest ingredients and a touch of
            magic to make your days taste better.
          </p>

          <div className="hero__actions">
            <a href="#" className="hero__button">
              choose my treat
              <span>→</span>
            </a>

            <a href="#" className="hero__ritual">
              discover the ritual
              <span>⌄</span>
            </a>
          </div>

          <div className="hero__features">
            <div>
              <span>✓</span>
              100% NATURAL
            </div>

            <div>
              <span>✓</span>
              NO REFINED SUGAR
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero__visual">

          <div className="hero__image-wrapper">
            <img
              src="/assets/smoothie.jpg"
              alt="Strawberry and mint smoothie"
            />
          </div>

          <div className="hero__fruit">
            <small>TODAY'S FRUIT</small>
            <strong>strawberry mint</strong>
          </div>

          <div className="hero__fresh">
            <div className="hero__fresh-icon">♧</div>

            <div>
              <strong>made fresh,</strong>
              <span>to sip slowly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;