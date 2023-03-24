import React from "react";
import styled from "styled-components";
const CardName = styled.div`
  background-color: white;
  color: black;
  font-family: "Yeseva One", cursive;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 3.5rem;
  text-align: center;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 0.5rem solid black;
  margin-bottom: calc(46vw * 0.02);
  text-overflow: ellipsis;

  background-color: #d3c390;
  background-image: url("https://i.ibb.co/HYYS0fF/noise-hex-d3c390-t50-t-S7-b-W0-m-B-mu1-5-st5-7064a5e0643fb4eb360f3e1edcb15ed9.png");
`;

const CardStruct = styled.div`
  background-color: #e1b75b;
  padding: 5%;
  background-image: url("https://i.ibb.co/r34cCD8/noise-hex-e1b75b-t50-t-S7-b-W0-m-B-mu1-5-st5-ffbdccc6aabd22eba1abbb61200e511e.png");
  border-radius: 2rem;
  border: 1rem solid black;
  color: black;
  aspect-ratio: 3/4;
`;

const CardImage = styled.div`
  width: 91%;

  margin: auto;
  img {
    border-radius: 1rem 1rem 0px 0px;
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  background-color: #d7d4ca;
  width: 88%;
  margin: auto;
  margin-top: -0.6vw;
  background-image: url("https://i.postimg.cc/Prwt8nTK/noise-hex-d7d4ca-t50-t-S7-b-W0-m-B-mu1-5-st5-35d14bf23c1fd498fb8f7716d9fdaf04.png");

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
  image: string[];
  type: string;
  description: string;
  atk: string;
  def: string;
}

function Card({ name, type, description, atk, def }: CardProps) {
  const domEl = React.useRef<HTMLDivElement>(null);
  return (
    <div>


      <DownloadRef id="domEl" ref={domEl}>
        <CardStruct>
          <CardName>
            <div>{name}</div>
          </CardName>
          <CardImage>
            <img
              alt={description}
              src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            />
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
