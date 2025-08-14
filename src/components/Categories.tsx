import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  GraduationCap, 
  Heart, 
  TrendingUp, 
  Users, 
  MapPin,
  Briefcase,
  Home
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      title: "OFW Journey",
      description: "First steps abroad, visa stories, and migration experiences",
      icon: Plane,
      count: 450,
      color: "bg-primary",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Career Growth",
      description: "Professional development and workplace experiences",
      icon: TrendingUp,
      count: 320,
      color: "bg-accent",
      gradient: "from-accent to-accent-light"
    },
    {
      title: "Family & Love",
      description: "Maintaining relationships across distances",
      icon: Heart,
      count: 680,
      color: "bg-success",
      gradient: "from-success to-success-light"
    },
    {
      title: "Education",
      description: "Study abroad experiences and skill development",
      icon: GraduationCap,
      count: 240,
      color: "bg-secondary",
      gradient: "from-secondary to-secondary-light"
    },
    {
      title: "Community",
      description: "Filipino communities and cultural connections",
      icon: Users,
      count: 380,
      color: "bg-primary",
      gradient: "from-primary to-accent"
    },
    {
      title: "Destinations",
      description: "Country guides and location-specific experiences",
      icon: MapPin,
      count: 520,
      color: "bg-accent",
      gradient: "from-accent to-secondary"
    },
    {
      title: "Business & Finance",
      description: "Entrepreneurship and financial management abroad",
      icon: Briefcase,
      count: 180,
      color: "bg-success",
      gradient: "from-success to-accent"
    },
    {
      title: "Coming Home",
      description: "Balikbayan stories and reintegration experiences",
      icon: Home,
      count: 290,
      color: "bg-secondary",
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-sm border-primary/20">
            Explore Topics
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stories by 
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find stories that resonate with your experience. From career milestones to family moments, 
            every category tells a part of the OFW story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Header with icon and gradient */}
                  <div className={`p-6 bg-gradient-to-br ${category.gradient} text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-between">
                      <IconComponent className="w-8 h-8" />
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {category.count}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Bottom hover indicator */}
                  <div className={`h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;