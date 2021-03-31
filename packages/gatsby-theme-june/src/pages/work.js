import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import galleryData from "../../data/gallery";
import SEO from "../components/seo";
import data from "../../data/work";

const Work = () => {
  return (
    <Layout transparent sticky progress>
      <SEO title={"Check this shit bruh"} />
      <Hero fixed small bg center data={data} />
      <Gallery data={galleryData} button items={6} />
    </Layout>
  );
};

export default Work;
