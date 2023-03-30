import GlobalStyle from "./styles/globalStyles";
import { Helmet } from "react-helmet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./UI/molecules/Footer";
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
      path: "/deleted",
      element: <Home />,
    },
    {
      path: "/revision",
      element: <Home />,
    },
    {
      path: "/done",
      element: <Home />,
    },
    {
      path: "/validate",
      element: <Home />,
    },
  ]);

  return (
    <>
      <Helmet>
        <title>TCG</title>
        <link rel="icon" href="https://i.stack.imgur.com/bJ120.png" />
        <meta name="description" content="TCG DASHBOARD" />
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
