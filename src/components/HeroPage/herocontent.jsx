function HeroContent() {
  return (
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
  );
}

export default HeroContent;