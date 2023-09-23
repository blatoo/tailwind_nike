import { ReviewCard } from "../components/ReviewCard";
import { reviews } from "../constants";

type CustomerReviewsProps = {};

export const CustomerReviews = (props: CustomerReviewsProps) => {
  return (
    <section className="max-container font-palanquin text-center text-4xl">
      <h3 className="font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly item-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};
