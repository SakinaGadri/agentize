import { TrendingUp, Clock, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Replace 2–3 SDRs with automation",
    description: "Save $150K+/year while increasing outreach quality and consistency",
  },
  {
    icon: Clock,
    title: "Give AEs 10+ hours back weekly",
    description: "Auto briefs, follow-ups, and admin work so they can focus on selling",
  },
  {
    icon: Database,
    title: "Cleaner CRM & better forecasts",
    description: "AI hygiene alerts keep your data accurate and pipeline predictable",
  },
];

export function OutcomesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Real outcomes for SaaS teams
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop adding headcount. Start automating the repetitive work.
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
