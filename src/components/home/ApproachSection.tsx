import { Card } from "@/components/ui/card";
import { Filter, Target, Handshake, BarChart3, Users } from "lucide-react";

const pillars = [
  {
    icon: Filter,
    title: "Top-of-Funnel",
    description: "Capture, qualify, and prioritize leads automatically while also personalizing outreach at scale.",
  },
  {
    icon: Target,
    title: "Middle-of-Funnel",
    description: "Book demoes and answer prospects faster, while always being prepared for meetings with your custom-built AI Assistant.",
  },
  {
    icon: Handshake,
    title: "Bottom-of-Funnel",
    description: "Automated proposal generation, custom negotiation strategies, and RFP assistance to help close deals days faster.",
  },
  {
    icon: BarChart3,
    title: "Management",
    description: "Automate reporting, forecasting, and CRM hygiene, and get a custom AI Assistant that lets leadership query deals in real time, eliminating manual pipeline reviews.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Automate onboarding and renewals to retain customers effortlessly.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Automate every stage of your sales funnel
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          End-to-end automation across your entire sales and CS workflow
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 center">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.title}
              className="p-8 shadow-card hover:shadow-hover transition-all duration-300 border-border animate-fade-up group"
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
