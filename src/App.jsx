import { useState } from 'react'

function App() {
const [activeTab, setActiveTab] = useState('Overview')

return ( <main className="app"> <header className="topbar"> <a className="brand" href="/"> <span className="brand-icon">✚</span> <span>HealthCare</span> </a>

```
    <span className="status">
      Your wellness, your priority
    </span>
  </header>

  <section className="hero">
    <p className="eyebrow">YOUR PERSONAL WELLNESS SPACE</p>

    <h1>
      Better health.
      <br />
      <span>Better everyday.</span>
    </h1>

    <p className="hero-description">
      Understand your well-being, build healthier habits,
      and take small steps toward a healthier life.
    </p>

    <div className="hero-actions">
      <button
        className="primary-button"
        onClick={() => setActiveTab('Assessment')}
      >
        Start Assessment <span>↗</span>
      </button>

      <button
        className="secondary-button"
        onClick={() => setActiveTab('Overview')}
      >
        Explore Platform
      </button>
    </div>
  </section>

  <section className="dashboard">
    <div className="section-heading">
      <div>
        <p className="eyebrow">YOUR HEALTH HUB</p>
        <h2>Explore your wellness</h2>
      </div>

      <span className="live-indicator">● Platform preview</span>
    </div>

    <nav className="tabs" aria-label="Wellness sections">
      {['Overview', 'Assessment', 'Mental Health', 'Activity'].map(
        (tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ),
      )}
    </nav>

    <div className="glass-grid">
      <article className="glass-card featured-card">
        <span className="card-icon">✳</span>
        <p className="card-label">PERSONALIZED WELLNESS</p>
        <h3>
          {activeTab === 'Overview'
            ? 'Your health journey starts here.'
            : `Explore ${activeTab}.`}
        </h3>
        <p>
          Discover helpful resources and practical steps
          designed to support your well-being.
        </p>
        <span className="card-arrow">↗</span>
      </article>

      <article className="glass-card">
        <span className="card-icon">♡</span>
        <p className="card-label">MENTAL WELL-BEING</p>
        <h3>Care for your mind</h3>
        <p>
          Explore stress-management techniques and
          supportive mental wellness resources.
        </p>
      </article>

      <article className="glass-card">
        <span className="card-icon">⌁</span>
        <p className="card-label">HEALTHY HABITS</p>
        <h3>Small steps, lasting change</h3>
        <p>
          Learn about physical activity, sleep routines,
          and everyday healthy habits.
        </p>
      </article>
    </div>

    <p className="disclaimer">
      Educational wellness information only. This platform
      does not replace professional medical advice.
    </p>
  </section>

  <footer className="footer">
    <span>✚ HealthCare</span>
    <span>Built for a healthier tomorrow.</span>
  </footer>
</main>
```

)
}

export default App
