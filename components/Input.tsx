import React from "react";
import Image from "next/image";

type InputProps = {
  type: "text" | "email" | "password" | "submit";
  placeholder?: string;
  variant: string;
};

const Input = ({ type, variant, placeholder }: InputProps) => {
  return <input type={type} placeholder={placeholder} className={variant} />;
};

const InscriptionForm = () => {
  return (
    <section className="flex flex-row h-screen m-8">
    
    {/* Formulaire, prendra l'autre moitié de l'écran */}
    <form className="flex flex-col gap-4 p-8 bg-white rounded-lg shadow-lg mx-auto bg-gradient-to-r from-blue-100 to-blue-300 flex-1 h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <label className="text-sm font-medium text-gray-700">Name</label>
        <Input type="text" placeholder="Name" variant="input-name p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <label className="text-sm font-medium text-gray-700">Email</label>
        <Input type="email" placeholder="Email" variant="input-email p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <label className="text-sm font-medium text-gray-700">Password</label>
        <Input type="password" placeholder="Password" variant="input-password p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <Input type="submit" variant="input-submit p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer" />
    </form>
</section>

  );
};

export default InscriptionForm;
