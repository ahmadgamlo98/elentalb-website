import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'
import { QUALITY_EMAIL } from '../constants/location'

const complaintTypes = [
  'Product Characteristics / Packaging complaint',
  'Distribution Complaint / Availability',
  'Effectiveness / Side effect complaint',
  'Other / General Inquiry',
]

export default function PharmacovigilancePage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('_subject', 'Pharmacovigilance Report - Elenta')
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${QUALITY_EMAIL}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Send failed')

      setSubmitted(true)
      form.reset()
    } catch {
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Header forceScrolled />
      <main className="pv-page">
        <div className="container pv-page__inner">
          <nav className="pv-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">»</span>
            <span>Report</span>
          </nav>

          <h1 className="pv-page__title">Report</h1>

          {submitted ? (
            <div className="pv-success">
              <span aria-hidden="true">✓</span>
              <h2>Report sent successfully</h2>
              <p>Thank you. Your pharmacovigilance report has been submitted.</p>
              <Link to="/" className="btn btn--primary">Back to Home</Link>
            </div>
          ) : (
            <form className="pv-form" onSubmit={handleSubmit}>
              <section className="pv-section">
                <h2 className="pv-section__title">Contact Information</h2>
                <div className="pv-form__grid">
                  <label>
                    First name *
                    <input type="text" name="firstName" required />
                  </label>
                  <label>
                    Last name *
                    <input type="text" name="lastName" required />
                  </label>
                  <label>
                    Tel (Mobile) *
                    <input type="tel" name="telMobile" required />
                  </label>
                  <label>
                    E-mail Address *
                    <input type="email" name="email" required/>
                  </label>
                  <label>
                    Tel (Office)
                    <input type="tel" name="telOffice" />
                  </label>
                  <label>
                    Fax
                    <input type="text" name="fax" />
                  </label>
                  <label className="pv-form__full">
                    Address
                    <input type="text" name="address" />
                  </label>
                </div>
              </section>

              <section className="pv-section">
                <h2 className="pv-section__title">Complaint details</h2>
                <div className="pv-form__grid">
                  <label>
                    Date of receiving complaint
                    <input type="date" name="complaintDate" />
                  </label>
                  <label>
                    Type of complaint *
                    <select name="complaintType" defaultValue={complaintTypes[0]} required>
                      {complaintTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </label>
                  <label className="pv-form__full">
                    Details/Message *
                    <textarea name="message" rows={6} required />
                  </label>
                </div>
              </section>

              <section className="pv-section">
                <h2 className="pv-section__title">Details of the Product</h2>
                <div className="pv-form__grid">
                  <label className="pv-form__full">
                    Name of the product *
                    <input type="text" name="productName" required />
                  </label>
                  <label>
                    Strength *
                    <input type="text" name="strength" required />
                  </label>
                  <label>
                    Batch number
                    <input type="text" name="batchNumber" />
                  </label>
                  <label>
                    Expiry date *
                    <input type="date" name="expiryDate" required />
                  </label>
                </div>
              </section>

              <p className="pv-certify">
                I hereby certify that all the above given information are exact and true
                to the best of my knowledge
              </p>

              {error && <p className="pv-error">{error}</p>}

              <button type="submit" className="btn btn--primary pv-submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Report'}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
