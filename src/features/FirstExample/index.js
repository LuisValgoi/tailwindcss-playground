import React from "react";

import Welcome from "@features/FirstExample/components/Welcome";
import Card from "@features/FirstExample/components/Card";

export default function FirstExample() {
  return (
    <div className="min-h-screen bg-indigo-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div class="p-8 bg-blue-600 lg:min-h-screen lg:flex lg:items-center sm:p-12">
          <Welcome />
        </div>
        <div class="p-12 lg:min-h-screen lg:flex lg:items-center lg:p-24 xl:p-48">
          <Card />
        </div>
      </div>
    </div>
  );
}
