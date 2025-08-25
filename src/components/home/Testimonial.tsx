import { Marquee } from "../magicui/marquee";
import { FaStar } from "react-icons/fa6";
const reviews = [
  {
    name: "Jack",
    role: "CEO, Achieve",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    rating: 5,
  },
  {
    name: "Jill",
    role: "CTO, Startup",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    rating: 5,
  },
  {
    name: "John",
    role: "Designer, Creative Agency",
    body: "I'm at a loss for words. This is amazing. I love it.",
    rating: 4,
  },
  {
    name: "Jane",
    role: "Developer, Tech Company",
    body: "I'm at a loss for words. This is amazing. I love it.",
    rating: 5,
  },
  {
    name: "Jenny",
    role: "Product Manager, SaaS",
    body: "I'm at a loss for words. This is amazing. I love it.",
    rating: 5,
  },
  {
    name: "James",
    role: "Marketing Lead, E-commerce",
    body: "I'm at a loss for words. This is amazing. I love it.",
    rating: 4,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const stars = [1, 2, 3, 4, 5];

const ReviewCard = ({
  name,
  role,
  body,
  rating = 5,
}: {
  name: string;
  role: string;
  body: string;
  rating?: number;
}) => {
  return (
    <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">{name}</figcaption>
          <p className="text-xs font-medium text-achieve-purple ">{role}</p>
          <div
            className={`mb-[20px] flex items-center gap-[5px] justify-start`}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                color={index < rating ? "#ffe435" : "#e4e5e9"}
                fontWeight={900}
                size={20}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialSlider() {
  return (
    <div className="relative  flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

const Testimonial = () => {
  return (
    <div className="  mx-auto px-4 py-16 pb-8">
      {/* Header */}
      <div
        className="flex justify-center items-center flex-col"
        style={{ marginBottom: "20px", gap: "4px" }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Testimonials</h2>
        <div className="flex gap-x-2">
          <div className="bg-purple-600 h-[5px] w-16 rounded-md"></div>
          <div className="bg-purple-600 h-[5px] w-24 rounded-md"></div>
        </div>
      </div>
      <div className="">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
