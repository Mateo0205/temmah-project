import Image from "next/image";
import Button from "./Button";
import Form from "./Form";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/plane.png"
          alt="camp"
          width={100}
          height={100}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Fly throught the world</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa
          provident, explicabo cupiditate facere minus maiores delectus nemo
          unde impedit sapiente saepe natus ad ut officia voluptate porro eaque
          assumenda.
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
          <Button type="button" title="En savoir plus " variant="btn_blue" />
          <Button
            type="button"
            title="
            alors où allez-vous?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-col flexBetween flex-1 items-start bg-transp rounded-lg p-4 ">
        {/* <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-red-500 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Lieux</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">abidjan, Côte d'Ivoire</p>
          </div>

          <div className="flexBetween bg-black rounded p-2">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div> */}

        <div
          className="flex flex-row  gap-4 justify-start text-white text-2xl p-2 mb-2 bg-red-500 rounded"
          text-sm
        >
          <ul className="flex gap-5 cursor-pointer" flex-row>
            <li>
              <a href="#">vols</a>
            </li>
            <li>
              <a href="#">vols</a>
            </li>
            <li>
              <a href="#">vols</a>
            </li>
            <li>
              <a href="#">vols</a>
            </li>
          </ul>
        </div>
        <Form
          type="text"
          title="
            alors où allez-vous?"
          icon="/play.svg"
          variant="btn_white_text"
        />
        <Form
          type="password"
          title="
            alors où allez-vous?"
          icon="/play.svg"
          variant="btn_white_text"
        />
        <Form
          type="text"
          title="
            alors où allez-vous?"
          icon="/play.svg"
          variant="btn_white_text"
        />
      </div>
    </section>
  );
};

export default Hero;
