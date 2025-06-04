import AboutUs from "./(pages)/(about-us)";
import ContactUs from "./(pages)/(contact-us)";
import Nicolinas from "./(pages)/(nicolinas)";
import Research from "./(pages)/(research)";
import Projects from "./(pages)/(projects)";
import Protocol from "./(pages)/(protocol)";
import Podcast from "./(pages)/(papo-de-malungo)";
import AccessArchive from "./(pages)/(access-archive)";
import Releases from "./(pages)/(releases)";

export default function HomePage() {
  return (
    <div className="h-full w-full ">
      <Releases/>
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
