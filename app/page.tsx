"use client"
import { MarqueeDemo } from "./modulos/marque";
import PulsatingButton from "@/components/magicui/pulsating-button";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import * as React from "react"
import { ChevronsUpDown, Plus, X } from "lucide-react"
import NumberTicker from "@/components/magicui/number-ticker";
import { useRef } from "react";
import type { ConfettiRef } from "@/components/magicui/confetti";
import Confetti from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button"
import { Poppins } from 'next/font/google'
import Ripple from "@/components/magicui/ripple";
import ShinyButton from "@/components/magicui/shiny-button";

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
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export default function Home() {
  const [isOpen1, setIsOpen1] = React.useState(false)
  const [isOpen2, setIsOpen2] = React.useState(false)
  const [isOpen3, setIsOpen3] = React.useState(false)
  const [isOpen4, setIsOpen4] = React.useState(false)
  const [isOpen5, setIsOpen5] = React.useState(false)
  const [isOpen6, setIsOpen6] = React.useState(false)
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <>
    <div className="container mx-auto px-4 sm:px-40 py-8 mt-16 text-center sm:text-left">
      <p className="text-3xl sm:text-5xl font-normal">Mude sua mentalidade <br></br> <span className="text-[#d14900] font-bold">Para mudar sua realidade</span></p>
      <p className="text-sm sm:text-base pb-6 max-w-full sm:max-w-[48%] pt-6">Marcos, um ex entregador, mudou de vida ao ganhar na roleta online. Com estratégias de análises Roleta, deixando para trás a rotina exaustiva e se tornando um <span className="text-[#d14900] font-bold">empresário de sucesso.</span></p>

      <div className="inline-flex flex-col items-center">
        <PulsatingButton className="mb-4">QUERO FAZER PARTE</PulsatingButton>
        <div className="flex justify-center items-center">
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
          <a className="font-bold ml-2">2,000 + <span className="font-light">membros</span></a>
        </div>

      </div>

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

                  <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  imagem
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, error. Ex porro molestias aperiam voluptatibus. Veniam cumque dolores molestias quas nulla aut ipsam atque necessitatibus corrupti, sequi facere id eum.
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
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#d14900] text-white mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>                                   
      </div>
      <h2 className="text-lg font-bold mb-2">Título aqui</h2>
      <p className="text-sm sm:text-base leading-relaxed text-justify">Com o meu método, você aprenderá a identificar padrões ocultos e tomar decisões mais informadas. Ao analisar as probabilidades de cada rodada, você desenvolverá uma visão estratégica que maximiza suas chances de sucesso na roleta.</p>
    </div>

    {/* Segundo bloco */}
    <div className="rounded-lg p-6 shadow-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#d14900] text-white mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>                                   
      </div>
      <h2 className="text-lg font-bold mb-2">Título aqui</h2>
      <p className="text-sm sm:text-base leading-relaxed text-justify">Utilizando a técnica que desenvolvi, você verá como o gerenciamento eficiente do seu bankroll é crucial para o sucesso. Com práticas recomendadas e estratégias de apostas ajustadas, você protegerá seu capital e aumentará suas chances de lucro sustentável.</p>
    </div>

    {/* Terceiro bloco */}
    <div className="rounded-lg p-6 shadow-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#d14900] text-white mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>                                   
      </div>
      <h2 className="text-lg font-bold mb-2">Título aqui</h2>
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
          <h4 className="font-bold text-lg">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti quo provident dignissimos, laudantium dolorum saepe delectus. Ullam mollitia quia facilis dolore minima, sint accusamus tempore assumenda vitae, voluptatem neque.
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
          <h4 className="font-bold text-lg">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti quo provident dignissimos, laudantium dolorum saepe delectus. Ullam mollitia quia facilis dolore minima, sint accusamus tempore assumenda vitae, voluptatem neque.
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
          <h4 className="font-bold text-lg">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti quo provident dignissimos, laudantium dolorum saepe delectus. Ullam mollitia quia facilis dolore minima, sint accusamus tempore assumenda vitae, voluptatem neque.
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
          <h4 className="font-bold text-lg">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti quo provident dignissimos, laudantium dolorum saepe delectus. Ullam mollitia quia facilis dolore minima, sint accusamus tempore assumenda vitae, voluptatem neque.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</div>
{ /* FAQ */ }

<div className="container mx-auto px-4 sm:px-10 lg:px-40 mt-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="rounded-lg">
      <Collapsible
        open={isOpen3}
        onOpenChange={setIsOpen3}
        className="w-full"
      >
        <div className="flex items-center justify-between space-x-4 px-6 border rounded-lg py-4">
          <h4 className="font-bold text-lg">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti quo provident dignissimos, laudantium dolorum saepe delectus. Ullam mollitia quia facilis dolore minima, sint accusamus tempore assumenda vitae, voluptatem neque.
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
          <h4 className="font-bold text-lg">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti quo provident dignissimos, laudantium dolorum saepe delectus. Ullam mollitia quia facilis dolore minima, sint accusamus tempore assumenda vitae, voluptatem neque.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</div>

{/* FAQ */}

<div className="container mx-auto px-4 sm:px-10 lg:px-40 mt-8 mb-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="rounded-lg">
      <Collapsible
        open={isOpen5}
        onOpenChange={setIsOpen5}
        className="w-full"
      >
        <div className="flex items-center justify-between space-x-4 px-6 border rounded-lg py-4">
          <h4 className="font-bold text-lg">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti quo provident dignissimos, laudantium dolorum saepe delectus. Ullam mollitia quia facilis dolore minima, sint accusamus tempore assumenda vitae, voluptatem neque.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div className="rounded-lg">
      <Collapsible
        open={isOpen6}
        onOpenChange={setIsOpen6}
        className="w-full"
      >
        <div className="flex items-center justify-between space-x-4 px-6 border rounded-lg py-4">
          <h4 className="font-bold text-lg">
            Preciso ter experiência anterior para começar?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti quo provident dignissimos, laudantium dolorum saepe delectus. Ullam mollitia quia facilis dolore minima, sint accusamus tempore assumenda vitae, voluptatem neque.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</div>


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
