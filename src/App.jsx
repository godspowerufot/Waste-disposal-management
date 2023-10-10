import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ContainersOpenningHours from './waste-Mangement-Folder/onboardingScreeen/ContainerOpeninhHoursDays';
import WelcomeScreen from './waste-Mangement-Folder/onboardingScreeen/onboardingScreen'
import DisplayOpeningHours from './waste-Mangement-Folder/onboardingScreeen/customdatepicer';
function App() {
  return (
    <>
    <Router>
    <Routes>
     
     
      <Route path="/" element={<WelcomeScreen/>} />
      <Route path="/containers" element={<ContainersOpenningHours/>} />
      <Route path="/containers" element={<DisplayOpeningHours/>} />
     
    </Routes>
  </Router>

    </>
  )
}

export default App
