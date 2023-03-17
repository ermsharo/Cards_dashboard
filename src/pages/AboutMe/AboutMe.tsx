import styled from "styled-components";

const SessionBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 85%;
  margin: auto;
`;

function AboutMe() {
  return (
    <SessionBox>
      <h1>About me</h1>
      <p>
        I'm Emilio Haro and I'm a highly motivated fullstack developer
        passionate about building amazing and innovative web solutions. With
        approximately 5 years of web program development experience, I have a
        deep understanding of design, UI, accessibility, and SEO principles.
      </p>
      <p>
        My passion for software development and teamwork skills have allowed me
        to collaborate with teams of designers, software engineers and product
        managers to create elegant, intuitive and optimized solutions. In
        addition, I have experience in developing program for different kind of
        users and work niches, always delivering products with quality, value,
        and security.
      </p>
      <p>
        I have a lot of experience in HTML, CSS, and JavaScript and a lot of
        experience with React.js and its ecosystem as my main frontend skills
        and with node, php and python to build solutions on the backend. In
        addition, I have solid skills in agile methodologies and project
        management, which allows me to work smart and efficiently.
      </p>
    </SessionBox>
  );
}

export default AboutMe;
