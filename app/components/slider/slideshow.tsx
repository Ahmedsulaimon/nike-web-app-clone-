import { useState, useEffect } from "react";
import Link from "next/link";

interface Slide {
  header: string;
  desc?: string;
  learnMore?: string;
  joinUs?: string;
  shop?: string;
}

interface SlideshowProps {
  content: Slide[];
  autoSlideDuration: number;
}

const Slideshow: React.FC<SlideshowProps> = ({
  content,
  autoSlideDuration,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto slide to the next slide after a certain duration
  useEffect(() => {
    const timer = setTimeout(goToNextSlide, autoSlideDuration);
    return () => clearTimeout(timer);
  }, [currentIndex, autoSlideDuration, goToNextSlide]);

  // Ensure the content array has the expected structure

  return (
    <div>
      <div
        className="w-full h-auto transition-transform"
        style={
          currentIndex === 0
            ? { transform: `translateX(${currentIndex * 100}%)` }
            : { transform: `translateX(-${currentIndex * 100}%)` }
        }
      >
        <h1> {content[currentIndex].header}</h1>
        <p> {content[currentIndex].desc}</p>
      </div>
    </div>
  );
};

export default Slideshow;
