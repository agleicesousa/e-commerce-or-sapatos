import React, { useState } from 'react'

import { TbArrowBackUp } from 'react-icons/tb'
import { SiSonarcloud } from 'react-icons/si'
import { MdCancel } from 'react-icons/md'
import { HiHeart, HiOutlineShoppingBag } from 'react-icons/hi'

import banner1 from '../assets/banner1.jpg'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'

export default function Produtos() {
    const [ativo, setAtivo] = useState('Nike')

    return (
        <div className="bg-main_dark">
            <div className="xl:w-4/5 max-w-[1400px] px-6 mx-auto py-8">
                <div data-aos="fade-down" data-aos-duration="3000">
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
                                    Adidas Original <span>(82)</span>
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
                            <SiSonarcloud className="text-white" />
                            <MdCancel className="text-white" />
                        </div>
                    </div>

                    <div className="lg:flex pt-16">
                        <div className="lg:w-2/5 w-full" data-aos="fade-up">
                            <p className="text-white flex gap-2 justify-between px-6">
                                NIKE WMNS ZOOM AIR FIRE 'WHITE/UNIVERSITY RED' <HiHeart />
                            </p>
                            <p className="text-white px-6 pb-8">Preço: R$190,00</p>
                        </div>
                        <div>
                            <div className="overflow-hidden relative w-[36rem]">
                                <img src={banner1} alt="Produto Nike" className="w-full hoverImg" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 w-full" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-full">
                            <div className="p-8">
                                <p className="text-white flex gap-2 justify-between">
                                    NIKE AIR MASTER 2090 <HiHeart />
                                </p>
                                <p className="text-white p-8">Preço: R$190,00</p>
                            </div>
                            <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative overflow-hidden">
                                <div className="relative w-1/2">
                                    <img src={img6} alt="Produto Nike" className="w-full hoverImg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className="p-8">
                            <p className="text-white flex gap-2 justify-between">
                                NIKE AIR VAPORMAX <HiHeart />
                            </p>
                            <p className="text-white">Preço: R$210,00</p>
                        </div>
                        <div className="bg-gradient-to-r from-color1 to-color2 h-64 flex justify-center items-center relative overflow-hidden">
                            <div className="relative">
                                <img src={img8} alt="Produto Nike" className="w-1/2 hoverImg" />
                            </div>
                            <div>
                                <p className="text-white">TRATAR</p>
                                <button className="bg-gradient-to-r from-color1 to-color2 text-white rounded-full px-4 py-1 text-sm"><HiOutlineShoppingBag className="w-full h-full p-2" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="400">
                        <div className="p-8">
                            <p className="text-white flex gap-2 justify-between">
                                NIKE AIR VAPORMAX <HiHeart />
                            </p>
                            <p className="text-white">Preço: R$2100,00</p>
                        </div>
                        <div className="bg-[#333335] mt-8 h-64 flex justify-center items-center relative">
                            <div>
                                <img src={img7} alt="Produto Nike" className="w-1/2 hoverImg" />
                            </div>
                            <div className="absolute top-6 flex justify-between items-center w-full px-6">
                                <p className="text-white">ESTRELA</p>
                                <button className="bg-gradient-to-r from-color1 to-color2 text-white rounded-full px-4 py-1 text-sm">NOVO</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:flex py-8">
                    <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="200">
                        <div className="p-8">
                            <p className="text-white flex gap-2 justify-between">
                                NIKE AIR MAX 2021 <HiHeart />
                            </p>
                            <p className="text-white">Preço: R$150,00</p>
                        </div>
                        <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative mt-6 overflow-hidden">
                            <div className="relative w-1/2">
                                <img src={img10} alt="Produto Nike" className="w-1/2 hoverImg" />
                            </div>
                            <div className="absolute top-6 flex justify-between items-center w-full px-6">
                                <p className="text-white">TRATAR</p>
                                <button className="bg-gradient-to-r from-color1 to-color2 text-white rounded-full px-4 py-1 text-sm">NOVO</button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3" data-aos="fade-up" data-aos-delay="400">
                        <div className="p-8">
                            <p className="text-white flex gap-2 justify-between">
                                NIKE AIR MAX VIVA <HiHeart />
                            </p>
                            <p className="text-white">Preço: R$170,00</p>
                        </div>
                        <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative mt-6 overflow-hidden">
                            <div className="w-1/2">
                                <img src={img11} alt="Produto Nike" className="w-1/2 hoverImg" />
                            </div>
                            <div className="absolute top-6 flex justify-between items-center w-full px-6">
                                <p className="text-white">DIA A DIA</p>
                                <button className="bg-gradient-to-r from-color1 to-color2 text-white rounded-full px-4 py-1 text-sm">NOVO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}