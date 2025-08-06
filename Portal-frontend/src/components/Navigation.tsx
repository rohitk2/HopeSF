import React, { useState, useEffect } from 'react';
import { ChevronDown, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check login status
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    window.addEventListener('scroll', handleScroll);
    checkLoginStatus();
    
    // Listen for storage changes (login/logout from other tabs)
    window.addEventListener('storage', checkLoginStatus);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userPhone');
    setIsLoggedIn(false);
    navigate('/');
  };

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
                <DropdownMenuItem className="text-foreground hover:text-primary cursor-pointer">
                  <Link to="/food-bank-login" className="w-full">
                    Food Bank Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:text-primary cursor-pointer">
                  <Link to="/shelter-login" className="w-full">
                    Shelter Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:text-primary cursor-pointer">
                  <Link to="/register-food-bank" className="w-full">
                    Register Food Bank
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:text-primary cursor-pointer">
                  <Link to="/register-shelter" className="w-full">
                    Register Shelter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:text-primary cursor-pointer">
                  <Link to="/become-partner" className="w-full">
                    Become a Partner
                  </Link>
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

            <Link to="/map" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Map
            </Link>

            {/* Action Buttons */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  <User className="w-5 h-5" />
                  <span>User</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 bg-background border border-border shadow-lg z-[10000]">
                  <DropdownMenuItem onClick={handleLogout} className="text-foreground hover:text-primary cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground font-medium">
                  Login
                </Button>
              </Link>
            )}

            {/* Action Button */}
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