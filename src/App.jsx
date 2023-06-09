import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Features from "./pages/Features/Features";
import Page from "./pages/Page/Page";
import NotFound from "./pages/NotFound/NotFound";
import NavigationLayout from "./components/NavigationLayout/NavigationLayout";
import Search from "./pages/Search/Search";
import Notifications from "./pages/Notifications/Notifications";
import Message from "./pages/Message/Message";
import Transaction from "./pages/Transaction/Transaction";
import Signup from "./pages/Login/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/message" element={<Message />} />
        <Route path="/transaction" element={<Transaction />} />
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
