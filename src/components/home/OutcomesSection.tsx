import { TrendingUp, Clock, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Manual outbound burns money and time",
    description: "Automate 2–3 SDRs worth of work and scale outreach for pennies.",
  },
  {
    icon: Clock,
    title: "Your AEs are overwhelmed with admin, and it's killing deals",
    description: "Automate research, presentations, and more so they spend 10+ more hours every week actually selling.",
  },
  {
    icon: Database,
    title: "Bad data leads to bad decisions",
    description: "Automated CRM hygiene gives you real visibility into pipeline and forecasting.",
  },
];

export function OutcomesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Do more with less
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your revenue grows when your sales process stops slowing you down.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <Card
              key={outcome.title}
              className="p-8 shadow-card hover:shadow-hover transition-all duration-300 border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-lg bg-accent/10 w-12 h-12 flex items-center justify-center mb-6">
                <outcome.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{outcome.title}</h3>
              <p className="text-muted-foreground">{outcome.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
