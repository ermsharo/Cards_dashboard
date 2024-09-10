import { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Make sure to import axios
import CardsStructure from "../components/CardStructure";

const PageBox = styled.div`
  width: 70vw;
  margin: auto;
`;

const PageEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
`;

const CardBox = styled.div`
  padding-left: 25%;
`;

const PropsBox = styled.div`
  form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    font-size: 1rem;
    padding: 1rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-size: 1rem;
  }
`;

const Label = styled.div``;

function CardsPropsPage({ card, fetchCards, currentPage }) {
  const [name, setName] = useState(card.NAME);
  const [category, setCategory] = useState(card.CATEGORY);
  const [price, setPrice] = useState(card.PRICE || 4);
  const [atk, setAtk] = useState(card.ATK);
  const [def, setDef] = useState(card.DEF);

  const handleEditCard = async (cardId, updatedData) => {
    try {
      await axios.put(`http://127.0.0.1:7000/cards/${cardId}`, updatedData);
      fetchCards(currentPage); // Refresh cards after edit
    } catch (error) {
      console.error("Error editing card:", error);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      await axios.delete(`http://127.0.0.1:7000/cards/${cardId}`);
      fetchCards(currentPage); // Refresh cards after delete
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleApproveCard = async (cardId) => {
    try {
      await axios.post(`http://127.0.0.1:7000/cards/${cardId}/approve`);
      fetchCards(currentPage); // Refresh cards after approval
    } catch (error) {
      console.error("Error approving card:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCardData = {
      NAME: name,
      CATEGORY: category,
      PRICE: price,
      ATK: atk,
      DEF: def
    };
    handleEditCard(card.id, updatedCardData); // Call the edit function with updated data
  };

  return (
    <PageBox>
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

              <button type="submit">Edit</button>
            </form>
            <button onClick={() => handleApproveCard(card.id)}>Approve</button>
            <button onClick={(e) => {
              e.preventDefault(); // Prevent form submission
              handleDeleteCard(card.id);
            }}>Delete</button>
          </div>
        </PropsBox>
      </PageEditor>
    </PageBox>
  );
}

export default CardsPropsPage;
