export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__gradient" />
        <div className="hero__pattern" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow animate-fade-up">
          Healthcare &amp; Pharmaceuticals
        </p>
        <h1
          className="hero__title animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Inspired by Life,
          <br />
          <span>Driven by Science</span>
        </h1>
        <p
          className="hero__subtitle animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Elenta S.A.R.L is a Lebanon-based pharmaceutical company focused on
          connecting healthcare providers with reliable, quality-driven
          pharmaceutical solutions. Through responsible sourcing, regulatory
          coordination, and efficient distribution, we aim to support better
          access to medicines across the Lebanese healthcare sector.
        </p>
        <div
          className="hero__actions animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a href="#about" className="btn btn--primary">
            Discover Elenta
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-dot" />
      </div>
    </section>
  );
}
