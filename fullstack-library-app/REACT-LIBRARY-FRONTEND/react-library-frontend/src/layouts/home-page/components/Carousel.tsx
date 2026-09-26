import {useEffect, useState} from "react";
import type {BooKModel} from "../../../models/BookModel.ts";
import {SpinnerLoading} from "../../../componenets/SpinnerLoading.tsx";


interface BookResponse{
  content: BooKModel[];
  page:{
    totalElements: number;
    totalPage: number;
  };
}

export const Carousel = () => {
  // now we create an endpoint that fetches the data form the spring boot api endpoint and returns the books we need.
  const [books,setBooks] = useState<BooKModel[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState<string | null>()


  useEffect(() => {
    const fetchBooks = async ()=> {
      try {
        const response = await fetch(
            "http://localhost:8080/api/books?pageNo=0&pagesize=3"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books.");
        }

        const data: BookResponse = await response.json();
        setBooks(data.content);
        setIsLoading(false);
      } catch(error){
        setIsLoading(false);
        setHttpError(error instanceof Error ? error.message : "An error occurred.");
      }
    };
    fetchBooks();


  }, []);

    if(isLoading) {
      return <SpinnerLoading/>;
    }

    if (httpError) {
      return <div>{httpError}</div>
    }


  return (
    <div className="container mt-5">
      <div className="homepage-carousel-title">
        <h3>Find your next "I stayed up too late reading" book.</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 
                  d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Desktop */}
        <div className="carousel-inner">
          {books.map((book,index) =>(
          <div key={book.id} className={`carousel-item ${index === 0 ? 'active':'' } `}>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="text-center">
                  <img
                    src={book.img}
                    width="151"
                    height="233"
                    alt="book"
                  />
                  <h6 className="mt-2">{book.title}</h6>
                  <p>{book.author}</p>
                  <a className="btn main-color text-white" href="#">
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          </div>

          ))}


          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          {books.length > 0 && (
          <div className="text-center">
            <img
              src={books[0].img}
              width="151"
              height="233"
              alt="book"
            />
            <h6 className="mt-2">{books[0].title}</h6>
            <p>{books[0].author}</p>
            <a className="btn main-color text-white" href="#">
              Reserve
            </a>
          </div>
          )}
        </div>

      </div>
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn-lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
};
