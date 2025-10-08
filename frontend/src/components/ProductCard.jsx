import { Star, ShoppingCart } from "lucide-react";
import { Button } from "../components/ui/button.jsx";
import { Badge } from "../components/ui/badge.jsx";

const ProductCard = ({ name, price, originalPrice, rating, reviews, image, badge, discount }) => {
  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground shadow-lg animate-pulse-glow">
            {badge}
          </Badge>
        )}
        {discount && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-accent to-secondary text-accent-foreground shadow-lg font-bold">
            {discount}% OFF
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Actions */}
        <Button variant="default" size="sm" className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
