import { useInView } from '../hooks/useInView'

const reasons = [
  {
    icon: '⚖️',
    title: 'Ethical Standards',
    text: 'Strict adherence to regulatory and ethical guidelines at every step.',
  },
  {
    icon: '🔍',
    title: 'Traceability & Transparency',
    text: 'Full supply chain visibility from manufacturer to point of care.',
  },
  {
    icon: '📈',
    title: 'Continuous Improvement',
    text: 'We evolve through feedback, data, and a commitment to excellence.',
  },
  {
    icon: '🏭',
    title: 'Storage & Inventory',
    text: 'Advanced cold-chain and inventory systems that protect product integrity.',
  },
  {
    icon: '🤝',
    title: 'Rigorous Supplier Selection',
    text: 'Only vetted, certified partners enter the Elenta network.',
  },
  {
    icon: '🌐',
    title: 'Regional Reach',
    text: 'Subsidiaries and partners across multiple markets for seamless coverage.',
  },
]

export default function WhyChooseUs() {
  const { ref, visible } = useInView()

  return (
    <section className="section why" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-up ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Why Choose Elenta</span>
          <h2 className="section-title">Because we ensure quality at every touchpoint</h2>
        </div>

        <div className={`why__grid ${visible ? 'is-visible' : ''}`}>
          {reasons.map((item, i) => (
            <article
              key={item.title}
              className="why-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="why-card__icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
