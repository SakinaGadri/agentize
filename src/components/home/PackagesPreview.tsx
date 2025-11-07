import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    setup: "$3,000",
    monthly: "$750",
    features: ["Lead capture & enrichment", "AI-powered openers", "Calendly automation", "Recap emails", "Slack digests"],
  },
  {
    name: "Growth",
    setup: "$6,000",
    monthly: "$1,500",
    features: ["Everything in Starter", "ICP scoring", "Pre-demo briefs", "Proposal automation", "CRM hygiene alerts"],
    popular: true,
  },
  {
    name: "Scale",
    setup: "$12,000",
    monthly: "$3,000",
    features: ["Everything in Growth", "Full CS automation", "Leadership reporting", "Custom workflows", "Priority support"],
  },
];

export function PackagesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Packages built for every stage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start small or go all-in. Scale as you grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.name}
              className={`p-8 shadow-card hover:shadow-hover transition-all duration-300 relative animate-fade-up ${
                pkg.popular ? "border-2 border-accent" : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-sm text-muted-foreground mb-4">
                  <span className="text-3xl font-bold text-foreground">{pkg.setup}</span> setup
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="text-2xl font-bold text-foreground">{pkg.monthly}</span>/mo
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant={pkg.popular ? "hero" : "outline"} className="w-full">
                <Link to="/pricing">View Details</Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="ghost" size="lg">
            <Link to="/pricing">Compare all packages →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
