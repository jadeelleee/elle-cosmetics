import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

export default function Home() {
  return (
    <MainLayouts>
      <div
        className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210827/pngtree-cosmetics-eyeshadow-powder-pink-background-image_768153.jpg')] bg-cover bg-center w-[1920px] h-[1080px] mx-auto py-12 px-6"
        style={{ maxWidth: "99vw", maxHeight: "79vh" }}
      >
        <h1
          className="text-4xl font-bold mb-6 text-left"
          style={{ fontFamily: "Georgia, serif" }}
        >
          EXPLORE YOUR BEAUTY WITH ELLE COSMETICS
        </h1>
        <div className="flex space-x-4">
          <section className="bg-white p-2 rounded-lg shadow-md bg-opacity-50 max-w-md text-left">
            <h2
              className="text-2xl font-semibold mb-1 text-center"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Caring for Sensitive Skin
            </h2>
            <img
              src="https://i.pinimg.com/originals/9b/a1/a9/9ba1a9f4d81d8f29d8ecc5384db90ac0.gif"
              alt="Sensitive Skin Tips GIF"
              className="mb-1 mx-auto block"
              style={{ width: "300px", height: "auto" }}
            />
            <p className="text-lg text-gray-700 text-center mb-1">
              Our new lineup of soothing cremes for facial skin will make the
              difference. Take action today and look better instantly!
            </p>
            <div className="text-center mt-4">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300">
                Shop Now
              </button>
            </div>
          </section>
          <section className="bg-white p-2 rounded-lg shadow-md bg-opacity-50 max-w-md text-left">
            <h2
              className="text-2xl font-semibold mb-1 text-center"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Tips for Oily Skin
            </h2>
            <img
              src="https://i.pinimg.com/originals/ec/88/71/ec8871de91f3b30af36838856a2118ea.gif"
              alt="Oily Skin Tips GIF"
              className="mb-1 mx-auto block"
              style={{ width: "300px", height: "auto" }}
            />
            <p className="text-lg text-gray-700 text-center mb-1">
              Explore our oil-free products that help maintain your skin's
              freshness and shine-free look throughout the entire day!
            </p>
            <div className="text-center mt-4">
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300">
                Shop Now
              </button>
            </div>
          </section>
        </div>
      </div>
    </MainLayouts>
  );
}
