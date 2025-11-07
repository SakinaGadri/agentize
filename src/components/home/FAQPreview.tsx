import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can we see results?",
    answer: "Most teams see their first automation wins within 14–21 days. We prioritize quick wins that demonstrate clear ROI, then expand to more complex workflows.",
  },
  {
    question: "Which tools do you support?",
    answer: "We work with HubSpot, Salesforce, Apollo, Clay, Zapier, ChatGPT, Instantly, BuiltWith, PandaDoc, Calendly, Slack, and more. If you use it, we can likely automate it.",
  },
  {
    question: "Will automation replace my team?",
    answer: "No. Automation amplifies your team by eliminating repetitive tasks. SDRs can focus on high-value conversations, AEs can spend more time closing, and managers get better insights.",
  },
];

export function FAQPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about sales automation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Button asChild variant="ghost">
              <Link to="/faq">View all FAQs →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
