import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../../../styles/generalStyles";
import TagRender from "../TagRender";

export interface ProjectCardProps {
  tags?: string;
  projectSmallDescription: string;
  projectProdLink?: string;
  projectRepoLink?: string;
  title: string;
  description: string;
  slug: string;
}

const ProjectCardImage = styled.div`
  img {
    width: 100%;
    margin: auto;
    height: auto;
    border-radius: 15px;
  }
`;

const ProjectCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;

const ProjectCardBox = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`;

const CardPadding = styled.div`
  padding: 1rem;
`;

const ProjectCardTitle = styled.div``;

const ProjectCardDescription = styled.div``;

const ProjectCardTags = styled.div``;

function ProjectCard({
  tags,
  projectSmallDescription,
  projectProdLink,
  projectRepoLink,
  title,
  description,
  slug,
}: ProjectCardProps) {
  return (
    <CardPadding>
      <Box>
        <ProjectCardBox>
          <div>
            <Link to={{ pathname: `/project/${slug}` }}>
              <ProjectCardImage>
                <img
                  alt="logo of a guy hugging a coffee cup"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F40000%2Fvelka%2Fhappy-dog.jpg&f=1&nofb=1&ipt=084b8eed8486ce8fc2e2731be2fcd5abe698c8a6336de5f7fdf759bd57570f32&ipo=images"
                />
              </ProjectCardImage>
            </Link>
          </div>
          <ProjectCardInfo>
            <ProjectCardTitle>{title}</ProjectCardTitle>
            <ProjectCardDescription>
              {projectSmallDescription}
            </ProjectCardDescription>
            <ProjectCardDescription>{slug}</ProjectCardDescription>
            <ProjectCardTags><TagRender tags ={tags}/></ProjectCardTags>
          </ProjectCardInfo>
        </ProjectCardBox>
      </Box>
    </CardPadding>
  );
}

export default ProjectCard;
