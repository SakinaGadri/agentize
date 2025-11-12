import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    company: "Seed Stage",
    industry: "Industrial IoT SaaS",
    result: "Replaced 2 SDRs, +31% demos in 30 days",
    metrics: [
      { label: "Demo increase", value: "+31%" },
      { label: "Cost savings", value: "$120K/yr" },
      { label: "Time to value", value: "14 days" },
    ],
  },
  {
    company: "Series A",
    industry: "Community SaaS Platform",
    result: "+12 hrs/wk per AE, faster closes",
    metrics: [
      { label: "Time saved", value: "12 hrs/wk" },
      { label: "Cycle time", value: "-22%" },
      { label: "Win rate", value: "+18%" },
    ],
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-20 lg:py-28 gradient-subtle">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Outcomes from systems we’ve built before
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the kinds of results you can expect when your team runs on automation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={study.company}
              className="p-8 shadow-card hover:shadow-hover transition-all duration-300 border-border group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{study.company}</h3>
                    <span className="text-sm text-muted-foreground">• {study.industry}</span>
                  </div>
                  <p className="text-muted-foreground">{study.result}</p>
                </div>
                <div className="rounded-lg bg-accent/10 p-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl font-bold text-accent">{metric.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/case-studies">
              View all case studies
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
