export interface Update {
  title: string;
  titleHi?: string;
  category?: "Admissions" | "Grants" | "Recruitment" | "Journals" | "Publications" | "Reports";
  refNo?: string;
  fileSize?: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  href: string;
  /** Opens in a new tab (use for PDFs and other websites) */
  external?: boolean;
  isNew?: boolean;
}

export const latestUpdates: Update[] = [
  {
    title: "Applications invited for correspondence courses in Hindi: Session 2026–27",
    titleHi: "पत्राचार पाठ्यक्रम (सत्र 2026-27) में प्रवेश हेतु आवेदन आमंत्रित",
    category: "Admissions",
    refNo: "CHD/CC/ADM/2026/112",
    fileSize: "PDF • 420 KB",
    date: "2026-10-28",
    href: "https://www.chd.mhrd.gov.in/onlinecc/",
    external: true,
    isNew: true,
  },
  {
    title: "Notice regarding financial assistance & grants under Voluntary Hindi Organisations scheme",
    titleHi: "स्वैच्छिक हिन्दी संस्थाओं को वित्तीय सहायता योजना के अंतर्गत सूचना",
    category: "Grants",
    refNo: "CHD/VHO/GRANTS/2026/89",
    fileSize: "PDF • 680 KB",
    date: "2026-10-22",
    href: "https://www.chd.education.gov.in/en/schemes",
    external: true,
    isNew: true,
  },
  {
    title: "Hindi Bhasha & Varsiki Research Journal: Call for academic contributions & essays",
    titleHi: "भाषा एवं वार्षिकी शोध पत्रिका हेतु शोध आलेख एवं निबंध आमंत्रण",
    category: "Journals",
    refNo: "CHD/PUB/BHASHA/2026/45",
    fileSize: "PDF • 310 KB",
    date: "2026-10-15",
    href: "https://www.chd.education.gov.in/en/bhasha-varsiki-sahityamala",
    external: true,
    isNew: true,
  },
  {
    title: "Recruitment notice: Engagement of Consultant & Research Associates on contract",
    titleHi: "भर्ती सूचना: संविदा आधार पर सलाहकार एवं शोध सहयोगियों का चयन",
    category: "Recruitment",
    refNo: "CHD/EST/RECT/2026/19",
    fileSize: "PDF • 520 KB",
    date: "2026-10-09",
    href: "https://www.chd.education.gov.in/en",
    external: true,
    isNew: false,
  },
  {
    title: "New publication released: Travel Hindi Conversation Guide across 14 Indian languages",
    titleHi: "नवीन प्रकाशन: 14 भारतीय भाषाओं में यात्रा हिन्दी वार्तालाप निर्देशिका",
    category: "Publications",
    refNo: "CHD/SLS/PUB/2026/04",
    fileSize: "Catalogue Edition",
    date: "2026-09-30",
    href: "/e-cart/book/9",
    external: false,
    isNew: false,
  },
  {
    title: "Annual Report 2025–26 of the Central Hindi Directorate submitted to Ministry of Education",
    titleHi: "केन्द्रीय हिन्दी निदेशालय का वार्षिक प्रतिवेदन 2025-26",
    category: "Reports",
    refNo: "CHD/RTI/ANNUAL/2026/01",
    fileSize: "PDF • 2.4 MB",
    date: "2026-09-18",
    href: "/rti-report",
    external: false,
    isNew: false,
  },
];