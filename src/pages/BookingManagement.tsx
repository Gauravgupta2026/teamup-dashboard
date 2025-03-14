
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
import { Search, Calendar, Clock, MapPin, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

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

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 md:p-10 max-w-7xl mx-auto animate-fade-in">
          <h1 className="text-3xl font-semibold mb-6">Booking Management</h1>
          
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
            
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="pending">Pending</option>
              </select>
              <Button>New Booking</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Date
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Time
                    </div>
                  </TableHead>
                  <TableHead>
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
                    <TableCell>{booking.customerName}</TableCell>
                    <TableCell>{booking.date}</TableCell>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>{booking.place}</TableCell>
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
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
    </div>
  );
};

export default BookingManagement;
