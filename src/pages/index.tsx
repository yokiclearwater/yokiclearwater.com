import LandingPage from "./../components/LandingPage";
import Layout from "./../components/Layout";
import About from './../components/About';

export default function Home() {

  return (
    <>
      <Layout>
        <LandingPage />
        <About />
      </Layout>
    </>
  );
}
