import type {ReviewModel} from "../../../models/ReviewModel.ts";
import * as React from "react";
import {Review} from "../../../componenets/Review.tsx";
import {Link} from "react-router-dom";

interface  LatestReviewsProp{
    reviews:ReviewModel[];
    bookId?: number;
}

export const LatestReviews : React.FC<LatestReviewsProp> = ({
    reviews,
    bookId,
                                                            }) => {
    return (
        <div className="row mt-5">
            <div className="col-12 col-lg-2">
                <h2>Latest Reviews:</h2>
            </div>
            <div className="col-12 col-lg-10">
                {reviews.length > 0 ?(
                    <>
                        {reviews.slice(0,3).map((eachReview)=>(
                            <Review key={eachReview.id} review={eachReview} />
                        ))}
                        <div className="m-3">
                            <Link type="button" className="btn btn-info btn-md text-white"
                                  to={`/reviewList/${bookId}`}>
                                Read all reviews
                                </Link>
                        </div>
                    </>
                ) :(
                    <div className="m-3">
                        <p className="lead">Currently there are no reviews for this book</p>
                    </div>
                ) }
            </div>
        </div>
    );

};
