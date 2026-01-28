import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ContactSubmission {
  company_name: string;
  contact_name: string;
  email: string;
  phone?: string;
  message?: string;
}

export async function submitContactForm(data: ContactSubmission) {
  if (!supabase) {
    console.warn('Supabase is not configured. Skipping database save.');
    return;
  }

  const { error } = await supabase
    .from('contacts')
    .insert([
      {
        company_name: data.company_name,
        contact_name: data.contact_name,
        email: data.email,
        phone: data.phone || null,
        message: data.message || null
      }
    ]);

  if (error) {
    throw new Error(error.message);
  }
}
