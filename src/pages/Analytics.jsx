import { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

function Analytics() {
const [completed, setCompleted] = useState(false)

return ( <div className="app"> <DashboardLayout
     title="Health Analytics"
     description="Preview how a wellness dashboard can present habits and progress."
   > <div className="glass-grid"> <GlassCard
         icon="◷"
         title="Activity tracking"
         description="Track activity goals once real tracking data is connected."
       > <p className="card-label">DEMO STATUS</p> <strong>Awaiting data</strong> </GlassCard>

```
      <GlassCard
        icon="☾"
        title="Sleep monitoring"
        description="Review sleep trends when reliable sleep data becomes available."
      >
        <p className="card-label">DEMO STATUS</p>
        <strong>Awaiting data</strong>
      </GlassCard>

      <GlassCard
        icon="✓"
        title="Weekly reflection"
        description="Mark whether you have reviewed your wellness goals this week."
      >
        <button
          className="primary-button"
          onClick={() => setCompleted((previous) => !previous)}
        >
          {completed ? 'Marked complete ✓' : 'Mark reviewed'}
        </button>
      </GlassCard>
    </div>

    <p className="disclaimer">
      This page currently uses demo interactions. It does not
      collect health measurements or calculate clinical scores.
    </p>
  </DashboardLayout>
</div>
```

)
}

export default Analytics
