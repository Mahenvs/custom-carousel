import { useState } from "react";
import "./App.css";
import contact from "../assets/contact1.jpg";
import mealsImg from "../assets/meals.jpg";
import myself from "../assets/me_.jpg";
import me from "../assets/DSC09287_.jpg";

interface CarouselProps {
  images: string[];
}

const App: React.FC<CarouselProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      imgUrl: mealsImg,
    },
    {
      imgUrl: myself,
    },
    {
      imgUrl: me,
    },
    {
      imgUrl: contact,
    },
    {
      imgUrl: mealsImg,
    },
    {
      imgUrl: myself,
    },
  ];

  const goToNextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(newIndex);
  };

  const goToPrevSlide = () => {
    let newIndex;
    if (currentSlide > 0) {
      newIndex = (currentSlide - 1 + images.length) % images.length;
      setCurrentSlide(newIndex);
    }
  };

  return (
    <div className="carousel">
      <div className="flex">
        <button
          className={`${currentSlide == 0 ? "button" : ""}`}
          onClick={goToPrevSlide}
        >
          Prev
        </button>
        <div className="flex">
          {images.slice(currentSlide, currentSlide + 3).map((image, index) => (
            <span key={index}>
              <img src={image.imgUrl} className="imgStyle" />
            </span>
          ))}
        </div>
        <button 
        className={`${currentSlide == images.length-3 ? "button" : ""}`}

        onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default App;
