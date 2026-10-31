export const footerInfo = {
  name: "Central Hindi Directorate",
  note: "Content on this website is published and managed by Central Hindi Directorate, Ministry of Education (Department of Higher Education).",
  query: "For any query regarding this website, please contact the web information manager: Director",
  phone: "011-20862356",
  address: "Central Hindi Directorate, West Block-VII, Ramakrishna Puram, New Delhi-110066",
  emails: ["dirchd-mhrd[at]gov[dot]in", "aro-chd[dot]edu[at]nic[dot]in", "patodirectorchd[at]gmail[dot]com"],
  visitors: 951703,
  lastUpdated: "30-10-2026 8:31 pm",
  since: 2019,
};

export interface FooterLink { label: string; href: string }

// Replace "#" with the real page URLs
export const policyLinks: FooterLink[] = [
  { label: "Accessibility Statement", href: "#" },
  { label: "Copyright Policy", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Site Map", href: "#" },
  { label: "Feedback", href: "#" },
];

export const infoLinks: FooterLink[] = [
  { label: "Hyperlink Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Help", href: "#" },
];

// Put the four badge images in public/images/badges/
export const badges = [
  { src: "/images/badges/w3c-css.png", alt: "W3C CSS validated" },
  { src: "/images/badges/w3c-wcag2.png", alt: "W3C WAI-AA WCAG 2.0" },
  { src: "/images/badges/achecker.png", alt: "AChecker WCAG 1-A" },
  { src: "/images/badges/certification.png", alt: "Certification badge" }, // rename to the real certification
];