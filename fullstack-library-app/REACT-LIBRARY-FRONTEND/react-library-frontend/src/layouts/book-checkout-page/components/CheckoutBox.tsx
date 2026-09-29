import type {BooKModel} from "../../../models/BookModel.ts";
import {Link} from "react-router-dom";

export const CheckoutBox: React.FC<{book:BooKModel}> = (props) => {
  const isAvailable = (props.book?.copiesAvailable ?? 0 ) > 0;


  return (
    <div className="card d-flex mt-5 mb-5 col-12 col-lg-3">
      <div className="card-body container">
        <div className="mt-3">
          <p>
            <b>{(props.book?.copiesAvailable ?? 0) - (props.book?.copies ?? 0)} / {" "}
              {props.book.copiesAvailable ?? 0} {" "}
            </b>
            books checked out
          </p>
          <hr />
          {isAvailable ?(
              <h4 className="text-success">Available</h4>
          ):(
              <h4 className="text-danger">Wait List</h4>
          )
          }
          <div className="row">
            <p className="col-6 lead">
              <b>{props.book?.copies ?? 0}</b> copies
            </p>
            <p className="col-6 lead">
              <b>{props.book?.copiesAvailable ?? 0}</b> available
            </p>
          </div>
        </div>
        <Link to="#" className="btn btn-success btn-lg">
          Sign in
        </Link>
        <hr />
        <p className="mt-3">
          This number can change until placing order has been complete.
        </p>
        <p>Sign in to be able to leave a review.</p>
      </div>
    </div>
  );
};
