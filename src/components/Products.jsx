import React, { useState } from 'react'

import { TbArrowBackUp } from 'react-icons/tb'
import { SiSonarcloud } from "react-icons/si";
import { MdCancel } from 'react-icons/md'

export default function Products() {

  const [ativo, setAtivo] = useState('Nike')
  
  return (
    <div className="bg-main_dark">
      <div className="xl:w-4/5 max-w-[1400px] px-6 mx-auto py-8">
        <div data-aos="fade-down" date-aos-duration="3000">
          <h2 className="text-4xl text-white font-semibold py-6">Produtos</h2>
          <div className="flex lg:flex-row flex-col items-center justify-between pt-12 pb-6 gap-8">
            <div className="flex items-center">
              <span className="flex flex-wrap items-center gap-8">
                <p className={`hover:text-color1 cursor-pointer ${ativo === 'Nike' ? 'text-color1' : 'text-white'}`} 
                  onClick={() => setAtivo('Nike')}>
                  Nike <span>(200)</span>
                </p>
                <p className={`hover:text-color1 cursor-pointer ${ativo === 'Adidas' ? 'text-color1' : 'text-white'}`} 
                  onClick={() => setAtivo('Adidas')}>
                  Adidas original <span>(82)</span>
                </p>
                <p className={`hover:text-color1 cursor-pointer ${ativo === 'Puma' ? 'text-color1' : 'text-white'}`} 
                  onClick={() => setAtivo('Puma')}>
                  Puma <span>(42)</span>
                </p>
                <p className={`hover:text-color1 cursor-pointer ${ativo === 'Reebok' ? 'text-color1' : 'text-white'}`} 
                  onClick={() => setAtivo('Reebok')}>
                  Reebok <span>(106)</span>
                </p>
                <p className={`hover:text-color1 cursor-pointer ${ativo === 'Converse' ? 'text-color1' : 'text-white'}`} 
                  onClick={() => setAtivo('Converse')}>
                  Converse <span>(40)</span>
                </p>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <p className="underline text-white flex items-center gap-2 cursor-pointer hover:text-color1">
                Recentes <TbArrowBackUp />
              </p>
              <p className="underline text-white flex items-center gap-2 cursor-pointer hover:text-color1">
                UK Size <TbArrowBackUp />
              </p>
              <SiSonarcloud className="text-white"/>
              <MdCancel className="text-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}