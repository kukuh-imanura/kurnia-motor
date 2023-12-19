function Review(props:any) {
  const star = props.star;

  return (
    <div key={props.key} className="bg-white shadow-md rounded-xl p-10 h-fit space-y-5">
      <img src={`/assets/images/review/${props.img}`} alt="" />

      <div className="flex justify-center">
        {
          Array.from({length:star}).map((_, index) => (
            <img key={index} src="/assets/icons/star.png" alt="⭐" />
          ))
        }
      </div>

      <div>
        <p className="font-bold text-center text-lg">{props.name}</p>
        <p>{props.text}</p>
      </div>

    </div>
  );
}

const Card = {
  Review,
};

export default Card;
