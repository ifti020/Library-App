import type {BooKModel} from "../../models/BookModel.ts";
import {SearchBook} from "./components/SearchBook.tsx";
import {useEffect, useState} from "react";
import {bookService} from "../../services/bookService.ts";
import {SpinnerLoading} from "../../componenets/SpinnerLoading.tsx";

export const SearchBooksPage = () => {
  const [books,setBooks] = useState<BooKModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<string | null >(null);
  useEffect(() => {
    const fetchBooks = async () => {
      try{
        const data = await bookService.getBooks(0,5);
        setBooks(data.content);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error instanceof Error ? error.message : "An error occurred");
      }
    };
    fetchBooks();
  },[]);

  if (isLoading) {
    return <SpinnerLoading/>
  }
  if (httpError) {
    return <div>{httpError}</div>
  }


  return (
    <>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-6">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-labelledby="Search"
                />
                <button className="btn btn-outline-success">Search</button>
              </div>
            </div>

            <div className="col-4">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Front End
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Back End
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DevOps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <h5>Number of results: (3)</h5>
          </div>

          <p>1 to 3 of 3 items:</p>

          {books.map((book) => (
            <SearchBook book={book} key={book.id} />
          ))}
        </div>
      </div>
    </>
  );
};
