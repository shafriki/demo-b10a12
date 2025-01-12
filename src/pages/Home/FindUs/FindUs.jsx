import React from "react";
import { Parallax, Background } from 'react-parallax';
import { Link } from "react-router-dom";


const FindUs = () => {
  return (
    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage='https://i.ibb.co.com/hdf8ypj/pexels-joao-godoy-706154396-24308068.jpg'
    bgImageAlt="the dog"
    strength={-200} 
    >
    <div className="hero-overlay h-[330px] md:h-[400px] bg-opacity-60 bg-cover bg-center bg-no-repeat text-white ">


      {/* text content */}
      <div className="relative max-w-7xl mx-auto py-8 px-3 md:py-16 md:px-6 text-left">
        <h6 className="text-[#2AB7B1] font-bold text-lg">Your Generosity, Their Warmth</h6>

        <h1 className="font-bold text-lg md:text-4xl mt-2 md:mt-4">Contribute to WarmUp Bangladesh</h1>

        <p className="mt-2 md:mt-6 text-xs md:text-base text-justify  max-w-3xl">
          Your donation to WarmUp Bangladesh Winter Special program is a lifeline for many.
          Together, we can donate clothes to the homeless to create a positive
          impact and help to lessen the suffering that the winter season can
          bring. Join us in extending warmth and support to those who are in
          need.
        </p>

        <Link  className="btn  border-none mt-3 md:mt-8 md:px-6 md:py-3 bg-[#2AB7B1] text-white font-semibold text-xs md:text-lg rounded-lg hover:bg-[#1b7773] transition duration-300">Click Me </Link>
      </div>
    </div>

    </Parallax>
  );
};

export default FindUs;