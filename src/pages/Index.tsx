import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TournamentCard from '@/components/TournamentCard';
import LiveMatch from '@/components/LiveMatch';
import DateSelector from '@/components/DateSelector';
import BookingTable from '@/components/BookingTable';
import { Card, CardContent } from '@/components/ui/card';
import { Users, CreditCard, Calendar, Search, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState('Today');
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      {/* For desktop, display the sidebar component normally */}
      {!isMobile && <Sidebar />}
      
      {/* For mobile, create a minimal header with menu button */}
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 h-14 bg-white z-40 flex items-center px-4 border-b">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 bg-yellow-400 rounded-full"></div>
              <span className="font-bold text-base">SPORT2</span>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Search className="h-5 w-5" />
          </Button>
        </header>
      )}
      
      <div className="flex-1 overflow-y-auto">
        <main className={cn(
          "p-4 max-w-7xl mx-auto",
          isMobile && "pt-16 pb-6"
        )}>
          <div className="animate-fade-in">
            {!isMobile && <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10">Welcome, Gaurav</h1>}
            
            {/* Metrics Cards - More compact on mobile */}
            <section className="mb-5 grid grid-cols-3 gap-2">
              <Card className={cn(
                "bg-white shadow-sm border border-gray-100",
                isMobile && "p-0"
              )}>
                <CardContent className={cn(
                  "p-3 flex flex-col items-center",
                  isMobile && "p-2"
                )}>
                  <p className={cn(
                    "text-xs font-medium text-gray-500",
                    isMobile && "text-[10px]"
                  )}>Clients</p>
                  <h3 className={cn(
                    "text-lg font-bold", 
                    isMobile && "text-base"
                  )}>{metrics.totalClientsBooked}</h3>
                </CardContent>
              </Card>
              
              <Card className={cn(
                "bg-white shadow-sm border border-gray-100",
                isMobile && "p-0"
              )}>
                <CardContent className={cn(
                  "p-3 flex flex-col items-center",
                  isMobile && "p-2"
                )}>
                  <p className={cn(
                    "text-xs font-medium text-gray-500",
                    isMobile && "text-[10px]"
                  )}>Revenue</p>
                  <h3 className={cn(
                    "text-lg font-bold",
                    isMobile && "text-base"
                  )}>₹{metrics.totalRevenue.toLocaleString('en-IN', { 
                    notation: 'compact',
                    maximumFractionDigits: 1
                  })}</h3>
                </CardContent>
              </Card>
              
              <Card className={cn(
                "bg-white shadow-sm border border-gray-100",
                isMobile && "p-0"
              )}>
                <CardContent className={cn(
                  "p-3 flex flex-col items-center",
                  isMobile && "p-2"
                )}>
                  <p className={cn(
                    "text-xs font-medium text-gray-500",
                    isMobile && "text-[10px]"
                  )}>Matches</p>
                  <h3 className={cn(
                    "text-lg font-bold",
                    isMobile && "text-base"
                  )}>{metrics.totalMatchesPlayed}</h3>
                </CardContent>
              </Card>
            </section>
            
            {/* Leagues (Tournaments) Section */}
            <section className="mb-5">
              <div className="flex justify-between items-center mb-3">
                <h2 className={cn(
                  "text-xl font-medium",
                  isMobile && "text-base"
                )}>Leagues</h2>
                <a href="#" className="text-sm text-gray-500">View All</a>
              </div>
              
              {isMobile ? (
                <div className="bg-black rounded-xl p-4 overflow-x-auto scrollbar-none">
                  <div className="flex space-x-4 snap-x snap-mandatory">
                    {tournaments.map((tournament) => (
                      <div key={tournament.id} className="snap-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img 
                            src={tournament.logo} 
                            alt={tournament.name} 
                            className="w-10 h-10 object-contain"
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
            <section className="mb-5">
              <div className="flex justify-between items-center mb-3">
                <h2 className={cn(
                  "text-xl font-medium",
                  isMobile && "text-base"
                )}>Live Matches</h2>
                <a href="#" className="text-sm text-gray-500">View All</a>
              </div>
              
              <div className="overflow-x-auto pb-2 -mx-4 px-4">
                <div className="flex space-x-3 snap-x snap-mandatory min-w-full">
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
            
            {/* Date Selection Bar and Bookings Table - For both mobile and desktop */}
            <section className="mb-6 md:mb-10 overflow-x-auto">
              <DateSelector 
                dates={dateSelections}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </section>
            
            {/* Booking List Section - For both mobile and desktop */}
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
