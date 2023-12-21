import Card from "@/components/default/Card";
import Navbar from "@/components/default/Navbar";
import Sidebar from "@/components/default/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

function Review() {
  const [dataReview, setDataReview] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bengkel-api-ruby.vercel.app/api/review`)
      .then((response) => {
        setDataReview(response.data);
      })
      .catch((error) => {
        return "Error : " + error;
      });
  }, []);

  return (
    <div className="h-screen bg-surface-1 text-gray-900 flex">
      <Sidebar />

      <div className="w-5/6 overflow-auto">
        <Navbar.Default2 text="Ulasan" />

        <div className="px-20">
          <div className="grid grid-cols-2 gap-5 pb-10">
            {dataReview?.map((value: any, index: any) => {
              return <Card.Review key={index} star={value.ratings} name={value.name} text={value.review} img={value.pict} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
