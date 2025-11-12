import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookButton } from "@/components/layout/StickyBookButton";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How fast can we see results?",
        a: "Most teams see their first automation wins within 14–21 days. We prioritize quick wins that demonstrate clear ROI before expanding to more complex workflows. Our goal is to ship value weekly, not monthly.",
      },
      {
        q: "What's the first step?",
        a: "Book a free 20-minute automation audit. We'll audit your current stack, identify bottlenecks, and map out 3–5 automation opportunities with estimated ROI. No commitment required.",
      },
      {
        q: "Do we need technical expertise?",
        a: "No. We handle all the technical implementation. Your team just needs to participate in the initial audit and provide feedback during user acceptance testing.",
      },
    ],
  },
  {
    category: "Tools & Integration",
    questions: [
      {
        q: "Which tools do you support?",
        a: "We work with HubSpot, Salesforce, Apollo, Clay, Zapier, ChatGPT, Instantly, BuiltWith, PandaDoc, Calendly, Fireflies, Read.ai, Slack, and more. If you use a SaaS tool with an API, we can likely integrate it.",
      },
      {
        q: "What if we don't use HubSpot?",
        a: "No problem. We're CRM-agnostic and work with Salesforce, Pipedrive, and other platforms. The principles of automation remain the same regardless of your stack.",
      },
      {
        q: "Can you work with custom tools?",
        a: "Yes. As long as there's an API or webhook available, we can build integrations with proprietary or custom tools.",
      },
    ],
  },
  {
    category: "Implementation",
    questions: [
      {
        q: "Will automation replace my team?",
        a: "No. Automation amplifies your team by eliminating repetitive tasks. SDRs can focus on high-value conversations, AEs spend more time closing, and managers get better insights. Think of it as giving everyone a superpower, not a replacement.",
      },
      {
        q: "How do you ensure data quality?",
        a: "Data sanity is our first principle. We build validation rules, error handling, and hygiene alerts into every workflow. Plus, we test everything in a sandbox before touching production data.",
      },
      {
        q: "What happens after deployment?",
        a: "We provide video training, documentation, and KPI dashboards so your team can monitor and maintain automations. Plus, ongoing support is included in all monthly plans.",
      },
    ],
  },
  {
    category: "Pricing & Commitment",
    questions: [
      {
        q: "Do you work on retainer?",
        a: "Yes. All our packages include ongoing monitoring, optimization, and support. Automation isn't set-and-forget—it requires continuous improvement as your business evolves.",
      },
      {
        q: "Can we start small and scale?",
        a: "Absolutely. Many clients start with the Starter package to test one automation workflow, then scale to Growth or Scale as they see results.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        q: "What about data security?",
        a: "We follow least-privilege access principles (only the permissions we need), maintain audit logs for all automation actions, test in sandbox environments, and provide a transparent list of all data processors.",
      },
      {
        q: "Are you SOC 2 compliant?",
        a: "We work with enterprise-grade tools (HubSpot, Zapier, etc.) that maintain SOC 2 compliance. For custom implementations, we can align with your security requirements.",
      },
      {
        q: "Can you sign an NDA?",
        a: "Yes. We're happy to sign mutual NDAs and data processing agreements before any engagement begins.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-subtle py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Everything you need to know about sales automation. 
                Can't find an answer? Contact us.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 gradient-hero text-primary-foreground">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Still have questions?
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Book a 20-minute call and we'll answer everything you want to know.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link to="/contact">Start your automation audit</Link>
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

export default FAQ;
