"use client";
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen bg-white md:px-[8.5rem] px-[2rem] py-[5.4rem] sm:px-6 lg:px-8"
      id="contact-us"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="flex">
          <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl w-[10%]">
            Contate-Nos
          </h2>
        </div>

        {/* Contact form */}
        <div className="mt-12">
          <form className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Seu nome"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Seu email"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                rows={4}
                placeholder="Sua mensagem"
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="text-white bg-red-500 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
