import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Coins } from "lucide-react";
import { toast } from "sonner";

type Position = "left" | "center" | "right";

const Penalty = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [ballPosition, setBallPosition] = useState<Position | null>(null);
  const [goalPosition, setGoalPosition] = useState<Position | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleShoot = (position: Position) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setBallPosition(position);
    
    // Рандомная позиция вратаря
    const positions: Position[] = ["left", "center", "right"];
    const randomGoalPos = positions[Math.floor(Math.random() * positions.length)];
    setGoalPosition(randomGoalPos);

    setTimeout(() => {
      const isGoal = position !== randomGoalPos;
      if (isGoal) {
        setScore(score + 1);
        toast.success("ГОЛ! 🎉");
      } else {
        toast.error("Промах! Вратарь поймал мяч!");
      }

      setAttempts(attempts + 1);
      
      setTimeout(() => {
        setBallPosition(null);
        setGoalPosition(null);
        setIsAnimating(false);
      }, 1000);
    }, 500);
  };

  const handleFinish = () => {
    const coins = score * 50 + 50;
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
            Пенальти
          </h1>
          <p className="text-muted-foreground">Выбери направление удара и забей гол!</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <Card className="p-8 bg-gradient-to-br from-card to-background border-primary/30">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="w-6 h-6 text-secondary" />
                <span className="text-2xl font-bold text-foreground font-display">{score}</span>
              </div>
              <p className="text-sm text-muted-foreground">Голы</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-foreground font-display">{attempts}</span>
              <p className="text-sm text-muted-foreground">Попытки</p>
            </div>
          </div>

          {/* Goal */}
          <div className="relative mb-8">
            <div className="h-48 bg-gradient-to-b from-green-900/20 to-green-700/10 rounded-lg border-2 border-primary/30 relative overflow-hidden">
              {/* Goal net */}
              <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
                {["left", "center", "right"].map((pos) => (
                  <div
                    key={pos}
                    className={`border-2 border-dashed border-primary/20 rounded flex items-center justify-center transition-all duration-300 ${
                      goalPosition === pos ? "bg-primary/20" : ""
                    }`}
                  >
                    {goalPosition === pos && (
                      <div className="text-6xl">🧤</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Ball animation */}
              {ballPosition && (
                <div
                  className={`absolute bottom-0 text-5xl transition-all duration-500 ${
                    ballPosition === "left" ? "left-12" : ballPosition === "center" ? "left-1/2 -translate-x-1/2" : "right-12"
                  } animate-slide-up`}
                >
                  ⚽
                </div>
              )}
            </div>
          </div>

          {/* Control buttons */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Button
              onClick={() => handleShoot("left")}
              disabled={isAnimating || attempts >= 10}
              className="bg-primary hover:bg-primary/90 text-background font-display font-bold py-8"
            >
              ← Влево
            </Button>
            <Button
              onClick={() => handleShoot("center")}
              disabled={isAnimating || attempts >= 10}
              className="bg-primary hover:bg-primary/90 text-background font-display font-bold py-8"
            >
              ↑ Центр
            </Button>
            <Button
              onClick={() => handleShoot("right")}
              disabled={isAnimating || attempts >= 10}
              className="bg-primary hover:bg-primary/90 text-background font-display font-bold py-8"
            >
              → Вправо
            </Button>
          </div>

          {attempts >= 10 && (
            <Button
              onClick={handleFinish}
              className="w-full bg-gradient-to-r from-primary to-secondary text-background font-display font-bold text-lg py-6"
            >
              Завершить и получить награду
            </Button>
          )}

          {attempts < 10 && (
            <p className="text-center text-muted-foreground">
              Осталось попыток: {10 - attempts}
            </p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Penalty;
