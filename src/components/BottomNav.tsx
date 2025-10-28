import { Home, Trophy, Gamepad2, ListChecks, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Дом", path: "/" },
  { icon: Trophy, label: "Фэнтези", path: "/fantasy" },
  { icon: Gamepad2, label: "Игры", path: "/games" },
  { icon: ListChecks, label: "Задания", path: "/tasks" },
  { icon: MessageCircle, label: "Чат", path: "/chat" },
];

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full transition-all duration-300",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon 
                className={cn(
                  "w-6 h-6 mb-1 transition-all duration-300",
                  isActive && "drop-shadow-[0_0_10px_hsl(169_100%_50%/0.5)]"
                )} 
              />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
