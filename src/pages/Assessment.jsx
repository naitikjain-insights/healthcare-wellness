import { useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout.jsx'

const questions = [
'How would you describe your daily energy?',
'How often do you engage in physical activity?',
'How would you rate your sleep routine?',
'How often do you make time to relax?',
]

const options = [
['Low', 'Moderate', 'High'],
['Rarely', 'Sometimes', 'Regularly'],
['Needs improvement', 'Fair', 'Good'],
['Rarely', 'Sometimes', 'Often'],
]

function Assessment() {
const [answers, setAnswers] = useState({})
const [submitted, setSubmitted] = useState(false)

function handleSubmit(event) {
event.preventDefault()

```
if (Object.keys(answers).length !== questions.length) {
  return
}

setSubmitted(true)
```

}

return ( <div className="app"> <DashboardLayout
     title="Wellness Assessment"
     description="Reflect on your everyday habits with this educational self-check."
   >
{submitted ? ( <div className="glass-card"> <h3>Assessment completed</h3> <p>
Thank you for reflecting on your habits.
Use your answers as a starting point for setting
personal wellness goals. </p>
<button
className="primary-button"
onClick={() => {
setAnswers({})
setSubmitted(false)
}}
>
Start again </button> </div>
) : ( <form className="assessment-form" onSubmit={handleSubmit}>
{questions.map((question, index) => ( <fieldset className="glass-card" key={question}> <legend>{index + 1}. {question}</legend>

```
            {options[index].map((option) => (
              <label className="assessment-option" key={option}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => {
                    setAnswers((previous) => ({
                      ...previous,
                      [index]: option,
                    }))
                  }}
                />
                <span>{option}</span>
              </label>
            ))}
          </fieldset>
        ))}

        <button
          className="primary-button"
          type="submit"
          disabled={Object.keys(answers).length !== questions.length}
        >
          Complete Assessment
        </button>
      </form>
    )}
    <p className="disclaimer">
      This self-check is educational and is not a diagnosis
      or substitute for advice from a qualified professional.
    </p>
  </DashboardLayout>
</div>
```

)
}

export default Assessment
