import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const navigation = [
  { name: "Home", href: "/" },
  // { name: "Services", href: "/services" },
  // { name: "Pricing", href: "/pricing" },
  // { name: "How It Works", href: "/how-it-works" },
  // { name: "Case Studies", href: "/case-studies" },
  // { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
          <Logo />
            {/* <span className="text-xl font-bold text-primary">Agentize.</span> */}
          </Link>
          
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {/* <Button asChild variant="outline">
            <Link to="https://calendly.com/asafdarii/chat">Contact</Link>
          </Button> */}
          <Button asChild variant="hero">
            <a href="https://calendly.com/asafdarii/chat" target="_blank" rel="noopener noreferrer">Book a 20-min automation audit</a>
          </Button>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-screen border-t border-border" : "max-h-0"
        )}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="space-y-2 pt-4">
            {/* <Button asChild variant="outline" className="w-full">
              <Link to="https://calendly.com/asafdarii/chat">Contact</Link>
            </Button> */}
            <Button asChild variant="hero" className="w-full">
              <a href="https://calendly.com/asafdarii/chat" target="_blank" rel="noopener noreferrer">Book a 20-min automation audit</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
