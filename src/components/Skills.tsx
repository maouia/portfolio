import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Server, 
  Database, 
  Brain, 
  GitBranch, 
  Package, 
  Terminal,
  Zap,
  BarChart3,
  FileJson,
  Triangle,
  type LucideIcon
} from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "PHP", icon: Code2 },
      { name: "C", icon: Code2 },
      { name: "Go", icon: Code2 },
      { name: "JavaScript", icon: FileJson },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: Triangle },
      { name: "Django", icon: Server },
      { name: "Angular", icon: Triangle },
      { name: "Laravel", icon: Server },
      { name: "Quarkus", icon: Server },
      { name: "Express.js", icon: Server },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "TensorFlow", icon: Brain },
      { name: "PyTorch", icon: Brain },
      { name: "Scikit-learn", icon: Brain },
      { name: "pandas", icon: Database },
      { name: "matplotlib", icon: BarChart3 },
      { name: "seaborn", icon: BarChart3 },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Spark", icon: Zap },
      { name: "Hadoop", icon: Database },
      { name: "Docker", icon: Package },
      { name: "Git", icon: GitBranch },
      { name: "Linux", icon: Terminal },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={category.category}
              className="card-gradient border-border/50 p-6 animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
