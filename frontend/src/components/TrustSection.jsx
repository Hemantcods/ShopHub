import { Truck, RotateCcw, Shield, Headphones } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders above ₹499",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% protected checkout",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer service",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} flex-shrink-0`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Preview */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                />
              ))}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Trusted by 5M+ Happy Customers</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join millions of satisfied shoppers who love our quality products, fast delivery, and excellent customer service.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="w-6 h-6 text-accent fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-medium">4.8/5.0 average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
