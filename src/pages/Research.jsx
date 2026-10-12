```jsx
import { ExternalLink, BookOpen } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import { researchData } from '../data/researchData.js'

function Research() {
  return (
    <DashboardLayout
      title="Research & References"
      description="Explore trusted sources for further health and wellness learning."
    >
      <div className="glass-grid">
        {researchData.map((item) => (
          <article className="glass-card" key={item.name}>
            <div className="card-icon">
              <BookOpen size={22} />
            </div>

            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <a
              className="card-link"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit source <ExternalLink size={15} />
            </a>
          </article>
        ))}
      </div>
    </DashboardLayout>
  )
}

export default Research
```
