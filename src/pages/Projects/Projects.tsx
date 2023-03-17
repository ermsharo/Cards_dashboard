import styled from "styled-components";
import { ProjectRequests } from "../../services/ProjectsRequests";
import Loading from "../../UI/atoms/Loading";
import Header from "../../UI/molecules/Header";
import ProjectCard from "../../UI/molecules/ProjectCard";
export interface ProjectsProps {}

const ProjectsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 6rem;
`;

const SessionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 85%;
  margin: auto;
`;

const PageTitleInfo = styled.div`
  padding-top: 6rem;
  width: 85%;
  margin: auto;
`;

export interface HeaderProps {
  tags: string;
  projectSmallDescription: string;
  projectProdLink: string;
  projectRepoLink: string;
  title: string;
  description: string;
  slug: string;
  projectSlug: string;
}

function Projects() {
  const [data, error, loading] = ProjectRequests();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div></div>;
  }

  return (
    <>
      <Header />
      <PageTitleInfo>
        {" "}
        <h1>Projects</h1>
      </PageTitleInfo>
      <SessionBox>
        <ProjectsBox>
          {data.map((item: HeaderProps) => {
            console.log("Item: " + item);
            return (
              <ProjectCard
                tags={item.tags}
                projectSmallDescription={item.projectSmallDescription}
                projectProdLink={item.projectProdLink}
                projectRepoLink={item.projectRepoLink}
                title={item.title}
                description={item.description}
                slug={item.projectSlug}
              />
            );
          })}
        </ProjectsBox>
      </SessionBox>
    </>
  );
}

export default Projects;
