"use client"
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { MarqueeDemo } from "./modulos/marque";
import PulsatingButton from "@/components/magicui/pulsating-button";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import * as React from "react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChevronsUpDown, Plus, X } from "lucide-react"
import NumberTicker from "@/components/magicui/number-ticker";
import { useRef } from "react";
import type { ConfettiRef } from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button"
import { Poppins } from 'next/font/google'
import Ripple from "@/components/magicui/ripple";
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "700"],
})

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const avatarUrls = [
  "https://cdn.bsky.app/img/avatar/plain/did:plc:tfpssovy4db6fmvschveeyzb/bafkreiat5bg5jvvu3kwummrol2p5cbzeuppugn34br26mvrt7vxjnhsoo4@jpeg",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://cdn.bsky.app/img/avatar/plain/did:plc:qruaxn2eewkli7hsvzxo5hwf/bafkreies6twejpi5zqmgjgpqeegr5rbpm2cmyraksdqx7n2uvjkt4ohv5u@jpeg",
];

export default function Home() {
  const [isOpen1, setIsOpen1] = React.useState(false)
  const [isOpen2, setIsOpen2] = React.useState(false)
  const [isOpen3, setIsOpen3] = React.useState(false)
  const [isOpen4, setIsOpen4] = React.useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen5, setIsOpen5] = React.useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen6, setIsOpen6] = React.useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <>
    <div className="container mx-auto px-4 sm:px-40 py-8 mt-16 text-center sm:text-left">
      <p className="text-3xl sm:text-5xl font-normal">Mude sua mentalidade <br></br> <span className="text-[#d14900] font-bold">Para mudar sua realidade</span></p>
      <p className="text-sm sm:text-base pb-6 max-w-full sm:max-w-[48%] pt-6">Luís, um ex entregador, mudou de vida ao ganhar na roleta online. Com estratégias de análises Roleta, deixando para trás a rotina exaustiva e se tornando um <span className="text-[#449e48] font-bold">empresário de sucesso.</span></p>

      <div className="inline-flex flex-col items-center">
        <PulsatingButton className="mb-4">QUERO FAZER PARTE</PulsatingButton>
        <div className="flex justify-center items-center">
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
          <a className="font-bold ml-2">2,000 + <span className="font-light">membros</span></a>
        </div>

      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>

    <div className="max-w-[80%] mx-auto px-4 py-8">
      <div className="relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>

    <MarqueeDemo />
    
    <div className="container mx-auto px-4 sm:px-40 py-8 mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center flex justify-center">

                  <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                <Image
                  src="/imgfunil.jpg"
                  alt="Imagem: Ganhos pela roleta."
                  fill  
                  style={{ objectFit: 'cover' }} 
                />
                </span>
                <BorderBeam size={250} duration={12} delay={9} />
              </div>
        
        
        </div>
        <div className="p-4">

        <div className="z-10">
      <div
        className={cn(
          "inline-block group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Faça parte!</span>
        </AnimatedShinyText>
      </div>
    </div>

        <p className="text-base pb-4 pt-2 text-justify">Se eu consegui transformar minha vida através da roleta, você também pode! Estou vivendo dessa forma há mais de um ano, aproveitando as estratégias e análises que me permitiram alcançar o sucesso. Não é apenas um sonho; é uma realidade que você também pode conquistar. Clique no botão abaixo para garantir sua vaga e começar sua própria jornada rumo ao sucesso na roleta. Não perca a chance de mudar sua vida para sempre!</p>
        <PulsatingButton className="mb-4">Entrar</PulsatingButton>
        </div>
      </div>
    </div>

          
  <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background mt-28">
    <Ripple />
    <div className="flex flex-col items-center justify-center">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-[#d14900] p-4">
        Não perca tempo.
      </p>
      
      <p className="px-4 font-medium max-w-xl mx-auto text-center">
      Se você está cansado de perder na roleta e quer finalmente aprender a ganhar de verdade, chegou o momento! Não fique de fora do nosso <span className="text-[#d14900] font-bold">GRUPO EXCLUSIVO DE ANÁLISES DA ROLETA</span> — onde só quem quer aprender a lucrar tem acesso.
      </p>
      
      <PulsatingButton className="mb-4 mt-4">Entrar</PulsatingButton>
    </div>
  </div>
  

    <section className="mx-auto px-4 sm:px-40 py-8 mt-28 text-center">
      <p className="text-[21px]">Faça como mais de</p>
      <p className="whitespace-pre-wrap text-3xl sm:text-5xl font-bold tracking-tighter dark:text-white text-[#d14900]">
        +<NumberTicker value={2398} /> membros
      </p>
      <p className="text-[21px] mt-2">e entre para nossa comunidade!</p>
    </section>

<div className="container mx-auto px-4 sm:px-10 lg:px-40 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Primeiro bloco */}
    <div className="rounded-lg p-6 shadow-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full text-white mb-4">
      <Image
          src="/Rocket.svg"
          alt="rocket.svg"
          width={200}
          height={200}
      />                              
      </div>
      <h2 className="text-lg font-bold mb-2">Análise profissional</h2>
      <p className="text-sm sm:text-base leading-relaxed text-justify">Com o meu método, você aprenderá a identificar padrões ocultos e tomar decisões mais informadas. Ao analisar as probabilidades de cada rodada, você desenvolverá uma visão estratégica que maximiza suas chances de sucesso na roleta.</p>
    </div>

    {/* Segundo bloco */}
    <div className="rounded-lg p-6 shadow-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full text-white mb-4">
      <Image
          src="/DirectHit.svg"
          alt="directhit.svg"
          width={200}
          height={200}
      />                                   
      </div>
      <h2 className="text-lg font-bold mb-2">Proteja seu capital</h2>
      <p className="text-sm sm:text-base leading-relaxed text-justify">Utilizando a técnica que desenvolvi, você verá como o gerenciamento eficiente do seu bankroll é crucial para o sucesso. Com práticas recomendadas e estratégias de apostas ajustadas, você protegerá seu capital e aumentará suas chances de lucro sustentável.</p>
    </div>

    {/* Terceiro bloco */}
    <div className="rounded-lg p-6 shadow-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full text-white mb-4">
      <Image
          src="/Memo.svg"
          alt="memo.svg"
          width={200}
          height={200}
      />                                 
      </div>
      <h2 className="text-lg font-bold mb-2">Estratégias claras</h2>
      <p className="text-sm sm:text-base leading-relaxed text-justify">Aproveitando o meu método, você poderá adotar uma abordagem mais disciplinada e controlada. Isso significa que você terá estratégias claras e gerenciáveis, ajudando a minimizar perdas e a manter o foco nos seus objetivos de ganhos.</p>
    </div>

  </div>
</div>

<section className="mx-auto px-4 sm:px-10 lg:px-40 py-8 text-center mt-28">
  <p className="whitespace-pre-wrap text-5xl font-bold tracking-tighter dark:text-white text-[#d14900]">
    Dúvidas frequentes
  </p>
</section>

{/* FAQ */}

<div className="container mx-auto px-4 sm:px-10 lg:px-40">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="rounded-lg">
      <Collapsible
        open={isOpen1}
        onOpenChange={setIsOpen1}
        className="w-full"
      >
        <div className="flex items-center justify-between space-x-4 px-6 border rounded-lg py-4">
          <h4 className="text-lg">
            Sou iniciante nesse mercado, não entendo nada, consigo ter resultados?
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4 text-[#d14900]" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className={`rounded-md border px-4 py-3 font-mono text-base mt-2 ${poppins.className}`}>
          Sim! Com a orientação certa e um método estruturado, mesmo iniciantes podem obter resultados. O importante é aprender as estratégias e aplicar as técnicas de forma disciplinada.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div className="rounded-lg">
      <Collapsible
        open={isOpen2}
        onOpenChange={setIsOpen2}
        className="w-full"
      >
        <div className="flex items-center justify-between space-x-4 px-6 border rounded-lg py-4">
          <h4 className="text-lg">
            Em quanto tempo posso esperar retorno financeiro?
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4 text-[#d14900]" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className={`rounded-md border px-4 py-3 font-mono text-base mt-2 ${poppins.className}`}>
          O retorno financeiro pode variar conforme o método utilizado e a dedicação. Muitos membros começam a ver resultados significativos em algumas semanas, mas é crucial ter paciência e continuar aprendendo.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</div>

{/* FAQ */}

<div className="container mx-auto px-4 sm:px-10 lg:px-40 mt-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="rounded-lg">
      <Collapsible
        open={isOpen3}
        onOpenChange={setIsOpen3}
        className="w-full"
      >
        <div className="flex items-center justify-between space-x-4 px-6 border rounded-lg py-4">
          <h4 className="text-lg">
            Existe alguém para me ajudar a esclarecer dúvidas durante o processo?
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4 text-[#d14900]" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className={`rounded-md border px-4 py-3 font-mono text-base mt-2 ${poppins.className}`}>
          Sim! Nossa comunidade é composta por membros ativos e experientes que estão sempre dispostos a ajudar. Você nunca estará sozinho na sua jornada.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div className="rounded-lg">
      <Collapsible
        open={isOpen4}
        onOpenChange={setIsOpen4}
        className="w-full"
      >
        <div className="flex items-center justify-between space-x-4 px-6 border rounded-lg py-4">
          <h4 className="text-lg">
            Qual é o valor mínimo que preciso investir para começar?
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4 text-[#d14900]" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className={`rounded-md border px-4 py-3 font-mono text-base mt-2 ${poppins.className}`}>
            O valor mínimo para começar pode variar, mas recomendamos um investimento inicial que permita aplicar as estratégias de forma eficaz, sem comprometer seu bankroll. O foco deve ser sempre na gestão responsável do capital.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</div>
{ /* FAQ */ }


<footer className="container mx-auto px-4 sm:px-10 lg:px-40 mt-28 mb-8">
  <div className="flex flex-col sm:flex-row justify-between items-center">
    {/* Logo */}
    <div className="text-[21px] font-normal text-center sm:text-left">
      <a className="font-bold text-[#d14900]">
        REVOLUÇÃO DA ROLETA™
      </a>
      <p className="text-sm">
        Copyright 2024
      </p>
    </div>
  </div>
</footer>



    </>
  );
}
