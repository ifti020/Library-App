import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {bookService} from "../../services/bookService.ts";
import {SpinnerLoading} from "../../componenets/SpinnerLoading.tsx";
import type {ReviewModel} from "../../models/ReviewModel.ts";
import {Review} from "../../componenets/Review.tsx";
import {Pagination} from "../../componenets/Pagination.tsx";

export const ReviewListPage = () => {

    const REVIEWS_PER_PAGE = 5;
    const {bookId} = useParams<{bookId: string}>();

    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [httpError, setHttpError] = useState<string | null >(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalReviews, setTotalReviews] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async() =>{
            if(!bookId)
            {
                setHttpError("Book ID is required");
                setIsLoading(false);
                return;
            }

            try{
                setIsLoading(true);
                const pageNo = currentPage - 1;
                const reviewsData = await bookService.getBookReviewsById(
                    bookId,
                    pageNo,
                    REVIEWS_PER_PAGE
                );
                setReviews(reviewsData.content);
                setTotalReviews(reviewsData.page.totalElements);
                setTotalPages(reviewsData.page.totalPages);
                setIsLoading(false);
                window.scrollTo(0, 0);
            }
            catch (error)
            {
                setIsLoading(false);
                setHttpError(error instanceof  Error ? error.message : "An error occurred" );
            }
        };
        fetchData();
    }, [bookId, currentPage]);

    if (isLoading) {
        return <SpinnerLoading/>
    }
    if (httpError) {
        return <div>{httpError}</div>
    }

    const indexOfFirstReview = (currentPage -1) * REVIEWS_PER_PAGE +1;
    const lastItem = Math.min(currentPage * REVIEWS_PER_PAGE, totalReviews);

    return (
        <div className="container mt-5">
            {/* Back Button */}
            <div className="row mb-4">
                <div className="col-12">
                    <Link to={`/checkout/${bookId}`} className="btn btn-secondary">
                        Back to Book Details
                    </Link>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="row">
                <div className="col-12">
                    <h3>All Reviews ({totalReviews})</h3>
                    {reviews.length > 0 ? (
                        <>
                        <p> {indexOfFirstReview} to {lastItem} of {totalReviews} reviews</p>
                            {reviews.map((review) => (
                                    <Review review = {review} key={review.id} />
                            ))}

                            {totalPages  > 1 && (
                                <Pagination currentPage={currentPage} totalPages={totalPages} paginate={setCurrentPage} />
                            )}
                        </>
                    ) : (
                        <div className="m-3">
                            <p className="lead">Currently there are no reviews for this book</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
