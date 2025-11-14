import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, Home } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate?.(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          <Home className="h-6 w-6 text-teal-600" />
          <span className="text-xl font-semibold text-slate-900">
            RentAlley
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="ghost"
            onClick={() => handleNavigation("search")}
            className="text-slate-700 hover:text-teal-600"
          >
            Explore Stays
          </Button>
          <Button
            variant="ghost"
            onClick={() => handleNavigation("host-dashboard")}
            className="text-slate-700 hover:text-teal-600"
          >
            Become a Host
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-300"
              >
                <User className="h-5 w-5 text-slate-700" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={() => handleNavigation("host-dashboard")}
              >
                Host Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleNavigation("admin")}>
                Admin Panel
              </DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation("search")}
                  className="justify-start"
                >
                  Explore Stays
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation("host-dashboard")}
                  className="justify-start"
                >
                  Become a Host
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation("admin")}
                  className="justify-start"
                >
                  Admin Panel
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
