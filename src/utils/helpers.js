export function getGreeting(date = new Date()) {
const hour = date.getHours()

if (hour < 12) return 'Good morning'
if (hour < 17) return 'Good afternoon'

return 'Good evening'
}

export function filterByCategory(items, category) {
if (!category || category === 'All') {
return items
}

return items.filter(
(item) => item.category === category,
)
}

export function getInitials(name = '') {
return name
.trim()
.split(/\s+/)
.filter(Boolean)
.slice(0, 2)
.map((part) => part[0].toUpperCase())
.join('')
}
