import Navigation from "@/components/Navigation";
import ResourceCard from "@/components/ResourceCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Headphones, Briefcase, Sparkles, ArrowRight, Users, MessageSquare } from "lucide-react";

const helpSteps = [
  {
    step: 1,
    title: "Having Trouble?",
    description: "Identify what type of help you need - academic, technical, or professional development.",
    icon: "❓",
  },
  {
    step: 2,
    title: "Check Resources",
    description: "Browse the relevant section in the hub for quick answers and tutorials.",
    icon: "📚",
  },
  {
    step: 3,
    title: "Try Self-Help Tools",
    description: "Use our guides, videos, and downloadable resources to solve common issues.",
    icon: "🛠️",
  },
  {
    step: 4,
    title: "Reach Out for Support",
    description: "If you still need help, contact the appropriate team using the resources below.",
    icon: "🤝",
  },
];

export default function GetHelp() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-pink text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <HelpCircle className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Help</h1>
            <p className="text-xl text-white/90">
              Find the right support when you need it most with our comprehensive help resources
            </p>
          </div>
        </div>
      </section>

      {/* When to Reach Out Flowchart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            When Should You Reach Out for Help?
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <div className="text-3xl">{step.icon}</div>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                  {index < helpSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Link to Tutoring */}
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="bg-gradient-purple text-white border-0">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-white text-xl">Need Academic Help Right Now?</CardTitle>
                    <CardDescription className="text-white/80">
                      Visit the Academic Team Tutoring Center for immediate support
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="bg-white text-primary hover:bg-white/90">
                  Go to Tutoring Center
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Year Up Resources */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Other Year Up Resources
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Year Up offers comprehensive support services to help you succeed in all areas of your journey
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ResourceCard
              title="Student Technical Support"
              description="Get help with technology issues, account access, and technical troubleshooting."
              services={[
                "Password resets and account access",
                "Software installation and updates",
                "Hardware troubleshooting",
                "Learning platform support",
                "Device setup assistance",
              ]}
              contactInfo={{
                email: "techsupport@yearup.org",
                hours: "Mon-Fri, 8:00 AM - 6:00 PM EST",
              }}
              icon={<Headphones />}
              gradient="bg-gradient-blue"
            />

            <ResourceCard
              title="Professional Development"
              description="Build career-ready skills with resume writing, interview prep, and professional coaching."
              services={[
                "Resume and cover letter writing",
                "Interview preparation and practice",
                "Professional communication skills",
                "LinkedIn profile optimization",
                "Career exploration guidance",
              ]}
              contactInfo={{
                email: "pd@yearup.org",
                phone: "(555) 123-4567",
                hours: "Mon-Fri, 9:00 AM - 5:00 PM",
              }}
              icon={<Briefcase />}
              gradient="bg-gradient-green"
            />

            <ResourceCard
              title="Enrichment Programs"
              description="Explore workshops, events, and activities that support your personal and professional growth."
              services={[
                "Leadership development workshops",
                "Cultural and social events",
                "Wellness and mindfulness programs",
                "Networking opportunities",
                "Community service projects",
              ]}
              contactInfo={{
                email: "enrichment@yearup.org",
                hours: "Events scheduled weekly",
              }}
              icon={<Sparkles />}
              gradient="bg-gradient-teal"
            />
          </div>
        </div>
      </section>

      {/* Student Services Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Student Services Contacts
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📧 General Inquiries
                </CardTitle>
                <CardDescription>
                  For general questions about the program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span> info@yearup.org
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏥 Wellness Support
                </CardTitle>
                <CardDescription>
                  Mental health and wellness resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span> wellness@yearup.org
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💰 Financial Services
                </CardTitle>
                <CardDescription>
                  Questions about stipends and financial aid
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span> finance@yearup.org
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  👥 Advising Team
                </CardTitle>
                <CardDescription>
                  Academic and personal advising
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span> advising@yearup.org
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <MessageSquare className="h-12 w-12 text-primary mx-auto" />
                </div>
                <CardTitle className="text-2xl">We Value Your Feedback</CardTitle>
                <CardDescription className="text-base">
                  Help us improve the Learner Resources Hub by sharing your suggestions and experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="mx-auto">
                  Submit Feedback
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
