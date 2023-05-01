
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dfbjbyjzsfrypaymxtau.supabase.co';
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmYmpieWp6c2ZyeXBheW14dGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MjU0NjcsImV4cCI6MTk5NDQwMTQ2N30.YopGD6EjkM7QL8kgYe4H98geE2YjFztiTj65MhpQ3Dc;
const supabase = createClient(supabaseUrl, supabaseKey);

