import {useEffect, useState} from "react";
import type {BooKModel} from "../../models/BookModel.ts";
import {bookService} from "../../services/bookService.ts";
import {SpinnerLoading} from "../../componenets/SpinnerLoading.tsx";
import {CheckoutBox} from "./components/CheckoutBox.tsx";

export const BookCheckoutPage = () => {

  const bookId = window.location.pathname.split("/")[2];
  const [book, setBook] = useState<BooKModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () =>{
      try{
        const responseJson = await bookService.getBookById(bookId);
        setIsLoading(false);
        setBook(responseJson);
      }
      catch(error){
        setIsLoading(false);
        setHttpError(
            error instanceof  Error
                ? error.message
                : "An unexpected error occurred."
        );
      }
    };
    fetchBook();
  }, [bookId]);

  if(isLoading){
    return <SpinnerLoading/>
  }
  if(httpError){
    return <div>{httpError}</div>;
  }


  return (
    <>
      {/* Desktop View */}
      <div className="container d-none d-lg-block">
        <div className="row mt-5">
          <div className="col-sm-2 col-md-2">
            <img
              src={book?.img}
              width="226"
              height="349"
              alt="Book"
            />
          </div>
          <div className="col-4 col-md-4 container">
            <div className="ml-2">
              <h2>{book?.title}</h2>
              <h5 className="text-primary">{book?.author}</h5>
              <p className="lead">{book?.description}</p>
            </div>
          </div>
          <CheckoutBox/>
        </div>
        <hr />
      </div>
      {/* Mobile View */}
      <div className="container d-lg-none mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={"/images/book-images/book-1.png"}
            width="226"
            height="349"
            alt="Book"
          />
        </div>
        <div className="mt-4">
          <div className="ml-2">
            <h2>{book?.title}</h2>
            <h5 className="text-primary">{book?.author}</h5>
            <p className="lead">{book?.description}</p>
          </div>
        </div>
        <CheckoutBox/>
        <hr/>
      </div>
    </>
  );
};
