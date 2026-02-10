# Web3Forms Setup Guide

Your contact form is configured to use **Web3Forms** (250 free submissions/month).

## Quick Setup (2 minutes)

### Step 1: Get Your Access Key
1. Go to https://web3forms.com
2. Enter your email address (where you want to receive quote requests)
3. Click "Get Access Key"
4. Check your email and copy the access key

### Step 2: Update the Website
1. Open `/Users/cloudwalker/dev/mav/index.html`
2. Find this line (around line 608):
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key
4. Save the file

### Step 3: Deploy
After updating the access key, deploy to Cloudflare Pages (see CLOUDFLARE_DEPLOY.md)

## What You'll Receive

When someone submits the quote form, you'll get an email with:
- **Name**
- **Phone** (required)
- **Email** (required)
- **Service Interested In** (Light Interior, Exterior, Deep Interior, Full Detail, Premium)
- **Vehicle** (Year, Make, Model)
- **Message** (Special requests, preferred date/time)
- **Discount Qualification** (Military/First Responder/Elderly)

## Email Example

```
Subject: New Quote Request from Mav's Mobile Detailing

Name: John Smith
Phone: (555) 123-4567
Email: john@example.com
Service: Full Detail - $150
Vehicle: 2022 Ford F-150
Message: Would like service next Tuesday afternoon if possible
Discount: military
```

## Features Included

✅ **Spam Protection** - Built-in honeypot and bot detection
✅ **Email Notifications** - Instant notification to your email
✅ **Mobile Optimized** - Works perfectly on all devices
✅ **No Branding** - Clean emails without Web3Forms branding
✅ **Free Forever** - 250 submissions/month on free plan

## Upgrade Options (Optional)

If you get more than 250 quote requests per month:
- **Pro Plan**: $4.99/month - 1,000 submissions
- **Business Plan**: $9.99/month - 5,000 submissions

For most new mobile detailing businesses, the free plan is sufficient.

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify access key is correct
- Confirm email address in Web3Forms dashboard

**Form not submitting?**
- Check browser console for errors
- Ensure access key is replaced (not "YOUR_WEB3FORMS_ACCESS_KEY")
- Test with a different browser

## Alternative: Even Simpler Option

If you want **zero setup** and don't want to get an access key:

1. Change line 607 to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
   ```
2. Replace `YOUR_EMAIL@example.com` with your actual email
3. Submit a test form to verify your email (one-time confirmation)
4. Done! Completely free, unlimited submissions

**Note:** Formsubmit has no dashboard, submissions go straight to email only.
