import React from "react";
import styled from "styled-components";
import { CardsRequests } from "../../../services/CardsRequests";

import Card from "../../molecules/Card";

const DisplayPage = styled.div`
  display: grid;

  grid-template-columns: 1fr ;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;
const Page = styled.div`
  padding-top: 6rem;
  width: 60vw;
  margin: auto;
`;

const DisplayCard = styled.div`

  width: 35%;
  margin: auto;
`;

const PageTitle = styled.div`
  font-size: 2rem;
  padding: 1rem;
`;

export interface CardListProps {}

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: darkblue;
  color: white;
  width: calc(100%);
  height: 3rem;
  margin: auto;

  margin-bottom: 2rem;
  &:hover {
  }
`;

export const IconButtonLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  padding: 0.5em;
  gap: 1em;
`;
export const IconButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: darkblue;
  color: white;
  width: calc(100%);
  height: 3rem;
  margin: auto;

  margin-bottom: 2rem;
  &:hover {
  }
`;

function CardList({}: CardListProps) {
  const [data, error, loading] = CardsRequests();

  if (error) {
    return <div>error</div>;
  }
  if (data["new_card"] !== undefined) {
    const { NAME, BAD_IMAGE, TYPE, VISUAL_DESCRIPTION, DESCRIPTION, ATK, DEF } =
      data["new_card"];

    return (
      <Page>
        <PageTitle>New cards</PageTitle>
        <DisplayPage>
          <DisplayCard>
            <Card
              name={NAME}
              image={BAD_IMAGE}
              type={TYPE}
              visualDescription={VISUAL_DESCRIPTION}
              description={DESCRIPTION}
              atk={ATK}
              def={DEF}
            />
            <IconButtonLine>
              <IconButton>Save</IconButton>
              <IconButton>Delete</IconButton>
            </IconButtonLine>
          </DisplayCard>
        </DisplayPage>
      </Page>
    );
  }

  return <div>loading</div>;
}

export default CardList;
