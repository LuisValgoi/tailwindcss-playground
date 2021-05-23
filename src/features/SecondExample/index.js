import React from "react";

export default function SecondExample() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-xl px-8 py-12 mx-auto">
        <img className="h-12 transition duration-200 ease-in-out transform hover:-translate-y-2 hover:scale-110" src="/workcation.svg" alt="logo" />
        <img className="mt-6 rounded-md shadow-xl" src="/beach-work.jpeg" alt="beach work" />
        <h1 className="mt-6 text-2xl font-semibold leading-tight text-gray-600 sm:text-4xl">
          You can work from anywhere. <span className="font-semibold text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 font-light text-gray-600 sm:text-md">
          Workcation helps you find work-friendly rentals in a beautiful locations so you can enjoy some nice weathere even when you are not on vacation.
        </p>
        <div className="m-auto mt-4">
          <a
            className="inline-block px-5 py-3 text-sm font-semibold tracking-wider text-white uppercase bg-indigo-500 rounded-md shadow-lg focus:hover-bg-700 hover:bg-indigo-600"
            href="https://www.google.com"
          >
            Book your Escape
          </a>
        </div>
      </div>
    </div>
  );
}
