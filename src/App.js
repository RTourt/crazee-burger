import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import { Route, Routes } from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/order/:username" element={<OrderPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
