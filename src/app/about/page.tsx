import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const page: React.FC = () => {
  return (
    <MainLayouts>
      <div
        className="bg-[#FFC6C6] py-12 px-6 font-georgia" // Apply font-georgia to the container
        style={{ maxWidth: "100vw", maxHeight: "79vh", margin: "0 auto" }}
      >
        <h1 className="text-4xl font-bold mb-6">About Elle Cosmetics</h1>
        <div>
          <p className="text-lg mb-4">
            Welcome to <strong>Elle Cosmetics</strong>! We are passionate about
            enhancing natural beauty through high-quality, cruelty-free cosmetic
            products that empower you to express your unique style.
          </p>
          <h2 className="text-3xl font-semibold mt-6 mb-2">Our Mission</h2>
          <p className="text-lg mb-4">
            At Elle Cosmetics, our mission is to inspire confidence through
            beauty. We believe that makeup should enhance your features and
            celebrate individuality. Our diverse range of cosmetics, from
            vibrant lip colors to luxurious foundations, is crafted with
            premium, skin-friendly ingredients.
          </p>
          <h2 className="text-3xl font-semibold mt-6 mb-2">Our Philosophy</h2>
          <p className="text-lg mb-4">
            We embrace beauty in all its forms, catering to everyone from
            beginners to makeup enthusiasts. Our commitment to diversity and
            inclusivity creates a welcoming space for all.
          </p>
          <h2 className="text-3xl font-semibold mt-6 mb-2">Join Us</h2>
          <p className="text-lg mb-4">
            Explore our collection and discover products that resonate with your
            beauty journey. Follow us on social media for the latest trends,
            tips, and tutorials.
          </p>
          <p className="text-lg mb-4">
            Thank you for choosing Elle Cosmetics, where beauty celebrates
            individuality!
          </p>
        </div>
      </div>
    </MainLayouts>
  );
};

export default page;
