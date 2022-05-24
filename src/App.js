
import './App.css';
// import FormComponent from './component/Form/FormComponent';
import NavBarComponent from './component/NavBar/NavBarComponent';
// import StateFullComponent from './component/State/StateFull.Component';
import { Routes, Route} from "react-router-dom";
import PasswordReset from './component/PasswordReset/PasswordReset';
import HomePage from './pages/Home/Home.Page';
import FooterComponent from './component/Footer/Footer.Component';
// import ContactusComponent from './component/ContactUs/ContactusComponent';

function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <HomePage/>
      <FooterComponent/>
    
    </div>
  );
}

export default App;
