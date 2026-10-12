import wellnessData from '../data/wellnessData.js'
import resourcesData from '../data/resourcesData.js'
import researchData from '../data/researchData.js'

function simulateRequest(data) {
return new Promise((resolve) => {
setTimeout(() => {
resolve(data)
}, 200)
})
}

export function getWellnessSections() {
return simulateRequest(wellnessData)
}

export function getResources() {
return simulateRequest(resourcesData)
}

export function getResearchReferences() {
return simulateRequest(researchData)
}

export function getWellnessSectionById(id) {
const section = wellnessData.find(
(item) => item.id === Number(id),
)

return simulateRequest(section ?? null)
}
