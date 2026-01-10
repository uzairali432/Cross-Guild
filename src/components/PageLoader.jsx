import { Zap } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="text-center animate-scale-in">
        {/* Animated Logo */}
        <div className="relative mb-6 animate-pulse">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto">
            <Zap className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent blur-xl -z-10 opacity-50 animate-ping" />
        </div>

        {/* Loading Text */}
        <div className="font-display text-xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Cross<span className="text-primary">Guild</span>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="w-1/2 h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

