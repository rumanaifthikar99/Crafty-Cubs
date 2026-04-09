import { createClient } from '@supabase/supabase-js';

import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://khfhguigpjiybaggglcv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZmhndWlncGppeWJhZ2dnbGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzOTk1OTIsImV4cCI6MjA5MDk3NTU5Mn0.20N7zzuphvc2jEjRUnRPZruvqeEWfL9UqIwxeLno4sg'
);

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL || 'https://khfhguigpjiybaggglcv.supabase.co',
  process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZmhndWlncGppeWJhZ2dnbGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzOTk1OTIsImV4cCI6MjA5MDk3NTU5Mn0.20N7zzuphvc2jEjRUnRPZruvqeEWfL9UqIwxeLno4sg'
);

export const ALLOWED_EMAILS = [
  'rumanaifthikar99@gmail.com',
  'thamanamahuroof96@gmail.com',
];

export const USER_PROFILES = {
  'rumanaifthikar99@gmail.com': { name: 'Rumana', initial: 'R', color: '#F78C6B', bg: '#FEF0EB', role: 'Co-founder' },
  'thamanamahuroof96@gmail.com': { name: 'Thamana', initial: 'T', color: '#6EC5B8', bg: '#EBF8F6', role: 'Co-founder' },
};

export function getUserProfile(email) {
  return USER_PROFILES[email] || { name: email?.split('@')[0] || 'User', initial: '?', color: '#2E3A59', bg: '#EEF1F8', role: '' };
}
