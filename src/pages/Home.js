import React from "react";
import landing from "../assets/landing.png";

// Example partner logos
const partners = [
  { image: "partner1.png", name: " BFG" },
  { image: "partner2.png", name: "Rockworth" },
  { image: "partner3.png", name: "Everton" },
  { image: "partner4.png", name: "Blendhub" },
  { image: "partner5.png", name: "Astrotech" },
  { image: "partner6.png", name: "Zen Linen" },
  { image: "partner7.png", name: "Vermeiren" },
  { image: "partner8.png", name: "Airmaster" },
];

const Home = () => {
  return (
    <div>
      <div className="flex mt-20 flex-col lg:flex-row items-center justify-center text-black">
        <div className="lg:w-1/2 p-9">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-8xl font-bold mb-4">
              Welcome to JobBord
            </h1>
            <p className="text-lg lg:text-5xl mb-8">
              The best place to find your job{" "}
              <span className="font-bold">@SRICITY</span>
            </p>
            <div className="flex justify-center lg:justify-start space-x-14 mb-8">
              <a
                href="https://github.com"
                className="bg-black lg:text-4xl text-white px-4 py-2 rounded"
              >
                Find job
              </a>
              <a
                href="https://figma.com"
                className="bg-gradient-to-r from-orange-600 to-yellow-300 lg:text-4xl text-white px-4 py-2 rounded"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="p-8 flex justify-center lg:justify-end">
          <img src={landing} alt="Illustration" className="w-[100vw] max-w-md" />
        </div>
      </div>
      <div className="text-black p-6">
        <p className="text-3xl lg:text-6xl font-bold mb-4 text-center font-style: italic">
          Our Partners
        </p>
        <div className="overflow-hidden">
          <style>
            {`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll 30s linear infinite;
              }
            `}
          </style>
          <div className="flex animate-scroll space-x-10 space-y-10 w-[200%]">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="inline-block w-60 p-4 bg-gradient-to-r from-orange-600 to-yellow-300 rounded-lg"
              >
                
                <p className="text-center font-bold text-2xl ">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
