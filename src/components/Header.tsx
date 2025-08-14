import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Menu, 
  Search, 
  User,
  Globe,
  PenTool
} from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-soft">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                OFW Hub
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Diary ng mga Bayani</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Stories
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Community
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="w-4 h-4" />
            </Button>

            {/* Write Story */}
            <Button variant="outline" size="sm" className="hidden md:flex rounded-full">
              <PenTool className="w-4 h-4 mr-2" />
              Write Story
            </Button>

            {/* Language Toggle */}
            <Button variant="ghost" size="sm">
              <Globe className="w-4 h-4" />
            </Button>

            {/* Profile */}
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;