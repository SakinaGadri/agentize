import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tools = [
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Zapier", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/1280px-Zapier_logo.svg.png" },
  { name: "Apollo", logo: "https://mma.prnewswire.com/media/2153232/Apollo_logotype_OnWhite_Logo.jpg" },
  { name: "Clay", logo: "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664ffc89ff539b531cc46813_Clay-logo-black-2024.webp" },
  { name: "Instantly", logo: "https://autogpt.net/wp-content/uploads/2025/06/instantly_logo.jpg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" },
  { name: "ChatGPT", logo: "https://vectorseek.com/wp-content/uploads/2023/10/ChatGPT-Vertical-Logo-Vector.svg-.png" },
  { name: "Calendly", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMs1pNrfnYzDVKq1lfuijA5SaOm9RVEvPhJA&s" },
  { name: "Fireflies", logo: "https://cdn.prod.website-files.com/631ca8c577b6834a20a1071a/6618891600dff4e458dbc561_p1c-ARalIJ-mHxFwXA5C-YdHv6c6Ljl2fMj-59wpDi8.png" },
  { name: "Pandadoc", logo: "https://cdn-public.softwarereviews.com/production/logos/offerings/5820/original/PandaDoc_Logo_PNG.png" },
  { name: "Intercom", logo: "https://cdn.freebiesupply.com/logos/large/2x/intercom-1-logo-png-transparent.png" },
  {name: "Notion", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwI-YH2DFRO-mGC0sjo-Kin7So9bhNxt_YQ&s" },
  {name: "Mixpanel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Mixpanel_full_logo_%E2%80%93_purple.png" },
  {name: "Zendesk", logo: "https://help.brevo.com/hc/article_attachments/21014957272722" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-subtle">
      <div className="container px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-up">
            You’re not losing deals, <br /> your process is.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We automate your sales engine so you don't lose deals because of slow, manual, and inefficient sales processes.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild variant="hero" size="lg">
              <a href="https://calendly.com/asafdarii/chat" target="_blank" rel="noopener noreferrer">
                Book a 20-min automation audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            {/* <Button asChild variant="outline" size="lg">
              <Link to="/pricing">See packages</Link>
            </Button> */}
          </div>

          <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm font-medium text-muted-foreground mb-6">
              Trusted integrations with industry-leading tools
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center opacity-60 hover:opacity-100 transition-opacity">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
