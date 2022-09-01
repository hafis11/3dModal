import React from "react";
import Hero from "../src/sections/hero";
// import Feature from "../src/sections/feature";

function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center select-none bg-[#f0f0f0]">
      {/* hero section */}
      <Hero />
      {/* hero section end */}
      {/* <Feature /> */}
    </main>
  );
}

export default Home;
