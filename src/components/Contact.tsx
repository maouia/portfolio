import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "+216 54 585 464",
    href: "tel:+21654585464",
  },
  {
    icon: Mail,
    label: "Email",
    value: "allagui.maouia@outlook.com",
    href: "mailto:allagui.maouia@outlook.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "allagui-maouia",
    href: "https://www.linkedin.com/in/allagui-maouia/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "maouia",
    href: "https://github.com/maouia",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-12">
          Let's build something meaningful together.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <Card
              key={method.label}
              className="card-gradient border-border/50 p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{method.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all hover:scale-105"
          >
            <a href="mailto:allagui.maouia@outlook.com">
              Send Me a Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
