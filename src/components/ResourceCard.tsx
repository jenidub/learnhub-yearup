import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  description: string;
  services: string[];
  contactInfo: {
    email?: string;
    phone?: string;
    hours?: string;
  };
  icon: React.ReactNode;
  gradient: string;
}

export default function ResourceCard({
  title,
  description,
  services,
  contactInfo,
  icon,
  gradient,
}: ResourceCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className={cn("absolute inset-0 opacity-10", gradient)} />
      
      <CardHeader className="relative z-10">
        <div className="mb-4 text-5xl">{icon}</div>
        <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Services Include:</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-border">
            <h4 className="font-semibold text-sm text-foreground mb-3">How to Reach Us:</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {contactInfo.email && (
                <p>
                  <span className="font-medium text-foreground">Email:</span> {contactInfo.email}
                </p>
              )}
              {contactInfo.phone && (
                <p>
                  <span className="font-medium text-foreground">Phone:</span> {contactInfo.phone}
                </p>
              )}
              {contactInfo.hours && (
                <p>
                  <span className="font-medium text-foreground">Hours:</span> {contactInfo.hours}
                </p>
              )}
            </div>
          </div>

          <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Contact {title}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
