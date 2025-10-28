import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Gamepad2, Coins } from "lucide-react";

const games = [
  { id: 1, name: "Пенальти", discipline: "⚽ Футбол", coins: "50-200" },
  { id: 2, name: "Бросок в кольцо", discipline: "🏀 Баскетбол", coins: "50-200" },
  { id: 3, name: "Буллит", discipline: "🏒 Хоккей", coins: "50-200" },
  { id: 4, name: "Мини-шутер", discipline: "🔫 Шутер", coins: "50-200" },
  { id: 5, name: "Ритм-игра", discipline: "💃 Танцы", coins: "50-200" },
  { id: 6, name: "Уклонение", discipline: "🏎 Гонки", coins: "50-200" },
  { id: 7, name: "Тайминг-баттл", discipline: "🥊 Бои", coins: "50-200" },
  { id: 8, name: "Захват точки", discipline: "⚔ MOBA", coins: "50-200" },
  { id: 9, name: "Стратегия роботов", discipline: "🤖 Роботы", coins: "50-200" },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-graphite to-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Игры
          </h1>
          <p className="text-muted-foreground">Играй и зарабатывай коины</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {games.map((game) => (
            <Card
              key={game.id}
              className="p-6 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(169_100%_50%/0.3)] cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{game.discipline}</p>
                </div>
                <Gamepad2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Coins className="w-4 h-4" />
                <span className="text-sm font-semibold">{game.coins} коинов</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Games;
