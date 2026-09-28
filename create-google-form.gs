/**
 * GS Consultants — Client Information Request
 * Auto-creates a Google Form with all sections & questions.
 *
 * HOW TO USE:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Delete existing code, paste this entire script
 * 4. Click "Run" (▶️) → Select "createClientForm"
 * 5. First time: authorize access when prompted
 * 6. Check the "Execution Log" — it will print your form EDIT and VIEW URLs
 * 7. Share the VIEW (live) URL with your client
 */

function createClientForm() {
  var form = FormApp.create("GS Consultants — Website Launch: Client Information Request");
  
  form.setDescription(
    "Please fill in the details below so we can finalize and take your website live.\n\n" +
    "★ Fastest launch: Section 1 (Domain/Hosting) + Section 2 (Contact). " +
    "Everything else can be added after go-live."
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  
  // ============================
  // SECTION 1: Domain, DNS & Hosting
  // ============================
  form.addSectionHeaderItem()
    .setTitle("01  Domain, DNS & Hosting")
    .setHelpText("These details are needed before we can deploy your website.");
  
  form.addTextItem()
    .setTitle("1.1  Domain name")
    .setHelpText("e.g., gsconsultants.in or gsconsultants.com")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("1.2  Domain already registered? + Registrar name")
    .setHelpText("Yes/No — and if yes, which registrar? (GoDaddy / Namecheap / BigRock / Hostinger / Other)")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("1.3  Domain expiry / renewal date")
    .setHelpText("If already registered, when does it expire?")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("1.4  Other domains to redirect to main site")
    .setHelpText("e.g., .com redirecting to .in (leave blank if none)")
    .setRequired(false);
  
  var hostingItem = form.addMultipleChoiceItem()
    .setTitle("1.5  Hosting — what's your preference?")
    .setHelpText("If you already have hosting, let us know the provider below.")
    .setRequired(true);
  hostingItem.setChoices([
    hostingItem.createChoice("No hosting — use Managed Static (Vercel / Netlify) [Recommended]"),
    hostingItem.createChoice("No hosting — use cPanel / Shared (Hostinger / GoDaddy / BigRock)"),
    hostingItem.createChoice("Yes, I already have hosting (specify below)")
  ]);
  
  form.addTextItem()
    .setTitle("1.5a  Hosting provider / notes (if applicable)")
    .setHelpText("Mention your hosting provider name if you selected 'Yes' above.")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("1.6  Google Analytics 4 Measurement ID (Optional)")
    .setHelpText("If you have an existing GA4 property. Format: G-XXXXXXXXXX")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("1.7  Meta Pixel / WhatsApp Business verification? (Optional)")
    .setHelpText("Leave blank if not applicable.")
    .setRequired(false);
  
  // ============================
  // SECTION 2: Contact & Lead Capture
  // ============================
  form.addPageBreakItem()
    .setTitle("02  Contact & Lead Capture")
    .setHelpText("Required before go-live — these appear on your website and receive enquiries.");
  
  form.addTextItem()
    .setTitle("2.1  Where should contact-form submissions be delivered?")
    .setHelpText("Email address / WhatsApp number / CRM name")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("2.2  Official phone number(s) to display")
    .setHelpText("The number(s) visitors will call")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("2.3  WhatsApp number (for the floating chat button)")
    .setHelpText("Include country code, e.g., +91 XXXXXXXXXX")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("2.4  Public email address to display")
    .setHelpText("e.g., info@gsconsultants.in or contact@gsconsultants.in")
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle("2.5  Full office address (as it should appear on the site)")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("2.6  Google Map link / embed for your office")
    .setHelpText("Share the link from Google Maps for your office location")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("2.7  Office hours / working days")
    .setHelpText("e.g., Mon–Sat, 10 AM – 6 PM")
    .setRequired(true);
  
  // ============================
  // SECTION 3: Social & Profiles
  // ============================
  form.addPageBreakItem()
    .setTitle("03  Social & Profiles")
    .setHelpText("Optional — these will appear in the website footer.");
  
  form.addTextItem()
    .setTitle("3.1  Instagram URL")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("3.2  LinkedIn company page URL")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("3.3  Facebook URL")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("3.4  X (Twitter) URL")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("3.5  YouTube URL")
    .setRequired(false);
  
  // ============================
  // SECTION 4: Consultation & Payment
  // ============================
  form.addPageBreakItem()
    .setTitle("04  Consultation & Payment")
    .setHelpText("Optional — for booking links and payment collection if needed.");
  
  form.addTextItem()
    .setTitle("4.1  Consultation booking link")
    .setHelpText("Cal.com / Calendly / Razorpay payment link (leave blank if N/A)")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("4.2  Payment gateway / UPI ID")
    .setHelpText("If you'll collect paid consultation fees online")
    .setRequired(false);
  
  // ============================
  // DONE — Output Links
  // ============================
  var editUrl = form.getEditUrl();
  var viewUrl = form.getPublishedUrl();
  
  Logger.log("✅ Form created successfully!");
  Logger.log("");
  Logger.log("✏️  Edit this form (you):");
  Logger.log(editUrl);
  Logger.log("");
  Logger.log("🔗 Share this link with your client:");
  Logger.log(viewUrl);
  Logger.log("");
  Logger.log("💡 TIP: To send responses to an email, open the Edit link above →");
  Logger.log("   ⚙️ Settings → 'Get email notifications for new responses'");
}
