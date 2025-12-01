import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, ChevronDown, FileText, MessageSquare, Lightbulb, Clock, Brain, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const topicItems = [
  { name: "Study Skills", path: "/study-skills", icon: BookOpen, gradient: "bg-gradient-purple" },
  { name: "Writing", path: "/writing", icon: MessageSquare, gradient: "bg-gradient-blue" },
  { name: "Critical Thinking", path: "/critical-thinking", icon: Lightbulb, gradient: "bg-gradient-green" },
  { name: "Time Management", path: "/time-management", icon: Clock, gradient: "bg-gradient-orange" },
  { name: "Learning Styles", path: "/learning-styles", icon: Brain, gradient: "bg-gradient-teal" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Get Help", path: "/get-help" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition-colors">
            <BookOpen className="h-6 w-6" />
            <span className="hidden sm:inline">Learner Resources Hub</span>
            <span className="sm:hidden">LRH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === "/"
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-secondary hover:text-primary"
            )}
          >
            Home
          </Link>

          {/* Topics Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "px-3 py-2 h-auto text-sm font-medium gap-1 transition-all duration-200",
                    topicItems.some(item => location.pathname === item.path)
                      ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                      : "text-foreground hover:bg-secondary hover:text-primary"
                  )}
                >
                  Topics
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-card border-border shadow-lg p-2 animate-fade-in">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Learning Topics
                </div>
                <DropdownMenuSeparator className="mb-2" />
                {topicItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <DropdownMenuItem key={item.path} asChild className="p-0 mb-1">
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-all duration-200",
                          "hover:bg-secondary/80 hover:translate-x-1",
                          isActive && "bg-primary/10 text-primary font-medium"
                        )}
                      >
                        <div className={cn(
                          "h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200",
                          isActive ? item.gradient : "bg-secondary",
                          isActive && "shadow-sm"
                        )}>
                          <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-muted-foreground")} />
                        </div>
                        <span className="flex-1">{item.name}</span>
                        {isActive && (
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        )}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                location.pathname === "/"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary hover:text-primary"
              )}
            >
              Home
            </Link>

            {/* Topics Section */}
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Learning Topics
              </div>
              {topicItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 pl-6 rounded-md text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary hover:text-primary"
                    )}
                  >
                    <div className={cn(
                      "h-6 w-6 rounded-md flex items-center justify-center flex-shrink-0",
                      isActive ? item.gradient : "bg-secondary"
                    )}>
                      <Icon className={cn("h-3.5 w-3.5", isActive ? "text-white" : "text-muted-foreground")} />
                    </div>
                    <span>{item.name}</span>
                  </Link>
                );
              })}

            {/* Other Nav Items */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
