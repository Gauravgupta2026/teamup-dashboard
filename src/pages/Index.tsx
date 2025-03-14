
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TournamentCard from '@/components/TournamentCard';
import LiveMatch from '@/components/LiveMatch';
import DateSelector from '@/components/DateSelector';
import BookingTable from '@/components/BookingTable';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState('Today');

  // Sample data for the dashboard
  const tournaments = [
    { id: 1, date: 'March 20-27th', gradientClass: 'tournament-gradient-1' },
    { id: 2, date: 'March 20-27th', gradientClass: 'tournament-gradient-2' },
    { id: 3, date: 'March 20-27th', gradientClass: 'tournament-gradient-3' },
    { id: 4, date: 'March 20-27th', gradientClass: 'tournament-gradient-4' },
  ];

  const liveMatches = [
    { id: 1, type: 'live', player: 'Aarav Bhandari', time: '16:00 - 18:00', team: 5, ground: '2A', status: 'unpaid' },
    { id: 2, type: 'next', player: 'Sarvagya Singh', time: '20:00 - 21:00', team: 5, ground: '1A', status: 'unpaid' },
    { id: 3, type: 'upcoming', player: 'Aarav Bhandari', time: '16:00 - 18:00', team: 5, ground: '2A', status: 'unpaid' },
    { id: 4, type: 'upcoming', player: 'Aarav Bhandari', time: '16:00 - 18:00', team: 5, ground: '2A', status: 'unpaid' },
  ];

  const dateSelections = [
    'Today', '10th March', '11th March', '12th March', '13th March', 
    '14th March', '15th March', '16th March', '17th March', '18th March'
  ];

  const bookings = [
    { time: '16:00 - 18:00', customer: 'Aarav Bhandari', bookingId: 'x220-905172', ground: 'G1A', status: 'unpaid' },
    { time: '16:00 - 18:00', customer: 'Aarav Bhandari', bookingId: 'x220-905172', ground: 'G1A', status: 'unpaid' },
    { time: '16:00 - 18:00', customer: 'Aarav Bhandari', bookingId: 'x220-905172', ground: 'G1A', status: 'unpaid' },
    { time: '16:00 - 18:00', customer: 'Aarav Bhandari', bookingId: 'x220-905172', ground: 'G1A', status: 'unpaid' },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 md:p-10 max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl font-semibold mb-10">Welcome, Gaurav</h1>
            
            {/* Upcoming Tournaments Section */}
            <section className="mb-10">
              <h2 className="text-xl font-medium mb-4">Upcoming Tournaments</h2>
              <div className="bg-black rounded-xl p-8">
                <div className="flex space-x-8 overflow-x-auto pb-4">
                  {tournaments.map((tournament) => (
                    <TournamentCard 
                      key={tournament.id}
                      gradientClass={tournament.gradientClass}
                      date={tournament.date}
                    />
                  ))}
                </div>
              </div>
            </section>
            
            {/* Live Match Section */}
            <section className="mb-10">
              <h2 className="text-xl font-medium mb-4">Live Match</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {liveMatches.map((match) => (
                  <LiveMatch 
                    key={match.id}
                    type={match.type as 'live' | 'next' | 'upcoming'}
                    player={match.player}
                    time={match.time}
                    team={match.team}
                    ground={match.ground}
                    status={match.status as 'paid' | 'unpaid'}
                  />
                ))}
              </div>
            </section>
            
            {/* Date Selection Bar */}
            <section className="mb-10">
              <DateSelector 
                dates={dateSelections}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </section>
            
            {/* Booking List Section */}
            <section>
              <BookingTable bookings={bookings} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
