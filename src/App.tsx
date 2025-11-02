import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DisciplinePage from "./pages/DisciplinePage";
import Fantasy from "./pages/Fantasy";
import Games from "./pages/Games";
import Tasks from "./pages/Tasks";
import Achievements from "./pages/Achievements";
import NotFound from "./pages/NotFound";
import Clicker from "./pages/games/Clicker";
import Penalty from "./pages/games/Penalty";
import Basketball from "./pages/games/Basketball";
import TimingBattle from "./pages/games/TimingBattle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discipline/:id" element={<DisciplinePage />} />
          <Route path="/fantasy" element={<Fantasy />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/clicker" element={<Clicker />} />
          <Route path="/games/penalty" element={<Penalty />} />
          <Route path="/games/basketball" element={<Basketball />} />
          <Route path="/games/timing-battle" element={<TimingBattle />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/achievements" element={<Achievements />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
