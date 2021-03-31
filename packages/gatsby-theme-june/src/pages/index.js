import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo.js";
import Services from "../components/Services.jsx";
import TextGrid from "../components/TextGrid.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Team from "../components/Team.jsx";
import Contact from "../components/Contact.jsx";
import Text from "../components/Text.jsx";
import FAQ from "../components/FAQ.jsx";
import Banner from "../components/Banner.jsx";
import Plans from "../components/Plans.jsx";
import IconGrid from "../components/IconGrid.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Map from "../components/Map.jsx";
import Gallery from "../components/Gallery.jsx";
import TextImageBg from "../components/TextImageBg.jsx";
import AltMap from "../components/AltMap.jsx";
import Video from "../components/Video.jsx";
import Featured from "../components/Featured.jsx";

// DATA
import textData from "../../data/text";
import iconGridData from "../../data/iconGrid";
import servicesData from "../../data/services";
import bannerBtn from "../../data/bannerBtn";
import banner from "../../data/banner";
import hero from "../../data/hero";
import about from "../../data/about";
import team from "../../data/team";
import contact from "../../data/contact";
import plans from "../../data/plans";
import faq from "../../data/faq";
import text from "../../data/text";
import testimonial from "../../data/testimonial";
import galleryData from "../../data/gallery";
import textImageBg from "../../data/textImageBg";
import altMap from "../../data/altMap";
import videoData from "../../data/video";
import featuredData from "../../data/featured";

const Home = () => {
  return (
    <Layout sticky light progress transparent>
      <SEO title="Home" />
      <Hero data={hero} bg center fixed home />
      <Gallery data={galleryData} button items={3} />
      <Services data={servicesData} box fade thick large="true" wide="true" />
      <About data={about} bg tilt thick fade />
      {/* <Team data={team} fade /> */}
      <Contact
        data={contact}
        // bg
        // thick
        // fade
        // // tilt
        // wide
        box
        fade
        thick
        large="true"
        wide="true"
      />
      {/* <Contact data={contact} image fixed rounded /> */}
      <Plans data={plans} thick />
      <Banner data={banner} image thick newsletter />
      <FAQ data={faq} center />
      <TextImageBg data={textImageBg} fixed />
      <Featured data={featuredData} />
      <IconGrid bg data={iconGridData} />
      <TextGrid data={servicesData} thick />
      <Banner data={bannerBtn} bg background />
      <Text data={textData} />
      <Testimonial data={testimonial} />
      {/* <Map /> */}
      {/* <AltMap data={altMap} side /> */}
      {/* <Video data={videoData} thick /> */}
    </Layout>
  );
};

export default Home;
