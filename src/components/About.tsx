import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, visible } = useInView()

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container about__grid">
        <div className={`about__visual reveal-left ${visible ? 'is-visible' : ''}`}>
          <div className="about__image">
            <div className="about__image-overlay" />
          </div>
          <div className="about__badge">
            <span className="about__badge-number">15+</span>
            <span className="about__badge-text">Years serving healthcare</span>
          </div>
        </div>

        <div className={`about__content reveal-right ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">Dedicated to a lasting impact on healthcare</h2>
          <p className="section-text">
            At Elenta, our fundamental mission is to enhance lives by providing a wide
            range of high-quality pharmaceutical solutions and assuring their accessibility.
            We stand as a prominent and trusted company with a legacy of solid dedication
            to delivering exceptional value to healthcare professionals and patients alike.
          </p>
          <p className="section-text">
            What sets us apart is our holistic approach to healthcare. Our people-centric
            culture is the cornerstone of our success — we are not just a company, we are
            a family that values every member&apos;s well-being and growth.
          </p>

          <div className="about__pillars">
            <article>
              <h3>Mission</h3>
              <p>Deliver safe, accessible medicines that improve patient outcomes worldwide.</p>
            </article>
            <article>
              <h3>Vision</h3>
              <p>Be the most trusted partner in pharmaceutical distribution and care.</p>
            </article>
            <article>
              <h3>Values</h3>
              <p>Integrity, transparency, innovation, and unwavering commitment to people.</p>
            </article>
          </div>

          <a href="#products" className="btn btn--primary">Explore Our Products</a>
        </div>
      </div>
    </section>
  )
}
