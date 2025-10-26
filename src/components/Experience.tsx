import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Cytail",
    period: "2024–Present",
    description: "Frontend & backend development, deployment, and performance tuning.",
  },
  {
    title: "Machine Learning Developer",
    company: "Samgen (Germany)",
    period: "2024",
    description: "Predictive maintenance with ML models.",
  },
  {
    title: "Full Stack Developer",
    company: "Tritux",
    period: "2023",
    description: "Built a reclamation platform using Quarkus, Angular, and Keycloak.",
  },
  {
    title: "Data Scientist",
    company: "NNA Ressources",
    period: "2024",
    description: "Deep learning model deployment.",
  },
  {
    title: "Developer",
    company: "Cloud Monsters",
    period: "2021",
    description: "Educational platform using Blockly and Firebase.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company + exp.period}
                className="relative pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary animate-glow-pulse" />

                <Card className="card-gradient border-border/50 p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-foreground/80">{exp.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
