import { Routes, Route } from "react-router-dom";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import Fashion from "./pages/ItemDetail/Fashion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="fashion/:gender/:slug" element={<Fashion />} />
      </Route>
    </Routes>
  );
}

export default App;
