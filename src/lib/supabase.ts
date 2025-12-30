import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  company_name: string;
  contact_name: string;
  email: string;
  phone?: string;
  message?: string;
}

export async function submitContactForm(data: ContactSubmission) {
  const cleanData: any = {
    company_name: data.company_name,
    contact_name: data.contact_name,
    email: data.email,
  };

  if (data.phone) cleanData.phone = data.phone;
  if (data.message) cleanData.message = data.message;

  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert(cleanData)
    .select()
    .single();

  if (error) {
    console.error('Supabase error:', error);
    throw error;
  }
  return result;
}
