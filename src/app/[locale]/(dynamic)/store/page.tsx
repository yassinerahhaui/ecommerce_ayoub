import React from "react";

const Store = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <aside className="h-full w-full bg-slate-800"></aside>
      <main className="sm:col-span-2 md:col-span-3 lg:col-span-4 h-full bg-slate-600"></main>
    </div>
  );
};

export default Store;
