// import React from 'react';
// import { cn } from '@/lib/utils';

// interface TournamentCardProps {
//   gradientClass: string;
//   date: string;
//   logoUrl?: string; // ✅ Added logoUrl prop
//   onClick?: () => void;
// }

// const TournamentCard: React.FC<TournamentCardProps> = ({ 
//   gradientClass, 
//   date, 
//   logoUrl, 
//   onClick 
// }) => {
//   return (
//     <div 
//       className={cn(
//         'w-[160px] h-[160px] rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 animate-scale-in',
//         'hover:shadow-lg hover:scale-105',
//         gradientClass
//       )}
//       onClick={onClick}
//     >
//       {/* ✅ Display tournament logo if available */}
//       {logoUrl && (
//         <img 
//           src={logoUrl} 
//           alt="Tournament Logo" 
//           className="w-12 h-12 object-contain mb-2"
//         />
//       )}
//       <div className="text-white font-medium text-sm">{date}</div>
//     </div>
//   );
// };

// export default TournamentCard;


import React from 'react';
import { cn } from '@/lib/utils';

interface TournamentCardProps {
  gradientClass: string;
  name: string;  // ✅ Added tournament name
  date: string;
  logoUrl?: string;
  onClick?: () => void;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ 
  gradientClass, 
  name,  // ✅ Receiving the name prop
  date, 
  logoUrl, 
  onClick 
}) => {
  return (
    <div 
      className={cn(
        'w-[160px] h-[160px] rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 animate-scale-in',
        'hover:shadow-lg hover:scale-105',
        gradientClass
      )}
      onClick={onClick}
    >
      {/* ✅ Display tournament logo if available */}
      {logoUrl && (
        <img 
          src={logoUrl} 
          alt="Tournament Logo" 
          className="w-12 h-12 object-contain mb-2"
        />
      )}
      
      {/* ✅ Tournament Name in Bold */}
      <div className="text-white font-bold text-sm text-center">{name}</div>

      {/* ✅ Tournament Date */}
      <div className="text-white font-medium text-xs">{date}</div>
    </div>
  );
};

export default TournamentCard;
