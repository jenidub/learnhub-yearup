import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Download, Clock, ExternalLink, ArrowUp } from "lucide-react";

const videos = [
  {
    title: "Cornell Note-Taking Method",
    duration: "5 min",
    description: "Learn the proven Cornell method for organizing and reviewing your notes effectively.",
  },
  {
    title: "Active Reading Strategies",
    duration: "7 min",
    description: "Master techniques to improve comprehension and retention when reading course materials.",
  },
  {
    title: "Memory Palace Technique",
    duration: "6 min",
    description: "Discover how to use visualization to remember complex information.",
  },
];

const articles = [
  {
    title: "Study Skills Success Course",
    type: "Course",
    duration: "2 hours",
    source: "Coursera",
  },
  {
    title: "The Science of Effective Learning",
    type: "Article",
    duration: "10 min read",
    source: "Harvard Education",
  },
  {
    title: "How to Create a Study Schedule That Works",
    type: "Guide",
    duration: "15 min read",
    source: "Learning Center",
  },
  {
    title: "Active Learning Techniques",
    type: "Article",
    duration: "8 min read",
    source: "MIT OpenCourseWare",
  },
  {
    title: "Mastering Study Habits",
    type: "Course",
    duration: "1.5 hours",
    source: "edX",
  },
  {
    title: "Note-Taking Strategies for College",
    type: "Guide",
    duration: "12 min read",
    source: "Academic Success Center",
  },
];

const downloads = [
  { name: "Weekly Study Planner", format: "PDF" },
  { name: "Study Session Tracker", format: "Excel" },
  { name: "Learning Style Quiz", format: "PDF" },
  { name: "Focus & Distraction Log", format: "PDF" },
];

export default function StudySkills() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-purple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 text-6xl">
              <BookOpen className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Skills</h1>
            <p className="text-xl text-white/90 mb-8">
              Master effective study techniques and learning strategies to excel in your coursework
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#quick-tips">
                <Button className="bg-gradient-blue text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
                  Quick Tips Videos
                </Button>
              </a>
              <a href="#downloads">
                <Button className="bg-gradient-pink text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
                  Downloads
                </Button>
              </a>
              <a href="#courses">
                <Button className="bg-gradient-green text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
                  Courses & Articles
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Videos */}
      <section id="quick-tips" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Video className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Quick Tips Videos</h2>
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
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                    Watch Video
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
                    <div className="h-16 w-16 bg-gradient-purple rounded-lg flex items-center justify-center">
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

      {/* Courses & Articles */}
      <section id="courses" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Courses & Articles</h2>
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
