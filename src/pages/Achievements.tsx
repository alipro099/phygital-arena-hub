import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Star as StarIcon, Award, Heart, Zap } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Победа в конкурсе рисунков",
    author: "Маша, 7 лет",
    description: "Заняла первое место в городском конкурсе рисунков на тему 'Спорт будущего'",
    icon: StarIcon,
    color: "from-yellow-500/20 to-yellow-600/10"
  },
  {
    id: 2,
    title: "Первый марафон в 65 лет",
    author: "Валентина Ивановна",
    description: "Пробежала свой первый марафон после года тренировок",
    icon: Heart,
    color: "from-pink-500/20 to-pink-600/10"
  },
  {
    id: 3,
    title: "Чемпион регионального турнира",
    author: "Команда 'Феникс'",
    description: "Победа в областном чемпионате по фиджитал-футболу",
    icon: Trophy,
    color: "from-primary/20 to-primary/10"
  },
  {
    id: 4,
    title: "100 дней тренировок подряд",
    author: "Андрей, 32 года",
    description: "Не пропустил ни одной тренировки в течение 100 дней",
    icon: Zap,
    color: "from-secondary/20 to-secondary/10"
  },
  {
    id: 5,
    title: "Первая медаль в танцах",
    author: "Настя, 12 лет",
    description: "Бронзовая медаль на всероссийских соревнованиях по фиджитал-танцам",
    icon: Medal,
    color: "from-orange-500/20 to-orange-600/10"
  },
  {
    id: 6,
    title: "Наставник года",
    author: "Сергей Петрович, тренер",
    description: "Подготовил 15 чемпионов за последний год",
    icon: Award,
    color: "from-purple-500/20 to-purple-600/10"
  },
];

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-foreground font-display">
              ДОСТИЖЕНИЯ СТРАНЫ
            </h1>
            <span className="text-3xl">🇷🇺</span>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-secondary" />
            <p className="text-muted-foreground">Каждый маленький шаг приближает нас к цели!</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-4">
        {/* Submit Achievement Button */}
        <Button 
          className="w-full bg-gradient-to-r from-primary to-secondary text-background font-display font-bold text-lg py-6 hover:shadow-[0_0_30px_hsl(195_100%_50%/0.6)] transition-all duration-300"
          onClick={() => window.open('https://t.me/myfuturesport', '_blank')}
        >
          <Award className="w-5 h-5 mr-2" />
          Отправить свое достижение
        </Button>

        {/* Achievements List */}
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className="relative p-5 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(195_100%_50%/0.3)] group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
            <div className="relative flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1 font-display">
                  {achievement.title}
                </h3>
                <p className="text-sm text-secondary font-semibold mb-2">
                  {achievement.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Achievements;
