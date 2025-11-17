import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Download, Clock, ExternalLink, ArrowUp } from "lucide-react";

const videos = [
  {
    title: "Create an Organized, Productive Study Space by Thomas Frank",
    duration: "12:07",
    description: "Check out this great video that shows you how to setup your study space to maximize focus and learning",
    link: "https://www.youtube.com/watch?v=kB6wJkWO2SY&t=637s",
  },
  {
    title: "12 ways to Active Recall in 12 minutes by Koi",
    duration: "12:17",
    description: "Check out the different techniques of active recall, a study method to retain new information",
    link: "https://www.youtube.com/watch?v=MSq-KGj_cnY",
  },
  {
    title: "The Secret to Note-taking for Busy People by Leila Gharani",
    duration: "7:04",
    description: "Check out the tips about notetaking that you can develop in Year Up and practice in WBE and in your career",
    link: "https://www.youtube.com/watch?v=yxHPScN_ct4",
  },
];

const articles = [
  {
    title: "Study Skills for University Success",
    type: "Course",
    duration: "7 hours",
    source: "Coursera",
    link: "https://www.coursera.org/learn/study-skills-for-university-success",
  },
  {
    title: "Make It Stick: The Science of Successful Learning",
    type: "eBook (PDF)",
    duration: "26 pages",
    source: "Harvard Press",
    link: "https://www.hup.harvard.edu/file/feeds/PDF/9780674729018_sample.pdf",
  },
  {
    title: "The Study Cycle",
    type: "Website",
    duration: "N/A",
    source: "UNC Learning Center",
    link: "https://learningcenter.unc.edu/tips-and-tools/the-study-cycle/",
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
  { name: "Weekly Study Planner", format: "PDF", source: "FSU Academic Center", link: "https://ace.fsu.edu/sites/g/files/imported/storage/original/application/cf3f5e0fb2be998e84df305135d83f41.pdf" },
  { name: "Spaced Repetition Study Planner", format: "PDF", source: "Genio.co", link: "https://genio.co/hubfs/Spaced%20repetition%20planner-1.pdf" },
  { name: "Focus & Distraction Log", format: "PDF", source: "UI Learning Center", link: "https://learning.uiowa.edu/sites/learning.uiowa.edu/files/2023-09/Monitoring%20and%20Minimizing%20Distractions%20%28web%29.pdf" },
  { name: "Cornell Notetaking Template", format: "PDF", source: "Honolulu Community College", link: "https://www.honolulu.hawaii.edu/downloads/web/student-services/care-resource-notes-template.pdf" },
  { name: "Mind Map Notetaking Template", format: "PDF", source: "Northwest Vermont Career Academy", link: "https://www.nwwvt.org/wp-content/uploads/2016/09/Mind-map-template.pdf" },
  { name: "Outline Notetaking Template", format: "PDF", source: "Austin Peay State University", link: "https://www.apsu.edu/writingcenter/writing-resources/Outline-Note-Taking-Method-Edit.pdf" },
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
              Study Smarter, Not Harder
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  {download.source && (
                    <CardDescription className="mt-1">
                      Source: {download.link ? (
                        <a href={download.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          {download.source}
                        </a>
                      ) : (
                        download.source
                      )}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  {download.link ? (
                    <a href={download.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </a>
                  ) : (
                    <Button variant="secondary" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  )}
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
                  {article.link ? (
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" disabled>
                      Read More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  )}
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
