import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookButton } from "@/components/layout/StickyBookButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, Shield } from "lucide-react";

const packages = [
  {
    name: "Starter",
    setup: "$3,000",
    monthly: "$750",
    description: "Perfect for early-stage startups testing automation",
    features: [
      "Lead capture & enrichment",
      "AI-powered email openers",
      "Calendly automation",
      "Automated recap emails",
      "Slack pipeline digests",
      "Basic CRM hygiene",
      "1 automation workflow",
      "Email support",
    ],
  },
  {
    name: "Growth",
    setup: "$6,000",
    monthly: "$1,500",
    description: "For scaling teams ready to automate the full funnel",
    features: [
      "Everything in Starter",
      "ICP scoring & prioritization",
      "Pre-demo research briefs",
      "Proposal automation",
      "CRM hygiene alerts",
      "Multi-channel sequences",
      "3 automation workflows",
      "Priority email support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    setup: "$12,000",
    monthly: "$3,000",
    description: "Enterprise-grade automation for high-growth teams",
    features: [
      "Everything in Growth",
      "Full CS automation",
      "Leadership reporting dashboards",
      "Custom workflow design",
      "Advanced forecasting",
      "Unlimited workflows",
      "Dedicated Slack channel",
      "Priority support + training",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-subtle py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Transparent pricing for every stage of scale
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                One-time setup + predictable monthly support. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card
                  key={pkg.name}
                  className={`p-8 shadow-card hover:shadow-hover transition-all duration-300 relative flex flex-col animate-fade-up ${
                    pkg.popular ? "border-2 border-accent" : "border-border"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                    
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        <span className="text-3xl font-bold text-foreground">{pkg.setup}</span> setup
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="text-2xl font-bold text-foreground">{pkg.monthly}</span>/month
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant={pkg.popular ? "hero" : "outline"} className="w-full">
                    <a href="https://calendly.com/asafdarii/chat" target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </Card>
              ))}
            </div>

            {/* Guarantee */}
            <Card className="mt-16 p-8 max-w-4xl mx-auto shadow-card border-accent/30 bg-accent/5">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3 flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our results guarantee</h3>
                  <p className="text-muted-foreground">
                    If we don't ship an automation that saves 5+ hours/week in the first 30 days, 
                    we work for free until we do. No exceptions.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-hero text-primary-foreground">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to start automating?
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Book a 20-minute consultation to discuss which package fits your needs.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <a href="https://calendly.com/asafdarii/chat" target="_blank" rel="noopener noreferrer">Book a 20-min consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  );
};

export default Pricing;
