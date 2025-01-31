import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[420px]">
            nous vous offrons l'assistance !
          </h2>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Contactez-nous sur WhatsApp"
              icon="/whatsapp-svg.svg"
              variant="btn_white"
              url="https://wa.me/2250778883068?text=Bonjour%2C%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services."
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/herohero.jpeg" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
