import {
  BookMarked,
  GraduationCap,
  Landmark,
  Library,
  Presentation,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export interface Scheme {
  id: string;
  number: string;
  title: string;
  titleHi: string;
  description: string;
  tag: string;
  beneficiaries: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

export interface LinkItem {
  title: string;
  titleHi?: string;
  href: string;
  external?: boolean;
  tag?: string;
  desc?: string;
}

export interface DownloadItem {
  title: string;
  titleHi?: string;
  href: string;
  fileType: "PDF" | "DOC";
  fileSize: string;
  formNo?: string;
}

export const schemes: Scheme[] = [
  {
    id: "correspondence",
    number: "01",
    title: "Correspondence Courses",
    titleHi: "पत्राचार पाठ्यक्रम योजना",
    description: "Certificate, Diploma, and Advanced Diploma courses in Hindi conducted through 14 regional and foreign media languages for non-Hindi speakers.",
    tag: "Education & Literacy",
    beneficiaries: "Non-Hindi speakers & Overseas students",
    href: "https://www.chd.education.gov.in/en/correspondence-courses",
    icon: GraduationCap,
    color: "from-amber-500 to-amber-700",
  },
  {
    id: "grants",
    number: "02",
    title: "Grants & Financial Assistance",
    titleHi: "वित्तीय सहायता एवं अनुदान",
    description: "Financial aid to Voluntary Hindi Organizations (VHOs) and publishers for promoting Hindi and bringing out valuable literary manuscripts.",
    tag: "Financial Support",
    beneficiaries: "VHOs, NGOs, Authors & Publishers",
    href: "https://www.chd.education.gov.in/en/grants",
    icon: Landmark,
    color: "from-emerald-500 to-emerald-700",
  },
  {
    id: "vistar",
    number: "03",
    title: "Vistar (Extension Programmes)",
    titleHi: "विस्तार कार्यक्रम योजना",
    description: "Neo-Hindi Writers' Camps (Shivir), educational study tours for non-Hindi speaking students, and academic lecture exchange visits.",
    tag: "Outreach & Camps",
    beneficiaries: "Emerging authors, Research scholars & Students",
    href: "https://www.chd.education.gov.in/en/vistar",
    icon: Presentation,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "kosh",
    number: "04",
    title: "Kosh (Lexicographical Dictionaries)",
    titleHi: "कोश निर्माण योजना",
    description: "Compilation and publication of bilingual, trilingual, and multilingual dictionaries and conversational guides covering 22 Scheduled Indian languages.",
    tag: "Linguistics & Lexicography",
    beneficiaries: "Scholars, Translators, Libraries & Public",
    href: "https://www.chd.education.gov.in/en/kosh",
    icon: BookMarked,
    color: "from-rose-500 to-rose-700",
  },
  {
    id: "bhasha",
    number: "05",
    title: "Bhasha, Varsiki & Sahityamala",
    titleHi: "भाषा, वार्षिकी एवं साहित्यमाला",
    description: "Publication of prestigious bi-monthly research journal 'Bhasha', annual reviews, and national anthologies representing composite Indian literature.",
    tag: "Research & Publishing",
    beneficiaries: "Literary critics, Academicians & Readers",
    href: "https://www.chd.education.gov.in/en/bhasha-varsiki-sahityamala",
    icon: Library,
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "puraskar",
    number: "06",
    title: "Puraskar Yojna (National Awards)",
    titleHi: "राष्ट्रीय पुरस्कार योजनाएं",
    description: "Conferring Hinditarbhashi Hindi Lekhak Puraskar and Shiksha Puraskar with cash rewards and citations honoring outstanding original Hindi creations.",
    tag: "Honours & Awards",
    beneficiaries: "Writers from non-Hindi mother tongues",
    href: "https://www.chd.education.gov.in/en/puraskar-yojna",
    icon: Trophy,
    color: "from-yellow-500 to-amber-600",
  },
];

export const importantLinks: LinkItem[] = [
  {
    title: "Ministry of Education",
    titleHi: "शिक्षा मंत्रालय, भारत सरकार",
    href: "https://www.education.gov.in",
    external: true,
    tag: "Parent Ministry",
  },
  {
    title: "Commission for Scientific & Technical Terminology (CSTT)",
    titleHi: "वैज्ञानिक तथा तकनीकी शब्दावली आयोग",
    href: "https://www.cstt.education.gov.in",
    external: true,
    tag: "Sister Commission",
  },
  {
    title: "CPGRAMS Public Grievance Portal",
    titleHi: "केंद्रीकृत लोक शिकायत निवारण प्रणाली",
    href: "https://pgportal.gov.in",
    external: true,
    tag: "Govt Portal",
  },
  {
    title: "National Portal of India",
    titleHi: "भारत का राष्ट्रीय पोर्टल (india.gov.in)",
    href: "https://www.india.gov.in",
    external: true,
    tag: "Govt of India",
  },
  {
    title: "Central Hindi Directorate Publications",
    titleHi: "केंद्रीय हिंदी निदेशालय प्रकाशन ई-पोर्टल",
    href: "http://www.chdpublication.education.gov.in",
    external: true,
    tag: "Publications",
  },
  {
    title: "Employees Corner & Circulars",
    titleHi: "कर्मचारी कॉर्नर एवं विभागीय परिपत्र",
    href: "/employees-corner",
    external: false,
    tag: "Internal",
  },
];

export const downloads: DownloadItem[] = [
  {
    title: "Application Form For Neo-Hindi Writers Camp (Shivir)",
    titleHi: "नवलेखक शिविर आवेदन प्रपत्र",
    href: "https://www.chd.education.gov.in/en/application-form-non-hindi-speaking-neo-hindi-writer-camp-0",
    fileType: "PDF",
    fileSize: "245 KB",
    formNo: "CHD-SHIVIR-01",
  },
  {
    title: "Application Form For Research Student Travel Grant",
    titleHi: "शोध छात्र यात्रा अनुदान आवेदन प्रपत्र",
    href: "https://www.chd.education.gov.in/en/application-form-research-student-travel-grant-0",
    fileType: "PDF",
    fileSize: "190 KB",
    formNo: "CHD-TRAVEL-02",
  },
  {
    title: "Financial Assistance for Hindi Publications / Manuscripts",
    titleHi: "पांडुलिपि प्रकाशन वित्तीय सहायता प्रपत्र",
    href: "https://www.chd.education.gov.in/en/application-form-scheme-financial-assistance-publications-hindi",
    fileType: "PDF",
    fileSize: "320 KB",
    formNo: "CHD-PUB-03",
  },
  {
    title: "Financial Assistance for Voluntary Hindi Organisations (VHOs)",
    titleHi: "स्वैच्छिक हिंदी संस्था अनुदान प्रपत्र",
    href: "https://www.chd.education.gov.in/en/application-form-scheme-financial-assistance-voluntary-hindi-organization",
    fileType: "PDF",
    fileSize: "410 KB",
    formNo: "CHD-VHO-04",
  },
  {
    title: "Extension & Renewal Application Form",
    titleHi: "नवीनीकरण / विस्तार आवेदन प्रपत्र",
    href: "https://www.chd.education.gov.in/en/extension-application-form",
    fileType: "PDF",
    fileSize: "180 KB",
    formNo: "CHD-EXT-05",
  },
];