import React from "react";
import Img1 from "./images/AVTR1.png";
import Img2 from "./images/AVTR2.jpeg";
import Img3 from "./images/AVTR3.png";
import Img4 from "./images/AVTR4.png";
const index = () => {
  return (
    <>
      <div
        id="reviews"
        className="h-[100vh] text-white flex items-center justify-center"
      >
        <div className="container w-[80%] h-90vh border-2 border-white p-10 grid grid-cols-3 gap-6 ">
          <ul className="space-y-5">
            <li>
              <section className="card h-auto border-2 max-h-min py-2">
                <header className="flex items-center py-2">
                  <img
                    src={Img2}
                    alt=""
                    className=" w-14 rounded-full h-14 ml-4"
                  />
                  <h1 className="ml-3"> Jasmeet Singh</h1>
                </header>
                <p className=" h-auto py-5 max-h-min w-[90%] mx-auto ">
                  Lorem ipsum dolor sit amet consecteturds,
                </p>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
