
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tournament } from '@/types/supabase';

export function useTournaments() {
  return useQuery({
    queryKey: ['tournaments'],
    queryFn: async (): Promise<Tournament[]> => {
      const { data, error } = await supabase
        .from('tournaments')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching tournaments:', error);
        throw new Error(error.message);
      }
      
      return data || [];
    }
  });
}
