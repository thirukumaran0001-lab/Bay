/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `company_name` (text, required) - Name of the company submitting the form
      - `contact_name` (text, required) - Name of the person submitting the form
      - `email` (text, required) - Email address of the contact
      - `phone` (text, optional) - Phone number of the contact
      - `message` (text, optional) - Additional message from the contact
      - `created_at` (timestamptz) - Timestamp of when the contact was submitted
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for public users to insert their contact information
    - Add policy for authenticated users to read all contacts (for admin purposes)
  
  3. Important Notes
    - This table stores contact form submissions
    - Public users can only insert data, not read or modify existing records
    - The table is designed to be Netlify-friendly for deployment
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);