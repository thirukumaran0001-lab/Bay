import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  company_name: string;
  contact_name: string;
  email: string;
  phone?: string;
  message?: string;
}

export async function submitContactForm(data: ContactSubmission) {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
}
