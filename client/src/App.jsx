import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Register } from "./pages";
export default function App() {
  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
