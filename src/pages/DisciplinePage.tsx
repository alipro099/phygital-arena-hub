import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Video, ShoppingBag, Play, Info, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DisciplineInfo } from "@/components/DisciplineInfo";

const disciplineData: Record<string, any> = {
  football: { 
    name: "Фиджитал футбол", 
    icon: "⚽",
    description: "Матч в FIFA, затем реальный мини-футбол. Победитель определяется по сумме забитых мячей в обоих форматах.",
    rules: [
      "Первый этап: матч в FIFA (10 минут игрового времени)",
      "Второй этап: мини-футбол (2 тайма по 10 минут)",
      "Победа по сумме голов в обоих этапах",
      "При равенстве - серия пенальти"
    ]
  },
  basketball: { 
    name: "Фиджитал баскетбол", 
    icon: "🏀",
    description: "Состязание в виртуальном баскетболе NBA 2K и на реальной площадке. Сумма очков определяет победителя.",
    rules: [
      "Первый этап: матч в NBA 2K (4 четверти по 5 минут)",
      "Второй этап: игра 3x3 на площадке (15 минут)",
      "Победа по общей сумме очков",
      "Специальные бонусы за эффектные броски"
    ]
  },
  hockey: { 
    name: "Фиджитал хоккей", 
    icon: "🏒",
    description: "Матч в NHL 2K, затем игра в реальном хоккее на льду. Счет суммируется для определения победителя.",
    rules: [
      "Первый этап: матч в NHL 2K (3 периода по 5 минут)",
      "Второй этап: хоккей на льду (3 периода по 10 минут)",
      "Победа по сумме шайб в обоих форматах",
      "Овертайм при равенстве счета"
    ]
  },
  shooter: { 
    name: "Фиджитал шутер", 
    icon: "🔫",
    description: "Состязание в CS:GO, затем игра в лазертаг. Победа определяется по сумме очков в обоих режимах.",
    rules: [
      "Первый этап: матч в CS:GO (best of 3 rounds)",
      "Второй этап: лазертаг на арене (2 раунда по 10 минут)",
      "Победа по сумме фрагов/попаданий",
      "Бонусные очки за командную игру"
    ]
  },
  dance: { 
    name: "Фиджитал танцы", 
    icon: "💃",
    description: "Исполнение танца в игре Just Dance и повторение его вживую. Победа за точность движений и синхронность.",
    rules: [
      "Первый этап: игра Just Dance (3 композиции)",
      "Второй этап: живое исполнение тех же танцев",
      "Оценка точности, синхронности и энергии",
      "Бонусы за импровизацию и стиль"
    ]
  },
  racing: { 
    name: "Фиджитал гонки", 
    icon: "🏎",
    description: "Соревнования на гоночных симуляторах, затем заезды на реальных трассах. Сумма времени определяет победителя.",
    rules: [
      "Первый этап: гонка на симуляторе (3 круга)",
      "Второй этап: реальная трасса на картах (5 кругов)",
      "Победа по сумме времени прохождения",
      "Штрафы за нарушения правил"
    ]
  },
  fighting: { 
    name: "Фиджитал бои", 
    icon: "🥊",
    description: "Бой в Mortal Kombat, затем поединок по правилам ММА в октагоне. Победа определяется по итогам обоих раундов.",
    rules: [
      "Первый этап: бой в Mortal Kombat (best of 3)",
      "Второй этап: ММА в октагоне (3 раунда по 3 минуты)",
      "Победа по очкам в обоих форматах",
      "Возможна досрочная победа в ММА"
    ]
  },
  moba: { 
    name: "MOBA", 
    icon: "⚔",
    description: "Тактическая командная игра в формате MOBA с элементами стратегии и быстрой реакции.",
    rules: [
      "Командная игра 5 на 5",
      "Захват и удержание точек на карте",
      "Победа по количеству очков за 30 минут",
      "Бонусы за командные действия"
    ]
  },
  robots: { 
    name: "Battle of Robots", 
    icon: "🤖",
    description: "Битва роботов под управлением игроков. Сочетание программирования, стратегии и реального боя машин.",
    rules: [
      "Программирование поведения робота",
      "Реальный бой роботов на арене",
      "Победа за выведение из строя противника",
      "Бонусы за тактику и креативность"
    ]
  },
};

const DisciplinePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);
  const discipline = disciplineData[id || ""] || {};

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-card to-background border-b border-primary/20 sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
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
                <h1 className="text-2xl font-bold text-foreground font-display">
                  {discipline.name}
                </h1>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInfo(true)}
              className="border-primary text-primary hover:bg-primary hover:text-background font-display"
            >
              <Info className="w-4 h-4 mr-2" />
              О дисциплине
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <Tabs defaultValue="tournaments" className="w-full">
          <TabsList className="w-full grid grid-cols-5 bg-card border-primary/20">
            <TabsTrigger value="tournaments" className="font-display">Турниры</TabsTrigger>
            <TabsTrigger value="matches" className="font-display">Матчи</TabsTrigger>
            <TabsTrigger value="videos" className="font-display">Видео</TabsTrigger>
            <TabsTrigger value="stream" className="font-display">Эфир</TabsTrigger>
            <TabsTrigger value="shop" className="font-display">Магазин</TabsTrigger>
          </TabsList>

          <TabsContent value="tournaments" className="mt-6 space-y-4">
            <Card className="p-6 border-primary/30 bg-gradient-to-br from-card to-background">
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-secondary mt-1" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1 font-display">Всероссийский чемпионат</h3>
                      <p className="text-sm text-muted-foreground">Москва, Казань, Санкт-Петербург</p>
                    </div>
                    <span className="text-sm text-primary font-semibold font-display">15-20 Февраля</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Крупнейший турнир года с призовым фондом 5 000 000 рублей
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-primary to-secondary text-background font-display font-bold"
                    onClick={() => window.open('https://t.me/myfuturesport', '_blank')}
                  >
                    Подать заявку
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1 font-display">Региональный турнир</h3>
                      <p className="text-sm text-muted-foreground">Ваш город</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-display">Скоро</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Отборочные соревнования для участия в чемпионате
                  </p>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-background font-display"
                    onClick={() => window.open('https://t.me/myfuturesport', '_blank')}
                  >
                    Узнать подробности
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="matches" className="mt-6 space-y-4">
            <Card className="p-4 border-border bg-card hover:border-primary/50 transition-all">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground font-display">Финал Чемпионата</h3>
                    <span className="text-sm text-secondary font-semibold font-display">15:00</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">25 Января 2025</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground">Team Phoenix vs Team Dragon</span>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background font-display">
                      Детали
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="mt-6 space-y-4">
            <Card className="overflow-hidden border-border bg-card hover:border-primary/50 transition-all">
              <div className="aspect-video bg-gradient-to-br from-card to-background flex items-center justify-center">
                <Play className="w-16 h-16 text-primary animate-glow-pulse-blue" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 font-display">Лучшие моменты сезона</h3>
                <p className="text-sm text-muted-foreground">Хайлайты и обзоры главных матчей</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="stream" className="mt-6">
            <Card className="overflow-hidden border-primary/30 bg-card">
              <div className="aspect-video bg-gradient-to-br from-card via-background to-card flex flex-col items-center justify-center">
                <Video className="w-16 h-16 text-primary mb-4 animate-glow-pulse-blue" />
                <p className="text-foreground font-semibold mb-2 font-display">Трансляция начнётся скоро</p>
                <p className="text-sm text-muted-foreground">Следите за обновлениями</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="shop" className="mt-6 space-y-4">
            <Card className="p-4 border-border bg-card hover:border-primary/50 transition-all">
              <div className="flex items-start gap-3">
                <ShoppingBag className="w-5 h-5 text-secondary mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 font-display">Билеты на матч</h3>
                  <p className="text-sm text-muted-foreground mb-3">Финал Чемпионата • 25 Января</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-secondary font-display">5000 коинов</span>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-[0_0_20px_hsl(195_100%_50%/0.6)] font-display font-bold">
                      Купить
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <DisciplineInfo 
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        discipline={discipline}
      />

      <BottomNav />
    </div>
  );
};

export default DisciplinePage;
