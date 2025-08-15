import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, MessageCircle, User } from "lucide-react";
import familyImage from "@/assets/family-connection.jpg";
import successImage from "@/assets/success-story.jpg";

const FeaturedStories = () => {
  const stories = [
    {
      id: 1,
      title: "From Dubai with Love: A Father's Journey",
      excerpt: "How I maintained strong family bonds while building a career 8,000 miles away from home. The challenges, the victories, and the lessons learned...",
      author: "Miguel Santos",
      location: "Dubai, UAE",
      date: "2 days ago",
      category: "Family",
      image: familyImage,
      likes: 248,
      comments: 34,
      featured: true
    },
    {
      id: 2,
      title: "Breaking Barriers: My Journey to Nursing Excellence",
      excerpt: "Starting as a caregiver and climbing up to become a head nurse in Canada. A story of perseverance, continuous learning, and never giving up...",
      author: "Maria Rodriguez",
      location: "Toronto, Canada",
      date: "1 week ago",
      category: "Success",
      image: successImage,
      likes: 412,
      comments: 67,
      featured: true
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Art Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_hsl(var(--primary))_0%,_transparent_50%)] opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_hsl(var(--accent))_0%,_transparent_50%)] opacity-5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_30%,_hsl(var(--secondary))_50%,_transparent_70%)] opacity-3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Our Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Story
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Diary of an OFW is dedicated to capturing the raw, unfiltered journeys of Overseas Filipino Workers across the globe. We shine a light on the extraordinary achievements and untold stories of Filipinos who have carved out greatness far from home.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Through intimate conversations with notable individuals—especially those thriving in foreign lands—we uncover hidden truths, life-changing lessons, and meaningful insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Our mission is to inspire, uplift, and empower our audience to live with greater joy, purpose, and fulfillment by sharing the voices and victories of the global Filipino community.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {stories.map((story) => (
            <Card key={story.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50">
              <div className="relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    story.category === 'Family' 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-success text-success-foreground'
                  }`}
                >
                  {story.category}
                </Badge>
              </div>
              
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {story.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {story.date}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {story.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {story.comments}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="text-primary hover:text-primary-glow">
                      Read More →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-6 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;