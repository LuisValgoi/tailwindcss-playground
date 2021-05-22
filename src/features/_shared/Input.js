import React from "react";

export default function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} class="flex-1 w-full input" />;
}
