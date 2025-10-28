import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";

const disciplines = [
  { id: "football", name: "Фиджитал футбол", icon: "⚽", color: "from-green-500/20 to-green-600/10" },
  { id: "basketball", name: "Фиджитал баскетбол", icon: "🏀", color: "from-orange-500/20 to-orange-600/10" },
  { id: "hockey", name: "Фиджитал хоккей", icon: "🏒", color: "from-blue-500/20 to-blue-600/10" },
  { id: "shooter", name: "Фиджитал шутер", icon: "🔫", color: "from-red-500/20 to-red-600/10" },
  { id: "dance", name: "Фиджитал танцы", icon: "💃", color: "from-pink-500/20 to-pink-600/10" },
  { id: "racing", name: "Фиджитал гонки", icon: "🏎", color: "from-yellow-500/20 to-yellow-600/10" },
  { id: "fighting", name: "Фиджитал бои", icon: "🥊", color: "from-purple-500/20 to-purple-600/10" },
  { id: "moba", name: "MOBA", icon: "⚔", color: "from-indigo-500/20 to-indigo-600/10" },
  { id: "robots", name: "Battle of Robots", icon: "🤖", color: "from-cyan-500/20 to-cyan-600/10" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-graphite to-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Games of the Future
          </h1>
          <p className="text-muted-foreground">Выберите дисциплину</p>
        </div>
      </div>

      {/* Disciplines Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {disciplines.map((discipline) => (
            <Card
              key={discipline.id}
              onClick={() => navigate(`/discipline/${discipline.id}`)}
              className="relative group cursor-pointer overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(169_100%_50%/0.3)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${discipline.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative p-6 flex flex-col items-center justify-center min-h-[140px]">
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {discipline.icon}
                </span>
                <h3 className="text-sm font-semibold text-center text-foreground">
                  {discipline.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
