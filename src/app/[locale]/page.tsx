import AboutUs from "../pages/AboutUs";
import Projects from "../pages/Projects";
import Protocol from "../pages/Protocol";
import Research from "../pages/Research";

export default function HomePage() {
  return (
    <div className="h-full w-full">
      <AboutUs />
      <Research />
      <Projects />
      <Protocol/>
    </div>
  );
}
