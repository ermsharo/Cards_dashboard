import React from "react";
import ReactMarkdown from "react-markdown";

export interface MarkDownProps {
  content: string;
}

function Markdown({ content }: MarkDownProps) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default Markdown;
