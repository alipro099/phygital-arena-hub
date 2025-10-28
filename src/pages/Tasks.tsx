import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Coins, Youtube, Instagram } from "lucide-react";

const tasks = [
  { id: 1, title: "Подписаться на Telegram", platform: "Telegram", coins: 100, completed: false, icon: "💬" },
  { id: 2, title: "Подписаться на VK", platform: "VK", coins: 100, completed: false, icon: "🔵" },
  { id: 3, title: "Подписаться на YouTube", platform: "YouTube", coins: 150, completed: true, icon: "▶️" },
  { id: 4, title: "Подписаться на Instagram", platform: "Instagram", coins: 100, completed: false, icon: "📷" },
  { id: 5, title: "Посмотреть трансляцию", platform: "Stream", coins: 200, completed: false, icon: "📺" },
  { id: 6, title: "Зарегистрироваться на событие", platform: "Event", coins: 300, completed: false, icon: "🎟️" },
];

const Tasks = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-graphite to-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Задания
          </h1>
          <p className="text-muted-foreground">Выполняй задания и получай награды</p>
        </div>
      </div>

      {/* Balance */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <Card className="p-6 border-border bg-gradient-to-br from-card to-graphite mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ваш баланс</p>
              <div className="flex items-center gap-2">
                <Coins className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-foreground">1,450</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Выполнено</p>
              <span className="text-3xl font-bold text-primary">1/6</span>
            </div>
          </div>
        </Card>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className={`p-4 border-border bg-card transition-all duration-300 ${
                task.completed ? "opacity-60" : "hover:border-primary/50 hover:shadow-[0_0_15px_hsl(169_100%_50%/0.2)]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{task.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{task.title}</h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Coins className="w-4 h-4" />
                    <span className="text-sm font-semibold">+{task.coins} коинов</span>
                  </div>
                </div>
                {task.completed ? (
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                ) : (
                  <Button 
                    size="sm" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Выполнить
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Tasks;
