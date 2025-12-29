BID Pharma Website - Deployment Instructions

BEFORE DEPLOYMENT:

1. REPLACE THESE LINKS:
   - In index.html: Replace "https://your-razorpay-payment-link.com" with your actual Razorpay payment link
   - In contact.html: Replace "YOUR_EMAIL_HERE" with your FormSubmit email

2. ADD YOUR PDF FILES:
   - Place your demo PDF in: assets/demo-notes.pdf
   - Place your main notes PDF in: assets/pharmacognosy-notes.pdf

3. UPDATE POLICY DATES:
   - Update "Last updated" dates in policy pages

4. UPDATE CONTACT INFO:
   - Update email in contact.html and policy pages

DEPLOYMENT OPTIONS:

Option A: GitHub Pages (Free)
   1. Create GitHub repository
   2. Upload all files
   3. Go to Settings > Pages
   4. Select main branch as source
   5. Your site will be at: https://username.github.io/repository-name

Option B: Netlify (Free)
   1. Drag and drop folder to Netlify
   2. Your site will be at: random-name.netlify.app
   3. Add custom domain if needed

Option C: Vercel (Free)
   1. Import Git repository
   2. Deploy with default settings

IMPORTANT NOTES:
- Keep PDF files under 10MB for better loading
- Test payment flow before sharing
- Check all links work
- Test on mobile devices

SUPPORT:
For any issues, check:
1. Browser console for errors
2. PDF file paths are correct
3. Payment link is working
4. FormSubmit email is verified

WEBSITE FEATURES:
- Mobile responsive
- No backend required
- Simple localStorage for access control
- Basic PDF protection
- Clean, student-friendly design
