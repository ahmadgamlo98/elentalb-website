import { useInView } from "../hooks/useInView";

const industries = [
  {
    icon: "💊",
    name: "Pharmacies",
    desc: "Selected pharmaceutical and healthcare products for retail and community pharmacy channels, according to product strategy and market authorization.",
  },
  {
    icon: "🏥",
    name: "Hospitals",
    desc: "Pharmaceutical solutions for hospital and institutional requirements, with particular focus on products used in specialized and acute-care settings.",
  },
  {
    icon: "🩺",
    name: "Private Clinics",
    desc: "Targeted pharmaceutical solutions for specialized clinics, physicians, and medical centers according to therapeutic need.",
  },
  {
    icon: "🏛️",
    name: "Public Institutions",
    desc: "Participation in eligible public-sector opportunities and healthcare tenders, subject to applicable requirements and approvals.",
  },
  // {
  //   icon: "🔬",
  //   name: "Medical Institutions",
  //   desc: "Research-grade products for advanced medical facilities.",
  // },
  {
    icon: "🌍",
    name: "NGOs & Aid",
    desc: "Support for healthcare and humanitarian supply opportunities where reliable pharmaceutical sourcing and distribution are required.",
  },
];

export default function Industries() {
  const { ref, visible } = useInView();

  return (
    <section id="products" className="section industries" ref={ref}>
      <div className="container">
        <div
          className={`section-header reveal-up ${visible ? "is-visible" : ""}`}
        >
          <span className="section-tag">Industries We Serve</span>
          <h2 className="section-title">
            Healthcare Distribution Across Key Channels
          </h2>
          <p className="section-text section-header__desc">
            Elenta is developing a diversified pharmaceutical distribution model
            designed to serve important healthcare channels across Lebanon.
          </p>
        </div>

        <div className={`industries__grid ${visible ? "is-visible" : ""}`}>
          {industries.map((item, i) => (
            <article
              key={item.name}
              className="industry-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="industry-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
