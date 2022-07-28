import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import WelcomeSection from './components/WelcomeSection';
import Greetings from './components/Greetings';
import Footer from './components/Footer';
import { BrowserRouter , Routes, Route, Link , Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      <Routes>
       <Route exact path="/" element={<Login/>}/>
       <Route exact path="/resetpassword" element={<ResetPassword/>}/>
       <Route exact path="/landingpage" element={<LandingPage/>}/>
    </Routes>
    </>
  );
}

export default App;
