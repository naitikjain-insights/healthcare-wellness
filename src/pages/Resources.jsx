```jsx
import { BookOpen, Heart, Moon, Activity, Users } from 'lucide-react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

const resources = [
  {
    icon: Heart,
    title: 'Mental Well-being',
    description:
      'Explore mindfulness, emotional awareness, and healthy ways to manage everyday stress.'
  },
  {
    icon: Moon,
    title: 'Sleep & Recovery',
    description:
      'Learn about consistent sleep routines and habits that support rest and recovery.'
  },
  {
    icon: Activity,
    title: 'Physical Activity',
    description:
      'Discover practical ways to include movement and breaks in your daily routine.'
  },
  {
    icon: Users,
    title: 'Social Connection',
    description:
      'Understand how supportive relationships and community participation contribute to well-being.'
  }
]

function Resources() {
  return (
    <DashboardLayout
      title="Wellness Resources"
      description="Simple educational resources to support healthier everyday habits."
    >
      <div className="glass-grid">
        {resources.map(({ icon: Icon, title, description }) => (
          <GlassCard
            key={title}
            icon={<Icon size={22} />}
            title={title}
            description={description}
          />
        ))}
      </div>

      <p className="muted" style={{ marginTop: 24 }}>
        These resources provide general educational information and are not
        a substitute for professional medical advice.
      </p>
    </DashboardLayout>
  )
}

export default Resources
```
