"use client";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Elemento {

    nome: string; 
    simbolo: string;
    numero_atomico: number;
    familia: string;
    massa_atomica: number;
    estado_da_materia: string;
}

const elementos: Elemento[] = [
  // Metais Alcalinos
  {
    "nome": "Lítio",
    "simbolo": "Li",
    "numero_atomico": 3,
    "familia": "Metais Alcalinos",
    "massa_atomica": 6.94,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Sódio",
    "simbolo": "Na",
    "numero_atomico": 11,
    "familia": "Metais Alcalinos",
    "massa_atomica": 22.99,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Potássio",
    "simbolo": "K",
    "numero_atomico": 19,
    "familia": "Metais Alcalinos",
    "massa_atomica": 39.098,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Rubídio",
    "simbolo": "Rb",
    "numero_atomico": 37,
    "familia": "Metais Alcalinos",
    "massa_atomica": 85.468,
    "estado_da_materia": "sólido"
  },

  // Metais Alcalino-Terrosos
  {
    "nome": "Berílio",
    "simbolo": "Be",
    "numero_atomico": 4,
    "familia": "Metais Alcalino-Terrosos",
    "massa_atomica": 9.0122,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Magnésio",
    "simbolo": "Mg",
    "numero_atomico": 12,
    "familia": "Metais Alcalino-Terrosos",
    "massa_atomica": 24.305,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Cálcio",
    "simbolo": "Ca",
    "numero_atomico": 20,
    "familia": "Metais Alcalino-Terrosos",
    "massa_atomica": 40.078,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Estrôncio",
    "simbolo": "Sr",
    "numero_atomico": 38,
    "familia": "Metais Alcalino-Terrosos",
    "massa_atomica": 87.62,
    "estado_da_materia": "sólido"
  },

  // Boro (Família do Boro)
  {
    "nome": "Boro",
    "simbolo": "B",
    "numero_atomico": 5,
    "familia": "Boro",
    "massa_atomica": 10.81,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Alumínio",
    "simbolo": "Al",
    "numero_atomico": 13,
    "familia": "Boro",
    "massa_atomica": 26.982,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Gálio",
    "simbolo": "Ga",
    "numero_atomico": 31,
    "familia": "Boro",
    "massa_atomica": 69.723,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Índio",
    "simbolo": "In",
    "numero_atomico": 49,
    "familia": "Boro",
    "massa_atomica": 114.82,
    "estado_da_materia": "sólido"
  },

  // Carbono (Família do Carbono)
  {
    "nome": "Carbono",
    "simbolo": "C",
    "numero_atomico": 6,
    "familia": "Carbono",
    "massa_atomica": 12.011,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Silício",
    "simbolo": "Si",
    "numero_atomico": 14,
    "familia": "Carbono",
    "massa_atomica": 28.085,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Germânio",
    "simbolo": "Ge",
    "numero_atomico": 32,
    "familia": "Carbono",
    "massa_atomica": 72.63,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Estanho",
    "simbolo": "Sn",
    "numero_atomico": 50,
    "familia": "Carbono",
    "massa_atomica": 118.71,
    "estado_da_materia": "sólido"
  },

  // Nitrogênio (Família do Nitrogênio)
  {
    "nome": "Nitrogênio",
    "simbolo": "N",
    "numero_atomico": 7,
    "familia": "Nitrogênio",
    "massa_atomica": 14.007,
    "estado_da_materia": "gasoso"
  },
  {
    "nome": "Fósforo",
    "simbolo": "P",
    "numero_atomico": 15,
    "familia": "Nitrogênio",
    "massa_atomica": 30.974,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Arsênio",
    "simbolo": "As",
    "numero_atomico": 33,
    "familia": "Nitrogênio",
    "massa_atomica": 74.922,
    "estado_da_materia": "sólido"
  },

  // Calcogênios
  {
    "nome": "Oxigênio",
    "simbolo": "O",
    "numero_atomico": 8,
    "familia": "Calcogênios",
    "massa_atomica": 15.999,
    "estado_da_materia": "gasoso"
  },
  {
    "nome": "Enxofre",
    "simbolo": "S",
    "numero_atomico": 16,
    "familia": "Calcogênios",
    "massa_atomica": 32.06,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Selênio",
    "simbolo": "Se",
    "numero_atomico": 34,
    "familia": "Calcogênios",
    "massa_atomica": 78.971,
    "estado_da_materia": "sólido"
  },

  // Halogênios
  {
    "nome": "Flúor",
    "simbolo": "F",
    "numero_atomico": 9,
    "familia": "Halogênios",
    "massa_atomica": 18.998,
    "estado_da_materia": "gasoso"
  },
  {
    "nome": "Cloro",
    "simbolo": "Cl",
    "numero_atomico": 17,
    "familia": "Halogênios",
    "massa_atomica": 35.45,
    "estado_da_materia": "gasoso"
  },
  {
    "nome": "Bromo",
    "simbolo": "Br",
    "numero_atomico": 35,
    "familia": "Halogênios",
    "massa_atomica": 79.904,
    "estado_da_materia": "líquido"
  },

  // Gases Nobres
  {
    "nome": "Hélio",
    "simbolo": "He",
    "numero_atomico": 2,
    "familia": "Gases Nobres",
    "massa_atomica": 4.0026,
    "estado_da_materia": "gasoso"
  },
  {
    "nome": "Neônio",
    "simbolo": "Ne",
    "numero_atomico": 10,
    "familia": "Gases Nobres",
    "massa_atomica": 20.18,
    "estado_da_materia": "gasoso"
  },
  {
    "nome": "Argônio",
    "simbolo": "Ar",
    "numero_atomico": 18,
    "familia": "Gases Nobres",
    "massa_atomica": 39.948,
    "estado_da_materia": "gasoso"
  },
  {
    "nome": "Criptônio",
    "simbolo": "Kr",
    "numero_atomico": 36,
    "familia": "Gases Nobres",
    "massa_atomica": 83.798,
    "estado_da_materia": "gasoso"
  },

  // Metais (Transição e Outros)
  {
    "nome": "Escândio",
    "simbolo": "Sc",
    "numero_atomico": 21,
    "familia": "Metais",
    "massa_atomica": 44.956,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Titânio",
    "simbolo": "Ti",
    "numero_atomico": 22,
    "familia": "Metais",
    "massa_atomica": 47.867,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Vanádio",
    "simbolo": "V",
    "numero_atomico": 23,
    "familia": "Metais",
    "massa_atomica": 50.942,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Cromo",
    "simbolo": "Cr",
    "numero_atomico": 24,
    "familia": "Metais",
    "massa_atomica": 51.996,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Manganês",
    "simbolo": "Mn",
    "numero_atomico": 25,
    "familia": "Metais",
    "massa_atomica": 54.938,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Ferro",
    "simbolo": "Fe",
    "numero_atomico": 26,
    "familia": "Metais",
    "massa_atomica": 55.845,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Cobalto",
    "simbolo": "Co",
    "numero_atomico": 27,
    "familia": "Metais",
    "massa_atomica": 58.933,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Níquel",
    "simbolo": "Ni",
    "numero_atomico": 28,
    "familia": "Metais",
    "massa_atomica": 58.693,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Cobre",
    "simbolo": "Cu",
    "numero_atomico": 29,
    "familia": "Metais",
    "massa_atomica": 63.546,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Zinco",
    "simbolo": "Zn",
    "numero_atomico": 30,
    "familia": "Metais",
    "massa_atomica": 65.38,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Ítrio",
    "simbolo": "Y",
    "numero_atomico": 39,
    "familia": "Metais",
    "massa_atomica": 88.906,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Zircônio",
    "simbolo": "Zr",
    "numero_atomico": 40,
    "familia": "Metais",
    "massa_atomica": 91.224,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Nióbio",
    "simbolo": "Nb",
    "numero_atomico": 41,
    "familia": "Metais",
    "massa_atomica": 92.906,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Molibdênio",
    "simbolo": "Mo",
    "numero_atomico": 42,
    "familia": "Metais",
    "massa_atomica": 95.95,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Tecnécio",
    "simbolo": "Tc",
    "numero_atomico": 43,
    "familia": "Metais",
    "massa_atomica": 98.0,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Rutênio",
    "simbolo": "Ru",
    "numero_atomico": 44,
    "familia": "Metais",
    "massa_atomica": 101.07,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Ródio",
    "simbolo": "Rh",
    "numero_atomico": 45,
    "familia": "Metais",
    "massa_atomica": 102.91,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Paládio",
    "simbolo": "Pd",
    "numero_atomico": 46,
    "familia": "Metais",
    "massa_atomica": 106.42,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Prata",
    "simbolo": "Ag",
    "numero_atomico": 47,
    "familia": "Metais",
    "massa_atomica": 107.87,
    "estado_da_materia": "sólido"
  },
  {
    "nome": "Cádmio",
    "simbolo": "Cd",
    "numero_atomico": 48,
    "familia": "Metais",
    "massa_atomica": 112.41,
    "estado_da_materia": "sólido"
  }
]

export function Quiz () {
    
    const [indice, setIndice] = useState<number[]>([]);
    const [resultado, setResultado] = useState(false);
    const [simbolo, setSimbolo] = useState(false);
    const [familia, setFamilia] = useState(false);
    const [atual, setAtual] = useState<number>(0);
    const [entrada, setEntrada] = useState("")
    const [pontos, setPontos] = useState(0)
    const [indiceamostrador, setindiceamostrador] = useState<number | null>(null)
    const numeros: number[] = [];
    
    useEffect(() => {
        const indice = Math.floor(Math.random() * 50)
        setindiceamostrador(indice)
    }, [])

      
    const removeracentos = (texto: string) => {
        return texto
          .toLowerCase()
          .replace(/á|à|ã|â|ä/g, 'a')
          .replace(/é|è|ê|ë/g, 'e')
          .replace(/í|ì|î|ï/g, 'i')
          .replace(/ó|ò|õ|ô|ö/g, 'o')
          .replace(/ú|ù|û|ü/g, 'u')
          .replace(/ç/g, 'c')
      }

    function sortear (e: string){
        
        for(let i = 0; i < 10; i++){
            const numero = Math.floor(Math.random() * 50);

            if(!numeros.includes(numero)){
                numeros.push(numero);
            }
        
        }
	

        setIndice(numeros);

        if(e == "simbolo"){
          setSimbolo(true);
          setFamilia(false);
        }
        if(e == "familia"){
          setFamilia(true);
          setSimbolo(false);
        } 

      setAtual(0);
    }   
	
    function avancar(e: string) {

      if(e == "simbolo"){
        const respostacerta = removeracentos(elementos[indice[atual]].nome.toLowerCase());
        const respostausuario = removeracentos(entrada.trim().toLowerCase());
        
        if(respostacerta == respostausuario){
          setPontos(pontos + 1);
        }

      }
      if(e == "familia"){
        const respostacerta = removeracentos(elementos[indice[atual]].familia.toLowerCase());
        const respostausuario = removeracentos(entrada.trim().toLowerCase());
        
        if(respostacerta == respostausuario){
          setPontos(pontos + 1);
        }

      }
        
        setEntrada("");

        if(atual < indice.length - 1){
            setAtual(atual + 1);
        }
        else{
            setResultado(true);
            setFamilia(false);
            setSimbolo(false);
        }

    }

    return (
      <>
        <div className="flex justify-center p-4">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 m-3">
            {/* Show initial selection if neither game is active */}
            {!simbolo && !familia ? (
              <>
                <div className="bg-[#1c1c1f] rounded-lg aspect-square w-20 flex items-center justify-center text-white text-4xl font-bold mb-2">
                  {indiceamostrador !== null && elementos[indiceamostrador].simbolo}
                </div>
                <p className="mb-2">pelo simbolo, de nome aos componentes:</p>
                <Button onClick={() => sortear("simbolo")} className="w-full mb-6">
                  Iniciar
                </Button>
    
                <div className="mt-8 bg-[#1c1c1f] rounded-lg aspect-square w-20 flex items-center justify-center text-white text-4xl font-bold mb-2">
                  {indiceamostrador !== null && elementos[indiceamostrador].simbolo}
                </div>
                <p className="mb-2">
                  {indiceamostrador !== null && elementos[indiceamostrador].nome}
                </p>
                <p className="mb-2">tendo simbolo e nome, indique a família do elemento:</p>
                <Button onClick={() => sortear("familia")} className="w-full">
                  Iniciar
                </Button>
              </>
            ) : null}
    
            {/* Show symbol quiz if active */}
            {simbolo && (
              <>
                <p className="mb-4">{atual + 1}. questao</p>
                <div className="bg-[#1c1c1f] rounded-lg aspect-square w-20 flex items-center justify-center text-white text-4xl font-bold mb-4">
                  {elementos[indice[atual]].simbolo}
                </div>
                <Input
                  className="mb-2"
                  placeholder="Digite aqui..."
                  value={entrada}
                  onChange={(e) => setEntrada(e.target.value)}
                />
                <Button onClick={() => avancar("simbolo")} className="w-full mb-2">
                  Proximo
                </Button>
                <p>pontuacao: {pontos}</p>
              </>
            )}
    
            {/* Show family quiz if active */}
            {familia && (
              <>
                <p className="mb-4">{atual + 1}. questao</p>
                <div className="bg-[#1c1c1f] rounded-lg aspect-square w-20 flex items-center justify-center text-white text-4xl font-bold mb-2">
                  {elementos[indice[atual]].simbolo}
                </div>
                <p className="mb-2">
                  {elementos[indice[atual]].nome}
                </p>
                <Input
                  className="mb-2"
                  placeholder="Digite a família do elemento..."
                  value={entrada}
                  onChange={(e) => setEntrada(e.target.value)}
                />
                <Button onClick={() => avancar("familia")} className="w-full mb-2">
                  Proximo
                </Button>
                <p>pontuacao: {pontos}</p>

                <p className='mt-4'>metais alcalinos, metais alcalinos terrosos, boro, carbono, nitrogenio, calcogenios, halogenios, gases nobres, metais.</p>
              </>
            )}

            {resultado && (
              <>
                <p className='mt-10'>pontuacao final: {pontos}</p>
              </>
            )}

          </div>
        </div>
      </>
    );
}
