import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Projects />
    </MainLayout>
  );
};

export default Home;

