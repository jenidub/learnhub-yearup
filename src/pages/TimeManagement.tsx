import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Video, FileText, Download, ExternalLink, ArrowUp } from "lucide-react";

const videos = [
  {
    title: "How to Stop Wasting Time",
    duration: "13:45",
    description: "It's time to improve your time management skills. In today's video, the speaker covers 5 tactics you can use to stop wasting time",
    link: "https://www.youtube.com/watch?v=xwsLuxlbY2w",
  },
  {
    title: "10 Tips to Boost Productivity",
    duration: "3:47",
    description: "This video explores 10 easy-to-follow time management tips that will help you focus, create a plan, and stick to it.",
    link: "https://www.youtube.com/watch?v=xgp6eELYY1M",
  },
  {
    title: "Plan Your Day | Week | Month",
    duration: "4:32",
    description: "Learn a system to effectively plan your day, week, and month. It lays out a three-step process, connecting daily tasks to long-term goals using a calendar.",
    link: "https://www.youtube.com/watch?v=gZNstNuwEXQ",
  },
];

const articles = [
  {
    title: "Time Management Mastery",
    type: "Course",
    duration: "2 hours",
    source: "LinkedIn Learning",
  },
  {
    title: "Priority Matrix Framework",
    type: "Article",
    duration: "10 min read",
    source: "Harvard Business Review",
  },
  {
    title: "Building Productive Habits",
    type: "Guide",
    duration: "12 min read",
    source: "Productivity Center",
  },
  {
    title: "Focus Apps and Tools Guide",
    type: "Article",
    duration: "8 min read",
    source: "TechCrunch",
  },
  {
    title: "Eliminating Time Wasters",
    type: "Course",
    duration: "1.5 hours",
    source: "Coursera",
  },
  {
    title: "Weekly Planning Strategies",
    type: "Guide",
    duration: "15 min read",
    source: "Academic Success Center",
  },
];

const downloads = [
  { name: "Daily Time Blocking Template", format: "PDF" },
  { name: "Weekly Schedule Planner", format: "Excel" },
  { name: "Goal Setting Worksheet", format: "PDF" },
  { name: "Productivity Tracker", format: "Excel" },
];

export default function TimeManagement() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-orange text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 text-6xl">
              <Clock className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Time Management</h1>
            <p className="text-xl text-white/90 mb-8">
              Optimize your schedule and boost productivity with proven time management strategies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#quick-tips">
                <Button className="bg-gradient-blue text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
                  Quick Tips
                </Button>
              </a>
              <a href="#downloads">
                <Button className="bg-gradient-pink text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
                  Downloads
                </Button>
              </a>
              <a href="#courses">
                <Button className="bg-gradient-green text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
                  Other Resources
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section id="quick-tips" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Video className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Quick Tips</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {videos.map((video) => (
              <Card key={video.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2 shrink-0 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </Badge>
                  </div>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.link.split('v=')[1]}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <a href="#top">
              <Button variant="outline" className="gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to Top
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-16 bg-secondary/30 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Download className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Downloads</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((download) => (
              <Card key={download.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3">
                    <div className="h-16 w-16 bg-gradient-orange rounded-lg flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-base">{download.name}</CardTitle>
                  <CardDescription>Format: {download.format}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <a href="#top">
              <Button variant="outline" className="gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to Top
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Other Resources */}
      <section id="courses" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Other Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{article.type}</Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                  <CardDescription className="text-sm">Source: {article.source}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <a href="#top">
              <Button variant="outline" className="gap-2">
                <ArrowUp className="h-4 w-4" />
                Back to Top
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
