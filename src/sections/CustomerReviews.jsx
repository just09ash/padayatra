import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        अस्माकं
        <span className='text-coral-red'> ग्राहकः </span>
        किं वदति?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center info-text'>
        श्रृणुष्व वास्तविक कथाः अस्माकं संतुष्टाः ग्राहकाः प्रस्तुताः यथा
        तेषाम् असामान्याः अनुभवाः आसन्।
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
