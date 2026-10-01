import './App.css'
import {NavigationBar} from "./layouts/navigation-bars/NavigationBar"
import {HomePage} from "./layouts/home-page/HomePage.tsx";
import {Footer} from "./layouts/navigation-bars/Footer.tsx";
import {SearchBooksPage} from "./layouts/search-books-page/SearchBooksPage.tsx";
import {Route, Routes} from "react-router-dom";
import {BookCheckoutPage} from "./layouts/book-checkout-page/BookCheckoutPage.tsx";
import {ReviewListPage} from "./layouts/review-list-page/ReviewListPage.tsx";
import {AuthProvider} from "./auth/AuthContext.tsx";
import {ProtectedPage} from "./layouts/protected-page/ProtectedPage.tsx";
import {PrivateRoute} from "./auth/PrivateRoute.tsx";

function App() {

  return (
// adding authentication
      <AuthProvider>
      <div className="d-flex flex-column min-vh-100">
    {/*Added routing here*/}
      <NavigationBar/>
          <main className="flex-grow-1">
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/search" element={ <SearchBooksPage/>} />
              <Route path ="/checkout/:id" element={<BookCheckoutPage/>} />
              <Route path="/reviewlist/:bookId" element={<ReviewListPage/>}/>

              {/*add new routing for protecting page*/}
              <Route
                  path="/protectedpage"
                  element={
                  <PrivateRoute>
                  <ProtectedPage/>
                  </PrivateRoute>
              }
              />
          </Routes>
          </main>
        <Footer/>
      </div>
      </AuthProvider>
  );
}

export default App
