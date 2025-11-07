import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookButton } from "@/components/layout/StickyBookButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Filter, Target, Handshake, BarChart3, Users,
  Search, MessageSquare, Calendar, FileText, Bell
} from "lucide-react";

const services = [
  {
    title: "Top-of-Funnel",
    icon: Filter,
    description: "Automated lead generation and qualification",
    features: [
      "Lead capture from multiple sources",
      "Automated enrichment with Apollo & Clay",
      "ICP scoring and prioritization",
      "Personalized outreach campaigns",
      "Instant.ly & HubSpot integration",
    ],
    tools: ["Apollo", "HubSpot", "Clay", "Zapier", "Instantly"],
  },
  {
    title: "Middle-of-Funnel",
    icon: Target,
    description: "Smart demo scheduling and preparation",
    features: [
      "Automated demo scheduling via Calendly",
      "Pre-demo research briefs",
      "Meeting summaries with Fireflies/Read.ai",
      "Automated follow-up sequences",
      "Prospect intelligence dashboards",
    ],
    tools: ["Calendly", "Fireflies", "Read.ai", "HubSpot"],
  },
  {
    title: "Bottom-of-Funnel",
    icon: Handshake,
    description: "Closing acceleration and proposal automation",
    features: [
      "Auto follow-up emails based on deal stage",
      "AI-generated proposal drafts",
      "RFP assistance and templates",
      "Contract tracking and reminders",
      "Deal room automation",
    ],
    tools: ["PandaDoc", "Qwilr", "HubSpot", "ChatGPT"],
  },
  {
    title: "Management",
    icon: BarChart3,
    description: "Pipeline visibility and CRM hygiene",
    features: [
      "AI-powered pipeline digests",
      "CRM hygiene alerts and cleanup",
      "Forecasting accuracy dashboards",
      "Sales activity tracking",
      "Performance analytics",
    ],
    tools: ["Slack", "HubSpot", "Zapier", "ChatGPT"],
  },
  {
    title: "Customer Success",
    icon: Users,
    description: "Seamless handoff and proactive retention",
    features: [
      "Automated onboarding handoff",
      "Usage alerts and health scores",
      "Renewal preparation documents",
      "Expansion opportunity flagging",
      "Customer feedback automation",
    ],
    tools: ["HubSpot", "Zapier", "ChatGPT", "Slack"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-subtle py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Modular automation you can adopt in phases
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Start with top-of-funnel lead capture or fix follow-ups first—your call. 
                We design flexible workflows that grow with your team.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="p-8 lg:p-12 shadow-card hover:shadow-hover transition-all duration-300 border-border animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="rounded-lg bg-accent/10 w-14 h-14 flex items-center justify-center">
                          <service.icon className="h-7 w-7 text-accent" />
                        </div>
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3 text-foreground">Key automations:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent mt-1">→</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-semibold mb-4 text-foreground">Tools we integrate:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 lg:py-28 gradient-hero text-primary-foreground">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Not sure where to start?
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Book a free 20-minute automation audit. We'll identify your top 3 automation opportunities.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link to="/contact">Book your free assessment</Link>
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

export default Services;
