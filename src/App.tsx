import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import Footer from "./UI/molecules/Footer";

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
  ]);

  return (
    <>
      {" "}
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
