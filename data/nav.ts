export interface NavLeaf {
  label: string;
  href: string;
  target?: "_blank" | "_self";
}

export interface NavChild {
  label: string;
  href: string;
  target?: "_blank" | "_self";
  children?: NavLeaf[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  /** Anchor the dropdown to the right edge (flyouts then open to the left). Use for items near the right side. */
  align?: "left" | "right";
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Organization Chart", href: "/about/organization-chart" },
      { label: "Duties and Responsibilities", href: "/about/duties-responsibilities" },
      { label: "Programme and Guidelines", href: "#" },
      { label: "Who's Who", href: "/about/team" },
      { label: "Ex-Directors", href: "/about/ex-directors" },
      { label: "Devanagari Lipi Tatha Hindi Vartani Manakikaran", href: "#" },
      { label: "Director Introduction", href: "#" },
    ],
  },
  { label: "Employees Corner", href: "/employees-corner" },
  {
    label: "Schemes",
    href: "#",
    children: [
      { label: "Schemes", href: "/schemes" },
      {
        label: "Correspondence Courses",
        href: "/schemes/correspondence-courses",
        // placeholder name, replace with the real item
        children: [{ label: "Online Correspondence Course", href: "#" }],
      },
      {
        label: "Grants",
        href: "/schemes/grants",
        // placeholder names, replace with the real items
        children: [
          { label: "Grant Guidelines", href: "#" },
          { label: "Grant Application", href: "#" },
        ],
      },
      { label: "Vistar", href: "/schemes/vistar" },
      { label: "Kosh", href: "/schemes/kosh" },
      { label: "Free Distribution, Exhibition and Sales", href: "#" },
      { label: "Bhasha Varsiki & Sahityamala", href: "#" },
      { label: "Coordination, RTI & Rajbhasha", href: "#" },
      { label: "Administration", href: "#" },
      { label: "Library", href: "#" },
      { label: "E-Governance", href: "#" },
      { label: "Free Distribution of Hindi Books / Magazines", href: "#" },
    ],
  },
  {
    label: "Downloads",
    href: "#",
    children: [{ label: "Applications & Forms of schemes", href: "/application-forms" }],
  },
  {
    label: "Gallery",
    href: "#",
    children: [
      { label: "Photo Gallery", href: "/photo-gallery" },
      { label: "Video Gallery", href: "#" },
      { label: "Hindi Bhashavani Youtube", href: "https://www.youtube.com/channel/UCDrHk49bdP2TG7HM08PFgVQ", target: "_blank", },
    ],
  },
  {
    label: "RTI",
    href: "#",
    children: [{ label: "Right to Information Report", href: "/rti-report" }],
  },
  {
    label: "FAQs",
    href: "#",
    children: [
      { label: "FAQs Recognition of Hindi Examinations", href: "#" },
      { label: "FAQs Correspondence Courses", href: "#" },
    ],
  },
  {
    label: "Notice Board",
    href: "#",
    align: "right",
    children: [
      { label: "Notice Board", href: "/notice" },
      { label: "News", href: "/notice/news" },
      { label: "Tenders", href: "/notice/tenders" },
      { label: "Recruitment", href: "#" },
      { label: "Circulars", href: "#" },
      { label: "E-magazine", href: "#" },
      { label: "Exam Result", href: "#" },
      {
        label: "Examination Paper",
        href: "#",
        // placeholder names, replace with the real items
        children: [
          { label: "Previous Year Papers", href: "#" },
          { label: "Sample Papers", href: "#" },
          { label: "Answer Keys", href: "#" },
        ],
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
  { label: "E-Cart", href: "/e-cart" },
];