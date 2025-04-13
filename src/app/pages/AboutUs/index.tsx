"use client";
import Church from "@/app/components/Icons/church";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("AboutUs");

  return (
    <div
      className="min-w-full bg-yellow-500 px-30 py-[6.4rem] max-xl:px-[3rem] items-center justify-center "
      id="about-us"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-x-[5rem] gap-y-[1rem] max-lg:px-5 ">
        <div className="p-5 rounded-2xl border-2 border-green-500 lg:w-xl">
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
        <div className="w-100 max-sm:w-30 flex justify-center">
          <Church />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
