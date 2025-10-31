import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Coins } from "lucide-react";
import { toast } from "sonner";

const Basketball = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [result, setResult] = useState<"hit" | "miss" | null>(null);

  const handleShoot = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAttempts(attempts + 1);

    // 60% шанс попасть
    const isHit = Math.random() > 0.4;
    
    setTimeout(() => {
      setResult(isHit ? "hit" : "miss");
      
      if (isHit) {
        setScore(score + 1);
        toast.success("Попал! 🏀");
      } else {
        toast.error("Промах!");
      }

      setTimeout(() => {
        setResult(null);
        setIsAnimating(false);
      }, 1000);
    }, 800);
  };

  const handleFinish = () => {
    const coins = score * 50 + 50;
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
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coins className="w-6 h-6 text-secondary" />
                <span className="text-2xl font-bold text-foreground font-display">{score}</span>
              </div>
              <p className="text-sm text-muted-foreground">Попадания</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-foreground font-display">{attempts}</span>
              <p className="text-sm text-muted-foreground">Попытки</p>
            </div>
          </div>

          {/* Basketball court */}
          <div className="relative mb-8 h-64 bg-gradient-to-b from-orange-900/20 to-orange-700/10 rounded-lg border-2 border-primary/30 overflow-hidden">
            {/* Basketball hoop */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
              <div className="text-6xl mb-2">🏀</div>
              <div className="w-24 h-4 border-4 border-orange-500 rounded-full relative">
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-12 border-l-4 border-r-4 border-b-4 border-orange-500/50"></div>
              </div>
            </div>

            {/* Ball animation */}
            {isAnimating && (
              <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-5xl ${
                result === null ? "animate-slide-up" : ""
              }`}>
                🏀
              </div>
            )}

            {/* Result indicator */}
            {result && (
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl animate-scale-in ${
                result === "hit" ? "text-secondary" : "text-red-500"
              }`}>
                {result === "hit" ? "✓" : "✗"}
              </div>
            )}
          </div>

          {/* Shoot button */}
          <div className="mb-6">
            <Button
              onClick={handleShoot}
              disabled={isAnimating || attempts >= 10}
              className="w-full bg-primary hover:bg-primary/90 text-background font-display font-bold py-8 text-lg"
            >
              {isAnimating ? "Бросок..." : "🏀 Бросить мяч"}
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

export default Basketball;
