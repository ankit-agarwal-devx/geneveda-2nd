export const MENU = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    children: [
      {
        label: "Bioinformatics",
        href: "/services/bioinformatics",
      },
      {
        label: "Wet Lab",
        children: [
          { label: "Biotech",  href: "/services/wetlab/biotech" },
          { label: "Microbiology", href: "/services/wetlab/microbiology" },
          { label: "Biochemistry", href: "/services/wetlab/biochemistry" },
          { label: "Food Technology", href: "/services/wetlab/food-technology" },
          { label: "Environmental Science", href: "/services/wetlab/environmental-science" },
          { label: "Agriculture", href: "/services/wetlab/agriculture" },
          { label: "Immunology", href: "/services/wetlab/immunology" },
          { label: "Bio Pharma", href: "/services/wetlab/bio-pharma" },
          { label: "Nano Technology", href: "/services/wetlab/nano-technology" },
          { label: "Cell Culture", href: "/services/wetlab/cell-culture" },
        ],
      }, 
       {
        label: "Scientific Writing",
        children: [
          { label: "Thesis",  href: "/services/scientific-writing/thesis" },
          { label: "Dissertation", href: "/services/scientific-writing/dissertation" },
          { label: "Publication", href: "/services/scientific-writing/publication" },
        ],
      },
      {
        label: "Data Analysis",
        href: "/services/data-analysis",
      },
    ],
  },
  {
    label: "Trainings",
    children: [
      {
        label: "Short- modules and pictures ",
        href: "/trainings/short-modules",
      },
      { label: "Long Training ", href: "/trainings/long-trainings" },
    ],
  },
  {
    label: "R&D",
    href: "/research-and-development",
  },
  {
    label: "Study Abroad",
    href: "/study-abroad",
  },
  {
    label: "Sequencing services",
    href: "/sequencing-services",
  },
  {
    label: "Seminars/Workshops",
    href: "/seminars",
  }, 
];
