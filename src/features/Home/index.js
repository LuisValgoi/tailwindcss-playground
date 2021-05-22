import React from "react";
import { useHistory } from "react-router-dom";

import Card from "@features/Home/components/Card";

export default function Home() {
  const history = useHistory();

  const navigateTo = (url) => {
    history.push(url);
  };

  return (
    <div className="min-w-full min-h-screen p-4 bg-gray-100">
      {/* titles */}
      <h1 className="mb-3 text-2xl text-center text-blue-800">List of Examples</h1>
      {/* examples */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card text="First" onClick={() => navigateTo("/first")} />
        <Card text="Second" onClick={() => navigateTo("/second")} />
      </div>
    </div>
  );
}
