import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Coins } from "lucide-react";
import { toast } from "sonner";
import phygitalLogo from "@/assets/phygital-clicker-logo.jpg";

const Clicker = () => {
  const navigate = useNavigate();
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleClick = () => {
    if (timeLeft === 0) return;
    setClicks(clicks + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 100);

    if ((clicks + 1) % 50 === 0) {
      toast.success(`Отлично! ${clicks + 1} кликов!`);
    }
  };

  const handleFinish = () => {
    const coins = clicks * 10;
    toast.success(`Вы заработали ${coins} коинов!`);
    setTimeout(() => navigate("/games"), 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-gradient-to-br from-card via-background to-card border-b border-primary/20">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/games")}
            className="text-primary hover:text-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col max-w-screen-xl mx-auto px-4 py-4 w-full">
        <Card className="flex-1 flex flex-col p-4 sm:p-6 bg-gradient-to-br from-card to-background border-primary/30">
          {/* Stats at top */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
            <div className="text-center p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <div className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                {clicks}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Очков</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg border border-secondary/20">
              <div className="text-2xl sm:text-3xl font-bold text-foreground font-display">
                {timeLeft}с
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Времени</p>
            </div>
            <div className="flex items-center justify-center gap-1 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <Coins className="w-5 h-5 text-secondary" />
              <div className="text-xl sm:text-2xl font-bold text-foreground font-display">
                {clicks * 10}
              </div>
            </div>
          </div>

          {/* Clickable Logo - centered and fills space */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div 
              onClick={handleClick}
              className={`cursor-pointer transition-all duration-100 ${
                isAnimating ? "scale-90" : "scale-100"
              } hover:scale-105 active:scale-95`}
            >
              <img 
                src={phygitalLogo} 
                alt="Games of the Future" 
                className="w-56 h-56 sm:w-80 sm:h-80 object-contain rounded-2xl border-4 border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-[0_0_40px_hsl(195_100%_50%/0.5)]"
              />
            </div>
            <p className="text-muted-foreground mt-4 text-center font-display text-lg">
              {timeLeft > 0 ? "НАЖИМАЙ!" : "Время вышло!"}
            </p>
          </div>

          {timeLeft === 0 && (
            <Button
              onClick={handleFinish}
              className="w-full bg-gradient-to-r from-primary to-secondary text-background font-display font-bold text-lg py-6 mt-4"
            >
              Завершить и получить {clicks * 10} коинов
            </Button>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Clicker;
