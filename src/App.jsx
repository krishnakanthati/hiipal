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
import Profile from "./pages/Profile/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";
import AuthProvider from "./utils/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/search" element={<Search />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/notifications" element={<Notifications />} />
          <Route path="/message" element={<Message />} />

          <Route path="/transaction" element={<Transaction />} />

          <Route path="/features" element={<Features />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/page" element={<NavigationLayout />}>
            <Route index element={<Page />} />
            <Route path=":id" element={<Page />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
