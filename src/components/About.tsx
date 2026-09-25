import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container about__grid">
        <div
          className={`about__visual reveal-left ${visible ? "is-visible" : ""}`}
        >
          <div className="about__image">
            <div className="about__image-overlay" />
          </div>
          <div className="about__badge">
            <span className="about__badge-number">15+</span>
            <span className="about__badge-text">Years serving healthcare</span>
          </div>
        </div>

        <div
          className={`about__content reveal-right ${visible ? "is-visible" : ""}`}
        >
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">
            Dedicated to a lasting impact on healthcare
          </h2>
          <p className="section-text">
            Elenta S.A.R.L is a pharmaceutical company based in Maten, Lebanon,
            established to develop trusted partnerships between pharmaceutical
            manufacturers and the Lebanese healthcare market. Our activities are
            centered on pharmaceutical product sourcing, registration support,
            commercialization, and distribution, with a strong focus on
            institutional healthcare channels.
          </p>
          <p className="section-text">
            We work to identify reliable manufacturing partners and
            pharmaceutical products that can address the evolving needs of
            hospitals, healthcare institutions, public-sector programs, NGOs,
            and selected pharmacy channels. Our approach combines commercial
            discipline with regulatory awareness, product quality, transparency,
            and long-term partnership.
          </p>

          <div className="about__pillars">
            <article>
              <h3>Mission</h3>
              <p>
                To improve access to dependable pharmaceutical products by
                building responsible partnerships with manufacturers and
                healthcare providers and delivering efficient, transparent, and
                quality-focused market solutions.
              </p>
            </article>
            <article>
              <h3>Vision</h3>
              <p>
                To become a trusted pharmaceutical partner in Lebanon,
                recognized for reliability, professional execution, responsible
                growth, and a meaningful contribution to healthcare.
              </p>
            </article>
            <article>
              <h3>Values</h3>
              <p>
                Integrity, quality, reliability, transparency, partnership, patient focus and Continuous Improvement.
              </p>
            </article>
          </div>

          <a href="#products" className="btn btn--primary">
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
}
