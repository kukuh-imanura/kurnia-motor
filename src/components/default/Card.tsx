function Review() {
  const star = 5;

  return (
    <div className="bg-white shadow-md rounded-xl p-10 h-fit space-y-5">
      <img src="/assets/images/review/1.png" alt="" />

      <div className="flex justify-center">
        {
          Array.from({length:star}).map((_, index) => (
            <img key={index} src="/assets/icons/star.png" alt="⭐" />
          ))
        }
      </div>

      <div>
        <p className="font-bold text-center text-lg">Nama</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam possimus vero architecto commodi, obcaecati temporibus ut maxime delectus quasi quam sapiente provident veritatis soluta eaque illum animi quibusdam saepe?</p>
      </div>

    </div>
  );
}

const Card = {
  Review,
};

export default Card;
