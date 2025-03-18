
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useAuth } from '@/hooks/use-auth';
import { useTournaments } from '@/hooks/use-tournaments';
import { useLiveMatches } from '@/hooks/use-matches';
import { useBookings } from '@/hooks/use-bookings';
import { useMetrics } from '@/hooks/use-metrics';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState('Today');
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();

  const { data: tournaments, isLoading: tournamentsLoading } = useTournaments();
  const { data: liveMatches, isLoading: matchesLoading } = useLiveMatches();
  const { data: bookings, isLoading: bookingsLoading } = useBookings(selectedDate);
  const { data: metricsData, isLoading: metricsLoading } = useMetrics();

  // If user is not authenticated, redirect to auth page
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [authLoading, user, navigate]);

  // If still loading auth or user is not authenticated, show loading spinner
  if (authLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // Date selections for the DateSelector component
  const dateSelections = [
    'Today', '10th March', '11th March', '12th March', '13th March', 
    '14th March', '15th March', '16th March', '17th March', '18th March'
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
            {!isMobile && <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10">Welcome, {user.user_metadata.name || 'User'}</h1>}
            
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
                  )}>{metricsLoading ? '...' : metricsData?.total_clients_booked}</h3>
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
                  )}>₹{metricsLoading ? '...' : (metricsData?.total_revenue.toLocaleString('en-IN', { 
                    notation: 'compact',
                    maximumFractionDigits: 1
                  }))}</h3>
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
                  )}>{metricsLoading ? '...' : metricsData?.total_matches_played}</h3>
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
                    {tournamentsLoading ? (
                      [...Array(4)].map((_, i) => (
                        <div key={i} className="snap-center flex-shrink-0">
                          <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden animate-pulse">
                          </div>
                        </div>
                      ))
                    ) : (
                      tournaments?.map((tournament) => (
                        <div key={tournament.id} className="snap-center flex-shrink-0">
                          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
                            <img 
                              src={tournament.logo_url || '/placeholder.svg'} 
                              alt={tournament.name} 
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-black rounded-xl p-4 md:p-8">
                  <div className="flex space-x-4 md:space-x-8 overflow-x-auto pb-4 snap-x">
                    {tournamentsLoading ? (
                      [...Array(4)].map((_, i) => (
                        <div key={i} className="snap-start">
                          <div className="w-64 h-32 rounded-xl bg-gray-700 animate-pulse"></div>
                        </div>
                      ))
                    ) : (
                      tournaments?.map((tournament) => (
                        <div key={tournament.id} className="snap-start">
                          <TournamentCard 
                            gradientClass={tournament.gradient_class || ''}
                            date={tournament.date}
                          />
                        </div>
                      ))
                    )}
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
                  {matchesLoading ? (
                    [...Array(4)].map((_, i) => (
                      <div key={i} className="snap-start min-w-[180px] md:min-w-[240px] h-[160px] rounded-lg bg-gray-100 animate-pulse"></div>
                    ))
                  ) : (
                    liveMatches?.map((match) => (
                      <LiveMatch 
                        key={match.id}
                        type={match.type}
                        player={match.player}
                        time={match.time}
                        team={match.team}
                        ground={match.ground}
                        status={match.status}
                      />
                    ))
                  )}
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
              <BookingTable 
                bookings={bookings?.map(booking => ({
                  time: booking.time,
                  customer: booking.customer,
                  bookingId: booking.booking_id,
                  ground: booking.ground,
                  status: booking.status
                })) || []} 
                isLoading={bookingsLoading}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
