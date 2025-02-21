import { Route, Routes } from "react-router";
import ListProduct from "./components/admin/ListProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
