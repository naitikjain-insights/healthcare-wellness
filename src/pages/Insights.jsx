import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

const insights = [
{
title: 'Build consistent habits',
description: 'Small, realistic changes can be easier to maintain over time.',
},
{
title: 'Make time for rest',
description: 'Consider how sleep and breaks fit into your daily routine.',
},
{
title: 'Review your progress',
description: 'Reflect on your goals regularly and adjust them to suit your circumstances.',
},
]

function Insights() {
return ( <div className="app"> <DashboardLayout
     title="Wellness Insights"
     description="Explore educational suggestions for everyday well-being."
   > <div className="glass-grid">
{insights.map((insight) => ( <GlassCard
           key={insight.title}
           icon="✳"
           title={insight.title}
           description={insight.description}
         />
))} </div>

```
    <p className="disclaimer">
      These are general educational insights, not AI-generated
      diagnoses or personalized medical recommendations.
    </p>
  </DashboardLayout>
</div>
```

)
}

export default Insights
