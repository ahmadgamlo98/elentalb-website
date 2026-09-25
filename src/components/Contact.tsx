import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  OFFICE_ADDRESS,
} from '../constants/location'

const FORM_EMAIL = CONTACT_EMAIL

export default function Contact() {
  const { ref, visible } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('_subject', 'Contact Form - Elenta')
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Send failed')

      setSubmitted(true)
      form.reset()
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className={`section-header reveal-up ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">Get in touch with us</h2>
          <p className="section-text section-header__desc">
            For partnerships, product inquiries, or general questions, reach out to our team.
            We will respond as soon as possible.
          </p>
        </div>

        <div className={`contact__info-bar reveal-up ${visible ? 'is-visible' : ''}`}>
          <div className="contact__info-item">
            <h3>Phone</h3>
            <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE_DISPLAY}</a>
          </div>
          <div className="contact__info-item">
            <h3>Email</h3>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <div className="contact__info-item">
            <h3>Address</h3>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
              {OFFICE_ADDRESS}
            </a>
          </div>
        </div>

        <div className={`contact__main ${visible ? 'is-visible' : ''}`}>
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <span aria-hidden="true">✓</span>
                <h3>Thank you!</h3>
                <p>Your message has been received. We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="contact__form-title">Send us a message</h3>
                <form className="contact__form" onSubmit={handleSubmit}>
                  <label>
                    Your name *
                    <input type="text" name="name" required />
                  </label>

                  <label>
                    Your email *
                    <input type="email" name="email" required />
                  </label>

                  <label>
                    Phone *
                    <input type="tel" name="phone" required />
                  </label>

                  <label>
                    Subject *
                    <input type="text" name="subject" required />
                  </label>

                  <label>
                    Your message (optional)
                    <textarea name="message" rows={5} />
                  </label>

                  {error && <p className="contact__error">{error}</p>}

                  <button type="submit" className="btn btn--primary btn--full" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>

          <div className="contact__map-wrap">
            <iframe
              title="Elenta office location on Google Maps"
              className="contact__map"
              src={GOOGLE_MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__map-link"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
