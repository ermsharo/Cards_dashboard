import React from "react";

export interface TagImageProps {
  tag: string;
}

function TagImage({ tag }: TagImageProps) {
  const url = `https://img.shields.io/badge/${tag}-12100E?style=for-the-badge&logo=${tag}`;
  return <img src={url} />;
}

export default TagImage;
