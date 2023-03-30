import React from "react";
import styled from "styled-components";
const CardName = styled.div`
  background-color: white;
  color: black;
  font-family: "Yeseva One", cursive;
  font-weight: bold;
  font-size: 0.8em;
  padding: 0.5em;
  text-align: center;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 0.2em solid black;
  text-overflow: ellipsis;
  margin-bottom: 0.7em;
  background-color: #d3c390;
  background-image: url("https://i.ibb.co/HYYS0fF/noise-hex-d3c390-t50-t-S7-b-W0-m-B-mu1-5-st5-7064a5e0643fb4eb360f3e1edcb15ed9.png");
`;

const CardStruct = styled.div`
  background-color: #e1b75b;
  padding: 5%;
  background-image: url("https://i.ibb.co/r34cCD8/noise-hex-e1b75b-t50-t-S7-b-W0-m-B-mu1-5-st5-ffbdccc6aabd22eba1abbb61200e511e.png");
  border-radius: 7.5%;
  border: 0.5vw solid black;
  color: black;
  font-size: 1.5vw;
  aspect-ratio: 3/4;
`;

const CardImage = styled.div`
  width: 91%;

  margin: auto;
  img {
    border-radius: 1em 1em 0px 0px;
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  background-color: #d7d4ca;
  width: 88%;
  margin: auto;
  margin-top: -0.6em;
  background-image: url("https://i.postimg.cc/Prwt8nTK/noise-hex-d7d4ca-t50-t-S7-b-W0-m-B-mu1-5-st5-35d14bf23c1fd498fb8f7716d9fdaf04.png");
  font-size: 0.6em;
  border-radius: 0px 0px 10px 10px;
  padding: 2%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-overflow: ellipsis;
`;

const DescriptionText = styled.div`
  padding: 2%;

  font-family: "Merriweather", serif;
  text-overflow: ellipsis;
`;

const DescriptionType = styled.div`
  padding: 0.5%;
`;

const CardAttributes = styled.div`
  padding: 0.6%;

  text-align: right;
`;

const DownloadRef = styled.div``;
export interface CardProps {
  name: string;
  image: string;
  type: string;
  description: string;
  visualDescription: string;

  atk: string;
  def: string;
}

function Card({
  name,
  type,
  image,
  description,
  visualDescription,
  atk,
  def,
}: CardProps) {
  const domEl = React.useRef<HTMLDivElement>(null);
  return (
    <div>
      <DownloadRef id="domEl" ref={domEl}>
        <CardStruct>
          <CardName>
            <div>{name}</div>
          </CardName>
          <CardImage>
            <img alt={visualDescription} src={image} />
          </CardImage>
          <Description>
            <DescriptionText>
              <div>
                <DescriptionType>
                  <strong>[ {type} ]</strong>
                </DescriptionType>
              </div>
              <div>{description}</div>
            </DescriptionText>
            <CardAttributes>
              {" "}
              <strong>
                Atk:{atk}/Def:{def}
              </strong>
            </CardAttributes>
          </Description>
        </CardStruct>
      </DownloadRef>
    </div>
  );
}

export default Card;
