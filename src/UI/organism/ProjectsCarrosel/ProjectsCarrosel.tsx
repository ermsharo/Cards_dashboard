/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ProjectCard from "../../molecules/ProjectCard";
import styled from "styled-components";
import Loading from "../../atoms/Loading";
import { ProjectRequests } from "../../../services/ProjectsRequests";
import wpData from "../../../assets/staticData/data.json";
import Carousel from "nuka-carousel";

export interface ProjectsCarroselProps {}

const ProjectsBox = styled.div`
  padding: 1rem;
  margin: 1rem;
`;

const CarouselElement = styled.div`
  border: 3px solid blue;
  width: 100%;
  height: 100px;
  background-color: blue;
  text-align: center;
`;

export interface ProjectCardProps {
  tags?: string;
  projectSmallDescription: string;
  projectProdLink?: string;
  projectRepoLink?: string;
  projectSlug: string;
  title: string;
  description: string;
}

const formatData = (data: any) => {
  return data.map((item: object) => {
    return {
      title: findValueByKey(findValueByKey(item, "title"), "rendered"),
      description: findValueByKey(findValueByKey(item, "content"), "rendered"),
      projectSlug: findValueByKey(item, "slug"),
      projectRepoLink: findValueByKey(item, "productionlink"),
      projectProdLink: findValueByKey(item, "productionlink"),
      projectSmallDescription: findValueByKey(item, "small_description"),
      tags: findValueByKey(item, "tags"),
    };
  });
};

const findValueByKey: any = (obj: object, keyToFind: String) => {
  return (
    Object.entries(obj).reduce(
      (acc, [key, value]) =>
        key === keyToFind
          ? acc.concat(value)
          : typeof value === "object" && value
          ? acc.concat(findValueByKey(value, keyToFind))
          : acc,
      []
    )[0] || []
  );
};

function ProjectsCarrosel() {
  const data = formatData(wpData);
  const flickityOptions = {
    initialIndex: 2,
  };

  return (
    <>
      {" "}
      <ProjectsBox></ProjectsBox>
      <div>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}>Previous</button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}>Next</button>
          )}
        >
          {data.map((item: ProjectCardProps) => {
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
        </Carousel>
      </div>
    </>
  );
}

export default ProjectsCarrosel;
