
import React from 'react';
import { cn } from '@/lib/utils';

interface DateSelectorProps {
  dates: string[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  dates,
  selectedDate,
  onSelectDate
}) => {
  return (
    <div className="bg-black text-white rounded-xl p-1 flex overflow-x-auto animate-slide-up">
      {dates.map((date, index) => (
        <div
          key={date}
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap',
            selectedDate === date ? 'bg-sports-red text-white' : 'text-gray-300 hover:text-white'
          )}
          onClick={() => onSelectDate(date)}
        >
          {date === 'Today' ? 'Today' : date}
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
