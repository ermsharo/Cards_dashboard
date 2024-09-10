import { useState } from "react";
import styled from "styled-components";

import cardImage from "../assets/ImageGap.png";
const CardLayers = styled.div`
  width: 400px;
  aspect-ratio: 3/4;

  position: relative;
  height: 505px;
`;

const BackLayer = styled.div`
  img {
    width: 400px;

    position: relative;
    top: 0;
  }
`;

const FrontLayer = styled.div`
  margin: 2px solid red;

  z-index: 2;
  position: relative;
  top: -510px;

  display: grid;

  grid-template-rows: 10% 10% 20% 60%;
`;

const CardTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  height: 55px;
  padding: 16px;
  position: relative;
  top: 10px;
  color: black;
  font-family: "Pixelify Sans", sans-serif;
  font-optical-sizing: auto;
  line-height: 4rem;
  font-style: normal;
`;
const CardImage = styled.div`
  img {
    width: 50%;
    margin-left: 25%;
  }
  height: 200px;
  position: relative;
  top: 60px;
`;

const CardDescription = styled.div`
  color: white;
  font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  padding: 0rem 2.6rem;
  font-size: 1rem;
  position: relative;
  top: 230px;
  height: 70px;
`;

const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 110px 80px 76px 80px 20px;
  height: 50px;
  font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  font-size: 2rem;
  text-align: center;
  position: relative;
  top: 265px;
`;

const CardInfoProps = styled.div``;

const CardBoxContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const CardBoxBackground = styled.div`
  width: 100px;
  height: 100px;
  position: absolute; /* Allows stacking */
  top: 0;
  left: 0;

  z-index: 1; /* Lowest z-index */
  padding-top: 20px;

  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
  }
`;

const CardBoxLayout = styled.div`
  width: 100px;
  height: 100px;
  position: absolute; /* Allows stacking */
  top: 0;
  left: 0;
  /* background-color: green; */
  z-index: 2; /* Lowest z-index */
  img {
    width: 350px;
    filter: drop-shadow(rgba(99, 99, 99, 1.2) 2px 2px 8px 2px);
    box-shadow: 
  }
`;

const CardBoxInfoTitle = styled.div`
  width: 300px;
  height: 55px;
  position: absolute; /* Allows stacking */
  top: 205px;
  left: 25px;
  /* background-color: blue; */
  text-align: center;
  line-height: 55px;
  font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  font-size: 1.1rem;
  z-index: 3; /* Lowest z-index */
  color: black;
`;

const CardBoxInfoCategory = styled.div`
  width: 150px;
  height: 35px;
  position: absolute; /* Allows stacking */
  top: 275px;
  left: 32px;

  font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  font-size: 1rem;
  line-height: 35px;
  text-align: center;
  color: black;
  z-index: 4; /* Lowest z-index */
`;


const CardBoxInfoPrice = styled.div`
  width: 80px;
  height: 80px;
  position: absolute; /* Allows stacking */
  top: 340px;
  left: 105px;
  /* background-color: blue; */
  font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  font-size: 2.5rem;
  text-align: center;
  line-height: 80px;
  text-align: center;
  color: white;
  z-index: 5; /* Lowest z-index */
`;


const CardBoxInfoATK = styled.div`
  width: 60px;
  height: 60px;
  position: absolute; /* Allows stacking */
  top: 290px;
  left: 265px;
  /* background-color: RED; */
  font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  font-size: 2.2rem;
  text-align: center;
  line-height: 60px;
  text-align: center;
  color: white;
  z-index: 6; /* Lowest z-index */
`;


const CardBoxInfoDEF = styled.div`
  width: 60px;
  height: 60px;
  position: absolute; /* Allows stacking */
  top: 350px;
  left: 265px;
  /* background-color: BLUE; */
  font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  font-size: 2.2rem;
  text-align: center;
  line-height: 60px;
  text-align: center;
  color: white;
  z-index: 6; /* Lowest z-index */
`;
function transformToThumbnailLink(downloadUrl, size = "w1000") {
  // Check if the input matches the expected format
  const match = downloadUrl.match(/id=([\w-]+)/);

  if (match && match[1]) {
    // Extract the file ID from the original URL
    const fileId = match[1];

    // Create the new thumbnail link with the desired size
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
  }

  // If the input URL is not valid, return null or an error message
  return null;
}

function CardsStructure({ card, name,category,price, atk, def}) {
  console.log("card", card);
  return (
    <CardBoxContainer>
      <CardBoxBackground>
        {(card?.CARD_IMAGES?.[0]["image_url"]) ?    <img
          src={transformToThumbnailLink(card?.CARD_IMAGES?.[0]["image_url"])}
        />  : <img
        src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBO_iqtvVPguDCw0JN-YjUVtMHA3Zj1gVYQ&s"
      />}
    
      </CardBoxBackground>
      <CardBoxLayout>
        <img src={cardImage}></img>
      </CardBoxLayout>
      <CardBoxInfoTitle>{name}</CardBoxInfoTitle>
      <CardBoxInfoCategory>{category}</CardBoxInfoCategory>
      <CardBoxInfoPrice>{price}</CardBoxInfoPrice>
      <CardBoxInfoATK>{atk}</CardBoxInfoATK>
      <CardBoxInfoDEF>{def}</CardBoxInfoDEF>
    </CardBoxContainer>
  );
  //     <CardLayers>
  //       <BackLayer>
  //       <img src = {cardImage}></img>
  //       </BackLayer>
  //       <FrontLayer>
  // <CardTitle> {card.NAME}</CardTitle>
  // <CardImage><img src = {transformToThumbnailLink(card?.CARD_IMAGES?.[0]['image_url'])}></img></CardImage>
  // <CardDescription>{card.DESCRIPTION}</CardDescription>
  // <CardInfo>
  // <div>  </div> <CardInfoProps> {card.ATK} </CardInfoProps> <div></div> <CardInfoProps>{card.DEF}</CardInfoProps><div></div>
  // </CardInfo>

  //       </FrontLayer>

  //     </CardLayers>)
}

export default CardsStructure;
