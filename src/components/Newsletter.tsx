import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, Globe } from "lucide-react";

const Newsletter = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary via-primary-glow to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_white_2px,_transparent_0)] bg-[size:60px_60px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-strong bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="px-6 py-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Stay Connected
                  </Badge>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Get In Touch
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Ready to start your project? Contact us today for a free consultation 
                    and let's discuss how we can help bring your ideas to life.
                  </p>
                </div>

                {/* Newsletter Form */}
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                        <Input 
                          type="email" 
                          placeholder="Enter your email for project quotes"
                          className="w-full px-6 py-4 text-lg border-2 border-border/50 focus:border-primary rounded-full bg-background"
                        />
                    </div>
                    <Button 
                      size="lg"
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent text-white font-semibold shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Contact Us
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-3">
                    Free consultation • Quick response • Professional service
                  </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/20">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Global Community</h3>
                    <p className="text-sm text-muted-foreground">Connect with OFWs from 50+ countries</p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold">Weekly Digest</h3>
                    <p className="text-sm text-muted-foreground">Curated stories every Tuesday</p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                      <Send className="w-6 h-6 text-success" />
                    </div>
                    <h3 className="font-semibold">Exclusive Content</h3>
                    <p className="text-sm text-muted-foreground">Subscriber-only interviews & guides</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;