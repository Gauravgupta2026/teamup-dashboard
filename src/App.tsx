import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"; // ✅ Import ChakraProvider
import { AuthProvider } from "@/hooks/use-auth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomerList from "./pages/CustomerList";
import BookingManagement from "./pages/BookingManagement";
import Cancellations from "./pages/Cancellations";
import Company from "./pages/Company";
import AuthPage from "./pages/AuthPage";
import BookingFilter from "./pages/BookingFilter";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthPage />} />
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
              <Route path="/booking-filter" element={<BookingFilter />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
);

export default App;
