"use client"

import Image from "next/image";
import BotaoAgendamento from "@/app/components/BotaoAgendamento"


const Hero = () => {

    return ( 
        <div id="home" className="relative bg-customWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Toda a{" "}
                <span className="text-purple-600">excelência veterinária</span>{" "}
                em um só lugar!
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                Cuidamos do seu pet com todo amor e carinho que ele merece.
              </p>
              <div className="mt-8">
                <BotaoAgendamento />
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <Image
                src="/hero.jpg"
                alt="Happy dog & cat"
                className="rounded-lg shadow-xl"  width={500} height={300}
              />
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Hero;