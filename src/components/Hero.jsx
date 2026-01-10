import { ArrowRight, Sparkles, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-32 left-20 hidden lg:block animate-bounce">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-primary/20 flex items-center justify-center">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="absolute top-48 right-32 hidden lg:block animate-bounce" style={{ animationDelay: "1s" }}>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-xl border border-secondary/20 flex items-center justify-center">
            <Cpu className="w-7 h-7 text-secondary" />
          </div>
        </div>

        <div className="absolute bottom-40 left-32 hidden lg:block animate-bounce" style={{ animationDelay: "2s" }}>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-xl border border-accent/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-scale-in">
            <Sparkles className="w-4 h-4" />
            <span>Transforming Ideas into Digital Reality</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Build the </span>
            <span className="gradient-text">Future</span>
            <br />
            <span className="text-foreground">of Software</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We craft exceptional digital experiences through cutting-edge web applications,
            mobile solutions, AI integration, and cloud infrastructure that scale with your vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#projects")}
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Projects Delivered" },
              { value: "150+", label: "Happy Clients" },
              { value: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 bg-primary rounded-full h-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

