import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar"
import {ExploreTopBooks} from "./layouts/home-page/ExploreTopBooks";
import {Carousel} from "./layouts/home-page/Carousel.tsx";

function App() {


  return (
      <>

      <NavigationBar/>
      <ExploreTopBooks/>
          <Carousel/>

      </>
  );
}

export default App
