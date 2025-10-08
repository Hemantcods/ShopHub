import { Smartphone, Shirt, Home, Sparkles, Dumbbell, BookOpen } from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Electronics",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      count: "2M+ Products",
    },
    {
      name: "Fashion",
      icon: Shirt,
      color: "from-pink-500 to-rose-500",
      count: "5M+ Products",
    },
    {
      name: "Home & Kitchen",
      icon: Home,
      color: "from-orange-500 to-amber-500",
      count: "1M+ Products",
    },
    {
      name: "Beauty",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      count: "800K+ Products",
    },
    {
      name: "Sports",
      icon: Dumbbell,
      color: "from-green-500 to-emerald-500",
      count: "600K+ Products",
    },
    {
      name: "Books & Media",
      icon: BookOpen,
      color: "from-indigo-500 to-blue-500",
      count: "1.5M+ Products",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
          <p className="text-muted-foreground">Explore our wide range of products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative space-y-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
