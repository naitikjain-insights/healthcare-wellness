```jsx
import { HeartPulse, ShieldCheck, BookOpen } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

function About() {
  return (
    <DashboardLayout
      title="About WellnessCare"
      description="A wellness-focused platform for learning, reflection, and healthier daily routines."
    >
      <div className="glass-grid">
        <GlassCard
          icon={<HeartPulse size={22} />}
          title="Our Purpose"
          description="Make general wellness education easier to explore through a simple, accessible interface."
        />

        <GlassCard
          icon={<BookOpen size={22} />}
          title="Learning First"
          description="Offer educational information about activity, sleep, mental well-being, and community health."
        />

        <GlassCard
          icon={<ShieldCheck size={22} />}
          title="Responsible Use"
          description="Encourage informed choices while respecting the limits of online wellness information."
        />
      </div>

      <section className="glass-card" style={{ marginTop: 24 }}>
        <h3>Important health notice</h3>
        <p>
          WellnessCare is an educational project. It does not diagnose
          conditions, provide emergency care, or replace advice from a
          qualified healthcare professional.
        </p>
      </section>
    </DashboardLayout>
  )
}

export default About
```
