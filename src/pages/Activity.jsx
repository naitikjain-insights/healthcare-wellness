import { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

function Activity() {
const [minutes, setMinutes] = useState(20)
const [saved, setSaved] = useState(false)

return (
<div className="app">
<DashboardLayout
     title="Physical Activity"
     description="Explore ways to include movement in your daily routine."
   >
<div className="glass-grid">
<GlassCard
         icon="⌁"
         title="Movement matters"
         description="Choose activities that suit your abilities, preferences, and circumstances."
       />

```
      <GlassCard
        icon="◷"
        title="Activity planner"
        description="Set a personal movement goal for your day."
      >
        <label className="activity-label" htmlFor="activity-minutes">
          Daily goal: {minutes} minutes
        </label>

        <input
          id="activity-minutes"
          type="range"
          min="5"
          max="120"
          step="5"
          value={minutes}
          onChange={(event) => {
            setMinutes(Number(event.target.value))
            setSaved(false)
          }}
        />

        <button
          className="primary-button"
          onClick={() => setSaved(true)}
        >
          Save goal
        </button>

        {saved && (
          <p role="status">
            Demo goal saved: {minutes} minutes.
          </p>
        )}
      </GlassCard>
    </div>

    <p className="disclaimer">
      Choose activity appropriate for your health and ability.
      Seek professional guidance if you are unsure what is safe for you.
      This demo does not store your goal permanently.
    </p>
  </DashboardLayout>
</div>
```

)
}

export default Activity
