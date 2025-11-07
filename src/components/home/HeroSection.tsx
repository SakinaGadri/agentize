import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tools = [
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
  { name: "Apollo", logo: "https://cdn.prod.website-files.com/5f2c2ebee8c76e4c0b0c2e5e/5f2c2ebee8c76e5e740c2e9a_apollo-logo.svg" },
  { name: "Clay", logo: "https://asset.brandfetch.io/idOEGrqRcY/idtXWqfB4R.svg" },
  { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-subtle">
      <div className="container px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-up">
            Automate your sales engine — so your team can focus on closing.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We design AI + automation workflows that replace repetitive SDR, AE, and CS tasks. 
            Scale pipeline and revenue without adding headcount.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Book a 20-min assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">See packages</Link>
            </Button>
          </div>

          <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm font-medium text-muted-foreground mb-6">
              Trusted integrations with industry-leading tools
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center opacity-60 hover:opacity-100 transition-opacity">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
