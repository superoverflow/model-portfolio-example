import React from "react";
import data from "./links.json";

const items = data.map((d) => (
  <div key={d.link}>
    <div className="space-y-2">
      <h4 className="text-sm font-medium leading-none">{d.type}</h4>
      <p className="text-sm text-muted-foreground">{d.description}</p>
    </div>
  </div>
));

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 gap-4">
      {items}
    </main>
  );
};

export default page;
