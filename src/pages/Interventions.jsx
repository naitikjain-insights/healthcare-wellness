import { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

const suggestions = [
{
id: 1,
title: 'Movement break',
description: 'Consider taking a short movement break during your day.',
},
{
id: 2,
title: 'Wind-down routine',
description: 'Try creating a relaxing routine before bedtime.',
},
{
id: 3,
title: 'Mindful pause',
description: 'Set aside a few minutes for quiet reflection or comfortable breathing.',
},
]

function Interventions() {
const [selected, setSelected] = useState([])

function toggleSuggestion(id) {
setSelected((previous) =>
previous.includes(id)
? previous.filter((item) => item !== id)
: [...previous, id],
)
}

return ( <div className="app"> <DashboardLayout
     title="Wellness Action Plan"
     description="Choose small, practical habits you would like to work on."
   > <div className="glass-grid">
{suggestions.map((suggestion) => {
const isSelected = selected.includes(suggestion.id)

```
        return (
          <GlassCard
            key={suggestion.id}
            icon="✳"
            title={suggestion.title}
            description={suggestion.description}
          >
            <button
              className="secondary-button"
              onClick={() => toggleSuggestion(suggestion.id)}
              aria-pressed={isSelected}
            >
              {isSelected ? 'Added to plan ✓' : 'Add to my plan'}
            </button>
          </GlassCard>
        )
      })}
    </div>

    <p className="disclaimer">
      Selected habits remain in this page's temporary state only.
      This is a general wellness planner, not a treatment plan.
    </p>
  </DashboardLayout>
</div>
```

)
}

export default Interventions
