import { TrendingUp, Clock, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Replace 2–3 SDRs",
    description: "Save $150K+ annually while scaling personalized outreach on autopilot.",
  },
  {
    icon: Clock,
    title: "Give AEs 10+ hours back every week",
    description: "Automate meeting briefs, recaps, and follow-ups - so they stay in selling mode.",
  },
  {
    icon: Database,
    title: "Cleaner CRM, sharper forecast",
    description: "AI keeps your CRM updated so leadership can actually trust the numbers.",
  },
];

export function OutcomesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Grow pipeline, not your team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Free your team from busywork and watch output multiply
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
