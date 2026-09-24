import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar"
import {ExploreTopBooks} from "./layouts/home-page/ExploreTopBooks";
import {Carousel} from "./layouts/home-page/Carousel.tsx";
import {Heros} from "./layouts/home-page/Heros.tsx";
import {LibraryServices} from "./layouts/home-page/LibraryServices.tsx";

function App() {


  return (
      <>

      <NavigationBar/>
      <ExploreTopBooks/>
          <Carousel/>
          <Heros/>
          <LibraryServices/>


      </>
  );
}

export default App
