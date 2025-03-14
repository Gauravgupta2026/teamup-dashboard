
import React from 'react';
import { cn } from '@/lib/utils';

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
  return (
    <div 
      className={cn(
        'match-card animate-scale-in',
        type === 'live' && 'match-card-live',
        type === 'next' && 'match-card-next',
        type === 'upcoming' && 'match-card-upcoming'
      )}
      onClick={onClick}
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
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
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
  );
};

export default LiveMatch;
