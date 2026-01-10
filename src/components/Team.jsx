import { useRef } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const team = [
  {
    name: "Alexander Chen",
    role: "CEO & Founder",
    bio: "15+ years in tech leadership. Former CTO at Fortune 500.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Sarah Mitchell",
    role: "CTO",
    bio: "Cloud architecture expert. AWS Hero. Open source contributor.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "David Park",
    role: "Head of Engineering",
    bio: "Full-stack wizard. Scaled systems to 100M+ users.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Design",
    bio: "Award-winning UX designer. Design systems advocate.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Michael Thompson",
    role: "AI/ML Lead",
    bio: "PhD in Machine Learning. Published researcher in NLP.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Lisa Wang",
    role: "Project Director",
    bio: "PMP certified. Delivered 200+ successful projects.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

const Team = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-opacity duration-600 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A diverse team of passionate innovators dedicated to turning your
            vision into reality.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group transition-opacity duration-600 ${isInView ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative glass-card overflow-hidden hover:bg-card/80 transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Social Links - Appear on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

