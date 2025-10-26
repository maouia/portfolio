import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "International Engineering Degree in Computer Science",
    institution: "Central University",
    period: "2021–2024",
  },
  {
    degree: "Information Systems Development Diploma",
    institution: "Institut Supérieur des Études Technologiques de Nabeul",
    period: "2018–2021",
  },
  {
    degree: "Computer Science Baccalaureate",
    institution: "High School 7 Avril 1943",
    period: "2014–2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="card-gradient border-border/50 p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-primary">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
