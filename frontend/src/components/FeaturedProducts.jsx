import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/products/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          // only add first 8 products to featured products
          setProducts(data.products.slice(0, 8)); // Use data.products based on other components
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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
          {loading ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
