import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  MessageCircle, 
  Search, 
  Filter,
  Clock,
  User,
  Plane,
  GraduationCap,
  TrendingUp,
  Users,
  MapPin,
  Briefcase,
  Home
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", icon: null, count: 2450 },
    { name: "OFW Journey", icon: Plane, count: 450 },
    { name: "Career Growth", icon: TrendingUp, count: 320 },
    { name: "Family & Love", icon: Heart, count: 680 },
    { name: "Education", icon: GraduationCap, count: 240 },
    { name: "Community", icon: Users, count: 380 },
    { name: "Destinations", icon: MapPin, count: 520 },
    { name: "Business & Finance", icon: Briefcase, count: 180 },
    { name: "Coming Home", icon: Home, count: 290 }
  ];

  const stories = [
    {
      id: 1,
      title: "From Nurse to Entrepreneur: My Dubai Success Story",
      excerpt: "How I built a thriving healthcare consultancy while working as a nurse in the UAE. The journey wasn't easy, but passion and perseverance paid off.",
      author: "Maria Santos",
      date: "2 days ago",
      category: "Career Growth",
      image: "/src/assets/success-story.jpg",
      likes: 145,
      comments: 23,
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Keeping Filipino Traditions Alive in Canada",
      excerpt: "How our Filipino community center became the heart of cultural preservation in Toronto. Building bridges across generations and continents.",
      author: "Jose Rodriguez",
      date: "5 days ago",
      category: "Community",
      image: "/src/assets/family-connection.jpg",
      likes: 89,
      comments: 34,
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Teaching My Kids Tagalog from 8,000 Miles Away",
      excerpt: "The challenges and joys of raising bilingual children while working abroad. Language as a bridge to our homeland and heritage.",
      author: "Anna Dela Cruz",
      date: "1 week ago",
      category: "Family & Love",
      image: "/src/assets/ofw-hero.jpg",
      likes: 203,
      comments: 56,
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "From Domestic Helper to Business Owner in Hong Kong",
      excerpt: "My transformation from domestic helper to successful small business owner. Proof that dreams have no expiration date.",
      author: "Grace Mendoza",
      date: "1 week ago",
      category: "Business & Finance",
      image: "/src/assets/success-story.jpg",
      likes: 178,
      comments: 41,
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Studying Medicine While Working Full-Time in Germany",
      excerpt: "Balancing medical school and work as an OFW. The sacrifices, the victories, and everything in between.",
      author: "Dr. Carlos Reyes",
      date: "2 weeks ago",
      category: "Education",
      image: "/src/assets/family-connection.jpg",
      likes: 267,
      comments: 72,
      readTime: "15 min read"
    },
    {
      id: 6,
      title: "Coming Home After 15 Years: My Reintegration Journey",
      excerpt: "The emotional and practical challenges of returning to the Philippines after a decade and a half abroad.",
      author: "Roberto Cruz",
      date: "3 weeks ago",
      category: "Coming Home",
      image: "/src/assets/ofw-hero.jpg",
      likes: 156,
      comments: 89,
      readTime: "9 min read"
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === "All" || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-6 py-2 text-sm border-primary/20">
                OFW Stories
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Stories of 
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Courage & Dreams
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Real experiences from Filipino overseas workers. Every story is a testament to resilience, 
                hope, and the Filipino spirit that conquers any distance.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="whitespace-nowrap">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto pb-4">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={index}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.name)}
                    className="whitespace-nowrap flex items-center gap-2"
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredStories.map((story) => (
                <Card key={story.id} className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 left-4 bg-white/90 text-primary"
                      >
                        {story.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {story.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {story.date}
                        </div>
                        <span>{story.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {story.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {story.excerpt}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 hover:text-destructive transition-colors cursor-pointer">
                            <Heart className="w-4 h-4" />
                            {story.likes}
                          </div>
                          <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                            <MessageCircle className="w-4 h-4" />
                            {story.comments}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" className="px-8">
                Load More Stories
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;