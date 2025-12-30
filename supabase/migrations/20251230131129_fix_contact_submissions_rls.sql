/*
  # Fix Contact Submissions RLS Policy
  
  ## Changes
  - Drop existing policy for anonymous inserts
  - Create new policy that allows public inserts (both anon and authenticated)
  - This ensures the contact form works for all users
*/

DROP POLICY IF EXISTS "Allow anonymous inserts for contact form" ON contact_submissions;

CREATE POLICY "Allow public inserts for contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);