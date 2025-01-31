"use client";
import Trip from "@/components/Trip";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { useAuth } from "./context/AuthContest";
import Login from "./context/login";

export default function Home() {
  // const { t, i18n } = useTranslation();
  const { user, logOut } = useAuth();
  // const switchLanguage = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };

  if (!user) {
    return <Login />; // Retourne le composant Login si l'utilisateur n'est pas connecté
  }

  return (
    <>
      <div>
        {/* <h1>{t("greeting")}</h1>
        <button
          onClick={() => switchLanguage(i18n.language === "en" ? "fr" : "en")}
        >
          {t("changeLanguage")}
        </button> */}
      </div>
      <Hero />
      <Trip />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
