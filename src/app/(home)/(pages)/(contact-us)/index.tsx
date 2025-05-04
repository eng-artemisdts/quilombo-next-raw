import React from "react";
import GoogleMaps from "@/components/Maps";

const ContactUs: React.FC = () => {
  const formFields = [
    { label: "Nome", type: "text", placeholder: "Seu nome" },
    { label: "Email", type: "email", placeholder: "Seu email" },
    { label: "Telefone", type: "phone", placeholder: "Seu telefone" },
    {
      label: "Mensagem",
      type: "textarea",
      placeholder: "Sua mensagem",
      rows: 4,
    },
  ];

  return (
    <section
      className="flex w-full min-h-screen bg-white md:px-[8.5rem] px-[2rem] py-[5.4rem] sm:px-6 lg:px-8"
      id="contact-us"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex">
          <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl w-[10%]">
            fale conosco
          </h2>
        </div>

        <div className="mt-12">
          <form className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {formFields.map((field, index) => (
              <div className="col-span-2" key={index}>
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    rows={field.rows}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    type={field.type}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
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
      <div className="mt-12">
        <GoogleMaps />
      </div>
    </section>
  );
};

export default ContactUs;
