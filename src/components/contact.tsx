import styled from "styled-components";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Source = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  padding: 10px;
  color: white;
  min-width: 100px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: transform 0.2s ease;

  &:hover {
    color: white;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Contact = () => {
  return (
    <Container>
      <Source href="https://github.com/pontusc">
        <GitHub />
        Github
      </Source>
      <Source href="https://www.linkedin.com/in/pontus-curtsson/">
        <LinkedIn />
        LinkedIn
      </Source>
      <Source href="mailto:pontuscurtsson@gmail.com">
        <Email />
        Mail
      </Source>
    </Container>
  );
};
