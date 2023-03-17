import GlobalStyle from "./styles/globalStyles";
import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./UI/molecules/Footer";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import styled from "styled-components";

const ProjectPage = styled.div`
  min-height: calc(100vh - 4rem);
`;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/project/:slug",
      element: <Project />,
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Emilio Haro</title>
        <link rel="icon" href="https://i.stack.imgur.com/bJ120.png" />
        <meta name="description" content="Emilio Haro portifolio" />
        <link
          rel="apple-touch-icon"
          href="https://i.stack.imgur.com/bJ120.png"
        />
      </Helmet>
      <ProjectPage>
        {" "}
        <RouterProvider router={router} />
      </ProjectPage>

      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
