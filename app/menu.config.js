export const MENU = [
  {
    label: "Home",
    href: "/",
    icon: "House",
    color: "#0EA5E9",
  },
  {
    label: "Services",
    icon: "BriefcaseBusiness",
    color: "#7C3AED",
    children: [
      {
        label: "Bioinformatics",
        href: "/services/bioinformatics",
        icon: "Dna",
        color: "#2563EB",
      },
      {
        label: "Wet Lab",
        icon: "FlaskConical",
        color: "#0891B2",
        children: [
          {
            label: "Biotech",
            href: "/services/wetlab/biotech",
            icon: "Microscope",
            color: "#1D4ED8",
          },
          {
            label: "Microbiology",
            href: "/services/wetlab/microbiology",
            icon: "Bug",
            color: "#059669",
          },
          {
            label: "Biochemistry",
            href: "/services/wetlab/biochemistry",
            icon: "Atom",
            color: "#7C3AED",
          },
          {
            label: "Food Technology",
            href: "/services/wetlab/food-technology",
            icon: "UtensilsCrossed",
            color: "#EA580C",
          },
          {
            label: "Environmental Science",
            href: "/services/wetlab/environmental-science",
            icon: "Leaf",
            color: "#16A34A",
          },
          {
            label: "Agriculture",
            href: "/services/wetlab/agriculture",
            icon: "Sprout",
            color: "#65A30D",
          },
          {
            label: "Immunology",
            href: "/services/wetlab/immunology",
            icon: "ShieldCheck",
            color: "#0D9488",
          },
          {
            label: "Bio Pharma",
            href: "/services/wetlab/bio-pharma",
            icon: "Pill",
            color: "#DB2777",
          },
          {
            label: "Nano Technology",
            href: "/services/wetlab/nano-technology",
            icon: "Cpu",
            color: "#4338CA",
          },
          {
            label: "Cell Culture",
            href: "/services/wetlab/cell-culture",
            icon: "Activity",
            color: "#DC2626",
          },
        ],
      }, 
       {
        label: "Scientific Writing",
        icon: "PenTool",
        color: "#B45309",
        children: [
          {
            label: "Thesis",
            href: "/services/scientific-writing/thesis",
            icon: "ScrollText",
            color: "#0F766E",
          },
          {
            label: "Dissertation",
            href: "/services/scientific-writing/dissertation",
            icon: "BookOpenText",
            color: "#1D4ED8",
          },
          {
            label: "Publication",
            href: "/services/scientific-writing/publication",
            icon: "FileText",
            color: "#9333EA",
          },
        ],
      },
      {
        label: "Data Analysis",
        href: "/services/data-analysis",
        icon: "BarChart3",
        color: "#0F766E",
      },
    ],
  },
  {
    label: "Trainings",
    icon: "GraduationCap",
    color: "#2563EB",
    children: [
      {
        label: "Short- modules and pictures ",
        href: "/trainings/short-modules",
        icon: "BookMarked",
        color: "#0891B2",
      },
      {
        label: "Long Training ",
        href: "/trainings/long-trainings",
        icon: "Presentation",
        color: "#7C3AED",
      },
    ],
  },
  {
    label: "R&D",
    href: "/research-and-development",
    icon: "FlaskRound",
    color: "#DB2777",
  },
  {
    label: "Study Abroad",
    href: "/study-abroad",
    icon: "Plane",
    color: "#0284C7",
  },
  {
    label: "Sequencing services",
    href: "/sequencing-services",
    icon: "Dna",
    color: "#4F46E5",
  },
  {
    label: "Seminars/Workshops",
    href: "/seminars",
    icon: "Presentation",
    color: "#EA580C",
  }, 
];
