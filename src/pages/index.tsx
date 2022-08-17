import LandingPage from "./../components/LandingPage";
import Layout from "./../components/Layout";
import About from './../components/About';
import Timeline from "../components/Timeline";

export default function Home() {

  return (
    <>
      <Layout>
        <LandingPage />
        <About />
        <Timeline />
      </Layout>
    </>
  );
}
