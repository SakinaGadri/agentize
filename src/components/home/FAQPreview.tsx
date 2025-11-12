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
    answer: "Most teams see measurable results in 14–21 days, usually in the form of time saved or more demos booked. We start with quick-win automations that prove ROI fast, then expand into deeper systems once you see value.",
  },
  {
    question: "Which tools do you support?",
    answer: "We specialize in SaaS sales stacks built on tools like HubSpot, Salesforce, Apollo, Clay, Zapier, ChatGPT, Instantly, BuiltWith, PandaDoc, Calendly, and Slack.",
  },
  {
    question: "Will automation replace my team?",
    answer: "Not at all. Automation doesn’t replace people, it removes busywork so they can do their best work. SDRs focus on meaningful conversations, AEs focus on closing, and leaders finally get the data visibility they’ve been missing.",
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
            Get straight answers about timelines, tools, and team impact.
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
