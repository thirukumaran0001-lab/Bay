# Bay Aluminum

A modern aluminum alloy supplier website with integrated contact management.

## Deployment to Netlify

This project is fully configured for Netlify deployment.

### Quick Deploy

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select your repository
5. Netlify will automatically detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. (Optional) Add environment variables for database functionality
7. Click "Deploy site"
8. Your site will be live in minutes!

### Environment Variables

The application will work without environment variables, but form submissions will only be sent to the Make.com webhook.

For full functionality with database storage, add these environment variables in your Netlify dashboard under Site settings → Environment variables:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

If these variables are not set, the contact form will still work and send data to the webhook, but submissions won't be saved to the database.

### Build Configuration

The project uses Vite as the build tool. Build settings are configured in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

### Features

- Modern React + TypeScript application
- Supabase database integration for contact form submissions
- Responsive design with Tailwind CSS
- Single Page Application routing
- Contact form with dual submission (Supabase + Make.com webhook)

## Local Development

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Database

The project uses Supabase for database management. The contacts table stores all form submissions with Row Level Security enabled for data protection.
