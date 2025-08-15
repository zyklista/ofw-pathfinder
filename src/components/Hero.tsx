import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import heroImage from "@/assets/ofw-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-glow to-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary-foreground))_1px,_transparent_0)] bg-[size:40px_40px]" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Kwento ng mga Bayani
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                Diary of an
                <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  OFW
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                Share your journey, connect with fellow Filipinos abroad, and inspire others with your stories of courage, sacrifice, and triumph.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 rounded-full shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Watch Our Latest Episode
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Users className="mr-2 w-5 h-5" />
                Share Your Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">2,500+</div>
                <div className="text-primary-foreground/80 text-sm">Stories Shared</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                <div className="text-primary-foreground/80 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">10K+</div>
                <div className="text-primary-foreground/80 text-sm">Community</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-strong transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="OFW Community" 
                className="w-full max-w-md h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-2xl shadow-medium animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Live Stories</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;