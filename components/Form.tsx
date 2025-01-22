import React from "react";

type FormProps = {
  type:
    | "button"
    | "submit"
    | "text"
    | "email"
    | "number"
    | "tel"
    | "password"
    | "search";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  placeholder?: string;
};

const Form = ({ type, title, icon, variant, placeholder }: FormProps) => {
  return (
    <div
      className="bg-gray-100
     rounded-3xl px-2 py-4 flex flex-col mb-4"
    >
      <form action="#" method="post">
        <div className="text-sm text-center my-2">
          <label htmlFor="" className="px-4 text-black text-xl">
            {title} :
          </label>
          <input
            type={type}
            name="destination"
            id="arrival_point"
            className="rounded p-2"
            placeholder="{placeholder?}"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
