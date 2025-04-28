"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modetoggle";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Projects } from "../components/projects";
import { Banner } from "../components/slider";
import { New } from "../components/newnavbar";
import { Footer } from "../components/footer";

const Page = () => {
  const [nickname, setNickname] = useState<string>("");
  const [champ, setChamp] = useState<string | null>(null);

  return (
    <>


      <New/>
      <Banner/>

      <main className="flex justify-center">
        <div className="w-[60%]"> 

          <About/>
          <Projects/>
          <Contact/>

        </div>
      </main>

      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d160.58303039112638!2d-48.4522402!3d-1.4739134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48dca6a71f171%3A0x618b50955dfa7545!2sLEEC%20-%20Laborat%C3%B3rio%20de%20Engenharia%20El%C3%A9trica%20e%20Computa%C3%A7%C3%A3o!5e0!3m2!1sen!2sbr!4v1657675839745!5m2!1sen!2sbr"
        className="w-full h-80 mt-10 mb-20"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <Footer/>

    </>
  );
};

export default Page;
