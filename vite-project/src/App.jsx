import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardsPropsPage from './pages/CardPropsPage'
import CardsList from './components/cardList'
import styled from "styled-components";

const Header = styled.div`
  background-color: black;

  display: flex;
  color:white; 
  gap: 1rem; 
  img{
    width: 60px;
    padding: 1rem; 
  }
  span{
    padding-top: 2rem;
    font-size: 1.2rem;
  }

`;


const Page = styled.div`
 margin: auto;
 width: 80vw;
 display: flex; 
 justify-content: center;
`;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <CardsPropsPage/> */}
<Header>
  <div> <img src = "https://cdn.lospec.com/thumbnails/gallery/diego-fung/tarot-card-major-arcana-xvi-the-tower-golb-default.png"></img></div> <span>New cards</span>  <span>Aproved cards</span>
</Header>
<Page><CardsList/></Page>

    </>
  )
}

export default App
