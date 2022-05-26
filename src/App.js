
import './App.css';
import RouteComponent from './component/Routes/Route.Component';
import NavBarComponent from './component/NavBar/NavBarComponent';
import FooterComponent from './component/Footer/Footer.Component';


function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <RouteComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
