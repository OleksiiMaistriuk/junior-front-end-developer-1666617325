import { Route, Routes } from "react-router";
// import { BusinessContext } from "./components/main/context/businessContext/BusinessContext.jsx";
import { MainContainer } from "./components/main/MainContainer";
import { ErrorPage } from "./ErrorPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainContainer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
