import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedStories from "@/components/FeaturedStories";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedStories />
        <Services />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
