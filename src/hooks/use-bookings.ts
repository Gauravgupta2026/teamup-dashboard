
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Booking } from '@/types/supabase';

export function useBookings(date: string) {
  return useQuery({
    queryKey: ['bookings', date],
    queryFn: async (): Promise<Booking[]> => {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('date', date)
        .order('time', { ascending: true });
      
      if (error) {
        console.error('Error fetching bookings:', error);
        throw new Error(error.message);
      }
      
      return data || [];
    }
  });
}

export function useRescheduleBooking() {
  return async (bookingId: string, newDate: string, newTime: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ 
          date: newDate,
          time: newTime
        })
        .eq('booking_id', bookingId);
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error rescheduling booking:', error);
      return { success: false, error };
    }
  };
}

export function useCancelBooking() {
  return async (bookingId: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('booking_id', bookingId);
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error cancelling booking:', error);
      return { success: false, error };
    }
  };
}
