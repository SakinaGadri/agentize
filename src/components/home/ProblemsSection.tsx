import { AlertCircle, MessageSquare, FileSearch, Send, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "Slow lead intake",
    description: "Manual enrichment and form routing delay your best opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Generic outreach",
    description: "Reps sound the same because personalization doesn’t scale manually.",
  },
  {
    icon: FileSearch,
    title: "Time-consuming demo prep",
    description: "AEs burn hours researching prospects instead of running meetings.",
  },
  {
    icon: Send,
    title: "Inconsistent follow-ups",
    description: "Deals go cold when reminders depend on memory.",
  },
  {
    icon: BarChart,
    title: "Manual reporting",
    description: "Leadership wastes hours pulling data that’s already in the CRM.",
  },
  {
    icon: AlertCircle,
    title: "Messy CRM data",
    description: "Forecasts fail when key deal info goes missing.", 
  }
];

export function ProblemsSection() {
  return (
    <section className="py-20 lg:py-28 gradient-subtle">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Problems we solve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Common bottlenecks that keep SaaS sales teams from scaling
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              className="p-6 shadow-card hover:shadow-hover transition-all duration-300 border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-destructive/10 p-2 flex-shrink-0">
                  <problem.icon className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
