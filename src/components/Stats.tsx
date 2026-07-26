import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { value: 450, suffix: '+', label: 'Product Portfolio' },
  { value: 28, suffix: '+', label: 'Therapeutic Areas' },
  { value: 1200, suffix: '+', label: 'Qualified Employees' },
  { value: 15, suffix: '+', label: 'Years of Excellence' },
]

function StatItem({ value, suffix, label, active }: {
  value: number
  suffix: string
  label: string
  active: boolean
}) {
  const count = useCountUp(value, active)

  return (
    <article className="stat-card">
      <p className="stat-card__value">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="stat-card__label">{label}</p>
    </article>
  )
}

export default function Stats() {
  const { ref, visible } = useInView()

  return (
    <section className="stats" ref={ref}>
      <div className={`container stats__grid ${visible ? 'is-visible' : ''}`}>
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stats__item"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <StatItem {...stat} active={visible} />
          </div>
        ))}
      </div>
    </section>
  )
}
