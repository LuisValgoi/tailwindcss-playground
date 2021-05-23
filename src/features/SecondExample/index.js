import { ButtonPrimary } from "@components/Button";
import React from "react";

export default function SecondExample() {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="flex bg-gray-100">
        <div className="max-w-xl px-8 py-12 mx-auto lg:px-12 lg:py-24 lg:max-w-full lg:w-1/2">
          <div className="max-w-lg xl:mx-auto">
            <img className="h-12 transition duration-200 ease-in-out transform hover:-translate-y-2 hover:scale-105" src="/workcation.svg" alt="logo" />
            <img className="mt-6 rounded-md shadow-xl lg:hidden" src="/beach-work.jpeg" alt="beach work" />
            <h1 className="mt-6 text-2xl font-semibold leading-tight text-gray-900 lg:text-3xl sm:text-4xl xl:text-4xl">
              You can work from anywhere. <br className="xs:hidden lg:inline" /> <span className="font-semibold text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 font-light text-gray-600 sm:text-md">
              Workcation helps you find work-friendly rentals in a beautiful locations so you can enjoy some nice weathere even when you are not on vacation.
            </p>
            <div className="m-auto mt-4">
              <ButtonPrimary color="indigo" class="xl:hover:bg-gray-900 uppercase shadow-lg" text="Book your Escape" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img className="absolute inset-0 object-cover object-center w-full h-full" src="/beach-work.jpeg" alt="beach work" />
        </div>
      </div>
    </div>
  );
}
