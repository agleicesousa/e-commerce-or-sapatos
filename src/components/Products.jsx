import React, { useState } from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import { SiSonarcloud } from 'react-icons/si';
import { MdCancel } from 'react-icons/md';
import { HiHeart } from 'react-icons/hi';
import listaSapatos from '../mocks/listaSapatos';

const categorias = [
  { nome: 'Nike', count: 200 },
  { nome: 'Adidas Original', count: 82 },
  { nome: 'Puma', count: 42 },
  { nome: 'Reebok', count: 106 },
  { nome: 'Converse', count: 40 },
];

const Categoria = ({ nome, ativo, setAtivo, count }) => (
  <p
    className={`hover:text-color1 cursor-pointer ${ativo === nome ? 'text-color1' : 'text-white'}`}
    onClick={() => setAtivo(nome)}
  >
    {nome} <span>({count})</span>
  </p>
);

const Produto = ({ nome, preco, img }) => (
  <div className="p-4" data-aos="fade-up" data-aos-delay="200">
    <div className="bg-[#4e4e50] h-64 w-full flex items-center justify-center relative overflow-hidden">
      <img src={img} alt={nome} className="w-full h-full object-cover" />
      <div className="absolute top-6 left-6">
        <button className="bg-gradient-to-r from-color1 to-color2 text-white rounded-full px-4 py-1 text-sm">NOVO</button>
      </div>
    </div>
    <div className="pt-4">
      <p className="text-white flex justify-between items-center">
        {nome} <HiHeart />
      </p>
      <p className="text-white">{preco}</p>
    </div>
  </div>
);

export default function Produtos() {
  const [ativo, setAtivo] = useState('Nike');

  return (
    <div className="bg-main_dark">
      <div className="xl:w-4/5 max-w-[1400px] px-6 mx-auto py-8">
        <div data-aos="fade-down" data-aos-duration="3000">
          <h2 className="text-4xl text-white font-semibold py-6">Produtos</h2>
          <div className="flex lg:flex-row flex-col items-center justify-between pt-12 pb-6 gap-8">
            <div className="flex items-center">
              <span className="flex flex-wrap items-center gap-8">
                {categorias.map((cat) => (
                  <Categoria key={cat.nome} {...cat} ativo={ativo} setAtivo={setAtivo} />
                ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {listaSapatos.map((produto) => (
              <Produto key={produto.nome} {...produto} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}