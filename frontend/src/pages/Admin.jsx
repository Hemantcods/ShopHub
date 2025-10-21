import React, { useEffect } from "react";
import { ShoppingCart, Users, DollarSign, Package } from "lucide-react";
import Dashboard from "../components/Dashboard.jsx";
import ListProducts from "../components/ListProducts.jsx";
import { Button } from "../components/ui/button.jsx";
import AddProduct from "../components/AddProduct.jsx";
import Skeleton from "react-loading-skeleton";
const Admin = () => {
  const [activeSection, setActiveSection] = React.useState("dashboard");
  const [products, setProducts] = React.useState([]);
  // handle click on sidebar links
  // get all products from backend
  const getAllProducts = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    console.log(data["products"]);

    return data["products"];
  }
  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6">
        <h1 className="text-2xl font-bold text-indigo-600 mb-8">ShopHub Admin</h1>
        <nav className="space-y-4">
          <a href="#" className="block font-medium text-gray-700 hover:text-indigo-600">
            Dashboard
          </a>
          <a href="#" className="block font-medium text-gray-700 hover:text-indigo-600" onClick={() => setActiveSection("products")}>
            Products
          </a>
          <a href="#" className="block font-medium text-gray-700 hover:text-indigo-600">
            Orders
          </a>
          <a href="#" className="block font-medium text-gray-700 hover:text-indigo-600">
            Customers
          </a>
          <a href="#" className="block font-medium text-gray-700 hover:text-indigo-600">
            Settings
          </a>
        </nav>
      </aside>
      {activeSection === "dashboard" && <Dashboard />}
      {activeSection === "products" &&
        <>
          <div className="block w-full">
            <div className="text-3xl font-bold text-gray-800 mb-10 pt-3 ml-4">Products
              <Button className="float-right bg-red-500 mr-4" variant="accent" size="lg" onClick={() => setActiveSection("add-product")}>Add Product</Button>
            </div>
            <ListProducts products={products}  isAdmin={true}  /> || <Skeleton />
          </div>
        </>
      }
      {activeSection ==='add-product' && <AddProduct/>}

    </div>
  );
};

export default Admin;
