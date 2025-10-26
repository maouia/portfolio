import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Briefcase } from "lucide-react";

const projectCategories = [
  {
    icon: Code,
    title: "Full Stack Projects",
    color: "text-primary",
    projects: [
      {
        title: "Cytailor Project",
        description: "Built responsive UIs, optimized backend APIs, and deployed a full stack production app with SSL.",
        tech: ["React", "Django", "SSL"],
      },
      {
        title: "Wantotrip",
        description: "Full-stack web app for travel experiences with seamless integration and performance.",
        tech: ["Full Stack", "Web Development"],
      },
      {
        title: "Job Offer Website",
        description: "Complete platform for managing job listings and applications.",
        tech: ["Laravel", "PHP"],
      },
    ],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    color: "text-secondary",
    projects: [
      {
        title: "NSFW Detection System",
        description: "Created a deep learning model to classify adult content, converted to TFLite, and deployed on Android.",
        tech: ["TensorFlow", "Deep Learning", "Android"],
      },
      {
        title: "3D Printer Maintenance Prediction",
        description: "Built an ML model to predict maintenance needs based on operational data for Samgen (Germany).",
        tech: ["Machine Learning", "Predictive Analytics"],
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Freelance Projects",
    color: "text-accent",
    projects: [
      {
        title: "Password Manager",
        description: "Secure password management web app with encryption.",
        tech: ["Node.js", "Angular", "Security"],
      },
      {
        title: "Email & Post Box",
        description: "Built a personalized communication system for clients.",
        tech: ["Laravel", "PHP"],
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="space-y-16">
          {projectCategories.map((category, catIndex) => (
            <div key={category.title} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 150}ms` }}>
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projIndex) => (
                  <Card
                    key={project.title}
                    className="card-gradient border-border/50 p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                    style={{ animationDelay: `${(catIndex * 150) + (projIndex * 100)}ms` }}
                  >
                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
