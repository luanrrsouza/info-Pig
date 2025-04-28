import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Practice {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  consequences: string;
}

interface BiosecurityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  practice: Practice;
}

function BiosecurityModal({
  open,
  onOpenChange,
  practice,
}: BiosecurityModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[32rem] bg-card rounded-2xl p-8 flex flex-col items-center animate-fade-in">
        <DialogHeader className="flex flex-col items-center space-y-4">
          <div className="bg-[#AC7771] w-20 h-20 flex items-center justify-center rounded-full">
            {practice.icon}
          </div>
          <DialogTitle className="text-2xl text-primary font-bold leading-tight text-center">
            {practice.title}
          </DialogTitle>
        </DialogHeader>
        <div className="text-muted-foreground text-base mt-6 w-full space-y-6">
          <div className="text-center">
            <p className="leading-relaxed">{practice.details}</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary mb-2 text-center">
              Consequências da Não Adoção
            </h4>
            <p className="text-center leading-relaxed">
              {practice.consequences}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { BiosecurityModal };
