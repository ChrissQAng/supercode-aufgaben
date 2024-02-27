import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
