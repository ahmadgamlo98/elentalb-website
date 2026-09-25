import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  GOOGLE_MAPS_URL,
  OFFICE_ADDRESS,
} from '../constants/location'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="logo">
            <span className="logo__icon-wrap">
              <img src="/elenta-logo-icon.png" alt="" className="logo__icon" aria-hidden="true" />
            </span>
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
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a></li>
            <li><a href="/#contact">Contact Us</a></li>
            <li>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__map-link"
              >
                {OFFICE_ADDRESS}
                <span className="footer__map-hint">View on Google Maps</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Elenta. All rights reserved.</p>
        <p>Inspired by Life, Driven by Science — Healthcare &amp; Pharmaceuticals</p>
      </div>
    </footer>
  )
}
