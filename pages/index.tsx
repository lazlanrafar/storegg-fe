import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/navbar";
import MainBanner from "../components/organisms/main-banner";
import TransactionStep from "../components/organisms/transaction-step";
import FeaturedGame from "../components/organisms/featured-game";
import Reached from "../components/organisms/reached";
import MainStory from "../components/organisms/main-story";
import Footer from "../components/organisms/footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <MainStory />
      <Footer />
    </>
  );
};

export default Home;
