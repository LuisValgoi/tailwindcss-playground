import React from "react";

import { ButtonPrimary } from "@components/Button";

export default function Card(props) {
  return <ButtonPrimary text={props.text} onClick={props.onClick} color="blue" className="w-full bg-blue-500 shadow-md"></ButtonPrimary>;
}
