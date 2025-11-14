import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  Server,
  Route as RouteIcon,
  Shield,
  Waves,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: App });

type Page =
  | "home"
  | "search"
  | "listing"
  | "checkout"
  | "host-dashboard"
  | "admin";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={handleNavigate} />
      <main className="flex-1">
        {/* {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'search' && <SearchResultsPage onNavigate={handleNavigate} />}
        {currentPage === 'listing' && <ListingDetailsPage onNavigate={handleNavigate} />}
        {currentPage === 'checkout' && <CheckoutPage onNavigate={handleNavigate} />}
        {currentPage === 'host-dashboard' && <HostDashboard />}
        {currentPage === 'admin' && <AdminPanel />} */}
      </main>
      <Footer />
    </div>
  );
}
