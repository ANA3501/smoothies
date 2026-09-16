import Navbar from './components/navbar';
import './App.css';

function Hero() {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero__inner">
        

        {/* LADO ESQUERDO */}
        <div className="hero__content">

          <div className="hero__badge">
            <span></span>
            SMOOTHIES COM INTENÇÃO
          </div>

          <h1>
            Obem
            <br />
            começa
            <br />
            <span>por dentro.</span>
          </h1>

          <p className="hero__description">
            Misturamos fruta a sério, ingredientes honestos e um
            bocadinho de magia para os teus dias saberem melhor.
          </p>

          <div className="hero__actions">
            <a href="#" className="hero__button">
              escolher o meu mimo
              <span>→</span>
            </a>

            <a href="#" className="hero__ritual">
              conhecer o ritual
              <span>⌄</span>
            </a>
          </div>

          <div className="hero__features">
            <div>
              <span>✓</span>
              100% NATURAIS
            </div>

            <div>
              <span>✓</span>
              SEM AÇÚCAR REFINADO
            </div>
          </div>

        </div>

        {/* LADO DIREITO */}
        <div className="hero__visual">

          {/* círculos decorativos */}
          <div className="hero__circle hero__circle--top"></div>
          <div className="hero__circle hero__circle--bottom"></div>

          {/* imagem */}
          <div className="hero__image-wrapper">
            <img
              src="/assets/smoothie.jpg"
              alt="Smoothie de manga e laranja"
            />
          </div>

          {/* etiqueta amarela */}
          <div className="hero__fruit">
            <small>A FRUTA DO DIA</small>
            <strong>manga solar</strong>
          </div>

          {/* cartão inferior */}
          <div className="hero__fresh">
            <div className="hero__fresh-icon">♧</div>

            <div>
              <strong>feito na hora,</strong>
              <span>para beber devagar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default Hero;