import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Coins, Youtube, Send, Heart, Video, UserPlus } from "lucide-react";

const tasks = [
  { 
    id: 1, 
    title: "Подписаться на Telegram", 
    platform: "Telegram", 
    coins: 100, 
    completed: false, 
    icon: Send,
    url: "https://t.me/myfuturesport"
  },
  { 
    id: 2, 
    title: "Подписаться на VK", 
    platform: "VK", 
    coins: 100, 
    completed: false, 
    icon: "🔵",
    url: "https://vk.com/phygitalru"
  },
  { 
    id: 3, 
    title: "Подписаться на YouTube", 
    platform: "YouTube", 
    coins: 150, 
    completed: true, 
    icon: Youtube,
    url: "https://youtube.com/@gofuturegames?si=Sw3_KQacN0kBXgSw"
  },
  { 
    id: 4, 
    title: "Сторис VK с отметкой #фиджитал", 
    platform: "VK", 
    coins: 200, 
    completed: false, 
    icon: Video,
    url: "https://vk.com/phygitalru"
  },
  { 
    id: 5, 
    title: "Отправить пожертвование в фонд", 
    platform: "Donation", 
    coins: 500, 
    completed: false, 
    icon: Heart,
    url: "https://phygital.com.ru"
  },
  { 
    id: 6, 
    title: "Снять VK клип про фиджитал в своем городе", 
    platform: "VK", 
    coins: 1000, 
    completed: false, 
    icon: Video,
    url: "https://vk.com/phygitalru"
  },
  { 
    id: 7, 
    title: "Пригласить друга", 
    platform: "Invite", 
    coins: 300, 
    completed: false, 
    icon: UserPlus,
    url: "https://t.me/myfuturesport"
  },
];

const Tasks = () => {
  const handleTaskClick = (task: typeof tasks[0]) => {
    if (!task.completed && task.url) {
      window.open(task.url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-2 font-display">
            Задания
          </h1>
          <p className="text-muted-foreground">Выполняй задания и получай награды</p>
        </div>
      </div>

      {/* Balance */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <Card className="p-6 border-primary/30 bg-gradient-to-br from-card to-background mb-6 shadow-[0_0_20px_hsl(195_100%_50%/0.2)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ваш баланс</p>
              <div className="flex items-center gap-2">
                <Coins className="w-6 h-6 text-secondary" />
                <span className="text-3xl font-bold text-foreground font-display">1,450</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Выполнено</p>
              <span className="text-3xl font-bold text-primary font-display">1/7</span>
            </div>
          </div>
        </Card>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className={`p-4 border-border bg-card transition-all duration-300 ${
                task.completed ? "opacity-60" : "hover:border-primary/50 hover:shadow-[0_0_15px_hsl(195_100%_50%/0.3)]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  {typeof task.icon === 'string' ? (
                    <span className="text-3xl">{task.icon}</span>
                  ) : (
                    <task.icon className="w-8 h-8 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 font-display">{task.title}</h3>
                  <div className="flex items-center gap-2 text-secondary">
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
                    className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-[0_0_20px_hsl(195_100%_50%/0.6)] font-display font-bold"
                    onClick={() => handleTaskClick(task)}
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
