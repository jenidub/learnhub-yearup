import Navigation from "@/components/Navigation";
import SectionCard from "@/components/SectionCard";
import { BookOpen, FileText, MessageSquare, Lightbulb, Clock, Brain, Users, Rocket, Wrench, HelpCircle, GraduationCap } from "lucide-react";

const sections = [
  {
    title: "Quick Start Guide",
    description: "Get started with your Year Up journey with essential onboarding resources.",
    features: [
      "Welcome and orientation materials",
      "Essential tools setup",
      "First week checklist",
      "Program overview",
    ],
    icon: <Rocket />,
    link: "/quick-start",
    gradient: "bg-gradient-blue",
    isNew: false,
    comingSoon: true,
  },
  {
    title: "Learning Styles",
    description: "Discover your unique learning style and access tailored strategies for success.",
    features: [
      "Learning style assessments",
      "ADHD and neurodivergent strategies",
      "Visual, auditory, and kinesthetic resources",
      "Accommodation tools and guides",
    ],
    icon: <Brain />,
    link: "/learning-styles",
    gradient: "bg-gradient-teal",
    isNew: true,
  },
  {
    title: "Study Skills",
    description: "Master effective study techniques and learning strategies to excel in your coursework.",
    features: [
      "Quick tips video tutorials",
      "Recommended courses and articles",
      "Downloadable study planners and trackers",
      "Learning style assessments",
    ],
    icon: <BookOpen />,
    link: "/study-skills",
    gradient: "bg-gradient-purple",
    isNew: false,
  },
  {
    title: "Writing & Communication",
    description: "Enhance your writing skills and professional communication abilities.",
    features: [
      "Writing tutorial videos",
      "Essay and email templates",
      "Revision checklists",
      "Peer review guides",
    ],
    icon: <MessageSquare />,
    link: "/writing",
    gradient: "bg-gradient-blue",
    isNew: false,
  },
  {
    title: "Critical Thinking",
    description: "Build analytical and problem-solving skills essential for academic and career success.",
    features: [
      "Problem-solving frameworks",
      "Decision matrix templates",
      "Root cause analysis tools",
      "Video tutorials on logical reasoning",
    ],
    icon: <Lightbulb />,
    link: "/critical-thinking",
    gradient: "bg-gradient-green",
    isNew: false,
  },
  {
    title: "Time Management",
    description: "Optimize your schedule and boost productivity with proven time management strategies.",
    features: [
      "Pomodoro timers and focus apps",
      "Time tracking tools",
      "Scheduling and planning apps",
      "Downloadable time management worksheets",
    ],
    icon: <Clock />,
    link: "/time-management",
    gradient: "bg-gradient-orange",
    isNew: true,
  },
  {
    title: "Test Preparation",
    description: "Develop proven exam strategies and reduce test anxiety with our comprehensive resources.",
    features: [
      "Test-taking technique videos",
      "Exam preparation guides",
      "Time management templates",
      "Pre-exam checklists",
    ],
    icon: <FileText />,
    link: "/test-prep",
    gradient: "bg-gradient-pink",
    isNew: false,
    comingSoon: true,
  },
  {
    title: "Phase-Specific Resources",
    description: "Tailored resources for each phase of your Year Up journey.",
    features: [
      "L&D Part 1 resources",
      "Academy materials",
      "L&D Part 2 guides",
      "Phase transition support",
    ],
    icon: <GraduationCap />,
    link: "/phase-resources",
    gradient: "bg-gradient-orange",
    isNew: false,
    comingSoon: true,
  },
  {
    title: "Get Help",
    description: "Connect with support services and resources when you need assistance.",
    features: [
      "Ask a question or report an issue",
      "Request academic support",
      "Technical support contact",
      "Emergency resources and hotlines",
    ],
    icon: <HelpCircle />,
    link: "/get-help",
    gradient: "bg-gradient-pink",
    isNew: false,
    comingSoon: true,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to the<br />Learner Resources Hub
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your comprehensive academic support platform for success in Year Up's flipped classroom environment
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need to study smarter, not harder. Access curated resources, expert tutoring, and proven strategies designed specifically for Year Up learners.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Study Smarter, Not Harder</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Learner Resources Hub brings together the best tools, strategies, and support services to help you thrive in your academic journey. Whether you need help with time management, test preparation, or understanding your learning style, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Explore Our Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {sections.map((section) => (
              <SectionCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2025 Year Up Learner Resources Hub</p>
            <p className="text-sm">Empowering learners to achieve their full potential</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
