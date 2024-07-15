import React from 'react';
import { HiPlus } from 'react-icons/hi';
import img5 from '../assets/img5.png';
import img4 from '../assets/img4.png';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-color1 to-color2 lg:py-0 py-16 overflow-hidden" data-aos="fade-up">
      <div className="xl:w-4/5 px-6 max-w-[1400px] mx-auto relative lg:h-[70vh] flex flex-col justify-center">
        <div className="absolute top-24 right-40 lg:block hidden">
          <p className="lg:text-[12rem] font-semibold opacity-10 italic -tracking-widest">NIKE</p>
        </div>
        <div className="h-full flex justify-center items-center w-full overflow-hidden">
          <div className="bg-dark rounded-full shadow relative lg:w-96 w-64 lg:h-96 h-64">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-color2 to-color1 rounded-full p-4 absolute top-0 z-20">
              <p className="text-sm text-white">promo: Adidas</p>
              <p className="font-bold text-2xl">40%</p>
              <p className="font-bold text-2xl text-white">oferta</p>
            </div>
            <button className="text-white bg-gradient-to-r from-color2 to-color1 rounded-full shadow-2xl absolute w-10 h-10 top-8 right-5 z-20 flex items-center justify-center">
              <HiPlus size={20} />
            </button>
          </div>
          <img src={img5} alt="" className="rotate-[30deg] lg:w-auto w-4/5 absolute lg:pl-48 lg:pb-32 pb-16 z-10"/>
        </div>
        <div className="lg:absolute lg:w-1/3">
          <p className="text-gray-500 text-xl font-bold">02</p>
          <h2 className="text-5xl text-white font-bold py-8" data-aos="fade-down">Sapatos de marca.</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales ligula lorem, accumsan fringilla enim lobortis id. Sed fringilla ex suscipit fermentum vulputate.
          </p>
        </div>
        <div className="rounded-full shadow-2xl bg-gradient-to-r from-color2 to-color1 h-40 w-40 absolute right-[10%] lg:mt-32 lg:flex hidden items-center justify-center">
          <div className="h-32 w-32 rounded-full border border-solid border-gray-200">
            <img src={img4} alt="" className="w-full h-full m-auto"/>
            <button className="bg-dark text-white px-2 rounded-lg text-sm font-semibold absolute bottom-10 left-0">R$100.00</button>
            <button className="text-white bg-gradient-to-r from-color2 to-color1 rounded-full shadow-2xl absolute w-10 h-10 top-8 right-0 z-10 flex items-center justify-center">
              <HiPlus size={20} />
            </button>
            <p className="uppercase font-bold absolute top-[4.6rem] -right-16">AIR <span className="text-white">JORDAN</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}