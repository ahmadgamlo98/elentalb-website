import { useInView } from '../hooks/useInView'

const newsItems = [
  {
    date: 'Milan, 2026',
    category: 'Events',
    title: 'Elenta at CPhI Milan 2026',
    excerpt:
      'Elenta S.A.R.L. is engaging with pharmaceutical manufacturers and international healthcare companies during CPhI Milan 2026 to explore new opportunities for collaboration and product development in the Lebanese market.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    imageAlt: 'International pharmaceutical exhibition and networking',
  },
  {
    date: 'Ehden, 2026',
    category: 'Events',
    title: 'Elenta Participates in Lebanese Hospital Pharmacist Day 2026 in Ehden',
    excerpt:
      'Elenta S.A.R.L. was pleased to participate in Hospital Pharmacist Day, held in Ehden, Lebanon, bringing together hospital pharmacists and healthcare professionals for a day dedicated to professional exchange, education, and networking.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageAlt: 'Hospital pharmacists and healthcare professionals in discussion',
  },
]

export default function News() {
  const { ref, visible } = useInView()

  return (
    <section id="news" className="section news" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-up ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">News &amp; Initiatives</span>
          <h2 className="section-title">Latest from Elenta</h2>
          <p className="section-text section-header__desc">
            Explore company updates, partnerships, product developments, industry participation,
            and healthcare initiatives from Elenta.
          </p>
        </div>

        <div className={`news__grid ${visible ? 'is-visible' : ''}`}>
          {newsItems.map((item, i) => (
            <article
              key={item.title}
              className="news-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div
                className="news-card__image"
                role="img"
                aria-label={item.imageAlt}
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="news-card__body">
                <div className="news-card__meta">
                  <span className="news-card__category">{item.category}</span>
                  <time>{item.date}</time>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
