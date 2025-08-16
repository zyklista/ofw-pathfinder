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
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-soft">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Diary of an OFW
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Your Professional Partner</p>
            </div>
          </Link>

          {/* Tagline */}
          <div className="text-lg font-semibold text-primary">
            Ito ang Kwento Nyo
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;