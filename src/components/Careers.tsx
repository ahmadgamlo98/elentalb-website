import { useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { HR_EMAIL } from '../constants/location'

export default function Careers() {
  const { ref, visible } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [fileName, setFileName] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const pendingSubmit = useRef(false)

  const handleSubmit = () => {
    pendingSubmit.current = true
    setSending(true)
    setError('')
  }

  const handleIframeLoad = () => {
    if (!pendingSubmit.current) return

    pendingSubmit.current = false
    setSending(false)
    setSubmitted(true)
    setFileName('')
    formRef.current?.reset()
    document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="careers" className="section careers" ref={ref}>
      <iframe
        name="careers-form-frame"
        title="Career application submission"
        className="careers__iframe"
        onLoad={handleIframeLoad}
      />

      <div className="container careers__inner">
        <div className={`careers__content reveal-left ${visible ? 'is-visible' : ''}`}>
          <span className="section-tag">Careers</span>
          <h2 className="section-title">Join a team that puts people first</h2>
          <p className="section-text">
            At Elenta, we are building a team driven by responsibility,
            collaboration, and a shared commitment to healthcare. We welcome
            professionals who value integrity, initiative, continuous learning,
            and meaningful long-term partnerships.
          </p>

          {submitted ? (
            <div className="careers__success">
              <span aria-hidden="true">✓</span>
              <h3>Application sent!</h3>
              <p>Thank you. Our HR team will review your application and get back to you.</p>
            </div>
          ) : (
            <form
              ref={formRef}
              className="careers__form"
              method="POST"
              action={`https://formsubmit.co/${HR_EMAIL}`}
              encType="multipart/form-data"
              target="careers-form-frame"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="New Career Application - Elenta" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <label>
                Your email *
                <input type="email" name="email" required placeholder="you@email.com" />
              </label>

              <label>
                Message *
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about yourself and the role you are interested in..."
                />
              </label>

              <label className="careers__file-label">
                Upload CV *
                <span className="careers__file-wrap">
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                  />
                  <span className="careers__file-btn">Choose file</span>
                  <span className="careers__file-name">
                    {fileName || 'PDF, DOC, or DOCX'}
                  </span>
                </span>
              </label>

              {error && <p className="careers__error">{error}</p>}

              <button type="submit" className="btn btn--primary" disabled={sending}>
                {sending ? 'Sending...' : 'Send Application'}
              </button>
            </form>
          )}
        </div>

        <div
          className={`careers__visual reveal-right ${visible ? 'is-visible' : ''}`}
          aria-hidden="true"
        >
          <div className="careers__image" />
        </div>
      </div>
    </section>
  )
}
