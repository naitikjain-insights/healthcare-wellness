import DashboardLayout from '../layouts/DashboardLayout.jsx'
import GlassCard from '../components/GlassCard.jsx'

const ideas = [
{
title: 'Connect with others',
description: 'Make time to talk with friends, family, or people you trust.',
},
{
title: 'Join your community',
description: 'Explore local groups, community activities, or volunteering opportunities.',
},
{
title: 'Offer support',
description: 'Small acts of kindness can help build meaningful relationships.',
},
]

function SocialWellbeing() {
return ( <div className="app"> <DashboardLayout
     title="Social Well-being"
     description="Explore the role of supportive relationships and community connection."
   > <div className="glass-grid">
{ideas.map((idea) => ( <GlassCard
           key={idea.title}
           icon="♡"
           title={idea.title}
           description={idea.description}
         />
))} </div> </DashboardLayout> </div>
)
}

export default SocialWellbeing
