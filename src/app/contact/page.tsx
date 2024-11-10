import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const ContactPage: React.FC = () => {
  return (
    <MainLayouts>
      <div
        className="bg-[#FFC6C6] py-12 px-6"
        style={{ maxWidth: "100vw", maxHeight: "79vh", margin: "0 auto" }}
      >
        <h1 className="text-4xl font-bold mb-6 font-georgia">Contact Us</h1>
        <p className="text-lg mb-4 font-georgia">
          We’d love to hear from you! At <strong>Elle Cosmetics</strong>, your
          feedback is important to us. Whether you have questions, need
          assistance, or just want to connect, we’re here to help.
        </p>
        <h2 className="text-3xl font-semibold mt-6 mb-2 font-georgia">
          How to Reach Us
        </h2>
        <ul className="list-disc ml-6 mb-4 font-georgia">
          <li>
            Email:{" "}
            <a
              href="mailto:support@ellecosmetics.com"
              className="text-blue-600"
            >
              support@ellecosmetics.com
            </a>
          </li>
          <li>
            Phone: <strong>(123) 456-7890</strong> (Mon-Fri, 9 AM - 5 PM EST)
          </li>
          <li>
            Social Media:
            <ul className="list-inside list-disc ml-4">
              <li>
                <a
                  href="https://instagram.com/ellecosmetics"
                  className="text-blue-600"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/ellecosmetics"
                  className="text-blue-600"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ellecosmetics"
                  className="text-blue-600"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="text-3xl font-semibold mt-6 mb-2 font-georgia">
          Visit Us
        </h2>
        <p className="text-lg mb-4 font-georgia">
          If you’re nearby, come visit our store for personalized
          recommendations!
        </p>
        <p className="text-lg mb-4 font-georgia">
          <strong>Address:</strong> 123 Beauty Lane, Glamour City, CA 12345
        </p>
        <p className="text-lg mb-4 font-georgia">
          Thank you for choosing <strong>Elle Cosmetics</strong>! We look
          forward to connecting with you!
        </p>
      </div>
    </MainLayouts>
  );
};

export default ContactPage;
