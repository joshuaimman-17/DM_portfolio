export type Work = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
};

export const works: Work[] = [
  {
    slug: "project-one",
    title: "Project One",
    category: "Web App",
    summary: "Short placeholder summary for project one.",
    description:
      "Longer placeholder description. Replace this with the problem, your role, the tech stack and the result.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Branding",
    summary: "Short placeholder summary for project two.",
    description:
      "Longer placeholder description. Replace this with the problem, your role, the tech stack and the result.",
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "Mobile",
    summary: "Short placeholder summary for project three.",
    description:
      "Longer placeholder description. Replace this with the problem, your role, the tech stack and the result.",
  },
];

export const getWorks = async () => works;

export const getWork = async (slug: string) =>
  works.find((w) => w.slug === slug) ?? null;