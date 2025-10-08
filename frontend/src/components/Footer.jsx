import { Facebook, Twitter, Instagram, Youtube, Mail, Smartphone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Footer = () => {
  const footerLinks = {
    "About": ["About Us", "Careers", "Press", "Blog", "Investor Relations"],
    "Help": ["Payments", "Shipping", "Returns", "FAQ", "Contact Us"],
    "Policy": ["Privacy Policy", "Terms of Use", "Security", "Sitemap"],
    "Shop": ["Electronics", "Fashion", "Home", "Beauty", "Sports"],
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated with Our Latest Deals</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and get exclusive offers delivered to your inbox
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-11"
              />
              <Button variant="default" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              ShopHub
            </h2>
            <p className="text-muted-foreground mb-4">
              Your trusted online marketplace for millions of products at the best prices.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Smartphone className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Download Our App</p>
                <p className="text-sm text-muted-foreground">Shop on the go - Available on iOS & Android</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
              <button className="px-6 py-3 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">GET IT ON</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 ShopHub. All rights reserved. Made with ❤️ for shoppers worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
