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
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm">
            Featured Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Inspiring Journeys
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from fellow OFWs who are making their mark around the world. 
            Each story is a testament to Filipino resilience and determination.
          </p>
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