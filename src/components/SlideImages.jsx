import { useState } from "react";
import image22 from "../assets/image22.jpg";
import image23 from "../assets/image23.jpg";
import image24 from "../assets/image24.jpg";
import image25 from "../assets/image25.jpg";
import image26 from "../assets/image26.jpg";
import image27 from "../assets/image27.jpg";
import image28 from "../assets/image28.jpg";
import image29 from "../assets/image29.jpg";
import image30 from "../assets/image30.jpg";
import image31 from "../assets/image31.jpg";
import nitya from "../assets/nitya.jpg";

const images = [
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  nitya,
];

const SlideImages = () => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(null);

 
  const handleDragStart = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(x);
  };

 
  const handleDragEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - endX;

    if (diff > 50 && current < images.length - 1) {
      setCurrent(current + 1);
    } else if (diff < -50 && current > 0) {
      setCurrent(current - 1);
    }

    setStartX(null);
  };

  return (
    <div
      className="w-full h-screen overflow-hidden relative select-none"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onMouseLeave={() => setStartX(null)}
    >
    
      <div
        className="flex transition-transform duration-500 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img 
            key={i}
            src={img}
            alt={`slide-${i}`}
            className="w-full h-full object-cover flex-shrink-0"
            onDragStart={(e) => e.preventDefault()}
          />
        ))}
      </div>
      
    </div>
  );
};

export default SlideImages;
