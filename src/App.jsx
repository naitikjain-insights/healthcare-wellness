import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Assessment from './pages/Assessment.jsx'
import MentalHealth from './pages/MentalHealth.jsx'
import Activity from './pages/Activity.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
return ( <BrowserRouter> <MainLayout> <Routes>
<Route path="/" element={<Home />} />
<Route path="/assessment" element={<Assessment />} />
<Route path="/mental-health" element={<MentalHealth />} />
<Route path="/activity" element={<Activity />} />
<Route
path="*"
element={<NotFound />}
/> </Routes> </MainLayout> </BrowserRouter>
)
}

export default App
