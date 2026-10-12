export function formatDate(date = new Date()) {
return new Intl.DateTimeFormat('en-IN', {
day: 'numeric',
month: 'short',
year: 'numeric',
}).format(date)
}

export function formatNumber(value) {
return new Intl.NumberFormat('en-IN').format(value)
}

export function capitalize(value = '') {
if (!value) return ''

return value.charAt(0).toUpperCase() + value.slice(1)
}

export function truncateText(text = '', maxLength = 120) {
if (text.length <= maxLength) return text

return `${text.slice(0, maxLength).trim()}...`
}
