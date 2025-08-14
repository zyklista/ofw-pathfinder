import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Video, 
  Download, 
  ExternalLink,
  Search,
  BookOpen,
  Globe,
  Phone,
  Mail,
  MapPin,
  Calculator,
  Shield,
  Briefcase,
  GraduationCap,
  Heart
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const guides = [
    {
      title: "Complete OFW Pre-Departure Guide",
      description: "Everything you need to know before leaving for overseas work",
      type: "PDF Guide",
      icon: FileText,
      category: "Pre-Departure",
      downloads: 2450
    },
    {
      title: "Working Visa Requirements by Country",
      description: "Comprehensive visa requirements for popular OFW destinations",
      type: "Interactive Guide",
      icon: Globe,
      category: "Documentation",
      downloads: 1680
    },
    {
      title: "Money Management for OFWs",
      description: "Smart financial planning and remittance strategies",
      type: "Video Series",
      icon: Calculator,
      category: "Finance",
      downloads: 3200
    },
    {
      title: "Healthcare Abroad: What You Need to Know",
      description: "Health insurance, medical care, and emergency procedures",
      type: "PDF Guide",
      icon: Heart,
      category: "Healthcare",
      downloads: 980
    }
  ];

  const tools = [
    {
      title: "Salary Calculator by Country",
      description: "Compare salaries and cost of living across different countries",
      icon: Calculator,
      link: "#"
    },
    {
      title: "Document Checklist Generator",
      description: "Generate personalized document checklists for your destination",
      icon: FileText,
      link: "#"
    },
    {
      title: "Embassy Locator",
      description: "Find Philippine embassies and consulates worldwide",
      icon: MapPin,
      link: "#"
    },
    {
      title: "Currency Converter",
      description: "Real-time currency conversion for remittances",
      icon: Calculator,
      link: "#"
    }
  ];

  const contacts = [
    {
      title: "Department of Migrant Workers (DMW)",
      description: "Official government agency for overseas workers",
      phone: "+63 2 8722 1144",
      email: "info@dmw.gov.ph",
      website: "www.dmw.gov.ph",
      type: "Government"
    },
    {
      title: "Overseas Workers Welfare Administration (OWWA)",
      description: "Welfare programs and benefits for OFWs",
      phone: "+63 2 8551 1560",
      email: "feedback@owwa.gov.ph",
      website: "www.owwa.gov.ph",
      type: "Government"
    },
    {
      title: "Philippine Overseas Employment Administration (POEA)",
      description: "Employment and labor market information",
      phone: "+63 2 8722 1144",
      email: "info@poea.gov.ph",
      website: "www.poea.gov.ph",
      type: "Government"
    },
    {
      title: "OFW Helpline",
      description: "24/7 emergency assistance for OFWs",
      phone: "+63 2 8551 4242",
      email: "help@ofw-helpline.ph",
      website: "www.ofw-helpline.ph",
      type: "Support"
    }
  ];

  const videos = [
    {
      title: "First Week Abroad: What to Expect",
      duration: "15:30",
      views: "45K",
      thumbnail: "/src/assets/ofw-hero.jpg"
    },
    {
      title: "Managing Homesickness as an OFW",
      duration: "12:45",
      views: "32K",
      thumbnail: "/src/assets/family-connection.jpg"
    },
    {
      title: "Building Your Emergency Fund",
      duration: "18:20",
      views: "28K",
      thumbnail: "/src/assets/success-story.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-6 py-2 text-sm border-primary/20">
                OFW Resources
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Your
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Resource Hub
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive guides, tools, and contacts to support your OFW journey. 
                Everything you need in one place.
              </p>
            </div>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </section>

        {/* Resources Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
              </TabsList>

              {/* Guides Tab */}
              <TabsContent value="guides" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guides.map((guide, index) => {
                    const IconComponent = guide.icon;
                    return (
                      <Card key={index} className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <Badge variant="outline">{guide.category}</Badge>
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {guide.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">
                            {guide.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Download className="w-4 h-4" />
                              {guide.downloads.toLocaleString()} downloads
                            </div>
                            <Button size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Tools Tab */}
              <TabsContent value="tools" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tools.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                      <Card key={index} className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                {tool.title}
                              </h3>
                              <p className="text-muted-foreground text-sm mb-4">
                                {tool.description}
                              </p>
                              <Button variant="outline" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Open Tool
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Contacts Tab */}
              <TabsContent value="contacts" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {contacts.map((contact, index) => (
                    <Card key={index} className="border-0 shadow-soft">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{contact.title}</CardTitle>
                          <Badge variant={contact.type === "Government" ? "default" : "secondary"}>
                            {contact.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {contact.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{contact.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{contact.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{contact.website}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <Card key={index} className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Video className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <Badge className="absolute bottom-2 right-2 bg-black/50 text-white">
                            {video.duration}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {video.views} views
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;