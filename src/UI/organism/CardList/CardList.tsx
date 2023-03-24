import React from "react";
import styled from "styled-components";

import Card from "../../molecules/Card";

const DisplayPage = styled.div`
  display: grid;
  width: 70vw;
  margin: auto;
  grid-template-columns: 40% 65%;
  padding-top: 6rem;
`;
const Page = styled.div`
display :flex; 
`;
const IndicatorButton = styled.div`
 display: flex; 
 flex-direction: column; 
 justify-content: center;
 width:4rem; 

`;



const ButtonBox = styled.div`
 display: flex; 
 flex-direction: column;

 justify-content: center ;
 gap : 1rem; 
 padding: 2rem;
 font-size:1.5rem;
`;

const ButtonList = styled.div`
 display: flex; 
 flex-direction: column;

 justify-content: space-between;
 gap : 1rem; 
 padding: 2rem;
 font-size:1.5rem;
`;
export interface CardListProps {}

let defaultObj = {
  NAME: "Boots of Speedful Haste",
  DESCRIPTION:
    "These magical boots allow the wearer to move with incredible speed.",
  CLASS: "Equipment",
  EFFECT: "The wearer gains a +2 bonus to their movement speed.",
  VISUAL_DESCRIPTION:
    "The boots are made of a deep brown leather and have a silver buckle. They have a magical aura that glows a bright blue when in use.",
  ATK: "8",
  DEF: "4",
  TYPE: "Common",
  IA_MODEL: "text-davinci-003",
  CATEGORY: "defense_item",
  BAD_IMAGE: [],
  GOOD_IMAGE: [],
};

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

function CardList({}: CardListProps) {
  return (
    <Page>
        <IndicatorButton></IndicatorButton>
<DisplayPage>
      <div>
        <Card
          name={defaultObj.NAME}
          image={defaultObj.BAD_IMAGE}
          type={defaultObj.TYPE}
          description={defaultObj.DESCRIPTION}
          atk={defaultObj.ATK}
          def={defaultObj.DEF}
        />
      </div>
      <ButtonBox>
        <ButtonList>
        <Button>Send to waiting list</Button>
        <Button>Delete card</Button>
        
        </ButtonList>

      </ButtonBox>
    </DisplayPage>
    <IndicatorButton></IndicatorButton>
    </Page>
    
  );
}

export default CardList;
