```jsx
import { Heart, MapPin, Users, BookOpen } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

const services = [
  {
    icon: Heart,
    title: 'Preventive Care',
    description:
      'Promote routine health checkups, early awareness, and preventive health practices.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description:
      'Encourage local health workers and community groups to share reliable health information.'
  },
  {
    icon: BookOpen,
    title: 'Health Education',
    description:
      'Make accessible educational resources available for families and communities.'
  }
]

function RuralOutreach() {
  return (
    <DashboardLayout
      title="Rural Healthcare"
      description="Explore ideas for improving access to health education and community wellness."
    >
      <div className="glass-grid">
        {services.map(({ icon: Icon, title, description }) => (
          <GlassCard
            key={title}
            icon={<Icon size={22} />}
            title={title}
            description={description}
          />
        ))}
      </div>

      <section className="glass-card" style={{ marginTop: 24 }}>
        <div className="card-icon">
          <MapPin size={22} />
        </div>
        <h3>Community-first approach</h3>
        <p>
          Local health initiatives work best when they are accessible,
          culturally appropriate, and connected with qualified healthcare
          professionals.
        </p>
        <p className="muted">
          This page provides general educational information, not a directory
          of verified local services.
        </p>
      </section>
    </DashboardLayout>
  )
}

export default RuralOutreach
```
