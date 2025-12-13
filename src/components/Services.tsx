import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Shield,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Vue, and Angular. Scalable, secure, and blazing fast.",
    features: ["React/Next.js", "Progressive Web Apps", "E-commerce Solutions", "API Development"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    features: ["React Native", "Flutter", "iOS Native", "Android Native"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design that creates intuitive, beautiful interfaces your users will love.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Harness the power of artificial intelligence with custom ML models, chatbots, and intelligent automation.",
    features: ["Machine Learning", "NLP & Chatbots", "Computer Vision", "Predictive Analytics"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Enterprise-grade cloud infrastructure and DevOps solutions that scale with your business.",
    features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipelines", "Microservices"],
    gradient: "from-sky-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with comprehensive security audits, penetration testing, and compliance solutions.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "SOC 2 / ISO 27001"],
    gradient: "from-rose-500 to-orange-500",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions That <span className="gradient-text">Transform</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            From concept to deployment, we deliver end-to-end software solutions
            tailored to your unique business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full glass-card p-6 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="relative space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="relative flex items-center gap-2 text-primary text-sm font-medium group/link cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
