# Product Requirements Document: MySalesBot Landing Page (v3.1)

## 1. Project Overview
* **Project Name:** MySalesBot Landing Page
* **Objective:** Create a high-converting, single-page marketing site for an AI-powered lead generation SaaS
* **Core Value Prop:** "Set it and forget it" B2B outreach with zero manual intervention

## 2. Visual Identity & UI/UX
* **Color Palette:** Primary color is **Blue**; Background is **Clean White**
* **Vibe:** High-end, professional SaaS aesthetic; minimalist with modern typography
* **Device Priority:** **Desktop-first** optimization; fully responsive
* **Floating Asset:** Company logo anchored to the **bottom-right**

## 3. Navigation
* **Fixed Navigation Bar:** Sticky header with brand name and navigation tabs
* **Navigation Tabs:**
  1. **Features** → Anchors to Section 2 (Product Demo)
  2. **Testimonials** → Anchors to Section 3 (Social Proof)
  3. **Pricing** → Anchors to Section 5 (Pricing)
  4. **FAQ** → Anchors to Section 6 (FAQ)
* **Behavior:** Smooth scroll to sections with active tab highlighting

---

## 4. Page Sections

### Section 1: Hero
* **Headline:** Automate Your Outreach. Multiply Your Leads.
* **Sub-headline:** The only end-to-end AI sales agent that finds leads and books meetings on autopilot. No manual searching, no LinkedIn logins, no account risk.
* **Primary Blue Button:** "Start Your 7-Day Free Trial" (Redirects to https://lead-gen-demo-five.vercel.app)

### Section 2: Product Demo (Features)
* **Element:** Centered HD video player container
* **Source:** Developer to use the specific **Doc Path** provided
* **Purpose:** Showcase product features and functionality

### Section 3: Social Proof (Stats & Reviews)

**Data Highlights (Counter-cards):**
* **500,000+** Leads Discovered
* **4,100+** Happy Users
* **35%** Avg. Reply Rate

**Testimonials:**
* Display format: "Wall of Love" grid featuring 4 customer reviews
* Layout: 2x2 grid on desktop, single column on mobile
* Components: 5-star ratings, customer quotes, author name, role, and company

**Example Review:**
> "I used to spend 10 hours a week on outreach. Now I just check my inbox for 'Yes' replies. It's like having a full-time SDR for the price of a coffee." — Sarah Chen, Founder, TechFlow

### Section 4: Why Us (Competitive Advantage)
* **True Autopilot (End-to-End):** AI handles discovery to outreach until positive replies
* **Zero Account Risk:** No LinkedIn login/password required
* **Hyper-Personalization:** AI crafts unique messages based on real-time lead activity

### Section 5: Pricing
| Plan | Price | Savings (vs. Weekly) |
| :--- | :--- | :--- |
| **Weekly** | $45 / week | - |
| **Monthly** | $99 / month | **Save ~45%** |
| **Yearly** | $599 / year | **Save ~75%** |

* **CTA Buttons:** Each plan includes "Get Started" button linking to demo
* **Highlight:** "Most Popular" badge on Monthly plan

### Section 6: FAQ
* **Format:** Accordion-style expandable questions
* **Questions:**
  * Classic automation vs MySalesBot: We are a true end-to-end agent
  * Who it is for: Busy founders and small sales teams
  * Safety advantage: No LinkedIn logging needed

---

## 5. SEO & GEO Optimization Requirements
* **Schema Markup:** Implement JSON-LD for "SoftwareApplication"
* **Semantic HTML:** Strict H1-H3 hierarchy for web crawlers
* **Global Performance:** Edge delivery via CDN for localized speed
* **Meta Tags:** Open Graph and Twitter card support
* **Structured Data:** AggregateRating and offers schema

## 6. Technical Requirements

### CTA Behavior
* **All CTA Buttons:** Redirect to **https://lead-gen-demo-five.vercel.app**
* **Target:** Open in new tab with security attributes
* **Buttons Include:**
  * Hero: "Start Your 7-Day Free Trial"
  * Pricing: "Get Started" (3 buttons, one per plan)

### Footer
* **Links:** Terms of Service, Privacy Policy, Contact Us
* **Copyright:** Current year with company name
* **Layout:** Centered on mobile, horizontal on desktop

### Additional Elements
* **Floating Logo:** Fixed position bottom-right corner with hover effect
* **Responsive Design:** Mobile-first with desktop optimization
* **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
