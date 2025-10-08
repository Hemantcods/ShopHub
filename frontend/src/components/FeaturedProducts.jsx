import ProductCard from "./ProductCard";
import headphonesImg from "../assets/product-headphones.jpg";
import watchImg from "../assets/product-watch.jpg";
import smartphoneImg from "../assets/product-smartphone.jpg";
import backpackImg from "../assets/product-backpack.jpg";
import skincareImg from "../assets/product-skincare.jpg";
import shoesImg from "../assets/product-shoes.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Premium Wireless Headphones with Active Noise Cancellation",
      price: 2499,
      originalPrice: 4999,
      rating: 4.5,
      reviews: 1284,
      image: headphonesImg,
      badge: "Bestseller",
      discount: 50,
    },
    {
      name: "Elegant Rose Gold Fashion Watch - Women's Collection",
      price: 1299,
      originalPrice: 2999,
      rating: 4.7,
      reviews: 856,
      image: watchImg,
      discount: 57,
    },
    {
      name: "Latest Smartphone with 5G Connectivity and AI Camera",
      price: 24999,
      originalPrice: 29999,
      rating: 4.6,
      reviews: 2341,
      image: smartphoneImg,
      badge: "Hot Deal",
      discount: 17,
    },
    {
      name: "Designer Travel Backpack with USB Charging Port",
      price: 1799,
      originalPrice: 3499,
      rating: 4.4,
      reviews: 643,
      image: backpackImg,
      discount: 49,
    },
    {
      name: "Luxury Skincare Gift Set - Premium Beauty Collection",
      price: 3999,
      originalPrice: 7999,
      rating: 4.8,
      reviews: 1127,
      image: skincareImg,
      badge: "Premium",
      discount: 50,
    },
    {
      name: "Athletic Running Shoes - Lightweight & Breathable",
      price: 2199,
      originalPrice: 4999,
      rating: 4.5,
      reviews: 987,
      image: shoesImg,
      discount: 56,
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked bestsellers just for you</p>
          </div>
          <button className="text-primary hover:text-primary/80 font-medium">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
