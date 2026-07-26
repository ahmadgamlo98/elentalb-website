import { useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, visible } = useInView()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container contact__grid">
        <div className={`contact__info reveal-left ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">We&apos;re looking forward to your message</h2>
          <p className="section-text">
            Whether you&apos;re a healthcare partner, supplier, or future team member —
            our team is ready to connect.
          </p>

          <div className="contact__details">
            <div>
              <h3>Phone</h3>
              <a href="tel:+9611234567">+961-1-234567</a>
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:info@elenta.com">info@elenta.com</a>
            </div>
            <div>
              <h3>Office</h3>
              <p>
                Beirut Central District<br />
                Healthcare Tower, Floor 12<br />
                Beirut, Lebanon
              </p>
            </div>
          </div>
        </div>

        <div className={`contact__form-wrap reveal-right ${visible ? 'is-visible' : ''}`}>
          {submitted ? (
            <div className="contact__success">
              <span aria-hidden="true">✓</span>
              <h3>Thank you!</h3>
              <p>Your message has been received. We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  First Name
                  <input type="text" name="firstName" required />
                </label>
                <label>
                  Last Name
                  <input type="text" name="lastName" required />
                </label>
              </div>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Department
                <select name="department" defaultValue="">
                  <option value="" disabled>Select...</option>
                  <option value="hr">Human Resources</option>
                  <option value="info">Information</option>
                  <option value="accounting">Accounting</option>
                  <option value="partnerships">Partnerships</option>
                </select>
              </label>

              <label>
                Message
                <textarea name="message" rows={5} required />
              </label>

              <button type="submit" className="btn btn--primary btn--full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
