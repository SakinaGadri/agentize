import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    setup: "$3,000",
    monthly: "$750",
    features: ["Automate lead capture, enrichment, and personalized outreach so reps spend time selling, not researching."],
  },
  {
    name: "Growth",
    setup: "$6,000",
    monthly: "$1,500",
    features: ["Automate demo scheduling, AI-powered briefs, follow-ups, and proposal generation for faster closes."],
    popular: true,
  },
  {
    name: "Scale",
    setup: "$12,000",
    monthly: "$3,000",
    features: ["Automate reporting, forecasting, customer success handoffs, and a custom AI Assistant for real-time deal insights."],
  },
];

export function PackagesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tailored automation projects for every growth stage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We scope based on your tech stack and goals.
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
                <span className="text font-bold text-foreground">from </span>
                  <span className="text-3xl font-bold text-foreground">{pkg.setup} setup</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="text font-bold text-foreground">from </span>
                  <span className="text-2xl font-bold text-foreground">{pkg.monthly}/mo</span>
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

              {/* <Button asChild variant={pkg.popular ? "hero" : "outline"} className="w-full">
                <Link to="/pricing">View Details</Link>
              </Button> */}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          Setup fees cover design, build, and deployment. Monthly fees cover monitoring, optimization, and ongoing support as your stack evolves. →
          {/* <Button asChild variant="ghost" size="lg">
            <Link to="/pricing"></Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
}
