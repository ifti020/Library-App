import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar"
import {HomePage} from "./layouts/home-page/HomePage.tsx";
import {Footer} from "./layouts/navigation-bars/Footer.tsx";
import {SearchBooksPage} from "./layouts/search-books-page/SearchBooksPage.tsx";
import {Route, Routes} from "react-router-dom";
import {BookCheckoutPage} from "./layouts/book-checkout-page/BookCheckoutPage.tsx";

function App() {

  return (
      <>
    {/*Added routing here*/}
      <NavigationBar/>
          <Routes>

              <Route path="/" element={<HomePage/>}/>
              <Route path="/search" element={ <SearchBooksPage/>} />
              <Route path ="/checkout/:id" element={<BookCheckoutPage/>} />

          </Routes>
        <Footer/>

      </>
  );
}

export default App
