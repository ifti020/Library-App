import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar"
import {HomePage} from "./layouts/home-page/HomePage.tsx";
import {Footer} from "./layouts/navigation-bars/Footer.tsx";
import {SearchBooksPage} from "./layouts/search-books-page/SearchBooksPage.tsx";
import {Route, Routes} from "react-router-dom";
import {BookCheckoutPage} from "./layouts/book-checkout-page/BookCheckoutPage.tsx";
import {ReviewListPage} from "./layouts/review-list-page/ReviewListPage.tsx";

function App() {

  return (
      <div className="d-flex flex-column min-vh-100">
    {/*Added routing here*/}
      <NavigationBar/>
          <main className="flex-grow-1">
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/search" element={ <SearchBooksPage/>} />
              <Route path ="/checkout/:id" element={<BookCheckoutPage/>} />
              <Route path="/reviewlist/:bookId" element={<ReviewListPage/>}/>
          </Routes>
          </main>
        <Footer/>
      </div>
  );
}

export default App
