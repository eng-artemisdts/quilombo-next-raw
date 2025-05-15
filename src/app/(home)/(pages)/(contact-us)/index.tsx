"use client";
import React from "react";
import GoogleMaps from "@/components/Maps";
import { ContactForm } from "./components/ContactForm";
import SocialMedia from "./components/SocialMedia";

const ContactUs: React.FC = () => {
  return (
    <section
      className="min-h-screen bg-red-500 flex px-[169px] py-[91px]"
      id="contact"
    >
      <div className="w-full">
        <h2 className="text-[50px] font-bold tracking-tight text-white">
          fale conosco
        </h2>

        <div className="mt-4">
          <ContactForm />
        </div>
      </div>
      <div>
        <SocialMedia />
        <GoogleMaps />
      </div>
    </section>
  );
};

export default ContactUs;
