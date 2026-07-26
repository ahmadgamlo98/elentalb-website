export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="logo">
            <span className="logo__mark" aria-hidden="true">E</span>
            <span className="logo__text">Elenta</span>
          </a>
          <p>
            Trusted pharmaceutical solutions for healthcare professionals,
            institutions, and patients worldwide.
          </p>
        </div>

        <div className="footer__links">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Connect</h4>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="mailto:info@elenta.com">info@elenta.com</a></li>
            <li><a href="tel:+9611234567">+961-1-234567</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Elenta. All rights reserved.</p>
        <p>Enhancing Life — Healthcare &amp; Pharmaceuticals</p>
      </div>
    </footer>
  )
}
