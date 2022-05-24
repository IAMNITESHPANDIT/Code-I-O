

// import FormComponent from './component/Form/FormComponent';
import NavBarComponent from './component/NavBar/NavBarComponent';
// import StateFullComponent from './component/State/StateFull.Component';
import { Routes, Route} from "react-router-dom";
import PasswordReset from './component/PasswordReset/PasswordReset';
import HomePage from './pages/Home/Home.Page';
import FooterComponent from './component/Footer/Footer.Component';
import AboutPage from './pages/AboutUs/AboutPage';
import ContactusComponent from './pages/ContactUs/ContactusComponent';
import ErrorPage from './pages/Error/ErrorPage';
import formComponent from './component/Form/FormComponent';
import FormComponent from './component/Form/FormComponent';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactusComponent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
