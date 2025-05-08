"use client";
import React from "react";
import GoogleMaps from "@/components/Maps";
import { ContactForm } from "./components/ContactForm";

const ContactUs: React.FC = () => {
  return (
    <section
      className="flex w-full min-h-screen bg-red-500 md:px-[8.5rem] px-[2rem] py-[5.4rem] sm:px-6 lg:px-8"
      id="contact-us"
    >
      <div className="flex">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          fale conosco
        </h2>

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
      <div className="mt-12">
        <GoogleMaps />
      </div>
    </section>
  );
};

export default ContactUs;
