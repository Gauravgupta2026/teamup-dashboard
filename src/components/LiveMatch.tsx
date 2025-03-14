
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import LiveMatchDialog from './LiveMatchDialog';

interface LiveMatchProps {
  type: 'live' | 'next' | 'upcoming';
  player: string;
  time: string;
  team: number;
  ground: string;
  status: 'paid' | 'unpaid';
  onClick?: () => void;
}

const LiveMatch: React.FC<LiveMatchProps> = ({
  type,
  player,
  time,
  team,
  ground,
  status,
  onClick
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <div 
        className={cn(
          'match-card animate-scale-in cursor-pointer',
          type === 'live' && 'match-card-live',
          type === 'next' && 'match-card-next',
          type === 'upcoming' && 'match-card-upcoming'
        )}
        onClick={handleClick}
      >
        {type === 'live' && (
          <div className="live-indicator animate-pulse-slow">Live</div>
        )}
        {type === 'next' && (
          <div className="next-indicator">Next</div>
        )}
        {type === 'upcoming' && (
          <div className="upcoming-indicator">Upcoming</div>
        )}
        
        <div className="mt-8 mb-2">
          <h3 className="text-lg font-semibold">{player}</h3>
          <div className="text-sm opacity-80">{time}</div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-4">
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">Team:</span>
              <span className="text-sm">{team}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">MIT</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">Ground {ground}</span>
            </div>
          </div>
          
          <div className={cn(
            'text-sm font-medium',
            status === 'unpaid' && 'text-red-500'
          )}>
            {status === 'unpaid' ? 'Unpaid' : 'Paid'}
          </div>
        </div>
      </div>

      <LiveMatchDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        matchData={{ type, player, time, team, ground, status }}
      />
    </>
  );
};

export default LiveMatch;
