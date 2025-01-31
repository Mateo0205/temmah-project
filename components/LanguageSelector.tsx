// import { useState } from "react";
// import { useTranslation } from "react-i18next";

// const LanguageSelector = () => {
//   const { i18n } = useTranslation(); // Accéder à i18n à partir du hook useTranslation
//   const [language, setLanguage] = useState(i18n.language);

//   const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedLanguage = e.target.value;
//     i18n.changeLanguage(selectedLanguage); // Changer la langue avec i18next
//     setLanguage(selectedLanguage); // Mettre à jour l'état local
//     localStorage.setItem("language", selectedLanguage); // Sauvegarder la langue dans localStorage
//   };

//   return (
//     <select
//       value={language}
//       onChange={handleLanguageChange}
//       className="p-2 border rounded"
//     >
//       <option value="en">English</option>
//       <option value="fr">Français</option>
//     </select>
//   );
// };

// export default LanguageSelector;
