
export interface Profile {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  created_at: string;
}

export interface Tournament {
  id: string;
  name: string;
  logo_url: string | null;
  date: string;
  gradient_class: string | null;
  created_at: string;
}

export interface Match {
  id: string;
  type: 'live' | 'next' | 'upcoming';
  player: string;
  time: string;
  team: number;
  ground: string;
  status: 'paid' | 'unpaid';
  score_player: number;
  score_opponent: number;
  created_at: string;
}

export interface Booking {
  id: string;
  time: string;
  customer: string;
  booking_id: string;
  ground: string;
  status: 'paid' | 'unpaid';
  date: string;
  user_id: string | null;
  created_at: string;
}

export interface Metrics {
  id: string;
  total_clients_booked: number;
  total_revenue: number;
  total_matches_played: number;
  created_at: string;
}
