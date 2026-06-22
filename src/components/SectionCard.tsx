import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  link: string;
  gradient: string;
  isNew?: boolean;
  comingSoon?: boolean;
  buttonLabel?: string;
}

export default function SectionCard({
  title,
  description,
  features,
  icon,
  link,
  gradient,
  isNew = false,
  comingSoon = false,
  buttonLabel,
}: SectionCardProps) {
  const cardContent = (
    <Card
      className={cn(
        "group relative h-full overflow-hidden transition-all duration-300",
        !comingSoon && "hover:shadow-2xl hover:-translate-y-2 cursor-pointer",
        comingSoon && "opacity-60 cursor-not-allowed"
      )}
    >
        <div className={cn("absolute inset-0 opacity-10", gradient)} />
        
        {isNew && !comingSoon && (
          <Badge className="absolute top-4 right-4 bg-gradient-orange text-white border-0 z-10 flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            NEW
          </Badge>
        )}

        {comingSoon && (
          <Badge className="absolute top-4 right-4 bg-muted text-muted-foreground border-0 z-10">
            Coming Soon
          </Badge>
        )}

        <CardHeader className="relative z-10">
          <div className="mb-3 text-4xl">{icon}</div>
          <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10">
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {!comingSoon && (
            <Button
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              variant="secondary"
            >
              Explore {title}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </CardContent>
      </Card>
  );

  if (comingSoon) {
    return cardContent;
  }

  return <Link to={link}>{cardContent}</Link>;
}
