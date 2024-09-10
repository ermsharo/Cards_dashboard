import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsPropsPage from "../pages/CardPropsPage";
import styled from "styled-components";

const CardPage = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
`;

const CardsList = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Fetch data when component mounts or currentPage changes
    fetchCards(currentPage);
  }, [currentPage]);

  const fetchCards = async (page) => {
    try {
      const response = await axios.get("http://127.0.0.1:7000/cards", {
        params: {
          page: page,
          per_page: 1,
        },
      });

      // Update state with the fetched data
      setCards(response.data.cards);
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.pages);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleEditCard = async (cardId, updatedData) => {
    try {
      await axios.put(`http://127.0.0.1:7000/cards/${cardId}`, updatedData);
      fetchCards(currentPage); // Re-fetch the cards after successful update
    } catch (error) {
      console.error("Error editing card:", error);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      await axios.delete(`http://127.0.0.1:7000/cards/${cardId}`);
      fetchCards(currentPage); // Re-fetch the cards after successful deletion
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleApproveCard = async (cardId) => {
    try {
      await axios.post(`http://127.0.0.1:7000/cards/${cardId}/approve`);
      fetchCards(currentPage); // Re-fetch the cards after successful approval
    } catch (error) {
      console.error("Error approving card:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>New cards</h1>
      <h2> {currentPage} / {totalPages}</h2>
      <CardPage>
        <ButtonBox>
          {" "}
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
        </ButtonBox>
        <div>
          {" "}
          {cards.map((card) => (
            <div key={card.id}>
              {/* <strong>Name:</strong> {card.NAME} | <strong>ATK:</strong> {card.ATK} | <strong>DEF:</strong> {card.DEF} */}
              <CardsPropsPage card={card} />
            </div>
          ))}
        </div>
        <ButtonBox>
          {" "}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </ButtonBox>
      </CardPage>

      {/* <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default CardsList;
