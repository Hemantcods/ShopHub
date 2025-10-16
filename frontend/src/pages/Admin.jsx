import React from "react";
import { ShoppingCart, Users, DollarSign, Package } from "lucide-react";

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6">
        <h1 className="text-2xl font-bold text-indigo-600 mb-8">ShopHub Admin</h1>
        <nav className="space-y-4">
          <a href="#" className="block font-medium text-gray-700 hover:text-indigo-600">
            Dashboard
          </a>
          <a href="#" className="block font-medium text-gray-700 hover:text-indigo-600">
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

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-4">
              <ShoppingCart className="text-indigo-600" size={32} />
              <div>
                <p className="text-gray-500 text-sm">Total Orders</p>
                <h3 className="text-2xl font-bold">1,250</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-4">
              <DollarSign className="text-green-600" size={32} />
              <div>
                <p className="text-gray-500 text-sm">Revenue</p>
                <h3 className="text-2xl font-bold">₹4,85,000</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-4">
              <Users className="text-pink-600" size={32} />
              <div>
                <p className="text-gray-500 text-sm">Customers</p>
                <h3 className="text-2xl font-bold">890</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-4">
              <Package className="text-yellow-600" size={32} />
              <div>
                <p className="text-gray-500 text-sm">Products</p>
                <h3 className="text-2xl font-bold">320</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Dummy Recent Orders Table */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">#1001</td>
                <td className="p-3">Ravi Kumar</td>
                <td className="p-3">₹5,200</td>
                <td className="p-3 text-green-600 font-medium">Completed</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">#1002</td>
                <td className="p-3">Anjali Singh</td>
                <td className="p-3">₹1,500</td>
                <td className="p-3 text-yellow-600 font-medium">Pending</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3">#1003</td>
                <td className="p-3">Vikram Patel</td>
                <td className="p-3">₹3,800</td>
                <td className="p-3 text-red-600 font-medium">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Admin;
