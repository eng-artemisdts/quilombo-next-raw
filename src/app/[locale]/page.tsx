import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AboutUs from '../pages/AboutUs';
import Projects from '../pages/Projects';


export default function HomePage() {
  return (
    <div className='h-full w-full'>
      <AboutUs />
      <Projects />
    </div>
  );
}