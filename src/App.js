import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import ResetPassword from './components/ResetPassword';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import WelcomeSection from './components/WelcomeSection';
import Greetings from './components/Greetings';

function App() {
  return (
    <>
    {/* <Login /> */}
    {/* <ResetPassword /> */}
    <Navbar/>
    <Carousel/>
    <WelcomeSection/>
    <Greetings/>
    </>
  );
}

export default App;
