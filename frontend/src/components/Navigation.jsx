import { Search, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu.jsx";

const Navigation = () => {
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Books & Media",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="border-b border-border bg-muted/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <p className="text-muted-foreground">Welcome to ShopHub - Your One-Stop Shop</p>
            <div className="flex gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Help
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={"/"}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text text-transparent hover:cursor-pointer">
              ShopHub
            </h1>
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search for products, brands and more..."
                className="w-full pl-10 pr-4 h-11 bg-muted/50 border-border"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
          {/* login button */}
          <Link to="/login" >
          <div className=" left-0 rounded-full">
            <Button variant="hero" size="" className="relative bg-orange-500 rounded-full" >
              Login
            </Button>
          </div>
          </Link>

        </div>

        {/* Categories */}
        <div className="mt-4 flex items-center gap-1 overflow-x-auto pb-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <Menu className="h-4 w-4" />
                All Categories
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-popover">
              {categories.map((category) => (
                <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {categories.slice(0, 5).map((category) => (
            <Link to={`/${category.toLocaleLowerCase()}`} key={category}>
            <Button key={category} variant="ghost" size="sm" className="shrink-0">
              {category}
            </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
