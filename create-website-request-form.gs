/**
 * Website Request Form — Generic Intake
 * Auto-creates a high-level Google Form to accept website creation requests.
 *
 * HOW TO USE:
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Delete existing code, paste this entire script
 * 4. Click "Run" (▶️) → Select "createWebsiteRequestForm"
 * 5. First time: authorize access when prompted
 * 6. Check the "Execution Log" — it will print your form EDIT and VIEW URLs
 * 7. Share the VIEW (live) URL wherever you want to receive requests
 */

function createWebsiteRequestForm() {
  var form = FormApp.create("Website Request Form");
  
  form.setDescription(
    "Tell us about the website you need. Keep it as brief or as detailed as you like — " +
    "a rough idea is perfectly fine, we'll take it from there.\n\n" +
    "You can attach files if prompted, and use the final section for any extra notes, " +
    "documents, or references."
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  
  // ============================
  // SECTION 1: About You
  // ============================
  form.addSectionHeaderItem()
    .setTitle("About You")
    .setHelpText("So we know who we're talking to and how to reach you.");
  
  form.addTextItem()
    .setTitle("Your name")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("Organization / business name (if any)")
    .setRequired(false);
  
  form.addTextItem()
    .setTitle("Email address")
    .setRequired(true);
  
  form.addTextItem()
    .setTitle("Phone / WhatsApp (optional)")
    .setRequired(false);
  
  // ============================
  // SECTION 2: The Basics
  // ============================
  form.addPageBreakItem()
    .setTitle("The Basics")
    .setHelpText("A quick overview of what you're looking for.");
  
  form.addTextItem()
    .setTitle("In one line, what kind of website do you need?")
    .setHelpText("e.g., \"A simple website for my CA firm\" or \"An online store for handmade jewellery\"")
    .setRequired(true);
  
  var typeItem = form.addCheckboxItem()
    .setTitle("Which of these best describes it? (select all that apply)")
    .setRequired(false);
  typeItem.setChoices([
    typeItem.createChoice("Business / company website"),
    typeItem.createChoice("Personal / portfolio website"),
    typeItem.createChoice("E-commerce / online store"),
    typeItem.createChoice("Landing page / promotional site"),
    typeItem.createChoice("Blog / content site"),
    typeItem.createChoice("Web app / portal with login"),
    typeItem.createChoice("Redesign of an existing website"),
    typeItem.createChoice("Not sure yet")
  ]);
  
  form.addParagraphTextItem()
    .setTitle("What is the main goal of this website?")
    .setHelpText("e.g., attract enquiries, sell products, build credibility, share information")
    .setRequired(false);
  
  // ============================
  // SECTION 3: Content & Features
  // ============================
  form.addPageBreakItem()
    .setTitle("Content & Features")
    .setHelpText("Rough ideas are enough here — nothing is set in stone.");
  
  form.addParagraphTextItem()
    .setTitle("Roughly, how many pages/sections do you have in mind?")
    .setHelpText("e.g., Home, About, Services, Contact — or just \"a single page\"")
    .setRequired(false);
  
  var featureItem = form.addCheckboxItem()
    .setTitle("Any features you think you might need? (select all that apply)")
    .setRequired(false);
  featureItem.setChoices([
    featureItem.createChoice("Contact / enquiry form"),
    featureItem.createChoice("WhatsApp or chat button"),
    featureItem.createChoice("Photo gallery / portfolio"),
    featureItem.createChoice("Booking or appointment links"),
    featureItem.createChoice("Payment collection"),
    featureItem.createChoice("Multi-language support"),
    featureItem.createChoice("Blog / news section"),
    featureItem.createChoice("Login / member area"),
    featureItem.createChoice("Nothing specific — you suggest"),
    featureItem.createChoice("Not sure yet")
  ]);
  
  form.addParagraphTextItem()
    .setTitle("Do you already have content ready?")
    .setHelpText("e.g., logo, text, images — or do you need help creating them?")
    .setRequired(false);
  
  form.addParagraphTextItem()
    .setTitle("Where should contact-form enquiries be delivered?")
    .setHelpText(
      "Your website's contact form will collect visitor submissions. Where should they land?\n" +
      "e.g., an email address, a WhatsApp number, or a Google Sheet " +
      "(share the Sheet link — it must be viewable/editable by anyone with the link).\n" +
      "Not sure? Leave blank — we'll set up a Google Sheet for you by default."
    )
    .setRequired(false);
  
  form.addParagraphTextItem()
    .setTitle("Payment gateway / UPI details (if you need to collect payments)")
    .setHelpText(
      "If the website should accept online payments, mention what you already have:\n" +
      "• UPI ID (e.g., yourname@bank)\n" +
      "• Payment gateway account (Razorpay / Cashfree / PayU / Stripe — mention the business name)\n" +
      "• Booking/payment links (Cal.com, Calendly, etc.)\n\n" +
      "⚠️ Never share secret keys, passwords, or API credentials here — we'll set those up " +
      "securely and directly with you. Don't need payments? Leave blank."
    )
    .setRequired(false);
  
  // ============================
  // SECTION 4: Look, References & Timeline
  // ============================
  form.addPageBreakItem()
    .setTitle("Look, References & Timeline")
    .setHelpText("Help us understand your taste and expectations.");
  
  form.addParagraphTextItem()
    .setTitle("Websites you like (paste links)")
    .setHelpText("Even if they're in a different industry — tell us what you like about them. " +
      "If you have an existing/old website, include its link here too.")
    .setRequired(false);
  
  form.addParagraphTextItem()
    .setTitle("Colors, style, or feel you want (optional)")
    .setHelpText("e.g., \"clean and professional\", \"bold and modern\", or brand colors if you have them")
    .setRequired(false);
  
  var timelineItem = form.addMultipleChoiceItem()
    .setTitle("How soon do you need it?")
    .setRequired(false);
  timelineItem.setChoices([
    timelineItem.createChoice("As soon as possible"),
    timelineItem.createChoice("Within a month"),
    timelineItem.createChoice("1–3 months"),
    timelineItem.createChoice("No fixed deadline"),
    timelineItem.createChoice("Just exploring for now")
  ]);
  
  var budgetItem = form.addMultipleChoiceItem()
    .setTitle("Do you have a budget range in mind? (optional)")
    .setRequired(false);
  budgetItem.setChoices([
    budgetItem.createChoice("Under ₹10,000"),
    budgetItem.createChoice("₹10,000 – ₹30,000"),
    budgetItem.createChoice("₹30,000 – ₹75,000"),
    budgetItem.createChoice("Above ₹75,000"),
    budgetItem.createChoice("Prefer to discuss"),
    budgetItem.createChoice("Not sure")
  ]);
  
  // ============================
  // SECTION 5: Additional Details
  // ============================
  form.addPageBreakItem()
    .setTitle("Additional Details")
    .setHelpText("The free-space section — write as much as you need.");
  
  form.addParagraphTextItem()
    .setTitle("Anything else we should know?")
    .setHelpText("Detailed writeup, specific instructions, do's and don'ts, deadlines, " +
      "domain names you already own — anything at all. This is the best place to give us " +
      "full context in your own words.")
    .setRequired(false);
  
  form.addFileUploadItem()
    .setTitle("Attach files (optional)")
    .setHelpText(
      "Anything that helps us understand your brand and requirements, e.g.:\n" +
      "• Logo (any format — PNG, JPG, PDF, or even a photo)\n" +
      "• Brand colors / color palette\n" +
      "• Business cards, letterheads, or brochures\n" +
      "• Documents describing your services or content\n" +
      "• Screenshots or exports of your old website\n" +
      "• Reference images or mood boards\n\n" +
      "Don't have these yet? No problem — just skip this.\n" +
      "(If your old site is still online, mention its link in the question above instead.)"
    )
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
  Logger.log("🔗 Share this link to receive requests:");
  Logger.log(viewUrl);
  Logger.log("");
  Logger.log("💡 TIP: To get notified of new requests, open the Edit link above →");
  Logger.log("   ⚙️ Settings → 'Get email notifications for new responses'");
}
