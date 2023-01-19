import React from 'react';
import onestop from "../assets/portfolio/onestop.jpg";
import schoolidmanagement from "../assets/portfolio/schoolidmanagement.jpg";
import cucon from "../assets/portfolio/cucon.jpg";



const Portfolio = () => {

  const portfolios =[
    {
      id:1,
      src: onestop,
      title: "OneStop Fitness Solution",
      link:"https://github.com/numaan0/Onestopfitness"
    },{
      id:2,
      src: schoolidmanagement,
      title: "School ID card Management",
      link:"https://github.com/numaan0/SchoolIdManagement"
    },{
      id:3,
      src: cucon,
      title:"CuCon- Currency Converter Mobile App",
      link:"https://github.com/numaan0/CurrencyConvertor"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 mt-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,title,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 "
              />
                <h3 className='text-white text-center mt-1'>{title}</h3>
              <div className="flex items-center justify-center">
              
                <a href={link} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 mb-1">
                 Click for Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolio
