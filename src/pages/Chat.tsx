import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const channels = [
  { id: 1, name: "⚽ Футбол", members: 1234, unread: 5, active: true },
  { id: 2, name: "🏀 Баскетбол", members: 987, unread: 2, active: false },
  { id: 3, name: "🏒 Хоккей", members: 756, unread: 0, active: false },
  { id: 4, name: "🔫 Шутер", members: 2341, unread: 12, active: false },
  { id: 5, name: "💃 Танцы", members: 543, unread: 0, active: false },
  { id: 6, name: "🏎 Гонки", members: 1876, unread: 3, active: false },
  { id: 7, name: "🥊 Бои", members: 1092, unread: 0, active: false },
  { id: 8, name: "⚔ MOBA", members: 3421, unread: 8, active: false },
  { id: 9, name: "🤖 Роботы", members: 891, unread: 1, active: false },
];

const Chat = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-graphite to-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Арена
          </h1>
          <p className="text-muted-foreground">Общайся с фанатами</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-3">
        {channels.map((channel) => (
          <Card
            key={channel.id}
            className={`p-4 border-border bg-card cursor-pointer transition-all duration-300 ${
              channel.active
                ? "border-primary/50 shadow-[0_0_15px_hsl(169_100%_50%/0.2)]"
                : "hover:border-primary/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 rounded-full bg-graphite flex items-center justify-center text-2xl">
                  {channel.name.split(" ")[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{channel.name}</h3>
                    {channel.unread > 0 && (
                      <Badge className="bg-primary text-primary-foreground px-2 py-0 text-xs">
                        {channel.unread}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="w-3.5 h-3.5" />
                    <span>{channel.members.toLocaleString()} участников</span>
                  </div>
                </div>
              </div>
              {channel.active && (
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}
            </div>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Chat;
