import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ProjectRequests } from "../../services/ProjectsRequests";
import Loading from "../../UI/atoms/Loading";
import Header from "../../UI/molecules/Header";
import parse from "html-react-parser";


export interface ProjectsProps {}

const ProjectSesionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;

const SessionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 85%;
  margin: auto;
  min-height: (100vh - 3rem);
`;

const PageTitleInfo = styled.div`
  padding-top: 8rem;
`;

const ProjectCover = styled.div`
  padding: 2rem;
  img {
    width: 100%;
    height: auto;
  }
  margin-top: 6rem;
`;

function Project() {
  let { slug } = useParams();

  const [data, error, loading] = ProjectRequests();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (data) {
    let project = data.filter(
      (data: { projectSlug: string }) => data.projectSlug === slug
    );

    const renderObj = (value: string) => {
      console.log("value", value)
      if (value) return parse(value);
    };

    return (
      <>
        <Header />

        <SessionBox>
          <ProjectSesionBox>
            <ProjectCover>
              <img
                alt="smiling dog"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F40000%2Fvelka%2Fhappy-dog.jpg&f=1&nofb=1&ipt=084b8eed8486ce8fc2e2731be2fcd5abe698c8a6336de5f7fdf759bd57570f32&ipo=images"
              />
            </ProjectCover>
            <div>
              <PageTitleInfo>
                <h1>{renderObj(project[0]?.title)}</h1>
              </PageTitleInfo>
              <div>{renderObj(project[0]?.description)}</div>
              <a href="www.google.com">
                {renderObj(project[0]?.projectProdLink)}
              </a>
              <a href="www.google.com">
                {renderObj(project[0]?.projectRepoLink)}
              </a>
              <div>{renderObj(project[0]?.tags)}</div>
            </div>
          </ProjectSesionBox>
        </SessionBox>
      </>
    );
  }

  return <></>;
}

export default Project;
