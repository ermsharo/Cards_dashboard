/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// import { AppState } from "../../../redux/store";
// import { CardsRequests } from "../../../services/CardsRequests";
import useAxios from "../../../services/CardsRequests";
import Loading from "../../atoms/Loading";
import Card from "../../molecules/Card";

const DisplayPage = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;
const Page = styled.div`

  width: 60vw;
  margin: auto;
`;

const DisplayCard = styled.div`
display: inline-block;
max-height: 60vh;
width: 45vh; 
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

interface CardData {
  ATK: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  CATEGORY: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  IA_MODEL: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  VISUAL_DESCRIPTION: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  TYPE: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  CLASS: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  EFFECT: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  BAD_IMAGE: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  GOOD_IMAGE: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  ID: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  "Created time": {
    page_id: string;
    property_type: string;
    property_value: null;
  };
  DESCRIPTION: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  STATUS: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  DEF: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
  NAME: {
    page_id: string;
    property_type: string;
    property_value: string;
  };
}

function CardList({}: CardListProps) {
  const { data, error, isLoading, refetch } = useAxios<any>({
    url: `http://localhost:5000/TCG/new-card`,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSubmit = (): void => {
  
    refetch(); // trigger a refetch of the data
  };

  if (data != null) {
    const {
      ATK,
      CATEGORY,
      IA_MODEL,
      VISUAL_DESCRIPTION,
      TYPE,
      CLASS,
      EFFECT,
      BAD_IMAGE,
      GOOD_IMAGE,
      ID,
      DESCRIPTION,
      STATUS,
      DEF,
      NAME,
    } = data;

  
    return (
      <Page>
        <PageTitle>Triagem</PageTitle>
        <DisplayPage>
          <DisplayCard>
            <Card
                name={NAME.property_value}
                image={BAD_IMAGE.property_value}
                type={TYPE.property_value}
                visualDescription={VISUAL_DESCRIPTION.property_value}
                description={DESCRIPTION.property_value}
                atk={ATK.property_value}
                def={DEF.property_value}
              />
            <IconButtonLine>
              <IconButton
                  onClick={() => {
                    refetch();
                  }}
                >
                  Save
                </IconButton>
                <IconButton
                  onClick={() => {
                    // setCardObj(generateObj(PAGE_ID, "DELETED"));
                  }}
                >
                  Delete
                </IconButton>
            </IconButtonLine>
          </DisplayCard>
        </DisplayPage>
      </Page>
    );

}

return(<>varios nadas</>)
}
export default CardList;
