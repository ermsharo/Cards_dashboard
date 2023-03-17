import styled from "styled-components";
import ContactForm from "../../UI/organism/ContactForm";

const SessionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 85%;
  margin: auto;
`;

function Contact() {
  return (
    <SessionBox>
      <h1>Contact</h1>
      <ContactForm />
    </SessionBox>
  );
}

export default Contact;
