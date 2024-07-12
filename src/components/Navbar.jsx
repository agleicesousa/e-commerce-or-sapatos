import React, { useState } from 'react';

import { HiOutlineShoppingBag, HiMenuAlt3 } from "react-icons/hi"
import { GoPerson } from "react-icons/go"
import { MdClose } from "react-icons/md"

export default function Navbar() {

  const [menuSuspenso, setMenuSuspenso] = useState(false)

  const mostreMenuSuspenso = () => {
    setMenuSuspenso(!menuSuspenso)
  }
  
  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center sticky top-0 z-50 bg-gradient-to-r from-color1 to-color2 lg:shadow-2x1">
      <div className="w-full">
        <div className="lg:w-4/5 w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <h2 className="text-withe font-bold text-lg">Tênis</h2>
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a href="#" className="leading-normal no-underline text-white text-lg hover:text-dark">Início</a>
            <a href="#" className="leading-normal no-underline text-white text-lg hover:text-dark">Catálogo</a>
            <a href="#" className="leading-normal no-underline text-white text-lg hover:text-dark">Marcas</a>
            <a href="#" className="leading-normal no-underline text-white text-lg hover:text-dark">Análises</a>
            <a href="#" className="leading-normal no-underline text-white text-lg hover:text-dark">Contato</a>
            <a href="#" className="leading-normal no-underline text-white text-lg hover:text-dark">Suporte</a>
          </ul>
          <div className="flex gap-4 max-lg:hidden">
            <button className="bg-dark rounded-full shadow h-10 w-10 outline-none text-white hover:bg-white hover:text-dark cursor-ponter text-base/6">
              <HiOutlineShoppingBag className="w-full h-full p-2"/>
            </button>
            <button className="bg-dark rounded-full shadow h-10 w-10 outline-none text-white hover:bg-white hover:text-dark cursor-ponter text-base/6">
              <GoPerson className="w-full h-full p-2"/>
            </button>
          </div>
          {menuSuspenso ? (
            <div onClick={mostreMenuSuspenso} className="lg:hidden text-[22px] cursor-pointer text-black">
              <MdClose />
            </div>
          ) : (
            <div onClick={mostreMenuSuspenso} className="lg:hidden text-[22px] cursor-pointer text-black">
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {menuSuspenso && (
          <div className="lg:hidden w-full fixed top-[4.5rem] bg-gradient-to-r from-color1 to-color2 transition-all">
            <div className="w-full flex flex-col items-baseline gap-4 p-4 pt-0">
              <ul className="flex flex-col justify-center w-full">
                <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Início</a>
                <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Catálogo</a>
                <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Marcas</a>
                <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Análises</a>
                <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Contato</a>
                <a href="#" className="flex justify-center py-2 leading-normal no-underline text-white text-lg hover:text-dark">Suporte</a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}