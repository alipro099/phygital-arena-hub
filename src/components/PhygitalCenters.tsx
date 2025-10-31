import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import centerKazan from "@/assets/center-kazan.jpg";
import centerVr from "@/assets/center-vr.jpg";
import centerGaming from "@/assets/center-gaming.jpg";

export const PhygitalCenters = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="w-full bg-gradient-to-r from-primary to-secondary text-background font-display font-bold text-lg py-6 hover:shadow-[0_0_30px_hsl(195_100%_50%/0.6)] transition-all duration-300"
        >
          <MapPin className="w-5 h-5 mr-2" />
          Фиджитал-центры
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-primary">
            Фиджитал-центры России
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <Card className="p-6 bg-gradient-to-br from-card to-background border-primary/20">
            <h3 className="text-lg font-display font-bold text-secondary mb-3">
              Уже открыты
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              В России уже открыты фиджитал-центры в нескольких городах, включая <span className="text-foreground font-semibold">Казань, Севастополь, Кемерово и Белгород</span>. 
              Также появились центры в <span className="text-foreground font-semibold">Санкт-Петербурге</span> (университетский) и <span className="text-foreground font-semibold">Кирове</span>. 
              Строительство и открытие центров продолжается во многих других регионах страны, таких как Республика Калмыкия, Ставропольский край, Пермский край и другие.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <img src={centerKazan} alt="Фиджитал-центр Казань" className="rounded-lg w-full h-32 object-cover border border-primary/20" />
              <img src={centerVr} alt="Фиджитал-центр VR" className="rounded-lg w-full h-32 object-cover border border-primary/20" />
              <img src={centerGaming} alt="Фиджитал-центр Gaming" className="rounded-lg w-full h-32 object-cover border border-primary/20" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-background border-primary/20">
            <h3 className="text-lg font-display font-bold text-secondary mb-3">
              Наши планы
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Мы планируем построить фиджитал-центры по всей России. Для создания центра в вашем регионе необходимо:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Помещение площадью от 200 кв.м</li>
              <li>Высота потолков не менее 4 метров</li>
              <li>Техническая возможность установки оборудования</li>
              <li>Поддержка местных властей и спортивных организаций</li>
            </ul>
            
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-background font-display font-bold"
              onClick={() => window.open('https://phygitalsport.ru/phygital_centres/', '_blank')}
            >
              Подробнее о центрах
            </Button>
          </Card>

          <Button 
            className="w-full bg-gradient-to-r from-secondary to-primary text-background font-display font-bold text-lg py-6 hover:shadow-[0_0_30px_hsl(84_100%_50%/0.6)] transition-all duration-300"
            onClick={() => window.open('https://t.me/myfuturesport', '_blank')}
          >
            Отправить заявку на постройку центра
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
