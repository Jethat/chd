import { BookMarked, GraduationCap, Landmark, Library, Presentation, Trophy, type LucideIcon } from "lucide-react";

export interface Scheme { title: string; href: string; icon: LucideIcon }
export interface LinkItem { title: string; href: string; external?: boolean }

export const schemes: Scheme[] = [
  { title: "Correspondence Courses", href: "#", icon: GraduationCap },
  { title: "Grants", href: "#", icon: Landmark },
  { title: "Vistar", href: "#", icon: Presentation },
  { title: "Kosh", href: "#", icon: BookMarked },
  { title: "Bhasha, Varsiki & Sahityamala", href: "#", icon: Library },
  { title: "Puraskar Yojna", href: "#", icon: Trophy },
];

export const importantLinks: LinkItem[] = [
  { title: "Ministry of Education", href: "https://www.education.gov.in", external: true },
  { title: "Central Hindi Directorate", href: "#" }, // replace with the correct URL
  { title: "Commission for Scientific and Technical Terminology", href: "https://www.cstt.education.gov.in", external: true },
  { title: "Pgportal", href: "https://pgportal.gov.in", external: true },
];

export const downloads: LinkItem[] = [
  { title: "Application Form For Non-Hindi Speaking Neo Hindi Writer Camp", href: "#", external: true },
  { title: "Application Form For Research Student Travel Grant", href: "#", external: true },
  { title: "Application form for Scheme of financial assistance to Publications in Hindi", href: "#", external: true },
  { title: "Extension Application Form", href: "#", external: true },
];