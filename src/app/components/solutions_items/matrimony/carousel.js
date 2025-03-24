import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import carouselSty from "./carousel.module.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Wedding 1",
    text: "“Our existing chat system struggled with the growing user base, leading to performance hiccups. We had to shift, and with AddChat, we improved our matching algorithm, increasing match rates by 20%.”",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcfko4VAZJJGM4OHDMC4AciePcXTTLGoy6w&s",
    author: "Reetu Singh",
    designation: "Product Manager",
  },
  {
    image:
      "https://www.candidshutters.com/maintenance/wp-content/uploads/2024/06/Best-wedding-photographers-India-Top-5-destination-wedding-photographers-Indian-weddings-2.jpg",
    alt: "Wedding 2",
    text: "“A seamless integration with AddChat allowed us to boost user engagement by 30%, creating meaningful connections.”",
    logo: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230224091946.jpg",
    author: "Arjun Mehra",
    designation: "CTO, Matrimony App",
  },
  {
    image:
      "https://cdn0.weddingwire.in/vendor/9778/3_2/960/jpg/wedding-photographers-shaadigram-art-couple-shot-3_15_449778-168613815393146.jpeg",
    alt: "Wedding 3",
    text: "“AddChat’s real-time chat improved our platform significantly. Users now connect effortlessly, and our retention rates have skyrocketed.”",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7OFdEEZduebRh58MO-Up4qkbFzsBPdNrtA&s",
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
      <h1>10 years and 50,000+ customer Stories</h1>
      <p>Customer Stories</p>

      <div className={carouselSty.arrowBtn}>
        <button className={carouselSty.leftArrow} onClick={prevSlide}>
          <FaChevronLeft size={18} />
        </button>
        <button className={carouselSty.rightArrow} onClick={nextSlide}>
          <FaChevronRight size={18} />
        </button>
      </div>

      <div
        className={carouselSty.slideContainer}
        style={{ transform: `translateX(calc(-${currentIndex * 95}% - 40px))` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${carouselSty.slide} ${
              index === slides.length - 1 ? carouselSty.lastSlide : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={carouselSty.image}
              onClick={nextSlide}
            />
            <div className={carouselSty.overlay}>
              <div className={carouselSty.testimonial}>
                <img
                  src={slide.logo}
                  alt="Company Logo"
                  className={carouselSty.logo}
                />
                <div className={carouselSty.text_content}>
                  <p className={carouselSty.text}>{slide.text}</p>
                  <div className={carouselSty.author}>
                    <div>
                      <span className={carouselSty.name}>{slide.author}</span> —{" "}
                      <span className={carouselSty.role}>
                        {slide.designation}
                      </span>
                    </div>
                    <button className={carouselSty.readMore}>
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
