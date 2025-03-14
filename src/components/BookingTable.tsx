
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface Booking {
  time: string;
  customer: string;
  bookingId: string;
  ground: string;
  status: 'paid' | 'unpaid';
  action?: React.ReactNode;
}

interface BookingTableProps {
  bookings: Booking[];
}

const BookingTable: React.FC<BookingTableProps> = ({ bookings }) => {
  return (
    <div className="animate-slide-up">
      <div className="text-xl font-semibold mb-4">Team Up Pvt. Ltd.</div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Booking ID</TableHead>
              <TableHead>Ground</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Booking</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                <TableCell>{booking.time}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.bookingId}</TableCell>
                <TableCell>{booking.ground}</TableCell>
                <TableCell>
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                    booking.status === 'paid' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  )}>
                    {booking.status === 'unpaid' ? 'Unpaid' : 'Paid'}
                  </span>
                </TableCell>
                <TableCell>{booking.action || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingTable;
