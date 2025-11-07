import { Search, Pencil, Rocket, GraduationCap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnose",
    description: "We audit your tech stack and identify quick-win automation opportunities",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design",
    description: "Create custom workflows with proper data models and error handling",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy",
    description: "Build in sandbox, QA rigorously, then launch with user acceptance testing",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Enable",
    description: "Train your team with video guides, documentation, and KPI dashboards",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 gradient-subtle">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From audit to automation in 4 steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Connector line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0" />
              )}
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-accent text-accent-foreground w-12 h-12 flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="rounded-lg bg-accent/10 w-12 h-12 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-accent">
            ⚡ Typical first wins delivered in 14–21 days
          </p>
        </div>
      </div>
    </section>
  );
}
