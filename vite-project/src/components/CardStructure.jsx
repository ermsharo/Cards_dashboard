import { useState } from 'react'
import styled from 'styled-components'

import cardImage from '../assets/Card_mockup.png'
const CardLayers = styled.div`
width: 400px;
aspect-ratio: 3/4;

position: relative;
height: 505px;
`


const BackLayer = styled.div`
img{
  width: 400px;
  
  position: relative;
  top: 0;


}

`

const FrontLayer = styled.div`


margin:2px solid red; 

z-index: 2;
position: relative;
top:-510px;



display: grid;

grid-template-rows: 10% 10% 20% 60%;

`


const CardTitle = styled.div`
font-size : 2rem;
text-align: center;
height: 55px;
padding: 16px;
position: relative;
top:10px;
color: black;
font-family: "Pixelify Sans", sans-serif;
  font-optical-sizing: auto;
  line-height: 4rem;
  font-style: normal;




`
const CardImage = styled.div`

img{
width: 50%;
margin-left:25%;
}
height: 200px;
position: relative;
top: 60px; 




`

const CardDescription = styled.div`
color: white;
font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  padding: 0rem 2.6rem;
  font-size: 1rem;
  position: relative;
  top: 230px;
  height: 70px;



`

const CardInfo = styled.div`
display: grid;
grid-template-columns: 110px 80px 76px 80px 20px;
height: 50px;
font-family: "Pixelify Sans", sans-serif;
  font-style: normal;
  font-size: 2rem;
  text-align: center;
position: relative;
top:265px;

`

const CardInfoProps = styled.div`


`
function CardsStructure() {


  return (

    <CardLayers>
      <BackLayer>

      <img src = {cardImage}></img>
      </BackLayer>
      <FrontLayer>
<CardTitle> Blue eyes dragon</CardTitle>
<CardImage><img src = "https://pics.craiyon.com/2023-10-25/5be47098b5b549559393c8f994c659c0.webp"></img></CardImage>
<CardDescription>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</CardDescription>
<CardInfo>
<div>  </div> <CardInfoProps> 10 </CardInfoProps> <div></div> <CardInfoProps>4</CardInfoProps><div></div>
</CardInfo>


      </FrontLayer>

    </CardLayers>)
}

export default CardsStructure
