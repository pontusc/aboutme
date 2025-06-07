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
    "I'm a DevOps Engineer who believes the best technology emerges from great teamwork and continuous learning. With a diverse background spanning VR development to Kubernetes orchestration, I bring both technical expertise and a collaborative mindset to every challenge. Currently deepening my knowledge through formal DevOps studies while experimenting with cutting-edge tools in my personal homelab. \n\nI'm passionate about creating reliable, scalable solutions and thrive in environments where I can both contribute meaningfully and grow alongside innovative teams.";

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
