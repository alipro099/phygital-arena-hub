import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Coins } from "lucide-react";
import { toast } from "sonner";

const TimingBattle = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [playerProgress, setPlayerProgress] = useState(0);
  const [botProgress, setBotProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [roundResult, setRoundResult] = useState<"win" | "lose" | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const botIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRound = () => {
    setIsPlaying(true);
    setPlayerProgress(0);
    setBotProgress(0);
    setRoundResult(null);

    // Bot auto-tapping
    botIntervalRef.current = setInterval(() => {
      setBotProgress((prev) => {
        const newProgress = prev + Math.random() * 2 + 1;
        if (newProgress >= 100) {
          endRound("lose");
          return 100;
        }
        return newProgress;
      });
    }, 100);
  };

  const handleTap = () => {
    if (!isPlaying) return;

    setPlayerProgress((prev) => {
      const newProgress = prev + 5;
      if (newProgress >= 100) {
        endRound("win");
        return 100;
      }
      return newProgress;
    });
  };

  const endRound = (result: "win" | "lose") => {
    setIsPlaying(false);
    setRoundResult(result);
    
    if (botIntervalRef.current) {
      clearInterval(botIntervalRef.current);
    }

    if (result === "win") {
      setScore(score + 1);
      toast.success("Победа! 🥊");
    } else {
      toast.error("Поражение!");
    }

    setTimeout(() => {
      if (round < 4) {
        setRound(round + 1);
        setRoundResult(null);
      }
    }, 2000);
  };

  const handleFinish = () => {
    const coins = score * 100 + 100;
    toast.success(`Вы заработали ${coins} коинов!`);
    setTimeout(() => navigate("/games"), 1500);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (botIntervalRef.current) clearInterval(botIntervalRef.current);
    };
  }, []);

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
          <div className="flex items-center justify-center gap-2 mb-6">
            <Coins className="w-6 h-6 text-secondary" />
            <span className="text-2xl font-bold text-foreground font-display">
              Побед: {score} / Раунд: {round + 1}/5
            </span>
          </div>

          {/* Battle Arena */}
          <div className="mb-8">
            {/* Player side */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-primary font-display">Вы</span>
                <span className="text-sm text-muted-foreground">{Math.round(playerProgress)}%</span>
              </div>
              <div className="h-8 bg-card border-2 border-primary/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
                  style={{ width: `${playerProgress}%` }}
                />
              </div>
            </div>

            {/* Fighting figures */}
            <div className="flex items-center justify-center gap-8 my-6 relative">
              <div className={`text-6xl transition-transform ${
                roundResult === "win" ? "scale-125" : roundResult === "lose" ? "scale-75 opacity-50" : ""
              }`}>
                🥊
              </div>
              <div className="text-4xl">VS</div>
              <div className={`text-6xl transition-transform ${
                roundResult === "lose" ? "scale-125" : roundResult === "win" ? "scale-75 opacity-50" : ""
              }`}>
                🤖
              </div>
            </div>

            {/* Bot side */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-red-500 font-display">Бот</span>
                <span className="text-sm text-muted-foreground">{Math.round(botProgress)}%</span>
              </div>
              <div className="h-8 bg-card border-2 border-red-500/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-100"
                  style={{ width: `${botProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Controls */}
          {!isPlaying && roundResult === null && round < 5 && (
            <Button
              onClick={startRound}
              className="w-full bg-primary hover:bg-primary/90 text-background font-display font-bold py-8 text-lg mb-4"
            >
              Начать раунд {round + 1}
            </Button>
          )}

          {isPlaying && (
            <Button
              onClick={handleTap}
              className="w-full bg-gradient-to-r from-primary to-secondary text-background font-display font-bold py-12 text-xl active:scale-95 transition-transform"
            >
              ТАПАЙ! 👊
            </Button>
          )}

          {roundResult && (
            <div className={`text-center text-2xl font-bold font-display mb-4 ${
              roundResult === "win" ? "text-secondary" : "text-red-500"
            }`}>
              {roundResult === "win" ? "ПОБЕДА! 🎉" : "ПОРАЖЕНИЕ 😢"}
            </div>
          )}

          {round >= 5 && (
            <div className="space-y-4">
              <div className="text-center text-xl font-bold text-foreground font-display mb-4">
                Игра окончена! Ваш счет: {score}/5
              </div>
              <Button
                onClick={handleFinish}
                className="w-full bg-gradient-to-r from-primary to-secondary text-background font-display font-bold text-lg py-6"
              >
                Завершить и получить награду
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default TimingBattle;
