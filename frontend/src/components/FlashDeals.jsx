import { useState, useEffect } from "react";
import { Zap, Clock } from "lucide-react";
import ProductCard from "./ProductCard";
import headphonesImg from "../assets/product-headphones.jpg";
import smartphoneImg from "../assets/product-smartphone.jpg";
import watchImg from "../assets/product-watch.jpg";

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      name: "Premium Wireless Headphones - Flash Sale Special",
      price: 1999,
      originalPrice: 4999,
      rating: 4.5,
      reviews: 1284,
      imageUrl: headphonesImg,
      badge: "Flash Sale",
      discount: 60,
    },
    {
      name: "Latest Smartphone with 5G - Limited Stock",
      price: 19999,
      originalPrice: 29999,
      rating: 4.6,
      reviews: 2341,
      imageUrl: smartphoneImg,
      badge: "Flash Sale",
      discount: 33,
    },
    {
      name: "Elegant Fashion Watch - Today Only",
      price: 999,
      originalPrice: 2999,
      rating: 4.7,
      reviews: 856,
      imageUrl: watchImg,
      badge: "Flash Sale",
      discount: 67,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#3b82f6]/15 via-[#8b5cf6]/10 to-[#ec4899]/10 rounded-2xl p-8 mb-8 text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary-foreground/20 p-3 rounded-xl animate-pulse-glow">
                <Zap className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Flash Deals</h2>
                <p className="text-primary-foreground/90">Limited time offers - Grab them fast!</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <Clock className="h-5 w-5" />
              <div className="flex gap-2">
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
                  <div className="text-xs opacity-90">Hours</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
                  <div className="text-xs opacity-90">Mins</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
                  <div className="text-xs opacity-90">Secs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <ProductCard key={deal.name} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
