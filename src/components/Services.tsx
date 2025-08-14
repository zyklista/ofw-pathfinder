import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Megaphone, 
  Globe, 
  Smartphone,
  ClipboardList,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Interviews",
      description: "Professional interview preparation and conduct for various positions",
      icon: MessageSquare,
      features: ["HR Interviews", "Technical Interviews", "Video Calls", "Assessment"],
      color: "bg-primary",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Advertise",
      description: "Digital marketing and advertising solutions for your business",
      icon: Megaphone,
      features: ["Social Media Ads", "Google Ads", "Content Marketing", "Brand Strategy"],
      color: "bg-accent",
      gradient: "from-accent to-accent-light"
    },
    {
      title: "Web Development",
      description: "Custom websites and web applications tailored to your needs",
      icon: Globe,
      features: ["Responsive Design", "E-commerce", "CMS", "SEO Optimization"],
      color: "bg-success",
      gradient: "from-success to-success-light"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: Smartphone,
      features: ["iOS Apps", "Android Apps", "React Native", "App Store Deploy"],
      color: "bg-secondary",
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Admin Tasks",
      description: "Virtual assistance and administrative support services",
      icon: ClipboardList,
      features: ["Data Entry", "Email Management", "Scheduling", "Document Processing"],
      color: "bg-primary",
      gradient: "from-primary to-accent"
    }
  ];

  const handleGetQuote = (serviceName: string) => {
    // Scroll to contact section or open contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-sm border-primary/20">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional 
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From interviews to app development, we provide comprehensive professional services 
            to help you and your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Header with icon and gradient */}
                  <div className={`p-6 bg-gradient-to-br ${service.gradient} text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-between">
                      <IconComponent className="w-8 h-8" />
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        Pro
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <Button 
                      onClick={() => handleGetQuote(service.title)}
                      className="w-full group-hover:scale-105 transition-transform duration-200"
                      variant="outline"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  {/* Bottom hover indicator */}
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg rounded-full shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
            onClick={() => handleGetQuote('Custom Project')}
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;