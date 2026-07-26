export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__gradient" />
        <div className="hero__pattern" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow animate-fade-up">Healthcare &amp; Pharmaceuticals</p>
        <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Advancing Care,<br />
          <span>Enhancing Life</span>
        </h1>
        <p className="hero__subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
          You are at the heart of what we do. Elenta delivers trusted pharmaceutical
          solutions that reach patients, clinicians, and communities with integrity.
        </p>
        <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a href="#about" className="btn btn--primary">Discover Elenta</a>
          <a href="#contact" className="btn btn--outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-dot" />
      </div>
    </section>
  )
}
