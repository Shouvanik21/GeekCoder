import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Converter from "../components/Converter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Background />

      <div className="relative min-h-screen">
        <Navbar />

        <Hero />

        <Converter />

        <Footer />
      </div>
    </>
  );
}

export default Home;
