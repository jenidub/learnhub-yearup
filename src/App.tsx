import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import StudySkills from "./pages/StudySkills";
import TestPrep from "./pages/TestPrep";
import Writing from "./pages/Writing";
import CriticalThinking from "./pages/CriticalThinking";
import TimeManagement from "./pages/TimeManagement";
import LearningStyles from "./pages/LearningStyles";
import GetHelp from "./pages/GetHelp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study-skills" element={<StudySkills />} />
          <Route path="/test-prep" element={<TestPrep />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/critical-thinking" element={<CriticalThinking />} />
          <Route path="/time-management" element={<TimeManagement />} />
          <Route path="/learning-strategies" element={<LearningStyles />} />
          <Route path="/get-help" element={<GetHelp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
