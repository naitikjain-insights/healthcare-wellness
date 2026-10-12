```jsx
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

function NotFound() {
  return (
    <section className="hero" style={{ textAlign: 'center' }}>
      <div className="hero-badge">404 · Page not found</div>

      <h1>
        Oops! This page
        <br />
        <span className="gradient-text">couldn't be found.</span>
      </h1>

      <p className="hero-description">
        The page may have moved, or the link may be incorrect.
        Let's get you back to your wellness dashboard.
      </p>

      <div className="hero-actions" style={{ justifyContent: 'center' }}>
        <Link to="/" className="primary-button">
          <Home size={17} /> Back to Home
        </Link>

        <button
          type="button"
          className="secondary-button"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={17} /> Go Back
        </button>
      </div>
    </section>
  )
}

export default NotFound
```
