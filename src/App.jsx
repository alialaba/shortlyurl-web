import { useState } from 'react';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/Navbar';

import Button from './components/Button';
import Footer from './components/Footer';


import featureData from "./utils/featureData";


function App() {
 
  const [showNavBar, setShowNavBar] = useState(false);

  const [featuresData, setFeaturesData] = useState(featureData);

  console.log(featureData);


  function handleShowNavBar(){
      setShowNavBar(!showNavBar)
  }

  return (
   
     <Router>
      {/* <a href='/home'>Hello Home Page</a> */}
      <Navbar handleShowNavBar={handleShowNavBar} showNavBar={showNavBar}/>
      <main>
      <Routes>
        <Route path='/' element={<Home featuresData={featuresData}/>}/>
        <Route path='/signup' element={<SignUp/>}/>

        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      </main>

      <Footer/>
     </Router>
   
  )
}

export default App
