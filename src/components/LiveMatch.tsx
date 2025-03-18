
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import LiveMatchDialog from './LiveMatchDialog';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsDialogOpen(true);
    }
  };

  // For mobile, simplified match cards matching the design
  if (isMobile) {
    return (
      <>
        <div 
          className={cn(
            'snap-start min-w-[240px] h-[140px] rounded-lg cursor-pointer flex flex-col justify-between p-4',
            type === 'live' && 'bg-blue-600 text-white',
            type === 'next' && 'bg-gray-200 text-black',
            type === 'upcoming' && 'bg-gray-200 text-black',
          )}
          onClick={handleClick}
        >
          {type === 'live' && (
            <div className="inline-flex items-center bg-white px-2 py-0.5 rounded-full text-xs font-medium text-blue-600 w-fit">
              Live
            </div>
          )}
          
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-bold">{player.split(' ')[0]}</div>
              <div className="text-xl font-bold">0</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium">{ground}</div>
              <div className="text-xl font-bold">1</div>
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
  }

  // Desktop version
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
