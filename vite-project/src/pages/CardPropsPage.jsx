import { useState } from 'react'
import styled from 'styled-components'
import CardsStructure from '../components/CardStructure'


const PageBox = styled.div`
width: 75vw;
margin: auto;
`


const PageEditor = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
width: 100%;

`

const CardBox = styled.div`



`

const PropsBox = styled.div`


`

function CardsPropsPage() {
  const [count, setCount] = useState(0)

  return (
    <PageBox>
 <h1>Cards props page</h1>
 <PageEditor>
<CardBox><CardsStructure/></CardBox>
<PropsBox>
    Props here
</PropsBox>


 </PageEditor>
    </PageBox>
  )
}

export default CardsPropsPage
