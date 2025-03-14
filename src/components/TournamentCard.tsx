
import React from 'react';
import { cn } from '@/lib/utils';

interface TournamentCardProps {
  gradientClass: string;
  date: string;
  onClick?: () => void;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ 
  gradientClass, 
  date, 
  onClick 
}) => {
  return (
    <div 
      className={cn(
        'w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 animate-scale-in',
        'hover:shadow-lg hover:scale-105',
        gradientClass
      )}
      onClick={onClick}
    >
      <div className="text-white font-medium text-sm">{date}</div>
    </div>
  );
};

export default TournamentCard;
