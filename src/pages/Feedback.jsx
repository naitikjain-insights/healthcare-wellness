```jsx
import { useState } from 'react'
import { MessageSquare, CheckCircle2 } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import Button from '../components/Button.jsx'

function Feedback() {
  const [category, setCategory] = useState('suggestion')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    if (!message.trim()) return

    // Demo only: feedback is not sent to a server.
    setSubmitted(true)
  }

  return (
    <DashboardLayout
      title="Share Feedback"
      description="Tell us what could make this wellness learning experience better."
    >
      <section className="glass-card feedback-card">
        {submitted ? (
          <div>
            <div className="card-icon">
              <CheckCircle2 size={24} />
            </div>
            <h2>Thank you for your feedback!</h2>
            <p>
              Your message has been recorded in this demo's current screen
              state. It has not been sent or saved to a server.
            </p>
            <Button
              variant="secondary"
              onClick={() => {
                setSubmitted(false)
                setMessage('')
              }}
            >
              Send Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="card-icon">
              <MessageSquare size={22} />
            </div>

            <label htmlFor="feedback-category">Feedback type</label>
            <select
              id="feedback-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="suggestion">Suggestion</option>
              <option value="issue">Report an issue</option>
              <option value="experience">General experience</option>
            </select>

            <label htmlFor="feedback-message">Your message</label>
            <textarea
              id="feedback-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Share your thoughts..."
              rows={5}
              maxLength={1000}
              required
            />

            <p className="muted">
              Category: {category} · {message.length}/1000 characters
            </p>

            <Button type="submit" disabled={!message.trim()}>
              Submit Feedback
            </Button>
          </form>
        )}
      </section>
    </DashboardLayout>
  )
}

export default Feedback
```
