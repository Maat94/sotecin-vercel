import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Sells from "./components/Sells";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Sells/>
      <About />
      <Footer />
    </>
  );
}

export default App;