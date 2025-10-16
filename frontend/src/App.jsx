import { Toaster } from "./components/ui/sonner.jsx";
import { TooltipProvider } from "./components/ui/tooltip.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import Electronics from "./pages/Electronics.jsx";
import Login from "./pages/LoginPage.jsx";
import Admin from "./pages/Admin.jsx";

function AppRoutes() {
  return (
    <>
      {/* Render normal routes */}
      <Routes >
        <Route path="/" element={<Index />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
