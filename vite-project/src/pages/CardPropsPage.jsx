import { useState } from "react";
import styled from "styled-components";
import CardsStructure from "../components/CardStructure";

const PageBox = styled.div`
  width: 75vw;
  margin: auto;
`;

const PageEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
`;

const CardBox = styled.div``;

const PropsBox = styled.div`
  form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    font-size: 1rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: none; 
    font-size: 1rem;
  }
`;

const Label = styled.div``;

function CardsPropsPage({ card }) {
  const [name, setName] = useState(card.NAME);
  const [category, setCategory] = useState(card.CATEGORY);
  const [price, setPrice] = useState(card.PRICE || 4);
  const [atk, setAtk] = useState(card.ATK);
  const [def, setDef] = useState(card.DEF);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nCategory: ${category}\nPrice: ${price}\nATK: ${atk}\nDEF: ${def}`);
  };

  return (
    <PageBox>
      <h1>Cards Props Page</h1>
      <PageEditor>
        <CardBox>
          <CardsStructure card={card} name={name} category={category} price={price} atk={atk} def={def} />
        </CardBox>
        <PropsBox>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name:</Label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter card name"
                />
              </div>
              <div>
                <Label htmlFor="category">Category:</Label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter card category"
                />
              </div>
              <div>
                <Label htmlFor="price">Price:</Label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  min="0"
                  placeholder="Enter card price"
                />
              </div>
              <div>
                <Label htmlFor="atk">ATK:</Label>
                <input
                  type="number"
                  id="atk"
                  value={atk}
                  onChange={(e) => setAtk(e.target.value)}
                  min="0"
                  placeholder="Enter ATK value"
                />
              </div>
              <div>
                <Label htmlFor="def">DEF:</Label>
                <input
                  type="number"
                  id="def"
                  value={def}
                  onChange={(e) => setDef(e.target.value)}
                  min="0"
                  placeholder="Enter DEF value"
                />
              </div>
  
              <button>Edit</button>
              <button>Aprove</button>
              <button>Delete</button>
            </form>
          </div>
        </PropsBox>
      </PageEditor>
    </PageBox>
  );
}

export default CardsPropsPage;
