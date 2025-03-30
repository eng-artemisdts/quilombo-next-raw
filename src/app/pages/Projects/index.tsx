'use client';

import { useTranslations } from 'next-intl';

const Projects = () => {
  const t = useTranslations('Projects');

  return (
    <section className="w-full min-h-screen bg-gray-50 px-[8.5rem] py-[5.4rem] sm:px-6 lg:px-8" id='projects'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            {t('content')}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project cards can be added here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
