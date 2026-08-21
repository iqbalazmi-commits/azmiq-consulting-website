export const CONTACT = {
  email: "support@azmiqconsulting.com",
  bookingSubject: "Free Consultation Request",
  bookingBody:
    "Hello Azmiq Consulting,\n\nI'd like to book a free consultation to discuss SAP solutions for my business.\n\nCompany:\nBrief requirement:\n",
  whatsappNumber: "447741856782",
  whatsappMessage:
    "Hi Azmiq Consulting, I'd like to know more about your SAP consulting services.",
  linkedinUrl: "https://www.linkedin.com/company/azmiqconsulting",
};

export const bookingMailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  CONTACT.bookingSubject
)}&body=${encodeURIComponent(CONTACT.bookingBody)}`;

export const whatsappLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage
)}`;
