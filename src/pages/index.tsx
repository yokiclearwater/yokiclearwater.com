import LandingPage from "./../components/LandingPage";
import Layout from "./../components/Layout";
import About from './../components/About';
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";
import Skills from "../components/Skills";
import Footer from './../components/Footer';

export default function Home() {

  return (
    <>
      <Layout>
        <LandingPage />
        <About />
        <Timeline />
        <Skills />
        <Footer />
      </Layout>
    </>
  );
}
