import styled from "styled-components";
import ProjectsCarrosel from "../../organism/ProjectsCarrosel";
import NavigationLink from "../../atoms/NavigationLink";

export interface ProjectsProps {}

const SessionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 85%;
  margin: auto;
  padding-top: 35vh;
  padding-bottom: 5vh;
`;

const AllProjects = styled.div`
  font-size: 1.5rem;
  text-align: right;
`;

const ProjectsCarroselBox = styled.div`
  max-height: 50vh;
`;

function ProjectsSession() {
  return (
    <SessionBox>
      <h1>Projects</h1>
      <ProjectsCarroselBox>
        <ProjectsCarrosel />
      </ProjectsCarroselBox>

      <AllProjects>
        <NavigationLink to={{ pathname: "/projects" }}>
          Todos os projetos
        </NavigationLink>
      </AllProjects>
    </SessionBox>
  );
}

export default ProjectsSession;
