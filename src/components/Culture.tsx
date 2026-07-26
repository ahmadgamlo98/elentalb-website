import { useInView } from '../hooks/useInView'

export default function Culture() {
  const { ref, visible } = useInView()

  const cards = [
    {
      title: '100% Committed',
      subtitle: 'To our employees\' success',
      text: 'A culture of happy work days. We value every member\'s well-being, personal growth, and professional development.',
      accent: 'culture-card--teal',
    },
    {
      title: '85% Client Retention',
      subtitle: 'Built on trust',
      text: 'Our people are at the heart of all we do. Behind every retained client is a clinician who trusts us and a patient who receives safer care.',
      accent: 'culture-card--blue',
    },
  ]

  return (
    <section className="section culture" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-up ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Our Culture</span>
          <h2 className="section-title">People at the heart of everything</h2>
        </div>

        <div className={`culture__grid ${visible ? 'is-visible' : ''}`}>
          {cards.map((card, i) => (
            <article
              key={card.title}
              className={`culture-card ${card.accent}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="culture-card__visual" aria-hidden="true" />
              <div className="culture-card__body">
                <h3>{card.title}</h3>
                <p className="culture-card__subtitle">{card.subtitle}</p>
                <p>{card.text}</p>
                <a href="#about" className="link-arrow">Learn more about us</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
