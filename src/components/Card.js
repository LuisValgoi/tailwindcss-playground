import React from "react";

import Input from "@components/atoms/Input";
import { ButtonOutline, ButtonPrimary } from "@components/atoms/Button";

export default function Card() {
  return (
    <div class="flex-grow p-8 bg-white border border-gray-300 rounded-md shadow-xl">
      <div class="sm:flex sm:items-center">
        <img src="image.jpeg" alt="Rosto" class="h-24 mx-auto rounded-full sm:flex-shrink-0 sm:mx-0" />
        <div class="text-center sm:ml-4 sm:text-left">
          <p class="text-xl">Mariana Silva</p>
          <p class="text-sm text-gray-600">Gerente de Suporte</p>
          <ButtonOutline color="red" class="py-1 mt-4 text-xs" text="Não é Mariana?" />
        </div>
      </div>
      <form class="flex w-full mt-8">
        <Input type="password" placeholder="Sua senha" />
        <ButtonPrimary color="blue" class="ml-4" text="Entrar" />
      </form>
    </div>
  );
}
