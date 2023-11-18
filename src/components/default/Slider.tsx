import Card from "./Card";
import { useState } from "react";

function Slider(props:any) {
  const cardPickup = props.cards

  const cardCount = 3
  const slideCount = Math.ceil(cardPickup.length / cardCount)
  const slideCountArrray = Array.from({length:slideCount}, (_, index) => index)

  const [activeSlide, setActiveSlide] = useState(0)

  const firstCard = activeSlide * cardCount
  const currentSlide = cardPickup.slice(firstCard, firstCard + cardCount)

  return (
    <div>

      {/* CARD */}
      <div className="flex gap-5 w-fit">
        {currentSlide.map((value:any, index:any) => (
          <Card key={index} img={value.img} text={value.text} btn={value.btn} link={value.link} />
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-10 flex gap-3 justify-center items-center">
        {
          slideCountArrray.map((_, index) => (
            <div onClick={() => setActiveSlide(index)} key={index} className={`active w-10 h-3 rounded-full ${index === activeSlide ? "bg-brand-1 p-2" : "bg-[#DFDCD8]"}`} />
          ))
        }
      </div>

    </div>
  );
}

export default Slider;