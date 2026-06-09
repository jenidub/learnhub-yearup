import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Video, FileText, Download, Clock, ExternalLink, ArrowUp, Star } from "lucide-react";

const RATING_FORM_URL = "https://forms.office.com/r/YkHnhbTY0B";

const videos = [
  {
    title: "How to Proofread Your Own Writing Like a Pro",
    duration: "11:50",
    description: "Tips for proofreading your own writing both on paper and online (Key Tips: 7:58 - 11:50)",
    link: "https://www.youtube.com/watch?v=QUvXFEV17sk"
  },
  {
    title: "3 Tips for Clear & Concise Writing",
    duration: "6:55",
    description: "Tips to achieve clear and concise writing to share your points faster and have more impact",
    link: "https://www.youtube.com/watch?v=H3tw-qqnwj4"
  },
  {
    title: "Writing Coherent Paragraphs",
    duration: "12:19",
    description: "How to use topic sentences and transitional markers to achieve a well-developed, coherent paragraph",
    link: "https://www.youtube.com/watch?v=mzN1JmG6qoM"
  },
];

const articles = [
  {
    title: "Grammarly Grammar Guide",
    type: "Guide",
    source: "Grammarly",
    link: "https://www.grammarly.com/grammar"
  },
  {
    title: "Effective Communication in the Workplace",
    type: "Course (Free)",
    source: "Open University",
    link: "https://www.open.edu/openlearn/money-business/effective-communication-the-workplace?active-tab=content-tab"
  },
  {
    title: "Business Writing",
    type: "Course",
    source: "Coursera - University of Colorado Boulder",
    link: "https://www.coursera.org/learn/writing-for-business"
  },
];

const downloads = [
  { 
    name: "Academic Essay Outline Worksheet", 
    format: "PDF",
    source: "Southern University of New Orleans",
    link: "https://www.suno.edu/assets/suno/PDFs/WritingCenter/Academic-Essay-Outline-Practice-Worksheet.pdf"
  },
  { 
    name: "25 Email Communication Examples", 
    format: "Online",
    source: "Superhuman",
    link: "https://blog.superhuman.com/email-communication-examples/",
    buttonText: "View Resource"
  },
  { 
    name: "Guide to Writing Self-Editing", 
    format: "PDF",
    source: "University of New Hampshire",
    link: "https://www.unh.edu/student-success/sites/default/files/media/2022-07/resource-self-editing-checklist-writing.pdf"
  },
  { 
    name: "Transition Words Cheat Sheet", 
    format: "PDF",
    source: "Jimmie's Collage",
    link: "https://jimmiescollage.com/downloads/writing/transitions.pdf"
  },
  { 
    name: "Grammar Quick Reference Guide", 
    format: "PDF",
    source: "Pasco-Hernando State College",
    link: "https://academic-success.phsc.edu/sites/default/files/documents/grammar-cheat-sheet-042413.pdf"
  },
  { 
    name: "Do's and Don'ts of the Workplace", 
    format: "PDF",
    source: "Chamber of Commerce Hawaii",
    link: "https://www.cochawaii.org/wp-content/uploads/2024/09/Do_s-and-Don_ts-of-the-Workplace-PDF.pdf"
  },
];

export default function Writing() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 text-6xl">
              <MessageSquare className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Writing & Communication</h1>
            <p className="text-xl text-white/90 mb-8">
              Communicate with Clarity and Confidence
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#quick-tips">
                <Button className="bg-gradient-purple text-white border-0 hover:opacity-90 transition-opacity px-6 py-3">
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
                  <div className="flex items-start justify-between mb-2 min-h-[3.5rem]">
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
                      src={video.link.replace("watch?v=", "embed/")}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((download) => (
              <Card key={download.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3">
                    <div className="h-16 w-16 bg-gradient-blue rounded-lg flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-base">{download.name}</CardTitle>
                  <CardDescription>
                    <div>Format: {download.format}</div>
                    <div>Source: {download.source}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={download.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      <Download className="mr-2 h-4 w-4" />
                      {download.buttonText || "Download"}
                    </Button>
                  </a>
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
                  </div>
                  <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                  <CardDescription className="text-sm">Source: {article.source}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      View Resource
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
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
