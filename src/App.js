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
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeAdd from './components/Employeeadd';
import PrivateRoute from './components/util/PrivateRoute';
import EditEmployee from './components/EditEmployee';
import Forget from './components/Forget';
import Hiring from './components/Hiring';
import EmployeeReimbursement from './components/EmployeeReimbursement';
import PersonalInfo from './components/PersonalInfo';
import Ethics_Policies from '../src/components/Ethics_Policies';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <>
    {/* <Forget/> */}
      <Routes>
       <Route exact path="/" element={<Login/>}/>
       <Route  path="/resetpassword/:tkn" element={<ResetPassword/>}/>
       <Route exact path="/landingpage/:role" element={<PrivateRoute><LandingPage/></PrivateRoute>}/>
       <Route exact path="/landingpage/admin/employeedetails" element={<PrivateRoute><EmployeeDetail/></PrivateRoute>}/>
       <Route exact path="/landingpage/admin/addemployee" element={<PrivateRoute><EmployeeAdd/></PrivateRoute>}/>
       <Route exact path="/landingpage/hiring" element={<PrivateRoute><Hiring/></PrivateRoute>}/>
       <Route exact path="/landingpage/reimbursement" element={<PrivateRoute><EmployeeReimbursement/></PrivateRoute>}/>
       <Route exact path="/landingpage/personalinfo" element={<PrivateRoute><PersonalInfo/></PrivateRoute>}/>
       <Route exact path="/landingpage/socialmedia" element={<PrivateRoute><SocialMedia/></PrivateRoute>}/>



       <Route exact path="/landingpage/ethicspolicies" element={<PrivateRoute><Ethics_Policies/></PrivateRoute>}/>
       <Route exact path="/forget/" element={<Forget/>}/>

       <Route exact path="/landingpage/admin/:id" element={<PrivateRoute><EditEmployee/></PrivateRoute>}/>

    </Routes>
    </>
  );
}

export default App;
