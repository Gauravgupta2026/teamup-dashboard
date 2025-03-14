
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { QrCode, PlayCircle, StopCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LiveMatchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  matchData: {
    type: 'live' | 'next' | 'upcoming';
    player: string;
    time: string;
    team: number;
    ground: string;
    status: 'paid' | 'unpaid';
  };
}

const LiveMatchDialog: React.FC<LiveMatchDialogProps> = ({
  isOpen,
  onClose,
  matchData,
}) => {
  const { toast } = useToast();

  const handlePayment = () => {
    toast({
      title: "Payment initiated",
      description: "QR code payment has been initiated",
    });
  };

  const handleStartMatch = () => {
    toast({
      title: "Match started",
      description: "The match has been started successfully",
    });
    onClose();
  };

  const handleEndMatch = () => {
    toast({
      title: "Match ended",
      description: "The match has been ended successfully",
    });
    onClose();
  };

  const handleMarkAsPaid = () => {
    toast({
      title: "Marked as paid",
      description: "The match has been marked as paid",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Match Details</DialogTitle>
          <DialogDescription>
            View and manage match details
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          <div className="flex justify-between">
            <span className="font-medium">Player:</span>
            <span>{matchData.player}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Time:</span>
            <span>{matchData.time}</span>
          </div>
          
          <Separator className="my-2 border-dashed" />
          
          <div className="flex justify-between">
            <span className="font-medium">Team:</span>
            <span>{matchData.team}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Ground:</span>
            <span>{matchData.ground}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span className={matchData.status === 'paid' ? 'text-green-600' : 'text-red-600'}>
              {matchData.status === 'paid' ? 'Paid' : 'Unpaid'}
            </span>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          {matchData.status === 'unpaid' && (
            <>
              <Button variant="outline" onClick={handlePayment} className="w-full sm:w-auto">
                <QrCode className="mr-2 h-4 w-4" /> Pay with QR
              </Button>
              <Button onClick={handleMarkAsPaid} className="w-full sm:w-auto">
                <CheckCircle className="mr-2 h-4 w-4" /> Mark as Paid
              </Button>
            </>
          )}
          
          {matchData.type === 'upcoming' && (
            <Button onClick={handleStartMatch} className="w-full sm:w-auto">
              <PlayCircle className="mr-2 h-4 w-4" /> Start Match
            </Button>
          )}
          
          {matchData.type === 'live' && (
            <Button onClick={handleEndMatch} className="w-full sm:w-auto">
              <StopCircle className="mr-2 h-4 w-4" /> End Match
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LiveMatchDialog;
