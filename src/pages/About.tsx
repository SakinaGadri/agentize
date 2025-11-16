import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookButton } from "@/components/layout/StickyBookButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Target, Shield, Users, Linkedin } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Outcome over tools",
    description: "We focus on business results, not just technical implementation",
  },
  {
    icon: Shield,
    title: "Data sanity first",
    description: "Clean, accurate CRM data is the foundation of every automation",
  },
  {
    icon: Award,
    title: "Ship weekly value",
    description: "Rapid iterations with measurable wins every sprint",
  },
  {
    icon: Users,
    title: "Teach the playbook",
    description: "We empower your team to own and maintain automations",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-subtle py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Built by salespeople who automate for salespeople
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We've been in the trenches. We know what works because we've sold, managed pipeline, 
                and closed deals ourselves.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Bio */}
        <section className="py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 lg:p-12 shadow-card border-border">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <div className="w-32 h-32 rounded-full bg-gradient-accent mx-auto lg:mx-0 mb-4" />
                    <h3 className="text-xl font-bold text-center lg:text-left">Abbas Safdari</h3>
                    <p className="text-sm text-muted-foreground text-center lg:text-left mb-4">
                      Founder & Automation Architect
                    </p>
                    <div className="flex justify-center lg:justify-start">
                      <a
                        href="https://www.linkedin.com/in/abbas-safdari786/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        I started my career as a Founding AE at a mid-market SaaS company, where I quickly 
                        realized that the best sellers weren't just good at conversations—they were obsessed 
                        with systems.
                      </p>
                      <p>
                        After building outbound engines with Apollo, Clay, Instantly, and BuiltWith, I saw 
                        firsthand how automation could 10x productivity without sacrificing personalization.
                      </p>
                      <p>
                        Now I help early and mid-stage SaaS startups scale revenue without scaling headcount. 
                        My focus is simple: automate the repetitive work so your team can focus on what actually 
                        closes deals.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 gradient-subtle">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide every automation we build
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="p-8 shadow-card hover:shadow-hover transition-all duration-300 border-border animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-3 flex-shrink-0">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Badges */}
        <section className="py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Certified expertise</h2>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {["HubSpot Partner", "Zapier Expert", "Apollo Certified", "Clay Expert"].map((badge) => (
                  <div key={badge} className="px-6 py-3 bg-secondary rounded-lg font-medium">
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-hero text-primary-foreground">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let's build your automation engine
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Book a 20-minute call to discuss your sales workflow and automation opportunities.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <a href="https://calendly.com/asafdarii/chat" target="_blank" rel="noopener noreferrer">Book a 20-min assessment</a>
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

export default About;
