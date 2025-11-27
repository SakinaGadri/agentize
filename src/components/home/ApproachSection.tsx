import { Card } from "@/components/ui/card";
import { Filter, Target, Handshake, BarChart3, Users } from "lucide-react";

const pillars = [
  {
    icon: Filter,
    title: "Top-of-Funnel",
    description: "Automate lead capture, enrichment, prioritization, and personalized outreach so pipeline grows without adding SDRs.",
  },
  {
    icon: Target,
    title: "Middle-of-Funnel",
    description: "Automate demo scheduling, research briefs, and follow-ups so reps stay in selling mode.",
  },
  {
    icon: Handshake,
    title: "Bottom-of-Funnel",
    description: "Automate proposals, negotiation prep, and RFP workflows to close deals faster.",
  },
  {
    icon: BarChart3,
    title: "Management",
    description: "Automate reporting, forecasting, and CRM hygiene and get a real-time AI Assistant for leadership.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Automate onboarding, usage alerts, and renewal prep to retain customers effortlessly.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Turn your sales funnel into a predictable, automated system.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Automate the manual steps that slow deals and stall growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="p-8 shadow-card hover:shadow-hover transition-all duration-300 border-border animate-fade-up group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-lg bg-accent/10 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </Card>
          ))}
          
          {/* Empty card to complete the grid */}
          {/* <Card className="p-8 shadow-card border-2 border-dashed border-border flex items-center justify-center bg-secondary/30 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-center text-muted-foreground font-medium">
              Custom workflows tailored to your unique process
            </p>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
