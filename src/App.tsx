import Audience from "./features/audience/components/Audience";
import Benefits from "./features/benefits/components/Benefits";
import Contact from "./features/contact/components/Contact";
import FAQ from "./features/faq/components/FAQ";

import Hero from "./features/hero/components/Hero";
import Process from "./features/process/components/Process";
import Projects from "./features/projects/components/Projects";
import Services from "./features/services/components/Services";
import Testimonials from "./features/testimonials/components/Testimonials";
import Footer from "./shared/components/footer/components/Footer";
import Header from "./shared/components/header/components/Header";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Services />
        <Audience />
        <Benefits />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
