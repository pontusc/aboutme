import profileImg from "../assets/profile_picture.jpg";
import styled from "styled-components";
import useIsMobile from "../utils";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 25px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TextContent = styled.div`
  width: 50%;
`;

const ImageContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10%;
  background-color: #2f2f2f;
  padding: 6px;
  transform: rotate(5deg);
  align-self: center;
  justify-self: center;
`;

const ProfileImg = styled.img`
  width: 100%;
  border-radius: 10%;
  height: auto;
  aspect-ratio: auto;
  object-fit: contain;
`;

export const Header = () => {
  const isMobile = useIsMobile();

  const description =
    "Hi!\n\nI’m currently studying and learning about DevOps, with a background in software development. Along the way I've realized that my passion lies in infrastructure and operations rather than solely development, hence my switch towards DevOps. I’m motivated, curious and thrive in collaborative environments. I love a challenge and always try to bring a good atmosphere to any group I’m a part of.\n\nI’m presently looking for a LIA position (think internship) for the period 2025-11-10 to 2026-04-26. If you or your company are looking for someone driven to learn, contribute and grow in the DevOps field, don’t hesitate to contact me!";

  if (isMobile) {
    return (
      <Container>
        <TopContainer>
          <div>
            <h1>Pontus Curtsson</h1>
            <h3>DevOps Engineer</h3>
          </div>
          <ImageContainer>
            <ProfileImg src={profileImg} />
          </ImageContainer>
        </TopContainer>

        <p className="description">{description}</p>
      </Container>
    );
  }

  return (
    <Container>
      <TextContent>
        <h1>Pontus Curtsson</h1>
        <h3>DevOps Engineer</h3>
        <p className="description">{description}</p>
      </TextContent>
      <ImageContainer>
        <ProfileImg src={profileImg} />
      </ImageContainer>
    </Container>
  );
};
