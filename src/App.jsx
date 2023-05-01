import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import Page from "./pages/Page/Page";
import NotFound from "./pages/NotFound/NotFound";
import NavigationLayout from "./components/NavigationLayout/NavigationLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/page" element={<NavigationLayout />}>
          <Route index element={<Page />} />
          <Route path=":id" element={<Page />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
