import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {

  return (
    <div className="grid h-screen px-4 place-content-center">
      <div className="text-center">
        <h1 className="font-black text-[#635BFF] text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 mb-8 text-base">We can't find that page.</p>

        <Link to="/" className="text-white bg-[#635BFF] hover:bg-opacity-80 focus:ring-4 focus:ring-[#635BFF] font-medium rounded-lg text-base px-6 py-3">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};