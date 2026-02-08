# Email Gate Implementation Guide

## ✅ What Was Implemented

A **Phase 1 email gate** has been added to capture leads before redirecting to your product.

### Features

✅ **Modal popup** when user clicks "Start Free Trial" or "Get Started"  
✅ **Form validation** for email and name  
✅ **Low friction** - only email and name required (company optional)  
✅ **Professional UI** matching your brand design  
✅ **Mobile responsive** with smooth animations  
✅ **Lead capture** before product redirect  

---

## How It Works

### User Flow

1. User clicks "Start Your 7-Day Free Trial" (Hero) or "Get Started" (Pricing)
2. **Modal opens** with sign-up form
3. User enters:
   - ✅ Email (required)
   - ✅ Name (required)
   - ⚪ Company (optional)
4. Form validates input
5. On submit → **Lead is captured**
6. User is **redirected** to: `https://lead-gen-demo-five.vercel.app`

### Current Behavior

Currently, the lead data is:
- **Logged to console** (for testing)
- **Stored in localStorage** (temporary demo)

You need to integrate with an email service to actually capture and manage leads.

---

## Integration Options

### Option 1: Mailchimp (Recommended for Email Lists)

**Setup:**

1. Get your Mailchimp API key and list ID
2. Install Mailchimp SDK:
   ```bash
   npm install @mailchimp/mailchimp_marketing
   ```

3. Update `SignUpModal.jsx` in the `handleSubmit` function:

```javascript
// Add this import at top
import mailchimp from '@mailchimp/mailchimp_marketing'

// Configure (ideally in a separate config file)
mailchimp.setConfig({
  apiKey: 'YOUR_API_KEY',
  server: 'us1' // Your server prefix
})

// In handleSubmit, replace the TODO section with:
try {
  const response = await mailchimp.lists.addListMember('YOUR_LIST_ID', {
    email_address: formData.email,
    status: 'subscribed',
    merge_fields: {
      FNAME: formData.name.split(' ')[0],
      LNAME: formData.name.split(' ')[1] || '',
      COMPANY: formData.company
    }
  })
  
  // Redirect on success
  window.location.href = 'https://lead-gen-demo-five.vercel.app'
} catch (error) {
  console.error('Mailchimp error:', error)
  setErrors({ submit: 'Failed to sign up. Please try again.' })
}
```

---

### Option 2: ConvertKit (Great for Creators/SaaS)

**Setup:**

1. Get your ConvertKit API key and form ID
2. Update `SignUpModal.jsx`:

```javascript
// In handleSubmit:
try {
  const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: 'YOUR_API_KEY',
      email: formData.email,
      first_name: formData.name,
      fields: {
        company: formData.company
      }
    })
  })
  
  if (response.ok) {
    window.location.href = 'https://lead-gen-demo-five.vercel.app'
  }
} catch (error) {
  console.error('ConvertKit error:', error)
  setErrors({ submit: 'Failed to sign up. Please try again.' })
}
```

---

### Option 3: Your Own Backend

**Setup:**

1. Create an API endpoint (e.g., `/api/leads`)
2. Update `SignUpModal.jsx`:

```javascript
// In handleSubmit:
try {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    window.location.href = 'https://lead-gen-demo-five.vercel.app'
  } else {
    throw new Error('Failed to submit')
  }
} catch (error) {
  console.error('API error:', error)
  setErrors({ submit: 'Failed to sign up. Please try again.' })
}
```

**Example Backend (Node.js/Express):**

```javascript
app.post('/api/leads', async (req, res) => {
  const { email, name, company } = req.body
  
  // Save to database
  await db.leads.create({
    email,
    name,
    company,
    source: 'landing_page',
    created_at: new Date()
  })
  
  // Optionally send welcome email
  await sendWelcomeEmail(email, name)
  
  res.json({ success: true })
})
```

---

### Option 4: Google Sheets (Quick & Free)

**Setup:**

1. Use [Sheet.best](https://sheet.best) or Google Apps Script
2. Create a Google Sheet
3. Get the API endpoint from Sheet.best

```javascript
// In handleSubmit:
try {
  const response = await fetch('https://sheet.best/api/sheets/YOUR_SHEET_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      Email: formData.email,
      Name: formData.name,
      Company: formData.company,
      Timestamp: new Date().toISOString()
    })
  })
  
  if (response.ok) {
    window.location.href = 'https://lead-gen-demo-five.vercel.app'
  }
} catch (error) {
  console.error('Sheet error:', error)
  setErrors({ submit: 'Failed to sign up. Please try again.' })
}
```

---

### Option 5: Airtable (Database + CRM)

**Setup:**

1. Create Airtable base with fields: Email, Name, Company, Created
2. Get API key and base ID
3. Install Airtable SDK:
   ```bash
   npm install airtable
   ```

```javascript
import Airtable from 'airtable'

const base = new Airtable({ apiKey: 'YOUR_API_KEY' }).base('YOUR_BASE_ID')

// In handleSubmit:
try {
  await base('Leads').create([
    {
      fields: {
        Email: formData.email,
        Name: formData.name,
        Company: formData.company,
        Source: 'Landing Page',
        Created: new Date().toISOString()
      }
    }
  ])
  
  window.location.href = 'https://lead-gen-demo-five.vercel.app'
} catch (error) {
  console.error('Airtable error:', error)
  setErrors({ submit: 'Failed to sign up. Please try again.' })
}
```

---

## Environment Variables

**For security**, store API keys in environment variables:

1. Create `.env.local` file:
   ```
   VITE_MAILCHIMP_API_KEY=your_key_here
   VITE_MAILCHIMP_LIST_ID=your_list_id
   ```

2. Access in code:
   ```javascript
   const apiKey = import.meta.env.VITE_MAILCHIMP_API_KEY
   ```

3. Add `.env.local` to `.gitignore` (already done)

---

## Testing the Modal

1. **Start dev server**: `npm run dev`
2. **Click any CTA button** (Hero or Pricing)
3. **Modal opens** with form
4. **Fill in details** and submit
5. **Check console** for logged data
6. **Verify redirect** to product page

---

## Customization Options

### Change Form Fields

Edit `src/components/SignUpModal.jsx`:

```javascript
// Add new field to state
const [formData, setFormData] = useState({
  email: '',
  name: '',
  company: '',
  phone: '' // New field
})

// Add input in form:
<div className="form-group">
  <label htmlFor="phone" className="form-label">
    Phone Number <span className="optional">(optional)</span>
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    className="form-input"
    placeholder="+1 (555) 123-4567"
  />
</div>
```

### Change Redirect URL

In `SignUpModal.jsx`, line 65:
```javascript
window.location.href = 'https://your-new-url.com'
```

### Change Button Text

In `Hero.jsx` and `Pricing.jsx`:
```javascript
<SignUpModal 
  buttonText="Start Free Trial Now"
/>
```

### Styling

Edit `src/components/SignUpModal.css` to match your brand.

---

## Analytics Tracking

Add analytics events to track conversions:

```javascript
// In handleSubmit, before redirect:

// Google Analytics
if (window.gtag) {
  window.gtag('event', 'sign_up', {
    method: 'Email',
    event_category: 'Lead Capture'
  })
}

// Facebook Pixel
if (window.fbq) {
  window.fbq('track', 'Lead')
}

// Mixpanel
if (window.mixpanel) {
  window.mixpanel.track('Sign Up Started', {
    source: 'landing_page'
  })
}
```

---

## Next Steps

1. **Choose an email service** from options above
2. **Get API credentials** for that service
3. **Update SignUpModal.jsx** with integration code
4. **Test thoroughly** with real submissions
5. **Set up welcome email** sequence
6. **Monitor conversions** in your analytics

---

## Files Modified

- ✅ `src/components/SignUpModal.jsx` - New modal component
- ✅ `src/components/SignUpModal.css` - Modal styles
- ✅ `src/components/Hero.jsx` - Uses modal instead of direct link
- ✅ `src/components/Pricing.jsx` - Uses modal instead of direct link

---

## Deployment

After choosing your integration:

1. **Commit changes**:
   ```bash
   git add .
   git commit -m "Add email gate modal for lead capture"
   git push
   ```

2. **Deploy to Vercel** (auto-deploys from GitHub)

3. **Add environment variables** in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add your API keys

---

## Support & Further Reading

- [Mailchimp API Docs](https://mailchimp.com/developer/marketing/api/)
- [ConvertKit API Docs](https://developers.convertkit.com/)
- [Airtable API Docs](https://airtable.com/developers/web/api/introduction)
- [Sheet.best Docs](https://sheet.best/docs)

---

**Your email gate is now live!** Test it on your dev server and integrate with your preferred email service.
