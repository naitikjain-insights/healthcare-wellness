```jsx
import { useEffect, useState } from 'react'
import {
  getWellnessSections,
  getResources,
  getResearchReferences
} from '../services/healthService.js'

export function useWellnessData() {
  const [data, setData] = useState({
    sections: [],
    resources: [],
    references: []
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function loadData() {
      try {
        const [sections, resources, references] = await Promise.all([
          getWellnessSections(),
          getResources(),
          getResearchReferences()
        ])

        if (active) {
          setData({ sections, resources, references })
          setError('')
        }
      } catch {
        if (active) {
          setError('Unable to load wellness information.')
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadData()

    return () => {
      active = false
    }
  }, [])

  return { ...data, loading, error }
}
```
