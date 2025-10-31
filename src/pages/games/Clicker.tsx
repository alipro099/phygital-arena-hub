import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Coins } from "lucide-react";
import { toast } from "sonner";
import phygitalLogo from "@/assets/phygital-logo.jpg";

const Clicker = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setScore(score + 1);
    setClicks(clicks + 1);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100);

    if ((clicks + 1) % 50 === 0) {
      toast.success(`Отличная работа! ${clicks + 1} кликов!`);
    }
  };

  const handleFinish = () => {
    const coins = Math.floor(score / 10) + 10;
    toast.success(`Вы заработали ${coins} коинов!`);
    setTimeout(() => navigate("/games"), 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-gradient-to-br from-card via-background to-card border-b border-primary/20">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/games")}
            className="mb-4 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-display">
            Тапалка
          </h1>
          <p className="text-muted-foreground">Нажимай на логотип и зарабатывай очки!</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <Card className="p-8 bg-gradient-to-br from-card to-background border-primary/30 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Coins className="w-8 h-8 text-secondary animate-glow-pulse-green" />
            <span className="text-4xl font-bold text-foreground font-display">{score}</span>
          </div>

          <div className="flex justify-center mb-8">
            <button
              onClick={handleClick}
              className={`rounded-full overflow-hidden border-4 border-primary/50 hover:border-primary transition-all duration-200 ${
                animate ? "scale-95" : "scale-100"
              } hover:scale-105 active:scale-95 shadow-[0_0_30px_hsl(195_100%_50%/0.4)] hover:shadow-[0_0_50px_hsl(195_100%_50%/0.6)]`}
            >
              <img 
                src={phygitalLogo} 
                alt="Phygital Logo" 
                className="w-64 h-64 object-cover"
              />
            </button>
          </div>

          <p className="text-muted-foreground mb-6">
            Кликов: {clicks}
          </p>

          <Button
            onClick={handleFinish}
            className="bg-gradient-to-r from-primary to-secondary text-background font-display font-bold text-lg py-6 px-8"
            disabled={score < 10}
          >
            {score < 10 ? "Минимум 10 очков для завершения" : "Завершить и получить награду"}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Clicker;
