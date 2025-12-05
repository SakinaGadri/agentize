import { Link } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";
import Logo from "./Logo";

const footerLinks = {
  pages: [
    { name: "Home", href: "/" },
    // { name: "Services", href: "/services" },
    // { name: "Pricing", href: "/pricing" },
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "https://calendly.com/asafdarii/chat" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-subtle">
      <div className="container px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
            <Logo />
              {/* <span className="text-xl font-bold text-primary">Agentize.</span> */}
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              You’re not losing deals, your process is. We automate your sales engine so you don't lose deals because of slow, manual, and inefficient sales processes.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/abbas-safdari786/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:abbasyounus@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Pages</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Agentize. You’re not losing deals, your process is.</p>
        </div>
      </div>
    </footer>
  );
}
