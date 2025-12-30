/*
  # Create Contact Submissions Table

  ## Overview
  This migration creates a table to store contact form submissions from the Bay Aluminium landing page.

  ## Tables Created
  
  ### `contact_submissions`
  Stores all booking/contact form submissions with the following fields:
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `company_name` (text, required) - Name of the company submitting the form
  - `contact_name` (text, required) - Name of the contact person
  - `email` (text, required) - Email address for contact
  - `phone` (text, optional) - Phone number for contact
  - `message` (text, optional) - Additional message or requirements
  - `created_at` (timestamptz) - Timestamp of submission
  
  ## Security
  - Enable Row Level Security (RLS) on the table
  - Add policy to allow anonymous inserts (for public form submissions)
  - Add policy to allow authenticated users to read all submissions (for admin access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts for contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);