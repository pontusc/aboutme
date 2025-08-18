import styled from "styled-components";

type Project = {
  title: string;
  description: string;
  tools: string[];
  url?: string;
};

const projects: Project[] = [
  {
    title: "Homelab",
    description:
      "A homelab kubernetes cluster running on three nodes for me to test new tools and learn about server management, networking and Kubernetes GitOps.",
    tools: ["K3S", "Helm", "Docker", "GitHub Actions", "ArgoCD", "Traefik", "Longhorn", "Cert-manager", "Cloudflare"],
    url: "https://github.com/pontusc/homelab",
  },
  {
    title: "Fullstack .NET Application CI/CD",
    description:
      "A course project to create a CI/CD workflow using GitLab pipelines. Features containerization & deployment to Portainer.",
    tools: ["GitLab CI", "Docker", "Portainer"],
    url: "https://github.com/pontusc/devops-doe24/tree/main/pipeline-utilities",
  },
];

const ProjectsContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  flex-direction: column;

  @media (max-width: 600px) {
  }
`;

const Project = styled.div<{ $isClickable: boolean }>`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
  cursor: ${(props) => (props.$isClickable ? "pointer" : "default")};
  background-color: #2f2f2f;
  padding: 25px 30px;
  border-radius: 8px;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 600px) {
  }
`;

const ToolsParagraph = styled.p`
  margin-top: 20px;
`;

export const Projects = () => {
  const sortedProjects = projects.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const handleProjectClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <ProjectsContainer>
      {sortedProjects.map((project) => (
        <Project
          $isClickable={project.url !== undefined}
          onClick={() => handleProjectClick(project.url)}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.tools.length > 0 && (
            <ToolsParagraph>
              <strong>Tools: </strong>
              {project.tools.map(
                (tool, index) =>
                  `${tool}${index < project.tools.length - 1 ? ", " : ""}`
              )}
            </ToolsParagraph>
          )}
        </Project>
      ))}
    </ProjectsContainer>
  );
};
