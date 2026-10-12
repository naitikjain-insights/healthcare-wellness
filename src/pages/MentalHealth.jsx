import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

const tips = [
{
title: 'Mindful breathing',
description:
'Take a comfortable pause and breathe slowly without forcing your breath.',
},
{
title: 'Take restorative breaks',
description:
'Make space for short breaks during your day and notice how you feel.',
},
{
title: 'Stay connected',
description:
'Consider reaching out to someone you trust when you need support.',
},
]

function MentalHealth() {
return ( <div className="app"> <DashboardLayout
     title="Mental Well-being"
     description="Explore gentle, everyday practices that may support emotional well-being."
   > <div className="glass-grid">
{tips.map((tip) => ( <GlassCard
           key={tip.title}
           icon="♡"
           title={tip.title}
           description={tip.description}
         />
))} </div>

```
    <p className="disclaimer">
      These suggestions are educational and are not a replacement
      for professional mental health care.
    </p>
  </DashboardLayout>
</div>
```

)
}

export default MentalHealth
