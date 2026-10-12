import { Link } from 'react-router-dom'
import wellnessData from '../data/wellnessData.js'
import GlassCard from '../components/GlassCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

function Home() {
return ( <div className="app"> <section className="hero"> <p className="eyebrow">YOUR PERSONAL WELLNESS SPACE</p>

```
    <h1>
      Better health.
      <br />
      <span>Better everyday.</span>
    </h1>

    <p className="hero-description">
      Explore your wellness, build healthier habits,
      and discover helpful resources for everyday life.
    </p>

    <div className="hero-actions">
      <Link className="primary-button" to="/assessment">
        Start Assessment ↗
      </Link>

      <a className="secondary-button" href="#wellness">
        Explore Platform
      </a>
    </div>
  </section>

  <section id="wellness" className="dashboard">
    <SectionTitle
      eyebrow="YOUR HEALTH HUB"
      title="Explore your wellness"
      description="Discover the different areas of health and well-being."
    />

    <div className="glass-grid">
      {wellnessData.map((item) => (
        <GlassCard
          key={item.id}
          icon="✳"
          title={item.title}
          description={item.description}
        >
          <Link className="card-link" to={item.path}>
            Explore section ↗
          </Link>
        </GlassCard>
      ))}
    </div>

    <p className="disclaimer">
      Educational information only. This platform does not
      replace professional medical advice.
    </p>
  </section>
</div>
```

)
}

export default Home
