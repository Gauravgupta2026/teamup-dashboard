
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomerList from "./pages/CustomerList";
import BookingManagement from "./pages/BookingManagement";
import Cancellations from "./pages/Cancellations";
import Company from "./pages/Company";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analytics" element={<NotFound />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/bookings" element={<BookingManagement />} />
          <Route path="/cancellations" element={<Cancellations />} />
          <Route path="/client-list" element={<CustomerList />} />
          <Route path="/company" element={<Company />} />
          <Route path="/staff" element={<NotFound />} />
          <Route path="/documents" element={<NotFound />} />
          <Route path="/equipments" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
