import Navigation from "../components/Navigation.jsx";
import Hero from "../components/Hero.jsx";
import CategoryGrid from "../components/CategoryGrid.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import FlashDeals from "../components/FlashDeals.jsx";
import TrustSection from "../components/TrustSection.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
        <FlashDeals />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
