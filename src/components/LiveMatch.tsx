
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

  // Mobile design with all information preserved
  if (isMobile) {
    return (
      <>
        <div 
          className={cn(
            'snap-start min-w-[180px] h-[160px] rounded-lg cursor-pointer flex flex-col justify-between p-3',
            type === 'live' && 'bg-blue-600 text-white',
            type === 'next' && 'bg-gray-100 text-black border border-gray-200',
            type === 'upcoming' && 'bg-gray-100 text-black border border-gray-200',
          )}
          onClick={handleClick}
        >
          {type === 'live' && (
            <div className="inline-flex items-center bg-white px-2 py-0.5 rounded-full text-xs font-medium text-blue-600 w-fit">
              Live
            </div>
          )}
          
          <div className="text-xs mt-2">{time}</div>
          
          <div className="mt-auto">
            <div className="flex justify-between items-baseline mb-1">
              <div className="text-sm font-semibold">{player.split(' ')[0]}</div>
              <div className="text-lg font-bold">0</div>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-xs font-medium opacity-80">{ground}</div>
              <div className="text-lg font-bold">1</div>
            </div>
            
            <div className="flex flex-wrap justify-between items-center mt-2">
              <div className="text-xs">Team: {team}</div>
              <div className={cn(
                'text-xs px-2 py-0.5 rounded-full',
                status === 'unpaid' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
              )}>
                {status === 'unpaid' ? 'Unpaid' : 'Paid'}
              </div>
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

  // Keep desktop version
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
