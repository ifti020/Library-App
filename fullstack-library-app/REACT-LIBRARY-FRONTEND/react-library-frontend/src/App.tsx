import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar"
import {HomePage} from "./layouts/home-page/HomePage.tsx";
import {Footer} from "./layouts/navigation-bars/Footer.tsx";

function App() {


  return (
      <>

      <NavigationBar/>
      <HomePage/>
        <Footer/>

      </>
  );
}

export default App
