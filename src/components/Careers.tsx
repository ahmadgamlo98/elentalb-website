import { useInView } from '../hooks/useInView'

export default function Careers() {
  const { ref, visible } = useInView()

  return (
    <section id="careers" className="section careers" ref={ref}>
      <div className="container careers__inner">
        <div className={`careers__content reveal-left ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Careers</span>
          <h2 className="section-title">Join a team that puts people first</h2>
          <p className="section-text">
            At Elenta, your career grows alongside our mission. We offer meaningful work,
            professional development, and a culture where every contribution matters.
          </p>
          <ul className="careers__list">
            <li>Competitive benefits and wellness programs</li>
            <li>Continuous learning and certification support</li>
            <li>Inclusive, family-centered workplace culture</li>
          </ul>
          <a href="#contact" className="btn btn--primary">View Open Positions</a>
        </div>

        <div className={`careers__visual reveal-right ${visible ? 'is-visible' : ''}`} aria-hidden="true">
          <div className="careers__image" />
        </div>
      </div>
    </section>
  )
}
