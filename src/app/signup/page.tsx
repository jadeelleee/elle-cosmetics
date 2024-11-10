"use client";

import React, { useState } from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("User registered successfully!");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setMessage(data.message || "Failed to register user.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while signing up.");
    }
  };

  return (
    <MainLayouts>
      <div
        className="bg-[#FFC6C6] py-12 px-6"
        style={{ maxWidth: "100vw", maxHeight: "79vh", margin: "0 auto" }}
      >
        <h1 className="text-4xl font-bold mb-6 font-georgia">Sign Up</h1>
        <p className="text-lg mb-4 font-georgia">
          Join <strong>Elle Cosmetics</strong> for exclusive updates, special
          offers, and more!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div>
            <label
              htmlFor="fullName"
              className="text-lg font-georgia block mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="text-lg font-georgia block mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-lg font-georgia block mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        {message && (
          <p className="text-center mt-4 text-lg font-georgia">{message}</p>
        )}
      </div>
    </MainLayouts>
  );
};

export default SignUpPage;
