import { Button } from "@/components/ui/button";
import { 
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Heart
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-glow to-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">OFW Hub</h3>
                <p className="text-sm text-white/80">Diary ng mga Bayani</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">
              Empowering Filipino overseas workers through shared stories, 
              community support, and meaningful connections across the globe.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Stories */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stories</h4>
            <ul className="space-y-3 text-white/90">
              <li><a href="#" className="hover:text-secondary transition-colors">Featured Stories</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Recent Posts</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Family Stories</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Career Journey</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Community</h4>
            <ul className="space-y-3 text-white/90">
              <li><a href="#" className="hover:text-secondary transition-colors">Join the Hub</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Write Your Story</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Support Groups</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-3 text-white/90">
              <li><a href="#" className="hover:text-secondary transition-colors">OFW Resources</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Country Guides</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Financial Tips</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Legal Help</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Mental Health</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>© 2024 OFW Hub. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-secondary" />
                <span>for OFWs worldwide</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-white/10 text-sm text-white/60">
            <MapPin className="w-4 h-4" />
            <span>Connecting Filipino hearts worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;