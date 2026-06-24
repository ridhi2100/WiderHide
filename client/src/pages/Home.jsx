import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import BestSellers from "../components/BestSellers";
import NewArrivals from "../components/NewArrivals";
import PromoBanner from "../components/PromoBanner";
import Testimonials from "../components/Testimonials";
import BrandStory from "../components/BrandStory";
import StatsSection from "../components/StatsSection";
import Newsletter from "../components/Newsletter";
import InstagramGallery from "../components/InstagramGallery";

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <Categories />

      <FeaturedProducts />

      <WhyChooseUs />

      <PromoBanner />

      <Testimonials />

      <BrandStory />

      <Footer />
    </>
  );
}

export default Home;