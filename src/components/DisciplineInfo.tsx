import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DisciplineInfoProps {
  isOpen: boolean;
  onClose: () => void;
  discipline: {
    name: string;
    icon: string;
    description: string;
    rules: string[];
  };
}

export const DisciplineInfo = ({ isOpen, onClose, discipline }: DisciplineInfoProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-primary flex items-center gap-3">
            <span className="text-4xl">{discipline.icon}</span>
            {discipline.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-lg font-display font-bold text-secondary mb-2">
              О дисциплине
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {discipline.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold text-secondary mb-3">
              Правила
            </h3>
            <ul className="space-y-2">
              {discipline.rules.map((rule, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary font-bold">{index + 1}.</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
