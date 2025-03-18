
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Match } from '@/types/supabase';

export function useLiveMatches() {
  return useQuery({
    queryKey: ['matches', 'live'],
    queryFn: async (): Promise<Match[]> => {
      const { data, error } = await supabase
        .from('matches')
        .select('*')
        .eq('type', 'live')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching live matches:', error);
        throw new Error(error.message);
      }
      
      return data || [];
    }
  });
}
