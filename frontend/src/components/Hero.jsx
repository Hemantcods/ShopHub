import { Button } from "../components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBanner from "../assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden  bg-gradient-to-br from-orange-200 to-lime-100">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4 animate-pulse-glow" />
              Limited Time Mega Sale
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Shop Smarter,
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Save Bigger
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Discover millions of products at unbeatable prices. Free shipping on orders above ₹499. 
              Shop now and save up to 80%!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group">
                Shop Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Explore Deals
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">10M+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">50K+</p>
                <p className="text-sm text-muted-foreground">Brands</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">5M+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img
              src={heroBanner}
              alt="Featured products showcase"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
