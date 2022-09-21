import Container from '@/components/layout/container';
import Marquee from 'react-fast-marquee';

const REVIEWS = [
  {
    review: "Leah's work is absolutely amazing!",
  },
  {
    review: ' I find her work both emotive and engaging.',
  },
  {
    review: "Leah's use of painting to create a sense of depth is amazing.",
  },
  {
    review:
      "Leah's work is simply beautiful, I can't help but smile when I see it.",
  },
  {
    review: 'These paintings are simply amazing!',
  },
  {
    review: 'Speechless!',
  },
  {
    review: 'Each piece has a unique and interesting story.',
  },
  {
    review:
      "I truly enjoy Leah's artwork and appreciate the depth of her artistic talents.",
  },
];

const Reviews = () => {
  return (
    <div className="border-y border-orange-300">
      <Container>
        <Marquee gradient={false} speed={50}>
          {REVIEWS.map(({ review }, index) => {
            return (
              <div
                key={index}
                className="mx-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text p-4 text-sm uppercase text-transparent"
              >
                {review}
              </div>
            );
          })}
        </Marquee>
      </Container>
    </div>
  );
};

export default Reviews;
