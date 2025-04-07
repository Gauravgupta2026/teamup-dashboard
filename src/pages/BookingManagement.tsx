
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Search, Calendar, Clock, MapPin, Filter, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface Booking {
  id: string;
  customerName: string;
  date: string;
  time: string;
  place: string;
  status: 'paid' | 'unpaid' | 'pending';
}

const BookingManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [isNewBookingModalOpen, setIsNewBookingModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Sample data
  const bookings: Booking[] = [
    { id: 'x220-905172', customerName: 'Aarav Bhandari', date: '10 Mar 2023', time: '16:00 - 18:00', place: 'Ground 1A', status: 'paid' },
    { id: 'x220-905173', customerName: 'Sarvagya Singh', date: '11 Mar 2023', time: '18:00 - 20:00', place: 'Ground 2B', status: 'unpaid' },
    { id: 'x220-905174', customerName: 'Arjun Patel', date: '12 Mar 2023', time: '14:00 - 16:00', place: 'Ground 3A', status: 'pending' },
    { id: 'x220-905175', customerName: 'Kiran Sharma', date: '13 Mar 2023', time: '20:00 - 22:00', place: 'Ground 1B', status: 'paid' },
    { id: 'x220-905176', customerName: 'Neha Verma', date: '14 Mar 2023', time: '16:00 - 18:00', place: 'Ground 2A', status: 'unpaid' },
    { id: 'x220-905177', customerName: 'Vikram Mehta', date: '15 Mar 2023', time: '18:00 - 20:00', place: 'Ground 3B', status: 'pending' },
    { id: 'x220-905178', customerName: 'Priya Gupta', date: '16 Mar 2023', time: '14:00 - 16:00', place: 'Ground 1A', status: 'paid' },
    { id: 'x220-905179', customerName: 'Rahul Khanna', date: '17 Mar 2023', time: '20:00 - 22:00', place: 'Ground 2B', status: 'unpaid' },
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleNewBooking = () => {
    setIsNewBookingModalOpen(true);
  };

  const handleCreateBooking = () => {
    setIsNewBookingModalOpen(false);
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Booking created",
        description: "New booking has been created successfully"
      });
    }, 1500);
  };

  const handleViewBooking = (id: string) => {
    toast({
      title: "View booking",
      description: `Viewing details for booking ${id}`
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-4 md:p-10 max-w-7xl mx-auto animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Booking Management</h1>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search bookings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-9 text-sm"
              />
            </div>
            
            <div className="flex gap-2 flex-col sm:flex-row w-full sm:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm w-full sm:w-auto"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="pending">Pending</option>
              </select>
              <Button onClick={handleNewBooking} className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" /> New Booking
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {isLoading ? (
              <div className="p-4 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer Name</TableHead>
                      <TableHead className={isMobile ? "hidden md:table-cell" : ""}>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Date
                        </div>
                      </TableHead>
                      <TableHead className={isMobile ? "hidden md:table-cell" : ""}>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Time
                        </div>
                      </TableHead>
                      <TableHead className={isMobile ? "hidden md:table-cell" : ""}>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          Place
                        </div>
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div>
                            {booking.customerName}
                            <div className="md:hidden text-xs text-gray-500">
                              {booking.date} • {booking.time} • {booking.place}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className={isMobile ? "hidden md:table-cell" : ""}>{booking.date}</TableCell>
                        <TableCell className={isMobile ? "hidden md:table-cell" : ""}>{booking.time}</TableCell>
                        <TableCell className={isMobile ? "hidden md:table-cell" : ""}>{booking.place}</TableCell>
                        <TableCell>
                          <span className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                            booking.status === 'paid' && "bg-green-100 text-green-800",
                            booking.status === 'unpaid' && "bg-red-100 text-red-800",
                            booking.status === 'pending' && "bg-yellow-100 text-yellow-800"
                          )}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={() => handleViewBooking(booking.id)}>
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>

      <Dialog open={isNewBookingModalOpen} onOpenChange={setIsNewBookingModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Booking</DialogTitle>
            <DialogDescription>
              Enter the details for the new booking
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="customer" className="text-right">
                Customer
              </Label>
              <Input
                id="customer"
                placeholder="Customer name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Input
                id="time"
                type="time"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="place" className="text-right">
                Place
              </Label>
              <select
                id="place"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="Ground 1A">Ground 1A</option>
                <option value="Ground 1B">Ground 1B</option>
                <option value="Ground 2A">Ground 2A</option>
                <option value="Ground 2B">Ground 2B</option>
                <option value="Ground 3A">Ground 3A</option>
                <option value="Ground 3B">Ground 3B</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <select
                id="status"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsNewBookingModalOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleCreateBooking}>
              Create Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingManagement;
