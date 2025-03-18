
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Metrics } from '@/types/supabase';

export function useMetrics() {
  return useQuery({
    queryKey: ['metrics'],
    queryFn: async (): Promise<Metrics | null> => {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      
      if (error && error.code !== 'PGRST116') { // PGRST116 is the error when no rows returned
        console.error('Error fetching metrics:', error);
        throw new Error(error.message);
      }
      
      return data || null;
    }
  });
}
