import React from "react";

const ButtonBase = (props) => {
  return (
    <button type="button" onClick={props.onClick} class={`${props.class} btn btn-${props.color}`}>
      {props.text}
    </button>
  );
};

export const ButtonPrimary = (props) => {
  return <ButtonBase {...props} onClick={props.onClick} color={props.color} class={`${props.class} flex-shrink-0 text-white`} />;
};

export const ButtonOutline = (props) => {
  let textColor = "";
  let borderColor = "";
  let hoverBackgroundColor = "";

  // tailwind string template bug avoid / purge
  switch (props.color) {
    case "red":
      textColor = "text-red-500";
      borderColor = "border-red-500";
      hoverBackgroundColor = "hover:bg-red-500";
      break;
    default:
      break;
  }
  return <ButtonBase {...props} color={props.color} onClick={props.onClick} class={`${props.class} flex-shrink-0 ${hoverBackgroundColor} border ${borderColor} hover:text-white ${textColor}`} />;
};
