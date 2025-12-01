import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Video, FileText, Download, Clock, ExternalLink, ArrowUp } from "lucide-react";

const videos = [
  {
    title: "What Is Critical Thinking?",
    duration: "2:34",
    description: "Overview of what critical thinking is and why it's important",
    link: "https://www.youtube.com/watch?v=-eEBuqwY-nE",
  },
  {
    title: "5 Tips to Improve Your Critical Thinking",
    duration: "4:29",
    description: "Samantha Agoos describes a 5-step process that may help you with any number of problems.",
    link: "https://www.youtube.com/watch?v=dItUGF8GdTw",
  },
  {
    title: "The 7-Step McKinsey Framework",
    duration: "4:31",
    description: "Learn about the 7-Step McKinsey problem solving framework that provides strategies to help everyone level up in critical thinking.",
    link: "https://www.youtube.com/watch?v=mzDModXLH90",
  },
];

const articles = [
  {
    title: "Critical Thinking in Practice",
    type: "Course",
    duration: "2 hours",
    source: "Coursera",
  },
  {
    title: "Decision-Making Strategies",
    type: "Article",
    duration: "12 min read",
    source: "Harvard Business Review",
  },
  {
    title: "Analytical Reasoning Guide",
    type: "Guide",
    duration: "15 min read",
    source: "MIT OpenCourseWare",
  },
  {
    title: "Creative Problem Solving",
    type: "Article",
    duration: "10 min read",
    source: "Psychology Today",
  },
  {
    title: "Logic and Reasoning Course",
    type: "Course",
    duration: "3 hours",
    source: "Khan Academy",
  },
  {
    title: "Systems Thinking Approach",
    type: "Guide",
    duration: "18 min read",
    source: "Learning Center",
  },
];

const downloads = [
  { name: "Decision-Making Matrix", format: "PDF", source: "UConnect Labs", link: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/244/2025/02/Life-Design-Decision-Matrix-Worksheet-.pdf" },
  { name: "McKinsey 7S Problem-Solving Framework", format: "Image", source: "Slideworks", link: "https://slideworks-website.s3.eu-west-1.amazonaws.com/7_step_problem_solving_process_a97066dafb.png" },
  { name: "5 Whys Root Cause Analysis Template", format: "PDF", source: "State of Michigan", link: "https://www.michigan.gov/-/media/Project/Websites/mde/2020/04/02/5_Whys_Worksheet.pdf?rev=1a4a151a2fbf4e56a0f88dd1ad43452f" },
  { name: "Ultimate Cheatsheet for Critical Thinking", format: "PDF", source: "Association of American Law Schools", link: "https://am.aals.org/wp-content/uploads/sites/4/2020/01/AM20LawMedicineHealthPovertyPierson-BrownGraphics.pdf" },
];

export default function CriticalThinking() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 text-6xl">
              <Lightbulb className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Critical Thinking</h1>
            <p className="text-xl text-white/90 mb-8">
              Build analytical and problem-solving skills essential for academic and career success
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#quick-tips">
                <Button className="bg-gradient-blue text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
                  Quick Tips
                </Button>
              </a>
              <a href="#downloads">
                <Button className="bg-gradient-purple text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
                  Downloads
                </Button>
              </a>
              <a href="#courses">
                <Button className="bg-gradient-orange text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
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
              <Card key={video.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-start justify-between mb-2 min-h-[3.5rem]">
                    <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2 shrink-0 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </Badge>
                  </div>
                  <CardDescription className="min-h-[3rem]">{video.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.link.split('v=')[1]}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <Button asChild className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                    <a href={video.link} target="_blank" rel="noopener noreferrer">
                      Watch on YouTube
                    </a>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {downloads.map((download) => (
              <Card key={download.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3">
                    <div className="h-16 w-16 bg-gradient-green rounded-lg flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-base">{download.name}</CardTitle>
                  <CardDescription>
                    <div>Format: {download.format}</div>
                    <div className="mt-1">
                      Source: <a href={download.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{download.source}</a>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <a href={download.link} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
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
