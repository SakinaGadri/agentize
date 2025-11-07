import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tools = [
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Zapier", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/1280px-Zapier_logo.svg.png" },
  { name: "Apollo", logo: "https://mma.prnewswire.com/media/2153232/Apollo_logotype_OnWhite_Logo.jpg" },
  { name: "Clay", logo: "https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664ffc89ff539b531cc46813_Clay-logo-black-2024.webp" },
  { name: "Instantly", logo: "https://autogpt.net/wp-content/uploads/2025/06/instantly_logo.jpg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" },
  { name: "ChatGPT", logo: "https://vectorseek.com/wp-content/uploads/2023/10/ChatGPT-Vertical-Logo-Vector.svg-.png" },
  { name: "Calendly", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMs1pNrfnYzDVKq1lfuijA5SaOm9RVEvPhJA&s" },
  { name: "Fireflies", logo: "https://cdn.prod.website-files.com/631ca8c577b6834a20a1071a/6618891600dff4e458dbc561_p1c-ARalIJ-mHxFwXA5C-YdHv6c6Ljl2fMj-59wpDi8.png" },
  { name: "Pandadoc", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/PandaDoc_logo.png" },
  { name: "Intercom", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Intercom_Logo_2020.svg" },
  {name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  {name: "Mixpanel", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Mixpanel_logo.png" },
  {name: "Zendesk", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Zendesk_logo.svg" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-subtle">
      <div className="container px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-up">
            Automate your sales engine <br /> so your team can focus on closing.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            AI + automation workflows that help your team hit quota consistently and systemically.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Book a 20-min automation audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">See packages</Link>
            </Button>
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
