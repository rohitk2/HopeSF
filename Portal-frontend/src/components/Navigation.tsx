import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] bg-white transition-all duration-300 ${
      isScrolled ? 'shadow-md border-b border-border' : 'border-b border-border/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              🏠 <span>HopeSF</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            <Link to="/help" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Find Help
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors duration-200 font-medium">
                For Organizations
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border border-border shadow-lg z-[10000]">
                <DropdownMenuItem className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                  Food Bank Login
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                  Shelter Login
                </DropdownMenuItem>
                <DropdownMenuItem className="text-muted-foreground cursor-default opacity-50">
                  Register Food Bank
                </DropdownMenuItem>
                <DropdownMenuItem className="text-muted-foreground cursor-default opacity-50">
                  Register Shelter
                </DropdownMenuItem>
                <DropdownMenuItem className="text-muted-foreground cursor-default opacity-50">
                  Become a Partner
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              About
            </Link>
            
            <Link to="/resources" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Resources
            </Link>

            <Link to="/emergency" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Emergency
            </Link>

            {/* Action Buttons */}
            <Link to="/login">
              <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground font-medium">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Get Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;