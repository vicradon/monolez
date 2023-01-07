import { Skill } from "./types";

export const isValidEmail = (email: string) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
};

export const groupSkills = (skills: Skill[]) => {
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc.includes(skill.skillCategory)) {
      acc.push(skill.skillCategory);
    }
    return acc;
  }, [] as string[]);

  const groupedSkills = skillCategories.map((category) => {
    const skillsInCategory = skills.filter(
      (skill) => skill.skillCategory === category
    );
    return {
      category,
      skills: skillsInCategory,
    };
  });

  return groupedSkills;
};

export const setRGBAIntensity = (color: string, amount: number) => {
  const colorValues = color.slice(5, -1).split(",");
  return `rgba(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}, ${amount})`;
};

export const camelCaseToSentenceCase = (str: string) => {
  return str.split("_").join(" ");
};
