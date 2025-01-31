import React, { useState } from "react";
import { auth, db } from "../app/firebase";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; // Pour ajouter un document dans Firestore

import Autosuggest from "react-autosuggest";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ReservationForm = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  // State for flights tab
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [oneWay, setOneWay] = useState(false);
  const [roundTrip, setRoundTrip] = useState(false);
  const [passengerCount, setPassengerCount] = useState("");
  const [flightClass, setFlightClass] = useState("");

  // State for hotels tab
  const [city, setCity] = useState("");
  const [hotelDate, setHotelDate] = useState("");
  const [hotelReturnDate, setHotelReturnDate] = useState("");
  const [room, setRoom] = useState("");
  const [child, setChild] = useState(false);

  // State for vehicles tab
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleDatePick, setVehicleDatePick] = useState("");
  const [VehicleDateReturn, setVehicleDateReturn] = useState("");

  // State for suggestions
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const cars = [
    "taxi",
    "minu_bus",
    "luxe",
    "bus",
    "location vehicule personnel",
  ];

  // State for error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Function to get suggestions from GeoNames API
  const getSuggestions = async (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength === 0) {
      return [];
    }

    try {
      const response = await axios.get(
        `http://api.geonames.org/searchJSON?name_startsWith=${inputValue}&maxRows=10&username=mateo005`
      );
      const cities = response.data.geonames.map((city: any) => city.name);
      setSuggestions(cities);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Function to get the value of the suggestion
  const getSuggestionValue = (suggestion: string) => suggestion;

  // Function to render suggestions
  const renderSuggestion = (suggestion: string) => <div>{suggestion}</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate dates
    if (
      activeTab === "flights" &&
      !oneWay &&
      new Date(departureDate) >= new Date(returnDate)
    ) {
      setErrorMessage(
        "La date de départ doit être antérieure à la date de retour."
      );
      return;
    }
    if (
      activeTab === "hotels" &&
      new Date(hotelDate) >= new Date(hotelReturnDate)
    ) {
      setErrorMessage(
        "La date de départ doit être antérieure à la date de retour."
      );
      return;
    }
    if (
      activeTab === "vehicles" &&
      new Date(vehicleDatePick) >= new Date(VehicleDateReturn)
    ) {
      setErrorMessage(
        "La date de départ doit être antérieure à la date de retour."
      );
      return;
    }

    // Handle form submission logic here
    if (activeTab === "flights") {
      console.log({
        type: "Flight",
        name,
        contact,
        depart,
        destination,
        oneWay,
        roundTrip,
        departureDate,
        returnDate,
        passengerCount,
        flightClass,
      });
    } else if (activeTab === "hotels") {
      console.log({
        type: "Hotel",
        name,
        city,
        hotelDate,
        hotelReturnDate,
        room,
        child,
      });
    } else if (activeTab === "vehicles") {
      console.log({
        type: "Vehicle",
        name,
        contact,
        vehicleType,
        vehicleDatePick,
        VehicleDateReturn,
      });
    }
    alert("Submit successful");
    try {
      // En fonction de l'onglet actif, tu enverras les données dans la bonne collection Firestore
      if (activeTab === "flights") {
        await addDoc(collection(db, "reservations"), {
          type: "Flight",
          name,
          contact,
          depart,
          destination,
          oneWay,
          roundTrip,
          departureDate,
          returnDate,
          passengerCount,
          flightClass,
        });
      } else if (activeTab === "hotels") {
        await addDoc(collection(db, "reservations"), {
          type: "Hotel",
          name,
          contact,
          city,
          hotelDate,
          hotelReturnDate,
          room,
          passengerCount,
          child,
        });
      } else if (activeTab === "vehicles") {
        await addDoc(collection(db, "reservations"), {
          type: "Vehicle",
          name,
          contact,
          vehicleType,
          vehicleDatePick,
          VehicleDateReturn,
        });
      }

      alert("Réservation enregistrée avec succès !");
    } catch (error) {
      console.error(
        "Erreur lors de l'enregistrement des données dans Firestore :",
        error
      );
      setErrorMessage("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  const handleOneWayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOneWay(e.target.checked);
    setRoundTrip(!e.target.checked);
  };

  const handleRoundTripChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoundTrip(e.target.checked);
    setOneWay(!e.target.checked);
  };
  const handleChildChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChild(!e.target.checked);
  };

  const renderForm = () => {
    switch (activeTab) {
      case "flights":
        return (
          <div className="p-6 shadow-lg rounded-lg border-2 bg-gradient-to-r from-blue-400 to-blue-300 backdrop-blur-[25px]">
            <h2 className="text-lg font-bold mb-4 w-full h-full text-white">
              Réservation de Vol
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row-w-full"
            >
              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}
              <div className="flex gap-4 items-center mb-4 text-white">
                <div>
                  <input
                    type="checkbox"
                    id="oneWay"
                    checked={oneWay}
                    onChange={handleOneWayChange}
                    className="mr-2"
                  />
                  <label htmlFor="oneWay">Aller Simple</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="roundTrip"
                    checked={roundTrip}
                    onChange={handleRoundTripChange}
                    className="mr-2"
                  />
                  <label htmlFor="roundTrip">Aller-retour</label>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <label htmlFor="name">Etat civil :</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nom complet"
                  className="border rounded-lg p-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contact">Contact :</label>
                <PhoneInput
                  id="contact"
                  placeholder="Ici votre Contact"
                  className="border rounded-lg p-2"
                  value={contact}
                  onChange={(value) => setContact(value || "")}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 bg-[rgba(255,255,255,0.18)] backdrop-blur-[25px] rounded-lg p-5 sm:flex-row bg-blue-300">
                <div className="font-bold flex flex-col flex-1">
                  <label htmlFor="depart">Départ :</label>
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      getSuggestions(value)
                    }
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={{
                      placeholder: "ville de départ",
                      value: depart,
                      onChange: (e, { newValue }) => setDepart(newValue),
                      required: true,
                      style: {
                        padding: "8px 10px", // Ajout du padding ici
                        borderRadius: "5px", // Arrondi des coins pour une apparence plus douce
                        border: "1px solid #ccc", // Bordure autour de l'input
                      },
                    }}
                  />
                </div>
                <div className="font-bold flex flex-col flex-1">
                  <label htmlFor="destination">Destination :</label>
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={({ value }) =>
                      getSuggestions(value)
                    }
                    onSuggestionsClearRequested={() => setSuggestions([])}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={{
                      placeholder: "ville de destination",
                      value: destination,
                      onChange: (e, { newValue }) => setDestination(newValue),
                      required: true,
                      style: {
                        padding: "8px 10px", // Ajout du padding ici
                        borderRadius: "5px", // Arrondi des coins pour une apparence plus douce
                        border: "1px solid #ccc", // Bordure autour de l'input
                      },
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-blue-300 backdrop-blur-[25px] rounded-lg p-5 mini:flex-row">
                <div className="flex flex-col flex-1">
                  <label htmlFor="departureDate">Date de depart</label>
                  <input
                    type="date"
                    id="departureDate"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                    className="border rounded-lg p-2"
                    title="date de depart"
                  />
                </div>
                {!oneWay && (
                  <div className="flex flex-col">
                    <label htmlFor="returnDate">Date de retour</label>
                    <input
                      type="date"
                      id="returnDate"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="border rounded-lg p-2"
                      title="date de retour"
                      required
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-row gap-1 break:flex-col">
                <div className="flex flex-col flex-1 p-1 rounded bg-[rgba(253,253,253,0.4)]">
                  <label htmlFor="passengerCount">Nbre de passager</label>
                  <input
                    type="number"
                    id="passengerCount"
                    placeholder="indiquer le nbre de passager"
                    className="border rounded-lg p-2"
                    min={1}
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col flex-1 bg-[rgba(253,253,253,0.4)] rounded p-2">
                  <label htmlFor="flightClass">Choisir la classe :</label>
                  <select
                    id="flightClass"
                    name="flightClass"
                    value={flightClass}
                    onChange={(e) => setFlightClass(e.target.value)}
                    required
                    className="text-gray-00"
                  >
                    <option value="" disabled hidden>
                      Choisir une classe
                    </option>
                    <option value="first">Première classe</option>
                    <option value="business">Classe affaires</option>
                    <option value="economy">Classe économique</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                Réserver
              </button>
            </form>
          </div>
        );
      case "hotels":
        return (
          <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-blue-400 to-blue-300">
            <h2 className="text-lg font-bold mb-4">Réservation d'Hôtel </h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}
              <div className="flex gap-4 items-center text-white">
                <label htmlFor="child" className="underline hover:text-red-600">
                  voyagez vous avec un enfant ?
                </label>
                <input
                  type="checkbox"
                  placeholder="Nombre de chambre"
                  id="child"
                  checked={child}
                  onChange={handleChildChange}
                />
              </div>
              <label htmlFor="name" className="Bold pb-0">
                Nom et Prenom
              </label>
              <input
                type="text"
                placeholder="Nom complet"
                className="border rounded-lg p-2"
                pattern="^[a-zA-Z\s'-]+$"
                title="Le nom complet ne doit contenir que des lettres, des espaces, des apostrophes et des tirets."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <div className="flex flex-col">
                <label htmlFor="contact">Contact :</label>
                <PhoneInput
                  id="contact"
                  placeholder="Ici votre Contact"
                  className="border rounded-lg p-2"
                  value={contact}
                  onChange={(value) => setContact(value || "")}
                  required
                />
              </div>
              <label htmlFor="city">Destination</label>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({ value }) =>
                  getSuggestions(value)
                }
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                  placeholder: "dans quelle ville souhaitez-vous réserver?",
                  value: city,
                  onChange: (e, { newValue }) => setCity(newValue),
                  required: true,
                  style: {
                    padding: "8px ", // Ajout du padding ici
                    width: "100%", // Largeur maximale de l'input
                    borderRadius: "5px", // Arrondi des coins pour une apparence plus douce
                    border: "1px solid #ccc", // Bordure autour de l'input
                    marginTop: "-25px", // Marge en haut de l'input
                  },
                }}
              />
              <div className="flex flex-row flex-1 gap-5">
                <label htmlFor="passengerCount">Hôte:</label>
                <input
                  type="number"
                  placeholder="Nombre d'hôtes"
                  className="border rounded-lg p-2 "
                  value={passengerCount}
                  onChange={(e) => setPassengerCount(e.target.value)}
                  min={1}
                  required
                />
                <label htmlFor="room">chambre:</label>

                <input
                  type="number"
                  placeholder="Nombre de chambre"
                  className="border rounded-lg p-2"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  min={0}
                  required
                />
              </div>

              <div className="flex flex-col gap-2 bg-blue-300 backdrop-blur-[25px] rounded-lg p-5 mini:flex-row">
                <div className="flex flex-col flex-1">
                  <label htmlFor="hotelDate">Date de depart</label>
                  <input
                    type="date"
                    id="hotelDate"
                    value={hotelDate}
                    onChange={(e) => setHotelDate(e.target.value)}
                    className="border rounded-lg p-2"
                    title="date de depart"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="hotelReturnDate">Date de retour</label>
                  <input
                    type="date"
                    id="hotelReturnDate"
                    value={hotelReturnDate}
                    onChange={(e) => setHotelReturnDate(e.target.value)}
                    className="border rounded-lg p-2"
                    title="date de retour"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
              >
                Réserver
              </button>
            </form>
          </div>
        );
      case "vehicles":
        return (
          <div className="p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-blue-400 to-blue-300 ">
            <h2 className="text-lg font-bold mb-4">Réservation de Véhicule</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}
              <input
                type="text"
                placeholder="Nom complet"
                className="border rounded-lg p-2"
                pattern="^[a-zA-Z\s]+$"
                title="Le nom complet ne doit contenir que des lettres et des espaces."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Autosuggest
                suggestions={cars}
                onSuggestionsFetchRequested={({ value }) =>
                  getSuggestions(value)
                }
                onSuggestionsClearRequested={() => setSuggestions([])}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                  placeholder: "Type de véhicule",
                  value: vehicleType,
                  onChange: (e, { newValue }) => setVehicleType(newValue),
                  required: true,
                  style: {
                    padding: "8px 10px", // Ajout du padding ici
                    borderRadius: "5px", // Arrondi des coins pour une apparence plus douce
                    border: "1px solid #ccc", // Bordure autour de l'input
                  },
                }}
              />
              <div className="flex flex-col">
                <label htmlFor="contact">Contact :</label>
                <PhoneInput
                  id="contact"
                  placeholder="Ici votre Contact"
                  className="border rounded-lg p-2"
                  value={contact}
                  onChange={(value) => setContact(value || "")}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 bg-blue-300 backdrop-blur-[25px] rounded-lg p-5 mini:flex-row">
                <div className="flex flex-col flex-1">
                  <label htmlFor="hotelDate">Date de depart</label>
                  <input
                    type="date"
                    id="hotelDate"
                    value={vehicleDatePick}
                    onChange={(e) => setVehicleDatePick(e.target.value)}
                    className="border rounded-lg p-2"
                    title="date de depart"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="hotelReturnDate">Date de retour</label>
                  <input
                    type="date"
                    id="hotelReturnDate"
                    value={VehicleDateReturn}
                    onChange={(e) => setVehicleDateReturn(e.target.value)}
                    className="border rounded-lg p-2"
                    title="date de retour"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
              >
                Réserver
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="reservation"
      className="w-full h-full mx-auto mt-10 md:max-w-4xl bg-[url('/logo.png')] rounded-full p-4 "
    >
      {/* Tabs Navigation */}
      <div className="flex justify-start mb-2 gap-2 bg-[rgba(199,200,203,0.18)] backdrop-blur-[25px] rounded-lg p-2">
        <button
          onClick={() => setActiveTab("flights")}
          className={`p-3 rounded-lg shadow-lg ${
            activeTab === "flights" ? "bg-blue-500 text-white" : "bg-gray-200"
          } hover:bg-blue-400`}
        >
          Vols
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          className={`p-3 rounded-lg shadow-lg ${
            activeTab === "hotels" ? "bg-green-500 text-white" : "bg-gray-200"
          } hover:bg-green-400`}
        >
          Hôtels
        </button>
        <button
          onClick={() => setActiveTab("vehicles")}
          className={`p-3 rounded-lg shadow-lg ${
            activeTab === "vehicles" ? "bg-red-500 text-white" : "bg-gray-200"
          } hover:bg-red-400`}
        >
          Véhicules
        </button>
      </div>

      {/* Dynamic Form */}
      {renderForm()}
    </div>
  );
};

export default ReservationForm;
