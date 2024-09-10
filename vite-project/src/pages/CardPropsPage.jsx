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
    font-size: 2rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
  }
`;

const Label = styled.div``;

function CardsPropsPage({card}) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nMessage: ${message}\nSelected Option: ${option}`);
  };
  return (
    <PageBox>
      <h1>Cards props page</h1>
      <PageEditor>
        <CardBox>
          <CardsStructure  card={card} />
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
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <Label htmlFor="message">Message:</Label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                />
              </div>

              <div>
                <Label htmlFor="option">Choose an option:</Label>
                <select
                  id="option"
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
                >
                  <option value="">--Select an option--</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </PropsBox>
      </PageEditor>
    </PageBox>
  );
}

export default CardsPropsPage;
