import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookButton } from "@/components/layout/StickyBookButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Pencil, Rocket, GraduationCap, Shield, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnose",
    description: "We audit your tech stack and identify quick-win automation opportunities",
    details: [
      "Review current tools and workflows",
      "Identify bottlenecks and manual tasks",
      "Map integration opportunities",
      "Define success metrics",
    ],
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    description: "Create custom workflows with proper data models and error handling",
    details: [
      "Design automation flowcharts",
      "Build data mapping schemas",
      "Plan error handling logic",
      "Document workflow specifications",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy",
    description: "Build in sandbox, QA rigorously, then launch with user acceptance testing",
    details: [
      "Build in isolated sandbox environment",
      "Comprehensive QA testing",
      "User acceptance testing (UAT)",
      "Phased production rollout",
    ],
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Enable",
    description: "Train your team with video guides, documentation, and KPI dashboards",
    details: [
      "Create video training materials",
      "Document troubleshooting guides",
      "Set up KPI monitoring dashboards",
      "Provide ongoing support",
    ],
  },
];

const integrations = [
  "HubSpot", "Salesforce", "Apollo", "Clay", "Zapier", "Instantly",
  "ChatGPT", "Calendly", "Slack", "PandaDoc", "Fireflies", "Read.ai"
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-subtle py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                From audit to automation in 4 steps
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                A proven process that delivers automation wins in 14–21 days
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-16">
              {steps.map((step, index) => (
                <Card
                  key={step.title}
                  className="p-8 lg:p-12 shadow-card hover:shadow-hover transition-all duration-300 border-border animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="rounded-full bg-accent text-accent-foreground w-14 h-14 flex items-center justify-center font-bold">
                          {step.number}
                        </div>
                        <div className="rounded-lg bg-accent/10 w-14 h-14 flex items-center justify-center">
                          <step.icon className="h-7 w-7 text-accent" />
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold mb-4">What we do:</h3>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg font-semibold text-accent">
                ⚡ Typical first wins delivered in 14–21 days
              </p>
            </div>
          </div>
        </section>

        {/* Security & Tools */}
        <section className="py-20 lg:py-28 gradient-subtle">
          <div className="container px-4 lg:px-8">
            <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2">
              {/* Security */}
              <Card className="p-8 shadow-card border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Security by default</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>Least-privilege access to your tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>Sandbox testing before production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>Transparent data processor list</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>Audit logs for all automation actions</span>
                  </li>
                </ul>
              </Card>

              {/* Integrations */}
              <Card className="p-8 shadow-card border-border">
                <h3 className="text-xl font-semibold mb-6">Tools we integrate</h3>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Don't see your tool? We can integrate with most SaaS platforms via API.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-hero text-primary-foreground">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for a stack audit?
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Let's identify automation opportunities in your current workflow.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link to="/contact">Request a stack audit</Link>
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

export default HowItWorks;
