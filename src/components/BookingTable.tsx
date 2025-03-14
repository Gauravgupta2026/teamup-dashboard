
import React from 'react';

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
        <table className="booking-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Customer</th>
              <th>Booking ID</th>
              <th>Ground</th>
              <th>Status</th>
              <th>Booking</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td>{booking.time}</td>
                <td>{booking.customer}</td>
                <td>{booking.bookingId}</td>
                <td>{booking.ground}</td>
                <td className={booking.status === 'unpaid' ? 'status-unpaid' : ''}>
                  {booking.status === 'unpaid' ? 'Unpaid' : 'Paid'}
                </td>
                <td>{booking.action || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingTable;
