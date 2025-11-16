import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookButton } from "@/components/layout/StickyBookButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, Target, BarChart3, Award, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    company: "Seed SaaS",
    industry: "DevTool",
    stage: "Seed ($2M ARR)",
    challenge: "Manual SDR prospecting limiting pipeline growth",
    solution: "Automated lead enrichment, ICP scoring, and personalized outreach sequences using Apollo + Clay + HubSpot",
    results: [
      { icon: TrendingUp, label: "Demo increase", value: "+31%", description: "in 30 days" },
      { icon: Clock, label: "Time saved", value: "12 hrs/wk", description: "per SDR" },
      { icon: Award, label: "Cost savings", value: "$120K/yr", description: "vs. 2 new SDRs" },
    ],
    quote: "We replaced 2 SDRs with automation and actually increased demo quality. Game changer.",
    author: "VP Sales",
    timeToValue: "14 days",
  },
  {
    company: "Series A Fintech",
    industry: "Financial Technology",
    stage: "Series A ($8M ARR)",
    challenge: "AEs spending 60% of time on admin tasks instead of selling",
    solution: "Automated pre-demo briefs, meeting summaries, follow-up sequences, and proposal generation with ChatGPT + HubSpot + PandaDoc",
    results: [
      { icon: Target, label: "Win rate", value: "+18%", description: "improved closing" },
      { icon: Clock, label: "Cycle time", value: "-22%", description: "faster deals" },
      { icon: BarChart3, label: "Forecast accuracy", value: "-35%", description: "variance reduction" },
    ],
    quote: "Our AEs went from drowning in admin to actually selling. Pipeline quality has never been better.",
    author: "CRO",
    timeToValue: "21 days",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-subtle py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Real results from real customers
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                See how SaaS teams are scaling revenue with intelligent automation
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-16">
              {caseStudies.map((study, index) => (
                <Card
                  key={study.company}
                  className="p-8 lg:p-12 shadow-card hover:shadow-hover transition-all duration-300 border-border animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="mb-8 pb-8 border-b border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{study.company}</h2>
                        <p className="text-muted-foreground">{study.industry} • {study.stage}</p>
                      </div>
                      <div className="rounded-lg bg-accent/10 p-3">
                        <TrendingUp className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid gap-8 lg:grid-cols-2 mb-8">
                    <div>
                      <h3 className="text-sm font-semibold mb-3 text-foreground">Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-3 text-foreground">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold mb-4 text-foreground">Results</h3>
                    <div className="grid gap-6 sm:grid-cols-3">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center p-4 rounded-lg bg-secondary/50">
                          <result.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                          <div className="text-3xl font-bold text-accent mb-1">{result.value}</div>
                          <div className="text-sm font-medium text-foreground mb-1">{result.label}</div>
                          <div className="text-xs text-muted-foreground">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent mb-6">
                    <p className="text-foreground italic mb-2">"{study.quote}"</p>
                    <p className="text-sm text-muted-foreground">— {study.author}, {study.company}</p>
                  </div>

                  {/* Time to Value */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Time to first win: </span>
                      <span className="font-semibold text-accent">{study.timeToValue}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-hero text-primary-foreground">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get your free automation audit
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Let's identify 3–5 quick-win automations in your sales workflow.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <a href="https://calendly.com/asafdarii/chat" target="_blank" rel="noopener noreferrer">
                    Book a 20-min automation audit
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </a>
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

export default CaseStudies;
