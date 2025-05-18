"use client";
import React from "react";
import GoogleMaps from "@/components/Maps";
import { ContactForm } from "./components/ContactForm";
import SocialMedia from "./components/SocialMedia";

const ContactUs: React.FC = () => {
  return (
    <section
      className="min-h-screen bg-red-500 flex justify-center"
      id="contact"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-40 max-lg:gap-20 w-[1280px] justify-center items-center px-10 py-30 lg:py-0">
        <div className="w-full max-sm:w-fit">
          <h2 className="text-d-xl font-bold tracking-tight text-white">
            Fale Conosco
          </h2>

          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SocialMedia />
          <GoogleMaps />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
