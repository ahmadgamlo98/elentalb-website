import { useInView } from '../hooks/useInView'

const reasons = [
  {
    icon: '⚖️',
    title: 'Ethical Standards',
    text: 'We conduct our business with integrity and seek to maintain professional and ethical standards in every relationship and transaction.',
  },
  {
    icon: '🔍',
    title: 'Traceability & Transparency',
    text: 'We value clear documentation, product traceability, and transparent communication across the supply chain, from manufacturer coordination to market delivery.',
  },
  {
    icon: '📈',
    title: 'Continuous Improvement',
    text: 'We continuously review market needs, partner feedback, and operational processes to strengthen service quality and execution.',
  },
  {
    icon: '🏭',
    title: 'Storage & Inventory',
    text: 'We aim to manage pharmaceutical products in accordance with applicable storage, handling, and product-specific requirements.',
  },
  {
    icon: '🤝',
    title: 'Rigorous Supplier Selection',
    text: 'Potential manufacturing partners are evaluated with attention to product quality, documentation, regulatory suitability, supply reliability, and long-term market potential.',
  },
  {
    icon: '🌐',
    title: 'Market Reach',
    text: 'Our current strategic focus is the Lebanese healthcare market, with a model built to develop strong relationships across institutional, public, humanitarian, and selected retail channels.',
  },
]

export default function WhyChooseUs() {
  const { ref, visible } = useInView()

  return (
    <section className="section why" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-up ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Why Choose Elenta</span>
          <h2 className="section-title">Quality at Every Touchpoint</h2>
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
