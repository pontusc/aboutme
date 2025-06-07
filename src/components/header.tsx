import profileImg from "../assets/profile_picture.jpg";
import styled from "styled-components";
import useIsMobile from "../utils";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

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
      <div>
        <h1>Pontus Curtsson</h1>
        <h3>DevOps Engineer</h3>
        <p className="description">{description}</p>
      </div>
      <ImageContainer>
        <ProfileImg src={profileImg} />
      </ImageContainer>
    </Container>
  );
};
