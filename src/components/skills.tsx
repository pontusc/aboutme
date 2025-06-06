import styled from "styled-components";

type Skill = {
  label: string;
  type: "language" | "tool";
};

const skills: Skill[] = [
  { label: "C#", type: "language" },
  { label: "Java", type: "language" },
  { label: "Python", type: "language" },
  { label: "Bash", type: "language" },
  { label: "SQL", type: "language" },
  { label: "C++", type: "language" },
  { label: "Go", type: "language" },
  { label: "C", type: "language" },
  { label: "Lua", type: "language" },
  { label: "Git", type: "tool" },
  { label: "Linux", type: "tool" },
  { label: "Docker", type: "tool" },
  { label: "GitHub Actions", type: "tool" },
  { label: "GitLab Pipelines", type: "tool" },
  { label: "Kubernetes", type: "tool" },
  { label: "ArgoCD", type: "tool" },
  { label: "K3S", type: "tool" },
];

const SkillsContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;

  * ul {
    list-style-position: inside;
    padding-inline-start: 6px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media (max-width: 600px) {
    width: 100%;
  }

  * li {
    padding-bottom: 4px;
  }
`;

export const Skills = () => {
  const languages = skills
    .filter((skill) => skill.type === "language")
    .sort((a, b) => a.label.localeCompare(b.label));

  const tools = skills
    .filter((skill) => skill.type === "tool")
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <SkillsContainer>
      <Skill>
        <h3>Languages</h3>
        <ul>
          {languages.map((lang) => (
            <li>{lang.label}</li>
          ))}
        </ul>
      </Skill>

      <Skill>
        <h3>Tools</h3>
        <ul>
          {tools.map((lang) => (
            <li>{lang.label}</li>
          ))}
        </ul>
      </Skill>
    </SkillsContainer>
  );
};
