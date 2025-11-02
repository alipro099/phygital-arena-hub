import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { SocialLinks } from "@/components/SocialLinks";
import { PhygitalCenters } from "@/components/PhygitalCenters";
import phygitalGamesLogo from "@/assets/phygital-games-logo.png";
import gamesFuture1 from "@/assets/games-future-1.png";
import gamesFuture2 from "@/assets/games-future-2.png";
import gamesFuture3 from "@/assets/games-future-3.png";

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
      <div className="bg-gradient-to-b from-card via-background to-background border-b border-primary/20">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <img 
              src={phygitalGamesLogo} 
              alt="Phygital Games" 
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <p className="text-foreground leading-relaxed text-base sm:text-lg mb-6">
            Игры будущего — это международный мультиспортивный турнир, основанный на концепции фиджитал (от англ. physical — физический и digital — цифровой), которая объединяет классический спорт и киберспорт. Участники соревнуются в дисциплинах, сочетающих реальные спортивные игры с их цифровыми аналогами, проверяя свои навыки как в физической, так и в виртуальной среде. Итоговый результат определяется суммированием очков из обоих этапов.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img 
              src={gamesFuture1} 
              alt="Киберспортивные соревнования" 
              className="w-full h-auto rounded-lg object-cover"
            />
            <img 
              src={gamesFuture2} 
              alt="Фиджитал баскетбол" 
              className="w-full h-auto rounded-lg object-cover"
            />
            <img 
              src={gamesFuture3} 
              alt="Участники Игр будущего" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Disciplines Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
          Дисциплины
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {disciplines.map((discipline) => (
            <Card
              key={discipline.id}
              onClick={() => navigate(`/discipline/${discipline.id}`)}
              className="relative group cursor-pointer overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(195_100%_50%/0.4)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${discipline.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative p-6 flex flex-col items-center justify-center min-h-[140px]">
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {discipline.icon}
                </span>
                <h3 className="text-sm font-semibold text-center text-foreground font-display">
                  {discipline.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Social Links & Centers */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-4">
        <SocialLinks />
        <PhygitalCenters />
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
