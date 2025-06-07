import styled from "styled-components";

type Project = {
  title: string;
  description: string;
  url?: string;
};

const projects: Project[] = [
];

const ProjectsContainer = styled.div`
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

const Project = styled.div`
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

export const Projects = () => {
  const languages = Projects
    .filter((Project) => skill.type === "language")
    .sort((a, b) => a.label.localeCompare(b.label));

  const tools = Projects
    .filter((Project) => skill.type === "tool")
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <ProjectsContainer>
      <Project>
        <h3>Languages</h3>
        <ul>
          {languages.map((lang) => (
            <li>{lang.label}</li>
          ))}
        </ul>
      </Project>

      <Project>
        <h3>Tools</h3>
        <ul>
          {tools.map((lang) => (
            <li>{lang.label}</li>
          ))}
        </ul>
      </Project>
    </ProjectsContainer>
  );
};
