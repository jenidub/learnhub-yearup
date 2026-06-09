import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Video, FileText, Download, Clock, ExternalLink, ArrowUp, Star } from "lucide-react";

const RATING_FORM_URL = "https://forms.office.com/r/YkHnhbTY0B";

const videos = [
  {
    title: "Discover Your Learning Style",
    duration: "3:31",
    description: "In this video, you'll learn more about the VARK theory of learning styles. They are described in detail and you can see which one works best for you!",
    link: "https://www.youtube.com/watch?v=_IopcOwfsoU&t=15s",
  },
  {
    title: "What Learning Style Are You?",
    duration: "6:49",
    description: "Find out what learning style you are and how to work to your potential. The video also shows tips for learning in each learning style.",
    link: "https://www.youtube.com/watch?v=eoIr59LNUyE",
  },
  {
    title: "Gardner's Multiple Intelligences",
    duration: "6:38",
    description: "This video explores Howard Gardner's multiple intelligences theory. It goes into detail to describe each learning style and what it means for learning.",
    link: "https://www.youtube.com/watch?v=FVg9n0l0Gf0",
  },
];

const articles = [
  {
    title: "A Complete Guide to VARK",
    type: "Website",
    source: "VARK Learn",
    link: "https://vark-learn.com/introduction-to-vark/",
  },
  {
    title: "Gardner's Theory of Multiple Intelligences",
    type: "Website",
    source: "Simply Psychology",
    link: "https://www.simplypsychology.org/multiple-intelligences.html",
  },
  {
    title: "The Science Of Learning",
    type: "Guide",
    source: "Washington Tech",
    link: "https://www.washingtontech.edu/the-science-of-learning-exploring-the-4-most-common-learning-styles/",
  },
  {
    title: "Guide to Understanding Visual Learners",
    type: "Guide",
    source: "SimpleK12",
    link: "https://www.simplek12.com/blog/visual-learning",
  },
  {
    title: "Guide to Understanding Auditory Learners",
    type: "Guide",
    source: "Simple K12",
    link: "https://www.simplek12.com/blog/auditory-learning-style",
  },
  {
    title: "Guide to Understanding Kinesthetic Learners",
    type: "Guide",
    source: "Simple K12",
    link: "https://www.simplek12.com/blog/kinesthetic-learning-style",
  },
];

const downloads = [
  { 
    name: "VARK Learning Questionnaire", 
    format: "PDF", 
    source: "VARK Learn Limited",
    link: "https://vark-learn.com/the-vark-questionnaire"
  },
  { 
    name: "Learning Styles Tips & Strategies", 
    format: "PDF", 
    source: "Florida State University",
    link: "https://ace.fsu.edu/sites/g/files/upcbnu296/files/Study_Strategies_by_Learning_Styles.pdf"
  },
  { 
    name: "Auditory Learners Study Guide", 
    format: "PDF", 
    source: "WVU Institute of Tech",
    link: "https://studentsuccesscenter.wvutech.edu/files/d/e857d4e9-7cf5-40a7-b91b-b5a59a468b74/auditory_learners-tips.pdf"
  },
  { 
    name: "Multiple Intelligences Survey", 
    format: "PDF", 
    source: "King Philip RSD",
    link: "https://www.kingphilip.org/wp-content/uploads/2021/05/Multiple-Intelligences-Survey.pdf"
  },
];

export default function LearningStyles() {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-teal text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 text-6xl">
              <Brain className="h-16 w-16 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Styles</h1>
            <p className="text-xl text-white/90 mb-8">
              Discover your unique learning style and access tailored strategies for success
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
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src={video.link.replace('watch?v=', 'embed/').split('&')[0]}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <a href={video.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Watch on YouTube
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
                    <div className="h-16 w-16 bg-gradient-teal rounded-lg flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-base">{download.name}</CardTitle>
                  <CardDescription>
                    <div>Format: {download.format}</div>
                    <div className="text-sm">
                      Source: <a href={download.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {download.source}
                      </a>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={download.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      <Download className="mr-2 h-4 w-4" />
                      Download
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
                  <CardDescription className="text-sm">
                    Source: <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {article.source}
                    </a>
                  </CardDescription>
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
