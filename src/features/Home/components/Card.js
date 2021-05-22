import React from "react";

export default function Card(props) {
  return (
    <button onClick={props.onClick} className="w-full p-4 text-white bg-blue-500 rounded-md shadow-md ring-blue-400 focus:outline-none hover:bg-blue-400 focus:bg-blue-600">
      {props.text}
    </button>
  );
}
