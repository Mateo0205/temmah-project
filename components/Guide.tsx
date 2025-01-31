import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/airplane.png" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-600 strong">
          Nous sommes là pour vous!
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[400px]">
            vous guidez dans vos aventures.
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Temmah Assistance Voyage est votre partenaire de confiance pour tous
            vos besoins de voyage. Que vous planifiez des vacances en famille,
            un voyage d'affaires ou une aventure en solo, notre agence vous
            offre des services personnalisés et une assistance complète pour
            garantir un voyage sans stress et mémorable. Faites confiance à
            notre expertise pour découvrir le monde en toute sérénité.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-100 h-50 bg-orange-(00">
        <Image
          src="/white-plane-airplane-blue-background-flat-lay-copy-space.jpg"
          alt="boat"
          width={150}
          height={100}
          className="w-full h-screen object-fit object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">
                  Quelque soit votre Destination
                </p>
                <p className="bold-16 text-green-50"> </p>
              </div>
              <p className="bold-20 mt-2">choisissez</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">...vous y etes déjà</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                destination de rêve
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
