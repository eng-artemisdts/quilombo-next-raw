import AboutUs from "./(home)/(pages)/(about-us)";
import ContactUs from "./(home)/(pages)/(contact-us)";
import Nicolinas from "./(home)/(pages)/(nicolinas)";
import Research from "./(home)/(pages)/(research)";
import Projects from "./(home)/(pages)/(projects)";
import Protocol from "./(home)/(pages)/(protocol)";
import Podcast from "./(home)/(pages)/(papo-de-malungo)";
import AccessArchive from "./(home)/(pages)/(access-archive)";

export default function HomePage() {
  return (
    <div className="h-full w-full ">
      <AboutUs />
      <Research />
      <Projects />
      <Protocol />
      <Nicolinas />
      <Podcast />
      <AccessArchive />
      <ContactUs />
    </div>
  );
}
