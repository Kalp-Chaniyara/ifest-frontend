import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursorTrail from "./components/CursorTrail";
import ParticlesBackground from "./components/ParticlesBackground";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import RoboEvents from "./pages/RoboEvents";
import RoboEventDetails from "./pages/RoboEventDetails";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Merchandise from "./pages/Merchandise";
import PaymentResult from "./pages/PaymentResult";
import FunEvents from "./pages/FunEvents";
import FunEventDetails from "./pages/FunEventDetails";
import { PaymentProvider } from "./contexts/PaymentContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PaymentProvider>
        <Toaster />
        <Sonner />
        <CursorTrail />
        <ParticlesBackground />
        <div className="relative z-10">
          <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/fun-events" element={<FunEvents />} />
            <Route path="/fun-events/:id" element={<FunEventDetails />} />
            <Route path="/robo-events" element={<RoboEvents />} />
            <Route path="/robo-events/:id" element={<RoboEventDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/payment/result" element={<PaymentResult />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </PaymentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
