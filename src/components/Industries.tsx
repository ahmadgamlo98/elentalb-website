import { useInView } from '../hooks/useInView'

const industries = [
  { icon: '💊', name: 'Pharmacies', desc: 'Reliable supply chains for retail and community pharmacies.' },
  { icon: '🏥', name: 'Hospitals', desc: 'Critical medicines delivered with precision and speed.' },
  { icon: '🩺', name: 'Private Clinics', desc: 'Tailored product ranges for specialized care settings.' },
  { icon: '🏛️', name: 'Public Institutions', desc: 'Partnerships that strengthen national health systems.' },
  { icon: '🔬', name: 'Medical Institutions', desc: 'Research-grade products for advanced medical facilities.' },
  { icon: '🌍', name: 'NGOs & Aid', desc: 'Humanitarian distribution to underserved communities.' },
]

export default function Industries() {
  const { ref, visible } = useInView()

  return (
    <section id="products" className="section industries" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-up ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Industries We Serve</span>
          <h2 className="section-title">Holistic distribution excellence</h2>
          <p className="section-text section-header__desc">
            From local pharmacies to regional hospitals, Elenta connects quality
            pharmaceutical products with the professionals who need them most.
          </p>
        </div>

        <div className={`industries__grid ${visible ? 'is-visible' : ''}`}>
          {industries.map((item, i) => (
            <article
              key={item.name}
              className="industry-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="industry-card__icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
