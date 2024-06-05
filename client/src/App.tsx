import "./App.sass";

import { Routes, Route } from "react-router-dom";

import CatalogPage from "./pages/CatalogPage/CatalogPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

import Layout from "./components/Layout/Layout";
import PromotionsPage from "./pages/PromotionsPage/PromotionsPage";
import BarInfoPage from "./pages/BarInfoPage/BarInfoPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="promotions" element={<PromotionsPage />} />
          <Route path="info/:flavor" element={<BarInfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
