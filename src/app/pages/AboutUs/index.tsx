"use client";
import Church from "@/app/components/Icons/church";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("AboutUs");

  return (
    <div
      className="min-h-screen flex-col min-w-full bg-[#F4AB0B] px-[8.5rem] py-[6.4rem] flex items-center justify-center"
      id="about-us"
    >
      <div className="flex flex-col md:flex-col 2xl:flex-row justify-center gap-x-[14rem] gap-y-[8rem] ">
        <div className="p-5 rounded-2xl border-2 border-green-500">
          <h1 className="font-poppins font-bold text-[50px] leading-[57px] text-green-500">
            {t("title")}
          </h1>
          <div className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl min-w-[20rem]">
            {t.rich("content", {
              strong: (chunks) => <strong>{chunks}</strong>,
              p: (chunks) => (
                <p className="mt-3 text-base text-green-500 sm:text-lg md:text-xl">
                  {chunks}
                </p>
              ),
            })}
          </div>
        </div>
        <Church />
      </div>
    </div>
  );
};

export default AboutUs;
