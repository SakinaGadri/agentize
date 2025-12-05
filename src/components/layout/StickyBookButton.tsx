import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function StickyBookButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8">
      <Button asChild variant="hero" size="lg" className="shadow-2xl">
        <a href="https://calendly.com/asafdarii/chat" target="_blank" rel="noopener noreferrer" className="gap-2">
          <Calendar className="h-5 w-5" />
          <span className="hidden sm:inline">Book a 20-min consultation</span>
          <span className="sm:hidden">Book Now</span>
        </a>
      </Button>
    </div>
  );
}
