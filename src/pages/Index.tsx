
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TournamentCard from '@/components/TournamentCard';
import LiveMatch from '@/components/LiveMatch';
import DateSelector from '@/components/DateSelector';
import BookingTable from '@/components/BookingTable';
import { Card, CardContent } from '@/components/ui/card';
import { Users, CreditCard, Calendar, Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState('Today');
  const isMobile = useIsMobile();

  // Sample data for the metrics
  const metrics = {
    totalClientsBooked: 42,
    totalRevenue: 38500,
    totalMatchesPlayed: 16
  };

  // Sample data for the dashboard
  const tournaments = [
    { id: 1, name: 'Europa League', logo: '/lovable-uploads/6b3ebf9f-8f9c-4b0a-9ab6-06103afd60ae.png', date: 'March 20-27th', gradientClass: 'tournament-gradient-1' },
    { id: 2, name: 'La Liga', logo: '/placeholder.svg', date: 'March 20-27th', gradientClass: 'tournament-gradient-2' },
    { id: 3, name: 'Bundesliga', logo: '/placeholder.svg', date: 'March 20-27th', gradientClass: 'tournament-gradient-3' },
    { id: 4, name: 'Premier League', logo: '/placeholder.svg', date: 'March 20-27th', gradientClass: 'tournament-gradient-4' },
  ];

  const liveMatches = [
    { id: 1, type: 'live', player: 'Real Madrid', time: '16:00 - 18:00', team: 5, ground: 'M. City', status: 'unpaid' },
    { id: 2, type: 'live', player: 'Tottenham', time: '20:00 - 21:00', team: 5, ground: 'PSG', status: 'unpaid' },
    { id: 3, type: 'live', player: 'Liverpool', time: '16:00 - 18:00', team: 5, ground: 'Chelsea', status: 'unpaid' },
    { id: 4, type: 'live', player: 'Bayern', time: '16:00 - 18:00', team: 5, ground: 'Barcelona', status: 'unpaid' },
  ];

  const dateSelections = [
    'Today', '10th March', '11th March', '12th March', '13th March', 
    '14th March', '15th March', '16th March', '17th March', '18th March'
  ];

  const bookings = [
    { time: '16:00 - 18:00', customer: 'Aarav Bhandari', bookingId: 'x220-905172', ground: 'G1A', status: 'unpaid' as const },
    { time: '16:00 - 18:00', customer: 'Aarav Bhandari', bookingId: 'x220-905172', ground: 'G1A', status: 'unpaid' as const },
    { time: '16:00 - 18:00', customer: 'Aarav Bhandari', bookingId: 'x220-905172', ground: 'G1A', status: 'unpaid' as const },
    { time: '16:00 - 18:00', customer: 'Aarav Bhandari', bookingId: 'x220-905172', ground: 'G1A', status: 'paid' as const },
  ];

  const latestNews = [
    { 
      id: 1, 
      title: "Rumour Has It: Lampard's position under threat...", 
      date: "04 JAN 2021, 14:16",
      image: "/placeholder.svg" 
    },
    { 
      id: 2, 
      title: "Arteta sees 'natural leader' Tierney as a future...", 
      date: "04 JAN 2021, 05:30",
      image: "/placeholder.svg" 
    },
    { 
      id: 3, 
      title: "Athletic Bilbao to appoint Marcelino as coach until...", 
      date: "04 JAN 2021, 09:23",
      image: "/placeholder.svg" 
    },
    { 
      id: 4, 
      title: "Barcelona suffer too much late in games, says Ter Stegen", 
      date: "04 JAN 2021, 06:06",
      image: "/placeholder.svg" 
    }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        {isMobile && (
          <header className="fixed top-0 left-0 right-0 h-16 bg-white z-40 flex items-center justify-center border-b">
            <div className="flex items-center gap-1">
              <div className="h-6 w-6 bg-yellow-400 rounded-full"></div>
              <span className="font-bold text-xl">SPORT2</span>
            </div>
            <div className="absolute right-4">
              <button className="p-2 rounded-full">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </header>
        )}
        
        <main className={cn(
          "p-4 max-w-7xl mx-auto",
          isMobile && "pt-20 pb-16"
        )}>
          <div className="animate-fade-in">
            {!isMobile && <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10">Welcome, Gaurav</h1>}
            
            {/* Metrics Cards */}
            <section className="mb-6 grid grid-cols-3 gap-2">
              <Card className="bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="p-3 flex flex-col items-center">
                  <p className="text-xs font-medium text-gray-500">Clients</p>
                  <h3 className="text-lg font-bold">{metrics.totalClientsBooked}</h3>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="p-3 flex flex-col items-center">
                  <p className="text-xs font-medium text-gray-500">Revenue</p>
                  <h3 className="text-lg font-bold">₹{metrics.totalRevenue.toLocaleString('en-IN', { 
                    notation: 'compact',
                    maximumFractionDigits: 1
                  })}</h3>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <CardContent className="p-3 flex flex-col items-center">
                  <p className="text-xs font-medium text-gray-500">Matches</p>
                  <h3 className="text-lg font-bold">{metrics.totalMatchesPlayed}</h3>
                </CardContent>
              </Card>
            </section>
            
            {/* Leagues (Tournaments) Section */}
            <section className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Leagues</h2>
                <a href="#" className="text-sm text-gray-500">View All</a>
              </div>
              
              {isMobile ? (
                <div className="bg-black rounded-xl p-4 overflow-x-auto">
                  <div className="flex space-x-4 snap-x snap-mandatory">
                    {tournaments.map((tournament) => (
                      <div key={tournament.id} className="snap-center flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img 
                            src={tournament.logo} 
                            alt={tournament.name} 
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-black rounded-xl p-4 md:p-8">
                  <div className="flex space-x-4 md:space-x-8 overflow-x-auto pb-4 snap-x">
                    {tournaments.map((tournament) => (
                      <div key={tournament.id} className="snap-start">
                        <TournamentCard 
                          gradientClass={tournament.gradientClass}
                          date={tournament.date}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
            
            {/* Live Match Section */}
            <section className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Live Matches</h2>
                <a href="#" className="text-sm text-gray-500">View All</a>
              </div>
              
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4 snap-x snap-mandatory min-w-full">
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
              </div>
            </section>
            
            {/* Latest News Section - Mobile Only */}
            {isMobile && (
              <section className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium">Latest News</h2>
                </div>
                
                <div className="space-y-4">
                  {/* Featured News */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-200">
                    <img 
                      src="/placeholder.svg" 
                      alt="Featured news" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                          <div className="border-t-8 border-l-8 border-transparent border-r-8 border-r-black translate-x-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* News List */}
                  {latestNews.map(news => (
                    <div key={news.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={news.image} 
                          alt={news.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium line-clamp-2">{news.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{news.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* Date Selection Bar - Only for non-mobile */}
            {!isMobile && (
              <section className="mb-6 md:mb-10 overflow-x-auto">
                <DateSelector 
                  dates={dateSelections}
                  selectedDate={selectedDate}
                  onSelectDate={setSelectedDate}
                />
              </section>
            )}
            
            {/* Booking List Section - Only for non-mobile */}
            {!isMobile && (
              <section>
                <BookingTable bookings={bookings} />
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
