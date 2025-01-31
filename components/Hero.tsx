"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Button from "./Button";
import ReservationForm from "./reservationForm";

const Hero = () => {
  const { t } = useTranslation("Hero");

  useEffect(() => {
    console.log("Rendu côté client");
  }, []);

  if (typeof window === "undefined") {
    console.log("Rendu côté serveur");
  }

  return (
    <section className="max-container padding-container flex flex-col gap-7 py-1 bg-bg-img-3 bg-no-repeat bg-cover bg-center rounded-lg pb-32 md:gap-18 lg:py-10 xl:flex-row xl:gap-2 xl:pb-0">
      <div className="bg-purple-500 break:hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-500 object-fit "
        >
          <source src="hero_mp4.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/plane.png"
          alt="camp"
          width={100}
          height={100}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 top-1 text-white">
          {t("voyagez en toute simplicité")}
        </h1>
        <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
          {t("Temmah Assistance Voyages vous souhaite la Bienvenue...")}
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title={t("reserve aujourd'hui!")}
            variant="btn_blue"
          />
          <Button
            type="button"
            title={t("alors, où allez vous?")}
            icon="/plane-take-off-transportation-transport-plane-svgrepo-com.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex bg-transp flex-1 rounded-lg bg-blue-&00">
        <ReservationForm />
      </div>
    </section>
  );
};

export default Hero;
