import type {BooKModel} from "../../models/BookModel.ts";
import {SearchBook} from "./components/SearchBook.tsx";


const dummyBooks: BooKModel[] = [
  {
    id: 1,
    author: "Author One",
    title: "Book Title One",
    description: "Description for book one.",
    img: "/images/book-images/book-1.png",
  },
  {
    id: 2,
    author: "Author Two",
    title: "Book Title Two",
    description: "Description for book two.",
    img: "/images/book-images/book-2.png",
  },
  {
    id: 3,
    author: "Author Three",
    title: "Book Title Three",
    description: "Description for book three.",
    img: "/images/book-images/book-3.png",
  },
];

export const SearchBooksPage = () => {
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

          {dummyBooks.map((dummyBook) => (
            <SearchBook book={dummyBook} key={dummyBook.id} />
          ))}
        </div>
      </div>
    </>
  );
};
