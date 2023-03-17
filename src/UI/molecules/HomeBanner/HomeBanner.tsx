import styled from "styled-components";
import HomeLogo from "../../atoms/HomeLogo";

export interface HomeBannerProps {}

const HomeBannerBoxElements = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const HomeBannerBox = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 85%;
  margin: auto;
`;

const SessionTitle = styled.div`
  font-size: 3.5rem;
  padding: 1.5rem;
`;

const SessionSubtitle = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
`;

const InfoBox = styled.div``;

const BannerImage = styled.div``;

function HomeBanner() {
  return (
    <HomeBannerBox>
      <HomeBannerBoxElements>
        <InfoBox>
          <SessionTitle>
            <div>Hi I'm Emilio Haro </div>
            <div>Fullstack developer</div>
          </SessionTitle>
          <SessionSubtitle>
            <p>
              Desenvolvedor web, com experiência em desenvolvimento em
              aplicações de mensageria, produtos de logística, internet das
              coisas e em soluções tecnológicas para o setor de jornalismo.
            </p>
          </SessionSubtitle>
        </InfoBox>
        <BannerImage>
          <HomeLogo />
        </BannerImage>
      </HomeBannerBoxElements>
    </HomeBannerBox>
  );
}

export default HomeBanner;
