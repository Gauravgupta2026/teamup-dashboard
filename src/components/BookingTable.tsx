
import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';

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
  isLoading?: boolean;
}

const BookingTable: React.FC<BookingTableProps> = ({ bookings, isLoading = false }) => {
  const [cancelBookingId, setCancelBookingId] = useState<string | null>(null);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleCancelClick = (bookingId: string) => {
    setCancelBookingId(bookingId);
    setShowCancelDialog(true);
  };

  const confirmCancel = () => {
    toast({
      title: "Booking cancelled",
      description: `Booking ${cancelBookingId} has been cancelled`,
      variant: "destructive"
    });
    setShowCancelDialog(false);
  };

  const handleReschedule = (bookingId: string) => {
    toast({
      title: "Reschedule initiated",
      description: `You can now reschedule booking ${bookingId}`,
    });
  };

  return (
    <div className="animate-slide-up">
      <div className="text-xl font-semibold mb-4">Team Up Pvt. Ltd.</div>
      
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-14 w-full" />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Time
                  </div>
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead className={isMobile ? "hidden md:table-cell" : ""}>Booking ID</TableHead>
                <TableHead className={isMobile ? "hidden md:table-cell" : ""}>Ground</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking, index) => (
                <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium whitespace-nowrap">{booking.time}</TableCell>
                  <TableCell>
                    <div>
                      {booking.customer}
                      <div className="md:hidden text-xs text-gray-500">
                        ID: {booking.bookingId} • Ground: {booking.ground}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className={isMobile ? "hidden md:table-cell" : ""}>{booking.bookingId}</TableCell>
                  <TableCell className={isMobile ? "hidden md:table-cell" : ""}>{booking.ground}</TableCell>
                  <TableCell>
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                      booking.status === 'paid' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    )}>
                      {booking.status === 'unpaid' ? 'Unpaid' : 'Paid'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2 flex-wrap">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleReschedule(booking.bookingId)}
                        className="h-8 px-2 text-xs"
                      >
                        <Calendar className="h-3 w-3 mr-1" /> 
                        Reschedule
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => handleCancelClick(booking.bookingId)}
                        className="h-8 px-2 text-xs"
                      >
                        Cancel
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will cancel the booking {cancelBookingId}. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowCancelDialog(false)}>
              No, keep booking
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmCancel} className="bg-destructive text-destructive-foreground">
              Yes, cancel booking
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BookingTable;
