
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Search, Calendar, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Cancellation {
  bookingId: string;
  customerName: string;
  date: string;
  time: string;
  place: string;
  reason: string;
  cancellationDate: string;
}

const Cancellations = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const cancellations: Cancellation[] = [
    { 
      bookingId: 'x220-905180', 
      customerName: 'Aarav Bhandari', 
      date: '10 Mar 2023', 
      time: '16:00 - 18:00', 
      place: 'Ground 1A', 
      reason: 'Personal emergency', 
      cancellationDate: '9 Mar 2023' 
    },
    { 
      bookingId: 'x220-905181', 
      customerName: 'Sarvagya Singh', 
      date: '11 Mar 2023', 
      time: '18:00 - 20:00', 
      place: 'Ground 2B', 
      reason: 'Bad weather', 
      cancellationDate: '11 Mar 2023' 
    },
    { 
      bookingId: 'x220-905182', 
      customerName: 'Arjun Patel', 
      date: '12 Mar 2023', 
      time: '14:00 - 16:00', 
      place: 'Ground 3A', 
      reason: 'Team unavailable', 
      cancellationDate: '10 Mar 2023' 
    },
    { 
      bookingId: 'x220-905183', 
      customerName: 'Kiran Sharma', 
      date: '13 Mar 2023', 
      time: '20:00 - 22:00', 
      place: 'Ground 1B', 
      reason: 'Illness', 
      cancellationDate: '12 Mar 2023' 
    },
    { 
      bookingId: 'x220-905184', 
      customerName: 'Neha Verma', 
      date: '14 Mar 2023', 
      time: '16:00 - 18:00', 
      place: 'Ground 2A', 
      reason: 'Double booking', 
      cancellationDate: '13 Mar 2023' 
    },
  ];

  const filteredCancellations = cancellations.filter(cancellation =>
    cancellation.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cancellation.bookingId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 md:p-10 max-w-7xl mx-auto animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <XCircle className="h-6 w-6 text-red-500" />
            <h1 className="text-3xl font-semibold">Cancellations</h1>
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search cancellations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-9 text-sm"
              />
            </div>
            
            <div className="flex gap-2">
              <div className="relative w-full sm:w-64">
                <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="date"
                  className="pl-8 h-9 text-sm"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Original Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Place</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Cancelled On</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCancellations.map((cancellation) => (
                  <TableRow key={cancellation.bookingId} className="bg-red-50">
                    <TableCell className="font-medium">{cancellation.bookingId}</TableCell>
                    <TableCell>{cancellation.customerName}</TableCell>
                    <TableCell>{cancellation.date}</TableCell>
                    <TableCell>{cancellation.time}</TableCell>
                    <TableCell>{cancellation.place}</TableCell>
                    <TableCell>{cancellation.reason}</TableCell>
                    <TableCell>{cancellation.cancellationDate}</TableCell>
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

export default Cancellations;
