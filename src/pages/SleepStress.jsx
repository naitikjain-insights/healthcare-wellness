import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

function SleepStress() {
return ( <div className="app"> <DashboardLayout
     title="Sleep & Stress"
     description="Explore simple routines that support rest and everyday stress management."
   > <div className="glass-grid"> <GlassCard
         icon="☾"
         title="Sleep routine"
         description="Try maintaining a consistent bedtime and creating a calm sleeping environment."
       />

```
      <GlassCard
        icon="◌"
        title="Relaxation breaks"
        description="Make time for comfortable breathing, gentle stretching, or quiet breaks."
      />

      <GlassCard
        icon="✳"
        title="Daily reflection"
        description="Notice your energy, mood, and routines without judging yourself."
      />
    </div>

    <p className="disclaimer">
      These are general wellness suggestions, not medical advice.
    </p>
  </DashboardLayout>
</div>
```

)
}

export default SleepStress
