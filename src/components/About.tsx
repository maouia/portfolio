import { Code, Database, Brain, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const techStacks = [
  {
    icon: Code,
    title: "Languages",
    items: ["Java", "Python", "PHP", "C", "Node.js"],
  },
  {
    icon: Terminal,
    title: "Frameworks",
    items: ["Django", "Angular", "React", "Laravel"],
  },
  {
    icon: Brain,
    title: "Data Science",
    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "Oracle"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-foreground/90 leading-relaxed">
         From Blockly games to AI-powered image analysis systems, my journey has spanned the full stack of software creation — from front-end interfaces to backend intelligence.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
           Whether it’s building a web application, training a machine learning model, or deploying scalable servers, I thrive on transforming ideas into working technology. My education in Tunisia and hands-on experience across diverse domains have shaped me into a versatile engineer who bridges the gap between complex algorithms and user-centered design.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {techStacks.map((stack, index) => (
              <Card
                key={stack.title}
                className="card-gradient border-border/50 p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stack.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-3">{stack.title}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {stack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
