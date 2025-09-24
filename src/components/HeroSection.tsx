import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Eye, Wrench } from "lucide-react";
import railwayHeroBg from "@/assets/railway-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${railwayHeroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80 hero-gradient"></div>
      </div>
      
      {/* Animated Overlay Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-glow rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-secondary rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hero-text-glow">
            Indigenous Contactless
            <br />
            <span className="text-gradient">Track Monitoring</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Smart, Contactless, Real-Time Railway Track Monitoring System
            <br />
            <span className="text-secondary font-semibold">Built for Indian Railways</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button variant="hero" size="lg" className="group">
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Prototype
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Try Demo
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary group">
              <Wrench className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Features
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;