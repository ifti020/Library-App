import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar"
import {HomePage} from "./layouts/home-page/HomePage.tsx";
import {Footer} from "./layouts/navigation-bars/Footer.tsx";
import {SearchBooksPage} from "./layouts/search-books-page/SearchBooksPage.tsx";

function App() {


  return (
      <>

      <NavigationBar/>
      {/*<HomePage/>*/}
          <SearchBooksPage/>
        <Footer/>

      </>
  );
}

export default App
