import { useRef, useEffect, useState } from "react";
import { Target, Eye, Rocket, Award } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Global Clients" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses worldwide with innovative software solutions that drive growth, efficiency, and digital transformation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the global leader in creating transformative digital experiences that shape the future of technology.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We constantly push boundaries, embracing emerging technologies to deliver solutions that set new industry standards.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Quality is at the core of everything we do. We deliver nothing less than exceptional results for our partners.",
  },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-opacity duration-600 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pioneering Digital <span className="gradient-text">Excellence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Since 2014, we've been at the forefront of digital innovation, helping businesses
            transform their ideas into powerful software solutions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((item, index) => (
            <div
              key={item.title}
              className={`group transition-opacity duration-600 ${isInView ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-full glass-card p-6 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`glass-card p-8 md:p-12 transition-opacity duration-600 ${isInView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.4s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-opacity duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-opacity duration-600 ${isInView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Building Tomorrow's Technology <span className="gradient-text">Today</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Cross Guild was founded with a singular vision: to bridge the gap between
                innovative ideas and cutting-edge technology. What started as a small team of
                passionate developers has grown into a global force of 50+ specialists.
              </p>
              <p>
                We specialize in creating custom software solutions that not only meet but exceed
                our clients' expectations. From startups to Fortune 500 companies, we've helped
                businesses across every industry achieve their digital transformation goals.
              </p>
              <p>
                Our commitment to excellence, combined with our agile methodology, ensures that
                every project is delivered on time, within budget, and to the highest standards
                of quality.
              </p>
            </div>
          </div>

          <div className={`relative transition-opacity duration-600 ${isInView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.5s" }}>
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-1">
              <div className="w-full h-full rounded-[20px] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <Rocket className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-2">
                    Ready to Launch?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Let's build something amazing together
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

