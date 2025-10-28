import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Video, ShoppingBag, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const disciplineData: Record<string, any> = {
  football: { name: "Фиджитал футбол", icon: "⚽" },
  basketball: { name: "Фиджитал баскетбол", icon: "🏀" },
  hockey: { name: "Фиджитал хоккей", icon: "🏒" },
  shooter: { name: "Фиджитал шутер", icon: "🔫" },
  dance: { name: "Фиджитал танцы", icon: "💃" },
  racing: { name: "Фиджитал гонки", icon: "🏎" },
  fighting: { name: "Фиджитал бои", icon: "🥊" },
  moba: { name: "MOBA", icon: "⚔" },
  robots: { name: "Battle of Robots", icon: "🤖" },
};

const DisciplinePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const discipline = disciplineData[id || ""] || {};

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-graphite to-background border-b border-border sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="text-foreground hover:text-primary"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{discipline.icon}</span>
              <h1 className="text-2xl font-bold text-foreground">
                {discipline.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <Tabs defaultValue="matches" className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-card">
            <TabsTrigger value="matches">Матчи</TabsTrigger>
            <TabsTrigger value="videos">Видео</TabsTrigger>
            <TabsTrigger value="stream">Эфир</TabsTrigger>
            <TabsTrigger value="shop">Магазин</TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="mt-6 space-y-4">
            <Card className="p-4 border-border bg-card">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Финал Чемпионата</h3>
                    <span className="text-sm text-muted-foreground">15:00</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">25 Января 2025</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground">Team Phoenix vs Team Dragon</span>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Детали
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="mt-6 space-y-4">
            <Card className="overflow-hidden border-border bg-card">
              <div className="aspect-video bg-graphite flex items-center justify-center">
                <Play className="w-16 h-16 text-primary" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Лучшие моменты сезона</h3>
                <p className="text-sm text-muted-foreground">Хайлайты и обзоры главных матчей</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="stream" className="mt-6">
            <Card className="overflow-hidden border-border bg-card">
              <div className="aspect-video bg-gradient-to-br from-graphite to-background flex flex-col items-center justify-center">
                <Video className="w-16 h-16 text-primary mb-4" />
                <p className="text-foreground font-semibold mb-2">Трансляция начнётся скоро</p>
                <p className="text-sm text-muted-foreground">Следите за обновлениями</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="shop" className="mt-6 space-y-4">
            <Card className="p-4 border-border bg-card">
              <div className="flex items-start gap-3">
                <ShoppingBag className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Билеты на матч</h3>
                  <p className="text-sm text-muted-foreground mb-3">Финал Чемпионата • 25 Января</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">5000 коинов</span>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Купить
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

export default DisciplinePage;
