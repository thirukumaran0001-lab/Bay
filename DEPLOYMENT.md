# Netlify Deployment Guide

This project is fully configured and ready for Netlify deployment.

## Pre-Deployment Checklist

- [x] Build configuration in `netlify.toml`
- [x] SPA routing configured with `_redirects` file
- [x] Environment variables handled gracefully
- [x] Contact form works with or without Supabase
- [x] Build tested and verified

## Deployment Steps

### 1. Push to Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
6. Click "Deploy site"

### 3. Configure Environment Variables (Optional)

The site will work without environment variables, but you won't have database storage for form submissions.

To enable database functionality:

1. Go to Site settings → Environment variables
2. Add the following variables:
   - `VITE_SUPABASE_URL` = Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = Your Supabase anonymous key
3. Trigger a new deploy to apply the changes

### 4. Verify Deployment

1. Visit your Netlify URL
2. Test the contact form
3. Check that navigation works correctly
4. Verify all pages load properly

## How It Works

### Graceful Degradation

The application is built to work in multiple scenarios:

1. **Full functionality** (with Supabase env vars):
   - Form submissions saved to database
   - Data sent to Make.com webhook

2. **Webhook-only mode** (without env vars):
   - Form submissions sent to Make.com webhook
   - No database storage (still fully functional)

### Contact Form Behavior

- Always sends data to Make.com webhook
- Attempts to save to Supabase if configured
- If Supabase fails, form still succeeds if webhook works
- User sees success message if at least one submission method works

## Troubleshooting

### Build Fails

- Check that Node version is 18 or higher
- Verify all dependencies are in package.json
- Review build logs in Netlify dashboard

### Routing Issues

- The `_redirects` file handles SPA routing
- All routes redirect to index.html with 200 status
- React Router handles client-side routing

### Form Not Working

- Check browser console for errors
- Verify Make.com webhook URL is correct
- Test with and without environment variables

## Custom Domain

To add a custom domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow Netlify's DNS configuration instructions

## Continuous Deployment

Netlify automatically rebuilds your site when you push to your Git repository:

- Push to main branch = automatic production deploy
- Push to other branches = deploy previews (if configured)
