import Card from "./Card";
import { useState } from "react";

function Action(props:any) {
  
  // TODO : BackEnd, urutkan card berdasarkan waktu
  const card = props.cards
  
  // FILTER SLIDE
  const date = new Date()
  const today = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
  
  const newCard = card.filter((value:any) => {
    return value.date === today && value.status === "waiting"
  });

  // console.log(newCard)

  // HANDLE SLIDE
  const cardCount = 3
  const slideCount = Math.ceil(newCard.length / cardCount)
  const slideCountArrray = Array.from({length:slideCount}, (_, index) => index)

  const [activeSlide, setActiveSlide] = useState(0)

  const firstCard = activeSlide * cardCount
  const currentSlide = newCard.slice(firstCard, firstCard + cardCount)

  return (
    <div>

      {/* CARD */}
      <div className="flex gap-5 w-fit">
        {currentSlide.map((value:any, index:any) => (
          <Card.Action key={index} img={value.img} text={value.text} btn={value.btn} link={value.link} status={value.status}/>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-10 flex gap-3 justify-center items-center">
        {
          slideCountArrray.map((_, index) => (
            <div onClick={() => setActiveSlide(index)} key={index} className={`cursor-pointer w-10 h-3 rounded-full ${index === activeSlide ? "bg-brand-1 p-2" : "bg-[#DFDCD8]"}`} />
          ))
        }
      </div>

    </div>
  );
}

function Review(props:any) {
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
          <Card.Review key={index} img={value.img} star={value.star} text={value.text} />
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-10 flex gap-3 justify-center items-center">
        {
          slideCountArrray.map((_, index) => (
            <div onClick={() => setActiveSlide(index)} key={index} className={`cursor-pointer w-10 h-3 rounded-full ${index === activeSlide ? "bg-brand-1 p-2" : "bg-[#DFDCD8]"}`} />
          ))
        }
      </div>

    </div>
  );
}

const Slider = {
  Action,
  Review,
}

export default Slider;