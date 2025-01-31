"use client";
import { useAuth } from "./AuthContest"; // Correction du chemin d'importation
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaLock,
  FaHeadset,
  FaTags,
} from "react-icons/fa";
import Image from "next/image";
import { auth, db } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Login() {
  const { isAuthenticated, signOut } = useAuth();

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Log l'utilisateur pour vérifier ses données
      console.log("User authenticated:", user);
      alert(`User authenticated: ${user.displayName}`);

      // Ajouter l'utilisateur à Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        contact: user.phoneNumber,
      });

      alert(`User signed in and added to Firestore: ${user.displayName}`);
      console.log("User signed in and added to Firestore:", user);
      console.log("User authenticated:", user.displayName);
      console.log("User authenticated:", user.uid);
      console.log("User authenticated:", user.email);
      console.log("User authenticated:", user.photoURL);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('./login_bg.png')" }}
    >
      {isAuthenticated ? (
        <button onClick={signOut}>Se Déconnecter</button>
      ) : (
        <div className="overflow-hidden w-full">
          <p className="inline-block whitespace-nowrap animate-scroll text-purple-800 underline bold-16">
            Vous n'êtes pas encore connecté, veuillez vous connecter maintenant!
          </p>
        </div>
      )}
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full text-center mb-16 transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          Bienvenue chez{" "}
          <span className="text-red-600 block">Temmah assistance voyages</span>
        </h1>
        <p className="mb-6 text-white bold-16 text-lg">
          Votre destination ultime pour des réservations de voyage sans faille.
        </p>
        <button
          onClick={signIn}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Faites une réservation maintenant!
        </button>
      </div>

      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-4xl w-full text-center mb-16 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800">
          Pourquoi choisir TravelUX?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="p-4">
            <FaPlane className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-700">
              Réservations Faciles
            </h3>
            <p className="text-gray-600 text-lg">
              Réservez des vols, des hôtels et des véhicules en quelques clics.
            </p>
          </div>
          <div className="p-4">
            <FaTags className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-700">
              Offres Exclusives
            </h3>
            <p className="text-gray-600 text-lg">
              Accédez à des réductions spéciales et des offres réservées à nos
              membres.
            </p>
          </div>
          <div className="p-4">
            <FaHeadset className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-700">Support 24/7</h3>
            <p className="text-gray-600 text-lg">
              Notre équipe de support est là pour vous aider à tout moment,
              n'importe où.
            </p>
          </div>
          <div className="p-4">
            <FaLock className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-700">
              Paiements Sécurisés
            </h3>
            <p className="text-gray-600 text-lg">
              Vos transactions sont sécurisées avec nos mesures de sécurité de
              pointe.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-8">
          Prêt à explorer le monde?
        </h2>
        <p className="text-lg mb-8">
          Rejoignez TravelUX aujourd'hui et commencez votre voyage avec des
          avantages exclusifs.
        </p>
        <button
          onClick={signIn}
          className="bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-300 transform hover:scale-105"
        >
          Commencez
        </button>
      </div>

      <div className="mt-16 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-8">
          Découvrez Nos Fonctionnalités
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn">
            <FaPlane className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-700">
              Réservez des Vols
            </h3>
            <p className="text-gray-600 text-lg">
              Trouvez et réservez des vols vers vos destinations préférées.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn delay-200">
            <FaHotel className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-700">
              Réservez des Hôtels
            </h3>
            <p className="text-gray-600 text-lg">
              Choisissez parmi une large gamme d'hôtels et d'hébergements.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn delay-400">
            <FaCar className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-700">
              Louez des Véhicules
            </h3>
            <p className="text-gray-600 text-lg">
              Louez des voitures et d'autres véhicules pour vos besoins de
              voyage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
