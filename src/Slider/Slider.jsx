// Slider.jsx
import { useState } from "react";
import styled from "./Slider.module.css";

export default function Slider() {
  const slides = [
    {
      text: `"I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font."`,
      author: "Lena Brock, SF",
    },
    {
      text: `"Second client's feedback goes here. You can add as many slides as you want and they will be responsive."`,
      author: "John Doe, NY",
    },
    {
      text: `"Third client's feedback. Make this slider your own by editing text and styling."`,
      author: "Sarah Lee, LA",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <p className={styled.story}>CLIENTS STORIES</p>
    <div className={styled.sliderWrapper}>
        <div className={styled.sliderCard}>
          <p className={styled.sliderText}>{slides[currentIndex].text}</p>
          <h3 className={styled.sliderAuthor}>{slides[currentIndex].author}</h3>

          <button className={`${styled.arrow} ${styled.left}`} onClick={goPrev}>
            &#10094;
          </button>
          <button className={`${styled.arrow} ${styled.right}`} onClick={goNext}>
            &#10095;
          </button>

          <div className={styled.dots}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${styled.dot} ${currentIndex === index ? styled.active : ""
                  }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        {/* <div className={styled.bottomImg}>
          <img src="https://static.wixstatic.com/media/82fcd3_afa3902081194bdca7ad9a51f9656e96~mv2_d_5618_3745_s_4_2.jpeg/v1/fill/w_2275,h_1159,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_afa3902081194bdca7ad9a51f9656e96~mv2_d_5618_3745_s_4_2.jpeg" alt="" />
        </div> */}
    </div>
    </div>
  );
}
