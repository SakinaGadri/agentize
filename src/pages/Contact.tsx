import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookButton } from "@/components/layout/StickyBookButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Thanks for reaching out!",
      description: "We'll get back to you within 24 hours to schedule your assessment.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-subtle py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Let's audit your sales workflow
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We'll identify 3–5 quick-win automations and map your ROI. 
                Book a 20-minute slot or send us a message.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Calendar */}
        <section className="py-20 lg:py-28">
          <div className="container px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Form */}
              <Card className="p-8 shadow-card border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input id="company" name="company" required placeholder="Acme Inc" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role *</Label>
                      <Select name="role" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="founder">Founder/CEO</SelectItem>
                          <SelectItem value="sales-leader">VP Sales/CRO</SelectItem>
                          <SelectItem value="revops">RevOps/Sales Ops</SelectItem>
                          <SelectItem value="ae">Account Executive</SelectItem>
                          <SelectItem value="sdr">SDR Manager</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="crm">Current CRM</Label>
                    <Select name="crm">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your CRM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hubspot">HubSpot</SelectItem>
                        <SelectItem value="salesforce">Salesforce</SelectItem>
                        <SelectItem value="pipedrive">Pipedrive</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="none">None yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bottleneck">Biggest bottleneck *</Label>
                    <Textarea
                      id="bottleneck"
                      name="bottleneck"
                      required
                      placeholder="e.g., Manual lead enrichment takes 2+ hours daily..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </Card>

              {/* Calendly Embed Placeholder */}
              <Card className="p-8 shadow-card border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">Book a time</h2>
                </div>

                <div className="aspect-[4/5] bg-secondary/30 rounded-lg flex items-center justify-center text-muted-foreground mb-6">
                  {/* Calendly embed would go here */}
                  <div className="text-center p-8">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-accent" />
                    <p className="font-medium mb-2">Calendly Integration</p>
                    <p className="text-sm">20-minute automation assessment slots</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>20-minute video call</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>We'll review your current stack</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>Identify 3–5 automation opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>Get a custom ROI estimate</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Thank You Note */}
            <Card className="mt-12 p-8 max-w-4xl mx-auto shadow-card border-accent/30 bg-accent/5">
              <p className="text-center text-muted-foreground">
                <strong className="text-foreground">After you submit:</strong> We'll send you our free 
                <span className="text-accent font-medium"> "21-Day Sales Automation Sprint"</span> PDF guide 
                with quick wins you can implement today.
              </p>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  );
};

export default Contact;
