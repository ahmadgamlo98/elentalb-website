import { useInView } from '../hooks/useInView'

const newsItems = [
  {
    date: 'Mar 12, 2026',
    category: 'Events',
    title: 'Elenta hosts regional pharmacists summit on patient safety',
    excerpt: 'Healthcare leaders gathered to discuss best practices in pharmaceutical distribution.',
  },
  {
    date: 'Feb 28, 2026',
    category: 'News',
    title: 'New cold-chain facility expands capacity by 40%',
    excerpt: 'Our latest investment strengthens delivery reliability across therapeutic areas.',
  },
  {
    date: 'Jan 15, 2026',
    category: 'Initiatives',
    title: 'Community health outreach program reaches 10,000 patients',
    excerpt: 'Elenta teams partnered with local clinics to improve medicine accessibility.',
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
            Explore breakthroughs, events, and updates in the world of Elenta healthcare.
          </p>
        </div>

        <div className={`news__grid ${visible ? 'is-visible' : ''}`}>
          {newsItems.map((item, i) => (
            <article
              key={item.title}
              className="news-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="news-card__image" aria-hidden="true" />
              <div className="news-card__body">
                <div className="news-card__meta">
                  <span className="news-card__category">{item.category}</span>
                  <time>{item.date}</time>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href="#contact" className="link-arrow">Read more</a>
              </div>
            </article>
          ))}
        </div>

        <div className={`news__cta reveal-up ${visible ? 'is-visible' : ''}`}>
          <a href="#contact" className="btn btn--outline">View all news</a>
        </div>
      </div>
    </section>
  )
}
