import React from "react";
import styled from "styled-components";
import TagImage from "../../atoms/TagImage";

export interface TagRenderProps {
  tags?: string;
}

const TagsBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const TagBox = styled.div`
  img {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

function TagRender({ tags }: TagRenderProps) {
  if (tags) {
    const tagsArray = tags.toString().split(",");

    console.log(tagsArray);
    if (tagsArray) {
      return (
        <TagsBox>
          {tagsArray.map((item, index) => {
            if(item.length !== 0){
                return (
                    <TagBox key={index}>
                      <TagImage tag={item} />
                    </TagBox>
                  );
            }
         
          })}
        </TagsBox>
      );
    }
  }
  return <></>;
}

export default TagRender;
