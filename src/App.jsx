import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ContainersOpenningHours from './waste-Mangement-Folder/onboardingScreeen/ContainerOpeninhHoursDays';
import WelcomeScreen from './waste-Mangement-Folder/onboardingScreeen/onboardingScreen'
import OpeningHoursProvider from './waste-Mangement-Folder/onboardingScreeen/contextApi';
import DisplayOpeningHours from './waste-Mangement-Folder/onboardingScreeen/customdatepicer';
import ComfirmationPage from './waste-Mangement-Folder/onboardingScreeen/ConfirmationPage';
import LoginScreen from './waste-Mangement-Folder/onboardingScreeen/AuthPage/signin';
import PickOff from './waste-Mangement-Folder/schedulePickOffromHome/pickOffavaibility';
import MangeWasteScreen from './waste-Mangement-Folder/onboardingScreeen/ManagingWastePage';
import AddImageContainer from './waste-Mangement-Folder/onboardingScreeen/addImageContainer';
import SignUpScreen from './waste-Mangement-Folder/onboardingScreeen/AuthPage/signup';
import LocationList from './waste-Mangement-Folder/scheduleDropOff/locationOfthedustbin';
import AddHomeAdress from './waste-Mangement-Folder/schedulePickOffromHome/addAdress';
import ComfirmationPageAddress from './waste-Mangement-Folder/schedulePickOffromHome/confirmationpick';
import { DisplayAddImage } from './waste-Mangement-Folder/onboardingScreeen/seeContainerImage';
import DisplayImageFromDatabase from './waste-Mangement-Folder/scheduleDropOff/schedule-off';
import PageDropOff from './waste-Mangement-Folder/scheduleDropOff/scheduleComfirmationPage';
import MapDirection from './waste-Mangement-Folder/scheduleDropOff/MapDirection';
function App() {
  return (
    <>
     <OpeningHoursProvider>
    <Router>
    <Routes>
 
   
      <Route path="/" element={<WelcomeScreen/>} />
      <Route path="/ManageWaste" element={<MangeWasteScreen/>} />
      <Route path="/ManageWaste/DropOff" element={<DisplayImageFromDatabase/>} />
      <Route path="/ManageWaste/DropOff/DropOffConfirmed" element={<PageDropOff/>} />
      <Route path='/ManageWaste/DropOff/Location' element={<LocationList/>}></Route>
      <Route path='/MapView' element={<MapDirection/>}></Route>
      <Route path="/ManageWaste/pick" element={<PickOff/>} />
      <Route path="/ManageWaste/pick/AddAddress/Addressconfirmed" element={<ComfirmationPageAddress/>} />
      <Route path="/ManageWaste/pick/AddAddress" element={<AddHomeAdress/>} />
      <Route path="/login" element={<LoginScreen/>} />
      <Route path="/SignUp" element={<SignUpScreen/>} />
      <Route path="/ManageWaste/containers" element={<ContainersOpenningHours/>} />
      <Route path="/SubmitContainerDetail" element={<DisplayOpeningHours/>} />
      <Route path="/confirmation" element={<ComfirmationPage/>} />
      <Route path="/AddImage" element={<AddImageContainer/>} />
    </Routes>
  </Router>
  </OpeningHoursProvider>

    </>
  )
}

export default App
