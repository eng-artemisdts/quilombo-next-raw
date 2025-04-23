import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Nicolinas from "../pages/Nicolinas";
import Projects from "../pages/Projects";
import Protocol from "../pages/Protocol";
import Research from "../pages/Research";

export default function HomePage() {
  return (
    <div className="h-full w-full ">
      <AboutUs />
      <Research />
      <Projects />
      <Protocol />
      <Nicolinas />
      <ContactUs />
    </div>
  );
}
