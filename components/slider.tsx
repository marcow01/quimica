"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import { Button } from "@/components/ui/button";
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "./custom/customswiper.css"

const images = [
  "https://images.unsplash.com/photo-1643199319409-84b7066f45b9?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586920740099-f3ceb65bc51e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
export function Banner() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop
      className="w-full h-screen"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-full">
            <img src={src} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            
            <main className="h-full flex items-center justify-center text-white">

                <div className="flex flex-col justify-center">
                      <h1 className="font-bold text-[2.25rem] text-center">
                          Powering AI With The Best
                          <br />
                          Data &
                          Infrastructure.
                      </h1>

        
                      <p className="text-[0.875rem] text-center w-1/2 mx-auto">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, culpa. Dolor est quod asperiores harum magnam. Non maiores nisi voluptatem, ducimus quos qui laboriosam, expedita nam dolor, veritatis illum quo.
                      </p>

                      <div className="flex justify-center gap-2 mt-4">
                          <Button>
                              See the projects
                          </Button>

                          <Button>
                              Become a partner
                          </Button>
                      </div>
                    </div>
            </main>


            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}