import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import carouselSty from "./carousel.module.css";

const slides = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000",
    alt: "Wedding 1",
    text: "“Our existing chat system struggled with the growing user base, leading to performance hiccups. We had to shift, and with AddChat, we improved our matching algorithm, increasing match rates by 20%.”",
    logo: "/shaadi-logo.png",
    author: "Reetu Singh",
    designation: "Product Manager",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/046/463/053/small_2x/tiger-face-running-to-hunt-down-prey-in-winter-on-snow-snowfall-climate-blurred-background-photo.jpg",
    alt: "Wedding 2",
    text: "“A seamless integration with AddChat allowed us to boost user engagement by 30%, creating meaningful connections.”",
    logo: "/tinder-logo.png",
    author: "Arjun Mehra",
    designation: "CTO, Matrimony App",
  },
  {
    image:
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    alt: "Wedding 3",
    text: "“AddChat’s real-time chat improved our platform significantly. Users now connect effortlessly, and our retention rates have skyrocketed.”",
    logo: "/bumble-logo.png",
    author: "Priya Sharma",
    designation: "Head of Product",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={carouselSty.carousel}>
      <div className={carouselSty.arrowBtn}>
        <button className={carouselSty.leftArrow} onClick={prevSlide}>
          <FaChevronLeft size={18} />
        </button>
        <button className={carouselSty.rightArrow} onClick={nextSlide}>
          <FaChevronRight  size={18} />
        </button>
      </div>

      <div
        className={carouselSty.slideContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={carouselSty.slide}>
            <img
              src={slide.image}
              alt={slide.alt}
              className={carouselSty.image}
            />
            <div className={carouselSty.overlay}>
              <div className={carouselSty.testimonial}>
                <img
                  src={slide.logo}
                  alt="Company Logo"
                  className={carouselSty.logo}
                />
                <p className={carouselSty.text}>{slide.text}</p>
                <div className={carouselSty.author}>
                  <span className={carouselSty.name}>{slide.author}</span> —{" "}
                  <span className={carouselSty.role}>{slide.designation}</span>
                </div>
                <button className={carouselSty.readMore}>Read more →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
