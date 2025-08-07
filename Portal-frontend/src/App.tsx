import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Emergency from "./pages/Emergency";
import Help from "./pages/Help";
import MapPage from "./map/pages/MapPage";
import NotFound from "./pages/NotFound";
import FoodBankLogin from "./pages/FoodBankLogin";
import ShelterLogin from "./pages/ShelterLogin";
import RegisterFoodBank from "./pages/RegisterFoodBank";
import RegisterShelter from "./pages/RegisterShelter";
import BecomePartner from "./pages/BecomePartner";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/help" element={<Help />} />
          <Route path="/map" element={
            <ProtectedRoute>
              <MapPage />
            </ProtectedRoute>
          } />
          <Route path="/food-bank-login" element={<FoodBankLogin />} />
          <Route path="/shelter-login" element={<ShelterLogin />} />
          <Route path="/register-food-bank" element={<RegisterFoodBank />} />
          <Route path="/register-shelter" element={<RegisterShelter />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL \"*\" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
