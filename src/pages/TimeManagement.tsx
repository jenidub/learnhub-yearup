import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Video, Smartphone, Timer, Calendar, Download, ExternalLink, Sparkles } from "lucide-react";

const videos = [
  {
    title: "The Pomodoro Technique Explained",
    duration: "4 min",
    description: "Learn how to use 25-minute focus sessions to boost productivity.",
  },
  {
    title: "Time Blocking for Students",
    duration: "6 min",
    description: "Master the art of scheduling your day for maximum efficiency.",
  },
  {
    title: "Overcoming Procrastination",
    duration: "8 min",
    description: "Practical strategies to stop delaying and start doing.",
  },
];

const focusApps = [
  {
    name: "Forest",
    description: "Stay focused by growing virtual trees. Stop using your phone and watch your forest grow!",
    platforms: "iOS, Android, Chrome",
    icon: "🌳",
  },
  {
    name: "Freedom",
    description: "Block distracting websites and apps across all your devices.",
    platforms: "Windows, Mac, iOS, Android",
    icon: "🔒",
  },
  {
    name: "Brain Focus Productivity Timer",
    description: "Pomodoro timer with customizable work and break intervals.",
    platforms: "Android",
    icon: "🧠",
  },
];

const timeTrackingTools = [
  { name: "Toggl Track", description: "Simple time tracking for students", icon: "⏱️" },
  { name: "RescueTime", description: "Automatic time tracking and productivity insights", icon: "📊" },
  { name: "Clockify", description: "Free time tracker with detailed reports", icon: "⏰" },
];

const schedulingApps = [
  { name: "Google Calendar", description: "Sync your schedule across all devices", icon: "📅" },
  { name: "Notion", description: "All-in-one workspace for notes, tasks, and calendars", icon: "📝" },
  { name: "Todoist", description: "Powerful task manager with natural language input", icon: "✅" },
];

export default function TimeManagement() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-orange text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Clock className="h-16 w-16" />
              <Badge className="bg-white/20 text-white border-0 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                NEW
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Time Management</h1>
            <p className="text-xl text-white/90">
              Optimize your schedule and boost productivity with proven time management strategies
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips Videos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Video className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Quick Tips Videos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </Badge>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pomodoro Timers & Focus Apps */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Timer className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Pomodoro Timers & Focus Apps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusApps.map((app) => (
              <Card key={app.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="text-4xl mb-3">{app.icon}</div>
                  <CardTitle className="text-xl mb-2">{app.name}</CardTitle>
                  <CardDescription className="mb-2">{app.description}</CardDescription>
                  <Badge variant="outline" className="w-fit">
                    <Smartphone className="h-3 w-3 mr-1" />
                    {app.platforms}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Time Tracking Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Timer className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Time Tracking Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeTrackingTools.map((tool) => (
              <Card key={tool.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Explore
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling & Planning Apps */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Scheduling & Planning Apps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {schedulingApps.map((app) => (
              <Card key={app.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="text-3xl mb-2">{app.icon}</div>
                  <CardTitle className="text-lg">{app.name}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Get Started
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Download className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Downloadable Templates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Daily Time Blocking Template", "Weekly Schedule Planner", "Goal Setting Worksheet", "Productivity Tracker"].map((item) => (
              <Card key={item} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-16 w-16 bg-gradient-orange rounded-lg flex items-center justify-center mb-3">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-base">{item}</CardTitle>
                  <CardDescription>PDF Format</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
