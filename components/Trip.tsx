"use client";
import { useState } from "react";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TripProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  info: string;
}

const TripSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  info,
}: TripProps) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={`relative h-[800px] w-full min-w-[1600px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-black p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 ">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>

      {showInfo && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 rounded-lg">
          <p className="text-center p-4 max-w-lg bg-white rounded shadow-md ">
            {info}
          </p>
        </div>
      )}
    </div>
  );
};

const Trip = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="trip"
      className="border-2 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-20"
    >
      <Slider
        {...settings}
        className="overflow-hidden flex h-[800px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[900px] xl:h-[1000px]"
      >
        <TripSite
          backgroundImage="bg-abidjan"
          title="Abidjan, Côte d'Ivoire"
          subtitle="capitale economique de CI"
          peopleJoined="50+ Rejoints"
          info="Abidjan est la capitale économique de la Côte d'Ivoire et l'une des villes francophones les plus peuplées d'Afrique. Activités: Visitez la Cathédrale Saint-Paul, explorez le Parc National du Banco, et profitez des plages de Grand-Bassam. Découvrez également la vie nocturne animée dans les quartiers de Treichville et Marcory."
        />
        <TripSite
          backgroundImage="bg-bg-img-2"
          title="Paris, France"
          subtitle="le musée du louvre"
          peopleJoined="50+ Rejoints"
          info="Paris est la capitale de la France, connue pour son art, sa mode et sa culture. Activités: Montez à la Tour Eiffel, visitez le Louvre, et promenez-vous le long de la Seine. Ne manquez pas de déguster des pâtisseries françaises dans les cafés parisiens et de faire du shopping sur les Champs-Élysées."
        />
        <TripSite
          backgroundImage="bg-mexico"
          title="Nezahualcoyotl, Mexique"
          subtitle="Quelque part dans la nature du mexique"
          peopleJoined="50+ Rejoints"
          info="Nezahualcoyotl est une ville du Mexique. Activités: Explorez les marchés locaux, visitez les sites historiques, et profitez de la cuisine locale."
        />
        <TripSite
          backgroundImage="bg-miami"
          title="Miami, États-Unis"
          subtitle="miami dans la nuit"
          peopleJoined="50+ Rejoints"
          info="Miami est une grande ville du sud-est des États-Unis. Activités: Visitez les plages, explorez la vie nocturne, et profitez de la culture diversifiée."
        />
        <TripSite
          backgroundImage="bg-dubai"
          title="Dubaï, Émirats Arabes Unis"
          subtitle="lieu exotique en Émirats Arabes Unis "
          peopleJoined="50+ Rejoints"
          info="Dubaï est une ville des Émirats Arabes Unis connue pour son architecture moderne et ses boutiques de luxe. Activités: Visitez le Burj Khalifa, explorez le désert, et profitez des centres commerciaux."
        />
        <TripSite
          backgroundImage="bg-quebec"
          title="Québec, Canada"
          subtitle="beau paysage québecois"
          peopleJoined="50+ Rejoints"
          info="Le Québec est une province du Canada connue pour sa population francophone et ses sites historiques. Activités: Visitez le Vieux-Québec, explorez les parcs nationaux, et profitez de la cuisine locale."
        />
        <TripSite
          backgroundImage="bg-london"
          title="Londres, Royaume-Uni"
          subtitle="big Ben "
          peopleJoined="50+ Rejoints"
          info="Londres est la capitale du Royaume-Uni connue pour son histoire et sa culture. Activités: Visitez le British Museum, explorez les parcs, et profitez des pubs locaux."
        />
        <TripSite
          backgroundImage="bg-pekin"
          title="Pékin, Chine"
          subtitle="decouvrez la culture chinoise"
          peopleJoined="50+ Rejoints"
          info="Pékin est la capitale de la Chine connue pour ses sites historiques et son architecture moderne. Activités: Visitez la Grande Muraille, explorez la Cité Interdite, et profitez de la cuisine locale."
        />
        <TripSite
          backgroundImage="bg-newyork"
          title="New York, États-Unis"
          subtitle="la statut de la liberté, monument Américain"
          peopleJoined="50+ Rejoints"
          info="New York est une grande ville des États-Unis connue pour ses gratte-ciel et sa diversité culturelle. Activités: Visitez Times Square, explorez Central Park, et profitez de la cuisine locale."
        />
      </Slider>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-500 p-8 lg:max-w-[650px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Envie de découvertes incroyables ?</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Découvrez des destinations incroyables et faites le choix d'un
            voyage touristique inoubliable avec Temmah Assistance Voyage. Que ce
            soit pour explorer des plages paradisiaques, des montagnes
            majestueuses, ou des villes historiques, nous avons des options pour
            tous les goûts. Laissez-nous vous aider à planifier votre prochaine
            aventure et à créer des souvenirs mémorables.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={6}
            height={2}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Trip;
