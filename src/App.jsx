import AddTestimonials from "./components/body/AddTestimonials.jsx";
import End from "./components/body/End.jsx";
import ExploreSection from "./components/body/ExploreSection.jsx";
import Features from "./components/body/Features.jsx";
import Testimonials from "./components/body/Testimonials.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/header/Navbar.jsx";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <ExploreSection />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <AddTestimonials />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <End />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
