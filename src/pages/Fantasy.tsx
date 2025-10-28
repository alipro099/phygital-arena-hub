import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, TrendingUp } from "lucide-react";

const Fantasy = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-graphite to-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Фэнтези
          </h1>
          <p className="text-muted-foreground">Собери команду мечты</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 border-border bg-card text-center">
            <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">156</p>
            <p className="text-xs text-muted-foreground">Очки</p>
          </Card>
          <Card className="p-4 border-border bg-card text-center">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">5/5</p>
            <p className="text-xs text-muted-foreground">Игроки</p>
          </Card>
          <Card className="p-4 border-border bg-card text-center">
            <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">#24</p>
            <p className="text-xs text-muted-foreground">Рейтинг</p>
          </Card>
        </div>

        {/* Team Selection */}
        <Card className="p-6 border-border bg-card">
          <h2 className="text-xl font-bold text-foreground mb-4">Моя команда</h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-3 bg-graphite rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Добавить игрока</p>
                  <p className="text-xs text-muted-foreground">Позиция: Нападающий</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Выбрать
              </Button>
            </div>
          </div>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Подтвердить состав
          </Button>
        </Card>

        {/* Leaderboard Preview */}
        <Card className="p-6 border-border bg-card">
          <h2 className="text-xl font-bold text-foreground mb-4">Топ-3 лиги</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((rank) => (
              <div key={rank} className="flex items-center justify-between p-3 bg-graphite rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-primary">#{rank}</span>
                  <span className="text-foreground">Игрок {rank}</span>
                </div>
                <span className="text-primary font-semibold">{500 - rank * 50} очков</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Fantasy;
