'use client';

import {useTranslations} from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('AboutUs');

  return (
    <div className="min-h-screen bg-[#F4AB0B] px-[8.5rem] py-[5.4rem]" id='about-us'>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {t('content')}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
