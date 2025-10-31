import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Coins } from "lucide-react";

const games = [
  { 
    id: 1, 
    name: "Пенальти", 
    description: "Забей гол в ворота! Выбери направление удара и попробуй обыграть вратаря.", 
    icon: "⚽",
    color: "from-green-500/20 to-green-600/10",
    coins: "50-300",
    path: "/games/penalty"
  },
  { 
    id: 2, 
    name: "Тапалка", 
    description: "Нажимай на логотип как можно быстрее и зарабатывай очки!", 
    icon: "🎮",
    color: "from-primary/20 to-primary/10",
    coins: "10-200",
    path: "/games/clicker"
  },
  { 
    id: 3, 
    name: "Бросок в кольцо", 
    description: "Попади мячом в баскетбольное кольцо! Время решает всё.", 
    icon: "🏀",
    color: "from-orange-500/20 to-orange-600/10",
    coins: "50-250",
    path: "/games/basketball"
  },
  { 
    id: 4, 
    name: "Тайминг-баттл", 
    description: "Соревнуйся с ботом! Нажимай быстрее, чтобы победить в поединке.", 
    icon: "🥊",
    color: "from-secondary/20 to-secondary/10",
    coins: "100-500",
    path: "/games/timing-battle"
  },
];

const Games = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-card via-background to-card border-b border-primary/20">
        <div className="max-w-screen-xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3 font-display animate-glow-pulse-blue">
            ВЫИГРАЙ МИЛЛИОН РУБЛЕЙ
          </h1>
          <p className="text-muted-foreground text-lg">Играй, зарабатывай коины и участвуй в розыгрыше призов</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {games.map((game) => (
            <Card
              key={game.id}
              onClick={() => navigate(game.path)}
              className="relative p-6 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(195_100%_50%/0.4)] cursor-pointer group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display">
                      {game.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{game.description}</p>
                  </div>
                  <span className="text-5xl group-hover:scale-110 transition-transform ml-3">
                    {game.icon}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-secondary">
                    <Coins className="w-5 h-5" />
                    <span className="text-sm font-semibold font-display">{game.coins} коинов</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-primary to-secondary text-background font-display font-bold"
                  >
                    Играть
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Prize Info */}
        <Card className="mt-6 p-6 border-primary/30 bg-gradient-to-br from-card to-background shadow-[0_0_30px_hsl(84_100%_50%/0.2)]">
          <div className="flex items-center gap-4">
            <Trophy className="w-12 h-12 text-secondary animate-glow-pulse-green" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1 font-display">Главный приз</h3>
              <p className="text-muted-foreground">Набирай коины и участвуй в ежемесячном розыгрыше миллиона рублей!</p>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Games;
